(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[4],{36:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return I}));var r=n(3),a=n(0),c=n(37),o=n(1),i=n.n(o),u=n(2),s=n(63),d=n.n(s),l=n(39),f=n(4),m=n(5),p=n(40),v=n(8),b=new WeakMap,g=function(e,t){if(b.has(e))return e;b.set(e,!0);var n=function(){var n=Object(u.a)(i.a.mark((function n(){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.a)(5e3);case 2:!(r=t.getTransceivers().find((function(t){return t.receiver.track===e})))||"inactive"!==r.currentDirection&&"sendonly"!==r.currentDirection||(e.stop(),e.dispatchEvent(new Event("ended")));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return e.addEventListener("mute",n),e},O=function(e){var t=Object(v.e)(e);return 10<=t&&t<=14},h=new Map,k=function(e,t,n,r,a){var o="".concat(e,"_").concat(t),s=h.get(o);if(!s){var b=new Set,k=new Set,j=new Set;s={room:function(e,t,n,r,a){var o=!1,s=null,b=null,h=Object(v.b)(),k=[],j=null,y=function(){if(!o){var e=h.getConnectedPeerIds().map(v.e);n({type:"CONNECTED_PEERS",peerIndexList:e})}},E=function(e){if(!o&&s&&s.id!==e&&!s.disconnected&&!h.hasConn(e)){console.log("connectPeer",e);var t=s.connect(e);A(t)}},I=function(e,n){if(!o){n&&(b=e);var r=h.getConnectedPeerIds();h.forEachConnectedConns((function(n){N(n,{userId:t,data:e,peers:r,mediaTypes:k})}))}},C=function(e,t){N(e,{SDP:t})},w=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(p.a)(n)){e.next=2;break}return e.abrupt("return");case 2:if(!Object(p.a)(n.offer)){e.next=21;break}return r=n.offer,e.prev=4,e.next=7,t.peerConnection.setRemoteDescription(r);case 7:return U(t),e.next=10,t.peerConnection.createAnswer();case 10:return a=e.sent,e.next=13,t.peerConnection.setLocalDescription(a);case 13:C(t,{answer:a}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.info("handleSDP offer failed",e.t0);case 19:e.next=38;break;case 21:if(!Object(p.a)(n.answer)){e.next=37;break}return c=n.answer,e.prev=23,e.next=26,t.peerConnection.setRemoteDescription(c);case 26:e.next=35;break;case 28:return e.prev=28,e.t1=e.catch(23),console.info("handleSDP answer failed",e.t1),e.next=33,Object(l.a)(30*Math.random()*1e3);case 33:P(t),U(t);case 35:e.next=38;break;case 37:console.warn("unknown SDP",n);case 38:case"end":return e.stop()}}),e,null,[[4,16],[23,28]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e,t){"string"===typeof t&&h.setUserId(e,t)},S=function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(n)||!n.every((function(e){return"string"===typeof e}))){e.next=5;break}return h.setMediaTypes(t,n),e.next=4,Object(l.a)(5e3);case 4:U(t);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(e,t){var n=h.getUserId(e);if(n){var a={userId:n,peerIndex:Object(v.d)(e),mediaTypes:h.getMediaTypes(e)};try{r(t,a)}catch(c){console.warn("receiveData",c)}}},M=function(){var t=Object(u.a)(i.a.mark((function t(n,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.t0=JSON,t.next=6,Object(f.a)(r,e.slice(v.a));case 6:if(t.t1=t.sent,a=t.t0.parse.call(t.t0,t.t1),console.log("decrypted payload",n.peer,a),Object(p.a)(a)){t.next=11;break}return t.abrupt("return");case 11:w(n,a.SDP),x(n,a.userId),S(n,a.mediaTypes),c=a.peers,Array.isArray(c)&&c.forEach((function(t){Object(v.f)(e,t)&&E(t)})),T(n,a.data),t.next=21;break;case 18:t.prev=18,t.t2=t.catch(2),console.info("Error in handlePayload",t.t2,r);case 21:case"end":return t.stop()}var c}),t,null,[[2,18]])})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=Object(u.a)(i.a.mark((function t(n,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.b)(JSON.stringify(r),e.slice(v.a));case 3:a=t.sent,n.send(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("sendPayload",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),A=function(e){if(h.isConnected(e.peer))e.close();else{h.addConn(e),e.on("open",(function(){if(h.markConnected(e),console.log("dataConnection open",e),y(),b){var n=b,r=h.getConnectedPeerIds();N(e,{userId:t,data:n,peers:r,mediaTypes:k})}})),e.on("data",(function(t){return M(e,t)})),e.peerConnection.addEventListener("icegatheringstatechange",(function(){var t=e.peerConnection;"complete"===t.iceGatheringState&&(t.onicecandidate=function(){})}));var r=new WeakMap;e.peerConnection.addEventListener("negotiationneeded",Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.has(e)){t.next=2;break}return t.abrupt("return");case 2:return r.set(e,!0),t.next=5,Object(l.a)(2e3);case 5:if(r.delete(e),h.isConnected(e.peer)){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,e.peerConnection.createOffer();case 10:return n=t.sent,t.next=13,e.peerConnection.setLocalDescription(n);case 13:C(e,{offer:n});case 14:case"end":return t.stop()}}),t)})))),e.peerConnection.addEventListener("track",(function(t){var n=h.getUserId(e);if(n){var r={userId:n,peerIndex:Object(v.e)(e.peer),mediaTypes:h.getMediaTypes(e)};a(g(t.track,e.peerConnection),r)}})),e.on("close",(function(){if(h.delConn(e),console.log("dataConnection closed",e),n({type:"CONNECTION_CLOSED",peerIndex:Object(v.d)(e)}),y(),0===h.getConnectedPeerIds().length)L(!0);else if(O(e.peer)&&s&&!s.disconnected&&!O(s.id)){var t=30+Math.floor(60*Math.random());console.log("Disconnected seed peer: ".concat(Object(v.e)(e.peer),", reinit in ").concat(t,"sec...")),setTimeout(L,1e3*t)}}))}},D=function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if(!o&&!s){h.clearAll();var a=10<=r&&r<=14,i=a?r:Object(f.e)();n({type:"INITIALIZING_PEER",peerIndex:i});var u=Object(v.c)(e,i);console.log("initMyPeer start",r,u);var l=new d.a(u,Object(c.a)(Object(c.a)({},Object(m.c)()||{}),{},{debug:3}));s=l,l.on("open",(function(){s=l,n({type:"CONNECTING_SEED_PEERS"});for(var t=10;t<=14;t+=1){var r=Object(v.c)(e,t);E(r)}})),l.on("error",(function(e){"unavailable-id"===e.type?(s=null,l.destroy(),t(r+1)):"peer-unavailable"===e.type||("disconnected"===e.type?(console.log("initMyPeer disconnected error",r,e),l.destroy()):"network"===e.type?console.log("initMyPeer network error",r,e):"server-error"===e.type?(console.log("initMyPeer server error",r,e),n({type:"SERVER_ERROR"})):(console.error("initMyPeer unknown error",r,e.type,e),n({type:"UNKNOWN_ERROR",err:e})))})),l.on("connection",(function(e){s===l?(console.log("new connection received",e),n({type:"NEW_CONNECTION",peerIndex:Object(v.d)(e)}),A(e)):e.close()})),l.on("disconnected",(function(){console.log("initMyPeer disconnected",r),setTimeout((function(){s!==l||l.destroyed||(console.log("initMyPeer reconnecting",r),n({type:"RECONNECTING"}),l.reconnect())}),5e3)})),l.on("close",(function(){s===l?(console.log("initMyPeer closed, re-initializing",r),s=null,setTimeout(t,2e4)):console.log("initMyPeer closed, ignoring",r)}))}};D();var L=function(t){if(s&&!s.disconnected){if(!t){if(O(s.id))return;for(var n=!0,r=10;r<=14;r+=1){var a=Object(v.c)(e,r);if(!h.isConnected(a)){n=!1;break}}if(n)return void y()}var c=s;s=null,c.destroy(),D()}},R=new WeakMap,U=function(e){var t=e.peerConnection.getSenders(),n=h.getMediaTypes(e);j&&j.getTracks().forEach((function(r){var a=R.get(r);j&&a&&n.includes(a)&&t.every((function(e){return e.track!==r}))&&e.peerConnection.addTrack(r,j)})),t.forEach((function(t){if(t.track){var r=R.get(t.track);r&&n.includes(r)||e.peerConnection.removeTrack(t)}})),t.some((function(e){return e.track&&!e.transport}))&&e.peerConnection.dispatchEvent(new Event("negotiationneeded"))},P=function(e){e.peerConnection.getSenders().forEach((function(t){t.track&&e.peerConnection.removeTrack(t)}))};return{broadcastData:I,acceptMediaTypes:function(e){(k=e).length?j||(j=new MediaStream,h.forEachConnectedConns((function(e){var t=h.getUserId(e);if(t){var n={userId:t,peerIndex:Object(v.e)(e.peer),mediaTypes:h.getMediaTypes(e)};e.peerConnection.getReceivers().forEach((function(t){a(g(t.track,e.peerConnection),n)}))}}))):j=null,I(null)},addTrack:function(e,t){j&&(R.set(t,e),j.addTrack(t),h.forEachConnsAcceptingMedia(e,(function(e){try{if(!j)return;e.peerConnection.addTrack(t,j)}catch(n){if("InvalidAccessError"!==n.name)throw n}})))},removeTrack:function(e,t){j&&j.removeTrack(t),h.forEachConnsAcceptingMedia(e,(function(e){var n=e.peerConnection.getSenders().find((function(e){return e.track===t}));n&&e.peerConnection.removeTrack(n)}))},dispose:function(){o=!0,s&&s.destroy()}}}(e,t,(function(e){b.forEach((function(t){t(e)}))}),(function(e,t){k.forEach((function(n){n(e,t)}))}),(function(e,t){j.forEach((function(n){(0,n.listener)(e,t)}))})),networkStatusListeners:b,dataListeners:k,trackListeners:j,count:0},h.set(o,s)}if(n&&s.networkStatusListeners.add(n),r&&s.dataListeners.add(r),a){var y=new Set(Array.from(s.trackListeners).map((function(e){return e.mediaType}))),E=y.size;s.trackListeners.add(a),y.add(a.mediaType),E!==y.size&&s.room.acceptMediaTypes(Array.from(y))}s.count+=1;var I=s;return{broadcastData:s.room.broadcastData,addTrack:s.room.addTrack,removeTrack:s.room.removeTrack,unregister:function(){if(n&&I.networkStatusListeners.delete(n),r&&I.dataListeners.delete(r),a){var e=new Set(Array.from(I.trackListeners).map((function(e){return e.mediaType}))),t=e.size;I.trackListeners.delete(a),t!==(e=new Set(Array.from(I.trackListeners).map((function(e){return e.mediaType})))).size&&I.room.acceptMediaTypes(Array.from(e))}I.count-=1,I.count<=0&&(I.room.dispose(),h.delete(o))}}},j=function(e,t,n){var c=Object(a.useState)(),o=Object(r.a)(c,2),i=o[0],u=o[1];if(i&&"UNKNOWN_ERROR"===i.type)throw new Error("Network Error: ".concat(i.err.message));return Object(a.useEffect)((function(){return k(e,t,(function(e){u(e),n&&n(e)})).unregister}),[e,t,n]),i},y=function(e,t){var n=Object(a.useRef)(),r=Object(a.useCallback)((function(){n.current&&n.current.apply(n,arguments)}),[]);return Object(a.useEffect)((function(){var r=k(e,t);return n.current=r.broadcastData,r.unregister}),[e,t]),r},E=function(e,t,n){Object(a.useEffect)((function(){return k(e,t,void 0,n).unregister}),[e,t,n])},I=function(e,t,n,c){var o=Object(a.useState)({}),i=Object(r.a)(o,2),u=i[0],s=i[1];return Object(a.useEffect)((function(){if(c){var r=k(e,t,void 0,void 0,{mediaType:c,listener:n});return s({addTrack:function(e){return r.addTrack(c,e)},removeTrack:function(e){return r.removeTrack(c,e)}}),function(){s({}),r.unregister()}}}),[e,t,n,c]),u}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return"object"===typeof e&&null!==e}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),a=n(0),c=n(40),o=n(36),i=[],u=function(e){var t={};return i.forEach((function(n){n.roomId===e&&(t[n.userId]=n.nickname)})),t},s=function(e,t){var n=Object(a.useState)((function(){return u(e)})),s=Object(r.a)(n,2),d=s[0],l=s[1];return Object(o.b)(e,t,Object(a.useCallback)((function(t,n){if(r=t,Object(c.a)(r)&&Object(c.a)(r.info)&&"string"===typeof r.info.nickname){var r,a=i.findIndex((function(t){return t.roomId===e&&t.userId===n.userId})),o=Date.now();a>=0?(i[a].nickname!==t.info.nickname&&(i[a].nickname=t.info.nickname),i[a].lastUpdated=o):i.push({roomId:e,userId:n.userId,nickname:t.info.nickname,lastUpdated:o});for(var s=i.length-1;s>=0;s-=1)i[s].lastUpdated+6e5<o&&i.splice(s,1);l((function(t){var n=u(e),r=Object.keys(n);return r.length===Object.keys(t).length&&r.every((function(e){return n[e]===t[e]}))?t:n}))}}),[e])),d}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return f}));var r=n(1),a=n.n(r),c=n(3),o=n(2),i=n(39),u=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,i,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,o=r.getVideoTracks(),i=Object(c.a)(o,1),u=i[0],s=function(){u.stop()},e.abrupt("return",{stream:r,dispose:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,s,d,l,f,m,p,v,b,g,O,h,k,j,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,o=r.getVideoTracks(),u=Object(c.a)(o,1),s=u[0],(d=document.getElementById("internal-video")).style.display="block",d.srcObject=r,e.next=10,Object(i.a)(1e3);case 10:return l=d.videoWidth,f=d.videoHeight,m=document.getElementById("internal-canvas"),p=m.getContext("2d"),72,72,m.width=72,m.height=72,v=Math.max(72/l,72/f),b=Math.min(l,72/v),g=Math.min(f,72/v),O=(l-b)/2,h=(f-g)/2,function e(){p.drawImage(d,O,h,b,g,0,0,72,72),k=setTimeout(e,1e3/15)}(),j=m.captureStream(),y=function(){d.style.display="none",clearTimeout(k),s.stop(),j.getVideoTracks()[0].stop()},e.abrupt("return",{stream:j,dispose:y});case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,(n=document.createElement("video")).srcObject=new MediaStream([t]),r=0;case 4:if(!(r<50)){e.next=14;break}return e.next=7,Object(i.a)(100);case 7:if(c=n.videoWidth,o=n.videoHeight,!(c>0&&o>0)){e.next=11;break}return e.abrupt("return",72===c&&72===o);case 11:r+=1,e.next=4;break;case 14:return e.abrupt("return",!0);case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),l=new WeakMap,f=function(e){if(l.has(e))return l.get(e);var t=d(e);return l.set(e,t),t}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var r=n(1),a=n.n(r),c=n(2),o=n(3),i=n(0),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"audioinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n},l=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}},62:function(e,t,n){},64:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=64},65:function(e,t,n){},67:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t),n.d(t,"SingleRoom",(function(){return te}));var r=n(3),a=n(0),c=n.n(a),o=(n(62),n(5)),i=function(e,t){try{window.localStorage.setItem(e,t)}catch(n){console.info("Failed to save string to localStorage",n)}},u=function(e){try{return window.localStorage.getItem(e)||""}catch(t){return""}},s=n(36),d=n(42),l=n(60),f=(n(65),n(1)),m=n.n(f),p=n(2),v=n(59),b=n(37),g=n(40),O=n(39),h=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var r,a,c,o,i,u,s,d,l,f,p;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return r=new ImageCapture(n),e.next=4,Object(O.a)(2e3);case 4:return e.prev=4,e.next=7,r.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r.grabFrame();case 17:a=e.sent;case 18:return o=a.width,i=a.height,e.abrupt("return",{srcImg:a,srcW:o,srcH:i});case 21:return(u=document.getElementById("internal-video")).style.display="block",s=u.srcObject,d=function(){u.srcObject=s},u.srcObject=t,e.next=28,Object(O.a)(2e3);case 28:return l=u,f=u.videoWidth,p=u.videoHeight,e.abrupt("return",{srcImg:l,srcW:f,srcH:p,revert:d});case 32:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,c,o,i,u,s,d,l,f,p,v,b,g,O,k,j,y,E;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,c=a.getVideoTracks(),o=Object(r.a)(c,1),i=o[0],u=document.getElementById("internal-canvas"),s=u.getContext("2d"),d=72,l=72,u.width=d,u.height=l,e.next=13,h(a,i);case 13:return f=e.sent,p=f.srcImg,v=f.srcW,b=f.srcH,g=f.revert,O=Math.max(d/v,l/b),k=Math.min(v,d/O),j=Math.min(b,l/O),y=(v-k)/2,E=(b-j)/2,s.drawImage(p,y,E,k,j,0,0,d,l),g&&g(),i.stop(),e.abrupt("return",u.toDataURL("image/jpeg"));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){return Object(g.a)(e)&&"string"===typeof e.image&&function(e){return Object(g.a)(e)&&"string"===typeof e.nickname&&"string"===typeof e.message&&"boolean"===typeof e.liveMode}(e.info)},y=n(38),E=n(94),I=n(95),C=n(43),w=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,c,o,i,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{audio:{deviceId:t}}:{audio:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,c=a.getAudioTracks(),o=Object(r.a)(c,1),i=o[0],e.next=7,i.applyConstraints({echoCancellation:!0,echoCancellationType:{ideal:"system"},noiseSuppression:{ideal:!0}});case 7:return u=function(){i.stop()},e.abrupt("return",{stream:a,dispose:u});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e,t,n){var r=t||new MediaStream;return r.addTrack(e),r.dispatchEvent(new MediaStreamTrackEvent("addtrack",{track:e})),e.addEventListener("ended",(function(){r.removeTrack(e),0===r.getTracks().length&&n()})),r},S=c.a.memo((function(e){var t=e.image,n=e.nickname,r=e.statusMesg,a=e.obsoleted,o=e.liveMode,i=e.stream,u=e.speakerOn;return c.a.createElement("div",{className:"FaceImages-card",style:{opacity:a?.2:1}},o&&!a&&i?c.a.createElement("video",{className:"FaceImages-photo",ref:function(e){e&&e.srcObject!==i&&(e.srcObject=i)},autoPlay:!0,playsInline:!0,muted:!u}):c.a.createElement("img",{src:t||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"FaceImages-photo",alt:"myself"}),c.a.createElement("div",{className:"FaceImages-name"},n),c.a.createElement("div",{className:"FaceImages-mesg"},r),o&&!a&&i&&c.a.createElement("div",{className:"FaceImages-live-indicator",title:"Live Mode On"},"\u25c9"),o&&!a&&!i&&c.a.createElement("div",{className:"FaceImages-live-indicator",title:"Live Mode Available"},"\u25ce"))})),T=c.a.memo((function(e){var t=e.roomId,n=e.userId,o=e.nickname,i=e.statusMesg,u=e.liveMode,d=e.micOn,l=e.speakerOn,f=e.videoDeviceId,g=e.audioDeviceId,O=function(e,t,n,c,o,i){var u=Object(a.useState)(),d=Object(r.a)(u,2),l=d[0],f=d[1],g=Object(a.useState)([]),O=Object(r.a)(g,2),h=O[0],y=O[1],E=Object(a.useState)(),I=Object(r.a)(E,2),C=I[0],w=I[1];if(C)throw C;var x=Object(s.a)(e,t);return Object(s.b)(e,t,Object(a.useCallback)((function(e,t){if(j(e)){var n=Object(b.a)(Object(b.a)({},e),{},{userId:t.userId,received:Date.now(),obsoleted:!1,peerIndex:t.peerIndex});y((function(e){return e.find((function(e){return e.userId===n.userId}))?e.map((function(e){return e.userId===n.userId?n:e})):[].concat(Object(v.a)(e),[n])}))}}),[])),Object(s.d)(e,t,Object(a.useCallback)((function(e){if(e&&"CONNECTION_CLOSED"===e.type){var t=e.peerIndex;y((function(e){var n=!1,r=e.map((function(e){return e.peerIndex===t?(n=!0,Object(b.a)(Object(b.a)({},e),{},{obsoleted:!0})):e}));return n?r:e}))}}),[])),Object(a.useEffect)((function(){var e,t=function(){var e=Date.now()-12e4,t=Date.now()-6e5;y((function(n){var r=!1,a=n.map((function(n){return n.received<e&&!n.obsoleted?(r=!0,Object(b.a)(Object(b.a)({},n),{},{obsoleted:!0})):n.received<t&&n.obsoleted?(r=!0,null):n})).filter((function(e){return e}));return r?a:n}))},r=function(){var a=Object(p.a)(m.a.mark((function a(){var u;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t(),a.next=4,k(i);case 4:u=a.sent,f(u),x({image:u,info:{nickname:n,message:c,liveMode:o}},!0),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),w(a.t0);case 14:e=setTimeout(r,12e4);case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(){return a.apply(this,arguments)}}();return r(),function(){clearTimeout(e)}}),[e,t,i,n,c,o,x]),{myImage:l,roomImages:h}}(t,n,o,i,u,f),h=O.myImage,T=O.roomImages,M=function(e,t,n,c,o,i,u){var d=Object(a.useState)(null),l=Object(r.a)(d,2),f=l[0],v=l[1],g=Object(a.useState)({}),O=Object(r.a)(g,2),h=O[0],k=O[1],j=Object(a.useRef)(!0);Object(a.useEffect)((function(){j.current=!1}),[]);var S=Object(a.useCallback)(function(){var e=Object(p.a)(m.a.mark((function e(t,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="video"===t.kind,!e.t0){e.next=5;break}return e.next=4,Object(C.c)(t);case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:r=function(){j.current&&k((function(e){var t=n.userId;e[t];return Object(E.a)(e,[t].map(I.a))}))},k((function(e){var a=e[n.userId],c=x(t,a,r);return a===c?e:Object(b.a)(Object(b.a)({},e),{},Object(y.a)({},n.userId,c))}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),T=Object(s.c)(e,t,S,n?"faceVideo":void 0),M=T.addTrack,N=T.removeTrack,A=Object(s.c)(e,t,S,c?"faceAudio":void 0),D=A.addTrack,L=A.removeTrack;return Object(a.useEffect)((function(){var e=null;return n&&M&&N&&Object(p.a)(m.a.mark((function t(){var n,a,c,o,u,s,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(i);case 2:n=t.sent,a=n.stream,c=n.dispose,o=a.getVideoTracks(),u=Object(r.a)(o,1),s=u[0],M(s),d=function(){j.current&&v(null)},v((function(e){return x(s,e,d)})),e=function(){N(s),c(),s.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,n,i,M,N]),Object(a.useEffect)((function(){var e=null;return c&&D&&L&&Object(p.a)(m.a.mark((function t(){var n,a,c,o,i,s,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(u);case 2:n=t.sent,a=n.stream,c=n.dispose,o=a.getAudioTracks(),i=Object(r.a)(o,1),s=i[0],D(s),d=function(){j.current&&v(null)},v((function(e){return x(s,e,d)})),e=function(){L(s),c(),s.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,c,u,D,L]),Object(a.useEffect)((function(){if(f){f.getAudioTracks().forEach((function(e){e.enabled=o}));var e=function(e){var t=e.track;"audio"===t.kind&&(t.enabled=o)};return f.addEventListener("addtrack",e),function(){f.removeEventListener("addtrack",e)}}}),[f,o]),{faceStream:f,faceStreamMap:h}}(t,n,u,u,d,f,g),N=M.faceStream,A=M.faceStreamMap;return c.a.createElement("div",{className:"FaceImage-container"},c.a.createElement(S,{image:h,nickname:o,statusMesg:i,liveMode:u,stream:N||void 0}),T.map((function(e){return c.a.createElement(S,{key:e.userId,image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.obsoleted,liveMode:e.info.liveMode,stream:u&&A[e.userId]||void 0,speakerOn:l})})))})),M=n(66),N=n.n(M),A=(n(67),n(4)),D=function(e,t){var n=t[1]-e[1];return 0===n?e[0].length-t[0].length:n},L=function(e,t,n){var c=Object(a.useRef)([]),o=Object(a.useState)([]),i=Object(r.a)(o,2),u=i[0],d=i[1],l=Object(a.useCallback)((function(e){if(!c.current.some((function(t){return t.messageId===e.messageId})))if(c.current.unshift(e),c.current.length>1e3&&c.current.pop(),e.chatInReplyTo){var t=e.chatText,n=e.chatInReplyTo;d((function(e){return e.map((function(e){if(e.messageId===n){var r=new Map(e.replies);r.set(t,(r.get(t)||0)+1);var a=Object(v.a)(r.entries());return a.sort(D),Object(b.a)(Object(b.a)({},e),{},{replies:a})}return e}))}))}else{var r={messageId:e.messageId,nickname:e.nickname,createdAt:e.createdAt,text:e.chatText,replies:[],time:new Date(e.createdAt).toLocaleString().split(" ")[1].slice(0,-3)};d((function(e){var t=[r].concat(Object(v.a)(e));return t.length>100&&t.pop(),t.sort((function(e,t){return t.createdAt-e.createdAt})),t}))}}),[]),f=Object(s.a)(e,t);return Object(s.b)(e,t,Object(a.useCallback)((function(e){var t;(t=e,!Object(g.a)(t)||"string"!==typeof t.userId||"string"!==typeof t.nickname||"string"!==typeof t.messageId||"number"!==typeof t.createdAt||"string"!==typeof t.chatText||"undefined"!==typeof t.chatInReplyTo&&"string"!==typeof t.chatInReplyTo)||l(e)}),[l])),{chatList:u,sendChat:Object(a.useCallback)((function(e){var r={userId:t,nickname:n,messageId:Object(A.f)(),createdAt:Date.now(),chatText:e};f(r),l(r)}),[f,t,n,l]),replyChat:Object(a.useCallback)((function(e,r){var a={userId:t,nickname:n,messageId:Object(A.f)(),createdAt:Date.now(),chatText:e,chatInReplyTo:r};f(a),l(a)}),[f,t,n,l])}},R=(n(68),n(48)),U=R.b,P=n(72),_=n.n(P),F=n(74),W=n.n(F),V=(n(89),{toolbar:["specialCharacters","|","bold","italic","link","blockQuote","|","imageUpload","insertTable","mediaEmbed","|","undo","redo"],balloonToolbar:["heading","|","bulletedList","numberedList","indent","outdent"],link:{addTargetToExternalLinks:!0}}),z=c.a.memo((function(e){var t=e.registerClear,n=e.onChange;return c.a.createElement(_.a,{editor:W.a,config:V,onInit:function(e){t((function(){e.setData("")})),function(e){e.plugins.get("SpecialCharacters").addItems("Emoji",[{title:"smiley face",character:"\ud83d\ude0a"},{title:"rocket",character:"\ud83d\ude80"},{title:"wind blowing face",character:"\ud83c\udf2c\ufe0f"},{title:"floppy disk",character:"\ud83d\udcbe"},{title:"heart",character:"\u2764\ufe0f"}])}(e)},onChange:function(e,t){var r=t.getData();n(r)}})})),B=c.a.memo((function(e){var t,n=e.item,o=e.replyChat,i=Object(a.useState)(!1),u=Object(r.a)(i,2),s=u[0],d=u[1],l=function(e){return o(e,n.messageId)};return c.a.createElement("li",{key:n.messageId,className:"MomentaryChat-listPart"},s&&c.a.createElement(U,{onSelect:function(e){l(e.native),d(!1)}}),c.a.createElement("div",{className:"MomentaryChat-listPart-header"},c.a.createElement("div",{className:"MomentaryChat-iconButton-container"},c.a.createElement("div",{className:"MomentaryChat-iconButton"},c.a.createElement("button",{type:"button",onClick:function(){d(!s)}},"+"))),c.a.createElement("span",{className:"MomentaryChat-nickname"},n.nickname||"No Name"),c.a.createElement("span",{className:"MomentaryChat-time"},n.time)),c.a.createElement("div",{className:"MomentaryChat-text ck-content",dangerouslySetInnerHTML:(t=n.text,{__html:N.a.sanitize(t,{ADD_ATTR:["target"]})})}),n.replies.map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return c.a.createElement("button",{key:n,className:"MomentaryChat-icon",type:"button",onClick:function(){return l(n)}},n," ",a)})))})),H=c.a.memo((function(e){var t,n=e.chatList,r=e.replyChat,o=Object(a.useRef)(null),i=null===(t=n[0])||void 0===t?void 0:t.messageId;return Object(a.useEffect)((function(){o.current&&i&&(o.current.scrollTop=o.current.scrollHeight)}),[i]),c.a.createElement("ul",{className:"MomentaryChat-list",ref:o},n.map((function(e){return c.a.createElement(B,{key:e.messageId,item:e,replyChat:r})})))})),G=c.a.memo((function(e){var t=e.roomId,n=e.userId,o=e.nickname,i=Object(a.useRef)(null),u=L(t,n,o),s=u.chatList,d=u.sendChat,l=u.replyChat,f=Object(a.useRef)(),m=Object(a.useState)(""),p=Object(r.a)(m,2),v=p[0],b=p[1];return c.a.createElement("div",{className:"MomentaryChat-container",ref:i},c.a.createElement(H,{chatList:s,replyChat:l}),c.a.createElement("div",{className:"MomentaryChat-editor"},c.a.createElement(z,{registerClear:function(e){f.current=e},onChange:b})),c.a.createElement("div",{className:"MomentaryChat-button"},c.a.createElement("button",{type:"button",onClick:function(){v&&(d(v),b(""),f.current&&f.current())},disabled:!v},"Send")))})),J=(n(90),c.a.memo((function(e){var t=e.initialText,n=e.onUpdate,o=e.buttonLabel,i=e.placeholder,u=e.clearOnUpdate,s=Object(a.useState)(t),d=Object(r.a)(s,2),l=d[0],f=d[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&(n(l),u&&f(""))}},c.a.createElement("input",{value:l,onChange:function(e){return f(e.target.value)},placeholder:i}),o&&c.a.createElement("button",{type:"submit",disabled:!l},o))}))),K=c.a.memo((function(e){var t=e.initialNickname,n=e.emoji,o=e.onUpdateNickname,i=e.onUpdateStatusMesg,u=e.onUpdateEmoji,s=Object(a.useState)(!1),d=Object(r.a)(s,2),l=d[0],f=d[1];return c.a.createElement("div",{className:"UserProfile-container"},c.a.createElement("div",{className:"UserProfile-nickname"},c.a.createElement(J,{initialText:t,onUpdate:o,placeholder:"Enter your name",buttonLabel:"Set"})),c.a.createElement("div",{className:"UserProfile-status-area"},c.a.createElement("div",{className:"UserProfile-emoji"},c.a.createElement("button",{type:"button",onClick:function(){f(!l)}},n?c.a.createElement(R.a,{emoji:n,size:10}):":)")),c.a.createElement("div",{className:"UserProfile-statusmesg"},c.a.createElement(J,{initialText:"",onUpdate:i,placeholder:"Enter status message",buttonLabel:"Set"})),c.a.createElement("button",{type:"button",onClick:function(){u(null),i(""),f(!1)}},"Clear")),l&&c.a.createElement(U,{onSelect:function(e){u(e),f(!1)}}))})),Q=c.a.lazy((function(){return n.e(7).then(n.bind(null,98))})),Y=c.a.lazy((function(){return n.e(8).then(n.bind(null,99))})),Z=c.a.lazy((function(){return n.e(5).then(n.bind(null,100))})),q=u("nickname"),X="true"!==u("config_hidden"),$=u("faceimage_video_device_id"),ee=u("faceimage_audio_device_id"),te=c.a.memo((function(e){var t=e.roomId,n=e.userId,u=Object(a.useState)(q),f=Object(r.a)(u,2),m=f[0],p=f[1],v=Object(a.useState)(""),b=Object(r.a)(v,2),g=b[0],O=b[1],h=Object(a.useState)(null),k=Object(r.a)(h,2),j=k[0],y=k[1];Object(a.useEffect)((function(){Object(o.d)(t)}),[t]);var E=Object(l.b)(),I=Object(l.a)(),C=Object(a.useState)($),w=Object(r.a)(C,2),x=w[0],S=w[1],M=Object(a.useState)(ee),N=Object(r.a)(M,2),A=N[0],D=N[1],L=Object(a.useState)(!1),R=Object(r.a)(L,2),U=R[0],P=R[1],_=Object(a.useState)(!1),F=Object(r.a)(_,2),W=F[0],V=F[1],z=Object(a.useState)(!1),B=Object(r.a)(z,2),H=B[0],J=B[1],te=Object(a.useState)(!1),ne=Object(r.a)(te,2),re=ne[0],ae=ne[1],ce=Object(a.useState)(!1),oe=Object(r.a)(ce,2),ie=oe[0],ue=oe[1],se=Object(a.useState)(!1),de=Object(r.a)(se,2),le=de[0],fe=de[1],me=Object(a.useState)(X),pe=Object(r.a)(me,2),ve=pe[0],be=pe[1];Object(a.useEffect)((function(){i("config_hidden",ve?"false":"true")}),[ve]);var ge=Object(s.d)(t,n);Object(d.a)(t,n);var Oe="remote-faces://".concat(window.location.href.replace(/^https:\/\//,""));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"SingleRoom-body"},c.a.createElement(T,{roomId:t,userId:n,videoDeviceId:x,audioDeviceId:A,nickname:m,statusMesg:"".concat((null===j||void 0===j?void 0:j.native)||"").concat(g),liveMode:U,micOn:W,speakerOn:H}),c.a.createElement("div",{className:"SingleRoom-2nd-column"},c.a.createElement(K,{initialNickname:q,emoji:j,onUpdateNickname:function(e){p(e),i("nickname",e)},onUpdateStatusMesg:function(e){O(e)},onUpdateEmoji:function(e){y(e)}}),c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"SingleRoom-config-toggle",onClick:function(){return be((function(e){return!e}))}},"Setting",ve?c.a.createElement(c.a.Fragment,null,"\u25bc"):c.a.createElement(c.a.Fragment,null,"\u25b6")),ve&&c.a.createElement("div",{className:"SingleRoom-config"},c.a.createElement("div",null,"Link to this room:",c.a.createElement("input",{value:window.location.href,readOnly:!0}),"(Share this link with your colleagues)",c.a.createElement("a",{href:Oe},"Open App")),c.a.createElement("div",null,"Select Camera:"," ",c.a.createElement("select",{value:x,onChange:function(e){S(e.target.value),i("faceimage_video_device_id",e.target.value)}},E.map((function(e){return c.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),c.a.createElement("div",null,"Select Mic:"," ",c.a.createElement("select",{value:A,onChange:function(e){D(e.target.value),i("faceimage_audio_device_id",e.target.value)}},I.map((function(e){return c.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),c.a.createElement("div",null,"Live Mode:"," ",c.a.createElement("button",{type:"button",onClick:function(){return P((function(e){return!e}))}},U?"Disable":"Enable"),U&&c.a.createElement(c.a.Fragment,null,"\u2714"),U&&c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:W,onChange:function(e){return V(e.target.checked)}}),"Mic On"),c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:H,onChange:function(e){return J(e.target.checked)}}),"Speaker On"))),c.a.createElement("div",null,"Screen Share:"," ",c.a.createElement("button",{type:"button",onClick:function(){return ae((function(e){return!e}))}},re?"Close":"Open"),re&&c.a.createElement(c.a.Fragment,null,"\u2714")),c.a.createElement("div",null,"Video Share:"," ",c.a.createElement("button",{type:"button",onClick:function(){return ue((function(e){return!e}))}},ie?"Close":"Open"),ie&&c.a.createElement(c.a.Fragment,null,"\u2714")),c.a.createElement("div",null,"Collab White Board:"," ",c.a.createElement("button",{type:"button",onClick:function(){return fe((function(e){return!e}))}},le?"Close":"Open"),le&&c.a.createElement(c.a.Fragment,null,"\u2714")),c.a.createElement("div",{className:"SingleRoom-status"},JSON.stringify(ge)))),c.a.createElement(G,{roomId:t,userId:n,nickname:m})),c.a.createElement("div",{className:"SingleRoom-3rd-column"},re&&c.a.createElement(Q,{roomId:t,userId:n,nickname:m}),ie&&c.a.createElement(Y,{roomId:t,userId:n,nickname:m}),le&&c.a.createElement(Z,{roomId:t}))))}));t.default=te}}]);
//# sourceMappingURL=4.4aab3417.chunk.js.map