/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return m; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return M; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return O; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toChildArray\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_unmount\", function() { return D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return n; });\nvar n,l,u,t,i,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var t,i,r,o,f=arguments;if(l=s({},l),arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(f[t]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===l[i]&&(l[i]=n.defaultProps[i]);return o=l.key,null!=(r=l.ref)&&delete l.ref,null!=o&&delete l.key,v(n,l,o,r)}function v(l,u,t,i){var r={type:l,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(r),r}function p(){return{}}function y(n){return n.children}function d(n){if(null==n||\"boolean\"==typeof n)return null;if(\"string\"==typeof n||\"number\"==typeof n)return v(null,n,null,null);if(null!=n.__e||null!=n.__c){var l=v(n.type,n.props,n.key,null);return l.__e=n.__e,l}return n}function m(n,l){this.props=n,this.context=l}function w(n,l){if(null==l)return n.__p?w(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return\"function\"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&(i=n.debounceRendering,(n.debounceRendering||t)(_))}function _(){var n;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&n.forceUpdate(!1)}function b(n,l,u,t,i,r,o,c,s){var h,v,p,y,d,m,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=r?r[0]:_?w(u,0):null),h=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(y=$(n,u,p=p||f,t,i,r,o,null,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||y,u),null!=y){if(null==m&&(m=y),null!=u.l)y=u.l,u.l=null;else if(r==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c)}\"option\"==l.type&&(n.value=\"\")}c=y.nextSibling,\"function\"==typeof l.type&&(l.l=y)}}return h++,u}),l.__e=m,null!=r&&\"function\"!=typeof l.type)for(h=r.length;h--;)null!=r[h]&&a(r[h]);for(h=_;h--;)null!=k[h]&&D(k[h],k[h]);if(g)for(h=0;h<g.length;h++)A(g[h],g[++h],g[++h])}function x(n,l,u){if(null==u&&(u=[]),null==n||\"boolean\"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)x(n[t],l,u);else u.push(l?l(d(n)):n);return u}function C(n,l,u,t,i){var r;for(r in u)r in l||N(n,r,null,u[r],t);for(r in l)i&&\"function\"!=typeof l[r]||\"value\"===r||\"checked\"===r||u[r]===l[r]||N(n,r,l[r],u[r],t)}function P(n,l,u){\"-\"===l[0]?n.setProperty(l,u):n[l]=\"number\"==typeof u&&!1===c.test(l)?u+\"px\":u||\"\"}function N(n,l,u,t,i){var r,o,f,e,c;if(\"key\"===(l=i?\"className\"===l?\"class\":l:\"class\"===l?\"className\":l)||\"children\"===l);else if(\"style\"===l)if(r=n.style,\"string\"==typeof u)r.cssText=u;else{if(\"string\"==typeof t&&(r.cssText=\"\",t=null),t)for(o in t)u&&o in u||P(r,o,\"\");if(u)for(f in u)t&&u[f]===t[f]||P(r,f,u[f])}else\"o\"===l[0]&&\"n\"===l[1]?(e=l!==(l=l.replace(/Capture$/,\"\")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,T,e),(n.u||(n.u={}))[l]=u):n.removeEventListener(l,T,e)):\"list\"!==l&&\"tagName\"!==l&&\"form\"!==l&&!i&&l in n?n[l]=null==u?\"\":u:\"function\"!=typeof u&&\"dangerouslySetInnerHTML\"!==l&&(l!==(l=l.replace(/^xlink:?/,\"\"))?null==u||!1===u?n.removeAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase()):n.setAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function T(l){return this.u[l.type](n.event?n.event(l):l)}function $(l,u,t,i,r,o,f,e,c,a){var h,v,p,d,w,g,k,_,x,C,P=u.type;if(void 0!==u.constructor)return null;(h=n.__b)&&h(u);try{n:if(\"function\"==typeof P){if(_=u.props,x=(h=P.contextType)&&i[h.__c],C=h?x?x.props.value:h.__p:i,t.__c?k=(v=u.__c=t.__c).__p=v.__E:(\"prototype\"in P&&P.prototype.render?u.__c=v=new P(_,C):(u.__c=v=new m(_,C),v.constructor=P,v.render=H),x&&x.sub(v),v.props=_,v.state||(v.state={}),v.context=C,v.__n=i,p=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&s(v.__s==v.state?v.__s=s({},v.__s):v.__s,P.getDerivedStateFromProps(_,v.__s)),p)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&f.push(v);else{if(null==P.getDerivedStateFromProps&&null==e&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(_,C),!e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(_,v.__s,C)){for(v.props=_,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=null!=c?c!==t.__e?c:t.__e:null,u.__k=t.__k,h=0;h<u.__k.length;h++)u.__k[h]&&(u.__k[h].__p=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(_,v.__s,C)}for(d=v.props,w=v.state,v.context=C,v.props=_,v.state=v.__s,(h=n.__r)&&h(u),v.__d=!1,v.__v=u,v.__P=l,h=v.render(v.props,v.state,v.context),u.__k=null!=h&&h.type==y&&null==h.key?h.props.children:h,null!=v.getChildContext&&(i=s(s({},i),v.getChildContext())),p||null==v.getSnapshotBeforeUpdate||(g=v.getSnapshotBeforeUpdate(d,w)),b(l,u,t,i,r,o,f,c,a),v.base=u.__e;h=v.__h.pop();)v.__s&&(v.state=v.__s),h.call(v);p||null==d||null==v.componentDidUpdate||v.componentDidUpdate(d,w,g),k&&(v.__E=v.__p=null)}else u.__e=z(t.__e,u,t,i,r,o,f,a);(h=n.diffed)&&h(u)}catch(l){n.__e(l,u,t)}return u.__e}function j(l,u){for(var t;t=l.pop();)try{t.componentDidMount()}catch(l){n.__e(l,t.__v)}n.__c&&n.__c(u)}function z(n,l,u,t,i,r,o,c){var s,a,h,v,p=u.props,y=l.props;if(i=\"svg\"===l.type||i,null==n&&null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,r[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=i?document.createElementNS(\"http://www.w3.org/2000/svg\",l.type):document.createElement(l.type),r=null}return null===l.type?p!==y&&(null!=r&&(r[r.indexOf(n)]=null),n.data=y):l!==u&&(null!=r&&(r=e.slice.call(n.childNodes)),h=(p=u.props||f).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,c||(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||\"\")),C(n,y,p,i,c),l.__k=l.props.children,v||b(n,l,u,t,\"foreignObject\"!==l.type&&i,r,o,f,c),c||(\"value\"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?\"\":y.value),\"checked\"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))),n}function A(l,u,t){try{\"function\"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function D(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&A(i,null,u),t||\"function\"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.l=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(o=0;o<i.length;o++)i[o]&&D(i[o],u,t);null!=r&&a(r)}function H(n,l,u){return this.constructor(n,u)}function I(l,u,t){var i,o,c;n.__p&&n.__p(l,u),o=(i=t===r)?null:t&&t.__k||u.__k,l=h(y,null,[l]),c=[],$(u,i?u.__k=l:(t||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:o?null:e.slice.call(u.childNodes),c,!1,t||f,i),j(c,l)}function L(n,l){I(n,l,r)}function M(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function O(n){var l={},u={__c:\"__cC\"+o++,__p:n,Consumer:function(n,l){return this.shouldComponentUpdate=function(n,u,t){return t!==l},n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(n){t.some(function(l){l.__P&&(l.context=n.value,k(l))})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={},l=function(n){return null!=n&&void 0===n.constructor},m.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));(\"function\"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},m.prototype.forceUpdate=function(n){var l,u,t,i=this.__v,r=this.__v.__e,o=this.__P;o&&(l=!1!==n,u=[],t=$(o,i,s({},i),this.__n,void 0!==o.ownerSVGElement,null,u,l,null==r?w(i):r),j(u,i),t!=r&&g(i)),n&&n()},m.prototype.render=y,u=[],t=\"function\"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=n.debounceRendering,n.__e=function(n,l,u){for(var t;l=l.__p;)if((t=l.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(n));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(n)}return k(t.__E=t)}catch(l){n=l}throw n},r=f,o=0;\n//# sourceMappingURL=preact.module.js.map\n\n\n//# sourceURL=webpack:///./node_modules/preact/dist/preact.module.js?");

