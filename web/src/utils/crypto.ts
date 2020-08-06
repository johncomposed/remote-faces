import pako from "pako";

export const sha256 = async (text: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const buf = await window.crypto.subtle.digest("SHA-256", data);
  const arr = Array.from(new Uint8Array(buf));
  const hex = arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hex;
};

export const secureRandomId = (len = 32) => {
  const buf = window.crypto.getRandomValues(new Uint8Array(len));
  const arr = Array.from(buf);
  const hex = arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hex;
};

export const rand4 = () => {
  const rand = window.crypto.getRandomValues(new Uint16Array(1))[0];
  return 1000 + (rand % 9000);
};

export const generateCryptoKey = async () => {
  const key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 128 },
    true,
    ["encrypt", "decrypt"]
  );
  const buf = await window.crypto.subtle.exportKey("raw", key);
  const arr = Array.from(new Uint8Array(buf));
  const hex = arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hex;
};

export const importCryptoKey = async (
  key: string,
  usages: ("encrypt" | "decrypt")[] = ["encrypt", "decrypt"]
) => {
  const size = key.length / 2;
  const buf = new Uint8Array(size);
  for (let i = 0; i < size; i += 1) {
    buf[i] = parseInt(key.slice(i * 2, i * 2 + 2), 16);
  }
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    buf,
    { name: "AES-GCM", length: 128 },
    true,
    usages
  );
  return cryptoKey;
};

export const encryptBuffer = async (
  input: ArrayBuffer,
  key: CryptoKey
): Promise<ArrayBuffer> => {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    input
  );
  const output = new Uint8Array(iv.length + encrypted.byteLength);
  output.set(iv);
  output.set(new Uint8Array(encrypted), iv.length);
  return output.buffer;
};

export const decryptBuffer = async (
  input: ArrayBuffer,
  byteOffset: number,
  byteLength: number,
  key: CryptoKey
): Promise<ArrayBuffer> => {
  const decrypted = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: input.slice(byteOffset, byteOffset + 12) },
    key,
    input.slice(byteOffset + 12, byteOffset + byteLength)
  );
  return decrypted;
};

// encrypt with compression
export const encrypt = async (data: string, cryptoKey: CryptoKey) => {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(data);
  const compressed = pako.deflate(encoded);
  return encryptBuffer(compressed, cryptoKey);
};

// decrypt with decompression
export const decrypt = async (buf: ArrayBuffer, cryptoKey: CryptoKey) => {
  const decrypted = await decryptBuffer(buf, 0, buf.byteLength, cryptoKey);
  const decompressed = pako.inflate(new Uint8Array(decrypted));
  const decoder = new TextDecoder("utf-8");
  const data = decoder.decode(decompressed);
  return data;
};
