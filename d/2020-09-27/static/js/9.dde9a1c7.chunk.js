(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[9],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))}},162:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"a",(function(){return l}));var r=t(5),c=t(1),a=t.n(c),o=t(2),i=t(104),s=new WeakMap,u=function(e,n){if(s.has(e))return e;s.set(e,!0);var t=function(){var t=Object(o.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)(5e3);case 2:!(r=n.getTransceivers().find((function(n){return n.receiver.track===e})))||"inactive"!==r.currentDirection&&"sendonly"!==r.currentDirection||(e.stop(),e.dispatchEvent(new Event("ended")));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.addEventListener("mute",t),e},d=function(e){return new Promise(function(){var n=Object(o.a)(a.a.mark((function n(t,r){var c,o,i,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=new RTCPeerConnection,o=new RTCPeerConnection,c.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&o.addIceCandidate(n)})),o.addEventListener("icecandidate",(function(e){var n=e.candidate;n&&c.addIceCandidate(n)})),o.addEventListener("track",(function(e){t(e.track)})),e.addEventListener("ended",(function(){c.close(),o.close()})),c.addTrack(e),n.next=10,c.createOffer();case 10:return i=n.sent,n.next=13,c.setLocalDescription(i);case 13:return n.next=15,o.setRemoteDescription(i);case 15:return n.next=17,o.createAnswer();case 17:return s=n.sent,n.next=20,o.setLocalDescription(s);case 20:return n.next=22,c.setRemoteDescription(s);case 22:n.next=27;break;case 24:n.prev=24,n.t0=n.catch(0),r(n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,24]])})));return function(e,t){return n.apply(this,arguments)}}())},f=function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("video"===n.kind){e.next=2;break}throw new Error("track kind is not video");case 2:return t=document.createElement("canvas"),r=t.getContext("2d"),c=new ImageCapture(n),i=function(){var e=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.grabFrame();case 3:return n=e.sent,t.width=n.width,t.height=n.height,r.drawImage(n,0,0),e.abrupt("return",t.toDataURL("image/jpeg"));case 10:return e.prev=10,e.t0=e.catch(0),console.log("failed to grab frame from viedeo track",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",{getImage:i});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(e){return new Promise((function(n,t){var r=new Image;r.onload=function(){return n(r)},r.onerror=t,r.src=e}))},l=function(){var e=document.createElement("canvas"),n=e.getContext("2d"),t=e.captureStream().getVideoTracks();return{videoTrack:Object(r.a)(t,1)[0],setImage:function(){var t=Object(o.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(r);case 2:c=t.sent,e.width=c.width,e.height=c.height,n.drawImage(c,0,0);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},486:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=486},52:function(e,n,t){"use strict";t.r(n),t.d(n,"createRoom",(function(){return w}));var r=t(114),c=t(1),a=t.n(c),o=t(2),i=t(485),s=t.n(i),u=t(104),d=t(7),f=t(4),p=t(99),l=t(14),v=function(e,n){return"string"===typeof n&&n.startsWith("".concat(e.slice(0,l.a)," "))},g=function(e,n){return"".concat(e.slice(0,l.a)," ").concat(n)},m=function(e){return Number(e.split(" ")[1])},y=function(e){return m(e.peer)},h=function(){var e=new Map,n=function(n,t,r){var c,a=e.get(n.peer);a&&r.split(/[\r\n]+/).forEach((function(e){if(e.startsWith("a=mid:"))c=e.slice("a=mid:".length);else if(e.startsWith("a=msid:")){e.slice("a=msid:".length).split(" ").forEach((function(e){var n=t[e];"string"===typeof n&&(a.remoteMediaTypes[c]=n)}))}}))};return{setAcceptingMediaTypes:function(n,t){var r=e.get(n.peer);r&&(r.acceptingMediaTypes=t)},getAcceptingMediaTypes:function(n){var t=e.get(n.peer);return t?t.acceptingMediaTypes:[]},addConn:function(n){var t=e.get(n.peer);t&&t.conn.close(),e.set(n.peer,{conn:n,acceptingMediaTypes:[],remoteMediaTypes:{}})},markConnected:function(n){var t=e.get(n.peer);t&&(t.connected=!0)},isConnected:function(n){var t=e.get(n);return t&&t.connected||!1},setUserId:function(n,t){var r=e.get(n.peer);r&&(r.userId=t)},getUserId:function(n){var t=e.get(n.peer);return t&&t.userId},hasConn:function(n){return e.has(n)},getConn:function(n){var t=e.get(n);return t?t.conn:null},delConn:function(n){var t=e.get(n.peer);t&&t.conn===n&&e.delete(n.peer)},getConnectedPeerIds:function(){return Array.from(e.keys()).filter((function(n){var t;return null===(t=e.get(n))||void 0===t?void 0:t.connected}))},forEachConnectedConns:function(n){Array.from(e.values()).forEach((function(e){e.connected&&n(e.conn)}))},forEachConnsAcceptingMedia:function(n,t){Array.from(e.values()).forEach((function(e){e.connected&&e.acceptingMediaTypes.includes(n)&&t(e.conn)}))},clearAll:function(){e.size&&console.log("connectionMap garbage:",e),e.clear()},getRemoteMediaType:function(n,t){var r=e.get(n.peer);return r&&r.remoteMediaTypes[t]||null},registerRemoteMediaType:function(e,t){Object(p.a)(t,"msid2mediaType")&&(Object(p.a)(t,"offer")&&Object(p.b)(t.offer,"sdp")&&n(e,t.msid2mediaType,t.offer.sdp),Object(p.a)(t,"answer")&&Object(p.b)(t.answer,"sdp")&&n(e,t.msid2mediaType,t.answer.sdp))}}},b=t(162),k=function(e){var n=m(e);return 10<=n&&n<=14},w=function(){var e=Object(o.a)(a.a.mark((function e(n,t,c,i,w,C){var x,E,T,O,I,M,j,P,R,D,N,A,S,L,U,_,W,G,J,z,F,V,K,Z,q,B,H,Q;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x=!1,E=h(),T=[],e.next=6,Object(d.h)(n.slice(l.a));case 6:return O=e.sent,I=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Promise((function(r,i){if(x)i(new Error("already disposed"));else{E.clearAll();var u=10<=t&&t<=14?t:Object(d.i)();c({type:"INITIALIZING_PEER",peerIndex:u});var p=g(n,u);console.log("initMyPeer start",t,p);var l=new s.a(p,Object(f.c)());l.on("open",(function(){r(l),c({type:"CONNECTING_SEED_PEERS"}),setTimeout((function(){for(var e=10;e<=14;e+=1){var t=g(n,e);P(t)}}),10)})),l.on("error",(function(n){"unavailable-id"===n.type?(l.destroy(),e(t+1).then(r,i)):"peer-unavailable"===n.type||("disconnected"===n.type?console.log("initMyPeer disconnected error",t,n):"network"===n.type?console.log("initMyPeer network error",t,n):"server-error"===n.type?(console.log("initMyPeer server error",t,n),c({type:"SERVER_ERROR"})):(console.error("initMyPeer unknown error",t,n.type,n),c({type:"UNKNOWN_ERROR",err:n})))})),l.on("connection",(function(e){console.log("new connection received",e),c({type:"NEW_CONNECTION",peerIndex:y(e)}),J(e)})),l.on("disconnected",(function(){console.log("initMyPeer disconnected",t),setTimeout((function(){l.destroyed||(console.log("initMyPeer reconnecting",t),c({type:"RECONNECTING"}),l.reconnect())}),5e3)})),l.on("close",(function(){l.destroyed||(console.log("initMyPeer closed, re-initializing",t),setTimeout(Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:M=n.sent;case 3:case"end":return n.stop()}}),n)}))),2e4))}))}}))},e.next=10,I();case 10:return M=e.sent,j=function(){if(!x){var e=E.getConnectedPeerIds().map(m);c({type:"CONNECTED_PEERS",peerIndexList:e})}},P=function(e){if(!x&&M.id!==e&&!M.disconnected&&!E.hasConn(e)){console.log("connectPeer",e);var n=M.connect(e);J(n)}},R=function(e){if(!x){var n=E.getConnectedPeerIds();E.forEachConnectedConns((function(r){G(r,{userId:t,data:e,peers:n,mediaTypes:T})}))}},D=function(e,r){if(!x){var c=E.getConn(g(n,r));if(c){var a=E.getConnectedPeerIds();G(c,{userId:t,data:e,peers:a,mediaTypes:T})}}},N=function(e,n){var t=K();G(e,{SDP:Object(r.a)(Object(r.a)({},n),{},{msid2mediaType:t})})},A=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(p.c)(t)){e.next=2;break}return e.abrupt("return");case 2:if(E.registerRemoteMediaType(n,t),!Object(p.a)(t,"offer")){e.next=21;break}return e.prev=4,e.next=7,n.peerConnection.setRemoteDescription(t.offer);case 7:return B(n),e.next=10,n.peerConnection.createAnswer();case 10:return r=e.sent,e.next=13,n.peerConnection.setLocalDescription(r);case 13:N(n,{answer:r}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.info("handleSDP offer failed",e.t0);case 19:e.next=37;break;case 21:if(!Object(p.a)(t,"answer")){e.next=36;break}return e.prev=22,e.next=25,n.peerConnection.setRemoteDescription(t.answer);case 25:e.next=34;break;case 27:return e.prev=27,e.t1=e.catch(22),console.info("handleSDP answer failed",e.t1),e.next=32,Object(u.a)(30*Math.random()*1e3);case 32:H(n),B(n);case 34:e.next=37;break;case 36:console.warn("unknown SDP",t);case 37:case"end":return e.stop()}}),e,null,[[4,16],[22,27]])})));return function(n,t){return e.apply(this,arguments)}}(),S=function(e,n){"string"===typeof n&&E.setUserId(e,n)},L=function(){var e=Object(o.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(t)||!t.every((function(e){return"string"===typeof e}))){e.next=5;break}return E.setAcceptingMediaTypes(n,t),e.next=4,Object(u.a)(5e3);case 4:B(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),U=function(e){Array.isArray(e)&&e.forEach((function(e){v(n,e)&&P(e)}))},_=function(e,n){var t=E.getUserId(e);if(t){var r={userId:t,peerIndex:y(e),mediaTypes:E.getAcceptingMediaTypes(e)};try{w(n,r)}catch(c){console.warn("receiveData",c)}}},W=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.t0=JSON,e.next=6,Object(d.b)(t,O);case 6:if(e.t1=e.sent,r=e.t0.parse.call(e.t0,e.t1),console.log("decrypted payload",n.peer,r),Object(p.c)(r)){e.next=11;break}return e.abrupt("return");case 11:A(n,r.SDP),S(n,r.userId),L(n,r.mediaTypes),U(r.peers),_(n,r.data),e.next=21;break;case 18:e.prev=18,e.t2=e.catch(2),console.info("Error in handlePayload",e.t2,t);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n,t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.e)(JSON.stringify(t),O);case 3:r=e.sent,n.send(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("sendPayload",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),J=function(e){if(E.isConnected(e.peer))e.close();else{E.addConn(e),setTimeout((function(){E.isConnected(e.peer)||e.close()}),3e4),e.on("open",(function(){E.markConnected(e),console.log("dataConnection open",e),j();var n=m(e.peer);i(n)})),e.on("data",(function(n){return W(e,n)})),e.peerConnection.addEventListener("icegatheringstatechange",(function(){var n=e.peerConnection;"complete"===n.iceGatheringState&&(n.onicecandidate=function(){})}));var n=!1;e.peerConnection.addEventListener("negotiationneeded",Object(o.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return");case 2:return n=!0,t.next=5,Object(u.a)(5e3);case 5:if(n=!1,E.isConnected(e.peer)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,e.peerConnection.createOffer();case 10:return r=t.sent,t.next=13,e.peerConnection.setLocalDescription(r);case 13:N(e,{offer:r});case 14:case"end":return t.stop()}}),t)})))),e.peerConnection.addEventListener("track",(function(n){var t=n.transceiver.mid,r=t&&E.getRemoteMediaType(e,t);if(r){var c=E.getUserId(e);if(c){var a={userId:c,peerIndex:m(e.peer),mediaTypes:E.getAcceptingMediaTypes(e)};C(r,Object(b.c)(n.track,e.peerConnection),a)}}else console.warn("failed to find media type from mid")})),e.on("close",(function(){if(E.delConn(e),console.log("dataConnection closed",e),c({type:"CONNECTION_CLOSED",peerIndex:y(e)}),j(),0===E.getConnectedPeerIds().length)z(!0);else if(k(e.peer)&&!M.disconnected&&!k(M.id)){var n=30+Math.floor(60*Math.random());console.log("Disconnected seed peer: ".concat(m(e.peer),", reinit in ").concat(n,"sec...")),setTimeout(z,1e3*n)}}))}},z=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M.disconnected){e.next=2;break}return e.abrupt("return");case 2:if(t){e.next=18;break}if(!k(M.id)){e.next=5;break}return e.abrupt("return");case 5:r=!0,c=10;case 7:if(!(c<=14)){e.next=15;break}if(o=g(n,c),E.isConnected(o)){e.next=12;break}return r=!1,e.abrupt("break",15);case 12:c+=1,e.next=7;break;case 15:if(!r){e.next=18;break}return j(),e.abrupt("return");case 18:return M.destroy(),e.next=21,I();case 21:M=e.sent;case 22:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),F=function(e){x||(e.length!==T.length&&E.forEachConnectedConns((function(n){var t=E.getUserId(n);if(t){var r={userId:t,peerIndex:m(n.peer),mediaTypes:E.getAcceptingMediaTypes(n)},c=n.peerConnection.getTransceivers();n.peerConnection.getReceivers().forEach((function(t){var a=c.find((function(e){return e.receiver===t})),o=null===a||void 0===a?void 0:a.mid,i=o&&E.getRemoteMediaType(n,o);i?"live"===t.track.readyState&&!T.includes(i)&&e.includes(i)&&C(i,Object(b.c)(t.track,n.peerConnection),r):console.warn("failed to find media type from mid")}))}})),T=e,R(null))},V=new Map,K=function(){var e={};return V.forEach((function(n,t){var r=n.stream;e[r.id]=t})),e},Z=function(e,n){if(!x){if(V.has(e))throw new Error("track is already added for ".concat(e));var t=new MediaStream([n]);V.set(e,{stream:t,track:n}),E.forEachConnsAcceptingMedia(e,(function(e){try{e.peerConnection.addTrack(n,t)}catch(r){if("InvalidAccessError"!==r.name)throw r}}))}},q=function(e){if(!x){var n=V.get(e);if(n){var t=n.track;V.delete(e),E.forEachConnsAcceptingMedia(e,(function(e){var n=e.peerConnection.getSenders().find((function(e){return e.track===t}));n&&e.peerConnection.removeTrack(n)}))}else console.log("track is already removed for",e)}},B=function(e){var n=e.peerConnection.getSenders(),t=E.getAcceptingMediaTypes(e);t.forEach((function(t){var r=V.get(t);if(r){var c=r.stream,a=r.track;n.every((function(e){return e.track!==a}))&&e.peerConnection.addTrack(a,c)}})),n.forEach((function(n){n.track&&(t.some((function(e){var t;return(null===(t=V.get(e))||void 0===t?void 0:t.track)===n.track}))||e.peerConnection.removeTrack(n))})),n.some((function(e){return e.track&&!e.transport}))&&e.peerConnection.dispatchEvent(new Event("negotiationneeded"))},H=function(e){e.peerConnection.getSenders().forEach((function(n){n.track&&e.peerConnection.removeTrack(n)}))},Q=function(){x=!0,M.destroy()},e.abrupt("return",{broadcastData:R,sendData:D,acceptMediaTypes:F,addTrack:Z,removeTrack:q,dispose:Q});case 34:case"end":return e.stop()}}),e)})));return function(n,t,r,c,a,o){return e.apply(this,arguments)}}()},99:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return a}));var r=function(e){return"object"===typeof e&&null!==e},c=function(e,n){return"string"===typeof e[n]},a=function(e,n){return r(e[n])}}}]);
//# sourceMappingURL=9.dde9a1c7.chunk.js.map