/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useState\", function() { return c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useReducer\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useEffect\", function() { return v; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLayoutEffect\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRef\", function() { return m; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useImperativeHandle\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMemo\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCallback\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useContext\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDebugValue\", function() { return _; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\nvar t,r,u=[],i=preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].__r;preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].__r=function(n){i&&i(n),t=0,(r=n.__c).__H&&(r.__H.t=A(r.__H.t))};var f=preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].diffed;preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].diffed=function(n){f&&f(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=(r.u.some(function(n){n.ref&&(n.ref.current=n.createHandle())}),[]),r.i=A(r.i))}};var o=preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].unmount;function e(t){preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].__h(r);var u=r.__H||(r.__H={o:[],t:[],i:[],u:[]});return t>=u.o.length&&u.o.push({}),u.o[t]}function c(n){return a(q,n)}function a(n,u,i){var f=e(t++);return f.__c||(f.__c=r,f.v=[i?i(u):q(null,u),function(t){var r=n(f.v[0],t);f.v[0]!==r&&(f.v[0]=r,f.__c.setState({}))}]),f.v}function v(n,u){var i=e(t++);h(i.l,u)&&(i.v=n,i.l=u,r.__H.t.push(i),T(r))}function l(n,u){var i=e(t++);h(i.l,u)&&(i.v=n,i.l=u,r.__H.i.push(i))}function m(n){return d(function(){return{current:n}},[])}function p(n,u,i){var f=e(t++);h(f.l,i)&&(f.l=i,r.__H.u.push({ref:n,createHandle:u}))}function d(n,r){var u=e(t++);return h(u.l,r)?(u.l=r,u.m=n,u.v=n()):u.v}function s(n,t){return d(function(){return n},t)}function y(n){var u=r.context[n.__c];if(!u)return n.__p;var i=e(t++);return null==i.v&&(i.v=!0,u.sub(r)),u.props.value}function _(t,r){preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].useDebugValue(r?r(t):t)}preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].unmount=function(n){o&&o(n);var t=n.__c;if(t){var r=t.__H;r&&r.o.forEach(function(n){return n.p&&n.p()})}};var T=function(){};function g(){u.some(function(n){n.s=!1,n.__P&&(n.__H.t=A(n.__H.t))}),u=[]}if(\"undefined\"!=typeof window){var w=preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].requestAnimationFrame;T=function(t){(!t.s&&(t.s=!0)&&1===u.push(t)||w!==preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].requestAnimationFrame)&&(w=preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].requestAnimationFrame,(preact__WEBPACK_IMPORTED_MODULE_0__[\"options\"].requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n)},r=setTimeout(t,100),u=requestAnimationFrame(t)})(g))}}function A(n){return n.forEach(E),n.forEach(F),[]}function E(n){n.p&&n.p()}function F(n){var t=n.v();\"function\"==typeof t&&(n.p=t)}function h(n,t){return!n||t.some(function(t,r){return t!==n[r]})}function q(n,t){return\"function\"==typeof t?t(n):t}\n//# sourceMappingURL=hooks.module.js.map\n\n\n//# sourceURL=webpack:///./node_modules/preact/hooks/dist/hooks.module.js?");

