(this["webpackJsonpbinary-app"]=this["webpackJsonpbinary-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/logo.aafc4100.png"},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(3),s=n.n(r),o=(n(12),n(1)),l=(n(13),n(14),n(4)),c=n.n(l);var h=function(e){var t=e.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement("img",{src:c.a,alt:"logo"}),a.a.createElement("h1",null,t),a.a.createElement("a",{href:"https://github.com/tonicprism/BinaryApp"},a.a.createElement("div",{id:"github-logo"},a.a.createElement("svg",{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",enableBackground:"true"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))))))};n(15);var u=function(){return a.a.createElement("footer",null)},m=n(5),p=n(6),d=function(){function e(t){Object(m.a)(this,e),this.bin=void 0,this.ResultedDecimal=void 0,this.positionOfChar=void 0,this.permission=void 0,this.dontBinaryElements=void 0,this.positionTheDontBinaryElement=void 0,this.bin=t,this.binConversor,this.ResultedDecimal=0,this.positionOfChar=0,this.permission=!1,this.dontBinaryElements=[],this.positionTheDontBinaryElement=0}return Object(p.a)(e,[{key:"binConversor",value:function(){var e=this.bin;this.ResultedDecimal=0,this.positionOfChar=e.length,this.positionTheDontBinaryElement=0;for(var t=0;t<=e.length;t++){var n=e.charAt(t);this.positionTheDontBinaryElement++,"1"!==n&&"0"!==n&&""!==n&&this.dontBinaryElements.push(n),this.dontBinaryElements.length>=1?this.permission=!1:this.permission=!0}if(!0===this.permission&&8===e.length){for(this.positionOfChar=e.length-1;this.positionOfChar>=0;this.positionOfChar--)this.ResultedDecimal+=Number(e[this.positionOfChar])*Math.pow(2,e.length-1-this.positionOfChar);return this.ResultedDecimal}return"[ERROR] ? TIP ? -> Must be 8 digits AND/OR ? TIP ? -> The values must be only binaries"}}]),e}();var f=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(Object(i.useState)()),l=Object(o.a)(s,2),c=l[0],m=l[1],p=Object(Object(i.useState)()),f=Object(o.a)(p,2),b=f[0],E=f[1];return a.a.createElement("div",{className:"App"},a.a.createElement("body",null,a.a.createElement(h,{title:"Binary App"}),a.a.createElement("div",{id:"wrapper"},a.a.createElement("h1",null,"Decimal:",a.a.createElement("p",null,c)),a.a.createElement("h1",null,"Binary:",a.a.createElement("p",null,b)),a.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},className:"forms"}),a.a.createElement("button",{className:"forms",onClick:function(){var e=new d(n),t=JSON.stringify(e.binConversor());Object(m(t)),Object(E(e.bin))}},"Conversor")),a.a.createElement(u,null)))};s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.8e2a83e4.chunk.js.map