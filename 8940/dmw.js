(self.webpackChunkgb_printer_web=self.webpackChunkgb_printer_web||[]).push([[991],{41238:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return G}});n(41539),n(88674),n(32564),n(83710),n(92222),n(21249),n(66992),n(78783),n(33948),n(84944),n(57327),n(69826),n(68309),n(69070),n(47941),n(82526),n(38880),n(89554),n(54747),n(49337),n(33321);var r=n(27484),o=n.n(r),i=n(25009),a=n.n(i),u=n(42146),c=n(15203),s=(n(24812),n(74916),n(23123),n(69600),n(15306),n(23157),n(19601),n(4723),n(68304),n(30489),n(12419),n(78011),n(79753),n(41817),n(32165),n(91038),n(47042),n(18475)),l=n(17187),f=n(36965),h=n(35820),p=n(25108);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?P(t):e}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var S=encodeURIComponent("".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname)),O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(i,t);var e,n,r,o=x(i);function i(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this)).queueCallback=e,n.throttle=30;var r=t.accessToken,a=t.expiresAt,u=t.refreshToken,c=t.path,l=t.autoDropboxSync;return n.setRootPath(c),n.dbx=new s.Dropbox({clientId:"err6neqzlljod7b",accessToken:r,accessTokenExpiresAt:new Date(a),refreshToken:u}),window.dbx=n.dbx,n.requestError=n.requestError.bind(P(n)),l&&n.startLongPollSettings(),n}return e=i,n=[{key:"addToQueue",value:function(){return this.dbx.auth.getAccessToken()?this.queueCallback.apply(this,arguments):Promise.reject()}},{key:"setRootPath",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.rootPath=(0,h.Z)(t).split("/")}},{key:"toPath",value:function(t){var e=[].concat(b(this.rootPath),b(t.split("/"))).filter(Boolean);return"/".concat(e.join("/"))}},{key:"inSettingsPath",value:function(t){var e=this.toPath("settings");return(0,h.Z)(t.replace(e,""))}},{key:"checkLoginStatus",value:function(){var t=this;return this.dbx.auth.checkAndRefreshAccessToken().catch(this.requestError).then((function(){var e=t.dbx.auth.getAccessToken(),n=t.dbx.auth.getAccessTokenExpiresAt().getTime(),r=n-(new Date).getTime();return t.emit("loginDataUpdate",{accessToken:e,expiresAt:n}),e&&r>1e3})).catch((function(){return!1}))}},{key:"startAuth",value:function(){var t=this;this.dbx.auth.getAuthenticationUrl(S,void 0,"code","offline",void 0,void 0,!0).then((function(e){window.sessionStorage.setItem("dropboxCodeVerifier",t.dbx.auth.getCodeVerifier()),window.location.replace(e)}))}},{key:"codeAuth",value:function(t){var e=this;this.dbx.auth.setCodeVerifier(window.sessionStorage.getItem("dropboxCodeVerifier")),window.sessionStorage.removeItem("dropboxCodeVerifier"),this.dbx.auth.getAccessTokenFromCode(S,t).then((function(t){var n=t.result,r=n.refresh_token,o=n.access_token,i=n.expires_in,a=(new Date).getTime()+1e3*i;e.dbx.auth.setAccessToken(t.result.access_token),e.dbx.auth.setAccessTokenExpiresAt(new Date(a)),e.emit("loginDataUpdate",{refreshToken:r,accessToken:o,expiresAt:a})}))}},{key:"requestError",value:function(t){throw t.error.error_summary.startsWith("expired_access_token")&&(this.dbx.auth.setAccessTokenExpiresAt(new Date(0)),this.dbx.auth.setAccessToken(null)),new Error(t)}},{key:"getRemoteContents",value:function(t){var e=this,n=["images","frames"],r="diff"===t;return this.checkLoginStatus().then((function(t){if(!t)throw new Error("not logged in");return e.addToQueue("dbx.filesDownload /settings.json",e.throttle,(function(){return e.dbx.filesDownload({path:e.toPath("/settings/settings.json")}).catch(e.requestError)}),r).catch((function(){return{result:{fileBlob:new Blob(b("{}"),{type:"text/plain"})}}})).then((function(t){var o=t.result.fileBlob;return(0,f.Z)(o,"text").then((function(t){return JSON.parse(t)})).then((function(t){return Promise.all(n.map((function(t){return e.addToQueue("dbx.filesListFolder /".concat(t),e.throttle,(function(){return e.dbx.filesListFolder({path:e.toPath("/settings/".concat(t)),limit:250,recursive:!0}).catch(e.requestError)}),r).catch((function(){return{result:{entries:[],has_more:!1}}})).then((function(t){var n=t.result,o=n.entries,i=n.has_more,a=n.cursor;return(i?e.getMoreContents(a,o,r):Promise.resolve(o)).then((function(t){return t.filter((function(t){return"file"===t[".tag"]}))}))}))}))).then((function(n){var o=y(n,2),i=o[0],a=o[1];return{images:e.augmentFileList("images",i,r),frames:e.augmentFileList("frames",a,r),settings:t}}))}))}))}))}},{key:"getImageContents",value:function(){var t=this;return this.addToQueue("dbx.filesListFolder /images",this.throttle,(function(){return t.dbx.filesListFolder({path:t.toPath("/images"),limit:250,recursive:!0}).catch(t.requestError)})).catch((function(){return{result:{entries:[],has_more:!1}}})).then((function(e){var n=e.result,r=n.entries,o=n.has_more,i=n.cursor;return(o?t.getMoreContents(i,r):Promise.resolve(r)).then((function(t){return t.filter((function(t){return"file"===t[".tag"]}))}))}))}},{key:"getMoreContents",value:function(t,e,n){var r=this;return this.addToQueue("dbx.filesListFolderContinue ".concat(t),this.throttle,(function(){return r.dbx.filesListFolderContinue({cursor:t}).catch(r.requestError)}),n).then((function(t){var o=t.result,i=o.entries,a=o.has_more,u=o.cursor,c=e.concat(i);return a?r.getMoreContents(u,c,n):c}))}},{key:"augmentFileList",value:function(t,e,n){var r=this;return e.map((function(o,i){var a=o.path_lower,u=o.name,c=r.inSettingsPath(a),s={path:c,name:u,getFileContent:function(){return r.getFileContent(c,i,e.length,n)}};switch(t){case"images":return Object.assign(s,{hash:u.substr(0,40)});case"frames":return Object.assign(s,{id:u.match(/^[a-z]+[0-9]+/gi)[0]});default:return s}}))}},{key:"getFileContent",value:function(t,e,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i="dbx.filesDownload (".concat(e+1,"/").concat(n,") ").concat(t);return this.addToQueue(i,this.throttle,(function(){return r.dbx.filesDownload({path:r.toPath("/settings/".concat(t))}).catch(r.requestError)}),o).then((function(t){var e=t.result.fileBlob;return(0,f.Z)(e,"text")}))}},{key:"upload",value:function(t,e){var n=this,r=t.upload,o=void 0===r?[]:r,i=t.del,a=void 0===i?[]:i;return Promise.all([o.length?Promise.all(o.map((function(t,r){return n.addToQueue("dbx.filesUpload (".concat(r+1,"/").concat(o.length,") ").concat(t.destination),n.throttle,(function(){return n.dbx.filesUpload({path:n.toPath("/".concat(e,"/").concat(t.destination)),contents:t.blob,mode:"overwrite"}).catch(n.requestError)})).then((function(t){return t.result}))}))):[],a.length?this.addToQueue("dbx.filesDeleteBatch ".concat(a.length," files"),this.throttle,(function(){return n.dbx.filesDeleteBatch({entries:a.map((function(t){var e=t.path;return{path:n.toPath("/settings/".concat(e))}}))}).catch(n.requestError)})).then((function(t){var e=t.result.async_job_id;return function t(){return n.addToQueue("dbx.filesDeleteBatchCheck ".concat(e),2e3,(function(){return n.dbx.filesDeleteBatchCheck({async_job_id:e}).catch(n.requestError)})).then((function(e){var n=e.result,r=n[".tag"],o=n.entries;return"in_progress"===r?t():o.map((function(t){return t.metadata}))}))}()})):[]]).then((function(t){var e=y(t,2),n=e[0],r=e[1];p.log({uploaded:n,deleted:r})}))}},{key:"startLongPollSettings",value:function(){var t=this;p.info("Start dropbox longpolling"),this.dbx.filesListFolderGetLatestCursor({path:this.toPath("/settings"),recursive:!1,include_media_info:!1,include_deleted:!1,include_has_explicit_shared_members:!1}).then((function(e){var n=e.result.cursor,r=function(){return t.dbx.filesListFolderLongpoll({cursor:n,timeout:480})};return r().then((function(e){var n=e.result.changes;return p.info("Longpoll info. Changes: ",n),n?(t.emit("settingsChanged"),t.addToQueue("Restart longpolling",t.throttle,(function(){return t.startLongPollSettings(),Promise.resolve(null)}),!0)):r()}))})).catch((function(t){p.error(t)}))}}],n&&v(e.prototype,n),r&&v(e,r),i}(l.EventEmitter),A=O,T=n(55835),C=n(48764).Buffer,E=4194304;function _(t,e,n){this.overallHasher=t,this.blockHasher=e,this.blockPos=n}_.prototype.update=function(t,e){if(null===this.overallHasher)throw new Error("can't use this object anymore; you already called digest()");var n=t;if(!C.isBuffer(n)){if(void 0!==e&&"utf8"!==e&&"ascii"!==e&&"latin1"!==e)throw new Error("Invalid 'inputEncoding': ".concat(JSON.stringify(e)));n=C.from(t,e)}for(var r=0;r<n.length;){this.blockPos===E&&(this.overallHasher.update(this.blockHasher.digest()),this.blockHasher=T.createHash("sha256"),this.blockPos=0);var o=E-this.blockPos,i=Math.min(n.length,r+o),a=i-r;this.blockHasher.update(n.slice(r,i)),this.blockPos+=a,r=i}},_.prototype.digest=function(t){if(null===this.overallHasher)throw new Error("can't use this object anymore; you already called digest()");this.blockPos>0&&(this.overallHasher.update(this.blockHasher.digest()),this.blockHasher=null);var e=this.overallHasher.digest(t);return this.overallHasher=null,e};n(60285),n(64765);var D,I=function(){var t=new URLSearchParams(window.location.search).get("code");return t?(window.history.replaceState({},document.title,"./"),window.location.replace("#/settings/dropbox"),{dropboxCode:t}):{}},R=n(98642),F=n(39506),U=n(28014),B=n(93572),L=n(81477),H=n(15177),Z=n(13629),q=n(25108);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){$(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z=function(){},G=function(t){var e=new(a())(1,1/0);z=function(n){return function(r,o,i,a){return e.add((function(){return new Promise((function(e,u){window.setTimeout((function(){a||t.dispatch({type:Z.ON,payload:{timestamp:(new Date).getTime()/1e3,message:"".concat(n," runs ").concat(r)}}),i().then(e).catch(u)}),o)}))}))}};var n=function(){t.dispatch({type:Z.eP,payload:{storageType:"dropbox",direction:"diff"}})};D=new A(t.getState().dropboxStorage,z("Dropbox")),t.getState().dropboxStorage.autoDropboxSync&&(n(),D.on("settingsChanged",(function(){n()}))),D.on("loginDataUpdate",(function(e){t.dispatch({type:Z.wb,payload:Q(Q({},t.getState().dropboxStorage),e)})}));var r=I().dropboxCode;return r&&D.codeAuth(r),function(e){var n=t.getState();if(e.type===Z.wb&&D.setRootPath(n.dropboxStorage.path||"/"),e.type===Z.eP&&("dropbox"===e.payload.storageType&&D.getRemoteContents(e.payload.direction).then((function(r){switch(e.payload.direction){case"diff":var i;return t.dispatch({type:Z.oI,payload:r.settings.state.lastUpdateUTC}),r.settings.state.lastUpdateUTC>(null==n||null===(i=n.syncLastUpdate)||void 0===i?void 0:i.local)&&t.dispatch({type:Z.jH,payload:{message:"There is newer content in your dropbox!",questions:function(){var t;return["Your dropbox contains changes from ".concat(o()(1e3*r.settings.state.lastUpdateUTC).format(H.W4)),"Your last local update was ".concat(o()(1e3*(null==n||null===(t=n.syncLastUpdate)||void 0===t?void 0:t.local)).format(H.W4),"."),"Do you want to load the changes?"].map((function(t,e){return{label:t,key:"info".concat(e),type:"info"}}))},confirm:function(){t.dispatch({type:Z.Gp}),t.dispatch({type:Z.eP,payload:{storageType:"dropbox",direction:"down"}})},deny:function(){t.dispatch({type:Z.Gp})}}}),Promise.resolve(null);case"up":var a,s=(null==n||null===(a=n.syncLastUpdate)||void 0===a?void 0:a.local)||Math.floor((new Date).getTime()/1e3);return(0,u.Z)(t,r,s,z("GBPrinter")).then((function(t){return D.upload(t,"settings")})).then((function(e){return t.dispatch({type:Z.oI,payload:s}),e}));case"down":return(0,c.ZP)(r).then((function(e){return t.dispatch({type:Z.yK,payload:r.settings}),e}));default:return Promise.reject(new Error("dropbox sync: wrong sync case"))}})).then((function(n){t.dispatch({type:"diff"===e.payload.direction?Z.bM:Z.Ki,payload:{syncResult:n,storageType:"dropbox"}})})).catch((function(e){q.error(e),t.dispatch({type:Z.pn,payload:e.message})})),"dropboximages"===e.payload.storageType)){var r=(0,L.Z)(n),i=(0,R.j)(n),a=(0,U.Z)(n);Promise.all(r.map((function(t,e){return z("Generate images and hashes")("".concat(e+1,"/").concat(r.length),10,(function(){var e=(0,F.Z)(n,t);return a(t).then(i(e,t)).then((function(t){return Promise.all(t.map((function(t){var e=new _(T.createHash("sha256"),T.createHash("sha256"),0);return t.blob.arrayBuffer().then((function(n){return e.update(n),Q(Q({},t),{},{dropboxContentHash:e.digest("hex")})}))})))}))}))}))).then((function(t){return t.flat()})).then(B.Z).then((function(t){return D.getImageContents().then((function(n){if("up"===e.payload.direction){var r=t.filter((function(t){var e=t.dropboxContentHash,r=t.uFilename;return!n.find((function(t){var n=t.content_hash,o=t.name;return n===e&&o===r}))})).map((function(t){return Q(Q({},t),{},{destination:t.uFilename})}));return D.upload({upload:r,del:[]},"images")}return Promise.reject(new Error("dropbox sync: wrong sync case"))}))})).then((function(e){t.dispatch({type:Z.Ki,payload:{syncResult:e,storageType:"dropbox"}})})).catch((function(e){q.error(e),t.dispatch({type:Z.pn,payload:e.message})}))}e.type===Z.eh&&D.startAuth(),e.type===Z.UF&&D.getFileContent("images/".concat(e.payload,".txt"),0,1,!0).then(c.T3).then((function(){t.dispatch({type:Z.hT,payload:[]})}))}}},35820:function(t,e,n){"use strict";n(74916),n(15306);e.Z=function(t){return t.replace(/[^a-z0-9/\\._-]/gi,"").replace(/[\\/]+/gi,"/").replace(/^\//,"").replace(/\/$/,"")}},42146:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});n(21249),n(57327),n(69826),n(68309),n(74916),n(4723),n(66992),n(41539),n(88674),n(78783),n(33948),n(92222),n(69070),n(47941),n(82526),n(38880),n(89554),n(54747),n(49337),n(33321),n(79753),n(41817),n(32165),n(91038),n(47042);var r=n(75226),o=n(28014),i=n(39506),a=n(75500);n(82772);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t,e,n,r){var o=t.images,i=t.frames;return{upload:e.filter((function(t){var e=t.destination;return!o.find((function(t){return t.path===e}))&&!i.find((function(t){return t.path===e}))})),del:[].concat(u(u(o).filter((function(t){var o=t.path;return!n.find((function(t){var e=t.destination;return o===e}))&&!e.find((function(t){var e=t.destination;return o===e}))&&!r.find((function(t){return o.indexOf(t)>=-1}))}))),u(u(i).filter((function(t){var r=t.path;return!n.find((function(t){var e=t.destination;return r===e}))&&!e.find((function(t){var e=t.destination;return r===e}))}))))}},l=(n(23123),n(69600),n(14929)),f=n(25108);function h(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=function(t){var e=(0,l.Z)(t);return function(t,n){var r=[],o=[],i={};t.forEach((function(t){var e=t.hash,n=t.files,a=t.inRepo;o.push.apply(o,h(a.map((function(t){var e=t.path,n=e.split("/")[0];return i[n]=i[n]?i[n]+1:1,{destination:e}})))),r.push.apply(r,h(n.map((function(t){var n=t.blob,r=t.folder,o=function(t){switch(t){case"image/png":return"png";case"image/jpg":case"image/jpeg":return"jpg";case"image/webp":return"webp";case"text/plain":return"txt";case"text/markdown":return"md";case"application/json":case"text/json":return"json";default:return f.warn('unknown file extension for type "'.concat(t,'"')),"none"}}(n.type),a=r||o;return i[a]=i[a]?i[a]+1:1,{destination:"".concat(a,"/").concat(e,".").concat(o),blob:n}}))))}));var a=["## Files in this repo:"].concat(h(Object.keys(i).map((function(t){return" * ".concat(t,": [").concat(i[t],"](/").concat(t,")")})))).join("\n");return e("remote",n).then((function(t){return r.push({destination:"README.md",blob:new Blob(h(a),{type:"text/plain"})},{destination:"settings.json",blob:new Blob(h(t),{type:"application/json"})}),{toUpload:r.filter(Boolean),toKeep:o.filter(Boolean)}}))}};function y(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t,e,n,u){var c=t.getState(),l=(0,r.Z)(g(g({},c),{},{exportScaleFactors:[1],exportFileTypes:["txt"],handleExportFrame:"keep"})),f=d(t),h=[],p=c.images.filter((function(t){return!t.hashes})).map((function(t){return g(g({},t),{},{inRepo:[e.images.find((function(e){return e.name.substr(0,40)===t.hash}))].filter(Boolean)})})),b=p.length,m=c.frames.map((function(t){return g(g({},t),{},{inRepo:[e.frames.find((function(e){return e.name.match(/^[a-z]+[0-9]+/gi)[0]===t.id}))].filter(Boolean)})})),v=m.length;return Promise.all([].concat(y(p.map((function(t,e){return t.inRepo.length?g(g({},t),{},{inRepo:t.inRepo,files:[]}):u("loadImageTiles (".concat(e+1,"/").concat(b,") ").concat(t.title),3,(function(){return(0,o.Z)(c)(t,!0).then((function(e){return e.length?l((0,i.Z)(c,t),t)(e).then((function(e){return g(g({},t),{},{files:e})})):(h.push(t.hash),Promise.resolve(null))}))}))}))),y(m.map((function(t,e){return t.inRepo.length?g(g({},t),{},{inRepo:t.inRepo,files:[]}):u("loadFrameData (".concat(e+1,"/").concat(v,") ").concat(t.id),3,(function(){return(0,a.v)(t.id).then((function(e){return g(g({},t),{},{hash:t.id,files:[{folder:"frames",filename:"",blob:new Blob(new Array(JSON.stringify(e||"{}",null,2)),{type:"application/json"}),title:t.name}]})}))}))}))))).then((function(t){return f(t.filter(Boolean),n)})).then((function(t){var n=t.toUpload,r=t.toKeep;return s(e,n,r,h)}))}},15203:function(t,e,n){"use strict";n.d(e,{T3:function(){return u}});n(57327),n(74916),n(23123),n(4723),n(69600),n(43290),n(92222),n(84944),n(21249),n(66992),n(41539),n(88674),n(78783),n(33948),n(79753),n(82526),n(41817),n(32165),n(91038),n(47042),n(68309);var r=n(7704),o=n(75500);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(t){var e=t.split("\n").filter((function(t){return t.match(/^[0-9a-f ]+$/gi)}));return(0,r.a1)(e)};e.ZP=function(t){var e=t.images,n=t.frames,a=e.length,c=n.length;return Promise.all([].concat(i(e.map((function(t,e){return(0,r.zD)(t.hash,null,!0).then((function(n){return n.length?t.hash:t.getFileContent(t.sha,e,a).then(u)}))}))),i(n.map((function(t,e){return(0,o.v)(t.id).then((function(n){return n?t.id:t.getFileContent(t.sha,e,c).then(function(t){return function(e){var n=JSON.parse(e,null,2),r=Array(32).fill("f").join(""),a=Array(16).fill(r),u=[].concat(i(n.upper),i(Array(14).fill().map((function(t,e){return[].concat(i(n.left[e]),i(a),i(n.right[e]))})).flat()),i(n.lower));return(0,o.e)(t.id,u)}}(t))}))})))))}},80950:function(){},46601:function(){},89214:function(){},96419:function(){},56353:function(){},8623:function(){},7748:function(){},85568:function(){},69386:function(){},31616:function(){},56619:function(){},77108:function(){},69862:function(){},40964:function(){}}]);