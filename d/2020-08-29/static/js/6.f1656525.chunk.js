(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[6],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))}},159:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t(1),a=t.n(r),c=t(2),i=t(101),o=new WeakMap,s=function(e,n){if(o.has(e))return e;o.set(e,!0);var t=function(){var t=Object(c.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)(5e3);case 2:!(r=n.getTransceivers().find((function(n){return n.receiver.track===e})))||"inactive"!==r.currentDirection&&"sendonly"!==r.currentDirection||(e.stop(),e.dispatchEvent(new Event("ended")));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.addEventListener("mute",t),e},u=function(e){return new Promise(function(){var n=Object(c.a)(a.a.mark((function n(t,r){var c,i,o,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=new RTCPeerConnection,i=new RTCPeerConnection,c.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&i.addIceCandidate(n)})),i.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&c.addIceCandidate(n)})),i.addEventListener("track",(function(e){t(e.track)})),e.addEventListener("ended",(function(){c.close(),i.close()})),c.addTrack(e),n.next=10,c.createOffer();case 10:return o=n.sent,n.next=13,c.setLocalDescription(o);case 13:return n.next=15,i.setRemoteDescription(o);case 15:return n.next=17,i.createAnswer();case 17:return s=n.sent,n.next=20,i.setLocalDescription(s);case 20:return n.next=22,c.setRemoteDescription(s);case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(0),r(n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,24]])})));return function(e,t){return n.apply(this,arguments)}}())}},185:function(e,n){},287:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(94),a=0,c={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},i=function(){var e=new Map,n=function(n,t,r){var a,c=e.get(n.peer);c&&r.split(/[\r\n]+/).forEach((function(e){if(e.startsWith("a=mid:"))a=e.slice("a=mid:".length);else if(e.startsWith("a=msid:")){e.slice("a=msid:".length).split(" ").forEach((function(e){var n=t[e];"string"===typeof n&&(c.remoteMediaTypes[a]=n)}))}}))};return{setAcceptingMediaTypes:function(n,t){var r=e.get(n.peer);r&&(r.acceptingMediaTypes=t)},getAcceptingMediaTypes:function(n){var t=e.get(n.peer);return t?t.acceptingMediaTypes:[]},addConn:function(n,t){if(e.get(n))throw new Error("addConn: already exists");var r={peerIndex:a+=1,peer:n,userId:t,sendPc:new RTCPeerConnection(c),recvPc:new RTCPeerConnection(c)};return e.set(r.peer,{conn:r,acceptingMediaTypes:[],remoteMediaTypes:{}}),r},getConn:function(n){var t=e.get(n);return t?t.conn:null},findConn:function(n){var t=Array.from(e.values()).find((function(e){return e.conn.peerIndex===n}));return t?t.conn:null},delConn:function(n){var t=e.get(n.peer);if(!t||t.conn!==n)throw new Error("delConn: does not exist");e.delete(n.peer),n.sendPc.close(),n.recvPc.close()},getPeerIndexList:function(){return Array.from(e.values()).map((function(e){return e.conn.peerIndex}))},forEachConns:function(n){Array.from(e.values()).forEach((function(e){n(e.conn)}))},forEachConnsAcceptingMedia:function(n,t){Array.from(e.values()).forEach((function(e){e.acceptingMediaTypes.includes(n)&&t(e.conn)}))},size:function(){return e.size},getRemoteMediaType:function(n,t){var r=e.get(n.peer);return r&&r.remoteMediaTypes[t]||null},registerRemoteMediaType:function(e,t){Object(r.a)(t,"msid2mediaType")&&(Object(r.a)(t,"offer")&&Object(r.b)(t.offer,"sdp")&&n(e,t.msid2mediaType,t.offer.sdp),Object(r.a)(t,"answer")&&Object(r.b)(t.answer,"sdp")&&n(e,t.msid2mediaType,t.answer.sdp))}}}},292:function(e,n){},308:function(e,n){},311:function(e,n){},351:function(e,n){},366:function(e,n){},370:function(e,n){},371:function(e,n){},402:function(e,n){},413:function(e,n){},426:function(e,n){},427:function(e,n){},440:function(e,n){},50:function(e,n,t){"use strict";t.r(n),t.d(n,"createRoom",(function(){return x}));var r=t(105),a=t(1),c=t.n(a),i=t(2),o=t(291),s=t.n(o),u=t(1132),d=t.n(u),f=t(101),p=t(6),l=t(94),v=t(13),b=t(287),y=t(159),x=function(){var e=Object(i.a)(c.a.mark((function e(n,t,a,o,u,x){var m,w,h,g,k,O,j,I,T,P,E,C,M,D,A,L,S,R,N,J,W,z,_,G,Z,q,B,F,H,K,Q,U,V,X;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=!1,w=null,h=null,g=null,k=Object(b.a)(),O=[],j=n.slice(0,v.a),e.next=10,Object(p.f)(n.slice(v.a));case 10:return I=e.sent,T=function(){if(!m){var e=k.getPeerIndexList();a({type:"CONNECTED_PEERS",peerIndexList:e})}},P=function(){var e=Object(i.a)(c.a.mark((function e(n){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=JSON,e.next=4,Object(p.a)(n,I);case 4:return e.t1=e.sent,t=e.t0.parse.call(e.t0,e.t1),console.log("decrypted payload",t),e.abrupt("return",t);case 10:return e.prev=10,e.t2=e.catch(0),console.info("Error in parsePayload",e.t2,n),e.abrupt("return",void 0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("payload to encrypt",n,t),e.next=4,Object(p.c)(JSON.stringify(t),I);case 4:if(r=e.sent,console.log("sending encrypted",r.byteLength),!(r.byteLength>262144)){e.next=9;break}return console.warn("encrypted message too large, aborting"),e.abrupt("return");case 9:if(w){e.next=12;break}return console.warn("no myIpfs initialized"),e.abrupt("return");case 12:g&&g.broadcast(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("sendPayload",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n,t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.c)(JSON.stringify(t),I);case 3:r=e.sent,g&&g.sendTo(n.peer,r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("sendPayloadDirectly",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:return r={userId:t,data:n,mediaTypes:O},e.next=5,E(j,r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(c.a.mark((function e(n,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:if(a=k.findConn(r)){e.next=5;break}return e.abrupt("return");case 5:return i={userId:t,data:n,mediaTypes:O},e.next=8,C(a,i);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),A=function(e){e.length!==O.length&&k.forEachConns((function(n){var t={userId:n.userId,peerIndex:n.peerIndex,mediaTypes:k.getAcceptingMediaTypes(n)},r=n.recvPc.getTransceivers();n.recvPc.getReceivers().forEach((function(a){var c=r.find((function(e){return e.receiver===a})),i=null===c||void 0===c?void 0:c.mid,o=i&&k.getRemoteMediaType(n,i);o?"live"===a.track.readyState&&!O.includes(o)&&e.includes(o)&&x(o,Object(y.b)(a.track,n.recvPc),t):console.warn("failed to find media type from mid")}))})),O=e,M(null)},L=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=K(),e.next=3,C(n,{SDP:Object(r.a)(Object(r.a)({},t),{},{msid2mediaType:a})});case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(c.a.mark((function e(n,t){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(l.c)(t)){e.next=2;break}return e.abrupt("return");case 2:if(Object(l.b)(t,"negotiationId")){e.next=5;break}return console.warn("negotiationId not found in SDP"),e.abrupt("return");case 5:if(r=t.negotiationId,k.registerRemoteMediaType(n,t),!Object(l.a)(t,"offer")){e.next=24;break}return e.prev=8,e.next=11,n.recvPc.setRemoteDescription(t.offer);case 11:return e.next=13,n.recvPc.createAnswer();case 13:return a=e.sent,e.next=16,n.recvPc.setLocalDescription(a);case 16:L(n,{negotiationId:r,answer:a}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),console.info("handleSDP offer failed",e.t0);case 22:e.next=37;break;case 24:if(!Object(l.a)(t,"answer")){e.next=36;break}return R.get(n)===r&&R.delete(n),e.prev=26,e.next=29,n.sendPc.setRemoteDescription(t.answer);case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(26),console.info("handleSDP answer failed",e.t1);case 34:e.next=37;break;case 36:console.warn("unknown SDP",t);case 37:case"end":return e.stop()}}),e,null,[[8,19],[26,31]])})));return function(n,t){return e.apply(this,arguments)}}(),R=new WeakMap,N=function(e){var n=R.has(e);if(R.set(e,Object(p.h)()),!n){var t=function(){var n=Object(i.a)(c.a.mark((function n(){var r,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=R.get(e)){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.sendPc.createOffer();case 5:return a=n.sent,n.next=8,e.sendPc.setLocalDescription(a);case 8:return n.next=10,L(e,{negotiationId:r,offer:a});case 10:return n.next=12,Object(f.a)(5e3);case 12:t();case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();t()}},J=function(e,n){C(e,{ICE:n})},W=function(e,n){if(Object(l.c)(n))if(Object(l.b)(n,"direction"))if(Object(l.a)(n,"candidate"))try{"send"===n.direction?e.recvPc.addIceCandidate(n.candidate):"recv"===n.direction&&e.sendPc.addIceCandidate(n.candidate)}catch(t){console.info("handleCandidate failed",t)}else console.warn("candidate not found in ICE");else console.warn("direction not found in ICE")},z=function(){var e=Object(i.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(t)||!t.every((function(e){return"string"===typeof e}))){e.next=5;break}return k.setAcceptingMediaTypes(n,t),e.next=4,Object(f.a)(5e3);case 4:V(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),_=function(e,n){var t={userId:e.userId,peerIndex:e.peerIndex,mediaTypes:k.getAcceptingMediaTypes(e)};try{u(n,t)}catch(r){console.warn("receiveData",r)}},G=function(){var e=Object(i.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,Object(l.c)(t)){e.next=5;break}return e.abrupt("return");case 5:S(n,t.SDP),W(n,t.ICE),z(n,t.mediaTypes),_(n,t.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.info("Error in handlePayload",e.t0,t);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n,t){return e.apply(this,arguments)}}(),Z=function(e,n){var t=k.addConn(e,n);return t.sendPc.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&J(t,{direction:"send",candidate:n})})),t.recvPc.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&J(t,{direction:"recv",candidate:n})})),t.recvPc.addEventListener("track",(function(e){var n=e.transceiver.mid,r=n&&k.getRemoteMediaType(t,n);if(r){var a={userId:t.userId,peerIndex:t.peerIndex,mediaTypes:k.getAcceptingMediaTypes(t)};x(r,Object(y.b)(e.track,t.recvPc),a)}else console.warn("failed to find media type from mid")})),o(t.peerIndex),a({type:"NEW_CONNECTION",peerIndex:t.peerIndex}),t},q=function(e){if(!Object(l.c)(e))return null;var n=e.userId;return"string"!==typeof n?null:n},B=function(){var e=Object(i.a)(c.a.mark((function e(n){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.from!==h){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P(n.data);case 4:if(t=e.sent,r=q(t),(a=k.getConn(n.from))||(r?a=Z(n.from,r):console.warn("cannot initialize conn without user id")),!a){e.next=11;break}return e.next=11,G(a,t);case 11:T();case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),function(){var e=Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"INITIALIZING_PEER",peerIndex:0}),e.next=3,s.a.create({repo:Object(p.h)(),config:{Addresses:{Swarm:["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/"]}}});case 3:return n=e.sent,e.next=6,n.id();case 6:h=e.sent.id,(g=new d.a(n,j)).on("message",B),g.on("peer joined",(function(){M(null)})),g.on("peer left",(function(e){var n=k.getConn(e);n&&(k.delConn(n),a({type:"CONNECTION_CLOSED",peerIndex:n.peerIndex}))})),g.on("subscribed",(function(){M(null)})),w=n;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),F=function(){var e=Object(i.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.leave();case 2:return e.next=4,n.stop();case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),H=new Map,K=function(){var e={};return H.forEach((function(n,t){var r=n.stream;e[r.id]=t})),e},Q=function(e,n){if(H.has(e))throw new Error("track is already added for ".concat(e));var t=new MediaStream([n]);H.set(e,{stream:t,track:n}),k.forEachConnsAcceptingMedia(e,(function(e){try{e.sendPc.addTrack(n,t),N(e)}catch(r){if("InvalidAccessError"!==r.name)throw r}}))},U=function(e){var n=H.get(e);if(n){var t=n.track;H.delete(e),k.forEachConnsAcceptingMedia(e,(function(e){var n=e.sendPc.getSenders().find((function(e){return e.track===t}));n&&(e.sendPc.removeTrack(n),N(e))}))}else console.log("track is already removed for",e)},V=function(e){var n=e.sendPc.getSenders(),t=k.getAcceptingMediaTypes(e);t.forEach((function(t){var r=H.get(t);if(r){var a=r.stream,c=r.track;n.every((function(e){return e.track!==c}))&&(e.sendPc.addTrack(c,a),N(e))}})),n.forEach((function(n){n.track&&(t.some((function(e){var t;return(null===(t=H.get(e))||void 0===t?void 0:t.track)===n.track}))||(e.sendPc.removeTrack(n),N(e)))}))},X=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m=!0,w&&F(w,g);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",{broadcastData:M,sendData:D,acceptMediaTypes:A,addTrack:Q,removeTrack:U,dispose:X});case 41:case"end":return e.stop()}}),e)})));return function(n,t,r,a,c,i){return e.apply(this,arguments)}}()},94:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c}));var r=function(e){return"object"===typeof e&&null!==e},a=function(e,n){return"string"===typeof e[n]},c=function(e,n){return r(e[n])}}}]);
//# sourceMappingURL=6.f1656525.chunk.js.map