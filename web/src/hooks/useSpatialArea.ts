import { useCallback, useState, useRef, useEffect } from "react";

import { isObject } from "../utils/types";
import { useRoomData, useBroadcastData } from "./useRoom";

export type AvatarData = {
  position: [number, number, number];
};

const isAvatarData = (x: unknown): x is AvatarData => {
  try {
    const obj = x as AvatarData;
    if (
      typeof obj.position[0] !== "number" ||
      typeof obj.position[1] !== "number" ||
      typeof obj.position[2] !== "number"
    ) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

export type AvatarMap = {
  [userId: string]: AvatarData;
};

type SpatialAreaData =
  | {
      spatialArea: "init";
    }
  | {
      spatialArea: "avatar";
      userId: string;
      avatarData: AvatarData;
    };

const isSpatialAreaData = (x: unknown): x is SpatialAreaData =>
  isObject(x) &&
  ((x as { spatialArea: unknown }).spatialArea === "init" ||
    ((x as { spatialArea: unknown }).spatialArea === "avatar" &&
      isAvatarData((x as { avatarData: unknown }).avatarData)));

export const useSpatialArea = (roomId: string, userId: string) => {
  const [avatarMap, setAvatarMap] = useState<AvatarMap>({});
  const [myAvatar, setMyAvatar] = useState<AvatarData>();
  const lastMyAvatarRef = useRef<AvatarData>();
  useEffect(() => {
    lastMyAvatarRef.current = myAvatar;
  }, [myAvatar]);

  const broadcastData = useBroadcastData(roomId, userId);
  const dataToBroadcast = useRef<SpatialAreaData>();
  useEffect(() => {
    if (!myAvatar) return;
    const data: SpatialAreaData = {
      spatialArea: "avatar",
      userId,
      avatarData: myAvatar,
    };
    if (dataToBroadcast.current) {
      dataToBroadcast.current = data;
    } else {
      dataToBroadcast.current = data;
      setTimeout(() => {
        broadcastData(dataToBroadcast.current);
        dataToBroadcast.current = undefined;
      }, 200);
    }
  }, [broadcastData, userId, myAvatar]);

  useRoomData(
    roomId,
    userId,
    useCallback(
      (data) => {
        if (!isSpatialAreaData(data)) return;
        if (data.spatialArea === "init") {
          if (lastMyAvatarRef.current) {
            // TODO we don't need to broadcastData but sendData is enough
            broadcastData({
              spatialArea: "avatar",
              avatarData: lastMyAvatarRef.current,
            });
          }
        } else if (data.spatialArea === "avatar") {
          const uid = (data as { userId: string }).userId;
          const { avatarData } = data as { avatarData: AvatarData };
          setAvatarMap((prev) => ({
            ...prev,
            [uid]: avatarData,
          }));
        }
      },
      [broadcastData]
    )
  );

  useEffect(() => {
    broadcastData({
      spatialArea: "init",
    });
  }, [broadcastData]);

  return {
    avatarMap,
    myAvatar,
    setMyAvatar,
  };
};
