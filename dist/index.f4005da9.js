function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.f4005da9.js","hfd23":"icons.1b1955db.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var f,g=Function.prototype.call;h=p?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);f=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,$=S.bind,j=S.call,L=p&&$.bind(j,j),O=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),x=E("".slice);w=function(e){return x(O(e),8,-1)};var P=c.Object,T=E("".split);k=d((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?T(e,""):P(e)}:P;var q,M=c.TypeError;q=function(e){if(null==e)throw M("Can't call method on "+e);return e},_=function(e){return k(q(e))};var I,H,R,C;C=function(e){return"function"==typeof e},R=function(e){return"object"==typeof e?null!==e:C(e)};var F,N={},A=function(e){return C(e)?e:void 0};F=function(e,t){return arguments.length<2?A(c[e]):c[e]&&c[e][t]};var D={};D=E({}.isPrototypeOf);var G,U,W,z={};z=F("navigator","userAgent")||"";var B,Y,J=c.process,K=c.Deno,Q=J&&J.versions||K&&K.version,V=Q&&Q.v8;V&&(Y=(B=V.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!Y&&z&&(!(B=z.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=z.match(/Chrome\/(\d+)/))&&(Y=+B[1]),W=Y,U=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&W&&W<41})),G=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;N=G?function(e){return"symbol"==typeof e}:function(e){var t=F("Symbol");return C(t)&&D(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(C(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,oe=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&C(n=e.toString)&&!R(r=h(n,e)))return r;if(C(n=e.valueOf)&&!R(r=h(n,e)))return r;if("string"!==t&&C(n=e.toString)&&!R(r=h(n,e)))return r;throw oe("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,he={},fe=c.Object;pe=function(e){return fe(q(e))};var ge=E({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ge(pe(e),t)};var ve,ye=0,me=Math.random(),be=E(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++ye+me,36)};var _e=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=G?we:we&&we.withoutSetter||ve;ae=function(e){if(!he(_e,e)||!U&&"string"!=typeof _e[e]){var t="Symbol."+e;U&&he(we,e)?_e[e]=we[e]:_e[e]=G&&ke?ke(t):Ee(t)}return _e[e]};var Se=c.TypeError,$e=ae("toPrimitive");H=function(e,t){if(!R(e)||N(e))return e;var n,r=Z(e,$e);if(r){if(void 0===t&&(t="default"),n=h(r,e,t),!R(n)||N(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},I=function(e){var t=H(e,"string");return N(t)?t:t+""};var je,Le,Oe=c.document,xe=R(Oe)&&R(Oe.createElement);Le=function(e){return xe?Oe.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var Pe,Te,qe=Object.getOwnPropertyDescriptor,Me=s=l?qe:function(e,t){if(e=_(e),t=I(t),je)try{return qe(e,t)}catch(e){}if(he(e,t))return b(!h(f,e,t),e[t])},Ie={};Te=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var He,Re=c.String,Ce=c.TypeError;He=function(e){if(R(e))return e;throw Ce(Re(e)+" is not an object")};var Fe=c.TypeError,Ne=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor;Ie=l?function(e,t,n){return Pe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var De,Ge,Ue=Pe=l?Te?function(e,t,n){if(He(e),t=I(t),He(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ae(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ne(e,t,n)}:Ne:function(e,t,n){if(He(e),t=I(t),He(n),je)try{return Ne(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Fe("Accessors not supported");return"value"in n&&(e[t]=n.value),e},We=Function.prototype,ze=l&&Object.getOwnPropertyDescriptor,Be=he(We,"name"),Ye={EXISTS:Be,PROPER:Be&&"something"===function(){}.name,CONFIGURABLE:Be&&(!l||l&&ze(We,"name").configurable)}.CONFIGURABLE,Je={},Ke=E(Function.toString);C(ue.inspectSource)||(ue.inspectSource=function(e){return Ke(e)}),Je=ue.inspectSource;var Qe,Ve,Xe=c.WeakMap;Ve=C(Xe)&&/native code/.test(Je(Xe));var Ze,et=se("keys");Ze=function(e){return et[e]||(et[e]=ve(e))};var tt={};tt={};var nt,rt,it,ot=c.TypeError,at=c.WeakMap;if(Ve||ue.state){var st=ue.state||(ue.state=new at),ct=E(st.get),ut=E(st.has),lt=E(st.set);nt=function(e,t){if(ut(st,e))throw new ot("Object already initialized");return t.facade=e,lt(st,e,t),t},rt=function(e){return ct(st,e)||{}},it=function(e){return ut(st,e)}}else{var dt=Ze("state");tt[dt]=!0,nt=function(e,t){if(he(e,dt))throw new ot("Object already initialized");return t.facade=e,Ie(e,dt,t),t},rt=function(e){return he(e,dt)?e[dt]:{}},it=function(e){return he(e,dt)}}var pt=(Qe={set:nt,get:rt,has:it,enforce:function(e){return it(e)?rt(e):nt(e,{})},getterFor:function(e){return function(t){var n;if(!R(t)||(n=rt(t)).type!==e)throw ot("Incompatible receiver, "+e+" required");return n}}}).enforce,ht=Qe.get,ft=!d((function(){return 8!==Ue((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),vt=Ge=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!he(e,"name")||Ye&&e.name!==t)&&Ue(e,"name",{value:t,configurable:!0}),ft&&n&&he(n,"arity")&&e.length!==n.arity&&Ue(e,"length",{value:n.arity});var r=pt(e);return he(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=vt((function(){return C(this)&&ht(this).source||Je(this)}),"toString"),De=function(e,t,n,r){var i=!!r&&!!r.unsafe,o=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:t;return C(n)&&Ge(n,s,r),e===c?(o?e[t]=n:ce(t,n),e):(i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=n:Ie(e,t,n),e)};var yt,mt,bt,_t,wt,kt={},Et=Math.ceil,St=Math.floor;wt=function(e){var t=+e;return t!=t||0===t?0:(t>0?St:Et)(t)};var $t=Math.max,jt=Math.min;_t=function(e,t){var n=wt(e);return n<0?$t(n+t,0):jt(n,t)};var Lt,Ot,xt=Math.min;Ot=function(e){return e>0?xt(wt(e),9007199254740991):0},Lt=function(e){return Ot(e.length)};var Pt=function(e){return function(t,n,r){var i,o=_(t),a=Lt(o),s=_t(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Tt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,qt=E([].push);bt=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!he(tt,n)&&he(r,n)&&qt(o,n);for(;t.length>i;)he(r,n=t[i++])&&(~Tt(o,n)||qt(o,n));return o};var Mt,It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");mt=Object.getOwnPropertyNames||function(e){return bt(e,It)},Mt=Object.getOwnPropertySymbols;var Ht=E([].concat);kt=F("Reflect","ownKeys")||function(e){var t=mt(He(e));return Mt?Ht(t,Mt(e)):t},yt=function(e,t,n){for(var r=kt(t),i=Pe,o=s,a=0;a<r.length;a++){var c=r[a];he(e,c)||n&&he(n,c)||i(e,c,o(t,c))}};var Rt={},Ct=/#|\.prototype\./,Ft=function(e,t){var n=At[Nt(e)];return n==Gt||n!=Dt&&(C(t)?d(t):!!t)},Nt=Ft.normalize=function(e){return String(e).replace(Ct,".").toLowerCase()},At=Ft.data={},Dt=Ft.NATIVE="N",Gt=Ft.POLYFILL="P";Rt=Ft,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=Me(n,r))&&a.value:n[r],!Rt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(e.sham||i&&i.sham)&&Ie(o,"sham",!0),De(n,r,o,e)}};var Ut,Wt={},zt=Function.prototype,Bt=zt.apply,Yt=zt.call;Wt="object"==typeof Reflect&&Reflect.apply||(p?Yt.bind(Bt):function(){return Yt.apply(Bt,arguments)});var Jt,Kt=E(E.bind);Jt=function(e,t){return ee(e),void 0===t?e:p?Kt(e,t):function(){return e.apply(t,arguments)}};var Qt={};Qt=F("document","documentElement");var Vt={};Vt=E([].slice);var Xt,Zt=c.TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var tn;tn="process"==w(c.process);var nn,rn,on,an,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,dn=c.Function,pn=c.MessageChannel,hn=c.String,fn=0,gn={};try{nn=c.location}catch(e){}var vn=function(e){if(he(gn,e)){var t=gn[e];delete gn[e],t()}},yn=function(e){return function(){vn(e)}},mn=function(e){vn(e.data)},bn=function(e){c.postMessage(hn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=C(e)?e:dn(e),n=Vt(arguments,1);return gn[++fn]=function(){Wt(t,void 0,n)},rn(fn),fn},cn=function(e){delete gn[e]},tn?rn=function(e){un.nextTick(yn(e))}:ln&&ln.now?rn=function(e){ln.now(yn(e))}:pn&&!en?(an=(on=new pn).port2,on.port1.onmessage=mn,rn=Jt(an.postMessage,an)):c.addEventListener&&C(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!d(bn)?(rn=bn,c.addEventListener("message",mn,!1)):rn="onreadystatechange"in Le("script")?function(e){Qt.appendChild(Le("script")).onreadystatechange=function(){Qt.removeChild(this),vn(e)}}:function(e){setTimeout(yn(e),0)});var _n=(Ut={set:sn,clear:cn}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==_n},{clearImmediate:_n});var wn=Ut.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});const kn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]);if(!i.ok)throw new Error(`Some server problem - ${i.statusText}`);return await i.json()}catch(e){throw e}var n},En={recipe:{},search:{query:"",searchResults:[],page:1,resultsPerPage:10,initSearchResults:[]},bookmarks:[],widjet:{}},Sn=function(e){return{id:e.data.recipe.id,title:e.data.recipe.title,publisher:e.data.recipe.publisher,sourceUrl:e.data.recipe.source_url,ingredients:e.data.recipe.ingredients,image:e.data.recipe.image_url,cooking_time:e.data.recipe.cooking_time,servings:e.data.recipe.servings,...e.data.recipe.key&&{key:e.data.recipe.key}}},$n=function(e=En.search.page){En.search.page=e;const t=(e-1)*En.search.resultsPerPage,n=e*En.search.resultsPerPage;return En.search.searchResults.slice(t,n)},jn=function(){localStorage.setItem("bookmarks",JSON.stringify(En.bookmarks))},Ln=function(e){En.bookmarks.push(e),e.id===En.recipe.id&&(En.recipe.bookmarked=!0),jn()};!function(){const e=localStorage.getItem("bookmarks")||[];e.length&&(En.bookmarks=JSON.parse(e))}();var On;On=new URL(o("27Lyk").resolve("hfd23"),import.meta.url).toString();class xn{_data;_icons=n(On);render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}_clear(e=this._parentElement){e.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${this._icons}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${this._icons}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var Pn;function Tn(e,t,n,r,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(u,c,n,r)}Pn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,o=r[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const o=!0,a=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Tn(l,(u-1)*s,r,i,o)}(i,n,e,o,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return Tn(i,o,t,n,r)}(i,o,t)};var qn=new class extends xn{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_message="";widjet={};searchedRecipe="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerChangeServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");if(!n)return;const{changeto:r}=n.dataset;+r>0&&+r<=10&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}getWidjet(e){this.widjet=e,document.head.append(this.widjet.widjetStyle)}_generateMarkup(){return`            \n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title} class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-clock"></use>\n          </svg>\n          <span>${this._data.cooking_time}</span>\n        </div>\n        <div class="recipe__info">          \n          <svg class="recipe__info-icon">\n            <use href="${this._icons}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--decrease-servings" data-changeTo="${this._data.servings-1}">\n              <svg>\n                <use href="${this._icons}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings" data-changeTo="${this._data.servings+1}">\n              <svg>\n                <use href="${this._icons}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${this._icons}#icon-user"></use>\n          </svg>         \n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${this._icons}#icon-bookmark${!0===this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}          \n        </ul>\n      </div>\n      <div class="recipe__additionally">\n        <div class="recipe__nutrition">\n          <div class="recipe__nutrition--body">${this.widjet.widjetBody}</div>\n        </div>\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${this._icons}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>   \n      </div>      \n    `}_generateMarkupIngredient=function(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${this._icons}#icon-check"></use>\n        </svg>\n        <div class="recipe__description">   \n          <span class="recipe__quantity">\n            ${+e.quantity&&" "!==e.quantity?n(Pn)(+e.quantity):""}\n          </span>\n          <span class="recipe__unit">\n            ${e.unit||""}\n          </span>               \n          ${e.description}\n        </div>\n      </li>\n    `}};var Mn=new class{#e=document.querySelector(".search");getQuery(){const e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var In=new class extends xn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title} ...</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n          </div>\n          <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${this._icons}#icon-user"></use>\n            </svg>         \n          </div>\n        </a>\n      </li>\n    `}};var Hn=new class extends xn{_sortingInputs=document.querySelector(".sorting__inputs");_parentElement=document.querySelector(".results");_errorMessage="Sorry, there no results for seeking words";_message="";_generateMarkup(){return this._data.map((e=>In.render(e,!1))).join("")}addHandlerSort(e){this._sortingInputs.addEventListener("change",(function(t){t.target.closest(".sorting_button")&&e(t.target.value)}))}};var Rn=new class extends xn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No booknarks yet. Find a recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>In.render(e,!1))).join("")}};var Cn=new class extends xn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n||n.classList.contains("pagination__page"))return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=Math.ceil(this._data.searchResults.length/this._data.resultsPerPage);return 1===this._data.page&&e>1?`    \n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}/${e}</span>\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:this._data.page===e&&e>1?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}//${e}</span>\n        </button>\n      `:this._data.page<e?`\n        <button class="btn--inline pagination__btn--prev" data-goto="${this._data.page-1}">\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${this._data.page-1}//${e}</span>\n        </button>\n        <button class="btn--inline pagination__page">          \n          <span>${this._data.page}</span>\n        </button>\n        <button class="btn--inline pagination__btn--next" data-goto="${this._data.page+1}">\n          <span>Page ${this._data.page+1}//${e}</span>\n          <svg class="search__icon">\n            <use href="${n(On)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}};var Fn=new class extends xn{constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_buttonOpen=document.querySelector(".nav__btn--add-recipe");_buttonClose=document.querySelector(".btn--close-modal");_message="You successfully uploaded your recipe";toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"),this._window.classList.contains("hidden")?document.body.style.overflow="auto":document.body.style.overflow="hidden"}_addHandlerShowWindow(){this._buttonOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._buttonClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=document.forms.upload,r=[...new FormData(n)],i=Object.fromEntries(r);e(i)}))}};var Nn=new class extends xn{constructor(){super(),this.showIngredients()}_parentElement=document.querySelector(".upload-ingredients");showIngredients(){const e=document.querySelector(".upload-ingredients").children.length;let t=`\n      <div class="upload__exact-ingredient--${e}">   \n        <div class="ingredient--inputs">\n          <label for="ingredient-${e}--product">Product #${e+1}</label>\n          <input\n            value=""\n            type="text"\n            size="55"\n            required\n            name="ingredient-${e}--product"\n            id="ingredient-${e}--product"\n            placeholder="Ingredient of the meal"\n          />   \n          <div class="exact-ingredient__quantityAndUnit">\n            <label for="ingredient-${e}--quantity">Quantity</label>        \n            <input\n              value=""\n              type="number"         \n              step="0.1"   \n              name="ingredient-${e}--quantity"\n              id="ingredient-${e}--quantity"\n              min="0"\n              max="10000"\n            />\n            <label for="ingredient-${e}--unit">Unit</label>\n            <input\n              value=""\n              type="text"\n              size="29"\n              name="ingredient-${e}--unit"\n              id="ingredient-${e}--unit"\n              placeholder="lb, oz, kg..."\n            />     \n          </div> \n        </div>  \n        <div class="ingredients_buttons">\n          <div class="btn__delete-product">\n            <button class="btn--tiny delete-product ${0===e?"hidden":""}" title="remove product">\n              <svg>\n                <use href="${this._icons}#icon-minus-circle"></use>\n              </svg>              \n            </button>   \n          </div>    \n          <div class="btn__add-product">\n            <button class="btn--tiny add-product ${4===e?"hidden":""}" title="add product">\n                <svg>\n                  <use href="${this._icons}#icon-plus-circle"></use>\n                </svg>                \n              </button>\n          </div>                    \n        </div>                     \n      </div>    \n    `;this._parentElement.insertAdjacentHTML("beforeend",t)}addProductHandler(e){this._parentElement.addEventListener("click",(function(t){let n=document.querySelector(".upload-ingredients").children.length;if(t.preventDefault(),t.target.closest(".btn--tiny").classList.contains("add-product")){if(5===n)return;e("add")}else if(t.target.closest(".btn--tiny").classList.contains("delete-product")){if(1===n)return;e("remove")}}))}removeProduct(){const e=document.querySelector(".upload-ingredients").children.length;if(e>1){document.querySelector(".upload-ingredients").children[e-1].remove()}}},An=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=$(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?f:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function $(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function x(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=An}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=An:Function("r","regeneratorRuntime = r")(An)}const Dn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;qn.renderSpinner(),Hn.update($n()),await async function(e){try{const t=await kn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=027304e4-069e-4a19-91b9-589aa36ef008`),n=Sn(t);En.bookmarks.some((e=>e.id===n.id))?n.bookmarked=!0:n.bookmarked=!1,En.recipe=n}catch(e){throw console.log(e),e}}(e),await async function(e){try{const t=(await kn(`https://api.spoonacular.com/recipes/complexSearch?apiKey=8b6504208deb41eabfc91f75b403b467&query=${e}&number=1`)).results[0].id;if(!t)return;const n=await fetch(`https://api.spoonacular.com/recipes/${t}/nutritionLabel?apiKey=8b6504208deb41eabfc91f75b403b467&defaultCss=true`,{method:"GET",headers:{"Content-Type":"text/html"}});if(!n.ok)throw new Error("Problem with getting widjet");const r=await n.text(),i=r.substring(0,r.indexOf("</style>")+8),o=r.substring(r.indexOf("</style>")+8);En.widjet={widjetStyle:i,widjetBody:o}}catch(e){throw console.log(e),new Error(e.message)}}(En.recipe.title),qn.getWidjet(En.widjet),qn.render(En.recipe),Rn.update(En.bookmarks)}catch(e){console.error(e),qn.renderError()}},Gn=async function(){try{const e=Mn.getQuery();e&&""!==e?(Hn.renderSpinner(),await async function(e){try{En.search.query=e,En.search.page=1;const t=await kn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${En.search.query}&key=027304e4-069e-4a19-91b9-589aa36ef008`);En.search.searchResults=En.search.initSearchResults=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,cookingTime:e.cooking_time,...e.key&&{key:e.key}})))}catch(e){throw console.log(e),e}}(e),Hn.render($n()),Cn.render(En.search)):Hn.renderError("You did not write any seeking word")}catch(e){console.log(e)}},Un=function(e){Hn.render($n(e)),Cn.render(En.search)},Wn=function(e){var t;t=e,En.recipe.ingredients.forEach((e=>{+e.quantity&&(e.quantity=(+e.quantity/En.recipe.servings*t).toFixed(1))})),En.recipe.servings=t,qn.update(En.recipe)},zn=function(){var e;En.recipe.bookmarked?(e=En.recipe.id,En.bookmarks.splice(En.bookmarks.findIndex((t=>t.id===e)),1),e===En.recipe.id&&(En.recipe.bookmarked=!1),jn()):Ln(En.recipe),qn.update(En.recipe),Rn.render(En.bookmarks)},Bn=function(){Rn.render(En.bookmarks)},Yn=async function(e){try{Fn.renderSpinner(),await async function(e){try{let t=[];Object.entries(e).filter((e=>e[0].includes("ingredient"))).forEach((e=>{t[+e[0].substring(11,12)]||(t[+e[0].substring(11,12)]=[]),t[+e[0].substring(11,12)].push(e)}));let n=[];for(let e=0;e<t.length;e++){let r={};t[e].forEach((e=>{e[0].includes("product")&&(r.description=e[1]),e[0].includes("quantity")&&(r.quantity=e[1]),e[0].includes("unit")&&(r.unit=e[1])})),n.push(r)}const r={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,ingredients:n,cooking_time:+e.cookingTime,image_url:e.image,servings:+e.servings,key:"027304e4-069e-4a19-91b9-589aa36ef008"},i=await kn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=027304e4-069e-4a19-91b9-589aa36ef008",r);if("success"!==i.status)throw new Error("Sorry, something got wrong");En.recipe=Sn(i),Ln(En.recipe)}catch(e){throw e}}(e),qn.render(En.recipe),Fn.renderMessage(),Rn.render(En.bookmarks),window.history.pushState(null,"",`#${En.recipe.id}`),setTimeout((function(){Fn.toggleWindow()}),1500)}catch(e){console.error(e),Fn.renderError(e.message)}},Jn=function(e){"add"===e?Nn.showIngredients():"remove"===e&&Nn.removeProduct()},Kn=function(e){!function(e,t){const n=[...e];"none"===t&&(En.search.searchResults=En.search.initSearchResults),"time"===t&&(En.search.searchResults=En.search.initSearchResults),"name"===t&&(n.sort(((e,t)=>{const n=e.title.toLowerCase(),r=t.title.toLowerCase();return n<r?-1:n>r?1:0})),En.search.searchResults=n)}(En.search.searchResults,e),Hn.render(En.search.searchResults),Hn.render($n(1)),Cn.render(En.search)};qn.addHandlerRender(Dn),Mn.addHandlerSearch(Gn),Cn.addHandlerClick(Un),qn.addHandlerChangeServings(Wn),qn.addHandlerAddBookmark(zn),Rn.addHandlerRender(Bn),Fn.addHandlerUpload(Yn),Hn.addHandlerSort(Kn),Nn.addProductHandler(Jn);
//# sourceMappingURL=index.f4005da9.js.map
