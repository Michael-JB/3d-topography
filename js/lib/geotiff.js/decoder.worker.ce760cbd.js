parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"agGE":[function(require,module,exports) {
function e(e,o,t,n,r,u,i){try{var d=e[u](i),l=d.value}catch(s){return void t(s)}d.done?o(l):Promise.resolve(l).then(n,r)}function o(o){return function(){var t=this,n=arguments;return new Promise(function(r,u){var i=o.apply(t,n);function d(o){e(i,r,u,d,l,"next",o)}function l(o){e(i,r,u,d,l,"throw",o)}d(void 0)})}}module.exports=o,module.exports.default=module.exports,module.exports.__esModule=!0;
},{}],"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function g(){}function d(){}function m(){}var w={};u(w,i,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return d.prototype=m,u(b,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),u(b,i,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"UALh":[function(require,module,exports) {
"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}module.exports=function(t){return!!t&&("symbol"===o(Symbol.observable)&&"function"==typeof t[Symbol.observable]?t===t[Symbol.observable]():"function"==typeof t["@@observable"]&&t===t["@@observable"]())};
},{}],"huOx":[function(require,module,exports) {
"use strict";function e(e,r){const i=e.deserialize.bind(e),a=e.serialize.bind(e);return{deserialize:e=>r.deserialize(e,i),serialize:e=>r.serialize(e,a)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DefaultSerializer=exports.extendSerializer=void 0,exports.extendSerializer=e;const r={deserialize:e=>Object.assign(Error(e.message),{name:e.name,stack:e.stack}),serialize:e=>({__error_marker:"$$error",message:e.message,name:e.name,stack:e.stack})},i=e=>e&&"object"==typeof e&&"__error_marker"in e&&"$$error"===e.__error_marker;exports.DefaultSerializer={deserialize:e=>i(e)?r.deserialize(e):e,serialize:e=>e instanceof Error?r.serialize(e):e};
},{}],"ujDW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.serialize=exports.deserialize=exports.registerSerializer=void 0;const e=require("./serializers");let r=e.DefaultSerializer;function i(i){r=e.extendSerializer(r,i)}function t(e){return r.deserialize(e)}function s(e){return r.serialize(e)}exports.registerSerializer=i,exports.deserialize=t,exports.serialize=s;
},{"./serializers":"huOx"}],"NcLz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$worker=exports.$transferable=exports.$terminate=exports.$events=exports.$errors=void 0,exports.$errors=Symbol("thread.errors"),exports.$events=Symbol("thread.events"),exports.$terminate=Symbol("thread.terminate"),exports.$transferable=Symbol("thread.transferable"),exports.$worker=Symbol("thread.worker");
},{}],"HnZs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Transfer=exports.isTransferDescriptor=void 0;const r=require("./symbols");function e(r){return!(!r||"object"!=typeof r)}function t(e){return e&&"object"==typeof e&&e[r.$transferable]}function s(t,s){if(!s){if(!e(t))throw Error();s=[t]}return{[r.$transferable]:!0,send:t,transferables:s}}exports.isTransferDescriptor=t,exports.Transfer=s;
},{"./symbols":"NcLz"}],"No47":[function(require,module,exports) {
"use strict";var e,r;Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorkerMessageType=exports.MasterMessageType=void 0,function(e){e.cancel="cancel",e.run="run"}(e=exports.MasterMessageType||(exports.MasterMessageType={})),function(e){e.error="error",e.init="init",e.result="result",e.running="running",e.uncaughtError="uncaughtError"}(r=exports.WorkerMessageType||(exports.WorkerMessageType={}));
},{}],"Oz27":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=function(){const e="undefined"!=typeof self&&"undefined"!=typeof Window&&self instanceof Window;return!("undefined"==typeof self||!self.postMessage||e)},s=function(e,s){self.postMessage(e,s)},t=function(e){const s=s=>{e(s.data)};return self.addEventListener("message",s),()=>{self.removeEventListener("message",s)}};exports.default={isWorkerRuntime:e,postMessageToMaster:s,subscribeToMasterMessages:t};
},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"DwFB":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=this&&this.__awaiter||function(e,t,r,s){return new(r||(r=Promise))(function(o,n){function i(e){try{u(s.next(e))}catch(t){n(t)}}function a(e){try{u(s.throw(e))}catch(t){n(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,a)}u((s=s.apply(e,t||[])).next())})},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.expose=exports.isWorkerRuntime=exports.Transfer=exports.registerSerializer=void 0;const s=r(require("is-observable")),o=require("../common"),n=require("../transferable"),i=require("../types/messages"),a=r(require("./implementation"));var u=require("../common");Object.defineProperty(exports,"registerSerializer",{enumerable:!0,get:function(){return u.registerSerializer}});var c=require("../transferable");Object.defineProperty(exports,"Transfer",{enumerable:!0,get:function(){return c.Transfer}}),exports.isWorkerRuntime=a.default.isWorkerRuntime;let f=!1;const l=new Map,p=e=>e&&e.type===i.MasterMessageType.cancel,d=e=>e&&e.type===i.MasterMessageType.run,y=e=>s.default(e)||g(e);function g(e){return e&&"object"==typeof e&&"function"==typeof e.subscribe}function m(e){return n.isTransferDescriptor(e)?{payload:e.send,transferables:e.transferables}:{payload:e,transferables:void 0}}function b(){const e={type:i.WorkerMessageType.init,exposed:{type:"function"}};a.default.postMessageToMaster(e)}function h(e){const t={type:i.WorkerMessageType.init,exposed:{type:"module",methods:e}};a.default.postMessageToMaster(t)}function M(e,t){const{payload:r,transferables:s}=m(t),n={type:i.WorkerMessageType.error,uid:e,error:o.serialize(r)};a.default.postMessageToMaster(n,s)}function T(e,t,r){const{payload:s,transferables:o}=m(r),n={type:i.WorkerMessageType.result,uid:e,complete:!!t||void 0,payload:s};a.default.postMessageToMaster(n,o)}function x(e,t){const r={type:i.WorkerMessageType.running,uid:e,resultType:t};a.default.postMessageToMaster(r)}function v(e){try{const r={type:i.WorkerMessageType.uncaughtError,error:o.serialize(e)};a.default.postMessageToMaster(r)}catch(t){console.error("Not reporting uncaught error back to master thread as it occured while reporting an uncaught error already.\nLatest error:",t,"\nOriginal error:",e)}}function k(e,r,s){return t(this,void 0,void 0,function*(){let t;try{t=r(...s)}catch(i){return M(e,i)}const n=y(t)?"observable":"promise";if(x(e,n),y(t)){const r=t.subscribe(t=>T(e,!1,o.serialize(t)),t=>{M(e,o.serialize(t)),l.delete(e)},()=>{T(e,!0),l.delete(e)});l.set(e,r)}else try{const r=yield t;T(e,!0,o.serialize(r))}catch(i){M(e,o.serialize(i))}})}function W(e){if(!a.default.isWorkerRuntime())throw Error("expose() called in the master thread.");if(f)throw Error("expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions.");if(f=!0,"function"==typeof e)a.default.subscribeToMasterMessages(t=>{d(t)&&!t.method&&k(t.uid,e,t.args.map(o.deserialize))}),b();else{if("object"!=typeof e||!e)throw Error(`Invalid argument passed to expose(). Expected a function or an object, got: ${e}`);a.default.subscribeToMasterMessages(t=>{d(t)&&t.method&&k(t.uid,e[t.method],t.args.map(o.deserialize))}),h(Object.keys(e).filter(t=>"function"==typeof e[t]))}a.default.subscribeToMasterMessages(e=>{if(p(e)){const t=e.uid,r=l.get(t);r&&(r.unsubscribe(),l.delete(t))}})}exports.expose=W,"undefined"!=typeof self&&"function"==typeof self.addEventListener&&a.default.isWorkerRuntime()&&(self.addEventListener("error",e=>{setTimeout(()=>v(e.error||e),250)}),self.addEventListener("unhandledrejection",e=>{const t=e.reason;t&&"string"==typeof t.message&&setTimeout(()=>v(t),250)})),void 0!==e&&"function"==typeof e.on&&a.default.isWorkerRuntime()&&(e.on("uncaughtException",e=>{setTimeout(()=>v(e),250)}),e.on("unhandledRejection",e=>{e&&"string"==typeof e.message&&setTimeout(()=>v(e),250)}));
},{"is-observable":"UALh","../common":"ujDW","../transferable":"HnZs","../types/messages":"No47","./implementation":"Oz27","process":"pBGv"}],"g6uu":[function(require,module,exports) {
module.exports=require("./dist/worker/index");
},{"./dist/worker/index":"DwFB"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"FGCZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addDecoder=u,exports.getDecoder=o;var e=n(require("@babel/runtime/helpers/asyncToGenerator")),r=n(require("@babel/runtime/regenerator"));function n(e){return e&&e.__esModule?e:{default:e}}var t=new Map;function u(e,r){Array.isArray(e)||(e=[e]),e.forEach(function(e){return t.set(e,r)})}function o(e){return i.apply(this,arguments)}function i(){return(i=(0,e.default)(r.default.mark(function e(n){var u,o;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=t.get(n.Compression)){e.next=3;break}throw new Error("Unknown compression method identifier: ".concat(n.Compression));case 3:return e.next=5,u();case 5:return o=e.sent,e.abrupt("return",new o(n));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}u([void 0,1],function(){return require("_bundle_loader")(require.resolve("./raw")).then(function(e){return e.default})}),u(5,function(){return require("_bundle_loader")(require.resolve("./lzw")).then(function(e){return e.default})}),u(6,function(){throw new Error("old style JPEG compression is not supported.")}),u(7,function(){return require("_bundle_loader")(require.resolve("./jpeg")).then(function(e){return e.default})}),u([8,32946],function(){return require("_bundle_loader")(require.resolve("./deflate")).then(function(e){return e.default})}),u(32773,function(){return require("_bundle_loader")(require.resolve("./packbits")).then(function(e){return e.default})}),u(34887,function(){return require("_bundle_loader")(require.resolve("./lerc")).then(function(e){return e.default})});
},{"@babel/runtime/helpers/asyncToGenerator":"agGE","@babel/runtime/regenerator":"PMvg","_bundle_loader":"TUK3","./raw":[["raw.261f1ae7.js","V9bQ"],"raw.261f1ae7.js.map","V9bQ"],"./lzw":[["lzw.9cff1a75.js","tcId"],"lzw.9cff1a75.js.map","tcId"],"./jpeg":[["jpeg.efbb5038.js","J7kk"],"jpeg.efbb5038.js.map","J7kk"],"./deflate":[["deflate.91612a6b.js","JAiC"],"deflate.91612a6b.js.map","JAiC"],"./packbits":[["packbits.727bde9a.js","OcPz"],"packbits.727bde9a.js.map","OcPz"],"./lerc":[["lerc.cebba49d.js","YN9V"],"lerc.cebba49d.js.map","YN9V"]}],"LHx9":[function(require,module,exports) {
"use strict";var e=u(require("@babel/runtime/helpers/asyncToGenerator")),r=u(require("@babel/runtime/regenerator")),t=require("threads/worker"),n=require("./compression");function u(e){return e&&e.__esModule?e:{default:e}}function a(e,r){return s.apply(this,arguments)}function s(){return(s=(0,e.default)(r.default.mark(function e(u,a){var s,o;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.getDecoder)(u);case 2:return s=e.sent,e.next=5,s.decode(u,a);case 5:return o=e.sent,e.abrupt("return",(0,t.Transfer)(o));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}(0,t.expose)(a);
},{"@babel/runtime/helpers/asyncToGenerator":"agGE","@babel/runtime/regenerator":"PMvg","threads/worker":"g6uu","./compression":"FGCZ"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("js",require("Yi9z"));
},{}]},{},[0,"LHx9"], "GeoTIFF")