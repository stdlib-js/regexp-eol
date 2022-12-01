// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).reEOL=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,c=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(i.call(t,r)||f.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&c&&c.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(t,r){return null!=t&&b.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(t){var r,e,n;if(null==t)return y.call(t);e=t[g],r=v(t,g);try{t[g]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[g]=e:delete t[g],n}:function(t){return y.call(t)};var d=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var _=/./;function m(t){return"boolean"==typeof t}var w=Boolean.prototype.toString;var h=s();function O(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return m(t)||O(t)}function S(){return new Function("return this;")()}l(E,"isPrimitive",m),l(E,"isObject",O);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var R=function(t){if(arguments.length){if(!m(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(P)return P;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),x=R.document&&R.document.childNodes,B=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function F(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=G.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(C,"REGEXP",G),l(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!d(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F));var V="function"==typeof _||"object"==typeof B||"function"==typeof x?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function k(t){return"function"===V(t)}var U,X=Object.getPrototypeOf;U=k(Object.getPrototypeOf)?X:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var I=U;var M=Object.prototype;function N(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!d(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),I(t))}(t),!r||!v(t,"constructor")&&v(r,"constructor")&&k(r.constructor)&&"[object Function]"===j(r.constructor)&&v(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===M||function(t){var r;for(r in t)if(!v(t,r))return!1;return!0}(t)))}function q(t){return"string"==typeof t}var z=String.prototype.valueOf;var D=s();function H(t){return"object"==typeof t&&(t instanceof String||(D?function(t){try{return z.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function J(t){return q(t)||H(t)}function K(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function Q(t,r){return N(r)?v(r,"flags")&&(t.flags=r.flags,!q(t.flags))?new TypeError(K("0R32i","flags",t.flags)):v(r,"capture")&&(t.capture=r.capture,!m(t.capture))?new TypeError(K("0R330","capture",t.capture)):null:new TypeError(K("0R32h",r))}l(J,"isPrimitive",q),l(J,"isObject",H);var W="\\r?\\n";function Y(t){var r,e;if(arguments.length>0){if(e=Q(r={},t))throw e;return r.capture?new RegExp("(\\r?\\n)",r.flags):new RegExp(W,r.flags)}return/\r?\n/}var Z=Y({capture:!0}),$=Y();return l(Y,"REGEXP",$),l(Y,"REGEXP_CAPTURE",Z),Y}));
//# sourceMappingURL=index.js.map
