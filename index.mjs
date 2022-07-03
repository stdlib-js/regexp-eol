// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function p(e,p){return r(p)?s(p,"flags")&&(e.flags=p.flags,!n(e.flags))?new TypeError(i("0R32i","flags",e.flags)):s(p,"capture")&&(e.capture=p.capture,!t(e.capture))?new TypeError(i("0R330","capture",e.capture)):null:new TypeError(i("0R32h",p))}function o(e){var r,s;if(arguments.length>0){if(s=p(r={},e))throw s;return r.capture?new RegExp("(\\r?\\n)",r.flags):new RegExp("\\r?\\n",r.flags)}return/\r?\n/}var a=o({capture:!0}),l=o();e(o,"REGEXP",l),e(o,"REGEXP_CAPTURE",a);export{l as REGEXP,a as REGEXP_CAPTURE,o as default};
//# sourceMappingURL=index.mjs.map
