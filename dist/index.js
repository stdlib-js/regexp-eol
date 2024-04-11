"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=a(function(h,E){
var P=require('@stdlib/assert-is-plain-object/dist'),s=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/assert-is-boolean/dist').isPrimitive,m=require('@stdlib/assert-is-string/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function O(e,r){return P(r)?s(r,"flags")&&(e.flags=r.flags,!m(e.flags))?new TypeError(u('0sJ2W',"flags",e.flags)):s(r,"capture")&&(e.capture=r.capture,!q(e.capture))?new TypeError(u('0sJ2o',"capture",e.capture)):null:new TypeError(u('0sJ2V',r));}E.exports=O
});var i=a(function(A,f){
var G=v(),l="\\r?\\n";function w(e){var r,t;if(arguments.length>0){if(r={},t=G(r,e),t)throw t;return r.capture?new RegExp("("+l+")",r.flags):new RegExp(l,r.flags)}return/\r?\n/}f.exports=w
});var p=a(function(C,c){
var x=i(),T=x({capture:!0});c.exports=T
});var o=a(function(L,g){
var X=i(),b=X();g.exports=b
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=i(),d=p(),y=o();R(n,"REGEXP",y);R(n,"REGEXP_CAPTURE",d);module.exports=n;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
