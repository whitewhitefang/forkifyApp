function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.1869e8a8.js","hfd23":"icons.c14567a0.svg"}'));var a,c,s={},u=function(e){return e&&e.Math==Math&&e};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);d=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,E={},S={},O=Function.prototype,j=O.bind,L=O.call,x=p&&j.bind(L,L),k=(S=p?function(e){return e&&x(e)}:function(e){return e&&function(){return L.apply(e,arguments)}})({}.toString),T=S("".slice);w=function(e){return T(k(e),8,-1)};var P=s.Object,M=S("".split);E=f((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):P(e)}:P;var $,I=s.TypeError;$=function(e){if(null==e)throw I("Can't call method on "+e);return e},_=function(e){return E($(e))};var R,F,N,H;H=function(e){return"function"==typeof e},N=function(e){return"object"==typeof e?null!==e:H(e)};var C,A={},G=function(e){return H(e)?e:void 0};C=function(e,t){return arguments.length<2?G(s[e]):s[e]&&s[e][t]};var q={};q=S({}.isPrototypeOf);var D,z,U,Y={};Y=C("navigator","userAgent")||"";var B,Q,V=s.process,W=s.Deno,J=V&&V.versions||W&&W.version,K=J&&J.v8;K&&(Q=(B=K.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!Q&&Y&&(!(B=Y.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=Y.match(/Chrome\/(\d+)/))&&(Q=+B[1]),U=Q,z=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&U&&U<41})),D=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=s.Object;A=D?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return H(t)&&q(t.prototype,X(e))};var Z,ee,te,re=s.String;te=function(e){try{return re(e)}catch(e){return"Object"}};var ne=s.TypeError;ee=function(e){if(H(e))return e;throw ne(te(e)+" is not a function")},Z=function(e,t){var r=e[t];return null==r?void 0:ee(r)};var ie,oe=s.TypeError;ie=function(e,t){var r,n;if("string"===t&&H(r=e.toString)&&!N(n=h(r,e)))return n;if(H(r=e.valueOf)&&!N(n=h(r,e)))return n;if("string"!==t&&H(r=e.toString)&&!N(n=h(r,e)))return n;throw oe("Can't convert object to primitive value")};var ae,ce;var se,ue={},le=Object.defineProperty;se=function(e,t){try{le(s,e,{value:t,configurable:!0,writable:!0})}catch(r){s[e]=t}return t};var fe=s["__core-js_shared__"]||se("__core-js_shared__",{});ue=fe,(ce=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},de=s.Object;pe=function(e){return de($(e))};var ve=S({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ve(pe(e),t)};var ge,ye=0,me=Math.random(),be=S(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+me,36)};var _e=ce("wks"),we=s.Symbol,Ee=we&&we.for,Se=D?we:we&&we.withoutSetter||ge;ae=function(e){if(!he(_e,e)||!z&&"string"!=typeof _e[e]){var t="Symbol."+e;z&&he(we,e)?_e[e]=we[e]:_e[e]=D&&Ee?Ee(t):Se(t)}return _e[e]};var Oe=s.TypeError,je=ae("toPrimitive");F=function(e,t){if(!N(e)||A(e))return e;var r,n=Z(e,je);if(n){if(void 0===t&&(t="default"),r=h(n,e,t),!N(r)||A(r))return r;throw Oe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},R=function(e){var t=F(e,"string");return A(t)?t:t+""};var Le,xe,ke=s.document,Te=N(ke)&&N(ke.createElement);xe=function(e){return Te?ke.createElement(e):{}},Le=!l&&!f((function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a}));var Pe,Me,$e=Object.getOwnPropertyDescriptor,Ie=c=l?$e:function(e,t){if(e=_(e),t=R(t),Le)try{return $e(e,t)}catch(e){}if(he(e,t))return b(!h(d,e,t),e[t])},Re={};Me=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Fe,Ne=s.String,He=s.TypeError;Fe=function(e){if(N(e))return e;throw He(Ne(e)+" is not an object")};var Ce=s.TypeError,Ae=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor;Re=l?function(e,t,r){return Pe(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var qe,De,ze=Pe=l?Me?function(e,t,r){if(Fe(e),t=R(t),Fe(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=Ge(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ae(e,t,r)}:Ae:function(e,t,r){if(Fe(e),t=R(t),Fe(r),Le)try{return Ae(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Ce("Accessors not supported");return"value"in r&&(e[t]=r.value),e},Ue=Function.prototype,Ye=l&&Object.getOwnPropertyDescriptor,Be=he(Ue,"name"),Qe={EXISTS:Be,PROPER:Be&&"something"===function(){}.name,CONFIGURABLE:Be&&(!l||l&&Ye(Ue,"name").configurable)}.CONFIGURABLE,Ve={},We=S(Function.toString);H(ue.inspectSource)||(ue.inspectSource=function(e){return We(e)}),Ve=ue.inspectSource;var Je,Ke,Xe=s.WeakMap;Ke=H(Xe)&&/native code/.test(Ve(Xe));var Ze,et=ce("keys");Ze=function(e){return et[e]||(et[e]=ge(e))};var tt={};tt={};var rt,nt,it,ot=s.TypeError,at=s.WeakMap;if(Ke||ue.state){var ct=ue.state||(ue.state=new at),st=S(ct.get),ut=S(ct.has),lt=S(ct.set);rt=function(e,t){if(ut(ct,e))throw new ot("Object already initialized");return t.facade=e,lt(ct,e,t),t},nt=function(e){return st(ct,e)||{}},it=function(e){return ut(ct,e)}}else{var ft=Ze("state");tt[ft]=!0,rt=function(e,t){if(he(e,ft))throw new ot("Object already initialized");return t.facade=e,Re(e,ft,t),t},nt=function(e){return he(e,ft)?e[ft]:{}},it=function(e){return he(e,ft)}}var pt=(Je={set:rt,get:nt,has:it,enforce:function(e){return it(e)?nt(e):rt(e,{})},getterFor:function(e){return function(t){var r;if(!N(t)||(r=nt(t)).type!==e)throw ot("Incompatible receiver, "+e+" required");return r}}}).enforce,ht=Je.get,dt=!f((function(){return 8!==ze((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),gt=De=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!he(e,"name")||Qe&&e.name!==t)&&ze(e,"name",{value:t,configurable:!0}),dt&&r&&he(r,"arity")&&e.length!==r.arity&&ze(e,"length",{value:r.arity});var n=pt(e);return he(n,"source")||(n.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return H(this)&&ht(this).source||Ve(this)}),"toString"),qe=function(e,t,r,n){var i=!!n&&!!n.unsafe,o=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:t;return H(r)&&De(r,c,n),e===s?(o?e[t]=r:se(t,r),e):(i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=r:Re(e,t,r),e)};var yt,mt,bt,_t,wt,Et={},St=Math.ceil,Ot=Math.floor;wt=function(e){var t=+e;return t!=t||0===t?0:(t>0?Ot:St)(t)};var jt=Math.max,Lt=Math.min;_t=function(e,t){var r=wt(e);return r<0?jt(r+t,0):Lt(r,t)};var xt,kt,Tt=Math.min;kt=function(e){return e>0?Tt(wt(e),9007199254740991):0},xt=function(e){return kt(e.length)};var Pt=function(e){return function(t,r,n){var i,o=_(t),a=xt(o),c=_t(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},Mt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,$t=S([].push);bt=function(e,t){var r,n=_(e),i=0,o=[];for(r in n)!he(tt,r)&&he(n,r)&&$t(o,r);for(;t.length>i;)he(n,r=t[i++])&&(~Mt(o,r)||$t(o,r));return o};var It,Rt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return bt(e,Rt)},It=Object.getOwnPropertySymbols;var Ft=S([].concat);Et=C("Reflect","ownKeys")||function(e){var t=mt(Fe(e));return It?Ft(t,It(e)):t},yt=function(e,t,r){for(var n=Et(t),i=Pe,o=c,a=0;a<n.length;a++){var s=n[a];he(e,s)||r&&he(r,s)||i(e,s,o(t,s))}};var Nt={},Ht=/#|\.prototype\./,Ct=function(e,t){var r=Gt[At(e)];return r==Dt||r!=qt&&(H(t)?f(t):!!t)},At=Ct.normalize=function(e){return String(e).replace(Ht,".").toLowerCase()},Gt=Ct.data={},qt=Ct.NATIVE="N",Dt=Ct.POLYFILL="P";Nt=Ct,a=function(e,t){var r,n,i,o,a,c=e.target,u=e.global,l=e.stat;if(r=u?s:l?s[c]||se(c,{}):(s[c]||{}).prototype)for(n in t){if(o=t[n],i=e.noTargetGet?(a=Ie(r,n))&&a.value:r[n],!Nt(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(e.sham||i&&i.sham)&&Re(o,"sham",!0),qe(r,n,o,e)}};var zt,Ut={},Yt=Function.prototype,Bt=Yt.apply,Qt=Yt.call;Ut="object"==typeof Reflect&&Reflect.apply||(p?Qt.bind(Bt):function(){return Qt.apply(Bt,arguments)});var Vt,Wt=S(S.bind);Vt=function(e,t){return ee(e),void 0===t?e:p?Wt(e,t):function(){return e.apply(t,arguments)}};var Jt={};Jt=C("document","documentElement");var Kt={};Kt=S([].slice);var Xt,Zt=s.TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var er;er=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var tr;tr="process"==w(s.process);var rr,nr,ir,or,ar=s.setImmediate,cr=s.clearImmediate,sr=s.process,ur=s.Dispatch,lr=s.Function,fr=s.MessageChannel,pr=s.String,hr=0,dr={};try{rr=s.location}catch(e){}var vr=function(e){if(he(dr,e)){var t=dr[e];delete dr[e],t()}},gr=function(e){return function(){vr(e)}},yr=function(e){vr(e.data)},mr=function(e){s.postMessage(pr(e),rr.protocol+"//"+rr.host)};ar&&cr||(ar=function(e){Xt(arguments.length,1);var t=H(e)?e:lr(e),r=Kt(arguments,1);return dr[++hr]=function(){Ut(t,void 0,r)},nr(hr),hr},cr=function(e){delete dr[e]},tr?nr=function(e){sr.nextTick(gr(e))}:ur&&ur.now?nr=function(e){ur.now(gr(e))}:fr&&!er?(or=(ir=new fr).port2,ir.port1.onmessage=yr,nr=Vt(or.postMessage,or)):s.addEventListener&&H(s.postMessage)&&!s.importScripts&&rr&&"file:"!==rr.protocol&&!f(mr)?(nr=mr,s.addEventListener("message",yr,!1)):nr="onreadystatechange"in xe("script")?function(e){Jt.appendChild(xe("script")).onreadystatechange=function(){Jt.removeChild(this),vr(e)}}:function(e){setTimeout(gr(e),0)});var br=(zt={set:ar,clear:cr}).clear;a({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==br},{clearImmediate:br});var _r=zt.set;a({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==_r},{setImmediate:_r});const wr=async function(e){try{const r=fetch(e,{method:"GET"}),n=await Promise.race([r,(t=10,new Promise((function(e,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]);if(!n.ok)throw new Error(`Some server problem - ${n.statusText}`);return await n.json()}catch(e){throw e}var t},Er={recipe:{},search:{query:"",searchResults:[]}};var Sr;Sr=new URL(o("27Lyk").resolve("hfd23"),import.meta.url).toString();var Or=new class extends class{_data;_icons=r(Sr);render(e){this._data=e;const t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this.#e.innerHTML=""}renderSpinner(e){const t=`\n      <div class="spinner">\n        <svg>\n          <use href="${this._icons}#icon-loader"></use>\n        </svg>\n      </div>\n    `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",t)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="";searchedRecipe="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}_generateMarkup(){return`            \n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title} class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-clock"></use>\n          </svg>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people"></span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--decrease-servings">\n              <svg>\n                <use href="${this._icons}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${this._icons}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated">\n          <svg>\n            <use href="${this._icons}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round">\n          <svg class="">\n            <use href="${this._icons}#icon-bookmark-fill"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}          \n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${this._icons}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>   \n    `}_generateMarkupIngredient=function(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n        <use href="${this._icons}#icon-check"></use>\n        </svg>                \n        <div class="recipe__description">                  \n          ${e}\n        </div>\n      </li>\n    `}};var jr=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}},Lr=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new k(n||[]);return o._invoke=function(e,t,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return P()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function y(){}function m(){}var b={};s(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(T([])));w&&w!==r&&n.call(w,o)&&(b=w);var E=m.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(i,o,a,c){var s=l(e[i],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,s(E,"constructor",m),s(m,"constructor",y),y.displayName=s(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),s(O.prototype,a,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new O(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),s(E,c,"Generator"),s(E,o,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Lr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Lr:Function("r","regeneratorRuntime = r")(Lr)}const xr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Or.renderSpinner(recipeContainer),await async function(e){try{const t=await wr(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}`),r={id:t.recipe.recipe_id,title:t.recipe.title,publisher:t.recipe.publisher,sourceUrl:t.recipe.source_url,ingredients:t.recipe.ingredients,image:t.recipe.image_url};Er.recipe=r}catch(e){throw console.log(e),e}}(e),Or.render(Er.recipe)}catch(e){console.log(e),Or.renderError()}},kr=async function(){try{const e=jr.getQuery();if(!e)return;await async function(e){try{Er.search.query=e;const t=await wr(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${Er.search.query}&key=bbf0d284-67d7-4fa7-8dd1-f1ad05616ac7`);Er.search.searchResults=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})))}catch(e){throw console.log(e),e}}(e),console.log(Er.search.searchResults)}catch(e){console.log(e),Or.renderError()}};Or.addHandlerRender(xr),jr.addHandlerSearch(kr);
//# sourceMappingURL=index.1869e8a8.js.map
