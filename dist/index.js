"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(q,n){
var i=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-special-pow/dist');function v(e,r){return i(e)||i(r)||!t(e)||!t(r)||e>r?NaN:(a(r-e+1,2)-1)/12}n.exports=v
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
