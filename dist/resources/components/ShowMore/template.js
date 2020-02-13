!function(n){var t={};function e(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(i,o,function(t){return n[t]}.bind(null,o));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="./src/components/ShowMore/template.ts")}({"./node_modules/css-loader/lib/css-base.js":function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),l=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[e].concat(l).concat([o]).join("\n")}var r;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var l=this[o][0];"number"==typeof l&&(i[l]=!0)}for(o=0;o<n.length;o++){var r=n[o];"number"==typeof r[0]&&i[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},"./src/components/ShowMore/styles.scss":function(n,t,e){(n.exports=e("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.i,'/* Global heading styles */\n* {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5 {\n  font-family: "Gilroy-ExtraBold";\n  margin: 0;\n  padding: 0; }\n\nh1 {\n  font-size: 40px;\n  line-height: 1.125; }\n\nh2 {\n  font-size: 22px;\n  line-height: 1.27273; }\n\nh3 {\n  font-size: 20px;\n  line-height: 1.35; }\n\nh4 {\n  font-size: 17px;\n  line-height: 1.47059; }\n\n/* Global paragraph styles */\np {\n  font-size: 2rem; }\n\n/* Global link styles */\na {\n  font-size: 2rem; }\n\n/* Global sup element */\nsup {\n  font-size: 75%; }\n\n/* Screen reader only */\n.sr-only {\n  border: 0 none;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n/* clearfix */\n.row {\n  margin-top: -60px;\n  margin-left: -15px;\n  margin-right: -15px;\n  max-width: none; }\n  @media (min-width: 768px) {\n    .row {\n      margin-top: -60px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-top: -80px; } }\n  .row:after {\n    content: " ";\n    display: block;\n    clear: both; }\n  .row + .row,\n  .row .row {\n    margin-top: 0; }\n  .row--reducedWidth {\n    margin-left: calc(6.25% - 15px);\n    margin-right: calc(6.75% - 15px); }\n    @media (min-width: 768px) {\n      .row--reducedWidth {\n        margin-left: calc(1.96% - 15px);\n        margin-right: calc(4.3% - 15px); } }\n    @media (min-width: 1520px) {\n      .row--reducedWidth {\n        max-width: 1470px;\n        margin-left: auto;\n        margin-right: auto; } }\n\n.col {\n  width: 100%;\n  float: left;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 60px; }\n  @media (min-width: 768px) {\n    .col {\n      margin-top: 60px; } }\n  @media (min-width: 1200px) {\n    .col {\n      margin-top: 80px; } }\n\n@media (min-width: 768px) {\n  .col--medium-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-1 {\n    margin-left: 8.33333%; }\n  .col--medium-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-2 {\n    margin-left: 16.66667%; }\n  .col--medium-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-3 {\n    margin-left: 25%; }\n  .col--medium-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-4 {\n    margin-left: 33.33333%; }\n  .col--medium-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-5 {\n    margin-left: 41.66667%; }\n  .col--medium-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-6 {\n    margin-left: 50%; }\n  .col--medium-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-7 {\n    margin-left: 58.33333%; }\n  .col--medium-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-8 {\n    margin-left: 66.66667%; }\n  .col--medium-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-9 {\n    margin-left: 75%; }\n  .col--medium-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-10 {\n    margin-left: 83.33333%; }\n  .col--medium-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-11 {\n    margin-left: 91.66667%; }\n  .col--medium-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--medium {\n    display: none; } }\n\n@media (min-width: 992px) {\n  .col--large-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-1 {\n    margin-left: 8.33333%; }\n  .col--large-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-2 {\n    margin-left: 16.66667%; }\n  .col--large-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-3 {\n    margin-left: 25%; }\n  .col--large-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-4 {\n    margin-left: 33.33333%; }\n  .col--large-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-5 {\n    margin-left: 41.66667%; }\n  .col--large-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-6 {\n    margin-left: 50%; }\n  .col--large-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-7 {\n    margin-left: 58.33333%; }\n  .col--large-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-8 {\n    margin-left: 66.66667%; }\n  .col--large-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-9 {\n    margin-left: 75%; }\n  .col--large-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-10 {\n    margin-left: 83.33333%; }\n  .col--large-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-11 {\n    margin-left: 91.66667%; }\n  .col--large-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--large {\n    display: none; } }\n\n/* clearfix */\nshow-more .showMore {\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 0.5rem;\n  right: 6%;\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(1, 0.5, 0, 1);\n  cursor: pointer;\n  z-index: 12; }\n  show-more .showMore--scrollActive {\n    opacity: 0; }\n  show-more .showMore__icon {\n    display: block;\n    fill: #f5f5eb; }\n  show-more .showMore__text {\n    color: #181717;\n    display: block;\n    margin-top: 1.3rem;\n    writing-mode: vertical-lr;\n    font-family: "Gilroy-ExtraBold", sans-serif;\n    font-size: 2rem; }\n  show-more .showMore:hover {\n    fill: darkgrey; }\n\n:host .showMore {\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 0.5rem;\n  right: 6%;\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(1, 0.5, 0, 1);\n  cursor: pointer;\n  z-index: 12; }\n  :host .showMore--scrollActive {\n    opacity: 0; }\n  :host .showMore__icon {\n    display: block;\n    fill: #f5f5eb; }\n  :host .showMore__text {\n    color: #181717;\n    display: block;\n    margin-top: 1.3rem;\n    writing-mode: vertical-lr;\n    font-family: "Gilroy-ExtraBold", sans-serif;\n    font-size: 2rem; }\n  :host .showMore:hover {\n    fill: darkgrey; }\n',""])},"./src/components/ShowMore/template.ts":function(n,t,e){"use strict";var i=this&&this.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n};Object.defineProperty(t,"__esModule",{value:!0});var o,l=e("./src/components/ShowMore/styles.scss");t.default=function(n,t,e,r){return n(o||(o=i(["\n\t\t",'\n\t\t<div class="showMore" ref=','>\n\t\t\t<svg class="showMore__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>\n\t\t\t<span class="showMore__text">',"</span>\n\t\t</div>\n    "],["\n\t\t",'\n\t\t<div class="showMore" ref=','>\n\t\t\t<svg class="showMore__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>\n\t\t\t<span class="showMore__text">',"</span>\n\t\t</div>\n    "])),r(l),e.showMoreRef,t.text)}}});
//# sourceMappingURL=template.js.map
