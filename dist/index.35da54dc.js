function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire3a11=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.35da54dc.js","hfd23":"icons.1b1955db.svg"}'));var o,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var f,g=Function.prototype.call;h=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);f=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,$=S.bind,O=S.call,L=p&&$.bind(O,O),j=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return O.apply(e,arguments)}})({}.toString),x=E("".slice);w=function(e){return x(j(e),8,-1)};var P=c.Object,M=E("".split);k=d((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):P(e)}:P;var T,q=c.TypeError;T=function(e){if(null==e)throw q("Can't call method on "+e);return e},_=function(e){return k(T(e))};var I,R,H,N;N=function(e){return"function"==typeof e},H=function(e){return"object"==typeof e?null!==e:N(e)};var F,A={},C=function(e){return N(e)?e:void 0};F=function(e,t){return arguments.length<2?C(c[e]):c[e]&&c[e][t]};var D={};D=E({}.isPrototypeOf);var G,U,W,z={};z=F("navigator","userAgent")||"";var Y,B,J=c.process,Q=c.Deno,V=J&&J.versions||Q&&Q.version,K=V&&V.v8;K&&(B=(Y=K.split("."))[0]>0&&Y[0]<4?1:+(Y[0]+Y[1])),!B&&z&&(!(Y=z.match(/Edge\/(\d+)/))||Y[1]>=74)&&(Y=z.match(/Chrome\/(\d+)/))&&(B=+Y[1]),W=B,U=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&W&&W<41})),G=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;A=G?function(e){return"symbol"==typeof e}:function(e){var t=F("Symbol");return N(t)&&D(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(N(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,ae=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&N(n=e.toString)&&!H(r=h(n,e)))return r;if(N(n=e.valueOf)&&!H(r=h(n,e)))return r;if("string"!==t&&N(n=e.toString)&&!H(r=h(n,e)))return r;throw ae("Can't convert object to primitive value")};var oe,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},fe=c.Object;pe=function(e){return fe(T(e))};var ge=E({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ge(pe(e),t)};var ve,ye=0,me=Math.random(),be=E(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+me,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=G?we:we&&we.withoutSetter||ve;oe=function(e){if(!he(_e,e)||!U&&"string"!=typeof _e[e]){var t="Symbol."+e;U&&he(we,e)?_e[e]=we[e]:_e[e]=G&&ke?ke(t):Ee(t)}return _e[e]};var Se=c.TypeError,$e=oe("toPrimitive");R=function(e,t){if(!H(e)||A(e))return e;var n,r=Z(e,$e);if(r){if(void 0===t&&(t="default"),n=h(r,e,t),!H(n)||A(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},I=function(e){var t=R(e,"string");return A(t)?t:t+""};var Oe,Le,je=c.document,xe=H(je)&&H(je.createElement);Le=function(e){return xe?je.createElement(e):{}},Oe=!l&&!d((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var Pe,Me,Te=Object.getOwnPropertyDescriptor,qe=s=l?Te:function(e,t){if(e=_(e),t=I(t),Oe)try{return Te(e,t)}catch(e){}if(he(e,t))return b(!h(f,e,t),e[t])},Ie={};Me=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Re,He=c.String,Ne=c.TypeError;Re=function(e){if(H(e))return e;throw Ne(He(e)+" is not an object")};var Fe=c.TypeError,Ae=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor;Ie=l?function(e,t,n){return Pe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var De,Ge,Ue=Pe=l?Me?function(e,t,n){if(Re(e),t=I(t),Re(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ce(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ae(e,t,n)}:Ae:function(e,t,n){if(Re(e),t=I(t),Re(n),Oe)try{return Ae(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Fe("Accessors not supported");return"value"in n&&(e[t]=n.value),e},We=Function.prototype,ze=l&&Object.getOwnPropertyDescriptor,Ye=he(We,"name"),Be={EXISTS:Ye,PROPER:Ye&&"something"===function(){}.name,CONFIGURABLE:Ye&&(!l||l&&ze(We,"name").configurable)}.CONFIGURABLE,Je={},Qe=E(Function.toString);N(ue.inspectSource)||(ue.inspectSource=function(e){return Qe(e)}),Je=ue.inspectSource;var Ve,Ke,Xe=c.WeakMap;Ke=N(Xe)&&/native code/.test(Je(Xe));var Ze,et=se("keys");Ze=function(e){return et[e]||(et[e]=ve(e))};var tt={};tt={};var nt,rt,it,at=c.TypeError,ot=c.WeakMap;if(Ke||ue.state){var st=ue.state||(ue.state=new ot),ct=E(st.get),ut=E(st.has),lt=E(st.set);nt=function(e,t){if(ut(st,e))throw new at("Object already initialized");return t.facade=e,lt(st,e,t),t},rt=function(e){return ct(st,e)||{}},it=function(e){return ut(st,e)}}else{var dt=Ze("state");tt[dt]=!0,nt=function(e,t){if(he(e,dt))throw new at("Object already initialized");return t.facade=e,Ie(e,dt,t),t},rt=function(e){return he(e,dt)?e[dt]:{}},it=function(e){return he(e,dt)}}var pt=(Ve={set:nt,get:rt,has:it,enforce:function(e){return it(e)?rt(e):nt(e,{})},getterFor:function(e){return function(t){var n;if(!H(t)||(n=rt(t)).type!==e)throw at("Incompatible receiver, "+e+" required");return n}}}).enforce,ht=Ve.get,ft=!d((function(){return 8!==Ue((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),vt=Ge=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!he(e,"name")||Be&&e.name!==t)&&Ue(e,"name",{value:t,configurable:!0}),ft&&n&&he(n,"arity")&&e.length!==n.arity&&Ue(e,"length",{value:n.arity});var r=pt(e);return he(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=vt((function(){return N(this)&&ht(this).source||Je(this)}),"toString"),De=function(e,t,n,r){var i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,o=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:t;return N(n)&&Ge(n,s,r),e===c?(a?e[t]=n:ce(t,n),e):(i?!o&&e[t]&&(a=!0):delete e[t],a?e[t]=n:Ie(e,t,n),e)};var yt,mt,bt,_t,wt,kt={},Et=Math.ceil,St=Math.floor;wt=function(e){var t=+e;return t!=t||0===t?0:(t>0?St:Et)(t)};var $t=Math.max,Ot=Math.min;_t=function(e,t){var n=wt(e);return n<0?$t(n+t,0):Ot(n,t)};var Lt,jt,xt=Math.min;jt=function(e){return e>0?xt(wt(e),9007199254740991):0},Lt=function(e){return jt(e.length)};var Pt=function(e){return function(t,n,r){var i,a=_(t),o=Lt(a),s=_t(r,o);if(e&&n!=n){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},Mt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,Tt=E([].push);bt=function(e,t){var n,r=_(e),i=0,a=[];for(n in r)!he(tt,n)&&he(r,n)&&Tt(a,n);for(;t.length>i;)he(r,n=t[i++])&&(~Mt(a,n)||Tt(a,n));return a};var qt,It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return bt(e,It)},qt=Object.getOwnPropertySymbols;var Rt=E([].concat);kt=F("Reflect","ownKeys")||function(e){var t=mt(Re(e));return qt?Rt(t,qt(e)):t},yt=function(e,t,n){for(var r=kt(t),i=Pe,a=s,o=0;o<r.length;o++){var c=r[o];he(e,c)||n&&he(n,c)||i(e,c,a(t,c))}};var Ht={},Nt=/#|\.prototype\./,Ft=function(e,t){var n=Ct[At(e)];return n==Gt||n!=Dt&&(N(t)?d(t):!!t)},At=Ft.normalize=function(e){return String(e).replace(Nt,".").toLowerCase()},Ct=Ft.data={},Dt=Ft.NATIVE="N",Gt=Ft.POLYFILL="P";Ht=Ft,o=function(e,t){var n,r,i,a,o,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(a=t[r],i=e.noTargetGet?(o=qe(n,r))&&o.value:n[r],!Ht(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;yt(a,i)}(e.sham||i&&i.sham)&&Ie(a,"sham",!0),De(n,r,a,e)}};var Ut,Wt={},zt=Function.prototype,Yt=zt.apply,Bt=zt.call;Wt="object"==typeof Reflect&&Reflect.apply||(p?Bt.bind(Yt):function(){return Bt.apply(Yt,arguments)});var Jt,Qt=E(E.bind);Jt=function(e,t){return ee(e),void 0===t?e:p?Qt(e,t):function(){return e.apply(t,arguments)}};var Vt={};Vt=F("document","documentElement");var Kt={};Kt=E([].slice);var Xt,Zt=c.TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var tn;tn="process"==w(c.process);var nn,rn,an,on,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,dn=c.Function,pn=c.MessageChannel,hn=c.String,fn=0,gn={};try{nn=c.location}catch(e){}var vn=function(e){if(he(gn,e)){var t=gn[e];delete gn[e],t()}},yn=function(e){return function(){vn(e)}},mn=function(e){vn(e.data)},bn=function(e){c.postMessage(hn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=N(e)?e:dn(e),n=Kt(arguments,1);return gn[++fn]=function(){Wt(t,void 0,n)},rn(fn),fn},cn=function(e){delete gn[e]},tn?rn=function(e){un.nextTick(yn(e))}:ln&&ln.now?rn=function(e){ln.now(yn(e))}:pn&&!en?(on=(an=new pn).port2,an.port1.onmessage=mn,rn=Jt(on.postMessage,on)):c.addEventListener&&N(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!d(bn)?(rn=bn,c.addEventListener("message",mn,!1)):rn="onreadystatechange"in Le("script")?function(e){Vt.appendChild(Le("script")).onreadystatechange=function(){Vt.removeChild(this),vn(e)}}:function(e){setTimeout(yn(e),0)});var _n=(Ut={set:sn,clear:cn}).clear;o({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==_n},{clearImmediate:_n});var wn=Ut.set;o({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});const kn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e,{method:"GET"}),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]);if(!i.ok)throw new Error(`Some server problem - ${i.statusText}`);return await i.json()}catch(e){throw e}var n},En={recipe:{},search:{query:"",searchResults:[],page:1,resultsPerPage:10,initSearchResults:[]},bookmarks:[]},Sn=function(e){return{id:e.data.recipe.id,title:e.data.recipe.title,publisher:e.data.recipe.publisher,sourceUrl:e.data.recipe.source_url,ingredients:e.data.recipe.ingredients,image:e.data.recipe.image_url,cooking_time:e.data.recipe.cooking_time,servings:e.data.recipe.servings,...e.data.recipe.key&&{key:e.data.recipe.key}}},$n=function(e=En.search.page){En.search.page=e;const t=(e-1)*En.search.resultsPerPage,n=e*En.search.resultsPerPage;return En.search.searchResults.slice(t,n)},On=function(){localStorage.setItem("bookmarks",JSON.stringify(En.bookmarks))},Ln=function(e){En.bookmarks.push(e),e.id===En.recipe.id&&(En.recipe.bookmarked=!0),On()};!function(){const e=localStorage.getItem("bookmarks")||[];e.length&&(En.bookmarks=JSON.parse(e))}();var jn;jn=new URL(a("27Lyk").resolve("hfd23"),import.meta.url).toString();class xn{_data;_icons=n(jn);render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}_clear(e=this._parentElement){e.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${this._icons}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Pn;function Mn(e,t,n,r,i){const a=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&a.push(t);let o=0,s=1,c=e,u=t;for(;o<=a.length;)c%a[o]==0&&u%a[o]==0?(s*=a[o],c/=a[o],u/=a[o]):o++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(u,c,n,r)}Pn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,a=r[0];if("0"==i&&"0"!==a)return a;if("0"==i&&"0"==a)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==a)return`${a} 99/100`;if("99"==i&&"0"==a)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return a;let o=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(o&&i.length>2){let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const a=!0,o=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,o),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,o));return Mn(l,(u-1)*s,r,i,a)}(i,n,e,a,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),a=Math.pow(10,e.length);return Mn(i,a,t,n,r)}(i,a,t)};var Tn=new class extends xn{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="";searchedRecipe="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerChangeServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");if(!n)return;const{changeto:r}=n.dataset;+r>0&&+r<=10&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`            \n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title} class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-clock"></use>\n          </svg>\n          <span>${this._data.cooking_time}</span>\n        </div>\n        <div class="recipe__info">          \n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--decrease-servings" data-changeTo="${this._data.servings-1}">\n              <svg>\n                <use href="${this._icons}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings" data-changeTo="${this._data.servings+1}">\n              <svg>\n                <use href="${this._icons}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${this._icons}#icon-user"></use>\n          </svg>         \n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${this._icons}#icon-bookmark${!0===this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}          \n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${this._icons}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>   \n    `}_generateMarkupIngredient=function(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${this._icons}#icon-check"></use>\n        </svg>\n        <div class="recipe__description">   \n          <span class="recipe__quantity">\n            ${+e.quantity&&" "!==e.quantity?n(Pn)(+e.quantity):""}\n          </span>\n          <span class="recipe__unit">\n            ${e.unit||""}\n          </span>               \n          ${e.description}\n        </div>\n      </li>\n    `}};var qn=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var In=new class extends xn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title} ...</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n          </div>\n          <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${this._icons}#icon-user"></use>\n            </svg>         \n          </div>\n        </a>\n      </li>\n    `}};var Rn=new class extends xn{_sortingInputs=document.querySelector(".sorting__inputs");_parentElement=document.querySelector(".results");_errorMessage="Sorry, there no results for seeking words";_message="";_generateMarkup(){return this._data.map((e=>In.render(e,!1))).join("")}addHandlerSort(e){this._sortingInputs.addEventListener("change",(function(t){t.target.closest(".sorting_button")&&e(t.target.value)}))}};var Hn=new class extends xn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No booknarks yet. Find a recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>In.render(e,!1))).join("")}};var Nn=new class extends xn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n||n.classList.contains("pagination__page"))return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=Math.ceil(this._data.searchResults.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`    \n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}/${e}</span>\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:this._data.page===e&&e>1?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}//${e}</span>\n        </button>\n      `:this._data.page<e?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}//${e}</span>\n        </button>\n        <button class="btn--inline pagination__page">          \n          <span>${this._data.page}</span>\n        </button>\n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}//${e}</span>\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}};var Fn=new class extends xn{constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow(),this.showIngredients()}_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_buttonOpen=document.querySelector(".nav__btn--add-recipe");_buttonClose=document.querySelector(".btn--close-modal");_message="You successfully uploaded your recipe";toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._buttonOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._buttonClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}showIngredients(){const e=`\n      <div class="upload__exact-ingredient">          \n      <label for="ingredient-1--product">Product</label>\n      <input\n        value=""\n        type="text"\n        name="ingredient-1--product"\n        id="ingredient-1--product"\n        placeholder="Ingredient of the meal"\n      />   \n      <label for="ingredient-1--quantity">Quantity (in any units)</label>        \n        <input\n          value="1"\n          type="number"\n          required\n          name="ingredient-1--quantity"\n          id="ingredient-1--quantity"\n          min="1"\n          max="10000"\n        />\n      <label for="ingredient-1--unit">Unit</label>\n        <input\n          value=""\n          type="text"\n          name="ingredient-1--unit"\n          id="ingredient-1--unit"\n          placeholder="lb, oz, kg..."\n        />     \n      </div>\n      <div class="ingredients_buttons">\n        <button class="btn--tiny add-product">\n          <svg>\n            <use href="${this._icons}#icon-plus-circle"></use>\n          </svg>\n          Add product\n        </button>    \n        <button class="btn--tiny delete-product">\n          <svg>\n            <use href="${this._icons}#icon-minus-circle"></use>\n          </svg>\n          Delete product\n        </button>            \n      </div>    \n    `;document.querySelector(".upload-ingredients").insertAdjacentHTML("beforeend",e)}addProduct(){}};new class extends xn{_parentElement=document.querySelector(".upload-ingredients");_generateMarkup(){return'\n      <div class="upload__exact-ingredient">          \n      <label for="ingredient-1--product">Product</label>\n      <input\n        value=""\n        type="text"\n        name="ingredient-1--product"\n        id="ingredient-1--product"\n        placeholder="Ingredient of the meal"\n      />   \n      <label for="ingredient-1--quantity">Quantity (in any units)</label>        \n        <input\n          value="1"\n          type="number"\n          required\n          name="ingredient-1--quantity"\n          id="ingredient-1--quantity"\n          min="1"\n          max="10000"\n        />\n      <label for="ingredient-1--unit">Unit</label>\n        <input\n          value=""\n          type="text"\n          name="ingredient-1--unit"\n          id="ingredient-1--unit"\n          placeholder="lb, oz, kg..."\n        />     \n      </div>\n      <div>\n        <button class="btn--tiny add-product">\n          <svg>\n            <use href="./img/icons.svg#icon-plus-circle"></use>\n          </svg>\n          Add product\n        </button>                \n      </div>    \n    '}};var An=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),o=new j(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=$(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function $(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,o,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new S(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=An}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=An:Function("r","regeneratorRuntime = r")(An)}const Cn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Tn.renderSpinner(),Rn.update($n()),await async function(e){try{const t=await kn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=027304e4-069e-4a19-91b9-589aa36ef008`),n=Sn(t);En.bookmarks.some((e=>e.id===n.id))?n.bookmarked=!0:n.bookmarked=!1,En.recipe=n}catch(e){throw console.log(e),e}}(e),Tn.render(En.recipe),Hn.update(En.bookmarks)}catch(e){console.error(e),Tn.renderError()}},Dn=async function(){try{const e=qn.getQuery();e&&""!==e?(Rn.renderSpinner(),await async function(e){try{En.search.query=e,En.search.page=1;const t=await kn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${En.search.query}&key=027304e4-069e-4a19-91b9-589aa36ef008`);En.search.searchResults=En.search.initSearchResults=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,cookingTime:e.cooking_time,...e.key&&{key:e.key}})))}catch(e){throw console.log(e),e}}(e),Rn.render($n()),Nn.render(En.search)):Rn.renderError("You did not write any seeking word")}catch(e){console.log(e)}},Gn=function(e){Rn.render($n(e)),Nn.render(En.search)},Un=function(e){var t;t=e,En.recipe.ingredients.forEach((e=>{+e.quantity&&(e.quantity=(+e.quantity/En.recipe.servings*t).toFixed(1))})),En.recipe.servings=t,Tn.update(En.recipe)},Wn=function(){var e;En.recipe.bookmarked?(e=En.recipe.id,En.bookmarks.splice(En.bookmarks.findIndex((t=>t.id===e)),1),e===En.recipe.id&&(En.recipe.bookmarked=!1),On()):Ln(En.recipe),Tn.update(En.recipe),Hn.render(En.bookmarks)},zn=function(){Hn.render(En.bookmarks)},Yn=async function(e){try{Fn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].includes("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Encorrect format of engredient's input - input in order quantity, unit, description separated with commas");if(isNaN(+t[0]))throw new Error("Encorrect format of engredient's input - input quantity in numbers");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,ingredients:t,cooking_time:+e.cookingTime,image_url:e.image,servings:+e.servings,key:"027304e4-069e-4a19-91b9-589aa36ef008"},r=await kn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=027304e4-069e-4a19-91b9-589aa36ef008",n);if("success"!==r.status)throw new Error("Sorry, something got wrong");En.recipe=Sn(r),Ln(En.recipe)}catch(e){throw e}}(e),Tn.render(En.recipe),Fn.renderMessage(),Hn.render(En.bookmarks),window.history.pushState(null,"",`#${En.recipe.id}`),setTimeout((function(){Fn.toggleWindow()}),1500)}catch(e){console.error(e),Fn.renderError(e.message)}},Bn=function(e){!function(e,t){const n=[...e];"none"===t&&(En.search.searchResults=En.search.initSearchResults),"time"===t&&(En.search.searchResults=En.search.initSearchResults),"name"===t&&(n.sort(((e,t)=>{const n=e.title.toLowerCase(),r=t.title.toLowerCase();return n<r?-1:n>r?1:0})),En.search.searchResults=n)}(En.search.searchResults,e),Rn.render(En.search.searchResults),Rn.render($n(1)),Nn.render(En.search)};Tn.addHandlerRender(Cn),qn.addHandlerSearch(Dn),Nn.addHandlerClick(Gn),Tn.addHandlerChangeServings(Un),Tn.addHandlerAddBookmark(Wn),Hn.addHandlerRender(zn),Fn.addHandlerUpload(Yn),Rn.addHandlerSort(Bn);
//# sourceMappingURL=index.35da54dc.js.map