function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire3a11=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.831e4925.js","hfd23":"icons.c14567a0.svg"}'));var o,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var d,g=Function.prototype.call;h=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);d=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var _;_=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var b,w,E={},S={},O=Function.prototype,j=O.bind,k=O.call,L=p&&j.bind(k,k),P=(S=p?function(e){return e&&L(e)}:function(e){return e&&function(){return k.apply(e,arguments)}})({}.toString),$=S("".slice);w=function(e){return $(P(e),8,-1)};var x=c.Object,T=S("".split);E=f((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?T(e,""):x(e)}:x;var M,R=c.TypeError;M=function(e){if(null==e)throw R("Can't call method on "+e);return e},b=function(e){return E(M(e))};var I,F,H,N;N=function(e){return"function"==typeof e},H=function(e){return"object"==typeof e?null!==e:N(e)};var q,C={},A=function(e){return N(e)?e:void 0};q=function(e,t){return arguments.length<2?A(c[e]):c[e]&&c[e][t]};var G={};G=S({}.isPrototypeOf);var D,z,U,Y={};Y=q("navigator","userAgent")||"";var B,Q,V=c.process,W=c.Deno,J=V&&V.versions||W&&W.version,K=J&&J.v8;K&&(Q=(B=K.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!Q&&Y&&(!(B=Y.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=Y.match(/Chrome\/(\d+)/))&&(Q=+B[1]),U=Q,z=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),D=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;C=D?function(e){return"symbol"==typeof e}:function(e){var t=q("Symbol");return N(t)&&G(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(N(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,ae=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&N(n=e.toString)&&!H(r=h(n,e)))return r;if(N(n=e.valueOf)&&!H(r=h(n,e)))return r;if("string"!==t&&N(n=e.toString)&&!H(r=h(n,e)))return r;throw ae("Can't convert object to primitive value")};var oe,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var fe=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=fe,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},de=c.Object;pe=function(e){return de(M(e))};var ge=S({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ge(pe(e),t)};var ve,ye=0,me=Math.random(),_e=S(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+_e(++ye+me,36)};var be=se("wks"),we=c.Symbol,Ee=we&&we.for,Se=D?we:we&&we.withoutSetter||ve;oe=function(e){if(!he(be,e)||!z&&"string"!=typeof be[e]){var t="Symbol."+e;z&&he(we,e)?be[e]=we[e]:be[e]=D&&Ee?Ee(t):Se(t)}return be[e]};var Oe=c.TypeError,je=oe("toPrimitive");F=function(e,t){if(!H(e)||C(e))return e;var n,r=Z(e,je);if(r){if(void 0===t&&(t="default"),n=h(r,e,t),!H(n)||C(n))return n;throw Oe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},I=function(e){var t=F(e,"string");return C(t)?t:t+""};var ke,Le,Pe=c.document,$e=H(Pe)&&H(Pe.createElement);Le=function(e){return $e?Pe.createElement(e):{}},ke=!l&&!f((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var xe,Te,Me=Object.getOwnPropertyDescriptor,Re=s=l?Me:function(e,t){if(e=b(e),t=I(t),ke)try{return Me(e,t)}catch(e){}if(he(e,t))return _(!h(d,e,t),e[t])},Ie={};Te=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Fe,He=c.String,Ne=c.TypeError;Fe=function(e){if(H(e))return e;throw Ne(He(e)+" is not an object")};var qe=c.TypeError,Ce=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor;Ie=l?function(e,t,n){return xe(e,t,_(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,De,ze=xe=l?Te?function(e,t,n){if(Fe(e),t=I(t),Fe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ae(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(Fe(e),t=I(t),Fe(n),ke)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw qe("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ue=Function.prototype,Ye=l&&Object.getOwnPropertyDescriptor,Be=he(Ue,"name"),Qe={EXISTS:Be,PROPER:Be&&"something"===function(){}.name,CONFIGURABLE:Be&&(!l||l&&Ye(Ue,"name").configurable)}.CONFIGURABLE,Ve={},We=S(Function.toString);N(ue.inspectSource)||(ue.inspectSource=function(e){return We(e)}),Ve=ue.inspectSource;var Je,Ke,Xe=c.WeakMap;Ke=N(Xe)&&/native code/.test(Ve(Xe));var Ze,et=se("keys");Ze=function(e){return et[e]||(et[e]=ve(e))};var tt={};tt={};var nt,rt,it,at=c.TypeError,ot=c.WeakMap;if(Ke||ue.state){var st=ue.state||(ue.state=new ot),ct=S(st.get),ut=S(st.has),lt=S(st.set);nt=function(e,t){if(ut(st,e))throw new at("Object already initialized");return t.facade=e,lt(st,e,t),t},rt=function(e){return ct(st,e)||{}},it=function(e){return ut(st,e)}}else{var ft=Ze("state");tt[ft]=!0,nt=function(e,t){if(he(e,ft))throw new at("Object already initialized");return t.facade=e,Ie(e,ft,t),t},rt=function(e){return he(e,ft)?e[ft]:{}},it=function(e){return he(e,ft)}}var pt=(Je={set:nt,get:rt,has:it,enforce:function(e){return it(e)?rt(e):nt(e,{})},getterFor:function(e){return function(t){var n;if(!H(t)||(n=rt(t)).type!==e)throw at("Incompatible receiver, "+e+" required");return n}}}).enforce,ht=Je.get,dt=!f((function(){return 8!==ze((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),vt=De=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!he(e,"name")||Qe&&e.name!==t)&&ze(e,"name",{value:t,configurable:!0}),dt&&n&&he(n,"arity")&&e.length!==n.arity&&ze(e,"length",{value:n.arity});var r=pt(e);return he(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=vt((function(){return N(this)&&ht(this).source||Ve(this)}),"toString"),Ge=function(e,t,n,r){var i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,o=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:t;return N(n)&&De(n,s,r),e===c?(a?e[t]=n:ce(t,n),e):(i?!o&&e[t]&&(a=!0):delete e[t],a?e[t]=n:Ie(e,t,n),e)};var yt,mt,_t,bt,wt,Et={},St=Math.ceil,Ot=Math.floor;wt=function(e){var t=+e;return t!=t||0===t?0:(t>0?Ot:St)(t)};var jt=Math.max,kt=Math.min;bt=function(e,t){var n=wt(e);return n<0?jt(n+t,0):kt(n,t)};var Lt,Pt,$t=Math.min;Pt=function(e){return e>0?$t(wt(e),9007199254740991):0},Lt=function(e){return Pt(e.length)};var xt=function(e){return function(t,n,r){var i,a=b(t),o=Lt(a),s=bt(r,o);if(e&&n!=n){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},Tt={includes:xt(!0),indexOf:xt(!1)}.indexOf,Mt=S([].push);_t=function(e,t){var n,r=b(e),i=0,a=[];for(n in r)!he(tt,n)&&he(r,n)&&Mt(a,n);for(;t.length>i;)he(r,n=t[i++])&&(~Tt(a,n)||Mt(a,n));return a};var Rt,It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return _t(e,It)},Rt=Object.getOwnPropertySymbols;var Ft=S([].concat);Et=q("Reflect","ownKeys")||function(e){var t=mt(Fe(e));return Rt?Ft(t,Rt(e)):t},yt=function(e,t,n){for(var r=Et(t),i=xe,a=s,o=0;o<r.length;o++){var c=r[o];he(e,c)||n&&he(n,c)||i(e,c,a(t,c))}};var Ht={},Nt=/#|\.prototype\./,qt=function(e,t){var n=At[Ct(e)];return n==Dt||n!=Gt&&(N(t)?f(t):!!t)},Ct=qt.normalize=function(e){return String(e).replace(Nt,".").toLowerCase()},At=qt.data={},Gt=qt.NATIVE="N",Dt=qt.POLYFILL="P";Ht=qt,o=function(e,t){var n,r,i,a,o,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(a=t[r],i=e.noTargetGet?(o=Re(n,r))&&o.value:n[r],!Ht(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;yt(a,i)}(e.sham||i&&i.sham)&&Ie(a,"sham",!0),Ge(n,r,a,e)}};var zt,Ut={},Yt=Function.prototype,Bt=Yt.apply,Qt=Yt.call;Ut="object"==typeof Reflect&&Reflect.apply||(p?Qt.bind(Bt):function(){return Qt.apply(Bt,arguments)});var Vt,Wt=S(S.bind);Vt=function(e,t){return ee(e),void 0===t?e:p?Wt(e,t):function(){return e.apply(t,arguments)}};var Jt={};Jt=q("document","documentElement");var Kt={};Kt=S([].slice);var Xt,Zt=c.TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var tn;tn="process"==w(c.process);var nn,rn,an,on,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,fn=c.Function,pn=c.MessageChannel,hn=c.String,dn=0,gn={};try{nn=c.location}catch(e){}var vn=function(e){if(he(gn,e)){var t=gn[e];delete gn[e],t()}},yn=function(e){return function(){vn(e)}},mn=function(e){vn(e.data)},_n=function(e){c.postMessage(hn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=N(e)?e:fn(e),n=Kt(arguments,1);return gn[++dn]=function(){Ut(t,void 0,n)},rn(dn),dn},cn=function(e){delete gn[e]},tn?rn=function(e){un.nextTick(yn(e))}:ln&&ln.now?rn=function(e){ln.now(yn(e))}:pn&&!en?(on=(an=new pn).port2,an.port1.onmessage=mn,rn=Vt(on.postMessage,on)):c.addEventListener&&N(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!f(_n)?(rn=_n,c.addEventListener("message",mn,!1)):rn="onreadystatechange"in Le("script")?function(e){Jt.appendChild(Le("script")).onreadystatechange=function(){Jt.removeChild(this),vn(e)}}:function(e){setTimeout(yn(e),0)});var bn=(zt={set:sn,clear:cn}).clear;o({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==bn},{clearImmediate:bn});var wn=zt.set;o({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});const En=async function(e){try{const n=fetch(e,{method:"GET"}),r=await Promise.race([n,(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]);if(!r.ok)throw new Error(`Some server problem - ${r.statusText}`);return await r.json()}catch(e){throw e}var t},Sn={recipe:{},search:{query:"",searchResults:[],page:1,resultsPerPage:10}},On=function(e=Sn.search.page){Sn.search.page=e;const t=(e-1)*Sn.search.resultsPerPage,n=e*Sn.search.resultsPerPage;return Sn.search.searchResults.slice(t,n)};var jn;jn=new URL(a("27Lyk").resolve("hfd23"),import.meta.url).toString();class kn{_data;_icons=n(jn);render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(e=this._parentElement){e.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${this._icons}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Ln=new class extends kn{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="";searchedRecipe="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerChangeServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");if(!n)return;const{changeto:r}=n.dataset;+r>0&&+r<=10&&e(+r)}))}_generateMarkup(){return`            \n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title} class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-clock"></use>\n          </svg>\n          <span>${this._data.cooking_time}</span>\n        </div>\n        <div class="recipe__info">          \n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--decrease-servings" data-changeTo="${this._data.servings-1}">\n              <svg>\n                <use href="${this._icons}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings" data-changeTo="${this._data.servings+1}">\n              <svg>\n                <use href="${this._icons}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated">\n        </div>\n        <button class="btn--round">\n          <svg class="">\n            <use href="${this._icons}#icon-bookmark-fill"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}          \n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${this._icons}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>   \n    `}_generateMarkupIngredient=function(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${this._icons}#icon-check"></use>\n        </svg>\n        <div class="recipe__description">   \n          <span class="recipe__quantity">\n            ${e.quantity||""}\n          </span>\n          <span class="recipe__unit">\n            ${e.unit||""}\n          </span>               \n          ${e.description}\n        </div>\n      </li>\n    `}};var Pn=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var $n=new class extends kn{_parentElement=document.querySelector(".results");_errorMessage="Sorry, there no results for seeking words";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`\n      <li class="preview">\n        <a class="preview__link" href="#${e.id}">\n          <figure class="preview__fig">\n            <img src="${e.image}" alt="${e.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${e.title} ...</h4>\n            <p class="preview__publisher">${e.publisher}</p>\n          </div>\n        </a>\n      </li>\n    `}};var xn=new class extends kn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=Math.ceil(this._data.searchResults.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`    \n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}</span>\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:this._data.page===e&&e>1?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}</span>\n        </button>\n      `:this._data.page<e?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}</span>\n        </button>\n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}</span>\n          <svg class="search__icon">\n            <use href="${n(jn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}},Tn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),o=new P(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return x()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",g={};function v(){}function y(){}function m(){}var _={};c(_,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==n&&r.call(w,a)&&(_=w);var E=m.prototype=v.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function $(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=m,c(E,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),c(O.prototype,o,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new O(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(E),c(E,s,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Tn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Tn:Function("r","regeneratorRuntime = r")(Tn)}const Mn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Ln.renderSpinner(),await async function(e){try{const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`),n={id:t.data.recipe.id,title:t.data.recipe.title,publisher:t.data.recipe.publisher,sourceUrl:t.data.recipe.source_url,ingredients:t.data.recipe.ingredients,image:t.data.recipe.image_url,cooking_time:t.data.recipe.cooking_time,servings:t.data.recipe.servings};Sn.recipe=n}catch(e){throw console.log(e),e}}(e),Ln.render(Sn.recipe)}catch(e){console.log(e),Ln.renderError()}},Rn=async function(){try{$n.renderSpinner();const e=Pn.getQuery();if(!e)return;await async function(e){try{Sn.search.query=e;const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${Sn.search.query}&key=bbf0d284-67d7-4fa7-8dd1-f1ad05616ac7`);Sn.search.searchResults=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})))}catch(e){throw console.log(e),e}}(e),$n.render(On()),xn.render(Sn.search)}catch(e){console.log(e)}},In=function(e){$n.render(On(e)),xn.render(Sn.search)},Fn=function(e){var t;t=e,Sn.recipe.ingredients.forEach((e=>{e.quantity=e.quantity/Sn.recipe.servings*t})),Sn.recipe.servings=t,Ln.render(Sn.recipe)};Ln.addHandlerRender(Mn),Pn.addHandlerSearch(Rn),xn.addHandlerClick(In),Ln.addHandlerChangeServings(Fn);
//# sourceMappingURL=index.831e4925.js.map
