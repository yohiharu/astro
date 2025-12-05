import{r as p}from"./index.Cd_vQiNd.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function R(){if(a)return u;a=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function o(i,r,t){var x=null;if(t!==void 0&&(x=""+t),r.key!==void 0&&(x=""+r.key),"key"in r){t={};for(var c in r)c!=="key"&&(t[c]=r[c])}else t=r;return r=t.ref,{$$typeof:s,type:i,key:x,ref:r!==void 0?r:null,props:t}}return u.Fragment=e,u.jsx=o,u.jsxs=o,u}var d;function m(){return d||(d=1,l.exports=R()),l.exports}var n=m();function v({item:s}){const e={"background-color":"green"};return n.jsxs("p",{className:"test",style:e,children:["item: ",s]})}function E({default_num:s}){const[e,o]=p.useState(Number(s)),i=()=>{o(r=>r+1)};return console.log(e),n.jsxs("div",{children:[n.jsx("p",{class:"test",children:"Counter"}),n.jsxs("p",{children:["count: ",e]}),n.jsx("button",{onClick:i,children:"INC"}),n.jsx(v,{item:"unchi"})]})}export{E as default};
