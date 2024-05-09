(()=>{var t={208:(t,e,r)=>{"use strict";r.d(e,{A:()=>s});var n=r(601),a=r.n(n),o=r(314),i=r.n(o)()(a());i.push([t.id,".container{\n display: flex;\n justify-content: center;\n align-items: center;\n gap: 100px;\n}\n\n\n#playerGrid {\n display: grid;\n grid-template-columns: repeat(10, 1fr);\n grid-template-rows: repeat(10, 1fr);\n width: 100vw;\n /* or a relative unit like % if you want to fit a parent element */\n max-width: 300px;\n /* max width to keep it within reasonable size */\n height: auto;\n /* let the height adjust according to the width */\n}\n\n#compGrid{\n  display: grid;\n   grid-template-columns: repeat(10, 1fr);\n   grid-template-rows: repeat(10, 1fr);\n   width: 100vw;\n   /* or a relative unit like % if you want to fit a parent element */\n   max-width: 300px;\n   /* max width to keep it within reasonable size */\n   height: auto;\n   /* let the height adjust according to the width */\n}\n\n.gridBlock {\n background-color: white;\n border: 1px solid black;\n width: 100%;\n /* make it take the full width of the grid cell */\n height: 0;\n padding-bottom: 100%;\n /* keep the aspect ratio 1:1 */\n}\n\n.hover{\n background-color: lightgreen;\n}\n",""]);const s=i},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],l=n.base?c[0]+n.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=a(p,n);n.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,a){var o=n(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=r(o[i]);e[s].references--}for(var c=n(t,a),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},368:t=>{class e{constructor(t){this.length=t,this.hp=0,this.ifHit=!1}hit(){return this.hp<this.length&&(this.hp+=1),this.isSunk(),this.hp}isSunk(){return this.hp===this.length&&(this.ifHit=!0),this.ifHit}}class r{constructor(){this.grid=this.initializeGrid(),this.ships=[]}initializeGrid(){return Array.from({length:10},(()=>Array(10).fill(null)))}place(t,r,n,a=!0){const o=new e(n);this.ships.push(o);for(let e=0;e<n;e++)a?this.grid[t][r+e]=o:this.grid[t+e][r]=o}receiveAttack(t,r){const n=this.grid[t][r];return n instanceof e?(n.hit(),this.grid[t][r]="h",!0):null===this.grid[t][r]?(this.grid[t][r]="m",!1):"h"!==this.grid[t][r]&&"m"!==this.grid[t][r]&&void 0}allShipsSunk(){return this.ships.every((t=>t.isSunk()))}}t.exports={BattleShip:e,GameBoard:r,Player:class{constructor(){this.gameboard=new r}attack(t,e){return this.gameboard.receiveAttack(t,e)}}}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{"use strict";var t=r(72),e=r.n(t),n=r(825),a=r.n(n),o=r(659),i=r.n(o),s=r(56),c=r.n(s),l=r(540),d=r.n(l),u=r(113),h=r.n(u),p=r(208),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(p.A,f),p.A&&p.A.locals&&p.A.locals;const{BattleShip:g,GameBoard:m,Player:v}=r(368),y=new v(!0),b=new v(!1),k=document.querySelector("#btn");b.gameboard.place(3,2,3,!0),b.gameboard.place(5,1,3,!1);const w=document.querySelector("#playerGrid"),x=document.querySelector("#compGrid");w.setAttribute("id","playerGrid");for(let t=0;t<10;t++)for(let e=0;e<10;e++){const r=document.createElement("div");r.classList.add("gridBlock"),r.dataset.row=t,r.dataset.col=e,w.appendChild(r)}for(let t=0;t<10;t++)for(let e=0;e<10;e++){const r=document.createElement("div");r.classList.add("gridBlock"),r.dataset.row=t,r.dataset.col=e,C(r),r.dataset.clicked="false",r.addEventListener("click",M),r.addEventListener("click",S),x.appendChild(r)}function C(t){t.addEventListener("mouseover",(()=>{"true"!==t.dataset.clicked&&(t.style.backgroundColor="lightgreen")})),t.addEventListener("mouseout",(()=>{"true"!==t.dataset.clicked&&(t.style.backgroundColor="white")}))}function M(t){let e=t.target.dataset.row,r=t.target.dataset.col;y.gameboard.receiveAttack(e,r),"h"==y.gameboard.grid[e][r]?t.target.style.backgroundColor="#FFCCCB":t.target.style.backgroundColor="lightgrey",t.target.dataset.clicked="true",console.log(y.gameboard.grid),A()}function S(){let t,e;t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),b.attack(t,e);let r=document.querySelector(`.gridBlock[data-row='${t}'][data-col='${e}']`);"h"==b.gameboard.grid[t][e]?r.style.backgroundColor="#FFCCCB":r.style.backgroundColor="lightgrey",console.log(b.gameboard.grid),A()}function A(){!0===y.gameboard.allShipsSunk()?console.log("you won!!"):!0===b.gameboard.allShipsSunk()&&console.log("you lost!")}!function(t){t.addEventListener("click",(()=>{let t,e,r;for(let n=0;n<5;n++){if(t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),r=Math.floor(2*Math.random()+1),n%2==0){y.gameboard.place(t,e,r,!0);for(let n=0;n<r;n++)document.querySelector(`.gridBlock[data-row='${t}'][data-col='${e+n}']`).style.backgroundColor="green"}else{y.gameboard.place(t,e,r,!1);for(let n=0;n<r;n++)document.querySelector(`.gridBlock[data-row='${t+n}'][data-col='${e}']`).style.backgroundColor="green"}for(let n=0;n<5;n++)t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),r=Math.floor(2*Math.random()+1),n%2==0?b.gameboard.place(t,e,r,!0):b.gameboard.place(t,e,r,!1)}}))}(k)})()})();