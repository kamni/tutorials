/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/pyodide lazy recursive":
/*!************************************************************!*\
  !*** ./node_modules/pyodide/ lazy strict namespace object ***!
  \************************************************************/
/***/ ((module) => {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(() => {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = () => ([]);\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./node_modules/pyodide lazy recursive\";\nmodule.exports = webpackEmptyAsyncContext;\n\n//# sourceURL=webpack://python-web-assembly-tutorial/./node_modules/pyodide/_lazy_strict_namespace_object?");

/***/ }),

/***/ "./node_modules/pyodide/pyodide.mjs":
/*!******************************************!*\
  !*** ./node_modules/pyodide/pyodide.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPyodide: () => (/* binding */ $e),\n/* harmony export */   version: () => (/* binding */ M)\n/* harmony export */ });\nvar Q=Object.defineProperty;var s=(e,t)=>Q(e,\"name\",{value:t,configurable:!0}),I=(e=>typeof require<\"u\"?require:typeof Proxy<\"u\"?new Proxy(e,{get:(t,o)=>(typeof require<\"u\"?require:t)[o]}):e)(function(e){if(typeof require<\"u\")return require.apply(this,arguments);throw new Error('Dynamic require of \"'+e+'\" is not supported')});function Z(e){return!isNaN(parseFloat(e))&&isFinite(e)}s(Z,\"_isNumber\");function E(e){return e.charAt(0).toUpperCase()+e.substring(1)}s(E,\"_capitalize\");function k(e){return function(){return this[e]}}s(k,\"_getter\");var w=[\"isConstructor\",\"isEval\",\"isNative\",\"isToplevel\"],N=[\"columnNumber\",\"lineNumber\"],_=[\"fileName\",\"functionName\",\"source\"],ee=[\"args\"],te=[\"evalOrigin\"],O=w.concat(N,_,ee,te);function p(e){if(e)for(var t=0;t<O.length;t++)e[O[t]]!==void 0&&this[\"set\"+E(O[t])](e[O[t]])}s(p,\"StackFrame\");p.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!==\"[object Array]\")throw new TypeError(\"Args must be an Array\");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof p)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new p(e);else throw new TypeError(\"Eval Origin must be an Object or StackFrame\")},toString:function(){var e=this.getFileName()||\"\",t=this.getLineNumber()||\"\",o=this.getColumnNumber()||\"\",r=this.getFunctionName()||\"\";return this.getIsEval()?e?\"[eval] (\"+e+\":\"+t+\":\"+o+\")\":\"[eval]:\"+t+\":\"+o:r?r+\" (\"+e+\":\"+t+\":\"+o+\")\":e+\":\"+t+\":\"+o}};p.fromString=s(function(t){var o=t.indexOf(\"(\"),r=t.lastIndexOf(\")\"),a=t.substring(0,o),n=t.substring(o+1,r).split(\",\"),i=t.substring(r+1);if(i.indexOf(\"@\")===0)var c=/@(.+?)(?::(\\d+))?(?::(\\d+))?$/.exec(i,\"\"),l=c[1],d=c[2],u=c[3];return new p({functionName:a,args:n||void 0,fileName:l,lineNumber:d||void 0,columnNumber:u||void 0})},\"StackFrame$$fromString\");for(b=0;b<w.length;b++)p.prototype[\"get\"+E(w[b])]=k(w[b]),p.prototype[\"set\"+E(w[b])]=function(e){return function(t){this[e]=!!t}}(w[b]);var b;for(v=0;v<N.length;v++)p.prototype[\"get\"+E(N[v])]=k(N[v]),p.prototype[\"set\"+E(N[v])]=function(e){return function(t){if(!Z(t))throw new TypeError(e+\" must be a Number\");this[e]=Number(t)}}(N[v]);var v;for(h=0;h<_.length;h++)p.prototype[\"get\"+E(_[h])]=k(_[h]),p.prototype[\"set\"+E(_[h])]=function(e){return function(t){this[e]=String(t)}}(_[h]);var h,x=p;function ne(){var e=/^\\s*at .*(\\S+:\\d+|\\(native\\))/m,t=/^(eval@)?(\\[native code])?$/;return{parse:s(function(r){if(r.stack&&r.stack.match(e))return this.parseV8OrIE(r);if(r.stack)return this.parseFFOrSafari(r);throw new Error(\"Cannot parse given Error object\")},\"ErrorStackParser$$parse\"),extractLocation:s(function(r){if(r.indexOf(\":\")===-1)return[r];var a=/(.+?)(?::(\\d+))?(?::(\\d+))?$/,n=a.exec(r.replace(/[()]/g,\"\"));return[n[1],n[2]||void 0,n[3]||void 0]},\"ErrorStackParser$$extractLocation\"),parseV8OrIE:s(function(r){var a=r.stack.split(`\n`).filter(function(n){return!!n.match(e)},this);return a.map(function(n){n.indexOf(\"(eval \")>-1&&(n=n.replace(/eval code/g,\"eval\").replace(/(\\(eval at [^()]*)|(,.*$)/g,\"\"));var i=n.replace(/^\\s+/,\"\").replace(/\\(eval code/g,\"(\").replace(/^.*?\\s+/,\"\"),c=i.match(/ (\\(.+\\)$)/);i=c?i.replace(c[0],\"\"):i;var l=this.extractLocation(c?c[1]:i),d=c&&i||void 0,u=[\"eval\",\"<anonymous>\"].indexOf(l[0])>-1?void 0:l[0];return new x({functionName:d,fileName:u,lineNumber:l[1],columnNumber:l[2],source:n})},this)},\"ErrorStackParser$$parseV8OrIE\"),parseFFOrSafari:s(function(r){var a=r.stack.split(`\n`).filter(function(n){return!n.match(t)},this);return a.map(function(n){if(n.indexOf(\" > eval\")>-1&&(n=n.replace(/ line (\\d+)(?: > eval line \\d+)* > eval:\\d+:\\d+/g,\":$1\")),n.indexOf(\"@\")===-1&&n.indexOf(\":\")===-1)return new x({functionName:n});var i=/((.*\".+\"[^@]*)?[^@]*)(?:@)/,c=n.match(i),l=c&&c[1]?c[1]:void 0,d=this.extractLocation(n.replace(i,\"\"));return new x({functionName:l,fileName:d[0],lineNumber:d[1],columnNumber:d[2],source:n})},this)},\"ErrorStackParser$$parseFFOrSafari\")}}s(ne,\"ErrorStackParser\");var re=new ne;var C=re;var g=typeof process==\"object\"&&typeof process.versions==\"object\"&&typeof process.versions.node==\"string\"&&!process.browser,A=g&&typeof module<\"u\"&&typeof module.exports<\"u\"&&typeof I<\"u\"&&typeof __dirname<\"u\",W=g&&!A,Ne=typeof globalThis.Bun<\"u\",ie=typeof Deno<\"u\",B=!g&&!ie,$=B&&typeof window==\"object\"&&typeof document==\"object\"&&typeof document.createElement==\"function\"&&\"sessionStorage\"in window&&typeof importScripts!=\"function\",j=B&&typeof importScripts==\"function\"&&typeof self==\"object\",_e=typeof navigator==\"object\"&&typeof navigator.userAgent==\"string\"&&navigator.userAgent.indexOf(\"Chrome\")==-1&&navigator.userAgent.indexOf(\"Safari\")>-1;var z,D,V,H,L;async function T(){if(!g||(z=(await __webpack_require__.e(/*! import() */ \"node_url\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:url */ \"node:url\", 19))).default,H=await __webpack_require__.e(/*! import() */ \"node_fs\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:fs */ \"node:fs\", 19)),L=await __webpack_require__.e(/*! import() */ \"node_fs_promises\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:fs/promises */ \"node:fs/promises\", 19)),V=(await __webpack_require__.e(/*! import() */ \"node_vm\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:vm */ \"node:vm\", 19))).default,D=await __webpack_require__.e(/*! import() */ \"node_path\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:path */ \"node:path\", 19)),U=D.sep,typeof I<\"u\"))return;let e=H,t=await __webpack_require__.e(/*! import() */ \"node_crypto\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:crypto */ \"node:crypto\", 19)),o=await __webpack_require__.e(/*! import() */ \"_296d\").then(__webpack_require__.t.bind(__webpack_require__, /*! ws */ \"?296d\", 19)),r=await __webpack_require__.e(/*! import() */ \"node_child_process\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:child_process */ \"node:child_process\", 19)),a={fs:e,crypto:t,ws:o,child_process:r};globalThis.require=function(n){return a[n]}}s(T,\"initNodeModules\");function oe(e,t){return D.resolve(t||\".\",e)}s(oe,\"node_resolvePath\");function ae(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}s(ae,\"browser_resolvePath\");var P;g?P=oe:P=ae;var U;g||(U=\"/\");function se(e,t){return e.startsWith(\"file://\")&&(e=e.slice(7)),e.includes(\"://\")?{response:fetch(e)}:{binary:L.readFile(e).then(o=>new Uint8Array(o.buffer,o.byteOffset,o.byteLength))}}s(se,\"node_getBinaryResponse\");function ce(e,t){let o=new URL(e,location);return{response:fetch(o,t?{integrity:t}:{})}}s(ce,\"browser_getBinaryResponse\");var F;g?F=se:F=ce;async function q(e,t){let{response:o,binary:r}=F(e,t);if(r)return r;let a=await o;if(!a.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await a.arrayBuffer())}s(q,\"loadBinaryFile\");var R;if($)R=s(async e=>await __webpack_require__(\"./node_modules/pyodide lazy recursive\")(e),\"loadScript\");else if(j)R=s(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await __webpack_require__(\"./node_modules/pyodide lazy recursive\")(e);else throw t}},\"loadScript\");else if(g)R=le;else throw new Error(\"Cannot determine runtime environment\");async function le(e){e.startsWith(\"file://\")&&(e=e.slice(7)),e.includes(\"://\")?V.runInThisContext(await(await fetch(e)).text()):await __webpack_require__(\"./node_modules/pyodide lazy recursive\")(z.pathToFileURL(e).href)}s(le,\"nodeLoadScript\");async function J(e){if(g){await T();let t=await L.readFile(e,{encoding:\"utf8\"});return JSON.parse(t)}else return await(await fetch(e)).json()}s(J,\"loadLockFile\");async function K(){if(A)return __dirname;let e;try{throw new Error}catch(r){e=r}let t=C.parse(e)[0].fileName;if(g&&!t.startsWith(\"file://\")&&(t=`file://${t}`),W){let r=await __webpack_require__.e(/*! import() */ \"node_path\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:path */ \"node:path\", 19));return(await __webpack_require__.e(/*! import() */ \"node_url\").then(__webpack_require__.t.bind(__webpack_require__, /*! node:url */ \"node:url\", 19))).fileURLToPath(r.dirname(t))}let o=t.lastIndexOf(U);if(o===-1)throw new Error(\"Could not extract indexURL path from pyodide module location\");return t.slice(0,o)}s(K,\"calculateDirname\");function Y(e){let t=e.FS,o=e.FS.filesystems.MEMFS,r=e.PATH,a={DIR_MODE:16895,FILE_MODE:33279,mount:function(n){if(!n.opts.fileSystemHandle)throw new Error(\"opts.fileSystemHandle is required\");return o.mount.apply(null,arguments)},syncfs:async(n,i,c)=>{try{let l=a.getLocalSet(n),d=await a.getRemoteSet(n),u=i?d:l,m=i?l:d;await a.reconcile(n,u,m),c(null)}catch(l){c(l)}},getLocalSet:n=>{let i=Object.create(null);function c(u){return u!==\".\"&&u!==\"..\"}s(c,\"isRealDir\");function l(u){return m=>r.join2(u,m)}s(l,\"toAbsolute\");let d=t.readdir(n.mountpoint).filter(c).map(l(n.mountpoint));for(;d.length;){let u=d.pop(),m=t.stat(u);t.isDir(m.mode)&&d.push.apply(d,t.readdir(u).filter(c).map(l(u))),i[u]={timestamp:m.mtime,mode:m.mode}}return{type:\"local\",entries:i}},getRemoteSet:async n=>{let i=Object.create(null),c=await de(n.opts.fileSystemHandle);for(let[l,d]of c)l!==\".\"&&(i[r.join2(n.mountpoint,l)]={timestamp:d.kind===\"file\"?(await d.getFile()).lastModifiedDate:new Date,mode:d.kind===\"file\"?a.FILE_MODE:a.DIR_MODE});return{type:\"remote\",entries:i,handles:c}},loadLocalEntry:n=>{let c=t.lookupPath(n).node,l=t.stat(n);if(t.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(t.isFile(l.mode))return c.contents=o.getFileDataAsTypedArray(c),{timestamp:l.mtime,mode:l.mode,contents:c.contents};throw new Error(\"node type not supported\")},storeLocalEntry:(n,i)=>{if(t.isDir(i.mode))t.mkdirTree(n,i.mode);else if(t.isFile(i.mode))t.writeFile(n,i.contents,{canOwn:!0});else throw new Error(\"node type not supported\");t.chmod(n,i.mode),t.utime(n,i.timestamp,i.timestamp)},removeLocalEntry:n=>{var i=t.stat(n);t.isDir(i.mode)?t.rmdir(n):t.isFile(i.mode)&&t.unlink(n)},loadRemoteEntry:async n=>{if(n.kind===\"file\"){let i=await n.getFile();return{contents:new Uint8Array(await i.arrayBuffer()),mode:a.FILE_MODE,timestamp:i.lastModifiedDate}}else{if(n.kind===\"directory\")return{mode:a.DIR_MODE,timestamp:new Date};throw new Error(\"unknown kind: \"+n.kind)}},storeRemoteEntry:async(n,i,c)=>{let l=n.get(r.dirname(i)),d=t.isFile(c.mode)?await l.getFileHandle(r.basename(i),{create:!0}):await l.getDirectoryHandle(r.basename(i),{create:!0});if(d.kind===\"file\"){let u=await d.createWritable();await u.write(c.contents),await u.close()}n.set(i,d)},removeRemoteEntry:async(n,i)=>{await n.get(r.dirname(i)).removeEntry(r.basename(i)),n.delete(i)},reconcile:async(n,i,c)=>{let l=0,d=[];Object.keys(i.entries).forEach(function(f){let y=i.entries[f],S=c.entries[f];(!S||t.isFile(y.mode)&&y.timestamp.getTime()>S.timestamp.getTime())&&(d.push(f),l++)}),d.sort();let u=[];if(Object.keys(c.entries).forEach(function(f){i.entries[f]||(u.push(f),l++)}),u.sort().reverse(),!l)return;let m=i.type===\"remote\"?i.handles:c.handles;for(let f of d){let y=r.normalize(f.replace(n.mountpoint,\"/\")).substring(1);if(c.type===\"local\"){let S=m.get(y),X=await a.loadRemoteEntry(S);a.storeLocalEntry(f,X)}else{let S=a.loadLocalEntry(f);await a.storeRemoteEntry(m,y,S)}}for(let f of u)if(c.type===\"local\")a.removeLocalEntry(f);else{let y=r.normalize(f.replace(n.mountpoint,\"/\")).substring(1);await a.removeRemoteEntry(m,y)}}};e.FS.filesystems.NATIVEFS_ASYNC=a}s(Y,\"initializeNativeFS\");var de=s(async e=>{let t=[];async function o(a){for await(let n of a.values())t.push(n),n.kind===\"directory\"&&await o(n)}s(o,\"collect\"),await o(e);let r=new Map;r.set(\".\",e);for(let a of t){let n=(await e.resolve(a)).join(\"/\");r.set(n,a)}return r},\"getFsHandles\");function G(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:ge(e),quit(o,r){throw t.exited={status:o,toThrow:r},r},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:o=>e.indexURL+o,instantiateWasm:ye(e.indexURL)};return t}s(G,\"createSettings\");function ue(e){return function(t){let o=\"/\";try{t.FS.mkdirTree(e)}catch(r){console.error(`Error occurred while making a home directory '${e}':`),console.error(r),console.error(`Using '${o}' for a home directory instead`),e=o}t.FS.chdir(e)}}s(ue,\"createHomeDirectory\");function fe(e){return function(t){Object.assign(t.ENV,e)}}s(fe,\"setEnvironment\");function me(e){return t=>{for(let o of e)t.FS.mkdirTree(o),t.FS.mount(t.FS.filesystems.NODEFS,{root:o},o)}}s(me,\"mountLocalDirectories\");function pe(e){let t=q(e);return o=>{let r=o._py_version_major(),a=o._py_version_minor();o.FS.mkdirTree(\"/lib\"),o.FS.mkdirTree(`/lib/python${r}.${a}/site-packages`),o.addRunDependency(\"install-stdlib\"),t.then(n=>{o.FS.writeFile(`/lib/python${r}${a}.zip`,n)}).catch(n=>{console.error(\"Error occurred while installing the standard library:\"),console.error(n)}).finally(()=>{o.removeRunDependency(\"install-stdlib\")})}}s(pe,\"installStdlib\");function ge(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+\"python_stdlib.zip\",[pe(t),ue(e.env.HOME),fe(e.env),me(e._node_mounts),Y]}s(ge,\"getFileSystemInitializationFuncs\");function ye(e){if(typeof WasmOffsetConverter<\"u\")return;let{binary:t,response:o}=F(e+\"pyodide.asm.wasm\");return function(r,a){return async function(){try{let n;o?n=await WebAssembly.instantiateStreaming(o,r):n=await WebAssembly.instantiate(await t,r);let{instance:i,module:c}=n;a(i,c)}catch(n){console.warn(\"wasm instantiation failed!\"),console.warn(n)}}(),{}}}s(ye,\"getInstantiateWasmFunc\");var M=\"0.27.3\";async function $e(e={}){var u,m;await T();let t=e.indexURL||await K();t=P(t),t.endsWith(\"/\")||(t+=\"/\"),e.indexURL=t;let o={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:t+\"pyodide-lock.json\",args:[],_node_mounts:[],env:{},packageCacheDir:t,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:\"285ab4f913dd7f9216f3d9f225a9425b58b1c1cf058302946162bb3873fa1e70\"},r=Object.assign(o,e);(u=r.env).HOME??(u.HOME=\"/home/pyodide\"),(m=r.env).PYTHONINSPECT??(m.PYTHONINSPECT=\"1\");let a=G(r),n=a.API;if(n.lockFilePromise=J(r.lockFileURL),typeof _createPyodideModule!=\"function\"){let f=`${r.indexURL}pyodide.asm.js`;await R(f)}let i;if(e._loadSnapshot){let f=await e._loadSnapshot;ArrayBuffer.isView(f)?i=f:i=new Uint8Array(f),a.noInitialRun=!0,a.INITIAL_MEMORY=i.length}let c=await _createPyodideModule(a);if(a.exited)throw a.exited.toThrow;if(e.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),n.version!==M&&r.checkAPIVersion)throw new Error(`Pyodide version does not match: '${M}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=f=>{throw new Error(\"Didn't expect to load any more file_packager files!\")};let l;i&&(l=n.restoreSnapshot(i));let d=n.finalizeBootstrap(l,e._snapshotDeserializer);return n.sys.path.insert(0,n.config.env.HOME),d.version.includes(\"dev\")||n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${d.version}/full/`),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(r.stdin,r.stdout,r.stderr),d}s($e,\"loadPyodide\");\n//# sourceMappingURL=pyodide.mjs.map\n\n\n//# sourceURL=webpack://python-web-assembly-tutorial/./node_modules/pyodide/pyodide.mjs?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pyodide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyodide */ \"./node_modules/pyodide/pyodide.mjs\");\n/**\n * Copyright (C) J Leadbetter <j@jleadbetter.com>\n * License: MIT\n **/\n\n\n\nasync function hello_python() {\n  let pyodide = await (0,pyodide__WEBPACK_IMPORTED_MODULE_0__.loadPyodide)({ indexURL: `${window.location.origin}/pyodide` });\n  return pyodide.runPythonAsync(\"1+1\");\n}\n\nhello_python().then((result) => {\n  console.log(\"Python says that 1+1 =\", result);\n});\n\n\n//# sourceURL=webpack://python-web-assembly-tutorial/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "python-web-assembly-tutorial:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpython_web_assembly_tutorial"] = self["webpackChunkpython_web_assembly_tutorial"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;