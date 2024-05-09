(()=>{var e={208:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),l=n.n(c),s=new URL(n(868),n.b),d=i()(o()),u=l()(s);d.push([e.id,`*{\n  margin: 0;\n  padding :0;\n  font-family: Helvetica, sans-serif;\n}\n\nbody{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 80px;\n}\n\n.container{\n display: flex;\n justify-content: center;\n align-items: center;\n gap: 100px;\n}\n\n\n.header, .footer{\n  background-color: lightgreen;\n  width: 100vw;\n  height: 100px; \n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#header-word{\n  font-weight: bold;\n  font-size: 75px;\n  color: white;\n}\n\n#playerGrid {\n display: grid;\n grid-template-columns: repeat(10, 1fr);\n grid-template-rows: repeat(10, 1fr);\n width: 100vw;\n /* or a relative unit like % if you want to fit a parent element */\n max-width: 300px;\n /* max width to keep it within reasonable size */\n height: auto;\n /* let the height adjust according to the width */\n}\n\n#compGrid{\n  display: grid;\n   grid-template-columns: repeat(10, 1fr);\n   grid-template-rows: repeat(10, 1fr);\n   width: 100vw;\n   /* or a relative unit like % if you want to fit a parent element */\n   max-width: 300px;\n   /* max width to keep it within reasonable size */\n   height: auto;\n   /* let the height adjust according to the width */\n}\n\n.gridBlock {\n background-color: white;\n border: 1px solid black;\n width: 100%;\n /* make it take the full width of the grid cell */\n height: 0;\n padding-bottom: 100%;\n /* keep the aspect ratio 1:1 */\n}\n\n.hover{\n background-color: lightgreen;\n}\n\n\n#modalWinner, #modalLoser{\n  display: none;\n    /* Hidden by default */\n    position: fixed;\n    /* Stay in place */\n    z-index: 1;\n    /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%;\n    /* Full width */\n    height: 100%;\n    /* Full height */\n    overflow: auto;\n    /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */\n}\n\n.svg-pic{\n  width: 100px;\n  height: 100px;\n  background-image: url(${u});\n}\n\n.footer-words{\n  font-weight: bold;\n  font-size: 25px;\n  color: white;\n}\n\n#btn{\n  background-color: lightgreen;\n  color: white;\n  border: solid 10px;\n  border-radius: 30px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 200px;\n  height: 100px;\n  transition: background-color 1s 0.3s ease-out;\n}\n\n#btn:hover{\n      background-color: #66cd66;\n        /* darker shade of lightgreen */\n}\n\n.containerleft,.containerright{\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  align-items: center;\n}`,""]);const h=d},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},417:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var g=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},368:e=>{class t{constructor(e){this.length=e,this.hp=0,this.ifHit=!1}hit(){return this.hp<this.length&&(this.hp+=1),this.isSunk(),this.hp}isSunk(){return this.hp===this.length&&(this.ifHit=!0),this.ifHit}}class n{constructor(){this.grid=this.initializeGrid(),this.ships=[]}initializeGrid(){return Array.from({length:10},(()=>Array(10).fill(null)))}place(e,n,r,o=!0){const a=new t(r);this.ships.push(a);for(let t=0;t<r;t++)o?this.grid[e][n+t]=a:this.grid[e+t][n]=a}receiveAttack(e,n){const r=this.grid[e][n];return r instanceof t?(r.hit(),this.grid[e][n]="h",!0):null===this.grid[e][n]?(this.grid[e][n]="m",!1):"h"!==this.grid[e][n]&&"m"!==this.grid[e][n]&&void 0}allShipsSunk(){return this.ships.every((e=>e.isSunk()))}}e.exports={BattleShip:t,GameBoard:n,Player:class{constructor(){this.gameboard=new n}attack(e,t){return this.gameboard.receiveAttack(e,t)}}}},868:(e,t,n)=>{"use strict";e.exports=n.p+"1a5ac6cfdd2e78f0676e.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(72),t=n.n(e),r=n(825),o=n.n(r),a=n(659),i=n.n(a),c=n(56),l=n.n(c),s=n(540),d=n.n(s),u=n(113),h=n.n(u),p=n(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(p.A,g),p.A&&p.A.locals&&p.A.locals;const{BattleShip:f,GameBoard:m,Player:b}=n(368),y=new b(!0),v=new b(!1),w=document.querySelector("#btn");y.gameboard.place(0,2,3,!0),y.gameboard.place(5,0,3,!1),y.gameboard.place(9,1,2,!0),y.gameboard.place(4,2,2,!0),v.gameboard.place(3,2,3,!0),v.gameboard.place(5,1,3,!1),v.gameboard.place(5,6,4,!1),v.gameboard.place(9,9,1,!0);const k=document.querySelector("#playerGrid"),x=document.querySelector("#compGrid");k.setAttribute("id","playerGrid");for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=document.createElement("div");n.classList.add("gridBlock"),n.dataset.row=e,n.dataset.col=t,y.gameboard.grid[e][t]instanceof f&&(n.style.backgroundColor="green"),k.appendChild(n)}for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=document.createElement("div");n.classList.add("gridBlock"),n.dataset.row=e,n.dataset.col=t,S(n),n.dataset.clicked="false",n.addEventListener("click",C),n.addEventListener("click",M),x.appendChild(n)}function S(e){e.addEventListener("mouseover",(()=>{"true"!==e.dataset.clicked&&(e.style.backgroundColor="lightgreen")})),e.addEventListener("mouseout",(()=>{"true"!==e.dataset.clicked&&(e.style.backgroundColor="white")}))}function C(e){let t=e.target.dataset.row,n=e.target.dataset.col;y.gameboard.receiveAttack(t,n),"h"==y.gameboard.grid[t][n]?e.target.style.backgroundColor="#FFCCCB":e.target.style.backgroundColor="lightgrey",e.target.dataset.clicked="true",console.log(y.gameboard.grid),A()}function M(){let e,t;e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),v.attack(e,t);let n=document.querySelector(`.gridBlock[data-row='${e}'][data-col='${t}']`);"h"==v.gameboard.grid[e][t]?n.style.backgroundColor="#FFCCCB":n.style.backgroundColor="lightgrey",console.log(v.gameboard.grid),A()}function A(){const e=document.querySelector("#modalWinner"),t=document.querySelector("#modalLoser");!0===y.gameboard.allShipsSunk()?e.style.display="block":!0===v.gameboard.allShipsSunk()&&(t.style.display="block")}!function(e){e.addEventListener("click",(()=>{let e,t,n;for(let r=0;r<5;r++){if(e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),n=Math.floor(2*Math.random()+1),r%2==0){y.gameboard.place(e,t,n,!0);for(let r=0;r<n;r++)document.querySelector(`.gridBlock[data-row='${e}'][data-col='${t+r}']`).style.backgroundColor="green"}else{y.gameboard.place(e,t,n,!1);for(let r=0;r<n;r++)document.querySelector(`.gridBlock[data-row='${e+r}'][data-col='${t}']`).style.backgroundColor="green"}for(let r=0;r<5;r++)e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),n=Math.floor(2*Math.random()+1),r%2==0?v.gameboard.place(e,t,n,!0):v.gameboard.place(e,t,n,!1)}}))}(w),console.log(v.gameboard.grid)})()})();