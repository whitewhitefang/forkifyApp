function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire3a11=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.0556319c.js","hfd23":"icons.c14567a0.svg"}'));var o,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var d,g=Function.prototype.call;h=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);d=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=p&&O.bind(j,j),x=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),$=E("".slice);w=function(e){return $(x(e),8,-1)};var P=c.Object,T=E("".split);k=f((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?T(e,""):P(e)}:P;var M,R=c.TypeError;M=function(e){if(null==e)throw R("Can't call method on "+e);return e},_=function(e){return k(M(e))};var A,H,I,q;q=function(e){return"function"==typeof e},I=function(e){return"object"==typeof e?null!==e:q(e)};var F,C={},N=function(e){return q(e)?e:void 0};F=function(e,t){return arguments.length<2?N(c[e]):c[e]&&c[e][t]};var D={};D=E({}.isPrototypeOf);var G,z,U,B={};B=F("navigator","userAgent")||"";var V,Y,Q=c.process,W=c.Deno,J=Q&&Q.versions||W&&W.version,K=J&&J.v8;K&&(Y=(V=K.split("."))[0]>0&&V[0]<4?1:+(V[0]+V[1])),!Y&&B&&(!(V=B.match(/Edge\/(\d+)/))||V[1]>=74)&&(V=B.match(/Chrome\/(\d+)/))&&(Y=+V[1]),U=Y,z=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),G=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;C=G?function(e){return"symbol"==typeof e}:function(e){var t=F("Symbol");return q(t)&&D(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(q(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,ae=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&q(n=e.toString)&&!I(r=h(n,e)))return r;if(q(n=e.valueOf)&&!I(r=h(n,e)))return r;if("string"!==t&&q(n=e.toString)&&!I(r=h(n,e)))return r;throw ae("Can't convert object to primitive value")};var oe,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var fe=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=fe,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},de=c.Object;pe=function(e){return de(M(e))};var ge=E({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ge(pe(e),t)};var ve,ye=0,me=Math.random(),be=E(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+me,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=G?we:we&&we.withoutSetter||ve;oe=function(e){if(!he(_e,e)||!z&&"string"!=typeof _e[e]){var t="Symbol."+e;z&&he(we,e)?_e[e]=we[e]:_e[e]=G&&ke?ke(t):Ee(t)}return _e[e]};var Se=c.TypeError,Oe=oe("toPrimitive");H=function(e,t){if(!I(e)||C(e))return e;var n,r=Z(e,Oe);if(r){if(void 0===t&&(t="default"),n=h(r,e,t),!I(n)||C(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},A=function(e){var t=H(e,"string");return C(t)?t:t+""};var je,Le,xe=c.document,$e=I(xe)&&I(xe.createElement);Le=function(e){return $e?xe.createElement(e):{}},je=!l&&!f((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var Pe,Te,Me=Object.getOwnPropertyDescriptor,Re=s=l?Me:function(e,t){if(e=_(e),t=A(t),je)try{return Me(e,t)}catch(e){}if(he(e,t))return b(!h(d,e,t),e[t])},Ae={};Te=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var He,Ie=c.String,qe=c.TypeError;He=function(e){if(I(e))return e;throw qe(Ie(e)+" is not an object")};var Fe=c.TypeError,Ce=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor;Ae=l?function(e,t,n){return Pe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var De,Ge,ze=Pe=l?Te?function(e,t,n){if(He(e),t=A(t),He(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ne(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(He(e),t=A(t),He(n),je)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Fe("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ue=Function.prototype,Be=l&&Object.getOwnPropertyDescriptor,Ve=he(Ue,"name"),Ye={EXISTS:Ve,PROPER:Ve&&"something"===function(){}.name,CONFIGURABLE:Ve&&(!l||l&&Be(Ue,"name").configurable)}.CONFIGURABLE,Qe={},We=E(Function.toString);q(ue.inspectSource)||(ue.inspectSource=function(e){return We(e)}),Qe=ue.inspectSource;var Je,Ke,Xe=c.WeakMap;Ke=q(Xe)&&/native code/.test(Qe(Xe));var Ze,et=se("keys");Ze=function(e){return et[e]||(et[e]=ve(e))};var tt={};tt={};var nt,rt,it,at=c.TypeError,ot=c.WeakMap;if(Ke||ue.state){var st=ue.state||(ue.state=new ot),ct=E(st.get),ut=E(st.has),lt=E(st.set);nt=function(e,t){if(ut(st,e))throw new at("Object already initialized");return t.facade=e,lt(st,e,t),t},rt=function(e){return ct(st,e)||{}},it=function(e){return ut(st,e)}}else{var ft=Ze("state");tt[ft]=!0,nt=function(e,t){if(he(e,ft))throw new at("Object already initialized");return t.facade=e,Ae(e,ft,t),t},rt=function(e){return he(e,ft)?e[ft]:{}},it=function(e){return he(e,ft)}}var pt=(Je={set:nt,get:rt,has:it,enforce:function(e){return it(e)?rt(e):nt(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=rt(t)).type!==e)throw at("Incompatible receiver, "+e+" required");return n}}}).enforce,ht=Je.get,dt=!f((function(){return 8!==ze((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),vt=Ge=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!he(e,"name")||Ye&&e.name!==t)&&ze(e,"name",{value:t,configurable:!0}),dt&&n&&he(n,"arity")&&e.length!==n.arity&&ze(e,"length",{value:n.arity});var r=pt(e);return he(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=vt((function(){return q(this)&&ht(this).source||Qe(this)}),"toString"),De=function(e,t,n,r){var i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,o=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:t;return q(n)&&Ge(n,s,r),e===c?(a?e[t]=n:ce(t,n),e):(i?!o&&e[t]&&(a=!0):delete e[t],a?e[t]=n:Ae(e,t,n),e)};var yt,mt,bt,_t,wt,kt={},Et=Math.ceil,St=Math.floor;wt=function(e){var t=+e;return t!=t||0===t?0:(t>0?St:Et)(t)};var Ot=Math.max,jt=Math.min;_t=function(e,t){var n=wt(e);return n<0?Ot(n+t,0):jt(n,t)};var Lt,xt,$t=Math.min;xt=function(e){return e>0?$t(wt(e),9007199254740991):0},Lt=function(e){return xt(e.length)};var Pt=function(e){return function(t,n,r){var i,a=_(t),o=Lt(a),s=_t(r,o);if(e&&n!=n){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},Tt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,Mt=E([].push);bt=function(e,t){var n,r=_(e),i=0,a=[];for(n in r)!he(tt,n)&&he(r,n)&&Mt(a,n);for(;t.length>i;)he(r,n=t[i++])&&(~Tt(a,n)||Mt(a,n));return a};var Rt,At=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return bt(e,At)},Rt=Object.getOwnPropertySymbols;var Ht=E([].concat);kt=F("Reflect","ownKeys")||function(e){var t=mt(He(e));return Rt?Ht(t,Rt(e)):t},yt=function(e,t,n){for(var r=kt(t),i=Pe,a=s,o=0;o<r.length;o++){var c=r[o];he(e,c)||n&&he(n,c)||i(e,c,a(t,c))}};var It={},qt=/#|\.prototype\./,Ft=function(e,t){var n=Nt[Ct(e)];return n==Gt||n!=Dt&&(q(t)?f(t):!!t)},Ct=Ft.normalize=function(e){return String(e).replace(qt,".").toLowerCase()},Nt=Ft.data={},Dt=Ft.NATIVE="N",Gt=Ft.POLYFILL="P";It=Ft,o=function(e,t){var n,r,i,a,o,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(a=t[r],i=e.noTargetGet?(o=Re(n,r))&&o.value:n[r],!It(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;yt(a,i)}(e.sham||i&&i.sham)&&Ae(a,"sham",!0),De(n,r,a,e)}};var zt,Ut={},Bt=Function.prototype,Vt=Bt.apply,Yt=Bt.call;Ut="object"==typeof Reflect&&Reflect.apply||(p?Yt.bind(Vt):function(){return Yt.apply(Vt,arguments)});var Qt,Wt=E(E.bind);Qt=function(e,t){return ee(e),void 0===t?e:p?Wt(e,t):function(){return e.apply(t,arguments)}};var Jt={};Jt=F("document","documentElement");var Kt={};Kt=E([].slice);var Xt,Zt=c.TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(B);var tn;tn="process"==w(c.process);var nn,rn,an,on,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,fn=c.Function,pn=c.MessageChannel,hn=c.String,dn=0,gn={};try{nn=c.location}catch(e){}var vn=function(e){if(he(gn,e)){var t=gn[e];delete gn[e],t()}},yn=function(e){return function(){vn(e)}},mn=function(e){vn(e.data)},bn=function(e){c.postMessage(hn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=q(e)?e:fn(e),n=Kt(arguments,1);return gn[++dn]=function(){Ut(t,void 0,n)},rn(dn),dn},cn=function(e){delete gn[e]},tn?rn=function(e){un.nextTick(yn(e))}:ln&&ln.now?rn=function(e){ln.now(yn(e))}:pn&&!en?(on=(an=new pn).port2,an.port1.onmessage=mn,rn=Qt(on.postMessage,on)):c.addEventListener&&q(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!f(bn)?(rn=bn,c.addEventListener("message",mn,!1)):rn="onreadystatechange"in Le("script")?function(e){Jt.appendChild(Le("script")).onreadystatechange=function(){Jt.removeChild(this),vn(e)}}:function(e){setTimeout(yn(e),0)});var _n=(zt={set:sn,clear:cn}).clear;o({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==_n},{clearImmediate:_n});var wn=zt.set;o({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});const kn=async function(e){try{const n=fetch(e,{method:"GET"}),r=await Promise.race([n,(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]);if(!r.ok)throw new Error(`Some server problem - ${r.statusText}`);return await r.json()}catch(e){throw e}var t},En={recipe:{},search:{query:"",searchResults:[],page:1,resultsPerPage:10},bookmarks:[]},Sn=function(e=En.search.page){En.search.page=e;const t=(e-1)*En.search.resultsPerPage,n=e*En.search.resultsPerPage;return En.search.searchResults.slice(t,n)};var On;On=new URL(a("27Lyk").resolve("hfd23"),import.meta.url).toString();class jn{_data;_icons=n(On);render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}_clear(e=this._parentElement){e.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${this._icons}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Ln=new class extends jn{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="";searchedRecipe="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerChangeServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");if(!n)return;const{changeto:r}=n.dataset;+r>0&&+r<=10&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}addHandlerDeleteBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&!0===this._data.bookmarked&&e()}))}_generateMarkup(){return`            \n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title} class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-clock"></use>\n          </svg>\n          <span>${this._data.cooking_time}</span>\n        </div>\n        <div class="recipe__info">          \n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--decrease-servings" data-changeTo="${this._data.servings-1}">\n              <svg>\n                <use href="${this._icons}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings" data-changeTo="${this._data.servings+1}">\n              <svg>\n                <use href="${this._icons}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated">\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${this._icons}#icon-bookmark${!0===this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}          \n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${this._icons}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>   \n    `}_generateMarkupIngredient=function(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${this._icons}#icon-check"></use>\n        </svg>\n        <div class="recipe__description">   \n          <span class="recipe__quantity">\n            ${e.quantity||""}\n          </span>\n          <span class="recipe__unit">\n            ${e.unit||""}\n          </span>               \n          ${e.description}\n        </div>\n      </li>\n    `}};var xn=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var $n=new class extends jn{_parentElement=document.querySelector(".results");_errorMessage="Sorry, there no results for seeking words";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){const t=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">\n          <figure class="preview__fig">\n            <img src="${e.image}" alt="${e.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${e.title} ...</h4>\n            <p class="preview__publisher">${e.publisher}</p>\n          </div>\n        </a>\n      </li>\n    `}};var Pn=new class extends jn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=Math.ceil(this._data.searchResults.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`    \n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}</span>\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:this._data.page===e&&e>1?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}</span>\n        </button>\n      `:this._data.page<e?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}</span>\n        </button>\n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}</span>\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}},Tn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),o=new x(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=O(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,o,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new S(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Tn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Tn:Function("r","regeneratorRuntime = r")(Tn)}const Mn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Ln.renderSpinner(),$n.update(Sn()),await async function(e){try{const t=await kn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`),n={id:t.data.recipe.id,title:t.data.recipe.title,publisher:t.data.recipe.publisher,sourceUrl:t.data.recipe.source_url,ingredients:t.data.recipe.ingredients,image:t.data.recipe.image_url,cooking_time:t.data.recipe.cooking_time,servings:t.data.recipe.servings};En.bookmarks.some((e=>e.id===n.id))?n.bookmarked=!0:n.bookmarked=!1,En.recipe=n}catch(e){throw console.log(e),e}}(e),Ln.render(En.recipe)}catch(e){console.log(e),Ln.renderError()}},Rn=async function(){try{$n.renderSpinner();const e=xn.getQuery();if(!e)return;await async function(e){try{En.search.query=e,En.search.page=1;const t=await kn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${En.search.query}&key=bbf0d284-67d7-4fa7-8dd1-f1ad05616ac7`);En.search.searchResults=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})))}catch(e){throw console.log(e),e}}(e),$n.render(Sn()),Pn.render(En.search)}catch(e){console.log(e)}},An=function(e){$n.render(Sn(e)),Pn.render(En.search)},Hn=function(e){var t;t=e,En.recipe.ingredients.forEach((e=>{e.quantity=e.quantity/En.recipe.servings*t})),En.recipe.servings=t,Ln.update(En.recipe)},In=function(){var e;e=En.recipe,En.bookmarks.push(e),e.id!==En.recipe.id||En.recipe.bookmarked||(En.recipe.bookmarked=!0),Ln.update(En.recipe)},qn=function(){var e;e=En.recipe,En.recipe.bookmarked=!1,En.bookmarks.splice(e.indexOf(),1),Ln.update(En.recipe)};Ln.addHandlerRender(Mn),xn.addHandlerSearch(Rn),Pn.addHandlerClick(An),Ln.addHandlerChangeServings(Hn),Ln.addHandlerAddBookmark(In),Ln.addHandlerDeleteBookmark(qn);
//# sourceMappingURL=index.0556319c.js.map
