!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="./src/components/HeadingComp/template.ts")}({"./node_modules/@biotope/element/lib/esm/index.js":function(n,t,e){"use strict";function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function o(n){var t="function"==typeof Map?new Map:void 0;return(o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return a(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,n)})(n)}function a(n,t,e){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(n,r));return e&&c(i,e.prototype),i}).apply(null,arguments)}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  <style>","</style>\n"]);return u=function(){return n},n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}e.r(t),e.d(t,"createRaw",function(){return qn}),e.d(t,"createRef",function(){return Xn}),e.d(t,"createRefCallback",function(){return Yn}),e.d(t,"createStyle",function(){return Zn}),e.d(t,"html",function(){return In}),e.d(t,"toArray",function(){return y}),e.d(t,"toBoolean",function(){return g}),e.d(t,"toFunction",function(){return x}),e.d(t,"toNumber",function(){return v}),e.d(t,"toObject",function(){return b}),e.d(t,"toString",function(){return w});var p=function(n){var t=n.replace(/-([a-z])/g,function(n,t){return t.toUpperCase()}).replace(/-/g,"");return(t[0]||"").toLowerCase()+t.slice(1)},h=function(n){return"string"==typeof n?n:n&&"function"==typeof n.toString?n.toString():"".concat(n)},m=function(n){try{return JSON.parse(n)}catch(n){return}},g=function(n){return"boolean"==typeof n?n:!!n&&"false"!==n||""===n},v=function(n){if("number"==typeof n)return n;var t=+n;if(t!=t){var e=parseFloat(n);t=e||0===e?e:t}return t},y=function(n){if(Array.isArray(n))return n;if("string"==typeof n){var t=m(n);return"object"!==d(t)?null:Object.keys(t).reduce(function(n,e){return[].concat(s(n),[t[e]])},[])}if(n)try{return Object.keys(n).reduce(function(t,e){return[].concat(s(t),[n[e]])},[])}catch(n){}return s(new Array(n))},b=function(n){if("object"===d(n)&&!Array.isArray(n))return n;if("string"==typeof n){var t=m(n);return"object"!==d(t)?null:Object.keys(t).reduce(function(n,e){return Object.assign(Object.assign({},n),f({},e,t[e]))},{})}if(n)try{return Object.keys(n).reduce(function(t,e){return Object.assign(Object.assign({},t),f({},e,n[e]))},{})}catch(n){}return s(new Array(n)).reduce(function(n,t,e){return Object.assign(Object.assign({},n),f({},e,t))},{})},x=function(n){if("function"==typeof n)return n;try{return new Function("return ".concat(n,";"))()}catch(n){return null}},w=function(n){return"string"==typeof n?n:n&&"function"==typeof n.toString?n.toString():null},_=function(n){return"string"==typeof n?n:n.name},j=function(n,t){var e=function(n){return n.componentName||(n.name||n.toString().match(/^function\s*([^\s(]+)/)[1]).replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}(n);if(n.componentName||(t&&console.warn('Static property "componentName" missing. Setting it to "'.concat(e,'"…')),n.componentName=e),function(n){switch(document.createElement(n).constructor){case HTMLElement:case HTMLUnknownElement:return!1;default:return!0}}(n.componentName))return t&&console.warn('Attempt to re-register component "'.concat(n.componentName,'". Skipping…')),!1;n.dependencies.forEach(function(n){return n.register(t)});var r=(n.attributes&&n.attributes.length?n.attributes:[]).filter(function(n){return n});n.observedAttributes=r.map(_),r.forEach(function(t){var e=_(t),r=p(e),i={get:function(){return this.props[r]},set:function(n){null===n||void 0===n||!1===n||"false"===n?this.removeAttribute(e):"string"==typeof n&&this.setAttribute(e,n),this.attributeChangedCallback(e,this.props[r],n)}};Object.defineProperty(n.prototype,e,i),Object.defineProperty(n.prototype,r,i)});var i=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){for(i.bind(this)();this.__attributeChangedCallbackStack.length;)this.__attributeChangedCallbackStack.pop()();this.__created=!0,this.render(),this.emit("connected",void 0,!0)};var o=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var r=this,i=function(){o.bind(r).apply(void 0,t),r.emit("attributechanged",void 0,!0)};r.__created?i():r.__attributeChangedCallbackStack.unshift(i)};var a=n.prototype.disconnectedCallback;return n.prototype.disconnectedCallback=function(){a.bind(this)(),this.emit("disconnected",void 0,!0)},customElements.define(n.componentName,n),!0},O={};try{O.WeakMap=WeakMap}catch(n){O.WeakMap=function(n,t){var e=t.defineProperty,r=t.hasOwnProperty,i=o.prototype;return i.delete=function(n){return this.has(n)&&delete n[this._]},i.get=function(n){return this.has(n)?n[this._]:void 0},i.has=function(n){return r.call(n,this._)},i.set=function(n,t){return e(n,this._,{configurable:!0,value:t}),this},o;function o(t){e(this,"_",{value:"_@ungap/weakmap"+n++}),t&&t.forEach(a,this)}function a(n){this.set(n[0],n[1])}}(Math.random(),Object)}var k=O.WeakMap,C="object"!==("undefined"==typeof document?"undefined":d(document)),N=function(n){var t,e=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),r=!("raw"in n)||n.propertyIsEnumerable("raw")||!Object.isFrozen(n.raw);if(e||r){var i={},o=function(n){for(var t=".",e=0;e<n.length;e++)t+=n[e].length+"."+n[e];return i[t]||(i[t]=n)};if(r)N=o;else{var a=new k;N=function(n){return a.get(n)||function(n,t){return a.set(n,t),t}(n,o(n))}}}else C=!0;return S(n)};function S(n){return C?n:N(n)}var A,E="-"+Math.random().toFixed(6)+"%",z=!1;try{"content"in(A=document.createElement("template"))&&(A.innerHTML='<p tabindex="'+E+'"></p>',A.content.childNodes[0].getAttribute("tabindex")==E)||(E="_dt: "+E.slice(1,-1)+";",z=!0)}catch(n){}var M="\x3c!--"+E+"--\x3e",L=8,P=1,T=3,R=/^(?:style|textarea)$/i,D=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var H=" \\f\\n\\r\\t",F="[^"+H+"\\/>\"'=]+",G="["+H+"]+"+F,$="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",W="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+F.replace("\\/","")+"))?)",B=new RegExp($+G+W+"+)(["+H+"]*/?>)","g"),I=new RegExp($+G+W+"*)(["+H+"]*/>)","g"),U=new RegExp("("+G+"\\s*=\\s*)(['\"]?)"+M+"\\2","gi");function Z(n,t,e,r){return"<"+t+e.replace(U,q)+r}function q(n,t,e){return t+(e||'"')+E+(e||'"')}function V(n,t,e){return D.test(t)?n:"<"+t+e+"></"+t+">"}var J=function(n){var t="fragment",e="content"in i("template")?function(n){var t=i("template");return t.innerHTML=n,t.content}:function(n){var e=i(t),o=i("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(n)){var c=RegExp.$1;o.innerHTML="<table>"+n+"</table>",a=o.querySelectorAll(c)}else o.innerHTML=n,a=o.childNodes;return r(e,a),e};return function(n,o){return("svg"===o?function(n){var e=i(t),o=i("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+n+"</svg>",r(e,o.firstChild.childNodes),e}:e)(n)};function r(n,t){for(var e=t.length;e--;)n.appendChild(t[0])}function i(e){return e===t?n.createDocumentFragment():n.createElementNS("http://www.w3.org/1999/xhtml",e)}}(document),K=[].indexOf,Q=function(n,t,e,r,i,o){for(var a=("selectedIndex"in t),c=a;r<i;){var l=n(e[r],1);if(t.insertBefore(l,o),a&&c&&l.selected){c=!c;var u=t.selectedIndex;t.selectedIndex=u<0?r:K.call(t.querySelectorAll("option"),l)}r++}},X=function(n,t){return n==t},Y=function(n){return n},nn=function(n,t,e,r,i,o,a){var c=o-i;if(c<1)return-1;for(;e-t>=c;){for(var l=t,u=i;l<e&&u<o&&a(n[l],r[u]);)l++,u++;if(u===o)return t;t=l+1}return-1},tn=function(n,t,e,r,i){return e<r?n(t[e],0):0<e?n(t[e-1],-0).nextSibling:i},en=function(n,t,e,r){for(;e<r;)an(n(t[e++],-1))},rn=function(n,t,e){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;e<n[o]?i=o:r=o+1}return r},on=function(n,t,e,r,i,o,a,c,l,u,f,s,d){!function(n,t,e,r,i,o,a,c,l){for(var u=[],f=n.length,s=a,d=0;d<f;)switch(n[d++]){case 0:i++,s++;break;case 1:u.push(r[i]),Q(t,e,r,i++,i,s<c?t(o[s],0):l);break;case-1:s++}for(d=0;d<f;)switch(n[d++]){case 0:a++;break;case-1:-1<u.indexOf(o[a])?a++:en(t,o,a++,a)}}(function(n,t,e,r,i,o,a){var c,l,u,f,s,d,p,h=e+o,m=[];n:for(c=0;c<=h;c++){if(c>50)return null;for(p=c-1,s=c?m[c-1]:[0,0],d=m[c]=[],l=-c;l<=c;l+=2){for(u=(f=l===-c||l!==c&&s[p+l-1]<s[p+l+1]?s[p+l+1]:s[p+l-1]+1)-l;f<o&&u<e&&a(r[i+f],n[t+u]);)f++,u++;if(f===o&&u===e)break n;d[c+l]=f}}var g=Array(c/2+h/2),v=g.length-1;for(c=m.length-1;c>=0;c--){for(;f>0&&u>0&&a(r[i+f-1],n[t+u-1]);)g[v--]=0,f--,u--;if(!c)break;p=c-1,s=c?m[c-1]:[0,0],(l=f-u)==-c||l!==c&&s[p+l-1]<s[p+l+1]?(u--,g[v--]=1):(f--,g[v--]=-1)}return g}(e,r,o,a,c,u,s)||function(n,t,e,r,i,o,a,c){var l=0,u=r<c?r:c,f=Array(u++),s=Array(u);s[0]=-1;for(var d=1;d<u;d++)s[d]=a;for(var p=i.slice(o,a),h=t;h<e;h++){var m=p.indexOf(n[h]);if(-1<m){var g=m+o;-1<(l=rn(s,u,g))&&(s[l]=g,f[l]={newi:h,oldi:g,prev:f[l-1]})}}for(l=--u,--a;s[l]>a;)--l;u=c+r-l;var v=Array(u),y=f[l];for(--e;y;){for(var b=y,x=b.newi,w=b.oldi;e>x;)v[--u]=1,--e;for(;a>w;)v[--u]=-1,--a;v[--u]=0,--e,--a,y=y.prev}for(;e>=t;)v[--u]=1,--e;for(;a>=o;)v[--u]=-1,--a;return v}(e,r,i,o,a,c,l,u),n,t,e,r,a,c,f,d)},an=function(n){return(n.remove||function(){var n=this.parentNode;n&&n.removeChild(this)}).call(n)};var cn=function(n,t,e,r){r||(r={});for(var i=r.compare||X,o=r.node||Y,a=null==r.before?null:o(r.before,0),c=t.length,l=c,u=0,f=e.length,s=0;u<l&&s<f&&i(t[u],e[s]);)u++,s++;for(;u<l&&s<f&&i(t[l-1],e[f-1]);)l--,f--;var d=u===l,p=s===f;if(d&&p)return e;if(d&&s<f)return Q(o,n,e,s,f,tn(o,t,u,c,a)),e;if(p&&u<l)return en(o,t,u,l),e;var h=l-u,m=f-s,g=-1;if(h<m){if(-1<(g=nn(e,s,f,t,u,l,i)))return Q(o,n,e,s,g,o(t[u],0)),Q(o,n,e,g+h,f,tn(o,t,l,c,a)),e}else if(m<h&&-1<(g=nn(t,u,l,e,s,f,i)))return en(o,t,u,g),en(o,t,g+m,l),e;return h<2||m<2?(Q(o,n,e,s,f,o(t[u],0)),en(o,t,u,l),e):h===m&&function(n,t,e,r,i,o){for(;r<i&&o(e[r],n[t-1]);)r++,t--;return 0===t}(e,f,t,u,l,i)?(Q(o,n,e,s,f,tn(o,t,l,c,a)),e):(on(o,n,e,s,f,m,t,u,l,h,c,i,a),e)},ln=function(n,t,e,r,i){var o="importNode"in n,a=n.createDocumentFragment();return a.appendChild(n.createTextNode("g")),a.appendChild(n.createTextNode("")),(o?n.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function n(t,e){for(var r=t.cloneNode(),i=t.childNodes||[],o=i.length,a=0;e&&a<o;a++)r.appendChild(n(i[a],e));return r}:o?n.importNode:function(n,t){return n.cloneNode(!!t)}}(document),un="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},fn=z?function(n,t){var e=t.join(" ");return t.slice.call(n,0).sort(function(n,t){return e.indexOf(n.name)<=e.indexOf(t.name)?-1:1})}:function(n,t){return t.slice.call(n,0)};function sn(n,t){for(var e=t.length,r=0;r<e;)n=n.childNodes[t[r++]];return n}function dn(n,t,e,r){for(var i=n.attributes,o=[],a=[],c=fn(i,e),l=c.length,u=0;u<l;){var f,s=c[u++],d=s.value===E;if(d||1<(f=s.value.split(M)).length){var p=s.name;if(o.indexOf(p)<0){o.push(p);var h=e.shift().replace(d?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+p+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),m=i[h]||i[h.toLowerCase()];if(d)t.push(hn(m,r,h,null));else{for(var g=f.length-2;g--;)e.shift();t.push(hn(m,r,h,f))}}a.push(s)}}u=0;for(var v=(0<(l=a.length)&&z&&!("ownerSVGElement"in n));u<l;){var y=a[u++];v&&(y.value=""),n.removeAttribute(y.name)}var b=n.nodeName;if(/^script$/i.test(b)){var x=document.createElement(b);for(l=i.length,u=0;u<l;)x.setAttributeNode(i[u++].cloneNode(!0));x.textContent=n.textContent,n.parentNode.replaceChild(x,n)}}function pn(n,t){return{type:"any",node:n,path:t}}function hn(n,t,e,r){return{type:"attr",node:n,path:t,name:e,sparse:r}}function mn(n,t){return{type:"text",node:n,path:t}}var gn=new k;function vn(n,t){var e=(n.convert||function(n){return n.join(M).replace(I,V).replace(B,Z)})(t),r=n.transform;r&&(e=r(e));var i=J(e,n.type);xn(i);var o=[];!function n(t,e,r,i){for(var o=t.childNodes,a=o.length,c=0;c<a;){var l=o[c];switch(l.nodeType){case P:var u=i.concat(c);dn(l,e,r,u),n(l,e,r,u);break;case L:var f=l.textContent;if(f===E)r.shift(),e.push(R.test(t.nodeName)?mn(t,i):pn(l,i.concat(c)));else switch(f.slice(0,2)){case"/*":if("*/"!==f.slice(-2))break;case"👻":t.removeChild(l),c--,a--}break;case T:R.test(t.nodeName)&&un.call(l.textContent)===M&&(r.shift(),e.push(mn(t,i)))}c++}}(i,o,t.slice(0),[]);var a={content:i,updates:function(e){for(var r=[],i=o.length,a=0,c=0;a<i;){var l=o[a++],u=sn(e,l.path);switch(l.type){case"any":r.push({fn:n.any(u,[]),sparse:!1});break;case"attr":var f=l.sparse,s=n.attribute(u,l.name,l.node);null===f?r.push({fn:s,sparse:!1}):(c+=f.length-2,r.push({fn:s,sparse:!0,values:f}));break;case"text":r.push({fn:n.text(u),sparse:!1}),u.textContent=""}}return i+=c,function(){var n=arguments.length;if(i!==n-1)throw new Error(n-1+" values instead of "+i+"\n"+t.join("${value}"));for(var o=1,a=1;o<n;){var c=r[o-a];if(c.sparse){var l=c.values,u=l[0],f=1,s=l.length;for(a+=s-2;f<s;)u+=arguments[o++]+l[f++];c.fn(u)}else c.fn(arguments[o++])}return e}}};return gn.set(t,a),a}var yn=[];function bn(n){var t=yn,e=xn;return function(r){return t!==r&&(e=function(n,t){var e=gn.get(t)||vn(n,t);return e.updates(ln.call(document,e.content,!0))}(n,t=r)),e.apply(null,arguments)}}function xn(n){for(var t=n.childNodes,e=t.length;e--;){var r=t[e];1!==r.nodeType&&0===un.call(r.textContent).length&&n.removeChild(r)}}var wn=function(){var n=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(n,t){return"ownerSVGElement"in n?function(n,t){var e;t?e=t.cloneNode(!0):(n.setAttribute("style","--hyper:style;"),e=n.getAttributeNode("style"));return e.value="",n.setAttributeNode(e),r(e,!0)}(n,t):r(n.style,!1)};function e(n,t,e){return t+"-"+e.toLowerCase()}function r(r,i){var o,a;return function(c){var l,u,f,s;switch(d(c)){case"object":if(c){if("object"===o){if(!i&&a!==c)for(u in a)u in c||(r[u]="")}else i?r.value="":r.cssText="";for(u in l=i?{}:r,c)f="number"!=typeof(s=c[u])||n.test(u)?s:s+"px",!i&&/^--/.test(u)?l.setProperty(u,f):l[u]=f;o="object",i?r.value=function(n){var r,i=[];for(r in n)i.push(r.replace(t,e),":",n[r],";");return i.join("")}(a=l):a=c;break}default:a!=c&&(o="string",a=c,i?r.value=c||"":r.cssText=c||"")}}}}(),_n=function(n,t){return(t=e.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(n){var t=this.childNodes,e=this.firstChild,r=this.lastChild;if(this._=null,n&&2===t.length)r.parentNode.removeChild(r);else{var i=this.ownerDocument.createRange();i.setStartBefore(n?t[1]:e),i.setEndAfter(r),i.deleteContents()}return e},t.valueOf=function(n){var t=this._,e=null==t;if(e&&(t=this._=this.ownerDocument.createDocumentFragment()),e||n)for(var r=this.childNodes,i=0,o=r.length;i<o;i++)t.appendChild(r[i]);return t},e;function e(t){var e=this.childNodes=n.call(t,0);this.firstChild=e[0],this.lastChild=e[e.length-1],this.ownerDocument=e[0].ownerDocument,this._=null}}([].slice),jn=Array.isArray,On=Object.create,kn=Object.freeze,Cn=(Object.keys,_n.prototype.nodeType),Nn=function(n,t){return n.nodeType===Cn?1/t<0?t?n.remove(!0):n.lastChild:t?n.valueOf(!0):n.firstChild:n},Sn=function(n,t){var e,r=!1,i=t.cloneNode(!0);return function(t){e!==t&&(e=t,i.value!==t&&(null==t?(r&&(r=!1,n.removeAttributeNode(i)),i.value=t):(i.value=t,r||(r=!0,n.setAttributeNode(i)))))}},An=function(n,t){var e;return function(r){e!==r&&(e=r,n[t]!==r&&(null==r?(n[t]="",n.removeAttribute(t)):n[t]=r))}},En=/^(?:form|list)$/i,zn=[].slice;function Mn(n){return this.type=n,bn(this)}function Ln(n){return n(this)}Mn.prototype={attribute:function(n,t,e){var r="svg"===this.type;switch(t){case"class":if(r)return Sn(n,e);t="className";case"data":case"props":return An(n,t);case"style":return wn(n,e,r);case"ref":return function(n){return function(t){t.current=n}}(n);default:return"."===t.slice(0,1)?function(n,t,e){return e?function(e){try{n[t]=e}catch(r){n.setAttribute(t,e)}}:function(e){n[t]=e}}(n,t.slice(1),r):"on"===t.slice(0,2)?function(n,t){var e,r=t.slice(2);return t.toLowerCase()in n&&(r=r.toLowerCase()),function(t){e!==t&&(e&&n.removeEventListener(r,e,!1),e=t,t&&n.addEventListener(r,t,!1))}}(n,t):t in n&&!r&&!En.test(t)?An(n,t):Sn(n,e)}},any:function(n,t){var e,r={node:Nn,before:n},i=this.type,o=!1;return function a(c){switch(d(c)){case"string":case"number":case"boolean":o?e!==c&&(e=c,t[0].textContent=c):(o=!0,e=c,t=cn(n.parentNode,t,[function(n,t){return n.ownerDocument.createTextNode(t)}(n,c)],r));break;case"function":a(c(n));break;case"object":case"undefined":if(null==c){o=!1,t=cn(n.parentNode,t,[],r);break}default:if(o=!1,e=c,jn(c))if(0===c.length)t.length&&(t=cn(n.parentNode,t,[],r));else switch(d(c[0])){case"string":case"number":case"boolean":a(String(c));break;case"function":a(c.map(Ln,n));break;case"object":jn(c[0])&&(c=c.concat.apply([],c));default:t=cn(n.parentNode,t,c,r)}else!function(n){return"ELEMENT_NODE"in n}(c)?"text"in c?a(String(c.text)):"any"in c?a(c.any):"html"in c?t=cn(n.parentNode,t,zn.call(J([].concat(c.html).join(""),i).childNodes),r):"length"in c&&a(zn.call(c)):t=cn(n.parentNode,t,11===c.nodeType?zn.call(c.childNodes):[c],r)}}},text:function(n){var t;return function e(r){if(t!==r){t=r;var i=d(r);"object"===i&&r?"text"in r?e(String(r.text)):"any"in r?e(r.any):"html"in r?e([].concat(r.html).join("")):"length"in r&&e(zn.call(r).join("")):"function"===i?e(r(n)):n.textContent=null==r?"":r}}}};var Pn=new k,Tn=function(n,t){var e=new k;return r.for=function(n,i){var o,a=e.get(n)||function(n){var t=On(null);return e.set(n,t),t}(n);return a[i]||(a[i]=(o={sub:[],stack:[],wire:null},function(){return Rn(t,o,r.apply(null,arguments))}))},r.node=function(){return Rn(t,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new $n(n,function(n){for(var t=arguments.length,e=[S(n)],r=1;r<t;)e.push(arguments[r++]);return e}.apply(null,arguments))}},Rn=function(n,t,e){var r=t.sub,i=t.stack,o={a:0,aLength:r.length,i:0,iLength:i.length},a=Hn(n,t,e,o),c=o.a,l=o.i,u=o.iLength;return c<o.aLength&&r.splice(c),l<u&&i.splice(l),a},Dn=function(n){var t={sub:[],stack:[],wire:null};return Pn.set(n,t),t},Hn=function(n,t,e,r){var i=t.stack,o=r.i,a=r.iLength,c=e.type,l=e.args,u=o===a;u&&(r.iLength=i.push({type:c,id:l[0],tag:null,wire:null})),r.i++,Fn(n,t,l,r);var f=i[o];return u||f.id!==l[0]||f.type!==c?(f.type=c,f.id=l[0],f.tag=new n(c),f.wire=Gn(f.tag.apply(null,l))):f.tag.apply(null,l),f.wire},Fn=function(n,t,e,r){for(var i=1,o=e.length;i<o;i++){var a=e[i];if("object"===d(a)&&a)if(a instanceof $n)e[i]=Hn(n,t,a,r);else if(jn(a))for(var c=0,l=a.length;c<l;c++){var u=a[c];if("object"===d(u)&&u&&u instanceof $n){var f=t.sub,s=r.a;s===r.aLength&&(r.aLength=f.push({sub:[],stack:[],wire:null})),r.a++,a[c]=Rn(n,f[s],u)}}}},Gn=function(n){var t=n.childNodes,e=t.length;return 1===e?t[0]:e?new _n(t):n};function $n(n,t){this.type=n,this.args=t}kn($n);var Wn=function(n){return{html:Tn("html",n),svg:Tn("svg",n),render:function(t,e){var r="function"==typeof e?e():e,i=Pn.get(t)||Dn(t),o=r instanceof $n?Rn(n,i,r):r;return o!==i.wire&&(i.wire=o,t.textContent="",t.appendChild(o.valueOf(!0))),t}}}(Mn),Bn=Wn.render,In=Wn.html,Un=(Wn.svg,function(n,t,e){var r=Bn.bind(n,n.shadowRoot||n,function(){var n=t();return setTimeout(e),n});return function(){return n.__created?r():null}}),Zn=function(n){return In(u(),h(n))},qn=function(n){return In((t=h(n),Object.freeze(Object.defineProperties([t],{raw:{value:Object.freeze([t])}}))));var t},Vn=function(n,t,e,r){var i=n.constructor.attributes.filter(function(n){return _(n)===t})[0];if(i){var o=p(t),a=function(n,t){if("string"==typeof n)return t;if("function"==typeof n.converter)return n.converter(t);switch(n.type||"string"){case"boolean":return g(t);case"number":return v(t);case"array":return y(t);case"object":return b(t);case"function":return x(t);case"string":default:return w(t)}}(i,r);a!==n.props[o]&&(n.__currentProps=Object.assign(Object.assign({},n.props),f({},o,a)),n.render())}},Jn=function(n){n.__ready||(n.__ready=!0,n.ready(),n.emit("ready",void 0,!0))},Kn=function(n){n.rendered(),function n(t,e){e.length&&e.some(function(n){return!n.__rendered})?setTimeout(function(){return n(t,e)}):(t.__rendered=!0,t.emit("rendered",void 0,!0))}(n,s((n.shadowRoot||n).querySelectorAll("*")).filter(function(n){return"boolean"==typeof n.__rendered}))},Qn=function(n,t){return n.__rendered=!1,t()},Xn=function(){return{current:null}},Yn=function(n){return{get current(){return n()}}},nt=function(n){var t,e;function o(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(t=n.call(this)||this).__created=!1,t.__rendered=!1,t.__ready=!1,t.__attributeChangedCallbackStack=[],t.createStyle=Zn,t.createRaw=qn,e&&t.attachShadow({mode:"open"});var r=t.render.bind(i(t));return t.render=Un(i(t),function(){return Qn(i(t),r)},function(){Kn(i(t)),Jn(i(t))}),t}e=n,(t=o).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,o.register=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return j(this,n)};var a,c,l,u=o.prototype;return u.connectedCallback=function(){},u.disconnectedCallback=function(){},u.attributeChangedCallback=function(n,t,e){return Vn(this,n,0,e)},u.render=function(){return null},u.rendered=function(){},u.ready=function(){},u.addEventListener=function(t,e,r){"ready"===t&&this.__ready?e():n.prototype.addEventListener.call(this,t,e,r)},u.emit=function(n,t){return function(n,t,e,r){if(!t)throw Error("No event name defined. Please provide a name.");return n.dispatchEvent(new CustomEvent(t,Object.assign({bubbles:!r},void 0!==e&&{detail:e})))}(this,n,t,arguments.length>2&&void 0!==arguments[2]&&arguments[2])},u.setState=function(n){this.__currentState=Object.assign(Object.assign({},this.state),"function"==typeof n?n.call(this,this.state):n),this.render()},a=o,(c=[{key:"props",get:function(){return this.__currentProps||(this.__currentProps=this.defaultProps||{}),this.__currentProps}},{key:"state",get:function(){return this.__currentState||(this.__currentState=this.defaultState||{}),this.__currentState}},{key:"html",get:function(){return this.__html||(this.__html=In),this.__html}}])&&r(a.prototype,c),l&&r(a,l),o}(o(HTMLElement));nt.dependencies=[],nt.attributes=[],t.default=nt},"./node_modules/css-loader/lib/css-base.js":function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([i]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},"./src/components/HeadingComp/styles.scss":function(n,t,e){(n.exports=e("./node_modules/css-loader/lib/css-base.js")(!1)).push([n.i,'/* Global heading styles */\n* {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5 {\n  font-family: "Gilroy-ExtraBold";\n  margin: 0;\n  padding: 0; }\n\nh1 {\n  font-size: 40px;\n  line-height: 1.125; }\n\nh2 {\n  font-size: 22px;\n  line-height: 1.27273; }\n\nh3 {\n  font-size: 20px;\n  line-height: 1.35; }\n\nh4 {\n  font-size: 17px;\n  line-height: 1.47059; }\n\n/* Global paragraph styles */\np {\n  font-size: 2rem; }\n\n/* Global link styles */\na {\n  font-size: 2rem; }\n\n/* Global sup element */\nsup {\n  font-size: 75%; }\n\n/* Screen reader only */\n.sr-only {\n  border: 0 none;\n  clip: rect(0px, 0px, 0px, 0px);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n/* clearfix */\n.row {\n  margin-top: -60px;\n  margin-left: -15px;\n  margin-right: -15px;\n  max-width: none; }\n  @media (min-width: 768px) {\n    .row {\n      margin-top: -60px; } }\n  @media (min-width: 1200px) {\n    .row {\n      margin-top: -80px; } }\n  .row:after {\n    content: " ";\n    display: block;\n    clear: both; }\n  .row + .row,\n  .row .row {\n    margin-top: 0; }\n  .row--reducedWidth {\n    margin-left: calc(6.25% - 15px);\n    margin-right: calc(6.75% - 15px); }\n    @media (min-width: 768px) {\n      .row--reducedWidth {\n        margin-left: calc(1.96% - 15px);\n        margin-right: calc(4.3% - 15px); } }\n    @media (min-width: 1520px) {\n      .row--reducedWidth {\n        max-width: 1470px;\n        margin-left: auto;\n        margin-right: auto; } }\n\n.col {\n  width: 100%;\n  float: left;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 60px; }\n  @media (min-width: 768px) {\n    .col {\n      margin-top: 60px; } }\n  @media (min-width: 1200px) {\n    .col {\n      margin-top: 80px; } }\n\n@media (min-width: 768px) {\n  .col--medium-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-1 {\n    margin-left: 8.33333%; }\n  .col--medium-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-2 {\n    margin-left: 16.66667%; }\n  .col--medium-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-3 {\n    margin-left: 25%; }\n  .col--medium-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-4 {\n    margin-left: 33.33333%; }\n  .col--medium-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-5 {\n    margin-left: 41.66667%; }\n  .col--medium-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-6 {\n    margin-left: 50%; }\n  .col--medium-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-7 {\n    margin-left: 58.33333%; }\n  .col--medium-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-8 {\n    margin-left: 66.66667%; }\n  .col--medium-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-9 {\n    margin-left: 75%; }\n  .col--medium-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-10 {\n    margin-left: 83.33333%; }\n  .col--medium-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-11 {\n    margin-left: 91.66667%; }\n  .col--medium-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--medium-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--medium {\n    display: none; } }\n\n@media (min-width: 992px) {\n  .col--large-1 {\n    width: 8.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-1 {\n    margin-left: 8.33333%; }\n  .col--large-2 {\n    width: 16.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-2 {\n    margin-left: 16.66667%; }\n  .col--large-3 {\n    width: 25%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-3 {\n    margin-left: 25%; }\n  .col--large-4 {\n    width: 33.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-4 {\n    margin-left: 33.33333%; }\n  .col--large-5 {\n    width: 41.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-5 {\n    margin-left: 41.66667%; }\n  .col--large-6 {\n    width: 50%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-6 {\n    margin-left: 50%; }\n  .col--large-7 {\n    width: 58.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-7 {\n    margin-left: 58.33333%; }\n  .col--large-8 {\n    width: 66.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-8 {\n    margin-left: 66.66667%; }\n  .col--large-9 {\n    width: 75%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-9 {\n    margin-left: 75%; }\n  .col--large-10 {\n    width: 83.33333%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-10 {\n    margin-left: 83.33333%; }\n  .col--large-11 {\n    width: 91.66667%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-11 {\n    margin-left: 91.66667%; }\n  .col--large-12 {\n    width: 100%;\n    float: left;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .col--large-offset-12 {\n    margin-left: 100%; }\n  .hidden-col--large {\n    display: none; } }\n\n/* clearfix */\nheading-comp h1,\nheading-comp h2,\nheading-comp h3,\nheading-comp h4,\nheading-comp h5 {\n  margin-top: 0.5rem;\n  line-height: 1.2;\n  font-family: "Gilroy-ExtraBold", sans-serif; }\n  heading-comp h1.styled,\n  heading-comp h2.styled,\n  heading-comp h3.styled,\n  heading-comp h4.styled,\n  heading-comp h5.styled {\n    display: inline-block;\n    margin-top: 1rem;\n    line-height: 0.3;\n    background-color: #9fd4ca;\n    font-family: "Gilroy-Light", sans-serif; }\n  heading-comp h1.noMargin,\n  heading-comp h2.noMargin,\n  heading-comp h3.noMargin,\n  heading-comp h4.noMargin,\n  heading-comp h5.noMargin {\n    margin-top: 0; }\n\nheading-comp h1 {\n  margin-top: 1.33333rem;\n  font-size: 5.33333rem; }\n  @media (min-width: 768px) {\n    heading-comp h1 {\n      margin-top: 1.6rem;\n      font-size: 6.4rem; } }\n  @media (min-width: 992px) {\n    heading-comp h1 {\n      margin-top: 2rem;\n      font-size: 8rem; } }\n  heading-comp h1.styled {\n    margin-top: 4rem; }\n\nheading-comp h2 {\n  margin-top: 1rem;\n  font-size: 4rem; }\n  @media (min-width: 768px) {\n    heading-comp h2 {\n      margin-top: 1.2rem;\n      font-size: 4.8rem; } }\n  @media (min-width: 992px) {\n    heading-comp h2 {\n      margin-top: 1.5rem;\n      font-size: 6rem; } }\n  heading-comp h2.styled {\n    margin-top: 3rem; }\n\nheading-comp h3 {\n  margin-top: 0.88889rem;\n  font-size: 2.66667rem; }\n  @media (min-width: 768px) {\n    heading-comp h3 {\n      margin-top: 0.8rem;\n      font-size: 3.2rem; } }\n  @media (min-width: 992px) {\n    heading-comp h3 {\n      margin-top: 1rem;\n      font-size: 4rem; } }\n  heading-comp h3.styled {\n    margin-top: 2rem; }\n\nheading-comp h4 {\n  font-size: 2rem; }\n\nheading-comp h5 {\n  font-size: 1.7rem; }\n\n:host h1,\n:host h2,\n:host h3,\n:host h4,\n:host h5 {\n  margin-top: 0.5rem;\n  line-height: 1.2;\n  font-family: "Gilroy-ExtraBold", sans-serif; }\n  :host h1.styled,\n  :host h2.styled,\n  :host h3.styled,\n  :host h4.styled,\n  :host h5.styled {\n    display: inline-block;\n    margin-top: 1rem;\n    line-height: 0.3;\n    background-color: #9fd4ca;\n    font-family: "Gilroy-Light", sans-serif; }\n  :host h1.noMargin,\n  :host h2.noMargin,\n  :host h3.noMargin,\n  :host h4.noMargin,\n  :host h5.noMargin {\n    margin-top: 0; }\n\n:host h1 {\n  margin-top: 1.33333rem;\n  font-size: 5.33333rem; }\n  @media (min-width: 768px) {\n    :host h1 {\n      margin-top: 1.6rem;\n      font-size: 6.4rem; } }\n  @media (min-width: 992px) {\n    :host h1 {\n      margin-top: 2rem;\n      font-size: 8rem; } }\n  :host h1.styled {\n    margin-top: 4rem; }\n\n:host h2 {\n  margin-top: 1rem;\n  font-size: 4rem; }\n  @media (min-width: 768px) {\n    :host h2 {\n      margin-top: 1.2rem;\n      font-size: 4.8rem; } }\n  @media (min-width: 992px) {\n    :host h2 {\n      margin-top: 1.5rem;\n      font-size: 6rem; } }\n  :host h2.styled {\n    margin-top: 3rem; }\n\n:host h3 {\n  margin-top: 0.88889rem;\n  font-size: 2.66667rem; }\n  @media (min-width: 768px) {\n    :host h3 {\n      margin-top: 0.8rem;\n      font-size: 3.2rem; } }\n  @media (min-width: 992px) {\n    :host h3 {\n      margin-top: 1rem;\n      font-size: 4rem; } }\n  :host h3.styled {\n    margin-top: 2rem; }\n\n:host h4 {\n  font-size: 2rem; }\n\n:host h5 {\n  font-size: 1.7rem; }\n',""])},"./src/components/HeadingComp/template.ts":function(n,t,e){"use strict";var r=this&&this.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n};Object.defineProperty(t,"__esModule",{value:!0});var i,o,a,c,l,u,f=e("./src/components/HeadingComp/styles.scss"),s=e("./node_modules/@biotope/element/lib/esm/index.js");function d(n){var t,e;return n.hasStyle&&(t="styled"),n.noMargin&&(e="noMargin"),t+" "+e}t.default=function(n,t,e){return n(u||(u=r(["\n        ","\n\t\t","\n\t\t","\n\t\t","\n\t\t","\n\t\t","\n    "],["\n        ","\n\t\t","\n\t\t","\n\t\t","\n\t\t","\n\t\t","\n    "])),e(f),"h1"===t.type?s.html(i||(i=r(["\n\t\t\t<h1 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h1>\n\t\t"],["\n\t\t\t<h1 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h1>\n\t\t"])),d(t)):null,"h2"===t.type?s.html(o||(o=r(["\n\t\t\t<h2 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h2>\n\t\t"],["\n\t\t\t<h2 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h2>\n\t\t"])),d(t)):null,"h3"===t.type?s.html(a||(a=r(["\n\t\t\t<h3 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h3>\n\t\t"],["\n\t\t\t<h3 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h3>\n\t\t"])),d(t)):null,"h4"===t.type?s.html(c||(c=r(["\n\t\t\t<h4 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h4>\n\t\t"],["\n\t\t\t<h4 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h4>\n\t\t"])),d(t)):null,"h5"===t.type?s.html(l||(l=r(["\n\t\t\t<h5 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h5>\n\t\t"],["\n\t\t\t<h5 class=",">\n\t\t\t\t<slot/>\n\t\t\t</h5>\n\t\t"])),d(t)):null)}}});
//# sourceMappingURL=template.js.map
