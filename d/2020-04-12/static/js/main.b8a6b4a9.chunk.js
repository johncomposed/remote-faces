(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[0],[,,,,,,,,,,,function(e,n,t){e.exports=t(22)},,,,,function(e,n,t){},,function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=18},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),c=t.n(o),i=(t(16),t(1)),s=t.n(i),u=t(2),l=t(3),f=function(){var e=window.crypto.getRandomValues(new Uint8Array(16));return Array.from(e).map((function(e){return e.toString(16).padStart(2,"0")})).join("")},m=t(10),p=t(9),d=t(8),v=t.n(d),g=function(e){return new Promise((function(n){return setTimeout(n,e)}))},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return!1;var t=e.peerConnection;if(!t)return!1;var r=t.connectionState;return"connected"===r||(!(n||"connecting"!==r&&"new"!==r)||!r&&"stable"===t.signalingState)},h=function(e){return Object.keys(e.connections).filter((function(n){return e.connections[n].some((function(e){return b(e,!0)}))}))},w=function(e){return Number(e.split("_")[1])<5},y=function e(n,t,r){r({type:"INITIALIZING_PEER",index:n});var a=n<5?n:1e3+window.crypto.getRandomValues(new Uint16Array(1))[0]%9e3,o="".concat(t,"_").concat(a);console.log("createMyPeer",n,o);var c=new v.a(o);return new Promise((function(a){c.on("open",(function(){a(c)})),c.on("error",(function(o){"unavailable-id"===o.type?(c.destroy(),e(n+1,t,r).then(a)):"peer-unavailable"===o.type||("network"===o.type?(console.log("createMyPeer network error",o),r({type:"NETWORK_ERROR"})):(console.error("createMyPeer",o.type,o),r({type:"UNKNOWN_ERROR"})))}))}))},E=function(e,n,t){var r=null,a=null,o=function(e){if(r){var t=h(r).map((function(e){return Number(e.split("_")[1])})).filter((function(n){return n!==e}));n({type:"CONNECTED_PEERS",peerIds:t})}},c=function(e){if(r&&r.id!==e){var n=r.connections[e];if(!(n&&n.some(b))){console.log("connectPeer",e,n&&n.map((function(e){return e.peerConnection&&e.peerConnection.connectionState})));var t=r.connect(e,{serialization:"json"});i(t)}}},i=function(n){n.on("open",(function(){o(),r&&a&&n.send({data:a,peers:h(r)})})),n.on("data",(function(r){return function(n,r){try{var a=Number(n.peer.split("_")[1]);r&&"object"===typeof r&&(t(a,r.data),Array.isArray(r.peers)&&r.peers.forEach((function(n){"string"===typeof n&&n.startsWith("".concat(e,"_"))&&c(n)})))}catch(o){console.error("handlePayload",o)}}(n,r)})),n.on("close",Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("dataConnection closed",n),o(Number(n.peer.split("_")[1])),w(n.peer)&&f(n.peer);case 3:case"end":return e.stop()}}),e)})))),n.on("error",function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("dataConnection error",n,t),o(Number(n.peer.split("_")[1])),w(n.peer)&&f(n.peer);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},l=function(){var t=Object(u.a)(s.a.mark((function t(){var a,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,y(0,e,n);case 4:for((r=t.sent).on("connection",(function(e){console.log("new connection received",e);var t=Number(e.peer.split("_")[1]);n({type:"NEW_CONNECTION",peerId:t}),i(e)})),n({type:"CONNECTING_SEED_PEERS"}),a=0;a<5;a+=1)o="".concat(e,"_").concat(a),c(o);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();l();var f=function(){var n=Object(u.a)(s.a.mark((function n(t){var a,c,i,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return");case 2:if(!w(r.id)){n.next=4;break}return n.abrupt("return");case 4:return a=30+Math.floor(60*Math.random()),console.log("Disconnected seed peer: "+t.split("_")[1]+", reinit in "+a+"sec..."),n.next=8,g(1e3*a);case 8:if(r){n.next=10;break}return n.abrupt("return");case 10:if(!w(r.id)){n.next=12;break}return n.abrupt("return");case 12:for(c=!0,i=0;i<5;i+=1)u="".concat(e,"_").concat(i),(r.connections[u]||[]).some(b)||(c=!1);if(!c){n.next=17;break}return o(),n.abrupt("return");case 17:r.destroy(),r=null,l();case 20:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return{broadcastData:function(e){a=e,r&&Object.keys(r.connections).forEach((function(n){if(r){var t=h(r);r.connections[n].forEach((function(n){if(n.open)try{n.send({data:e,peers:t})}catch(r){console.error("broadcastData",r)}}))}}))},dispose:function(){r&&r.destroy()}}},A=function(){var e=Object(u.a)(s.a.mark((function e(n,t){var r,a,o,c,i,u,l,f,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return r=new ImageCapture(t),e.next=4,g(2e3);case 4:return e.prev=4,e.next=7,r.takePhoto();case 7:return o=e.sent,e.next=10,createImageBitmap(o);case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r.grabFrame();case 17:a=e.sent;case 18:return c=a.width,i=a.height,e.abrupt("return",{srcImg:a,srcW:c,srcH:i});case 21:return(u=document.getElementById("internal-video")).style.display="block",u.srcObject=n,e.next=26,g(2e3);case 26:return l=u,f=u.videoWidth,m=u.videoHeight,e.abrupt("return",{srcImg:l,srcW:f,srcH:m});case 30:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(n,t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(s.a.mark((function e(){var n,t,r,a,o,c,i,u,l,f,m,p,d,v,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0});case 2:return n=e.sent,t=n.getVideoTracks()[0],r=document.getElementById("internal-canvas"),a=r.getContext("2d"),o=r.width=72,c=r.height=72,e.next=10,A(n,t);case 10:return i=e.sent,u=i.srcImg,l=i.srcW,f=i.srcH,m=Math.max(o/l,c/f),p=Math.min(l,o/m),d=Math.min(f,c/m),v=(l-p)/2,g=(f-d)/2,a.drawImage(u,v,g,p,d,0,0,o,c),t.stop(),e.abrupt("return",r.toDataURL("image/png"));case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=(t(19),function(e){var n=e.roomId,t=e.userId,o=Object(r.useRef)(""),c=Object(r.useRef)("");Object(r.useEffect)((function(){!function(e){var n=window.location.hash.slice(1),t=new URLSearchParams(n);t.set("roomId",e),window.location.hash=t.toString()}(n)}),[n]);var i=Object(r.useCallback)((function(){return{nickname:o.current,message:c.current}}),[]),f=function(e,n,t){var a=Object(r.useState)(),o=Object(l.a)(a,2),c=o[0],i=o[1],f=Object(r.useState)([]),d=Object(l.a)(f,2),v=d[0],g=d[1],b=Object(r.useState)(),h=Object(l.a)(b,2),w=h[0],y=h[1];return Object(r.useEffect)((function(){var r=E(e,y,(function(e,n){if(n&&"object"===typeof n&&"string"===typeof n.userId&&"string"===typeof n.image&&((r=n.info)&&"object"===typeof r&&"string"===typeof r.nickname&&"string"===typeof r.message)){var t={userId:n.userId,image:n.image,info:n.info,received:Date.now(),obsoleted:!1};g((function(e){var n=!1,r=e.map((function(e){return e.userId===t.userId?(n=!0,t):e}));return n?r:[].concat(Object(p.a)(e),[t])}))}var r})),a=r.broadcastData,o=r.dispose,c=function(){var e=Date.now()-12e4;g((function(n){var t=!1,r=n.map((function(n){return n.received<e&&!n.obsoleted?(t=!0,Object(m.a)({},n,{obsoleted:!0})):n}));return t?r:n}))},l=function(){var e=Object(u.a)(s.a.mark((function e(){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(),e.next=4,I();case 4:r=e.sent,i(r),o={userId:n,image:r,info:t()},a(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();l();var f=setInterval(l,12e4);return function(){o(),clearTimeout(f)}}),[e,n,t]),{myImage:c,roomImages:v,networkStatus:w}}(n,t,i),d=f.myImage,v=f.roomImages,g=f.networkStatus;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"SingleRoom-status"},JSON.stringify(g)),a.a.createElement("div",{className:"SingleRoom-room-info"},a.a.createElement("div",null,a.a.createElement("a",{href:window.location.href},"Link to this room")," (Share this with your colleagues)"),a.a.createElement("div",null,"Your Name:"," ",a.a.createElement("input",{onChange:function(e){o.current=e.target.value}}))),a.a.createElement("div",null,a.a.createElement("div",{className:"SingleRoom-card"},a.a.createElement("img",{src:d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"SingleRoom-photo",alt:"myself"}),a.a.createElement("div",{className:"SingleRoom-name"},o.current),a.a.createElement("div",{className:"SingleRoom-mesg"},a.a.createElement("form",null,a.a.createElement("input",{onChange:function(e){c.current=e.target.value}})))),v.map((function(e){return a.a.createElement("div",{key:e.userId,className:"SingleRoom-card",style:{opacity:e.obsoleted?.2:1}},a.a.createElement("img",{src:e.image,className:"SingleRoom-photo",alt:"friend"}),a.a.createElement("div",{className:"SingleRoom-name"},e.info.nickname),a.a.createElement("div",{className:"SingleRoom-mesg"},e.info.message))}))))}),N=(t(20),function(){var e=window.location.hash.slice(1);return new URLSearchParams(e).get("roomId")}()),k=f(),S=function(){var e=Object(r.useState)(N),n=Object(l.a)(e,2),t=n[0],o=n[1],c=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),o(f());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return t?a.a.createElement(O,{roomId:t,userId:k}):a.a.createElement("form",{className:"SingleRoomEntrance-init",onSubmit:c},a.a.createElement("input",{type:"submit",value:"Create a new room"}))},x=(t(21),function(){return a.a.createElement("div",{className:"App"},a.a.createElement(S,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b8a6b4a9.chunk.js.map