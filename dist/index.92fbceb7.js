function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.92fbceb7.js","eyyUD":"icons.c14567a0.svg"}'));var a,c,s={},u=function(e){return e&&e.Math==Math&&e};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var v,d=Function.prototype.call;h=p?d.bind(d):function(){return d.apply(d,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);v=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var w,_,E={},O={},S=Function.prototype,j=S.bind,L=S.call,x=p&&j.bind(L,L),k=(O=p?function(e){return e&&x(e)}:function(e){return e&&function(){return L.apply(e,arguments)}})({}.toString),T=O("".slice);_=function(e){return T(k(e),8,-1)};var P=s.Object,M=O("".split);E=f((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==_(e)?M(e,""):P(e)}:P;var $,I=s.TypeError;$=function(e){if(null==e)throw I("Can't call method on "+e);return e},w=function(e){return E($(e))};var F,N,R,A;A=function(e){return"function"==typeof e},R=function(e){return"object"==typeof e?null!==e:A(e)};var C,G={},H=function(e){return A(e)?e:void 0};C=function(e,t){return arguments.length<2?H(s[e]):s[e]&&s[e][t]};var D={};D=O({}.isPrototypeOf);var U,q,z,Y={};Y=C("navigator","userAgent")||"";var B,V,W=s.process,J=s.Deno,K=W&&W.versions||J&&J.version,X=K&&K.v8;X&&(V=(B=X.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!V&&Y&&(!(B=Y.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=Y.match(/Chrome\/(\d+)/))&&(V=+B[1]),z=V,q=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&z&&z<41})),U=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var Q=s.Object;G=U?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return A(t)&&D(t.prototype,Q(e))};var Z,ee,te,re=s.String;te=function(e){try{return re(e)}catch(e){return"Object"}};var ne=s.TypeError;ee=function(e){if(A(e))return e;throw ne(te(e)+" is not a function")},Z=function(e,t){var r=e[t];return null==r?void 0:ee(r)};var ie,oe=s.TypeError;ie=function(e,t){var r,n;if("string"===t&&A(r=e.toString)&&!R(n=h(r,e)))return n;if(A(r=e.valueOf)&&!R(n=h(r,e)))return n;if("string"!==t&&A(r=e.toString)&&!R(n=h(r,e)))return n;throw oe("Can't convert object to primitive value")};var ae,ce;var se,ue={},le=Object.defineProperty;se=function(e,t){try{le(s,e,{value:t,configurable:!0,writable:!0})}catch(r){s[e]=t}return t};var fe=s["__core-js_shared__"]||se("__core-js_shared__",{});ue=fe,(ce=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},ve=s.Object;pe=function(e){return ve($(e))};var de=O({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return de(pe(e),t)};var ge,ye=0,me=Math.random(),be=O(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+me,36)};var we=ce("wks"),_e=s.Symbol,Ee=_e&&_e.for,Oe=U?_e:_e&&_e.withoutSetter||ge;ae=function(e){if(!he(we,e)||!q&&"string"!=typeof we[e]){var t="Symbol."+e;q&&he(_e,e)?we[e]=_e[e]:we[e]=U&&Ee?Ee(t):Oe(t)}return we[e]};var Se=s.TypeError,je=ae("toPrimitive");N=function(e,t){if(!R(e)||G(e))return e;var r,n=Z(e,je);if(n){if(void 0===t&&(t="default"),r=h(n,e,t),!R(r)||G(r))return r;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},F=function(e){var t=N(e,"string");return G(t)?t:t+""};var Le,xe,ke=s.document,Te=R(ke)&&R(ke.createElement);xe=function(e){return Te?ke.createElement(e):{}},Le=!l&&!f((function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a}));var Pe,Me,$e=Object.getOwnPropertyDescriptor,Ie=c=l?$e:function(e,t){if(e=w(e),t=F(t),Le)try{return $e(e,t)}catch(e){}if(he(e,t))return b(!h(v,e,t),e[t])},Fe={};Me=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ne,Re=s.String,Ae=s.TypeError;Ne=function(e){if(R(e))return e;throw Ae(Re(e)+" is not an object")};var Ce=s.TypeError,Ge=Object.defineProperty,He=Object.getOwnPropertyDescriptor;Fe=l?function(e,t,r){return Pe(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var De,Ue,qe=Pe=l?Me?function(e,t,r){if(Ne(e),t=F(t),Ne(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=He(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ge(e,t,r)}:Ge:function(e,t,r){if(Ne(e),t=F(t),Ne(r),Le)try{return Ge(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Ce("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ze=Function.prototype,Ye=l&&Object.getOwnPropertyDescriptor,Be=he(ze,"name"),Ve={EXISTS:Be,PROPER:Be&&"something"===function(){}.name,CONFIGURABLE:Be&&(!l||l&&Ye(ze,"name").configurable)}.CONFIGURABLE,We={},Je=O(Function.toString);A(ue.inspectSource)||(ue.inspectSource=function(e){return Je(e)}),We=ue.inspectSource;var Ke,Xe,Qe=s.WeakMap;Xe=A(Qe)&&/native code/.test(We(Qe));var Ze,et=ce("keys");Ze=function(e){return et[e]||(et[e]=ge(e))};var tt={};tt={};var rt,nt,it,ot=s.TypeError,at=s.WeakMap;if(Xe||ue.state){var ct=ue.state||(ue.state=new at),st=O(ct.get),ut=O(ct.has),lt=O(ct.set);rt=function(e,t){if(ut(ct,e))throw new ot("Object already initialized");return t.facade=e,lt(ct,e,t),t},nt=function(e){return st(ct,e)||{}},it=function(e){return ut(ct,e)}}else{var ft=Ze("state");tt[ft]=!0,rt=function(e,t){if(he(e,ft))throw new ot("Object already initialized");return t.facade=e,Fe(e,ft,t),t},nt=function(e){return he(e,ft)?e[ft]:{}},it=function(e){return he(e,ft)}}var pt=(Ke={set:rt,get:nt,has:it,enforce:function(e){return it(e)?nt(e):rt(e,{})},getterFor:function(e){return function(t){var r;if(!R(t)||(r=nt(t)).type!==e)throw ot("Incompatible receiver, "+e+" required");return r}}}).enforce,ht=Ke.get,vt=!f((function(){return 8!==qe((function(){}),"length",{value:8}).length})),dt=String(String).split("String"),gt=Ue=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!he(e,"name")||Ve&&e.name!==t)&&qe(e,"name",{value:t,configurable:!0}),vt&&r&&he(r,"arity")&&e.length!==r.arity&&qe(e,"length",{value:r.arity});var n=pt(e);return he(n,"source")||(n.source=dt.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return A(this)&&ht(this).source||We(this)}),"toString"),De=function(e,t,r,n){var i=!!n&&!!n.unsafe,o=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:t;return A(r)&&Ue(r,c,n),e===s?(o?e[t]=r:se(t,r),e):(i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=r:Fe(e,t,r),e)};var yt,mt,bt,wt,_t,Et={},Ot=Math.ceil,St=Math.floor;_t=function(e){var t=+e;return t!=t||0===t?0:(t>0?St:Ot)(t)};var jt=Math.max,Lt=Math.min;wt=function(e,t){var r=_t(e);return r<0?jt(r+t,0):Lt(r,t)};var xt,kt,Tt=Math.min;kt=function(e){return e>0?Tt(_t(e),9007199254740991):0},xt=function(e){return kt(e.length)};var Pt=function(e){return function(t,r,n){var i,o=w(t),a=xt(o),c=wt(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},Mt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,$t=O([].push);bt=function(e,t){var r,n=w(e),i=0,o=[];for(r in n)!he(tt,r)&&he(n,r)&&$t(o,r);for(;t.length>i;)he(n,r=t[i++])&&(~Mt(o,r)||$t(o,r));return o};var It,Ft=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return bt(e,Ft)},It=Object.getOwnPropertySymbols;var Nt=O([].concat);Et=C("Reflect","ownKeys")||function(e){var t=mt(Ne(e));return It?Nt(t,It(e)):t},yt=function(e,t,r){for(var n=Et(t),i=Pe,o=c,a=0;a<n.length;a++){var s=n[a];he(e,s)||r&&he(r,s)||i(e,s,o(t,s))}};var Rt={},At=/#|\.prototype\./,Ct=function(e,t){var r=Ht[Gt(e)];return r==Ut||r!=Dt&&(A(t)?f(t):!!t)},Gt=Ct.normalize=function(e){return String(e).replace(At,".").toLowerCase()},Ht=Ct.data={},Dt=Ct.NATIVE="N",Ut=Ct.POLYFILL="P";Rt=Ct,a=function(e,t){var r,n,i,o,a,c=e.target,u=e.global,l=e.stat;if(r=u?s:l?s[c]||se(c,{}):(s[c]||{}).prototype)for(n in t){if(o=t[n],i=e.noTargetGet?(a=Ie(r,n))&&a.value:r[n],!Rt(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(e.sham||i&&i.sham)&&Fe(o,"sham",!0),De(r,n,o,e)}};var qt,zt={},Yt=Function.prototype,Bt=Yt.apply,Vt=Yt.call;zt="object"==typeof Reflect&&Reflect.apply||(p?Vt.bind(Bt):function(){return Vt.apply(Bt,arguments)});var Wt,Jt=O(O.bind);Wt=function(e,t){return ee(e),void 0===t?e:p?Jt(e,t):function(){return e.apply(t,arguments)}};var Kt={};Kt=C("document","documentElement");var Xt={};Xt=O([].slice);var Qt,Zt=s.TypeError;Qt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var er;er=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var tr;tr="process"==_(s.process);var rr,nr,ir,or,ar=s.setImmediate,cr=s.clearImmediate,sr=s.process,ur=s.Dispatch,lr=s.Function,fr=s.MessageChannel,pr=s.String,hr=0,vr={};try{rr=s.location}catch(e){}var dr=function(e){if(he(vr,e)){var t=vr[e];delete vr[e],t()}},gr=function(e){return function(){dr(e)}},yr=function(e){dr(e.data)},mr=function(e){s.postMessage(pr(e),rr.protocol+"//"+rr.host)};ar&&cr||(ar=function(e){Qt(arguments.length,1);var t=A(e)?e:lr(e),r=Xt(arguments,1);return vr[++hr]=function(){zt(t,void 0,r)},nr(hr),hr},cr=function(e){delete vr[e]},tr?nr=function(e){sr.nextTick(gr(e))}:ur&&ur.now?nr=function(e){ur.now(gr(e))}:fr&&!er?(or=(ir=new fr).port2,ir.port1.onmessage=yr,nr=Wt(or.postMessage,or)):s.addEventListener&&A(s.postMessage)&&!s.importScripts&&rr&&"file:"!==rr.protocol&&!f(mr)?(nr=mr,s.addEventListener("message",yr,!1)):nr="onreadystatechange"in xe("script")?function(e){Kt.appendChild(xe("script")).onreadystatechange=function(){Kt.removeChild(this),dr(e)}}:function(e){setTimeout(gr(e),0)});var br=(qt={set:ar,clear:cr}).clear;a({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==br},{clearImmediate:br});var wr=qt.set;a({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==wr},{setImmediate:wr});const _r={recipe:{}},Er=async function(e){try{const t=await async function(e){try{const r=fetch(e,{method:"GET"}),n=await Promise.race([r,(t=10,new Promise((function(e,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]);if(!n.ok)throw new Error(`Some server problem - ${n.statusText}`);return await n.json()}catch(e){throw e}var t}(`https://forkify-api.herokuapp.com/api/get?rId=${e}`),r={id:t.recipe.recipe_id,title:t.recipe.title,publisher:t.recipe.publisher,sourceUrl:t.recipe.source_url,ingredients:t.recipe.ingredients,image:t.recipe.image_url};_r.recipe=r}catch(e){throw e}};var Or;Or=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();var Sr=new class{#e=document.querySelector(".recipe");#t;#r=r(Or);#n="No recipes found for your query. Please try again!";#i="";render(e){this.#t=e;const t=this.#o();this.#a(),this.#e.insertAdjacentHTML("afterbegin",t)}#a(){this.#e.innerHTML=""}renderSpinner(e){const t=`\n      <div class="spinner">\n        <svg>\n          <use href="${this.#r}#icon-loader"></use>\n        </svg>\n      </div>\n    `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",t)}renderError(e=this.#n){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${this.#r}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this.#a(),this.#e.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this.#i){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${this.#r}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this.#a(),this.#e.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}#o(){return`            \n      <figure class="recipe__fig">\n        <img src="${this.#t.image}" alt="${this.#t.title} class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this.#t.title}</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this.#r}#icon-clock"></use>\n          </svg>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this.#r}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people"></span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--decrease-servings">\n              <svg>\n                <use href="${this.#r}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${this.#r}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated">\n          <svg>\n            <use href="${this.#r}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round">\n          <svg class="">\n            <use href="${this.#r}#icon-bookmark-fill"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this.#t.ingredients.map((e=>this.#c(e))).join("")}          \n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this.#t.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this.#t.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${this.#r}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>   \n    `}#c=function(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n        <use href="${this.#r}#icon-check"></use>\n        </svg>                \n        <div class="recipe__description">                  \n          ${e}\n        </div>\n      </li>\n    `}},jr=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new k(n||[]);return o._invoke=function(e,t,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw o;return P()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?v:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function g(){}function y(){}function m(){}var b={};s(b,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(T([])));_&&_!==r&&n.call(_,o)&&(b=_);var E=m.prototype=g.prototype=Object.create(b);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,c){var s=l(e[i],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,s(E,"constructor",m),s(m,"constructor",y),y.displayName=s(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},O(S.prototype),s(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(E),s(E,c,"Generator"),s(E,o,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}({});try{regeneratorRuntime=jr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=jr:Function("r","regeneratorRuntime = r")(jr)}const Lr=document.querySelector(".recipe"),xr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Sr.renderSpinner(Lr),await Er(e),Sr.render(_r.recipe)}catch(e){console.log(e),Sr.renderError()}};Sr.addHandlerRender(xr);
//# sourceMappingURL=index.92fbceb7.js.map
