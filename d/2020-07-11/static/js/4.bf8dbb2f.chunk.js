(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[4],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"SingleRoom",(function(){return ie}));var a=n(5),r=n(0),c=n.n(r),i=(n(65),n(4)),u=function(e,t){try{window.localStorage.setItem(e,t)}catch(n){console.info("Failed to save string to localStorage",n)}},o=function(e){try{return window.localStorage.getItem(e)||""}catch(t){return""}},s=n(44),l=n(51),d=(n(66),n(8)),m=n(1),f=n.n(m),b=n(2),p=n(7),v=n(6),O=function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a,r,c,i,u,o,s,l,d,m,b;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return a=new ImageCapture(n),e.next=4,Object(v.a)(2e3);case 4:return e.prev=4,e.next=7,a.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:r=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,a.grabFrame();case 17:r=e.sent;case 18:return i=r.width,u=r.height,e.abrupt("return",{srcImg:r,srcW:i,srcH:u});case 21:return(o=document.getElementById("internal-video")).style.display="block",s=o.srcObject,l=function(){o.srcObject=s},o.srcObject=t,e.next=28,Object(v.a)(2e3);case 28:return d=o,m=o.videoWidth,b=o.videoHeight,e.abrupt("return",{srcImg:d,srcW:m,srcH:b,revert:l});case 32:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,c,i,u,o,s,l,d,m,b,p,v,g,j,k,h,E,y;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getVideoTracks(),i=Object(a.a)(c,1),u=i[0],o=document.getElementById("internal-canvas"),s=o.getContext("2d"),l=72,d=72,o.width=l,o.height=d,e.next=13,O(r,u);case 13:return m=e.sent,b=m.srcImg,p=m.srcW,v=m.srcH,g=m.revert,j=Math.max(l/p,d/v),k=Math.min(p,l/j),h=Math.min(v,d/j),E=(p-k)/2,y=(v-h)/2,s.drawImage(b,E,y,k,h,0,0,l,d),g&&g(),u.stop(),e.abrupt("return",o.toDataURL("image/jpeg"));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=n(40),k=function(e){return Object(p.a)(e)&&"string"===typeof e.image&&function(e){return Object(p.a)(e)&&"string"===typeof e.nickname&&"string"===typeof e.message&&"boolean"===typeof e.liveMode}(e.info)},h=n(10),E=n(100),y=n(101),I=n(45),w=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,c,i,u,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{audio:{deviceId:t}}:{audio:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return r=e.sent,c=r.getAudioTracks(),i=Object(a.a)(c,1),u=i[0],e.next=7,u.applyConstraints({echoCancellation:!0,echoCancellationType:{ideal:"system"},noiseSuppression:{ideal:!0}});case 7:return o=function(){u.stop()},e.abrupt("return",{stream:r,dispose:o});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t,n){var a=t||new MediaStream;return a.addTrack(e),a.dispatchEvent(new MediaStreamTrackEvent("addtrack",{track:e})),e.addEventListener("ended",(function(){a.removeTrack(e),0===a.getTracks().length&&n(a)})),a},C=c.a.memo((function(e){var t=e.image,n=e.nickname,a=e.statusMesg,r=e.obsoleted,i=e.liveMode,u=e.stream,o=e.muted,s=e.micOn,d=e.speakerOn;return c.a.createElement("div",{className:"FaceImages-card",style:{opacity:r?.2:1}},i&&!r&&u?c.a.createElement("video",{className:"FaceImages-photo",ref:function(e){e&&e.srcObject!==u&&(e.srcObject=u)},autoPlay:!0,playsInline:!0,muted:o}):c.a.createElement("img",{src:t||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"FaceImages-photo",alt:"myself"}),c.a.createElement("div",{className:"FaceImages-name"},n),c.a.createElement("div",{className:"FaceImages-mesg",title:Object(l.a)(a)[1]?a:"(No status message)"},Object(l.a)(a)[0]),i&&!r&&u&&c.a.createElement("div",{className:"FaceImages-live-indicator",title:"Live Mode On"},"\u25c9"),i&&!r&&!u&&c.a.createElement("div",{className:"FaceImages-live-indicator",title:"Live Mode Available"},"\u25ce"),i&&!r&&c.a.createElement("div",{className:"FaceImages-mic-speaker-icons"},s&&c.a.createElement("span",{title:"Mic On"},"\ud83c\udfa4"),d&&c.a.createElement("span",{title:"Speaker On"},"\ud83d\udd08")))})),x=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,u=e.statusMesg,o=e.liveMode,s=e.micOn,m=e.speakerOn,p=e.videoDeviceId,v=e.audioDeviceId,O=function(e,t,n,c,i,u,o,s){var m=Object(r.useState)(),p=Object(a.a)(m,2),v=p[0],O=p[1],h=Object(r.useState)([]),E=Object(a.a)(h,2),y=E[0],I=E[1],w=Object(r.useState)(),S=Object(a.a)(w,2),C=S[0],x=S[1];if(C)throw C;var M=Object(r.useRef)();Object(j.e)(e,t,Object(r.useCallback)(Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.current){e.next=2;break}return e.abrupt("return",null);case 2:return e.abrupt("return",M.current);case 3:case"end":return e.stop()}}),e)}))),[]));var A=Object(j.a)(e,t);return Object(j.b)(e,t,Object(r.useCallback)((function(e,t){if(k(e)){var n=Object(d.a)(Object(d.a)({},e),{},{userId:t.userId,received:Date.now(),obsoleted:!1,peerIndex:t.peerIndex});I((function(e){return e.find((function(e){return e.userId===n.userId}))?e.map((function(e){return e.userId===n.userId?n:e})):[].concat(Object(l.a)(e),[n])}))}}),[])),Object(j.d)(e,t,Object(r.useCallback)((function(e){if(e&&"CONNECTION_CLOSED"===e.type){var t=e.peerIndex;I((function(e){var n=!1,a=e.map((function(e){return e.peerIndex===t?(n=!0,Object(d.a)(Object(d.a)({},e),{},{obsoleted:!0})):e}));return n?a:e}))}}),[])),Object(r.useEffect)((function(){var e,t=function(){var e=Date.now()-12e4,t=Date.now()-6e5;I((function(n){var a=!1,r=n.map((function(n){return n.received<e&&!n.obsoleted?(a=!0,Object(d.a)(Object(d.a)({},n),{},{obsoleted:!0})):n.received<t&&n.obsoleted?(a=!0,null):n})).filter((function(e){return e}));return a?r:n}))},a=!1,r=function(){var l=Object(b.a)(f.a.mark((function l(){var d,m;return f.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(!a){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,t(),l.next=6,g(s);case 6:if(d=l.sent,!a){l.next=9;break}return l.abrupt("return");case 9:O(d),A(m={image:d,info:{nickname:n,message:c,liveMode:i,micOn:u,speakerOn:o}}),M.current=m,l.next=19;break;case 16:l.prev=16,l.t0=l.catch(2),x(l.t0);case 19:e=setTimeout(r,12e4);case 20:case"end":return l.stop()}}),l,null,[[2,16]])})));return function(){return l.apply(this,arguments)}}();return r(),function(){a=!0,clearTimeout(e)}}),[e,t,s,n,c,i,u,o,A]),{myImage:v,roomImages:y}}(t,n,i,u,o,s,m,p),x=O.myImage,M=O.roomImages,A=function(e,t,n,c,i,u,o){var s=Object(r.useState)(null),l=Object(a.a)(s,2),m=l[0],p=l[1],v=Object(r.useState)({}),O=Object(a.a)(v,2),g=O[0],k=O[1],C=Object(r.useRef)(!0);Object(r.useEffect)((function(){return function(){C.current=!1}}),[]);var x=Object(r.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="video"===t.kind,!e.t0){e.next=5;break}return e.next=4,Object(I.c)(t);case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:a=function(e){C.current&&k((function(t){var a=n.userId,r=t[a],c=Object(E.a)(t,[a].map(y.a));return r===e?c:t}))},k((function(e){var r=e[n.userId],c=S(t,r,a);return r===c?e:Object(d.a)(Object(d.a)({},e),{},Object(h.a)({},n.userId,c))}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),M=Object(j.c)(e,t,x,n?"faceVideo":void 0),A=M.addTrack,L=M.removeTrack,N=Object(j.c)(e,t,x,c?"faceAudio":void 0),T=N.addTrack,D=N.removeTrack;return Object(r.useEffect)((function(){var e=null;return n&&A&&L&&Object(b.a)(f.a.mark((function t(){var n,r,c,i,o,s,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.a)(u);case 2:n=t.sent,r=n.stream,c=n.dispose,i=r.getVideoTracks(),o=Object(a.a)(i,1),s=o[0],A(s),l=function(e){C.current&&p((function(t){return t===e?null:t}))},p((function(e){return S(s,e,l)})),e=function(){L(s),c(),s.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,n,u,A,L]),Object(r.useEffect)((function(){var e=null;return c&&T&&D&&Object(b.a)(f.a.mark((function t(){var n,r,c,i,u,s,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(o);case 2:n=t.sent,r=n.stream,c=n.dispose,i=r.getAudioTracks(),u=Object(a.a)(i,1),s=u[0],T(s),l=function(e){C.current&&p((function(t){return t===e?null:t}))},p((function(e){return S(s,e,l)})),e=function(){D(s),c(),s.dispatchEvent(new Event("ended"))};case 10:case"end":return t.stop()}}),t)})))(),function(){e&&e()}}),[e,c,o,T,D]),Object(r.useEffect)((function(){if(m){m.getAudioTracks().forEach((function(e){e.enabled=i}));var e=function(e){var t=e.track;"audio"===t.kind&&(t.enabled=i)};return m.addEventListener("addtrack",e),function(){m.removeEventListener("addtrack",e)}}}),[m,i]),{faceStream:m,faceStreamMap:g}}(t,n,o,o,s,p,v),L=A.faceStream,N=A.faceStreamMap;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{image:x,nickname:i,statusMesg:u,liveMode:o,stream:L||void 0,muted:!0}),M.map((function(e){return c.a.createElement(C,{key:e.userId,image:e.image,nickname:e.info.nickname,statusMesg:e.info.message,obsoleted:e.obsoleted,liveMode:e.info.liveMode,stream:o&&N[e.userId]||void 0,muted:!m,micOn:e.info.micOn,speakerOn:e.info.speakerOn})})))})),M=n(67),A=n.n(M),L=(n(68),n(3)),N=function(e){return Array.isArray(e)&&2===e.length&&"string"===typeof e[0]&&"number"===typeof e[1]},T=function(e){return Object(p.a)(e)&&"string"===typeof e.messageId&&"string"===typeof e.nickname&&"number"===typeof e.createdAt&&"string"===typeof e.text&&function(e){return Array.isArray(e)&&e.every(N)}(e.replies)&&"string"===typeof e.time},D=function(e,t){var n=t[1]-e[1];return 0===n?e[0].length-t[0].length:n},P=function(e,t,n){var c=Object(r.useState)([]),i=Object(a.a)(c,2),u=i[0],o=i[1],s=Object(r.useRef)(u);Object(r.useEffect)((function(){s.current=u}));var m=Object(r.useCallback)((function(e){if(e.chatInReplyTo){var t=e.chatText,n=e.chatInReplyTo;o((function(e){return e.map((function(e){if(e.messageId===n){var a=new Map(e.replies);a.set(t,(a.get(t)||0)+1);var r=Object(l.a)(a.entries());return r.sort(D),Object(d.a)(Object(d.a)({},e),{},{replies:r})}return e}))}))}else{var a={messageId:e.messageId,nickname:e.nickname,createdAt:e.createdAt,text:e.chatText,replies:[],time:new Date(e.createdAt).toLocaleString().split(" ")[1].slice(0,-3)};o((function(e){if(e.some((function(e){return e.messageId===a.messageId})))return e;var t=[a].concat(Object(l.a)(e));return t.length>100&&t.pop(),t.sort((function(e,t){return t.createdAt-e.createdAt})),t}))}}),[]);Object(j.e)(e,t,Object(r.useCallback)(Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.current);case 1:case"end":return e.stop()}}),e)}))),[]));var v=Object(j.a)(e,t);Object(j.b)(e,t,Object(r.useCallback)((function(e){var t;t=e,!Object(p.a)(t)||"string"!==typeof t.userId||"string"!==typeof t.nickname||"string"!==typeof t.messageId||"number"!==typeof t.createdAt||"string"!==typeof t.chatText||"undefined"!==typeof t.chatInReplyTo&&"string"!==typeof t.chatInReplyTo?function(e){return Array.isArray(e)&&e.every(T)}(e)&&o((function(t){return 0===t.length?e:t})):m(e)}),[m]));var O=Object(r.useCallback)((function(e){var a={userId:t,nickname:n,messageId:Object(L.f)(),createdAt:Date.now(),chatText:e};v(a),m(a)}),[v,t,n,m]),g=Object(r.useCallback)((function(e,a){var r={userId:t,nickname:n,messageId:Object(L.f)(),createdAt:Date.now(),chatText:e,chatInReplyTo:a};v(r),m(r)}),[v,t,n,m]);return{chatList:u,sendChat:O,replyChat:g}},R=(n(69),n(50)),U=R.b,_=n(73),F=n.n(_),V=n(75),z=n.n(V),B=(n(90),{toolbar:["specialCharacters","|","bold","italic","link","blockQuote","|","imageUpload","insertTable","mediaEmbed","|","undo","redo"],balloonToolbar:["heading","|","bulletedList","numberedList","indent","outdent"],link:{addTargetToExternalLinks:!0}}),W=c.a.memo((function(e){var t=e.registerClear,n=e.onChange;return c.a.createElement(F.a,{editor:z.a,config:B,onInit:function(e){t((function(){e.setData("")})),function(e){e.plugins.get("SpecialCharacters").addItems("Emoji",[{title:"smiley face",character:"\ud83d\ude0a"},{title:"rocket",character:"\ud83d\ude80"},{title:"wind blowing face",character:"\ud83c\udf2c\ufe0f"},{title:"floppy disk",character:"\ud83d\udcbe"},{title:"heart",character:"\u2764\ufe0f"}])}(e)},onChange:function(e,t){var a=t.getData();n(a)}})})),H=c.a.memo((function(e){var t,n=e.item,i=e.replyChat,u=Object(r.useState)(!1),o=Object(a.a)(u,2),s=o[0],l=o[1],d=function(e){return i(e,n.messageId)};return c.a.createElement("li",{key:n.messageId,className:"MomentaryChat-listPart"},s&&c.a.createElement(U,{onSelect:function(e){d(e.native),l(!1)},style:{width:"100%"}}),c.a.createElement("div",{className:"MomentaryChat-listPart-header"},c.a.createElement("div",{className:"MomentaryChat-iconButton-container"},c.a.createElement("div",{className:"MomentaryChat-iconButton"},c.a.createElement("button",{type:"button",onClick:function(){l(!s)}},"+"))),c.a.createElement("span",{className:"MomentaryChat-nickname"},n.nickname||"No Name"),c.a.createElement("span",{className:"MomentaryChat-time"},n.time)),c.a.createElement("div",{className:"MomentaryChat-text ck-content",dangerouslySetInnerHTML:(t=n.text,{__html:A.a.sanitize(t,{ADD_ATTR:["target"]})})}),n.replies.map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return c.a.createElement("button",{key:n,className:"MomentaryChat-icon",type:"button",onClick:function(){return d(n)}},n," ",r)})))})),Q=c.a.memo((function(e){var t,n=e.chatList,a=e.replyChat,i=Object(r.useRef)(null),u=null===(t=n[0])||void 0===t?void 0:t.messageId;return Object(r.useEffect)((function(){i.current&&u&&(i.current.scrollTop=i.current.scrollHeight)}),[u]),c.a.createElement("ul",{className:"MomentaryChat-list",ref:i},n.map((function(e){return c.a.createElement(H,{key:e.messageId,item:e,replyChat:a})})))})),J=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,u=Object(r.useRef)(null),o=P(t,n,i),s=o.chatList,l=o.sendChat,d=o.replyChat,m=Object(r.useRef)(),f=Object(r.useState)(""),b=Object(a.a)(f,2),p=b[0],v=b[1];return c.a.createElement("div",{className:"MomentaryChat-container",ref:u},c.a.createElement(Q,{chatList:s,replyChat:d}),c.a.createElement("div",{className:"MomentaryChat-editor"},c.a.createElement(W,{registerClear:function(e){m.current=e},onChange:v})),c.a.createElement("div",{className:"MomentaryChat-button"},c.a.createElement("button",{type:"button",onClick:function(){p&&(l(p),v(""),m.current&&m.current())},disabled:!p},"Send")))})),K=(n(91),c.a.memo((function(e){var t=e.liveMode,n=e.setLiveMode,a=e.micOn,r=e.setMicOn,i=e.speakerOn,u=e.setSpeakerOn,o=e.secondColumnOpen,s=e.setSecondColumnOpen;return c.a.createElement("div",{className:"ControlPanel-container"},c.a.createElement("button",{type:"button",onClick:function(){return n((function(e){return!e}))},title:t?"Disable Live Mode":"Enable Live Mode"},"\ud83c\udfa5",!t&&c.a.createElement("span",{className:"ControlPanel-disabled"},"\u274c")),c.a.createElement("button",{type:"button",onClick:function(){return s((function(e){return!e}))},title:o?"Close Right Pane":"Open Right Pane"},o?c.a.createElement(c.a.Fragment,null,"\u25c0"):c.a.createElement(c.a.Fragment,null,"\u25b6")),c.a.createElement("button",{type:"button",onClick:function(){return r((function(e){return!e}))},title:a?"Disable Mic":"Enable Mic"},"\ud83c\udfa4",!a&&c.a.createElement("span",{className:"ControlPanel-disabled"},"\u274c")),c.a.createElement("button",{type:"button",onClick:function(){return u((function(e){return!e}))},title:i?"Disable Speaker":"Enable Speaker"},c.a.createElement(c.a.Fragment,null,"\ud83d\udd08"),!i&&c.a.createElement("span",{className:"ControlPanel-disabled"},"\u274c")))}))),Y=(n(92),n(63)),G="true"!==o("config_hidden"),q="remote-faces://".concat(window.location.href.replace(/^https:\/\//,"")),X=c.a.memo((function(e){var t=e.initialText,n=e.onUpdate,i=e.buttonLabel,u=e.placeholder,o=e.clearOnUpdate,s=Object(r.useState)(t),l=Object(a.a)(s,2),d=l[0],m=l[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d&&(n(d),o&&m(""))}},c.a.createElement("input",{value:d,onChange:function(e){return m(e.target.value)},placeholder:u}),i&&c.a.createElement("button",{type:"submit",disabled:!d},i))})),Z=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,o=e.setNickname,s=e.videoDeviceId,l=e.setVideoDeviceId,d=e.audioDeviceId,m=e.setAudioDeviceId,f=Object(r.useState)(G),b=Object(a.a)(f,2),p=b[0],v=b[1];Object(r.useEffect)((function(){u("config_hidden",p?"false":"true")}),[p]);var O=Object(Y.b)(),g=Object(Y.a)(),k=Object(j.d)(t,n);return c.a.createElement("div",{className:"SettingPanel-container"},c.a.createElement("button",{type:"button",className:"SettingPanel-config-toggle",onClick:function(){return v((function(e){return!e}))}},"Setting",p?c.a.createElement(c.a.Fragment,null,"\u25bc"):c.a.createElement(c.a.Fragment,null,"\u25b6")),p&&c.a.createElement("div",{className:"SettingPanel-config"},c.a.createElement("div",{className:"SettingPanel-config-row"},c.a.createElement("span",{title:"Share this link with your colleagues"},"Room Link:"," "),c.a.createElement("input",{value:window.location.href,readOnly:!0})," ",c.a.createElement("a",{href:q,title:"Open this link in the desktop app"},"Open App")),c.a.createElement("div",{className:"SettingPanel-config-row"},"Your Name:"," ",c.a.createElement(X,{initialText:i,onUpdate:function(e){o(e),u("nickname",e)},placeholder:"Enter your name",buttonLabel:"Set"})),c.a.createElement("div",{className:"SettingPanel-config-row"},"Select Camera:"," ",c.a.createElement("select",{value:s,onChange:function(e){l(e.target.value),u("faceimage_video_device_id",e.target.value)}},O.map((function(e){return c.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),c.a.createElement("div",{className:"SettingPanel-config-row"},"Select Mic:"," ",c.a.createElement("select",{value:d,onChange:function(e){m(e.target.value),u("faceimage_audio_device_id",e.target.value)}},g.map((function(e){return c.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label)})))),c.a.createElement("div",{className:"SettingPanel-status"},JSON.stringify(k))))})),$=(n(93),c.a.memo((function(e){var t=e.initialText,n=e.onUpdate,i=e.buttonLabel,u=e.placeholder,o=e.clearOnUpdate,s=Object(r.useState)(t),l=Object(a.a)(s,2),d=l[0],m=l[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d&&(n(d),o&&m(""))}},c.a.createElement("input",{value:d,onChange:function(e){return m(e.target.value)},placeholder:u}),i&&c.a.createElement("button",{type:"submit",disabled:!d},i))}))),ee=c.a.memo((function(e){var t=e.emoji,n=e.setEmoji,i=e.setStatusMesg,u=Object(r.useState)(!1),o=Object(a.a)(u,2),s=o[0],l=o[1];return c.a.createElement("div",{className:"UserStatus-container"},c.a.createElement("div",{className:"UserStatus-status-area"},c.a.createElement("div",{className:"UserStatus-emoji"},c.a.createElement("button",{type:"button",onClick:function(){l(!s)}},t?c.a.createElement(R.a,{emoji:t,size:10}):":)")),t&&c.a.createElement("div",{className:"UserStatus-statusmesg"},c.a.createElement($,{initialText:"",onUpdate:i,placeholder:"Enter status message...",buttonLabel:"Set"})),c.a.createElement("button",{type:"button",onClick:function(){n(null),i(""),l(!1)},disabled:!t},"Clear")),s&&c.a.createElement(U,{onSelect:function(e){n(e),l(!1)},style:{width:"100%"}}))})),te=(n(94),{Welcome:c.a.lazy((function(){return n.e(10).then(n.bind(null,103))})),"Screen Share":c.a.lazy((function(){return n.e(8).then(n.bind(null,105))})),"Video Share":c.a.lazy((function(){return n.e(9).then(n.bind(null,106))})),"White Board":c.a.lazy((function(){return n.e(5).then(n.bind(null,107))})),"Go Board":c.a.lazy((function(){return Promise.all([n.e(11),n.e(6)]).then(n.bind(null,108))}))}),ne=c.a.memo((function(e){var t=e.roomId,n=e.userId,i=e.nickname,u=Object(r.useState)("Welcome"),o=Object(a.a)(u,2),s=o[0],l=o[1];return c.a.createElement("div",{className:"SelectivePane-container"},c.a.createElement("div",{className:"SelectivePane-select"},"\u2630",c.a.createElement("select",{value:s,onChange:function(e){return l(e.target.value)}},Object.keys(te).map((function(e){return c.a.createElement("option",{key:e,value:e},e)})))),Object(r.createElement)(te[s],{roomId:t,userId:n,nickname:i}))})),ae=o("nickname"),re=o("faceimage_video_device_id"),ce=o("faceimage_audio_device_id"),ie=c.a.memo((function(e){var t=e.roomId,n=e.userId,u=Object(r.useState)(ae),o=Object(a.a)(u,2),l=o[0],d=o[1],m=Object(r.useState)(""),f=Object(a.a)(m,2),b=f[0],p=f[1],v=Object(r.useState)(null),O=Object(a.a)(v,2),g=O[0],j=O[1];Object(r.useEffect)((function(){Object(i.e)(t)}),[t]);var k=Object(r.useState)(re),h=Object(a.a)(k,2),E=h[0],y=h[1],I=Object(r.useState)(ce),w=Object(a.a)(I,2),S=w[0],C=w[1],M=Object(r.useState)(!1),A=Object(a.a)(M,2),L=A[0],N=A[1],T=Object(r.useState)(!1),D=Object(a.a)(T,2),P=D[0],R=D[1],U=Object(r.useState)(!1),_=Object(a.a)(U,2),F=_[0],V=_[1],z=Object(r.useState)(!0),B=Object(a.a)(z,2),W=B[0],H=B[1],Q=Object(r.useState)(!0),Y=Object(a.a)(Q,2),G=Y[0],q=Y[1];return Object(s.a)(t,n),c.a.createElement("div",{className:"SingleRoom-container"},c.a.createElement("div",{className:"SingleRoom-1st-column"},c.a.createElement(K,{liveMode:L,setLiveMode:N,micOn:P,setMicOn:R,speakerOn:F,setSpeakerOn:V,secondColumnOpen:W,setSecondColumnOpen:H}),c.a.createElement(x,{roomId:t,userId:n,videoDeviceId:E,audioDeviceId:S,nickname:l,statusMesg:"".concat((null===g||void 0===g?void 0:g.native)||" ").concat(b),liveMode:L,micOn:P,speakerOn:F})),c.a.createElement("div",{className:"SingleRoom-2nd-column",style:{width:W?"inherit":"0"}},c.a.createElement("button",{type:"button",className:"SingleRoom-toggle-3rd-column",onClick:function(){return q((function(e){return!e}))},title:G?"Close Right Pane":"Open Right Pane"},G?c.a.createElement(c.a.Fragment,null,"\u25c0"):c.a.createElement(c.a.Fragment,null,"\u25b6")),c.a.createElement(ee,{emoji:g,setEmoji:j,setStatusMesg:p}),c.a.createElement(Z,{roomId:t,userId:n,nickname:l,setNickname:d,videoDeviceId:E,setVideoDeviceId:y,audioDeviceId:S,setAudioDeviceId:C}),c.a.createElement(J,{roomId:t,userId:n,nickname:l})),c.a.createElement("div",{className:"SingleRoom-3rd-column",style:{display:G?"inherit":"none"}},c.a.createElement(ne,{roomId:t,userId:n,nickname:l})))}));t.default=ie},40:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return p}));var a=n(1),r=n.n(a),c=n(2),i=n(5),u=n(0),o=n(12),s=new Map,l=function(e,t,n){var a="".concat(e,"_").concat(t),r=s.get(a);if(!r){var c=new Set,i=new Set,u=new Set,l=new Set;r={room:Object(o.b)(e,t,(function(e){c.forEach((function(t){t(e)}))}),(function(e){i.forEach((function(t){t(e)}))}),(function(e,t){u.forEach((function(n){n(e,t)}))}),(function(e,t){l.forEach((function(n){(0,n.listener)(e,t)}))})),networkStatusListeners:c,newPeerListeners:i,dataListeners:u,trackListeners:l,count:0},s.set(a,r)}if(n.networkStatusListener&&r.networkStatusListeners.add(n.networkStatusListener),n.newPeerListener&&r.newPeerListeners.add(n.newPeerListener),n.dataListener&&r.dataListeners.add(n.dataListener),n.trackListener){var d=new Set(Array.from(r.trackListeners).map((function(e){return e.mediaType}))),m=d.size;r.trackListeners.add(n.trackListener),d.add(n.trackListener.mediaType),m!==d.size&&r.room.acceptMediaTypes(Array.from(d))}r.count+=1;var f=r;return{broadcastData:r.room.broadcastData,sendData:r.room.sendData,addTrack:r.room.addTrack,removeTrack:r.room.removeTrack,unregister:function(){if(n.networkStatusListener&&f.networkStatusListeners.delete(n.networkStatusListener),n.newPeerListener&&f.newPeerListeners.delete(n.newPeerListener),n.dataListener&&f.dataListeners.delete(n.dataListener),n.trackListener){var e=new Set(Array.from(f.trackListeners).map((function(e){return e.mediaType}))),t=e.size;f.trackListeners.delete(n.trackListener),t!==(e=new Set(Array.from(f.trackListeners).map((function(e){return e.mediaType})))).size&&f.room.acceptMediaTypes(Array.from(e))}f.count-=1,f.count<=0&&(f.room.dispose(),s.delete(a))}}},d=function(e,t,n){var a=Object(u.useState)(),r=Object(i.a)(a,2),c=r[0],o=r[1];if(c&&"UNKNOWN_ERROR"===c.type)throw new Error("Network Error: ".concat(c.err.message));return Object(u.useEffect)((function(){return l(e,t,{networkStatusListener:function(e){o(e),n&&n(e)}}).unregister}),[e,t,n]),c},m=function(e,t,n){Object(u.useEffect)((function(){var a=l(e,t,{newPeerListener:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:null!==(a=e.sent)&&u(a,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),i=a.unregister,u=a.sendData;return i}),[e,t,n])},f=function(e,t){var n=Object(u.useRef)(),a=Object(u.useCallback)((function(){n.current&&n.current.apply(n,arguments)}),[]);return Object(u.useEffect)((function(){var a=l(e,t,{});return n.current=a.broadcastData,a.unregister}),[e,t]),a},b=function(e,t,n){Object(u.useEffect)((function(){return l(e,t,{dataListener:n}).unregister}),[e,t,n])},p=function(e,t,n,a){var r=Object(u.useState)({}),c=Object(i.a)(r,2),o=c[0],s=c[1];return Object(u.useEffect)((function(){if(a){var r=l(e,t,{trackListener:{mediaType:a,listener:n}});return s({addTrack:function(e){return r.addTrack(a,e)},removeTrack:function(e){return r.removeTrack(a,e)}}),function(){s({}),r.unregister()}}}),[e,t,n,a]),o}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(5),r=n(0),c=n(7),i=n(40),u=[],o=function(e){var t={};return u.forEach((function(n){n.roomId===e&&(t[n.userId]=n.nickname)})),t},s=function(e,t){var n=Object(r.useState)((function(){return o(e)})),s=Object(a.a)(n,2),l=s[0],d=s[1];return Object(i.b)(e,t,Object(r.useCallback)((function(t,n){if(a=t,Object(c.a)(a)&&Object(c.a)(a.info)&&"string"===typeof a.info.nickname){var a,r=u.findIndex((function(t){return t.roomId===e&&t.userId===n.userId})),i=Date.now();r>=0?(u[r].nickname!==t.info.nickname&&(u[r].nickname=t.info.nickname),u[r].lastUpdated=i):u.push({roomId:e,userId:n.userId,nickname:t.info.nickname,lastUpdated:i});for(var s=u.length-1;s>=0;s-=1)u[s].lastUpdated+6e5<i&&u.splice(s,1);d((function(t){var n=o(e),a=Object.keys(n);return a.length===Object.keys(t).length&&a.every((function(e){return n[e]===t[e]}))?t:n}))}}),[e])),l}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return m}));var a=n(1),r=n.n(a),c=n(5),i=n(2),u=n(6),o=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,u,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,i=a.getVideoTracks(),u=Object(c.a)(i,1),o=u[0],s=function(){o.stop()},e.abrupt("return",{stream:a,dispose:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,o,s,l,d,m,f,b,p,v,O,g,j,k,h,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?{video:{deviceId:t}}:{video:!0},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:return a=e.sent,i=a.getVideoTracks(),o=Object(c.a)(i,1),s=o[0],(l=document.getElementById("internal-video")).style.display="block",l.srcObject=a,e.next=10,Object(u.a)(1e3);case 10:return d=l.videoWidth,m=l.videoHeight,f=document.getElementById("internal-canvas"),b=f.getContext("2d"),72,72,f.width=72,f.height=72,p=Math.max(72/d,72/m),v=Math.min(d,72/p),O=Math.min(m,72/p),g=(d-v)/2,j=(m-O)/2,function e(){b.drawImage(l,g,j,v,O,0,0,72,72),k=setTimeout(e,1e3/15)}(),h=f.captureStream(),E=function(){l.style.display="none",clearTimeout(k),s.stop(),h.getVideoTracks()[0].stop()},e.abrupt("return",{stream:h,dispose:E});case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,(n=document.createElement("video")).srcObject=new MediaStream([t]),a=0;case 4:if(!(a<50)){e.next=14;break}return e.next=7,Object(u.a)(100);case 7:if(c=n.videoWidth,i=n.videoHeight,!(c>0&&i>0)){e.next=11;break}return e.abrupt("return",72===c&&72===i);case 11:a+=1,e.next=4;break;case 14:return e.abrupt("return",!0);case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),d=new WeakMap,m=function(e){if(d.has(e))return d.get(e);var t=l(e);return d.set(e,t),t}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(1),r=n.n(a),c=n(2),i=n(5),u=n(0),o=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"videoinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,n=t.filter((function(e){return"audioinput"===e.kind})).map((function(e){return{label:e.label,deviceId:e.deviceId}})),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.useEffect)((function(){Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n},d=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.useEffect)((function(){Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),n}},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}}]);
//# sourceMappingURL=4.bf8dbb2f.chunk.js.map