/***/ }),

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/*! exports provided: mapComponent, Component, Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapComponent\", function() { return mapComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return Render; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ \"./node_modules/preact/hooks/dist/hooks.module.js\");\n\n\nconst mapComponent = (component) => {\n    const instance = new component();\n    return {\n        selector: instance.selector,\n        component: instance.render\n    };\n};\nconst useValues = (instance, ctor) => {\n    const [ctx, setCtx] = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(instance);\n    Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n        const methods = Object.getOwnPropertyNames(ctor.prototype);\n        const properties = Object.keys(instance);\n        for (let key of [...methods, ...properties]) {\n            if (['constructor', 'onInit', 'selector', 'render'].includes(key)) {\n                continue;\n            }\n            debugger;\n            Object.defineProperty(instance, key, {\n                get: () => ctx[key],\n                set: newValue => {\n                    setCtx(Object.assign(ctx, { [key]: newValue }));\n                }\n            });\n        }\n    }, [instance]);\n    return ctx;\n};\nconst voidFn = () => () => { };\nfunction Component(options) {\n    return function (constructor) {\n        function construct(...args) {\n            const instance = new constructor(...args);\n            // for (const key in instance) {\n            //   console.log(key)\n            // }\n            instance.selector = options.selector;\n            const onInit = instance.onInit || voidFn();\n            const onDestroy = instance.onDestroy || voidFn();\n            const C = {};\n            for (const Value of options.declarations || []) {\n                const instance = new Value();\n                C[instance.selector] = instance.render;\n            }\n            instance.render = () => {\n                Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => onInit.apply(instance), [instance]);\n                Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => () => onDestroy.apply(instance), [instance]);\n                const ctx = useValues(instance, constructor);\n                return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(options.template, { ctx, C });\n            };\n            return instance;\n        }\n        return construct;\n    };\n}\nconst Render = ({ target }) => Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(target, {});\n\n\n//# sourceURL=webpack:///./src/component.ts?");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! exports provided: MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyComponent\", function() { return MyComponent; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./src/component.ts\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n// @Component({\n//   selector: 'a-component',\n//   template: \n//     function({ ctx }: any) {\n//       return h(Fragment, {}, \n//         h('h1',{}, ctx.a),\n//       )\n//     },\n// })\n// export class AComponent {\n//   a = 'a'\n//   async onInit() {\n//     await new Promise(res => setTimeout(res, 1000))\n//     this.a = 'b'\n//   }\n//   onDestroy() {\n//     console.log('nooo')\n//   }\n// }\nlet MyComponent = class MyComponent {\n    // @Component({\n    //   selector: 'a-component',\n    //   template: \n    //     function({ ctx }: any) {\n    //       return h(Fragment, {}, \n    //         h('h1',{}, ctx.a),\n    //       )\n    //     },\n    // })\n    // export class AComponent {\n    //   a = 'a'\n    //   async onInit() {\n    //     await new Promise(res => setTimeout(res, 1000))\n    //     this.a = 'b'\n    //   }\n    //   onDestroy() {\n    //     console.log('nooo')\n    //   }\n    // }\n    constructor() {\n        this.hello = 'My component';\n    }\n    onInit() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield new Promise(res => setTimeout(res, 3000));\n            this.hello = 'something else';\n        });\n    }\n    hey() {\n        console.log('yooo');\n    }\n};\nMyComponent = __decorate([\n    Object(_component__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\n        selector: 'my-component',\n        declarations: [\n        // AComponent\n        ],\n        template: ({ ctx, C }) => {\n            console.log(ctx);\n            return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(preact__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n                [1, 2].map(i => Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, i)),\n                Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"h1\", null, \"Hello from\"),\n                Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"h1\", null, ctx.hello),\n                Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\", { onClick: () => ctx.hey() }, \"Click\"));\n        },\n    })\n], MyComponent);\n\n_render__WEBPACK_IMPORTED_MODULE_2__[\"Initializer\"]\n    .useComponent(MyComponent)\n    .attachTo(document.body);\n\n\n//# sourceURL=webpack:///./src/main.tsx?");

/***/ }),

/***/ "./src/render.ts":
/*!***********************!*\
  !*** ./src/render.ts ***!
  \***********************/
/*! exports provided: Initializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Initializer\", function() { return Initializer; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n\nclass Initializer {\n    static useComponent(component) {\n        this.component = component;\n        return this;\n    }\n    static attachTo(outlet) {\n        const C = new this.component().render;\n        Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(C, {}), outlet);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/render.ts?");

/***/ })

/******/ });