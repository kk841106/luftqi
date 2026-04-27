(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Du(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const yt={},rr=[],Rn=()=>{},Hg=()=>!1,Za=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Iu=t=>t.startsWith("onUpdate:"),Qt=Object.assign,Uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gg=Object.prototype.hasOwnProperty,rt=(t,e)=>Gg.call(t,e),Ve=Array.isArray,or=t=>mo(t)==="[object Map]",Ja=t=>mo(t)==="[object Set]",Od=t=>mo(t)==="[object Date]",Ze=t=>typeof t=="function",Ut=t=>typeof t=="string",ns=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",jh=t=>(xt(t)||Ze(t))&&Ze(t.then)&&Ze(t.catch),Kh=Object.prototype.toString,mo=t=>Kh.call(t),Wg=t=>mo(t).slice(8,-1),Zh=t=>mo(t)==="[object Object]",Nu=t=>Ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jr=Du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$g=/-(\w)/g,pr=Qa(t=>t.replace($g,(e,n)=>n?n.toUpperCase():"")),Xg=/\B([A-Z])/g,Sr=Qa(t=>t.replace(Xg,"-$1").toLowerCase()),Jh=Qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=Qa(t=>t?`on${Jh(t)}`:""),is=(t,e)=>!Object.is(t,e),ha=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Aa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qg=t=>{const e=Ut(t)?Number(t):NaN;return isNaN(e)?t:e};let Bd;const Qh=()=>Bd||(Bd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _i(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ut(i)?Zg(i):_i(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(t)||xt(t))return t}const Yg=/;(?![^(]*\))/g,jg=/:([^]+)/,Kg=/\/\*[^]*?\*\//g;function Zg(t){const e={};return t.replace(Kg,"").split(Yg).forEach(n=>{if(n){const i=n.split(jg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function It(t){let e="";if(Ut(t))e=t;else if(Ve(t))for(let n=0;n<t.length;n++){const i=It(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qg=Du(Jg);function ep(t){return!!t||t===""}function e_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=el(t[i],e[i]);return n}function el(t,e){if(t===e)return!0;let n=Od(t),i=Od(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ns(t),i=ns(e),n||i)return t===e;if(n=Ve(t),i=Ve(e),n||i)return n&&i?e_(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!el(t[o],e[o]))return!1}}return String(t)===String(e)}function t_(t,e){return t.findIndex(n=>el(n,e))}const un=t=>Ut(t)?t:t==null?"":Ve(t)||xt(t)&&(t.toString===Kh||!Ze(t.toString))?JSON.stringify(t,tp,2):String(t),tp=(t,e)=>e&&e.__v_isRef?tp(t,e.value):or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Cl(i,r)+" =>"]=s,n),{})}:Ja(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cl(n))}:ns(e)?Cl(e):xt(e)&&!Ve(e)&&!Zh(e)?String(e):e,Cl=(t,e="")=>{var n;return ns(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let On;class np{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=On,!e&&On&&(this.index=(On.scopes||(On.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=On;try{return On=this,e()}finally{On=n}}}on(){On=this}off(){On=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function n_(t){return new np(t)}function i_(t,e=On){e&&e.active&&e.effects.push(t)}function s_(){return On}let Ps;class Fu{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,i_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ns();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(r_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Fs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Qi,n=Ps;try{return Qi=!0,Ps=this,this._runnings++,kd(this),this.fn()}finally{zd(this),this._runnings--,Ps=n,Qi=e}}stop(){var e;this.active&&(kd(this),zd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function r_(t){return t.value}function kd(t){t._trackId++,t._depsLength=0}function zd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ip(t.deps[e],t);t.deps.length=t._depsLength}}function ip(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Qi=!0,yc=0;const sp=[];function Ns(){sp.push(Qi),Qi=!1}function Fs(){const t=sp.pop();Qi=t===void 0?!0:t}function Ou(){yc++}function Bu(){for(yc--;!yc&&Sc.length;)Sc.shift()()}function rp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&ip(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Sc=[];function op(t,e,n){Ou();for(const i of t.keys()){let s;i._dirtyLevel<e&&(s??(s=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Sc.push(i.scheduler)))}Bu()}const ap=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mc=new WeakMap,Ls=Symbol(""),Ec=Symbol("");function hn(t,e,n){if(Qi&&Ps){let i=Mc.get(t);i||Mc.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=ap(()=>i.delete(n))),rp(Ps,s)}}function bi(t,e,n,i,s,r){const o=Mc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ve(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!ns(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ve(t)?Nu(n)&&a.push(o.get("length")):(a.push(o.get(Ls)),or(t)&&a.push(o.get(Ec)));break;case"delete":Ve(t)||(a.push(o.get(Ls)),or(t)&&a.push(o.get(Ec)));break;case"set":or(t)&&a.push(o.get(Ls));break}Ou();for(const l of a)l&&op(l,4);Bu()}const o_=Du("__proto__,__v_isRef,__isVue"),lp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ns)),Vd=a_();function a_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ut(this);for(let r=0,o=this.length;r<o;r++)hn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ut)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ns(),Ou();const i=ut(this)[e].apply(this,n);return Bu(),Fs(),i}}),t}function l_(t){const e=ut(this);return hn(e,"has",t),e.hasOwnProperty(t)}class cp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?w_:hp:r?fp:dp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!s){if(o&&rt(Vd,n))return Reflect.get(Vd,n,i);if(n==="hasOwnProperty")return l_}const a=Reflect.get(e,n,i);return(ns(n)?lp.has(n):o_(n))||(s||hn(e,"get",n),r)?a:pn(a)?o&&Nu(n)?a:a.value:xt(a)?s?pp(a):nl(a):a}}class up extends cp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=mr(r);if(!Ca(i)&&!mr(i)&&(r=ut(r),i=ut(i)),!Ve(e)&&pn(r)&&!pn(i))return l?!1:(r.value=i,!0)}const o=Ve(e)&&Nu(n)?Number(n)<e.length:rt(e,n),a=Reflect.set(e,n,i,s);return e===ut(s)&&(o?is(i,r)&&bi(e,"set",n,i):bi(e,"add",n,i)),a}deleteProperty(e,n){const i=rt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&bi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ns(n)||!lp.has(n))&&hn(e,"has",n),i}ownKeys(e){return hn(e,"iterate",Ve(e)?"length":Ls),Reflect.ownKeys(e)}}class c_ extends cp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const u_=new up,d_=new c_,f_=new up(!0),ku=t=>t,tl=t=>Reflect.getPrototypeOf(t);function Ro(t,e,n=!1,i=!1){t=t.__v_raw;const s=ut(t),r=ut(e);n||(is(e,r)&&hn(s,"get",e),hn(s,"get",r));const{has:o}=tl(s),a=i?ku:n?Gu:no;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Po(t,e=!1){const n=this.__v_raw,i=ut(n),s=ut(t);return e||(is(t,s)&&hn(i,"has",t),hn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Lo(t,e=!1){return t=t.__v_raw,!e&&hn(ut(t),"iterate",Ls),Reflect.get(t,"size",t)}function Hd(t){t=ut(t);const e=ut(this);return tl(e).has.call(e,t)||(e.add(t),bi(e,"add",t,t)),this}function Gd(t,e){e=ut(e);const n=ut(this),{has:i,get:s}=tl(n);let r=i.call(n,t);r||(t=ut(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?is(e,o)&&bi(n,"set",t,e):bi(n,"add",t,e),this}function Wd(t){const e=ut(this),{has:n,get:i}=tl(e);let s=n.call(e,t);s||(t=ut(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&bi(e,"delete",t,void 0),r}function $d(){const t=ut(this),e=t.size!==0,n=t.clear();return e&&bi(t,"clear",void 0,void 0),n}function Do(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ut(o),l=e?ku:t?Gu:no;return!t&&hn(a,"iterate",Ls),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Io(t,e,n){return function(...i){const s=this.__v_raw,r=ut(s),o=or(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?ku:e?Gu:no;return!e&&hn(r,"iterate",l?Ec:Ls),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Di(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function h_(){const t={get(r){return Ro(this,r)},get size(){return Lo(this)},has:Po,add:Hd,set:Gd,delete:Wd,clear:$d,forEach:Do(!1,!1)},e={get(r){return Ro(this,r,!1,!0)},get size(){return Lo(this)},has:Po,add:Hd,set:Gd,delete:Wd,clear:$d,forEach:Do(!1,!0)},n={get(r){return Ro(this,r,!0)},get size(){return Lo(this,!0)},has(r){return Po.call(this,r,!0)},add:Di("add"),set:Di("set"),delete:Di("delete"),clear:Di("clear"),forEach:Do(!0,!1)},i={get(r){return Ro(this,r,!0,!0)},get size(){return Lo(this,!0)},has(r){return Po.call(this,r,!0)},add:Di("add"),set:Di("set"),delete:Di("delete"),clear:Di("clear"),forEach:Do(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Io(r,!1,!1),n[r]=Io(r,!0,!1),e[r]=Io(r,!1,!0),i[r]=Io(r,!0,!0)}),[t,n,e,i]}const[p_,m_,g_,__]=h_();function zu(t,e){const n=e?t?__:g_:t?m_:p_;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(rt(n,s)&&s in i?n:i,s,r)}const v_={get:zu(!1,!1)},x_={get:zu(!1,!0)},b_={get:zu(!0,!1)},dp=new WeakMap,fp=new WeakMap,hp=new WeakMap,w_=new WeakMap;function y_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S_(t){return t.__v_skip||!Object.isExtensible(t)?0:y_(Wg(t))}function nl(t){return mr(t)?t:Vu(t,!1,u_,v_,dp)}function M_(t){return Vu(t,!1,f_,x_,fp)}function pp(t){return Vu(t,!0,d_,b_,hp)}function Vu(t,e,n,i,s){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=S_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function ar(t){return mr(t)?ar(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function Ca(t){return!!(t&&t.__v_isShallow)}function mp(t){return ar(t)||mr(t)}function ut(t){const e=t&&t.__v_raw;return e?ut(e):t}function Hu(t){return Object.isExtensible(t)&&Aa(t,"__v_skip",!0),t}const no=t=>xt(t)?nl(t):t,Gu=t=>xt(t)?pp(t):t;class gp{constructor(e,n,i,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fu(()=>e(this._value),()=>pa(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ut(this);return(!e._cacheable||e.effect.dirty)&&is(e._value,e._value=e.effect.run())&&pa(e,4),_p(e),e.effect._dirtyLevel>=2&&pa(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function E_(t,e,n=!1){let i,s;const r=Ze(t);return r?(i=t,s=Rn):(i=t.get,s=t.set),new gp(i,s,r||!s,n)}function _p(t){var e;Qi&&Ps&&(t=ut(t),rp(Ps,(e=t.dep)!=null?e:t.dep=ap(()=>t.dep=void 0,t instanceof gp?t:void 0)))}function pa(t,e=4,n){t=ut(t);const i=t.dep;i&&op(i,e)}function pn(t){return!!(t&&t.__v_isRef===!0)}function et(t){return T_(t,!1)}function T_(t,e){return pn(t)?t:new A_(t,e)}class A_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ut(e),this._value=n?e:no(e)}get value(){return _p(this),this._value}set value(e){const n=this.__v_isShallow||Ca(e)||mr(e);e=n?e:ut(e),is(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:no(e),pa(this,4))}}function ws(t){return pn(t)?t.value:t}const C_={get:(t,e,n)=>ws(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return pn(s)&&!pn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function vp(t){return ar(t)?t:new Proxy(t,C_)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(t,e,n,i){try{return i?t(...i):t()}catch(s){il(s,e,n)}}function Pn(t,e,n,i){if(Ze(t)){const r=es(t,e,n,i);return r&&jh(r)&&r.catch(o=>{il(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Pn(t[r],e,n,i));return s}function il(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){es(l,null,10,[t,o,a]);return}}R_(t,n,s,i)}function R_(t,e,n,i=!0){console.error(t)}let io=!1,Tc=!1;const jt=[];let Kn=0;const lr=[];let Hi=null,ys=0;const xp=Promise.resolve();let Wu=null;function Ra(t){const e=Wu||xp;return t?e.then(this?t.bind(this):t):e}function P_(t){let e=Kn+1,n=jt.length;for(;e<n;){const i=e+n>>>1,s=jt[i],r=so(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function $u(t){(!jt.length||!jt.includes(t,io&&t.allowRecurse?Kn+1:Kn))&&(t.id==null?jt.push(t):jt.splice(P_(t.id),0,t),bp())}function bp(){!io&&!Tc&&(Tc=!0,Wu=xp.then(yp))}function L_(t){const e=jt.indexOf(t);e>Kn&&jt.splice(e,1)}function D_(t){Ve(t)?lr.push(...t):(!Hi||!Hi.includes(t,t.allowRecurse?ys+1:ys))&&lr.push(t),bp()}function Xd(t,e,n=io?Kn+1:0){for(;n<jt.length;n++){const i=jt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;jt.splice(n,1),n--,i()}}}function wp(t){if(lr.length){const e=[...new Set(lr)].sort((n,i)=>so(n)-so(i));if(lr.length=0,Hi){Hi.push(...e);return}for(Hi=e,ys=0;ys<Hi.length;ys++)Hi[ys]();Hi=null,ys=0}}const so=t=>t.id==null?1/0:t.id,I_=(t,e)=>{const n=so(t)-so(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function yp(t){Tc=!1,io=!0,jt.sort(I_);try{for(Kn=0;Kn<jt.length;Kn++){const e=jt[Kn];e&&e.active!==!1&&es(e,null,14)}}finally{Kn=0,jt.length=0,wp(),io=!1,Wu=null,(jt.length||lr.length)&&yp()}}function U_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||yt;d&&(s=n.map(p=>Ut(p)?p.trim():p)),f&&(s=n.map(to))}let a,l=i[a=Al(e)]||i[a=Al(pr(e))];!l&&r&&(l=i[a=Al(Sr(e))]),l&&Pn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,s)}}function Sp(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ze(t)){const l=c=>{const u=Sp(c,e,!0);u&&(a=!0,Qt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(xt(t)&&i.set(t,null),null):(Ve(r)?r.forEach(l=>o[l]=null):Qt(o,r),xt(t)&&i.set(t,o),o)}function sl(t,e){return!t||!Za(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(t,e[0].toLowerCase()+e.slice(1))||rt(t,Sr(e))||rt(t,e))}let zt=null,rl=null;function Pa(t){const e=zt;return zt=t,rl=t&&t.type.__scopeId||null,e}function Ai(t){rl=t}function Ci(){rl=null}function Cn(t,e=zt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&rf(-1);const r=Pa(e);let o;try{o=t(...s)}finally{Pa(r),i._d&&rf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qd(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:_,inheritAttrs:x}=t;let m,h;const y=Pa(t);try{if(n.shapeFlag&4){const A=s||i,D=A;m=Yn(u.call(D,A,f,r,p,d,_)),h=l}else{const A=e;m=Yn(A.length>1?A(r,{attrs:l,slots:a,emit:c}):A(r,null)),h=e.props?l:N_(l)}}catch(A){Qr.length=0,il(A,t,1),m=st(Ln)}let E=m;if(h&&x!==!1){const A=Object.keys(h),{shapeFlag:D}=E;A.length&&D&7&&(o&&A.some(Iu)&&(h=F_(h,o)),E=ss(E,h))}return n.dirs&&(E=ss(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),m=E,Pa(y),m}const N_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Za(n))&&((e||(e={}))[n]=t[n]);return e},F_=(t,e)=>{const n={};for(const i in t)(!Iu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function O_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Yd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!sl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yd(i,o,c):!0:!!o;return!1}function Yd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!sl(n,r))return!0}return!1}function B_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const k_=Symbol.for("v-ndc"),z_=t=>t.__isSuspense;function V_(t,e){e&&e.pendingBranch?Ve(t)?e.effects.push(...t):e.effects.push(t):D_(t)}const H_=Symbol.for("v-scx"),G_=()=>ma(H_),Uo={};function Zn(t,e,n){return Mp(t,e,n)}function Mp(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=yt){if(e&&r){const R=e;e=(...I)=>{R(...I),D()}}const l=Kt,c=R=>i===!0?R:As(R,i===!1?1:void 0);let u,f=!1,d=!1;if(pn(t)?(u=()=>t.value,f=Ca(t)):ar(t)?(u=()=>c(t),f=!0):Ve(t)?(d=!0,f=t.some(R=>ar(R)||Ca(R)),u=()=>t.map(R=>{if(pn(R))return R.value;if(ar(R))return c(R);if(Ze(R))return es(R,l,2)})):Ze(t)?e?u=()=>es(t,l,2):u=()=>(p&&p(),Pn(t,l,3,[_])):u=Rn,e&&i){const R=u;u=()=>As(R())}let p,_=R=>{p=E.onStop=()=>{es(R,l,4),p=E.onStop=void 0}},x;if(dl)if(_=Rn,e?n&&Pn(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const R=G_();x=R.__watcherHandles||(R.__watcherHandles=[])}else return Rn;let m=d?new Array(t.length).fill(Uo):Uo;const h=()=>{if(!(!E.active||!E.dirty))if(e){const R=E.run();(i||f||(d?R.some((I,v)=>is(I,m[v])):is(R,m)))&&(p&&p(),Pn(e,l,3,[R,m===Uo?void 0:d&&m[0]===Uo?[]:m,_]),m=R)}else E.run()};h.allowRecurse=!!e;let y;s==="sync"?y=h:s==="post"?y=()=>cn(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),y=()=>$u(h));const E=new Fu(u,Rn,y),A=s_(),D=()=>{E.stop(),A&&Uu(A.effects,E)};return e?n?h():m=E.run():s==="post"?cn(E.run.bind(E),l&&l.suspense):E.run(),x&&x.push(D),D}function W_(t,e,n){const i=this.proxy,s=Ut(t)?t.includes(".")?Ep(i,t):()=>i[t]:t.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,n=e);const o=_o(this),a=Mp(s,r.bind(i),n);return o(),a}function Ep(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function As(t,e,n=0,i){if(!xt(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),pn(t))As(t.value,e,n,i);else if(Ve(t))for(let s=0;s<t.length;s++)As(t[s],e,n,i);else if(Ja(t)||or(t))t.forEach(s=>{As(s,e,n,i)});else if(Zh(t))for(const s in t)As(t[s],e,n,i);return t}function $r(t,e){if(zt===null)return t;const n=fl(zt)||zt.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&As(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function cs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ns(),Pn(l,n,8,[t.el,a,t,e]),Fs())}}const Gi=Symbol("_leaveCb"),No=Symbol("_enterCb");function $_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return go(()=>{t.isMounted=!0}),Xu(()=>{t.isUnmounting=!0}),t}const Mn=[Function,Array],Tp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},X_={name:"BaseTransition",props:Tp,setup(t,{slots:e}){const n=L0(),i=$_();return()=>{const s=e.default&&Cp(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Ln){r=d;break}}const o=ut(t),{mode:a}=o;if(i.isLeaving)return Rl(r);const l=jd(r);if(!l)return Rl(r);const c=Ac(l,o,i,n);Cc(l,c);const u=n.subTree,f=u&&jd(u);if(f&&f.type!==Ln&&!Ss(l,f)){const d=Ac(f,o,i,n);if(Cc(f,d),a==="out-in")return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Rl(r);a==="in-out"&&l.type!==Ln&&(d.delayLeave=(p,_,x)=>{const m=Ap(i,f);m[String(f.key)]=f,p[Gi]=()=>{_(),p[Gi]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return r}}},q_=X_;function Ap(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ac(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:x,onAppear:m,onAfterAppear:h,onAppearCancelled:y}=e,E=String(t.key),A=Ap(n,t),D=(v,T)=>{v&&Pn(v,i,9,T)},R=(v,T)=>{const Q=T[1];D(v,T),Ve(v)?v.every(P=>P.length<=1)&&Q():v.length<=1&&Q()},I={mode:r,persisted:o,beforeEnter(v){let T=a;if(!n.isMounted)if(s)T=x||a;else return;v[Gi]&&v[Gi](!0);const Q=A[E];Q&&Ss(t,Q)&&Q.el[Gi]&&Q.el[Gi](),D(T,[v])},enter(v){let T=l,Q=c,P=u;if(!n.isMounted)if(s)T=m||l,Q=h||c,P=y||u;else return;let N=!1;const V=v[No]=ee=>{N||(N=!0,ee?D(P,[v]):D(Q,[v]),I.delayedLeave&&I.delayedLeave(),v[No]=void 0)};T?R(T,[v,V]):V()},leave(v,T){const Q=String(t.key);if(v[No]&&v[No](!0),n.isUnmounting)return T();D(f,[v]);let P=!1;const N=v[Gi]=V=>{P||(P=!0,T(),V?D(_,[v]):D(p,[v]),v[Gi]=void 0,A[Q]===t&&delete A[Q])};A[Q]=t,d?R(d,[v,N]):N()},clone(v){return Ac(v,e,n,i)}};return I}function Rl(t){if(ol(t))return t=ss(t),t.children=null,t}function jd(t){return ol(t)?t.children?t.children[0]:void 0:t}function Cc(t,e){t.shapeFlag&6&&t.component?Cc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cp(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&s++,i=i.concat(Cp(o.children,e,a))):(e||o.type!==Ln)&&i.push(a!=null?ss(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const Kr=t=>!!t.type.__asyncLoader,ol=t=>t.type.__isKeepAlive;function Y_(t,e){Rp(t,"a",e)}function j_(t,e){Rp(t,"da",e)}function Rp(t,e,n=Kt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(al(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ol(s.parent.vnode)&&K_(i,e,n,s),s=s.parent}}function K_(t,e,n,i){const s=al(e,t,i,!0);ll(()=>{Uu(i[e],s)},n)}function al(t,e,n=Kt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ns();const a=_o(n),l=Pn(e,n,t,o);return a(),Fs(),l});return i?s.unshift(r):s.push(r),r}}const Ri=t=>(e,n=Kt)=>(!dl||t==="sp")&&al(t,(...i)=>e(...i),n),Z_=Ri("bm"),go=Ri("m"),J_=Ri("bu"),Q_=Ri("u"),Xu=Ri("bum"),ll=Ri("um"),e0=Ri("sp"),t0=Ri("rtg"),n0=Ri("rtc");function i0(t,e=Kt){al("ec",t,e)}function Rc(t,e,n,i){let s;const r=n;if(Ve(t)||Ut(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r)}else if(xt(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r)}}else s=[];return s}function s0(t,e,n={},i,s){if(zt.isCE||zt.parent&&Kr(zt.parent)&&zt.parent.isCE)return st("slot",n,i);let r=t[e];r&&r._c&&(r._d=!1),$e();const o=r&&Pp(r(n)),a=Hp(Lt,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),a}function Pp(t){return t.some(e=>Da(e)?!(e.type===Ln||e.type===Lt&&!Pp(e.children)):!0)?t:null}const Pc=t=>t?$p(t)?fl(t)||t.proxy:Pc(t.parent):null,Zr=Qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pc(t.parent),$root:t=>Pc(t.root),$emit:t=>t.emit,$options:t=>Dp(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,$u(t.update)}),$nextTick:t=>t.n||(t.n=Ra.bind(t.proxy)),$watch:t=>W_.bind(t)}),Pl=(t,e)=>t!==yt&&!t.__isScriptSetup&&rt(t,e),r0={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Pl(i,e))return o[e]=1,i[e];if(s!==yt&&rt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&rt(c,e))return o[e]=3,r[e];if(n!==yt&&rt(n,e))return o[e]=4,n[e];Lc&&(o[e]=0)}}const u=Zr[e];let f,d;if(u)return e==="$attrs"&&hn(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==yt&&rt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,rt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Pl(s,e)?(s[e]=n,!0):i!==yt&&rt(i,e)?(i[e]=n,!0):rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==yt&&rt(t,o)||Pl(e,o)||(a=r[0])&&rt(a,o)||rt(i,o)||rt(Zr,o)||rt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kd(t){return Ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lc=!0;function o0(t){const e=Dp(t),n=t.proxy,i=t.ctx;Lc=!1,e.beforeCreate&&Zd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:E,unmounted:A,render:D,renderTracked:R,renderTriggered:I,errorCaptured:v,serverPrefetch:T,expose:Q,inheritAttrs:P,components:N,directives:V,filters:ee}=e;if(c&&a0(c,i,null),o)for(const O in o){const de=o[O];Ze(de)&&(i[O]=de.bind(n))}if(s){const O=s.call(n,n);xt(O)&&(t.data=nl(O))}if(Lc=!0,r)for(const O in r){const de=r[O],fe=Ze(de)?de.bind(n,n):Ze(de.get)?de.get.bind(n,n):Rn,ye=!Ze(de)&&Ze(de.set)?de.set.bind(n):Rn,ue=Ct({get:fe,set:ye});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>ue.value,set:he=>ue.value=he})}if(a)for(const O in a)Lp(a[O],i,n,O);if(l){const O=Ze(l)?l.call(n):l;Reflect.ownKeys(O).forEach(de=>{h0(de,O[de])})}u&&Zd(u,t,"c");function G(O,de){Ve(de)?de.forEach(fe=>O(fe.bind(n))):de&&O(de.bind(n))}if(G(Z_,f),G(go,d),G(J_,p),G(Q_,_),G(Y_,x),G(j_,m),G(i0,v),G(n0,R),G(t0,I),G(Xu,y),G(ll,A),G(e0,T),Ve(Q))if(Q.length){const O=t.exposed||(t.exposed={});Q.forEach(de=>{Object.defineProperty(O,de,{get:()=>n[de],set:fe=>n[de]=fe})})}else t.exposed||(t.exposed={});D&&t.render===Rn&&(t.render=D),P!=null&&(t.inheritAttrs=P),N&&(t.components=N),V&&(t.directives=V)}function a0(t,e,n=Rn){Ve(t)&&(t=Dc(t));for(const i in t){const s=t[i];let r;xt(s)?"default"in s?r=ma(s.from||i,s.default,!0):r=ma(s.from||i):r=ma(s),pn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zd(t,e,n){Pn(Ve(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lp(t,e,n,i){const s=i.includes(".")?Ep(n,i):()=>n[i];if(Ut(t)){const r=e[t];Ze(r)&&Zn(s,r)}else if(Ze(t))Zn(s,t.bind(n));else if(xt(t))if(Ve(t))t.forEach(r=>Lp(r,e,n,i));else{const r=Ze(t.handler)?t.handler.bind(n):e[t.handler];Ze(r)&&Zn(s,r,t)}}function Dp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>La(l,c,o,!0)),La(l,e,o)),xt(e)&&r.set(e,l),l}function La(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&La(t,r,n,!0),s&&s.forEach(o=>La(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=l0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const l0={data:Jd,props:Qd,emits:Qd,methods:Xr,computed:Xr,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Xr,directives:Xr,watch:u0,provide:Jd,inject:c0};function Jd(t,e){return e?t?function(){return Qt(Ze(t)?t.call(this,this):t,Ze(e)?e.call(this,this):e)}:e:t}function c0(t,e){return Xr(Dc(t),Dc(e))}function Dc(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Xr(t,e){return t?Qt(Object.create(null),t,e):e}function Qd(t,e){return t?Ve(t)&&Ve(e)?[...new Set([...t,...e])]:Qt(Object.create(null),Kd(t),Kd(e??{})):e}function u0(t,e){if(!t)return e;if(!e)return t;const n=Qt(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function Ip(){return{app:null,config:{isNativeTag:Hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let d0=0;function f0(t,e){return function(i,s=null){Ze(i)||(i=Qt({},i)),s!=null&&!xt(s)&&(s=null);const r=Ip(),o=new WeakSet;let a=!1;const l=r.app={_uid:d0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:B0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ze(c.install)?(o.add(c),c.install(l,...u)):Ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=st(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,fl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Jr;Jr=l;try{return c()}finally{Jr=u}}};return l}}let Jr=null;function h0(t,e){if(Kt){let n=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===n&&(n=Kt.provides=Object.create(i)),n[t]=e}}function ma(t,e,n=!1){const i=Kt||zt;if(i||Jr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Jr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ze(e)?e.call(i&&i.proxy):e}}function p0(t,e,n,i=!1){const s={},r={};Aa(r,ul,1),t.propsDefaults=Object.create(null),Up(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:M_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function m0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ut(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(sl(t.emitsOptions,d))continue;const p=e[d];if(l)if(rt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=pr(d);s[_]=Ic(l,a,_,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Up(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=Sr(f))===f||!rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ic(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!rt(e,f))&&(delete r[f],c=!0)}c&&bi(t,"set","$attrs")}function Up(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;s&&rt(s,u=pr(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:sl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ut(n),c=a||yt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ic(s,l,f,c[f],t,!rt(c,f))}}return o}function Ic(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=_o(s);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Sr(n))&&(i=!0))}return i}function Np(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ze(t)){const u=f=>{l=!0;const[d,p]=Np(f,e,!0);Qt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return xt(t)&&i.set(t,rr),rr;if(Ve(r))for(let u=0;u<r.length;u++){const f=pr(r[u]);ef(f)&&(o[f]=yt)}else if(r)for(const u in r){const f=pr(u);if(ef(f)){const d=r[u],p=o[f]=Ve(d)||Ze(d)?{type:d}:Qt({},d);if(p){const _=sf(Boolean,p.type),x=sf(String,p.type);p[0]=_>-1,p[1]=x<0||_<x,(_>-1||rt(p,"default"))&&a.push(f)}}}const c=[o,a];return xt(t)&&i.set(t,c),c}function ef(t){return t[0]!=="$"&&!jr(t)}function tf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function nf(t,e){return tf(t)===tf(e)}function sf(t,e){return Ve(e)?e.findIndex(n=>nf(n,t)):Ze(e)&&nf(e,t)?0:-1}const Fp=t=>t[0]==="_"||t==="$stable",qu=t=>Ve(t)?t.map(Yn):[Yn(t)],g0=(t,e,n)=>{if(e._n)return e;const i=Cn((...s)=>qu(e(...s)),n);return i._c=!1,i},Op=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Fp(s))continue;const r=t[s];if(Ze(r))e[s]=g0(s,r,i);else if(r!=null){const o=qu(r);e[s]=()=>o}}},Bp=(t,e)=>{const n=qu(e);t.slots.default=()=>n},_0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ut(e),Aa(e,"_",n)):Op(e,t.slots={})}else t.slots={},e&&Bp(t,e);Aa(t.slots,ul,1)},v0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Qt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Op(e,s)),o=e}else e&&(Bp(t,e),o={default:1});if(r)for(const a in s)!Fp(a)&&o[a]==null&&delete s[a]};function Uc(t,e,n,i,s=!1){if(Ve(t)){t.forEach((d,p)=>Uc(d,e&&(Ve(e)?e[p]:e),n,i,s));return}if(Kr(i)&&!s)return;const r=i.shapeFlag&4?fl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ut(c)?(u[c]=null,rt(f,c)&&(f[c]=null)):pn(c)&&(c.value=null)),Ze(l))es(l,a,12,[o,u]);else{const d=Ut(l),p=pn(l);if(d||p){const _=()=>{if(t.f){const x=d?rt(f,l)?f[l]:u[l]:l.value;s?Ve(x)&&Uu(x,r):Ve(x)?x.includes(r)||x.push(r):d?(u[l]=[r],rt(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,rt(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,cn(_,n)):_()}}}const cn=V_;function x0(t){return b0(t)}function b0(t,e){const n=Qh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Rn,insertStaticContent:_}=t,x=(M,C,k,U=null,F=null,Y=null,S=void 0,ae=null,oe=!!C.dynamicChildren)=>{if(M===C)return;M&&!Ss(M,C)&&(U=ge(M),he(M,F,Y,!0),M=null),C.patchFlag===-2&&(oe=!1,C.dynamicChildren=null);const{type:ie,ref:Z,shapeFlag:w}=C;switch(ie){case cl:m(M,C,k,U);break;case Ln:h(M,C,k,U);break;case ga:M==null&&y(C,k,U,S);break;case Lt:N(M,C,k,U,F,Y,S,ae,oe);break;default:w&1?D(M,C,k,U,F,Y,S,ae,oe):w&6?V(M,C,k,U,F,Y,S,ae,oe):(w&64||w&128)&&ie.process(M,C,k,U,F,Y,S,ae,oe,re)}Z!=null&&F&&Uc(Z,M&&M.ref,Y,C||M,!C)},m=(M,C,k,U)=>{if(M==null)i(C.el=a(C.children),k,U);else{const F=C.el=M.el;C.children!==M.children&&c(F,C.children)}},h=(M,C,k,U)=>{M==null?i(C.el=l(C.children||""),k,U):C.el=M.el},y=(M,C,k,U)=>{[M.el,M.anchor]=_(M.children,C,k,U,M.el,M.anchor)},E=({el:M,anchor:C},k,U)=>{let F;for(;M&&M!==C;)F=d(M),i(M,k,U),M=F;i(C,k,U)},A=({el:M,anchor:C})=>{let k;for(;M&&M!==C;)k=d(M),s(M),M=k;s(C)},D=(M,C,k,U,F,Y,S,ae,oe)=>{C.type==="svg"?S="svg":C.type==="math"&&(S="mathml"),M==null?R(C,k,U,F,Y,S,ae,oe):T(M,C,F,Y,S,ae,oe)},R=(M,C,k,U,F,Y,S,ae)=>{let oe,ie;const{props:Z,shapeFlag:w,transition:g,dirs:L}=M;if(oe=M.el=o(M.type,Y,Z&&Z.is,Z),w&8?u(oe,M.children):w&16&&v(M.children,oe,null,U,F,Ll(M,Y),S,ae),L&&cs(M,null,U,"created"),I(oe,M,M.scopeId,S,U),Z){for(const K in Z)K!=="value"&&!jr(K)&&r(oe,K,null,Z[K],Y,M.children,U,F,se);"value"in Z&&r(oe,"value",null,Z.value,Y),(ie=Z.onVnodeBeforeMount)&&Wn(ie,U,M)}L&&cs(M,null,U,"beforeMount");const $=w0(F,g);$&&g.beforeEnter(oe),i(oe,C,k),((ie=Z&&Z.onVnodeMounted)||$||L)&&cn(()=>{ie&&Wn(ie,U,M),$&&g.enter(oe),L&&cs(M,null,U,"mounted")},F)},I=(M,C,k,U,F)=>{if(k&&p(M,k),U)for(let Y=0;Y<U.length;Y++)p(M,U[Y]);if(F){let Y=F.subTree;if(C===Y){const S=F.vnode;I(M,S,S.scopeId,S.slotScopeIds,F.parent)}}},v=(M,C,k,U,F,Y,S,ae,oe=0)=>{for(let ie=oe;ie<M.length;ie++){const Z=M[ie]=ae?Wi(M[ie]):Yn(M[ie]);x(null,Z,C,k,U,F,Y,S,ae)}},T=(M,C,k,U,F,Y,S)=>{const ae=C.el=M.el;let{patchFlag:oe,dynamicChildren:ie,dirs:Z}=C;oe|=M.patchFlag&16;const w=M.props||yt,g=C.props||yt;let L;if(k&&us(k,!1),(L=g.onVnodeBeforeUpdate)&&Wn(L,k,C,M),Z&&cs(C,M,k,"beforeUpdate"),k&&us(k,!0),ie?Q(M.dynamicChildren,ie,ae,k,U,Ll(C,F),Y):S||de(M,C,ae,null,k,U,Ll(C,F),Y,!1),oe>0){if(oe&16)P(ae,C,w,g,k,U,F);else if(oe&2&&w.class!==g.class&&r(ae,"class",null,g.class,F),oe&4&&r(ae,"style",w.style,g.style,F),oe&8){const $=C.dynamicProps;for(let K=0;K<$.length;K++){const q=$[K],be=w[q],pe=g[q];(pe!==be||q==="value")&&r(ae,q,be,pe,F,M.children,k,U,se)}}oe&1&&M.children!==C.children&&u(ae,C.children)}else!S&&ie==null&&P(ae,C,w,g,k,U,F);((L=g.onVnodeUpdated)||Z)&&cn(()=>{L&&Wn(L,k,C,M),Z&&cs(C,M,k,"updated")},U)},Q=(M,C,k,U,F,Y,S)=>{for(let ae=0;ae<C.length;ae++){const oe=M[ae],ie=C[ae],Z=oe.el&&(oe.type===Lt||!Ss(oe,ie)||oe.shapeFlag&70)?f(oe.el):k;x(oe,ie,Z,null,U,F,Y,S,!0)}},P=(M,C,k,U,F,Y,S)=>{if(k!==U){if(k!==yt)for(const ae in k)!jr(ae)&&!(ae in U)&&r(M,ae,k[ae],null,S,C.children,F,Y,se);for(const ae in U){if(jr(ae))continue;const oe=U[ae],ie=k[ae];oe!==ie&&ae!=="value"&&r(M,ae,ie,oe,S,C.children,F,Y,se)}"value"in U&&r(M,"value",k.value,U.value,S)}},N=(M,C,k,U,F,Y,S,ae,oe)=>{const ie=C.el=M?M.el:a(""),Z=C.anchor=M?M.anchor:a("");let{patchFlag:w,dynamicChildren:g,slotScopeIds:L}=C;L&&(ae=ae?ae.concat(L):L),M==null?(i(ie,k,U),i(Z,k,U),v(C.children||[],k,Z,F,Y,S,ae,oe)):w>0&&w&64&&g&&M.dynamicChildren?(Q(M.dynamicChildren,g,k,F,Y,S,ae),(C.key!=null||F&&C===F.subTree)&&kp(M,C,!0)):de(M,C,k,Z,F,Y,S,ae,oe)},V=(M,C,k,U,F,Y,S,ae,oe)=>{C.slotScopeIds=ae,M==null?C.shapeFlag&512?F.ctx.activate(C,k,U,S,oe):ee(C,k,U,F,Y,S,oe):X(M,C,oe)},ee=(M,C,k,U,F,Y,S)=>{const ae=M.component=P0(M,U,F);if(ol(M)&&(ae.ctx.renderer=re),D0(ae),ae.asyncDep){if(F&&F.registerDep(ae,G),!M.el){const oe=ae.subTree=st(Ln);h(null,oe,C,k)}}else G(ae,M,C,k,F,Y,S)},X=(M,C,k)=>{const U=C.component=M.component;if(O_(M,C,k))if(U.asyncDep&&!U.asyncResolved){O(U,C,k);return}else U.next=C,L_(U.update),U.effect.dirty=!0,U.update();else C.el=M.el,U.vnode=C},G=(M,C,k,U,F,Y,S)=>{const ae=()=>{if(M.isMounted){let{next:Z,bu:w,u:g,parent:L,vnode:$}=M;{const Pe=zp(M);if(Pe){Z&&(Z.el=$.el,O(M,Z,S)),Pe.asyncDep.then(()=>{M.isUnmounted||ae()});return}}let K=Z,q;us(M,!1),Z?(Z.el=$.el,O(M,Z,S)):Z=$,w&&ha(w),(q=Z.props&&Z.props.onVnodeBeforeUpdate)&&Wn(q,L,Z,$),us(M,!0);const be=qd(M),pe=M.subTree;M.subTree=be,x(pe,be,f(pe.el),ge(pe),M,F,Y),Z.el=be.el,K===null&&B_(M,be.el),g&&cn(g,F),(q=Z.props&&Z.props.onVnodeUpdated)&&cn(()=>Wn(q,L,Z,$),F)}else{let Z;const{el:w,props:g}=C,{bm:L,m:$,parent:K}=M,q=Kr(C);us(M,!1),L&&ha(L),!q&&(Z=g&&g.onVnodeBeforeMount)&&Wn(Z,K,C),us(M,!0);{const be=M.subTree=qd(M);x(null,be,k,U,M,F,Y),C.el=be.el}if($&&cn($,F),!q&&(Z=g&&g.onVnodeMounted)){const be=C;cn(()=>Wn(Z,K,be),F)}(C.shapeFlag&256||K&&Kr(K.vnode)&&K.vnode.shapeFlag&256)&&M.a&&cn(M.a,F),M.isMounted=!0,C=k=U=null}},oe=M.effect=new Fu(ae,Rn,()=>$u(ie),M.scope),ie=M.update=()=>{oe.dirty&&oe.run()};ie.id=M.uid,us(M,!0),ie()},O=(M,C,k)=>{C.component=M;const U=M.vnode.props;M.vnode=C,M.next=null,m0(M,C.props,U,k),v0(M,C.children,k),Ns(),Xd(M),Fs()},de=(M,C,k,U,F,Y,S,ae,oe=!1)=>{const ie=M&&M.children,Z=M?M.shapeFlag:0,w=C.children,{patchFlag:g,shapeFlag:L}=C;if(g>0){if(g&128){ye(ie,w,k,U,F,Y,S,ae,oe);return}else if(g&256){fe(ie,w,k,U,F,Y,S,ae,oe);return}}L&8?(Z&16&&se(ie,F,Y),w!==ie&&u(k,w)):Z&16?L&16?ye(ie,w,k,U,F,Y,S,ae,oe):se(ie,F,Y,!0):(Z&8&&u(k,""),L&16&&v(w,k,U,F,Y,S,ae,oe))},fe=(M,C,k,U,F,Y,S,ae,oe)=>{M=M||rr,C=C||rr;const ie=M.length,Z=C.length,w=Math.min(ie,Z);let g;for(g=0;g<w;g++){const L=C[g]=oe?Wi(C[g]):Yn(C[g]);x(M[g],L,k,null,F,Y,S,ae,oe)}ie>Z?se(M,F,Y,!0,!1,w):v(C,k,U,F,Y,S,ae,oe,w)},ye=(M,C,k,U,F,Y,S,ae,oe)=>{let ie=0;const Z=C.length;let w=M.length-1,g=Z-1;for(;ie<=w&&ie<=g;){const L=M[ie],$=C[ie]=oe?Wi(C[ie]):Yn(C[ie]);if(Ss(L,$))x(L,$,k,null,F,Y,S,ae,oe);else break;ie++}for(;ie<=w&&ie<=g;){const L=M[w],$=C[g]=oe?Wi(C[g]):Yn(C[g]);if(Ss(L,$))x(L,$,k,null,F,Y,S,ae,oe);else break;w--,g--}if(ie>w){if(ie<=g){const L=g+1,$=L<Z?C[L].el:U;for(;ie<=g;)x(null,C[ie]=oe?Wi(C[ie]):Yn(C[ie]),k,$,F,Y,S,ae,oe),ie++}}else if(ie>g)for(;ie<=w;)he(M[ie],F,Y,!0),ie++;else{const L=ie,$=ie,K=new Map;for(ie=$;ie<=g;ie++){const Me=C[ie]=oe?Wi(C[ie]):Yn(C[ie]);Me.key!=null&&K.set(Me.key,ie)}let q,be=0;const pe=g-$+1;let Pe=!1,ze=0;const me=new Array(pe);for(ie=0;ie<pe;ie++)me[ie]=0;for(ie=L;ie<=w;ie++){const Me=M[ie];if(be>=pe){he(Me,F,Y,!0);continue}let Ce;if(Me.key!=null)Ce=K.get(Me.key);else for(q=$;q<=g;q++)if(me[q-$]===0&&Ss(Me,C[q])){Ce=q;break}Ce===void 0?he(Me,F,Y,!0):(me[Ce-$]=ie+1,Ce>=ze?ze=Ce:Pe=!0,x(Me,C[Ce],k,null,F,Y,S,ae,oe),be++)}const xe=Pe?y0(me):rr;for(q=xe.length-1,ie=pe-1;ie>=0;ie--){const Me=$+ie,Ce=C[Me],Re=Me+1<Z?C[Me+1].el:U;me[ie]===0?x(null,Ce,k,Re,F,Y,S,ae,oe):Pe&&(q<0||ie!==xe[q]?ue(Ce,k,Re,2):q--)}}},ue=(M,C,k,U,F=null)=>{const{el:Y,type:S,transition:ae,children:oe,shapeFlag:ie}=M;if(ie&6){ue(M.component.subTree,C,k,U);return}if(ie&128){M.suspense.move(C,k,U);return}if(ie&64){S.move(M,C,k,re);return}if(S===Lt){i(Y,C,k);for(let w=0;w<oe.length;w++)ue(oe[w],C,k,U);i(M.anchor,C,k);return}if(S===ga){E(M,C,k);return}if(U!==2&&ie&1&&ae)if(U===0)ae.beforeEnter(Y),i(Y,C,k),cn(()=>ae.enter(Y),F);else{const{leave:w,delayLeave:g,afterLeave:L}=ae,$=()=>i(Y,C,k),K=()=>{w(Y,()=>{$(),L&&L()})};g?g(Y,$,K):K()}else i(Y,C,k)},he=(M,C,k,U=!1,F=!1)=>{const{type:Y,props:S,ref:ae,children:oe,dynamicChildren:ie,shapeFlag:Z,patchFlag:w,dirs:g}=M;if(ae!=null&&Uc(ae,null,k,M,!0),Z&256){C.ctx.deactivate(M);return}const L=Z&1&&g,$=!Kr(M);let K;if($&&(K=S&&S.onVnodeBeforeUnmount)&&Wn(K,C,M),Z&6)it(M.component,k,U);else{if(Z&128){M.suspense.unmount(k,U);return}L&&cs(M,null,C,"beforeUnmount"),Z&64?M.type.remove(M,C,k,F,re,U):ie&&(Y!==Lt||w>0&&w&64)?se(ie,C,k,!1,!0):(Y===Lt&&w&384||!F&&Z&16)&&se(oe,C,k),U&&Fe(M)}($&&(K=S&&S.onVnodeUnmounted)||L)&&cn(()=>{K&&Wn(K,C,M),L&&cs(M,null,C,"unmounted")},k)},Fe=M=>{const{type:C,el:k,anchor:U,transition:F}=M;if(C===Lt){at(k,U);return}if(C===ga){A(M);return}const Y=()=>{s(k),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(M.shapeFlag&1&&F&&!F.persisted){const{leave:S,delayLeave:ae}=F,oe=()=>S(k,Y);ae?ae(M.el,Y,oe):oe()}else Y()},at=(M,C)=>{let k;for(;M!==C;)k=d(M),s(M),M=k;s(C)},it=(M,C,k)=>{const{bum:U,scope:F,update:Y,subTree:S,um:ae}=M;U&&ha(U),F.stop(),Y&&(Y.active=!1,he(S,M,C,k)),ae&&cn(ae,C),cn(()=>{M.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},se=(M,C,k,U=!1,F=!1,Y=0)=>{for(let S=Y;S<M.length;S++)he(M[S],C,k,U,F)},ge=M=>M.shapeFlag&6?ge(M.component.subTree):M.shapeFlag&128?M.suspense.next():d(M.anchor||M.el);let ve=!1;const He=(M,C,k)=>{M==null?C._vnode&&he(C._vnode,null,null,!0):x(C._vnode||null,M,C,null,null,null,k),ve||(ve=!0,Xd(),wp(),ve=!1),C._vnode=M},re={p:x,um:he,m:ue,r:Fe,mt:ee,mc:v,pc:de,pbc:Q,n:ge,o:t};return{render:He,hydrate:void 0,createApp:f0(He)}}function Ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function w0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kp(t,e,n=!1){const i=t.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wi(s[r]),a.el=o.el),n||kp(o,a)),a.type===cl&&(a.el=o.el)}}function y0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function zp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zp(e)}const S0=t=>t.__isTeleport,Lt=Symbol.for("v-fgt"),cl=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),Qr=[];let kn=null;function $e(t=!1){Qr.push(kn=t?null:[])}function M0(){Qr.pop(),kn=Qr[Qr.length-1]||null}let ro=1;function rf(t){ro+=t}function Vp(t){return t.dynamicChildren=ro>0?kn||rr:null,M0(),ro>0&&kn&&kn.push(t),t}function qe(t,e,n,i,s,r){return Vp(z(t,e,n,i,s,r,!0))}function Hp(t,e,n,i,s){return Vp(st(t,e,n,i,s,!0))}function Da(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const ul="__vInternal",Gp=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ut(t)||pn(t)||Ze(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,i=0,s=null,r=t===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gp(e),ref:e&&_a(e),scopeId:rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:zt};return a?(Yu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ut(n)?8:16),ro>0&&!o&&kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kn.push(l),l}const st=E0;function E0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===k_)&&(t=Ln),Da(t)){const a=ss(t,e,!0);return n&&Yu(a,n),ro>0&&!r&&kn&&(a.shapeFlag&6?kn[kn.indexOf(t)]=a:kn.push(a)),a.patchFlag|=-2,a}if(F0(t)&&(t=t.__vccOpts),e){e=T0(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=It(a)),xt(l)&&(mp(l)&&!Ve(l)&&(l=Qt({},l)),e.style=_i(l))}const o=Ut(t)?1:z_(t)?128:S0(t)?64:xt(t)?4:Ze(t)?2:0;return z(t,e,n,i,s,o,r,!0)}function T0(t){return t?mp(t)||ul in t?Qt({},t):t:null}function ss(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?A0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gp(a),ref:e&&e.ref?n&&s?Ve(s)?s.concat(_a(e)):[s,_a(e)]:_a(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ss(t.ssContent),ssFallback:t.ssFallback&&ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mi(t=" ",e=0){return st(cl,null,t,e)}function Wp(t,e){const n=st(ga,null,t);return n.staticCount=e,n}function Dt(t="",e=!1){return e?($e(),Hp(Ln,null,t)):st(Ln,null,t)}function Yn(t){return t==null||typeof t=="boolean"?st(Ln):Ve(t)?st(Lt,null,t.slice()):typeof t=="object"?Wi(t):st(cl,null,String(t))}function Wi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ss(t)}function Yu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ve(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Yu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ul in e)?e._ctx=zt:s===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[Mi(e)]):n=8);t.children=e,t.shapeFlag|=n}function A0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=It([e.class,i.class]));else if(s==="style")e.style=_i([e.style,i.style]);else if(Za(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Wn(t,e,n,i=null){Pn(t,e,7,[n,i])}const C0=Ip();let R0=0;function P0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||C0,r={uid:R0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(i,s),emitsOptions:Sp(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=U_.bind(null,r),t.ce&&t.ce(r),r}let Kt=null;const L0=()=>Kt||zt;let Ia,Nc;{const t=Qh(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ia=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),Nc=e("__VUE_SSR_SETTERS__",n=>dl=n)}const _o=t=>{const e=Kt;return Ia(t),t.scope.on(),()=>{t.scope.off(),Ia(e)}},of=()=>{Kt&&Kt.scope.off(),Ia(null)};function $p(t){return t.vnode.shapeFlag&4}let dl=!1;function D0(t,e=!1){e&&Nc(e);const{props:n,children:i}=t.vnode,s=$p(t);p0(t,n,s,e),_0(t,i);const r=s?I0(t,e):void 0;return e&&Nc(!1),r}function I0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hu(new Proxy(t.ctx,r0));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?N0(t):null,r=_o(t);Ns();const o=es(i,t,0,[t.props,s]);if(Fs(),r(),jh(o)){if(o.then(of,of),e)return o.then(a=>{af(t,a)}).catch(a=>{il(a,t,0)});t.asyncDep=o}else af(t,o)}else Xp(t)}function af(t,e,n){Ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=vp(e)),Xp(t)}function Xp(t,e,n){const i=t.type;t.render||(t.render=i.render||Rn);{const s=_o(t);Ns();try{o0(t)}finally{Fs(),s()}}}function U0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return hn(t,"get","$attrs"),e[n]}}))}function N0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return U0(t)},slots:t.slots,emit:t.emit,expose:e}}function fl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vp(Hu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zr)return Zr[n](t)},has(e,n){return n in e||n in Zr}}))}function F0(t){return Ze(t)&&"__vccOpts"in t}const Ct=(t,e)=>E_(t,e,dl);function O0(t,e,n){const i=arguments.length;return i===2?xt(e)&&!Ve(e)?Da(e)?st(t,null,[e]):st(t,e):st(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Da(n)&&(n=[n]),st(t,e,n))}const B0="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const k0="http://www.w3.org/2000/svg",z0="http://www.w3.org/1998/Math/MathML",$i=typeof document<"u"?document:null,lf=$i&&$i.createElement("template"),V0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?$i.createElementNS(k0,t):e==="mathml"?$i.createElementNS(z0,t):$i.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>$i.createTextNode(t),createComment:t=>$i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{lf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=lf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ii="transition",Dr="animation",oo=Symbol("_vtc"),ts=(t,{slots:e})=>O0(q_,H0(t),e);ts.displayName="Transition";const qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ts.props=Qt({},Tp,qp);const ds=(t,e=[])=>{Ve(t)?t.forEach(n=>n(...e)):t&&t(...e)},cf=t=>t?Ve(t)?t.some(e=>e.length>1):t.length>1:!1;function H0(t){const e={};for(const N in t)N in qp||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=G0(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:E,onLeave:A,onLeaveCancelled:D,onBeforeAppear:R=h,onAppear:I=y,onAppearCancelled:v=E}=e,T=(N,V,ee)=>{fs(N,V?u:a),fs(N,V?c:o),ee&&ee()},Q=(N,V)=>{N._isLeaving=!1,fs(N,f),fs(N,p),fs(N,d),V&&V()},P=N=>(V,ee)=>{const X=N?I:y,G=()=>T(V,N,ee);ds(X,[V,G]),uf(()=>{fs(V,N?l:r),Ui(V,N?u:a),cf(X)||df(V,i,x,G)})};return Qt(e,{onBeforeEnter(N){ds(h,[N]),Ui(N,r),Ui(N,o)},onBeforeAppear(N){ds(R,[N]),Ui(N,l),Ui(N,c)},onEnter:P(!1),onAppear:P(!0),onLeave(N,V){N._isLeaving=!0;const ee=()=>Q(N,V);Ui(N,f),X0(),Ui(N,d),uf(()=>{N._isLeaving&&(fs(N,f),Ui(N,p),cf(A)||df(N,i,m,ee))}),ds(A,[N,ee])},onEnterCancelled(N){T(N,!1),ds(E,[N])},onAppearCancelled(N){T(N,!0),ds(v,[N])},onLeaveCancelled(N){Q(N),ds(D,[N])}})}function G0(t){if(t==null)return null;if(xt(t))return[Dl(t.enter),Dl(t.leave)];{const e=Dl(t);return[e,e]}}function Dl(t){return qg(t)}function Ui(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[oo]||(t[oo]=new Set)).add(e)}function fs(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[oo];n&&(n.delete(e),n.size||(t[oo]=void 0))}function uf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let W0=0;function df(t,e,n,i){const s=t._endId=++W0,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=$0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function $0(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${Ii}Delay`),r=i(`${Ii}Duration`),o=ff(s,r),a=i(`${Dr}Delay`),l=i(`${Dr}Duration`),c=ff(a,l);let u=null,f=0,d=0;e===Ii?o>0&&(u=Ii,f=o,d=r.length):e===Dr?c>0&&(u=Dr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Ii:Dr:null,d=u?u===Ii?r.length:l.length:0);const p=u===Ii&&/\b(transform|all)(,|$)/.test(i(`${Ii}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function ff(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>hf(n)+hf(t[i])))}function hf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function X0(){return document.body.offsetHeight}function q0(t,e,n){const i=t[oo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ua=Symbol("_vod"),Yp=Symbol("_vsh"),Y0={beforeMount(t,{value:e},{transition:n}){t[Ua]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ir(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ir(t,!0),i.enter(t)):i.leave(t,()=>{Ir(t,!1)}):Ir(t,e))},beforeUnmount(t,{value:e}){Ir(t,e)}};function Ir(t,e){t.style.display=e?t[Ua]:"none",t[Yp]=!e}const j0=Symbol(""),K0=/(^|;)\s*display\s*:/;function Z0(t,e,n){const i=t.style,s=Ut(n);let r=!1;if(n&&!s){if(e)if(Ut(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&va(i,a,"")}else for(const o in e)n[o]==null&&va(i,o,"");for(const o in n)o==="display"&&(r=!0),va(i,o,n[o])}else if(s){if(e!==n){const o=i[j0];o&&(n+=";"+o),i.cssText=n,r=K0.test(n)}}else e&&t.removeAttribute("style");Ua in t&&(t[Ua]=r?i.display:"",t[Yp]&&(i.display="none"))}const pf=/\s*!important$/;function va(t,e,n){if(Ve(n))n.forEach(i=>va(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=J0(t,e);pf.test(n)?t.setProperty(Sr(i),n.replace(pf,""),"important"):t[i]=n}}const mf=["Webkit","Moz","ms"],Il={};function J0(t,e){const n=Il[e];if(n)return n;let i=pr(e);if(i!=="filter"&&i in t)return Il[e]=i;i=Jh(i);for(let s=0;s<mf.length;s++){const r=mf[s]+i;if(r in t)return Il[e]=r}return e}const gf="http://www.w3.org/1999/xlink";function Q0(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n);else{const r=Qg(e);n==null||r&&!ep(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ev(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ep(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ms(t,e,n,i){t.addEventListener(e,n,i)}function tv(t,e,n,i){t.removeEventListener(e,n,i)}const _f=Symbol("_vei");function nv(t,e,n,i,s=null){const r=t[_f]||(t[_f]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=iv(e);if(i){const c=r[e]=ov(i,s);Ms(t,a,c,l)}else o&&(tv(t,a,o,l),r[e]=void 0)}}const vf=/(?:Once|Passive|Capture)$/;function iv(t){let e;if(vf.test(t)){e={};let i;for(;i=t.match(vf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let Ul=0;const sv=Promise.resolve(),rv=()=>Ul||(sv.then(()=>Ul=0),Ul=Date.now());function ov(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Pn(av(i,n.value),e,5,[i])};return n.value=t,n.attached=rv(),n}function av(t,e){if(Ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const xf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lv=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?q0(t,i,c):e==="style"?Z0(t,n,i):Za(e)?Iu(e)||nv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(t,e,i,c))?ev(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Q0(t,e,i,c))};function cv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&xf(e)&&Ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xf(e)&&Ut(n)?!1:e in t}const Na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ve(e)?n=>ha(e,n):e};function uv(t){t.target.composing=!0}function bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cr=Symbol("_assign"),Nl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[cr]=Na(s);const r=i||s.props&&s.props.type==="number";Ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=to(a)),t[cr](a)}),n&&Ms(t,"change",()=>{t.value=t.value.trim()}),e||(Ms(t,"compositionstart",uv),Ms(t,"compositionend",bf),Ms(t,"change",bf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[cr]=Na(r),t.composing)return;const o=s||t.type==="number"?to(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},dv={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Ja(e);Ms(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?to(Fa(o)):Fa(o));t[cr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Ra(()=>{t._assigning=!1})}),t[cr]=Na(i)},mounted(t,{value:e,modifiers:{number:n}}){wf(t,e,n)},beforeUpdate(t,e,n){t[cr]=Na(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||wf(t,e,n)}};function wf(t,e,n){const i=t.multiple,s=Ve(e);if(!(i&&!s&&!Ja(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=Fa(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?to(l):l):a.selected=t_(e,l)>-1}else a.selected=e.has(l);else if(el(Fa(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fa(t){return"_value"in t?t._value:t.value}const fv=["ctrl","shift","alt","meta"],hv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fv.some(n=>t[`${n}Key`]&&!e.includes(n))},pv=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=hv[e[o]];if(a&&a(s,e))return}return t(s,...r)})},mv=Qt({patchProp:lv},V0);let yf;function gv(){return yf||(yf=x0(mv))}const _v=(...t)=>{const e=gv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=xv(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,vv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xv(t){return Ut(t)?document.querySelector(t):t}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const bv=Symbol();var Sf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sf||(Sf={}));function wv(){const t=n_(!0),e=t.run(()=>et({}));let n=[],i=[];const s=Hu({install(r){s._a=r,r.provide(bv,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const li=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},yv={class:"section-title"},Sv={class:"section-body"},Mv={__name:"SidebarSection",props:{title:{type:String,required:!0},icon:{type:String,default:"fas fa-circle"},defaultOpen:{type:Boolean,default:!0}},setup(t){const n=et(t.defaultOpen),i=()=>{n.value=!n.value};return(s,r)=>($e(),qe("div",{class:It(["section",{collapsed:!n.value}])},[z("button",{class:It(["section-header",n.value?"section-header-close":"section-header-open"]),onClick:i},[z("div",yv,[z("i",{class:It(t.icon)},null,2),z("span",null,un(t.title),1)]),z("i",{class:It(["toggle-icon fas",n.value?"fa-chevron-up":"fa-chevron-down"])},null,2)],2),st(ts,{name:"collapse"},{default:Cn(()=>[$r(z("div",Sv,[s0(s.$slots,"default",{},void 0,!0)],512),[[Y0,n.value]])]),_:3})],2))}},Ur=li(Mv,[["__scopeId","data-v-2d285c84"]]);/*!
* sweetalert2 v11.26.18
* Released under the MIT License.
*/function jp(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function Ev(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Mf(t,e){return t.get(jp(t,e))}function Tv(t,e,n){Ev(t,e),e.set(t,n)}function Av(t,e,n){return t.set(jp(t,e),n),n}const Cv=100,Oe={},Rv=()=>{Oe.previousActiveElement instanceof HTMLElement?(Oe.previousActiveElement.focus(),Oe.previousActiveElement=null):document.body&&document.body.focus()},Pv=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Oe.restoreFocusTimeout=setTimeout(()=>{Rv(),e()},Cv),window.scrollTo(n,i)}),Kp="swal2-",Lv=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],le=Lv.reduce((t,e)=>(t[e]=Kp+e,t),{}),Dv=["success","warning","info","question","error"],Oa=Dv.reduce((t,e)=>(t[e]=Kp+e,t),{}),Zp="SweetAlert2:",ju=t=>t.charAt(0).toUpperCase()+t.slice(1),sn=t=>{console.warn(`${Zp} ${typeof t=="object"?t.join(" "):t}`)},Os=t=>{console.error(`${Zp} ${t}`)},Ef=[],Iv=t=>{Ef.includes(t)||(Ef.push(t),sn(t))},Jp=(t,e=null)=>{Iv(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},hl=t=>typeof t=="function"?t():t,Ku=t=>t&&typeof t.toPromise=="function",vo=t=>Ku(t)?t.toPromise():Promise.resolve(t),Zu=t=>t&&Promise.resolve(t)===t,rn=()=>document.body.querySelector(`.${le.container}`),xo=t=>{const e=rn();return e?e.querySelector(t):null},yn=t=>xo(`.${t}`),ft=()=>yn(le.popup),Mr=()=>yn(le.icon),Uv=()=>yn(le["icon-content"]),Qp=()=>yn(le.title),Ju=()=>yn(le["html-container"]),em=()=>yn(le.image),Qu=()=>yn(le["progress-steps"]),pl=()=>yn(le["validation-message"]),ii=()=>xo(`.${le.actions} .${le.confirm}`),Er=()=>xo(`.${le.actions} .${le.cancel}`),Bs=()=>xo(`.${le.actions} .${le.deny}`),Nv=()=>yn(le["input-label"]),Tr=()=>xo(`.${le.loader}`),bo=()=>yn(le.actions),tm=()=>yn(le.footer),ml=()=>yn(le["timer-progress-bar"]),ed=()=>yn(le.close),Fv=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,td=()=>{const t=ft();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Fv),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>dn(r))},nd=()=>wi(document.body,le.shown)&&!wi(document.body,le["toast-shown"])&&!wi(document.body,le["no-backdrop"]),gl=()=>{const t=ft();return t?wi(t,le.toast):!1},Ov=()=>{const t=ft();return t?t.hasAttribute("data-loading"):!1},Sn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},wi=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Bv=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(le).includes(n)&&!Object.values(Oa).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},wn=(t,e,n)=>{if(Bv(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){sn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}dt(t,i)}},_l=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${le.popup} > .${le[e]}`);case"checkbox":return t.querySelector(`.${le.popup} > .${le.checkbox} input`);case"radio":return t.querySelector(`.${le.popup} > .${le.radio} input:checked`)||t.querySelector(`.${le.popup} > .${le.radio} input:first-child`);case"range":return t.querySelector(`.${le.popup} > .${le.range} input`);default:return t.querySelector(`.${le.popup} > .${le.input}`)}},nm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},im=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},dt=(t,e)=>{im(t,e,!0)},Dn=(t,e)=>{im(t,e,!1)},Yi=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&wi(s,e))return s}},Ds=(t,e,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||parseInt(`${n}`)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},Vt=(t,e="flex")=>{t&&(t.style.display=e)},en=t=>{t&&(t.style.display="none")},id=(t,e="block")=>{t&&new MutationObserver(()=>{wo(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Tf=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},wo=(t,e,n="flex")=>{e?Vt(t,n):en(t)},dn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),kv=()=>!dn(ii())&&!dn(Bs())&&!dn(Er()),Fc=t=>t.scrollHeight>t.clientHeight,zv=(t,e)=>{let n=t;for(;n&&n!==e;){if(Fc(n))return!0;n=n.parentElement}return!1},sm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},sd=(t,e=!1)=>{const n=ml();n&&dn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Vv=()=>{const t=ml();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Hv=()=>typeof window>"u"||typeof document>"u",Gv=`
 <div aria-labelledby="${le.title}" aria-describedby="${le["html-container"]}" class="${le.popup}" tabindex="-1">
   <button type="button" class="${le.close}"></button>
   <ul class="${le["progress-steps"]}"></ul>
   <div class="${le.icon}"></div>
   <img class="${le.image}" />
   <h2 class="${le.title}" id="${le.title}"></h2>
   <div class="${le["html-container"]}" id="${le["html-container"]}"></div>
   <input class="${le.input}" id="${le.input}" />
   <input type="file" class="${le.file}" />
   <div class="${le.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${le.select}" id="${le.select}"></select>
   <div class="${le.radio}"></div>
   <label class="${le.checkbox}">
     <input type="checkbox" id="${le.checkbox}" />
     <span class="${le.label}"></span>
   </label>
   <textarea class="${le.textarea}" id="${le.textarea}"></textarea>
   <div class="${le["validation-message"]}" id="${le["validation-message"]}"></div>
   <div class="${le.actions}">
     <div class="${le.loader}"></div>
     <button type="button" class="${le.confirm}"></button>
     <button type="button" class="${le.deny}"></button>
     <button type="button" class="${le.cancel}"></button>
   </div>
   <div class="${le.footer}"></div>
   <div class="${le["timer-progress-bar-container"]}">
     <div class="${le["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Wv=()=>{const t=rn();return t?(t.remove(),Dn([document.documentElement,document.body],[le["no-backdrop"],le["toast-shown"],le["has-column"]]),!0):!1},hs=()=>{Oe.currentInstance&&Oe.currentInstance.resetValidationMessage()},$v=()=>{const t=ft();if(!t)return;const e=Yi(t,le.input),n=Yi(t,le.file),i=t.querySelector(`.${le.range} input`),s=t.querySelector(`.${le.range} output`),r=Yi(t,le.select),o=t.querySelector(`.${le.checkbox} input`),a=Yi(t,le.textarea);e&&(e.oninput=hs),n&&(n.onchange=hs),r&&(r.onchange=hs),o&&(o.onchange=hs),a&&(a.oninput=hs),i&&s&&(i.oninput=()=>{hs(),s.value=i.value},i.onchange=()=>{hs(),s.value=i.value})},Xv=t=>{if(typeof t=="string"){const e=document.querySelector(t);if(!e)throw new Error(`Target element "${t}" not found`);return e}return t},qv=t=>{const e=ft();e&&(e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true"))},Yv=t=>{window.getComputedStyle(t).direction==="rtl"&&(dt(rn(),le.rtl),Oe.isRTL=!0)},jv=t=>{const e=Wv();if(Hv()){Os("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=le.container,e&&dt(n,le["no-transition"]),Sn(n,Gv),n.dataset.swal2Theme=t.theme;const i=Xv(t.target||"body");i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),qv(t),Yv(i),$v()},rd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Kv(t,e):t&&Sn(e,t)},Kv=(t,e)=>{"jquery"in t?Zv(e,t):Sn(e,t.toString())},Zv=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Jv=(t,e)=>{const n=bo(),i=Tr();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?en(n):Vt(n),wn(n,e,"actions"),Qv(n,i,e),Sn(i,e.loaderHtml||""),wn(i,e,"loader"))};function Qv(t,e,n){const i=ii(),s=Bs(),r=Er();!i||!s||!r||(Ol(i,"confirm",n),Ol(s,"deny",n),Ol(r,"cancel",n),ex(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function ex(t,e,n,i){if(!i.buttonsStyling){Dn([t,e,n],le.styled);return}dt([t,e,n],le.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),Fl(t),Fl(e),Fl(n)}function Fl(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Ol(t,e,n){const i=ju(e);wo(t,n[`show${i}Button`],"inline-block"),Sn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=le[e],wn(t,n,`${e}Button`)}const tx=(t,e)=>{const n=ed();n&&(Sn(n,e.closeButtonHtml||""),wn(n,e,"closeButton"),wo(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},nx=(t,e)=>{const n=rn();n&&(ix(n,e.backdrop),sx(n,e.position),rx(n,e.grow),wn(n,e,"container"))};function ix(t,e){typeof e=="string"?t.style.background=e:e||dt([document.documentElement,document.body],le["no-backdrop"])}function sx(t,e){e&&(e in le?dt(t,le[e]):(sn('The "position" parameter is not valid, defaulting to "center"'),dt(t,le.center)))}function rx(t,e){e&&dt(t,le[`grow-${e}`])}var wt={innerParams:new WeakMap,domCache:new WeakMap};const ox=["input","file","range","select","radio","checkbox","textarea"],ax=(t,e)=>{const n=ft();if(!n)return;const i=wt.innerParams.get(t),s=!i||e.input!==i.input;ox.forEach(r=>{const o=Yi(n,le[r]);o&&(ux(r,e.inputAttributes),o.className=le[r],s&&en(o))}),e.input&&(s&&lx(e),dx(e))},lx=t=>{if(!t.input)return;if(!At[t.input]){Os(`Unexpected type of input! Expected ${Object.keys(At).join(" | ")}, got "${t.input}"`);return}const e=rm(t.input);if(!e)return;const n=At[t.input](e,t);Vt(e),t.inputAutoFocus&&setTimeout(()=>{nm(n)})},cx=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},ux=(t,e)=>{const n=ft();if(!n)return;const i=_l(n,t);if(i){cx(i);for(const s in e)i.setAttribute(s,e[s])}},dx=t=>{if(!t.input)return;const e=rm(t.input);e&&wn(e,t,"input")},od=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},yo=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=le["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&dt(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},rm=t=>{const e=ft();if(e)return Yi(e,le[t]||le.input)},Ba=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Zu(e)||sn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},At={};At.text=At.email=At.password=At.number=At.tel=At.url=At.search=At.date=At["datetime-local"]=At.time=At.week=At.month=(t,e)=>{const n=t;return Ba(n,e.inputValue),yo(n,n,e),od(n,e),n.type=e.input,n};At.file=(t,e)=>{const n=t;return yo(n,n,e),od(n,e),n};At.range=(t,e)=>{const n=t,i=n.querySelector("input"),s=n.querySelector("output");return i&&(Ba(i,e.inputValue),i.type=e.input,yo(i,t,e)),s&&Ba(s,e.inputValue),t};At.select=(t,e)=>{const n=t;if(n.textContent="",e.inputPlaceholder){const i=document.createElement("option");Sn(i,e.inputPlaceholder),i.value="",i.disabled=!0,i.selected=!0,n.appendChild(i)}return yo(n,n,e),n};At.radio=t=>{const e=t;return e.textContent="",t};At.checkbox=(t,e)=>{const n=ft();if(!n)throw new Error("Popup not found");const i=_l(n,"checkbox");if(!i)throw new Error("Checkbox input not found");i.value="1",i.checked=!!e.inputValue;const r=t.querySelector("span");if(r){const o=e.inputPlaceholder||e.inputLabel;o&&Sn(r,o)}return i};At.textarea=(t,e)=>{const n=t;Ba(n,e.inputValue),od(n,e),yo(n,n,e);const i=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=ft();if(!s)return;const r=parseInt(window.getComputedStyle(s).width),o=()=>{if(!document.body.contains(n))return;const a=n.offsetWidth+i(n),l=ft();l&&(a>r?l.style.width=`${a}px`:Ds(l,"width",e.width))};new MutationObserver(o).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const fx=(t,e)=>{const n=Ju();n&&(id(n),wn(n,e,"htmlContainer"),e.html?(rd(e.html,n),Vt(n,"block")):e.text?(n.textContent=e.text,Vt(n,"block")):en(n),ax(t,e))},hx=(t,e)=>{const n=tm();n&&(id(n),wo(n,!!e.footer,"block"),e.footer&&rd(e.footer,n),wn(n,e,"footer"))},px=(t,e)=>{const n=wt.innerParams.get(t),i=Mr();if(!i)return;if(n&&e.icon===n.icon){Cf(i,e),Af(i,e);return}if(!e.icon&&!e.iconHtml){en(i);return}if(e.icon&&Object.keys(Oa).indexOf(e.icon)===-1){Os(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),en(i);return}Vt(i),Cf(i,e),Af(i,e),dt(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",om)},Af=(t,e)=>{for(const[n,i]of Object.entries(Oa))e.icon!==n&&Dn(t,i);dt(t,e.icon&&Oa[e.icon]),_x(t,e),om(),wn(t,e,"icon")},om=()=>{const t=ft();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},mx=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,gx=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Cf=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=Rf(e.iconHtml):e.icon==="success"?(i=mx(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=gx:e.icon&&(i=Rf({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Sn(t,i)},_x=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Tf(t,n,"background-color",e.iconColor);Tf(t,".swal2-success-ring","border-color",e.iconColor)}},Rf=t=>`<div class="${le["icon-content"]}">${t}</div>`,vx=(t,e)=>{const n=em();if(n){if(!e.imageUrl){en(n);return}Vt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Ds(n,"width",e.imageWidth),Ds(n,"height",e.imageHeight),n.className=le.image,wn(n,e,"image")}};let ad=!1,am=0,lm=0,cm=0,um=0;const xx=t=>{t.addEventListener("mousedown",ka),document.body.addEventListener("mousemove",za),t.addEventListener("mouseup",Va),t.addEventListener("touchstart",ka),document.body.addEventListener("touchmove",za),t.addEventListener("touchend",Va)},bx=t=>{t.removeEventListener("mousedown",ka),document.body.removeEventListener("mousemove",za),t.removeEventListener("mouseup",Va),t.removeEventListener("touchstart",ka),document.body.removeEventListener("touchmove",za),t.removeEventListener("touchend",Va)},ka=t=>{const e=ft();if(!e)return;const n=Mr();if(t.target===e||n&&n.contains(t.target)){ad=!0;const i=dm(t);am=i.clientX,lm=i.clientY,cm=parseInt(e.style.insetInlineStart)||0,um=parseInt(e.style.insetBlockStart)||0,dt(e,"swal2-dragging")}},za=t=>{const e=ft();if(e&&ad){let{clientX:n,clientY:i}=dm(t);const s=n-am;e.style.insetInlineStart=`${cm+(Oe.isRTL?-s:s)}px`,e.style.insetBlockStart=`${um+(i-lm)}px`}},Va=()=>{const t=ft();ad=!1,Dn(t,"swal2-dragging")},dm=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},wx=(t,e)=>{const n=rn(),i=ft();if(!(!n||!i)){if(e.toast){Ds(n,"width",e.width),i.style.width="100%";const s=Tr();s&&i.insertBefore(s,Mr())}else Ds(i,"width",e.width);Ds(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),en(pl()),yx(i,e),e.draggable&&!e.toast?(dt(i,le.draggable),xx(i)):(Dn(i,le.draggable),bx(i))}},yx=(t,e)=>{const n=e.showClass||{};t.className=`${le.popup} ${dn(t)?n.popup:""}`,e.toast?(dt([document.documentElement,document.body],le["toast-shown"]),dt(t,le.toast)):dt(t,le.modal),wn(t,e,"popup"),typeof e.customClass=="string"&&dt(t,e.customClass),e.icon&&dt(t,le[`icon-${e.icon}`])},Sx=(t,e)=>{const n=Qu();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){en(n);return}Vt(n),n.textContent="",s>=i.length&&sn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=Mx(r);if(n.appendChild(a),o===s&&dt(a,le["active-progress-step"]),o!==i.length-1){const l=Ex(e);n.appendChild(l)}})},Mx=t=>{const e=document.createElement("li");return dt(e,le["progress-step"]),Sn(e,t),e},Ex=t=>{const e=document.createElement("li");return dt(e,le["progress-step-line"]),t.progressStepsDistance&&Ds(e,"width",t.progressStepsDistance),e},Tx=(t,e)=>{const n=Qp();n&&(id(n),wo(n,!!(e.title||e.titleText),"block"),e.title&&rd(e.title,n),e.titleText&&(n.innerText=e.titleText),wn(n,e,"title"))},fm=(t,e)=>{var n;wx(t,e),nx(t,e),Sx(t,e),px(t,e),vx(t,e),Tx(t,e),tx(t,e),fx(t,e),Jv(t,e),hx(t,e);const i=ft();typeof e.didRender=="function"&&i&&e.didRender(i),(n=Oe.eventEmitter)===null||n===void 0||n.emit("didRender",i)},Ax=()=>dn(ft()),hm=()=>{var t;return(t=ii())===null||t===void 0?void 0:t.click()},Cx=()=>{var t;return(t=Bs())===null||t===void 0?void 0:t.click()},Rx=()=>{var t;return(t=Er())===null||t===void 0?void 0:t.click()},Ar=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),pm=t=>{if(t.keydownTarget&&t.keydownHandlerAdded&&t.keydownHandler){const e=t.keydownHandler;t.keydownTarget.removeEventListener("keydown",e,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1}},Px=(t,e,n)=>{if(pm(t),!e.toast){const i=r=>Dx(e,r,n);t.keydownHandler=i;const s=e.keydownListenerCapture?window:ft();if(s){t.keydownTarget=s,t.keydownListenerCapture=e.keydownListenerCapture;const r=i;t.keydownTarget.addEventListener("keydown",r,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0}}},Oc=(t,e)=>{var n;const i=td();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=ft())===null||n===void 0||n.focus()},mm=["ArrowRight","ArrowDown"],Lx=["ArrowLeft","ArrowUp"],Dx=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Ix(e,t):e.key==="Tab"?Ux(e):[...mm,...Lx].includes(e.key)?Nx(e.key):e.key==="Escape"&&Fx(e,t,n)))},Ix=(t,e)=>{if(!hl(e.allowEnterKey))return;const n=ft();if(!n||!e.input)return;const i=_l(n,e.input);if(t.target&&i&&t.target instanceof HTMLElement&&t.target.outerHTML===i.outerHTML){if(["textarea","file"].includes(e.input))return;hm(),t.preventDefault()}},Ux=t=>{const e=t.target,n=td();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?Oc(i,-1):Oc(i,1),t.stopPropagation(),t.preventDefault()},Nx=t=>{const e=bo(),n=ii(),i=Bs(),s=Er();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=mm.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&dn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Fx=(t,e,n)=>{t.preventDefault(),hl(e.allowEscapeKey)&&n(Ar.esc)};var gr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ox=()=>{const t=rn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},gm=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},_m=typeof window<"u"&&!!window.GestureEvent,Bx=()=>{if(_m&&!wi(document.body,le.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,dt(document.body,le.iosfix),kx()}},kx=()=>{const t=rn();if(!t)return;let e;t.ontouchstart=n=>{e=zx(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},zx=t=>{const e=t.target,n=rn(),i=Ju();return!n||!i||Vx(t)||Hx(t)?!1:e===n||!Fc(n)&&e instanceof HTMLElement&&!zv(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Fc(i)&&i.contains(e))},Vx=t=>!!(t.touches&&t.touches.length&&t.touches[0].touchType==="stylus"),Hx=t=>t.touches&&t.touches.length>1,Gx=()=>{if(wi(document.body,le.iosfix)){const t=parseInt(document.body.style.top,10);Dn(document.body,le.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Wx=()=>{const t=document.createElement("div");t.className=le["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let ur=null;const $x=t=>{ur===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(ur=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${ur+Wx()}px`)},Xx=()=>{ur!==null&&(document.body.style.paddingRight=`${ur}px`,ur=null)};function vm(t,e,n,i){gl()?Pf(t,i):(Pv(n).then(()=>Pf(t,i)),pm(Oe)),_m?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),nd()&&(Xx(),Gx(),gm()),qx()}function qx(){Dn([document.documentElement,document.body],[le.shown,le["height-auto"],le["no-backdrop"],le["toast-shown"]])}function ji(t){t=jx(t);const e=gr.swalPromiseResolve.get(this),n=Yx(this);this.isAwaitingPromise?t.isDismissed||(So(this),e(t)):n&&e(t)}const Yx=t=>{const e=ft();if(!e)return!1;const n=wt.innerParams.get(t);if(!n||wi(e,n.hideClass.popup))return!1;Dn(e,n.showClass.popup),dt(e,n.hideClass.popup);const i=rn();return Dn(i,n.showClass.backdrop),dt(i,n.hideClass.backdrop),Kx(t,e,n),!0};function xm(t){const e=gr.swalPromiseReject.get(this);So(this),e&&e(t)}const So=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,wt.innerParams.get(t)||t._destroy())},jx=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Kx=(t,e,n)=>{var i;const s=rn(),r=sm(e);typeof n.willClose=="function"&&n.willClose(e),(i=Oe.eventEmitter)===null||i===void 0||i.emit("willClose",e),r&&s?Zx(t,e,s,!!n.returnFocus,n.didClose):s&&vm(t,s,!!n.returnFocus,n.didClose)},Zx=(t,e,n,i,s)=>{Oe.swalCloseEventFinishedCallback=vm.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Oe.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Oe),delete Oe.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Pf=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Oe.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},_r=t=>{let e=ft();if(e||new ao,e=ft(),!e)return;const n=Tr();gl()?en(Mr()):Jx(e,t),Vt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Jx=(t,e)=>{const n=bo(),i=Tr();!n||!i||(!e&&dn(ii())&&(e=ii()),Vt(n),e&&(en(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),dt([t,n],le.loading))},Qx=(t,e)=>{e.input==="select"||e.input==="radio"?sb(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Ku(e.inputValue)||Zu(e.inputValue))&&(_r(ii()),rb(t,e))},eb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return tb(n);case"radio":return nb(n);case"file":return ib(n);default:return e.inputAutoTrim?n.value.trim():n.value}},tb=t=>t.checked?1:0,nb=t=>t.checked?t.value:null,ib=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,sb=(t,e)=>{const n=ft();if(!n)return;const i=s=>{e.input==="select"?ob(n,Ha(s),e):e.input==="radio"&&ab(n,Ha(s),e)};Ku(e.inputOptions)||Zu(e.inputOptions)?(_r(ii()),vo(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Os(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},rb=(t,e)=>{const n=t.getInput();n&&(en(n),vo(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,Vt(n),n.focus(),t.hideLoading()}).catch(i=>{Os(`Error in inputValue promise: ${i}`),n.value="",Vt(n),n.focus(),t.hideLoading()}))};function ob(t,e,n){const i=Yi(t,le.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Sn(l,o),l.selected=bm(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function ab(t,e,n){const i=Yi(t,le.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=le.radio,l.value=o,bm(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Sn(u,a),u.className=le.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Ha=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Ha(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Ha(i)),e.push([n,i])}),e},bm=(t,e)=>!!e&&e!==null&&e!==void 0&&e.toString()===t.toString(),lb=t=>{const e=wt.innerParams.get(t);t.disableButtons(),e.input?wm(t,"confirm"):cd(t,!0)},cb=t=>{const e=wt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?wm(t,"deny"):ld(t,!1)},ub=(t,e)=>{t.disableButtons(),e(Ar.cancel)},wm=(t,e)=>{const n=wt.innerParams.get(t);if(!n.input){Os(`The "input" parameter is needed to be set when using returnInputValueOn${ju(e)}`);return}const i=t.getInput(),s=eb(t,n);n.inputValidator?db(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?ld(t,s):cd(t,s)},db=(t,e,n)=>{const i=wt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>vo(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?ld(t,e):cd(t,e)})},ld=(t,e)=>{const n=wt.innerParams.get(t);n.showLoaderOnDeny&&_r(Bs()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>vo(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),So(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>ym(t,s))):t.close({isDenied:!0,value:e})},Lf=(t,e)=>{t.close({isConfirmed:!0,value:e})},ym=(t,e)=>{t.rejectPromise(e)},cd=(t,e)=>{const n=wt.innerParams.get(t);n.showLoaderOnConfirm&&_r(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>vo(n.preConfirm(e,n.validationMessage))).then(s=>{dn(pl())||s===!1?(t.hideLoading(),So(t)):Lf(t,typeof s>"u"?e:s)}).catch(s=>ym(t,s))):Lf(t,e)};function Ga(){const t=wt.innerParams.get(this);if(!t)return;const e=wt.domCache.get(this);en(e.loader),gl()?t.icon&&Vt(Mr()):fb(e),Dn([e.popup,e.actions],le.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const fb=t=>{const e=t.loader.getAttribute("data-button-to-replace"),n=e?t.popup.getElementsByClassName(e):[];n.length?Vt(n[0],"inline-block"):kv()&&en(t.actions)};function Sm(){const t=wt.innerParams.get(this),e=wt.domCache.get(this);return e?_l(e.popup,t.input):null}function Mm(t,e,n){const i=wt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Em(t,e){const n=ft();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${le.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function Tm(){Mm(this,["confirmButton","denyButton","cancelButton"],!1)}function Am(){Mm(this,["confirmButton","denyButton","cancelButton"],!0)}function Cm(){Em(this.getInput(),!1)}function Rm(){Em(this.getInput(),!0)}function Pm(t){const e=wt.domCache.get(this),n=wt.innerParams.get(this);Sn(e.validationMessage,t),e.validationMessage.className=le["validation-message"],n.customClass&&n.customClass.validationMessage&&dt(e.validationMessage,n.customClass.validationMessage),Vt(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",le["validation-message"]),nm(i),dt(i,le.inputerror))}function Lm(){const t=wt.domCache.get(this);t.validationMessage&&en(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Dn(e,le.inputerror))}const Ki={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},hb=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],pb={allowEnterKey:void 0},mb=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Dm=t=>Object.prototype.hasOwnProperty.call(Ki,t),Im=t=>hb.indexOf(t)!==-1,Um=t=>pb[t],gb=t=>{Dm(t)||sn(`Unknown parameter "${t}"`)},_b=t=>{mb.includes(t)&&sn(`The parameter "${t}" is incompatible with toasts`)},vb=t=>{const e=Um(t);e&&Jp(t,e)},Nm=t=>{t.backdrop===!1&&t.allowOutsideClick&&sn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&sn(`Invalid theme "${t.theme}"`);for(const e in t)gb(e),t.toast&&_b(e),vb(e)};function Fm(t){const e=rn(),n=ft(),i=wt.innerParams.get(this);if(!n||wi(n,i.hideClass.popup)){sn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=xb(t),r=Object.assign({},i,s);Nm(r),e&&(e.dataset.swal2Theme=r.theme),fm(this,r),wt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const xb=t=>{const e={};return Object.keys(t).forEach(n=>{if(Im(n)){const i=t;e[n]=i[n]}else sn(`Invalid parameter to update: ${n}`)}),e};function Om(){var t;const e=wt.domCache.get(this),n=wt.innerParams.get(this);if(!n){Bm(this);return}e.popup&&Oe.swalCloseEventFinishedCallback&&(Oe.swalCloseEventFinishedCallback(),delete Oe.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),(t=Oe.eventEmitter)===null||t===void 0||t.emit("didDestroy"),bb(this)}const bb=t=>{Bm(t),delete t.params,delete Oe.keydownHandler,delete Oe.keydownTarget,delete Oe.currentInstance},Bm=t=>{t.isAwaitingPromise?(Bl(wt,t),t.isAwaitingPromise=!0):(Bl(gr,t),Bl(wt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Bl=(t,e)=>{for(const n in t)t[n].delete(e)};var wb=Object.freeze({__proto__:null,_destroy:Om,close:ji,closeModal:ji,closePopup:ji,closeToast:ji,disableButtons:Am,disableInput:Rm,disableLoading:Ga,enableButtons:Tm,enableInput:Cm,getInput:Sm,handleAwaitingPromise:So,hideLoading:Ga,rejectPromise:xm,resetValidationMessage:Lm,showValidationMessage:Pm,update:Fm});const yb=(t,e,n)=>{t.toast?Sb(t,e,n):(Eb(e),Tb(e),Ab(t,e,n))},Sb=(t,e,n)=>{e.popup.onclick=()=>{t&&(Mb(t)||t.timer||t.input)||n(Ar.close)}},Mb=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Wa=!1;const Eb=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Wa=!0)}}},Tb=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Wa=!0)}}},Ab=(t,e,n)=>{e.container.onclick=i=>{if(Wa){Wa=!1;return}i.target===e.container&&hl(t.allowOutsideClick)&&n(Ar.backdrop)}},Cb=t=>typeof t=="object"&&t!==null&&"jquery"in t,Df=t=>t instanceof Element||Cb(t),Rb=t=>{const e={};return typeof t[0]=="object"&&!Df(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||Df(s)?e[n]=s:s!==void 0&&Os(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Pb(...t){return new this(...t)}function Lb(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Db=()=>Oe.timeout&&Oe.timeout.getTimerLeft(),km=()=>{if(Oe.timeout)return Vv(),Oe.timeout.stop()},zm=()=>{if(Oe.timeout){const t=Oe.timeout.start();return sd(t),t}},Ib=()=>{const t=Oe.timeout;return t&&(t.running?km():zm())},Ub=t=>{if(Oe.timeout){const e=Oe.timeout.increase(t);return sd(e,!0),e}},Nb=()=>!!(Oe.timeout&&Oe.timeout.isRunning());let If=!1;const Bc={};function Fb(t="data-swal-template"){Bc[t]=this,If||(document.body.addEventListener("click",Ob),If=!0)}const Ob=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Bc){const i=e.getAttribute&&e.getAttribute(n);if(i){Bc[n].fire({template:i});return}}};class Bb{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Oe.eventEmitter=new Bb;const kb=(t,e)=>{Oe.eventEmitter&&Oe.eventEmitter.on(t,e)},zb=(t,e)=>{Oe.eventEmitter&&Oe.eventEmitter.once(t,e)},Vb=(t,e)=>{if(Oe.eventEmitter){if(!t){Oe.eventEmitter.reset();return}e?Oe.eventEmitter.removeListener(t,e):Oe.eventEmitter.removeAllListeners(t)}};var Hb=Object.freeze({__proto__:null,argsToParams:Rb,bindClickHandler:Fb,clickCancel:Rx,clickConfirm:hm,clickDeny:Cx,enableLoading:_r,fire:Pb,getActions:bo,getCancelButton:Er,getCloseButton:ed,getConfirmButton:ii,getContainer:rn,getDenyButton:Bs,getFocusableElements:td,getFooter:tm,getHtmlContainer:Ju,getIcon:Mr,getIconContent:Uv,getImage:em,getInputLabel:Nv,getLoader:Tr,getPopup:ft,getProgressSteps:Qu,getTimerLeft:Db,getTimerProgressBar:ml,getTitle:Qp,getValidationMessage:pl,increaseTimer:Ub,isDeprecatedParameter:Um,isLoading:Ov,isTimerRunning:Nb,isUpdatableParameter:Im,isValidParameter:Dm,isVisible:Ax,mixin:Lb,off:Vb,on:kb,once:zb,resumeTimer:zm,showLoading:_r,stopTimer:km,toggleTimer:Ib});class Gb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Vm=["swal-title","swal-html","swal-footer"],Wb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Jb(n),Object.assign($b(n),Xb(n),qb(n),Yb(n),jb(n),Kb(n),Zb(n,Vm))},$b=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{Is(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(s in Ki&&typeof Ki[s]=="boolean"?e[s]=r!=="false":s in Ki&&typeof Ki[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},Xb=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},qb=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{Is(i,["type","color","aria-label"]);const s=i.getAttribute("type");if(!(!s||!["confirm","cancel","deny"].includes(s))){if(e[`${s}ButtonText`]=i.innerHTML,e[`show${ju(s)}Button`]=!0,i.hasAttribute("color")){const r=i.getAttribute("color");r!==null&&(e[`${s}ButtonColor`]=r)}if(i.hasAttribute("aria-label")){const r=i.getAttribute("aria-label");r!==null&&(e[`${s}ButtonAriaLabel`]=r)}}}),e},Yb=t=>{const e={},n=t.querySelector("swal-image");return n&&(Is(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},jb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Is(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Kb=t=>{const e={},n=t.querySelector("swal-input");n&&(Is(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{Is(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Zb=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(Is(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Jb=t=>{const e=Vm.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||sn(`Unrecognized element <${i}>`)})},Is=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&sn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Hm=10,Qb=t=>{var e,n;const i=rn(),s=ft();if(!i||!s)return;typeof t.willOpen=="function"&&t.willOpen(s),(e=Oe.eventEmitter)===null||e===void 0||e.emit("willOpen",s);const o=window.getComputedStyle(document.body).overflowY;if(nw(i,s,t),setTimeout(()=>{ew(i,s)},Hm),nd()&&(tw(i,t.scrollbarPadding!==void 0?t.scrollbarPadding:!1,o),Ox()),!gl()&&!Oe.previousActiveElement&&(Oe.previousActiveElement=document.activeElement),typeof t.didOpen=="function"){const a=t.didOpen;setTimeout(()=>a(s))}(n=Oe.eventEmitter)===null||n===void 0||n.emit("didOpen",s)},$a=t=>{const e=ft();if(!e||t.target!==e)return;const n=rn();n&&(e.removeEventListener("animationend",$a),e.removeEventListener("transitionend",$a),n.style.overflowY="auto",Dn(n,le["no-transition"]))},ew=(t,e)=>{sm(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",$a),e.addEventListener("transitionend",$a)):t.style.overflowY="auto"},tw=(t,e,n)=>{Bx(),e&&n!=="hidden"&&$x(n),setTimeout(()=>{t.scrollTop=0})},nw=(t,e,n)=>{var i;(i=n.showClass)!==null&&i!==void 0&&i.backdrop&&dt(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),Vt(e,"grid"),setTimeout(()=>{var s;(s=n.showClass)!==null&&s!==void 0&&s.popup&&dt(e,n.showClass.popup),e.style.removeProperty("opacity")},Hm)):Vt(e,"grid"),dt([document.documentElement,document.body],le.shown),n.heightAuto&&n.backdrop&&!n.toast&&dt([document.documentElement,document.body],le["height-auto"])};var Uf={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function iw(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Uf.email),t.input==="url"&&(t.inputValidator=Uf.url))}function sw(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(sn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function rw(t){iw(t),t.showLoaderOnConfirm&&!t.preConfirm&&sn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),sw(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),jv(t)}let qn;var Fo=new WeakMap;class Rt{constructor(...e){if(Tv(this,Fo,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;qn=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,Av(Fo,this,this._main(qn.params))}_main(e,n={}){if(Nm(Object.assign({},n,e)),Oe.currentInstance){const r=gr.swalPromiseResolve.get(Oe.currentInstance),{isAwaitingPromise:o}=Oe.currentInstance;Oe.currentInstance._destroy(),o||r({isDismissed:!0}),nd()&&gm()}Oe.currentInstance=qn;const i=aw(e,n);rw(i),Object.freeze(i),Oe.timeout&&(Oe.timeout.stop(),delete Oe.timeout),clearTimeout(Oe.restoreFocusTimeout);const s=lw(qn);return fm(qn,i),wt.innerParams.set(qn,i),ow(qn,s,i)}then(e){return Mf(Fo,this).then(e)}finally(e){return Mf(Fo,this).finally(e)}}const ow=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o,isConfirmed:!1,isDenied:!1})};gr.swalPromiseResolve.set(t,i),gr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{lb(t)},e.denyButton.onclick=()=>{cb(t)},e.cancelButton.onclick=()=>{ub(t,r)},e.closeButton.onclick=()=>{r(Ar.close)},yb(n,e,r),Px(Oe,n,r),Qx(t,n),Qb(n),cw(Oe,n,r),uw(e,n),setTimeout(()=>{e.container.scrollTop=0})}),aw=(t,e)=>{const n=Wb(t),i=Object.assign({},Ki,e,n,t);return i.showClass=Object.assign({},Ki.showClass,i.showClass),i.hideClass=Object.assign({},Ki.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},lw=t=>{const e={popup:ft(),container:rn(),actions:bo(),confirmButton:ii(),denyButton:Bs(),cancelButton:Er(),loader:Tr(),closeButton:ed(),validationMessage:pl(),progressSteps:Qu()};return wt.domCache.set(t,e),e},cw=(t,e,n)=>{const i=ml();en(i),e.timer&&(t.timeout=new Gb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&i&&(Vt(i),wn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&sd(e.timer)})))},uw=(t,e)=>{if(!e.toast){if(!hl(e.allowEnterKey)){Jp("allowEnterKey"),hw();return}dw(t)||fw(t,e)||Oc(-1,1)}},dw=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&dn(n))return n.focus(),!0;return!1},fw=(t,e)=>e.focusDeny&&dn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&dn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&dn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,hw=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Rt.prototype.disableButtons=Am;Rt.prototype.enableButtons=Tm;Rt.prototype.getInput=Sm;Rt.prototype.disableInput=Rm;Rt.prototype.enableInput=Cm;Rt.prototype.hideLoading=Ga;Rt.prototype.disableLoading=Ga;Rt.prototype.showValidationMessage=Pm;Rt.prototype.resetValidationMessage=Lm;Rt.prototype.close=ji;Rt.prototype.closePopup=ji;Rt.prototype.closeModal=ji;Rt.prototype.closeToast=ji;Rt.prototype.rejectPromise=xm;Rt.prototype.update=Fm;Rt.prototype._destroy=Om;Object.assign(Rt,Hb);Object.keys(wb).forEach(t=>{Rt[t]=function(...e){if(qn&&qn[t])return qn[t](...e)}});Rt.DismissReason=Ar;Rt.version="11.26.18";const ao=Rt;ao.default=ao;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const Gm={confirmButtonColor:"rgb(60, 130, 191)",cancelButtonColor:"#6c757d",confirmButtonText:"確定",cancelButtonText:"取消",buttonsStyling:!0,customClass:{popup:"swal-custom-popup",title:"swal-custom-title",htmlContainer:"swal-custom-content",confirmButton:"swal-custom-confirm",cancelButton:"swal-custom-cancel"}},kc=(t,e="")=>ao.fire({...Gm,icon:"warning",title:t,text:e}),pw=(t,e="",n="確定")=>ao.fire({...Gm,icon:"warning",title:t,text:e,showCancelButton:!0,confirmButtonText:n,confirmButtonColor:"#dc3545"}),Cr=t=>(Ai("data-v-af655900"),t=t(),Ci(),t),mw={class:"text-editor"},gw={class:"form-group"},_w=Cr(()=>z("label",null,"文字內容",-1)),vw={class:"form-row"},xw={class:"form-group"},bw=Cr(()=>z("label",null,"字型",-1)),ww=Wp('<option value="Microsoft JhengHei" data-v-af655900>微軟正黑體</option><option value="Arial" data-v-af655900>Arial</option><option value="Times New Roman" data-v-af655900>Times New Roman</option><option value="Georgia" data-v-af655900>Georgia</option><option value="Courier New" data-v-af655900>Courier New</option>',5),yw=[ww],Sw={class:"form-group"},Mw=Cr(()=>z("label",null,"大小",-1)),Ew={class:"form-group"},Tw=Cr(()=>z("label",null,"文字顏色",-1)),Aw={class:"color-row"},Cw={class:"color-value"},Rw=Cr(()=>z("i",{class:"fas fa-plus"},null,-1)),Pw=Cr(()=>z("div",{class:"hint"},[z("i",{class:"fas fa-info-circle"}),Mi(" 雙擊畫布上的文字可直接編輯 ")],-1)),Lw={__name:"TextEditor",emits:["add-text"],setup(t,{emit:e}){const n=e,i=et(""),s=et("Microsoft JhengHei"),r=et(16),o=et("#000000"),a=()=>{if(!i.value.trim()){kc("請輸入文字","文字內容不能為空白");return}n("add-text",{content:i.value,fontFamily:s.value,fontSize:r.value,color:o.value}),i.value=""};return(l,c)=>($e(),qe("div",mw,[z("div",gw,[_w,$r(z("textarea",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),class:"form-control",placeholder:"輸入文字內容...",rows:"3"},null,512),[[Nl,i.value]])]),z("div",vw,[z("div",xw,[bw,$r(z("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),class:"form-control"},yw,512),[[dv,s.value]])]),z("div",Sw,[Mw,$r(z("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u),type:"number",class:"form-control",min:"12",max:"200"},null,512),[[Nl,r.value,void 0,{number:!0}]])])]),z("div",Ew,[Tw,z("div",Aw,[$r(z("input",{"onUpdate:modelValue":c[3]||(c[3]=u=>o.value=u),type:"color",class:"color-input"},null,512),[[Nl,o.value]]),z("span",Cw,un(o.value),1)])]),z("button",{class:"add-btn btn btn-primary",onClick:a},[Rw,Mi(" 新增至畫布 ")]),Pw]))}},Dw=li(Lw,[["__scopeId","data-v-af655900"]]),vl=t=>(Ai("data-v-1163b916"),t=t(),Ci(),t),Iw={class:"panel"},Uw={class:"panel-content"},Nw=vl(()=>z("i",{class:"fas fa-cloud-upload-alt"},null,-1)),Fw=vl(()=>z("span",null,"點擊或拖曳上傳圖片",-1)),Ow=vl(()=>z("small",null,"PNG、JPG、GIF・最大 5MB",-1)),Bw=vl(()=>z("div",{class:"help-text"},[z("i",{class:"fas fa-info-circle"}),z("span",null,"圖片將自動縮放至可編輯區域內")],-1)),kw={__name:"ImageUploader",emits:["upload-image"],setup(t,{emit:e}){const n=e,i=et(null),s=et(!1),r=a=>a?a.type.startsWith("image/")?a.size>5*1024*1024?(kc("檔案過大","圖片大小不能超過 5MB"),!1):!0:(kc("格式錯誤","請選擇圖片檔案（PNG、JPG、GIF）"),!1):!1,o=a=>{const l=a.target.files[0];r(l)&&(n("upload-image",l),a.target.value="")};return(a,l)=>($e(),qe("div",Iw,[z("div",Uw,[z("label",{class:It(["upload-label",{dragging:s.value}])},[z("input",{ref_key:"fileInput",ref:i,type:"file",accept:"image/*",style:{display:"none"},onChange:o},null,544),Nw,Fw,Ow],2),Bw])]))}},zw=li(kw,[["__scopeId","data-v-1163b916"]]),Vw="/luftqi";function Tn(t){return`${Vw}${t}`}const eo=250,xa=Math.round(eo*52/48),Wm=800,$m=600,Oo=Math.round((Wm-eo)/2),Bo=Math.round(($m-xa)/2),bs={topLeft:{x:Oo,y:Bo},topRight:{x:Oo+eo,y:Bo},bottomLeft:{x:Oo,y:Bo+xa},bottomRight:{x:Oo+eo,y:Bo+xa},width:eo,height:xa},Ni={...bs},Hw={width:Wm,height:$m};function Gw(t){const e=[t.topLeft.x,t.topRight.x,t.bottomLeft.x,t.bottomRight.x],n=[t.topLeft.y,t.topRight.y,t.bottomLeft.y,t.bottomRight.y];return{left:Math.min(...e),top:Math.min(...n),width:Math.max(...e)-Math.min(...e),height:Math.max(...n)-Math.min(...n)}}const Nf={B:{hex:"#1a1a1a",name:"Black"},BG:{hex:"#c8a96e",name:"Beige/Gold"},Blue:{hex:"#3a6bc8",name:"Blue"},G:{hex:"#d4af37",name:"Gold"},P:{hex:"#e8a0bf",name:"Pink"},S:{hex:"#a8a8b0",name:"Silver"},Green:{hex:"#4a9a6a",name:"Green"},R:{hex:"#c0392b",name:"Red"}};function on(t,e,n,i,s){var r,o;return{id:t,name:e,category:i,colorKey:s,color:((r=Nf[s])==null?void 0:r.hex)??"#888",colorName:((o=Nf[s])==null?void 0:o.name)??s,thumbnail:Tn(`/assets/products/${t}.png`),baseImage:Tn(`/assets/products/${t}.png`),canvasSize:Hw,perspective:n,printArea:Gw(n)}}const Zi={Cube_B:on("Cube_B","Cube Black",bs,"Cube","B"),Cube_BG:on("Cube_BG","Cube Beige",bs,"Cube","BG"),Cube_Blue:on("Cube_Blue","Cube Blue",bs,"Cube","Blue"),Cube_G:on("Cube_G","Cube Gold",bs,"Cube","G"),Cube_P:on("Cube_P","Cube Pink",bs,"Cube","P"),Cube_S:on("Cube_S","Cube Silver",bs,"Cube","S"),Duo_B:on("Duo_B","Duo Black",Ni,"Duo","B"),Duo_BG:on("Duo_BG","Duo Black Gold",Ni,"Duo","BG"),Duo_Blue:on("Duo_Blue","Duo Blue",Ni,"Duo","Blue"),Duo_G:on("Duo_G","Duo Gold",Ni,"Duo","G"),Duo_Green:on("Duo_Green","Duo Green",Ni,"Duo","Green"),Duo_P:on("Duo_P","Duo Pink",Ni,"Duo","P"),Duo_R:on("Duo_R","Duo Red",Ni,"Duo","R"),Duo_S:on("Duo_S","Duo Silver",Ni,"Duo","S")},Xa=[{id:"scene_office",name:"辦公桌",thumbnail:Tn("/scenes/office.jpg"),url:Tn("/scenes/office.jpg")},{id:"scene_cafe",name:"咖啡廳",thumbnail:Tn("/scenes/cafe.jpg"),url:Tn("/scenes/cafe.jpg")},{id:"scene_home",name:"居家",thumbnail:Tn("/scenes/home.jpg"),url:Tn("/scenes/home.jpg")},{id:"scene_car",name:"車上",thumbnail:Tn("/scenes/car.jpg"),url:Tn("/scenes/car.jpg")},{id:"scene_dark",name:"暗色背景",thumbnail:Tn("/scenes/dark.jpg"),url:Tn("/scenes/dark.jpg")}],Mo=t=>(Ai("data-v-18a179e1"),t=t(),Ci(),t),Ww={class:"bg-setting"},$w=Mo(()=>z("div",{class:"section-label"},[z("i",{class:"fas fa-mountain"}),z("span",null,"選擇場景背景")],-1)),Xw=Mo(()=>z("div",{class:"scene-none-icon"},[z("i",{class:"fas fa-ban"})],-1)),qw=Mo(()=>z("span",null,"無背景（透明）",-1)),Yw={key:0,class:"fas fa-check-circle check-icon"},jw={class:"scene-grid"},Kw=["title","onClick"],Zw={class:"scene-thumb"},Jw=["src","alt"],Qw={key:0,class:"scene-overlay"},ey=Mo(()=>z("i",{class:"fas fa-check-circle"},null,-1)),ty=[ey],ny={class:"scene-name"},iy={key:0,class:"selected-hint"},sy=Mo(()=>z("i",{class:"fas fa-image"},null,-1)),ry={__name:"BackgroundSetting",props:{modelValue:{type:String,default:null}},emits:["change-background"],setup(t){const e=t,n=Ct(()=>e.modelValue?Xa.find(i=>i.id===e.modelValue)??null:null);return(i,s)=>($e(),qe("div",Ww,[$w,z("div",{class:It(["scene-none",{active:t.modelValue===null}]),onClick:s[0]||(s[0]=r=>i.$emit("change-background",null))},[Xw,qw,t.modelValue===null?($e(),qe("i",Yw)):Dt("",!0)],2),z("div",jw,[($e(!0),qe(Lt,null,Rc(ws(Xa),r=>($e(),qe("div",{key:r.id,class:It(["scene-card",{active:t.modelValue===r.id}]),title:r.name,onClick:o=>i.$emit("change-background",r.id)},[z("div",Zw,[z("img",{src:r.thumbnail,alt:r.name,loading:"lazy"},null,8,Jw),t.modelValue===r.id?($e(),qe("div",Qw,ty)):Dt("",!0)]),z("div",ny,un(r.name),1)],10,Kw))),128))]),n.value?($e(),qe("div",iy,[sy,z("span",null,"已選："+un(n.value.name),1)])):Dt("",!0)]))}},oy=li(ry,[["__scopeId","data-v-18a179e1"]]),Ht=t=>(Ai("data-v-8b2e4df1"),t=t(),Ci(),t),ay={key:0,class:"obj-props"},ly={key:0,class:"form-group"},cy=Ht(()=>z("label",null,"文字內容",-1)),uy=["value"],dy={key:1,class:"form-row"},fy={class:"form-group"},hy=Ht(()=>z("label",null,"字型",-1)),py=["value"],my=Wp('<option value="Microsoft JhengHei" data-v-8b2e4df1>微軟正黑體</option><option value="Arial" data-v-8b2e4df1>Arial</option><option value="Times New Roman" data-v-8b2e4df1>Times New Roman</option><option value="Georgia" data-v-8b2e4df1>Georgia</option><option value="Courier New" data-v-8b2e4df1>Courier New</option>',5),gy=[my],_y={class:"form-group"},vy=Ht(()=>z("label",null,"大小",-1)),xy=["value"],by={key:2,class:"form-group"},wy=Ht(()=>z("label",null,"樣式",-1)),yy={class:"toggle-row"},Sy=Ht(()=>z("b",null,"B",-1)),My=[Sy],Ey=Ht(()=>z("i",null,"I",-1)),Ty=[Ey],Ay={key:3,class:"form-group"},Cy=Ht(()=>z("label",null,"文字顏色",-1)),Ry={class:"color-row"},Py=["value"],Ly={class:"color-value"},Dy=Ht(()=>z("div",{class:"divider"},null,-1)),Iy={class:"form-group"},Uy={class:"slider-row"},Ny=["value"],Fy=["value"],Oy={class:"form-group"},By=["value"],ky={class:"form-row"},zy={class:"form-group"},Vy=Ht(()=>z("label",null,"寬度",-1)),Hy=["value"],Gy={class:"form-group"},Wy=Ht(()=>z("label",null,"高度",-1)),$y=["value"],Xy={class:"form-row"},qy={class:"form-group"},Yy=Ht(()=>z("label",null,"X",-1)),jy=["value"],Ky={class:"form-group"},Zy=Ht(()=>z("label",null,"Y",-1)),Jy=["value"],Qy=Ht(()=>z("div",{class:"divider"},null,-1)),eS={class:"form-group"},tS={class:"label-row"},nS=Ht(()=>z("label",null,"亮度",-1)),iS={class:"value-badge"},sS={class:"slider-row"},rS=["value"],oS={class:"form-group"},aS={class:"label-row"},lS=Ht(()=>z("label",null,"對比",-1)),cS={class:"value-badge"},uS={class:"slider-row"},dS=["value"],fS=Ht(()=>z("i",{class:"fas fa-trash-alt"},null,-1)),hS={key:1,class:"no-select"},pS=Ht(()=>z("i",{class:"fas fa-mouse-pointer"},null,-1)),mS=Ht(()=>z("span",null,[Mi("點選畫布物件"),z("br"),Mi("以編輯屬性")],-1)),gS=[pS,mS],_S={__name:"ObjectProperties",props:{objectType:{type:String,default:null},props:{type:Object,default:()=>({})}},emits:["update","delete"],setup(t,{emit:e}){const n=e;return(i,s)=>t.objectType?($e(),qe("div",ay,[t.objectType==="text"?($e(),qe("div",ly,[cy,z("textarea",{value:t.props.text,class:"form-control",rows:"3",onInput:s[0]||(s[0]=r=>n("update",{text:r.target.value}))},null,40,uy)])):Dt("",!0),t.objectType==="text"?($e(),qe("div",dy,[z("div",fy,[hy,z("select",{value:t.props.fontFamily,class:"form-control",onChange:s[1]||(s[1]=r=>n("update",{fontFamily:r.target.value}))},gy,40,py)]),z("div",_y,[vy,z("input",{value:t.props.fontSize,type:"number",class:"form-control",min:"8",max:"300",onInput:s[2]||(s[2]=r=>n("update",{fontSize:Number(r.target.value)}))},null,40,xy)])])):Dt("",!0),t.objectType==="text"?($e(),qe("div",by,[wy,z("div",yy,[z("button",{class:It(["style-btn",{active:t.props.bold}]),onClick:s[3]||(s[3]=r=>n("update",{bold:!t.props.bold}))},My,2),z("button",{class:It(["style-btn",{active:t.props.italic}]),onClick:s[4]||(s[4]=r=>n("update",{italic:!t.props.italic}))},Ty,2)])])):Dt("",!0),t.objectType==="text"?($e(),qe("div",Ay,[Cy,z("div",Ry,[z("input",{value:t.props.color,type:"color",class:"color-input",onInput:s[5]||(s[5]=r=>n("update",{color:r.target.value}))},null,40,Py),z("span",Ly,un(t.props.color),1)])])):Dt("",!0),Dy,z("div",Iy,[z("label",null,"旋轉角度："+un(t.props.rotation??0)+"°",1),z("div",Uy,[z("input",{value:t.props.rotation??0,type:"range",min:"0",max:"360",step:"1",class:"slider",onInput:s[6]||(s[6]=r=>n("update",{rotation:Number(r.target.value)}))},null,40,Ny),z("input",{value:t.props.rotation??0,type:"number",class:"form-control num-input",min:"0",max:"360",onInput:s[7]||(s[7]=r=>n("update",{rotation:Number(r.target.value)}))},null,40,Fy)])]),z("div",Oy,[z("label",null,"透明度："+un(t.props.opacity)+"%",1),z("input",{value:t.props.opacity,type:"range",min:"0",max:"100",step:"1",class:"slider",onInput:s[8]||(s[8]=r=>n("update",{opacity:Number(r.target.value)/100}))},null,40,By)]),z("div",ky,[z("div",zy,[Vy,z("input",{value:t.props.width,type:"number",class:"form-control",min:"10",onInput:s[9]||(s[9]=r=>n("update",{width:Number(r.target.value)}))},null,40,Hy)]),z("div",Gy,[Wy,z("input",{value:t.props.height,type:"number",class:"form-control",min:"10",onInput:s[10]||(s[10]=r=>n("update",{height:Number(r.target.value)}))},null,40,$y)])]),z("div",Xy,[z("div",qy,[Yy,z("input",{value:t.props.x,type:"number",class:"form-control",onInput:s[11]||(s[11]=r=>n("update",{x:Number(r.target.value)}))},null,40,jy)]),z("div",Ky,[Zy,z("input",{value:t.props.y,type:"number",class:"form-control",onInput:s[12]||(s[12]=r=>n("update",{y:Number(r.target.value)}))},null,40,Jy)])]),t.objectType==="image"?($e(),qe(Lt,{key:4},[Qy,z("div",eS,[z("div",tS,[nS,z("span",iS,un(t.props.brightness??0),1)]),z("div",sS,[z("span",{class:"slider-cap",onClick:s[13]||(s[13]=r=>n("update",{brightness:Math.max(-100,(t.props.brightness??0)-1)}))},"−"),z("input",{value:t.props.brightness??0,type:"range",min:"-100",max:"100",step:"1",class:"slider slider--bipolar",onInput:s[14]||(s[14]=r=>n("update",{brightness:Number(r.target.value)}))},null,40,rS),z("span",{class:"slider-cap",onClick:s[15]||(s[15]=r=>n("update",{brightness:Math.min(100,(t.props.brightness??0)+1)}))},"＋")])]),z("div",oS,[z("div",aS,[lS,z("span",cS,un(t.props.contrast??0),1)]),z("div",uS,[z("span",{class:"slider-cap",onClick:s[16]||(s[16]=r=>n("update",{contrast:Math.max(-100,(t.props.contrast??0)-1)}))},"−"),z("input",{value:t.props.contrast??0,type:"range",min:"-100",max:"100",step:"1",class:"slider slider--bipolar",onInput:s[17]||(s[17]=r=>n("update",{contrast:Number(r.target.value)}))},null,40,dS),z("span",{class:"slider-cap",onClick:s[18]||(s[18]=r=>n("update",{contrast:Math.min(100,(t.props.contrast??0)+1)}))},"＋")])])],64)):Dt("",!0),z("button",{class:"delete-btn btn",onClick:s[19]||(s[19]=r=>n("delete"))},[fS,Mi(" 刪除物件 ")])])):($e(),qe("div",hS,gS))}},vS=li(_S,[["__scopeId","data-v-8b2e4df1"]]),xl=t=>(Ai("data-v-249245ee"),t=t(),Ci(),t),xS={class:"picker"},bS={class:"machine-image-area"},wS=["src","alt"],yS={key:1,class:"machine-image-placeholder"},SS=xl(()=>z("i",{class:"fas fa-cube"},null,-1)),MS=[SS],ES={class:"section-block"},TS=xl(()=>z("div",{class:"section-label"},"機台種類",-1)),AS={class:"category-tabs"},CS=["onClick"],RS={key:0,class:"section-block"},PS={class:"section-label"},LS={key:0,class:"color-hint"},DS={class:"color-swatches"},IS=["title","onClick"],US={key:0,class:"fas fa-check swatch-check"},NS={key:0,class:"picker-selected-bar"},FS=xl(()=>z("i",{class:"fas fa-check-circle"},null,-1)),OS=xl(()=>z("i",{class:"fas fa-times"},null,-1)),BS=[OS],kS={__name:"MachinePicker",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=[{id:"Cube",name:"Cube",icon:"fas fa-cube"},{id:"Duo",name:"Duo",icon:"fas fa-mobile-alt"},{id:"pure",name:"純設計稿",icon:"fas fa-layer-group"}],i=t,s=e;function r(x){var m;return x?x==="pure"?"pure":((m=Zi[x])==null?void 0:m.category)??null:null}function o(x){var h;return!x||x==="pure"?null:((h=Object.values(Zi).filter(y=>y.category===x)[0])==null?void 0:h.id)??null}const a=r(i.modelValue)??"Cube",l=et(a);if(!i.modelValue){const x=o("Cube");x&&s("update:modelValue",x)}const c=Ct(()=>l.value&&l.value!=="pure"?Object.values(Zi).filter(x=>x.category===l.value):[]),u=Ct(()=>!i.modelValue||i.modelValue==="pure"?null:Zi[i.modelValue]??null),f=Ct(()=>i.modelValue?i.modelValue==="pure"?{name:"純設計稿"}:u.value?{name:u.value.name}:null:null);function d(x){var m;if(l.value=x,x==="pure")s("update:modelValue","pure");else if(!(((m=u.value)==null?void 0:m.category)===x)){const y=o(x);s("update:modelValue",y)}}function p(x){s("update:modelValue",x)}function _(){l.value=null,s("update:modelValue",null)}return Zn(()=>i.modelValue,x=>{const m=r(x);m&&m!==l.value&&(l.value=m)}),(x,m)=>($e(),qe("div",xS,[z("div",bS,[st(ts,{name:"fade",mode:"out-in"},{default:Cn(()=>[u.value?($e(),qe("img",{key:u.value.id,src:u.value.thumbnail,alt:u.value.name,class:"machine-main-image"},null,8,wS)):($e(),qe("div",yS,MS))]),_:1})]),z("div",ES,[TS,z("div",AS,[($e(),qe(Lt,null,Rc(n,h=>z("button",{key:h.id,class:It(["cat-tab",{active:l.value===h.id}]),onClick:y=>d(h.id)},[z("i",{class:It(h.icon)},null,2),z("span",null,un(h.name),1)],10,CS)),64))])]),st(ts,{name:"fade-slide"},{default:Cn(()=>[l.value&&l.value!=="pure"?($e(),qe("div",RS,[z("div",PS,[Mi(" 顏色 "),u.value?($e(),qe("span",LS," — "+un(u.value.colorName),1)):Dt("",!0)]),z("div",DS,[($e(!0),qe(Lt,null,Rc(c.value,h=>($e(),qe("button",{key:h.id,class:It(["swatch",{active:t.modelValue===h.id}]),title:h.colorName,onClick:y=>p(h.id)},[z("span",{class:"swatch-dot",style:_i({background:h.color})},null,4),t.modelValue===h.id?($e(),qe("i",US)):Dt("",!0)],10,IS))),128))])])):Dt("",!0)]),_:1}),st(ts,{name:"slide-up"},{default:Cn(()=>[f.value?($e(),qe("div",NS,[FS,z("span",null,"已選："+un(f.value.name),1),z("button",{class:"unselect-btn",onClick:_},BS)])):Dt("",!0)]),_:1})]))}},zS=li(kS,[["__scopeId","data-v-249245ee"]]),Xm=t=>(Ai("data-v-d1d5157e"),t=t(),Ci(),t),VS={class:"sidebar"},HS={class:"sidebar-scroll"},GS={key:0,class:"no-machine-tip"},WS=Xm(()=>z("i",{class:"fas fa-arrow-up"},null,-1)),$S=Xm(()=>z("span",null,"請先選擇機台以解鎖設計工具",-1)),XS=[WS,$S],qS={__name:"LeftSidebar",props:{sceneBackground:{type:String,default:null},selectedObjectType:{type:String,default:null},selectedProps:{type:Object,default:()=>({})},selectedMachine:{type:String,default:null}},emits:["add-text","upload-image","change-background","update-object","delete-selected","update:selected-machine"],setup(t){const e=t,n=Ct(()=>e.selectedMachine!==null),i=Ct(()=>{var r;return e.selectedMachine?e.selectedMachine==="pure"?"純設計稿":((r=Zi[e.selectedMachine])==null?void 0:r.name)??e.selectedMachine:null}),s=Ct(()=>i.value?`選擇機台  ${i.value}`:"選擇機台");return(r,o)=>($e(),qe("div",VS,[z("div",HS,[st(Ur,{title:s.value,icon:"fas fa-box","default-open":!0},{default:Cn(()=>[st(zS,{"model-value":t.selectedMachine,"onUpdate:modelValue":o[0]||(o[0]=a=>r.$emit("update:selected-machine",a))},null,8,["model-value"])]),_:1},8,["title"]),st(ts,{name:"fade-slide"},{default:Cn(()=>[n.value?Dt("",!0):($e(),qe("div",GS,XS))]),_:1}),n.value?($e(),qe(Lt,{key:0},[st(Ur,{title:"調整工具",icon:"fas fa-sliders-h","default-open":!0},{default:Cn(()=>[st(vS,{"object-type":t.selectedObjectType,props:t.selectedProps,onUpdate:o[1]||(o[1]=a=>r.$emit("update-object",a)),onDelete:o[2]||(o[2]=a=>r.$emit("delete-selected"))},null,8,["object-type","props"])]),_:1}),st(Ur,{title:"文字工具",icon:"fas fa-font","default-open":!1},{default:Cn(()=>[st(Dw,{onAddText:o[3]||(o[3]=a=>r.$emit("add-text",a))})]),_:1}),st(Ur,{title:"圖片上傳",icon:"fas fa-image","default-open":!1},{default:Cn(()=>[st(zw,{onUploadImage:o[4]||(o[4]=a=>r.$emit("upload-image",a))})]),_:1}),st(Ur,{title:"背景設定",icon:"fas fa-fill-drip","default-open":!1},{default:Cn(()=>[st(oy,{"model-value":t.sceneBackground,onChangeBackground:o[5]||(o[5]=a=>r.$emit("change-background",a))},null,8,["model-value"])]),_:1})],64)):Dt("",!0)])]))}},YS=li(qS,[["__scopeId","data-v-d1d5157e"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="183",dr={ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jS=0,Ff=1,KS=2,ba=1,qm=2,qr=3,rs=0,fn=1,vi=2,yi=0,fr=1,Of=2,Bf=3,kf=4,ZS=5,Es=100,JS=101,QS=102,eM=103,tM=104,nM=200,iM=201,sM=202,rM=203,zc=204,Vc=205,oM=206,aM=207,lM=208,cM=209,uM=210,dM=211,fM=212,hM=213,pM=214,Hc=0,Gc=1,Wc=2,vr=3,$c=4,Xc=5,qc=6,Yc=7,Ym=0,mM=1,gM=2,ei=0,jm=1,Km=2,Zm=3,Jm=4,Qm=5,eg=6,tg=7,ng=300,Us=301,xr=302,kl=303,zl=304,bl=306,jc=1e3,xi=1001,Kc=1002,Wt=1003,_M=1004,ko=1005,Zt=1006,Vl=1007,Cs=1008,xn=1009,ig=1010,sg=1011,lo=1012,dd=1013,si=1014,Jn=1015,Ei=1016,fd=1017,hd=1018,co=1020,rg=35902,og=35899,ag=1021,lg=1022,zn=1023,Ti=1026,Rs=1027,cg=1028,pd=1029,br=1030,md=1031,gd=1033,wa=33776,ya=33777,Sa=33778,Ma=33779,Zc=35840,Jc=35841,Qc=35842,eu=35843,tu=36196,nu=37492,iu=37496,su=37488,ru=37489,ou=37490,au=37491,lu=37808,cu=37809,uu=37810,du=37811,fu=37812,hu=37813,pu=37814,mu=37815,gu=37816,_u=37817,vu=37818,xu=37819,bu=37820,wu=37821,yu=36492,Su=36494,Mu=36495,Eu=36283,Tu=36284,Au=36285,Cu=36286,vM=3200,ug=0,xM=1,qi="",An="srgb",wr="srgb-linear",qa="linear",pt="srgb",Hs=7680,zf=519,bM=512,wM=513,yM=514,_d=515,SM=516,MM=517,vd=518,EM=519,Vf=35044,Hf="300 es",Qn=2e3,uo=2001;function TM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AM(){const t=fo("canvas");return t.style.display="block",t}const Gf={};function Wf(...t){const e="THREE."+t.shift();console.log(e,...t)}function dg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=dg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ct(...t){t=dg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ya(...t){const e=t.join(" ");e in Gf||(Gf[e]=!0,Ge(...t))}function CM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const RM={[Hc]:Gc,[Wc]:qc,[$c]:Yc,[vr]:Xc,[Gc]:Hc,[qc]:Wc,[Yc]:$c,[Xc]:vr};class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,Ru=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function PM(t,e){return(t%e+e)%e}function Hl(t,e,n){return(1-n)*t+n*e}function Nr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const LM={DEG2RAD:Ea};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+f*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let h=1-a;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);h=Math.sin(h*y)/E,a=Math.sin(a*y)/E,l=l*h+d*a,c=c*h+p*a,u=u*h+_*a,f=f*h+x*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+_*a,f=f*h+x*a;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($f.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new W,$f=new os;class je{constructor(e,n,i,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],h=s[6],y=s[1],E=s[4],A=s[7],D=s[2],R=s[5],I=s[8];return r[0]=o*x+a*y+l*D,r[3]=o*m+a*E+l*R,r[6]=o*h+a*A+l*I,r[1]=c*x+u*y+f*D,r[4]=c*m+u*E+f*R,r[7]=c*h+u*A+f*I,r[2]=d*x+p*y+_*D,r[5]=d*m+p*E+_*R,r[8]=d*h+p*A+_*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=n*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wl.makeScale(e,n)),this}rotate(e){return this.premultiply(Wl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wl=new je,Xf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const t={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wr]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:Xf,fromXYZ:qf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Xf,fromXYZ:qf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const ot=DM();function Si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gs;class IM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=fo("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Si(n[i]/255)*255):n[i]=Si(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UM=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function $l(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let NM=0;const Xl=new W;class Jt extends ks{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=xi,s=xi,r=Zt,o=Cs,a=zn,l=xn,c=Jt.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Eo(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=ng;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,A=(p+1)/2,D=(h+1)/2,R=(u+d)/4,I=(f+x)/4,v=(_+m)/4;return E>A&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=I/i):A>D?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=R/s,r=v/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=I/r,s=v/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends ks{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new Jt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new xd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends FM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fg extends Jt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends Jt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,_,x,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,_,x,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,kM)}lookAt(e,n,i){const s=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Fi.crossVectors(i,gn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Fi.crossVectors(i,gn)),Fi.normalize(),zo.crossVectors(gn,Fi),s[0]=Fi.x,s[4]=zo.x,s[8]=gn.x,s[1]=Fi.y,s[5]=zo.y,s[9]=gn.y,s[2]=Fi.z,s[6]=zo.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],y=i[3],E=i[7],A=i[11],D=i[15],R=s[0],I=s[4],v=s[8],T=s[12],Q=s[1],P=s[5],N=s[9],V=s[13],ee=s[2],X=s[6],G=s[10],O=s[14],de=s[3],fe=s[7],ye=s[11],ue=s[15];return r[0]=o*R+a*Q+l*ee+c*de,r[4]=o*I+a*P+l*X+c*fe,r[8]=o*v+a*N+l*G+c*ye,r[12]=o*T+a*V+l*O+c*ue,r[1]=u*R+f*Q+d*ee+p*de,r[5]=u*I+f*P+d*X+p*fe,r[9]=u*v+f*N+d*G+p*ye,r[13]=u*T+f*V+d*O+p*ue,r[2]=_*R+x*Q+m*ee+h*de,r[6]=_*I+x*P+m*X+h*fe,r[10]=_*v+x*N+m*G+h*ye,r[14]=_*T+x*V+m*O+h*ue,r[3]=y*R+E*Q+A*ee+D*de,r[7]=y*I+E*P+A*X+D*fe,r[11]=y*v+E*N+A*G+D*ye,r[15]=y*T+E*V+A*O+D*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15],y=l*p-c*d,E=a*p-c*f,A=a*d-l*f,D=o*p-c*u,R=o*d-l*u,I=o*f-a*u;return n*(x*y-m*E+h*A)-i*(_*y-m*D+h*R)+s*(_*E-x*D+h*I)-r*(_*A-x*R+m*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],y=n*a-i*o,E=n*l-s*o,A=n*c-r*o,D=i*l-s*a,R=i*c-r*a,I=s*c-r*l,v=u*x-f*_,T=u*m-d*_,Q=u*h-p*_,P=f*m-d*x,N=f*h-p*x,V=d*h-p*m,ee=y*V-E*N+A*P+D*Q-R*T+I*v;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ee;return e[0]=(a*V-l*N+c*P)*X,e[1]=(s*N-i*V-r*P)*X,e[2]=(x*I-m*R+h*D)*X,e[3]=(d*R-f*I-p*D)*X,e[4]=(l*Q-o*V-c*T)*X,e[5]=(n*V-s*Q+r*T)*X,e[6]=(m*A-_*I-h*E)*X,e[7]=(u*I-d*A+p*E)*X,e[8]=(o*N-a*Q+c*v)*X,e[9]=(i*Q-n*N-r*v)*X,e[10]=(_*R-x*A+h*y)*X,e[11]=(f*A-u*R-p*y)*X,e[12]=(a*T-o*P-l*v)*X,e[13]=(n*P-i*T+s*v)*X,e[14]=(x*E-_*D-m*y)*X,e[15]=(u*D-f*E+d*y)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,_=r*f,x=o*u,m=o*f,h=a*f,y=l*c,E=l*u,A=l*f,D=i.x,R=i.y,I=i.z;return s[0]=(1-(x+h))*D,s[1]=(p+A)*D,s[2]=(_-E)*D,s[3]=0,s[4]=(p-A)*R,s[5]=(1-(d+h))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(_+E)*I,s[9]=(m-y)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length();const a=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const c=1/o,u=1/a,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),p=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===Qn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===uo)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),p=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===Qn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===uo)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ws=new W,Un=new St,BM=new W(0,0,0),kM=new W(1,1,1),Fi=new W,zo=new W,gn=new W,Yf=new St,jf=new os;class ri{constructor(e=0,n=0,i=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const Kf=new W,$s=new os,di=new St,Vo=new W,Fr=new W,VM=new W,HM=new os,Zf=new W(1,0,0),Jf=new W(0,1,0),Qf=new W(0,0,1),eh={type:"added"},GM={type:"removed"},Xs={type:"childadded",child:null},ql={type:"childremoved",child:null};class $t extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new W,n=new ri,i=new os,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,n){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vo.copy(e):Vo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Fr,Vo,this.up):di.lookAt(Vo,Fr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(di),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GM),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new W(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ho extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function jl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ot.workingColorSpace){if(e=PM(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=jl(o,r,e+1/3),this.g=jl(o,r,e),this.b=jl(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,n=An){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=pg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return ot.workingToColorSpace(Yt.copy(this),e),Math.round(tt(Yt.r*255,0,255))*65536+Math.round(tt(Yt.g*255,0,255))*256+Math.round(tt(Yt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=An){ot.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,s=Yt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Go);const i=Hl(Oi.h,Go.h,n),s=Hl(Oi.s,Go.s,n),r=Hl(Oi.l,Go.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new nt;nt.NAMES=pg;class bd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=n,this.far=i}clone(){return new bd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $M extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nn=new W,fi=new W,Kl=new W,hi=new W,qs=new W,Ys=new W,th=new W,Zl=new W,Jl=new W,Ql=new W,ec=new Et,tc=new Et,nc=new Et;class Bn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Nn.subVectors(e,n),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Nn.subVectors(s,n),fi.subVectors(i,n),Kl.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(fi),l=Nn.dot(Kl),c=fi.dot(fi),u=fi.dot(Kl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,i),nc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ec,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(nc,r.z),o}static isFrontFacing(e,n,i,s){return Nn.subVectors(i,n),fi.subVectors(e,n),Nn.cross(fi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Nn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;qs.subVectors(s,i),Ys.subVectors(r,i),Zl.subVectors(e,i);const l=qs.dot(Zl),c=Ys.dot(Zl);if(l<=0&&c<=0)return n.copy(i);Jl.subVectors(e,s);const u=qs.dot(Jl),f=Ys.dot(Jl);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(qs,o);Ql.subVectors(e,r);const p=qs.dot(Ql),_=Ys.dot(Ql);if(_>=0&&p<=_)return n.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ys,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return th.subVectors(r,s),a=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(th,a);const h=1/(m+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class To{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),$o.subVectors(this.max,Or),js.subVectors(e.a,Or),Ks.subVectors(e.b,Or),Zs.subVectors(e.c,Or),Bi.subVectors(Ks,js),ki.subVectors(Zs,Ks),ps.subVectors(js,Zs);let n=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ps.z,ps.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ps.z,0,-ps.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ps.y,ps.x,0];return!ic(n,js,Ks,Zs,$o)||(n=[1,0,0,0,1,0,0,0,1],!ic(n,js,Ks,Zs,$o))?!1:(Xo.crossVectors(Bi,ki),n=[Xo.x,Xo.y,Xo.z],ic(n,js,Ks,Zs,$o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new W,new W,new W,new W,new W,new W,new W,new W],Fn=new W,Wo=new To,js=new W,Ks=new W,Zs=new W,Bi=new W,ki=new W,ps=new W,Or=new W,$o=new W,Xo=new W,ms=new W;function ic(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ms.fromArray(t,r);const a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=n.dot(ms),u=i.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Pt=new W,qo=new Ye;let XM=0;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vf,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Nr(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Nr(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Nr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Nr(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vf&&(e.usage=this.usage),e}}class mg extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gg extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bn extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const qM=new To,Br=new W,sc=new W;class wl{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const n=Br.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(sc)),this.expandByPoint(Br.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YM=0;const En=new St,rc=new $t,Js=new W,_n=new To,kr=new To,kt=new W;class Vn extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TM(e)?gg:mg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(_n.min,kr.min),_n.expandByPoint(kt),kt.addVectors(_n.max,kr.max),_n.expandByPoint(kt)):(_n.expandByPoint(kr.min),_n.expandByPoint(kr.max))}_n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),kt.add(Js)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new W,l[v]=new W;const c=new W,u=new W,f=new W,d=new Ye,p=new Ye,_=new Ye,x=new W,m=new W;function h(v,T,Q){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,Q),d.fromBufferAttribute(r,v),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,Q),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[v].add(x),a[T].add(x),a[Q].add(x),l[v].add(m),l[T].add(m),l[Q].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,T=y.length;v<T;++v){const Q=y[v],P=Q.start,N=Q.count;for(let V=P,ee=P+N;V<ee;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new W,A=new W,D=new W,R=new W;function I(v){D.fromBufferAttribute(s,v),R.copy(D);const T=a[v];E.copy(T),E.sub(D.multiplyScalar(D.dot(T))).normalize(),A.crossVectors(R,T);const P=A.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,P)}for(let v=0,T=y.length;v<T;++v){const Q=y[v],P=Q.start,N=Q.count;for(let V=P,ee=P+N;V<ee;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new ni(d,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jM=0;class Rr extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=fr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Vc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Vc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new W,oc=new W,Yo=new W,zi=new W,ac=new W,jo=new W,lc=new W;class wd{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){oc.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(oc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Yo),a=zi.dot(this.direction),l=-zi.dot(Yo),c=zi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(oc).addScaledVector(Yo,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,s,r){ac.subVectors(n,e),jo.subVectors(i,e),lc.crossVectors(ac,jo);let o=this.direction.dot(lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(jo.crossVectors(zi,jo));if(l<0)return null;const c=a*this.direction.dot(ac.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(lc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _g extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nh=new St,gs=new wd,Ko=new wl,ih=new W,Zo=new W,Jo=new W,Qo=new W,cc=new W,ea=new W,sh=new W,ta=new W;class oi extends $t{constructor(e=new Vn,n=new _g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(cc.fromBufferAttribute(f,e),o?ea.addScaledVector(cc,u):ea.addScaledVector(cc.sub(n),u))}n.add(ea)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(Ko.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ko,ih)===null||gs.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),gs.copy(e.ray).applyMatrix4(nh),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=y,D=E;A<D;A+=3){const R=a.getX(A),I=a.getX(A+1),v=a.getX(A+2);s=na(this,h,e,i,c,u,f,R,I,v),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const y=a.getX(m),E=a.getX(m+1),A=a.getX(m+2);s=na(this,o,e,i,c,u,f,y,E,A),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=y,D=E;A<D;A+=3){const R=A,I=A+1,v=A+2;s=na(this,h,e,i,c,u,f,R,I,v),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const y=m,E=m+1,A=m+2;s=na(this,o,e,i,c,u,f,y,E,A),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function KM(t,e,n,i,s,r,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===rs,a),l===null)return null;ta.copy(a),ta.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ta);return c<n.near||c>n.far?null:{distance:c,point:ta.clone(),object:t}}function na(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Zo),t.getVertexPosition(l,Jo),t.getVertexPosition(c,Qo);const u=KM(t,e,n,i,Zo,Jo,Qo,sh);if(u){const f=new W;Bn.getBarycoord(sh,Zo,Jo,Qo,f),s&&(u.uv=Bn.getInterpolatedAttribute(s,a,l,c,f,new Ye)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,a,l,c,f,new Ye)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};Bn.getNormal(Zo,Jo,Qo,d.normal),u.face=d,u.barycoord=f}return u}class ZM extends Jt{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Wt,u=Wt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new W,JM=new W,QM=new je;class Xi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=uc.subVectors(i,n).cross(JM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QM.getNormalMatrix(e),s=this.coplanarPoint(uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new wl,eE=new Ye(.5,.5),ia=new W;class yd{constructor(e=new Xi,n=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],_=r[8],x=r[9],m=r[10],h=r[11],y=r[12],E=r[13],A=r[14],D=r[15];if(s[0].setComponents(c-o,p-u,h-_,D-y).normalize(),s[1].setComponents(c+o,p+u,h+_,D+y).normalize(),s[2].setComponents(c+a,p+f,h+x,D+E).normalize(),s[3].setComponents(c-a,p-f,h-x,D-E).normalize(),i)s[4].setComponents(l,d,m,A).normalize(),s[5].setComponents(c-l,p-d,h-m,D-A).normalize();else if(s[4].setComponents(c-l,p-d,h-m,D-A).normalize(),n===Qn)s[5].setComponents(c+l,p+d,h+m,D+A).normalize();else if(n===uo)s[5].setComponents(l,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=eE.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vg extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new W,Ka=new W,rh=new St,zr=new wd,sa=new wl,dc=new W,oh=new W;class tE extends $t{constructor(e=new Vn,n=new vg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)ja.fromBufferAttribute(n,s-1),Ka.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=ja.distanceTo(Ka);e.setAttribute("lineDistance",new bn(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;rh.copy(s).invert(),zr.copy(e.ray).applyMatrix4(rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=u.getX(x),y=u.getX(x+1),E=ra(this,e,zr,l,h,y,x);E&&n.push(E)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),h=ra(this,e,zr,l,x,m,_-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=ra(this,e,zr,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=ra(this,e,zr,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ra(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(ja.fromBufferAttribute(a,s),Ka.fromBufferAttribute(a,r),n.distanceSqToSegment(ja,Ka,dc,oh)>i)return;dc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(dc);if(!(c<e.near||c>e.far))return{distance:c,point:oh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const ah=new W,lh=new W;class nE extends tE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)ah.fromBufferAttribute(n,s),lh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ah.distanceTo(lh);e.setAttribute("lineDistance",new bn(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xg extends Jt{constructor(e=[],n=Us,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Jt{constructor(e,n,i=si,s,r,o,a=Wt,l=Wt,c,u=Ti,f=1){if(u!==Ti&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class iE extends ho{constructor(e,n=si,i=Us,s,r,o=Wt,a=Wt,l,c=Ti){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bg extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pr extends Vn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function _(x,m,h,y,E,A,D,R,I,v,T){const Q=A/I,P=D/v,N=A/2,V=D/2,ee=R/2,X=I+1,G=v+1;let O=0,de=0;const fe=new W;for(let ye=0;ye<G;ye++){const ue=ye*P-V;for(let he=0;he<X;he++){const Fe=he*Q-N;fe[x]=Fe*y,fe[m]=ue*E,fe[h]=ee,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[h]=R>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(he/I),f.push(1-ye/v),O+=1}}for(let ye=0;ye<v;ye++)for(let ue=0;ue<I;ue++){const he=d+ue+X*ye,Fe=d+ue+X*(ye+1),at=d+(ue+1)+X*(ye+1),it=d+(ue+1)+X*ye;l.push(he,Fe,it),l.push(Fe,at,it),de+=6}a.addGroup(p,de,T),p+=de,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends Vn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const y=h*d-o;for(let E=0;E<c;E++){const A=E*f-r;_.push(A,-y,0),x.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const E=y+c*h,A=y+c*(h+1),D=y+1+c*(h+1),R=y+1+c*h;p.push(E,A,R),p.push(A,D,R)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(x,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}function yr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=yr(t[n]);for(const s in i)e[s]=i[s]}return e}function sE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const rE={clone:yr,merge:nn};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=sE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lE extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ch extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ug,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cE extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uE extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(uh(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!uh(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function uh(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dE{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fE=new dE;class Sd{constructor(e){this.manager=e!==void 0?e:fE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Sd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qs=new WeakMap;class hE extends Sd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let f=Qs.get(o);f===void 0&&(f=[],Qs.set(o,f)),f.push({onLoad:n,onError:s})}return o}const a=fo("img");function l(){u(),n&&n(this);const f=Qs.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),fc.remove(`image:${e}`);const d=Qs.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(f)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class pE extends Sd{constructor(e){super(e)}load(e,n,i,s){const r=new Jt,o=new hE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Md extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const hc=new St,dh=new W,fh=new W;class yg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),n.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fh),n.updateMatrixWorld(),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===uo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oa=new W,aa=new os,$n=new W;class Sg extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oa,aa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,$n.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(oa,aa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new W,hh=new Ye,ph=new Ye;class vn extends Sg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ru*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ru*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,hh,ph),n.subVectors(ph,hh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class mE extends yg{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class gE extends Md{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ed extends Sg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _E extends yg{constructor(){super(new Ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends Md{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new _E}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class vE extends Md{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const er=-90,tr=1;class xE extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(er,tr,e,n);s.layers=this.layers,this.add(s);const r=new vn(er,tr,e,n);r.layers=this.layers,this.add(r);const o=new vn(er,tr,e,n);o.layers=this.layers,this.add(o);const a=new vn(er,tr,e,n);a.layers=this.layers,this.add(a);const l=new vn(er,tr,e,n);l.layers=this.layers,this.add(l);const c=new vn(er,tr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class bE extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wE extends nE{constructor(e=10,n=10,i=4473924,s=8947848){i=new nt(i),s=new nt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===r?i:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new Vn;u.setAttribute("position",new bn(l,3)),u.setAttribute("color",new bn(c,3));const f=new vg({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yE extends ks{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ge("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _h(t,e,n,i){const s=SE(i);switch(n){case ag:return t*e;case cg:return t*e/s.components*s.byteLength;case pd:return t*e/s.components*s.byteLength;case br:return t*e*2/s.components*s.byteLength;case md:return t*e*2/s.components*s.byteLength;case lg:return t*e*3/s.components*s.byteLength;case zn:return t*e*4/s.components*s.byteLength;case gd:return t*e*4/s.components*s.byteLength;case wa:case ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ma:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jc:case eu:return Math.max(t,16)*Math.max(e,8)/4;case Zc:case Qc:return Math.max(t,8)*Math.max(e,8)/2;case tu:case nu:case su:case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case iu:case ou:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yu:case Su:case Mu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Eu:case Tu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Au:case Cu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SE(t){switch(t){case xn:case ig:return{byteLength:1,components:1};case lo:case sg:case Ei:return{byteLength:2,components:1};case fd:case hd:return{byteLength:2,components:4};case si:case dd:case Jn:return{byteLength:4,components:1};case rg:case og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function ME(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",nT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ST=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_A=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:EE,alphahash_pars_fragment:TE,alphamap_fragment:AE,alphamap_pars_fragment:CE,alphatest_fragment:RE,alphatest_pars_fragment:PE,aomap_fragment:LE,aomap_pars_fragment:DE,batching_pars_vertex:IE,batching_vertex:UE,begin_vertex:NE,beginnormal_vertex:FE,bsdfs:OE,iridescence_fragment:BE,bumpmap_pars_fragment:kE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:VE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:GE,color_fragment:WE,color_pars_fragment:$E,color_pars_vertex:XE,color_vertex:qE,common:YE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:KE,displacementmap_pars_vertex:ZE,displacementmap_vertex:JE,emissivemap_fragment:QE,emissivemap_pars_fragment:eT,colorspace_fragment:tT,colorspace_pars_fragment:nT,envmap_fragment:iT,envmap_common_pars_fragment:sT,envmap_pars_fragment:rT,envmap_pars_vertex:oT,envmap_physical_pars_fragment:_T,envmap_vertex:aT,fog_vertex:lT,fog_pars_vertex:cT,fog_fragment:uT,fog_pars_fragment:dT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:hT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:gT,lights_toon_fragment:vT,lights_toon_pars_fragment:xT,lights_phong_fragment:bT,lights_phong_pars_fragment:wT,lights_physical_fragment:yT,lights_physical_pars_fragment:ST,lights_fragment_begin:MT,lights_fragment_maps:ET,lights_fragment_end:TT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:PT,map_fragment:LT,map_pars_fragment:DT,map_particle_fragment:IT,map_particle_pars_fragment:UT,metalnessmap_fragment:NT,metalnessmap_pars_fragment:FT,morphinstance_vertex:OT,morphcolor_vertex:BT,morphnormal_vertex:kT,morphtarget_pars_vertex:zT,morphtarget_vertex:VT,normal_fragment_begin:HT,normal_fragment_maps:GT,normal_pars_fragment:WT,normal_pars_vertex:$T,normal_vertex:XT,normalmap_pars_fragment:qT,clearcoat_normal_fragment_begin:YT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:KT,iridescence_pars_fragment:ZT,opaque_fragment:JT,packing:QT,premultiplied_alpha_fragment:eA,project_vertex:tA,dithering_fragment:nA,dithering_pars_fragment:iA,roughnessmap_fragment:sA,roughnessmap_pars_fragment:rA,shadowmap_pars_fragment:oA,shadowmap_pars_vertex:aA,shadowmap_vertex:lA,shadowmask_pars_fragment:cA,skinbase_vertex:uA,skinning_pars_vertex:dA,skinning_vertex:fA,skinnormal_vertex:hA,specularmap_fragment:pA,specularmap_pars_fragment:mA,tonemapping_fragment:gA,tonemapping_pars_fragment:_A,transmission_fragment:vA,transmission_pars_fragment:xA,uv_pars_fragment:bA,uv_pars_vertex:wA,uv_vertex:yA,worldpos_vertex:SA,background_vert:MA,background_frag:EA,backgroundCube_vert:TA,backgroundCube_frag:AA,cube_vert:CA,cube_frag:RA,depth_vert:PA,depth_frag:LA,distance_vert:DA,distance_frag:IA,equirect_vert:UA,equirect_frag:NA,linedashed_vert:FA,linedashed_frag:OA,meshbasic_vert:BA,meshbasic_frag:kA,meshlambert_vert:zA,meshlambert_frag:VA,meshmatcap_vert:HA,meshmatcap_frag:GA,meshnormal_vert:WA,meshnormal_frag:$A,meshphong_vert:XA,meshphong_frag:qA,meshphysical_vert:YA,meshphysical_frag:jA,meshtoon_vert:KA,meshtoon_frag:ZA,points_vert:JA,points_frag:QA,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Ee={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},jn={basic:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:nn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:nn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:nn([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:nn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:nn([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:nn([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:nn([Ee.common,Ee.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:nn([Ee.lights,Ee.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};jn.physical={uniforms:nn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const la={r:0,b:0,g:0},vs=new ri,s1=new St;function r1(t,e,n,i,s,r){const o=new nt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function p(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const A=y.backgroundBlurriness>0;E=e.get(E,A)}return E}function _(y){let E=!1;const A=p(y);A===null?m(o,a):A&&A.isColor&&(m(A,1),E=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(y,E){const A=p(E);A&&(A.isCubeTexture||A.mapping===bl)?(c===void 0&&(c=new oi(new Pr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:yr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),vs.copy(E.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(vs)),c.material.toneMapped=ot.getTransfer(A.colorSpace)!==pt,(u!==A||f!==A.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new oi(new yl(2,2),new ai({name:"BackgroundMaterial",uniforms:yr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ot.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(la,wg(t)),n.buffers.color.setClear(la.r,la.g,la.b,E,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:_,addToRenderList:x,dispose:h}}function o1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(P,N,V,ee,X){let G=!1;const O=f(P,ee,V,N);r!==O&&(r=O,c(r.object)),G=p(P,ee,V,X),G&&_(P,ee,V,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,A(P,N,V,ee),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function f(P,N,V,ee){const X=ee.wireframe===!0;let G=i[N.id];G===void 0&&(G={},i[N.id]=G);const O=P.isInstancedMesh===!0?P.id:0;let de=G[O];de===void 0&&(de={},G[O]=de);let fe=de[V.id];fe===void 0&&(fe={},de[V.id]=fe);let ye=fe[X];return ye===void 0&&(ye=d(l()),fe[X]=ye),ye}function d(P){const N=[],V=[],ee=[];for(let X=0;X<n;X++)N[X]=0,V[X]=0,ee[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:ee,object:P,attributes:{},index:null}}function p(P,N,V,ee){const X=r.attributes,G=N.attributes;let O=0;const de=V.getAttributes();for(const fe in de)if(de[fe].location>=0){const ue=X[fe];let he=G[fe];if(he===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),ue===void 0||ue.attribute!==he||he&&ue.data!==he.data)return!0;O++}return r.attributesNum!==O||r.index!==ee}function _(P,N,V,ee){const X={},G=N.attributes;let O=0;const de=V.getAttributes();for(const fe in de)if(de[fe].location>=0){let ue=G[fe];ue===void 0&&(fe==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),fe==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const he={};he.attribute=ue,ue&&ue.data&&(he.data=ue.data),X[fe]=he,O++}r.attributes=X,r.attributesNum=O,r.index=ee}function x(){const P=r.newAttributes;for(let N=0,V=P.length;N<V;N++)P[N]=0}function m(P){h(P,0)}function h(P,N){const V=r.newAttributes,ee=r.enabledAttributes,X=r.attributeDivisors;V[P]=1,ee[P]===0&&(t.enableVertexAttribArray(P),ee[P]=1),X[P]!==N&&(t.vertexAttribDivisor(P,N),X[P]=N)}function y(){const P=r.newAttributes,N=r.enabledAttributes;for(let V=0,ee=N.length;V<ee;V++)N[V]!==P[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function E(P,N,V,ee,X,G,O){O===!0?t.vertexAttribIPointer(P,N,V,X,G):t.vertexAttribPointer(P,N,V,ee,X,G)}function A(P,N,V,ee){x();const X=ee.attributes,G=V.getAttributes(),O=N.defaultAttributeValues;for(const de in G){const fe=G[de];if(fe.location>=0){let ye=X[de];if(ye===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),ye!==void 0){const ue=ye.normalized,he=ye.itemSize,Fe=e.get(ye);if(Fe===void 0)continue;const at=Fe.buffer,it=Fe.type,se=Fe.bytesPerElement,ge=it===t.INT||it===t.UNSIGNED_INT||ye.gpuType===dd;if(ye.isInterleavedBufferAttribute){const ve=ye.data,He=ve.stride,re=ye.offset;if(ve.isInstancedInterleavedBuffer){for(let te=0;te<fe.locationSize;te++)h(fe.location+te,ve.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let te=0;te<fe.locationSize;te++)m(fe.location+te);t.bindBuffer(t.ARRAY_BUFFER,at);for(let te=0;te<fe.locationSize;te++)E(fe.location+te,he/fe.locationSize,it,ue,He*se,(re+he/fe.locationSize*te)*se,ge)}else{if(ye.isInstancedBufferAttribute){for(let ve=0;ve<fe.locationSize;ve++)h(fe.location+ve,ye.meshPerAttribute);P.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ve=0;ve<fe.locationSize;ve++)m(fe.location+ve);t.bindBuffer(t.ARRAY_BUFFER,at);for(let ve=0;ve<fe.locationSize;ve++)E(fe.location+ve,he/fe.locationSize,it,ue,he*se,he/fe.locationSize*ve*se,ge)}}else if(O!==void 0){const ue=O[de];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(fe.location,ue);break;case 3:t.vertexAttrib3fv(fe.location,ue);break;case 4:t.vertexAttrib4fv(fe.location,ue);break;default:t.vertexAttrib1fv(fe.location,ue)}}}}y()}function D(){T();for(const P in i){const N=i[P];for(const V in N){const ee=N[V];for(const X in ee){const G=ee[X];for(const O in G)u(G[O].object),delete G[O];delete ee[X]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const V in N){const ee=N[V];for(const X in ee){const G=ee[X];for(const O in G)u(G[O].object),delete G[O];delete ee[X]}}delete i[P.id]}function I(P){for(const N in i){const V=i[N];for(const ee in V){const X=V[ee];if(X[P.id]===void 0)continue;const G=X[P.id];for(const O in G)u(G[O].object),delete G[O];delete X[P.id]}}}function v(P){for(const N in i){const V=i[N],ee=P.isInstancedMesh===!0?P.id:0,X=V[ee];if(X!==void 0){for(const G in X){const O=X[G];for(const de in O)u(O[de].object),delete O[de];delete X[G]}delete V[ee],Object.keys(V).length===0&&delete i[N]}}}function T(){Q(),o=!0,r!==s&&(r=s,c(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:Q,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function a1(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function l1(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==zn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const v=I===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Jn&&!v)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:A,maxSamples:D,samples:R}}function c1(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Xi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:i,E=y*4;let A=h.clippingState||null;l.value=A,A=u(_,d,E,p);for(let D=0;D!==E;++D)A[D]=n[D];h.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,A=p;E!==x;++E,A+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Ji=4,vh=[.125,.215,.35,.446,.526,.582],Ts=20,u1=256,Vr=new Ed,xh=new nt;let pc=null,mc=0,gc=0,_c=!1;const d1=new W;class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=d1}=r;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ei,format:zn,colorSpace:wr,depthBuffer:!1},s=wh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f1(r)),this._blurMaterial=p1(r,e,n),this._ggxMaterial=h1(r,e,n)}return s}_compileMaterial(e){const n=new oi(new Vn,e);this._renderer.compile(n,Vr)}_sceneToCubeUV(e,n,i,s,r){const l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(xh),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new Pr,new _g({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,h=!0):(m.color.copy(xh),h=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):A===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const D=this._cubeSize;nr(s,A*D,E>2?D:0,D,D),f.setRenderTarget(s),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Us||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;nr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Vr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Ji?i-_+Ji:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,nr(r,m,h,3*x,2*x),s.setRenderTarget(r),s.render(a,Vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,nr(e,m,h,3*x,2*x),s.setRenderTarget(e),s.render(a,Vr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Ts;m>Ts&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const h=[];let y=0;for(let I=0;I<Ts;++I){const v=I/x,T=Math.exp(-v*v/2);h.push(T),I===0?y+=T:I<m&&(y+=2*T)}for(let I=0;I<h.length;I++)h[I]=h[I]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const A=this._sizeLods[s],D=3*A*(s>E-Ji?s-E+Ji:0),R=4*(this._cubeSize-A);nr(n,D,R,3*A,2*A),l.setRenderTarget(n),l.render(f,Vr)}}function f1(t){const e=[],n=[],i=[];let s=t;const r=t-Ji+1+vh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Ji?l=vh[o-t+Ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,h=1,y=new Float32Array(x*_*p),E=new Float32Array(m*_*p),A=new Float32Array(h*_*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,v=R>2?0:-1,T=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];y.set(T,x*_*R),E.set(d,m*_*R);const Q=[R,R,R,R,R,R];A.set(Q,h*_*R)}const D=new Vn;D.setAttribute("position",new ni(y,x)),D.setAttribute("uv",new ni(E,m)),D.setAttribute("faceIndex",new ni(A,h)),i.push(new oi(D,null)),s>Ji&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function wh(t,e,n){const i=new ti(t,e,n);return i.texture.mapping=bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function h1(t,e,n){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function p1(t,e,n){const i=new Float32Array(Ts),s=new W(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yh(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Sh(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eg extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pr(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:yi});r.uniforms.tEquirect.value=n;const o=new oi(s,r),a=n.minFilter;return n.minFilter===Cs&&(n.minFilter=Zt),new xE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function m1(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===kl||p===zl)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new Eg(_.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,_=p===kl||p===zl,x=p===Us||p===xr;if(_||x){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new bh(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return _&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new bh(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===kl?d.mapping=Us:p===zl&&(d.mapping=xr),d}function l(d){let p=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function g1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Ya("WebGLRenderer: "+i+" extension not supported."),s}}}function _1(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(p!==null){const y=p.array;x=p.version;for(let E=0,A=y.length;E<A;E+=3){const D=y[E+0],R=y[E+1],I=y[E+2];d.push(D,R,R,I,I,D)}}else{const y=_.array;x=_.version;for(let E=0,A=y.length/3-1;E<A;E+=3){const D=E+0,R=E+1,I=E+2;d.push(D,R,R,I,I,D)}}const m=new(_.count>=65535?gg:mg)(d,1);m.version=x;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function v1(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,_);let h=0;for(let y=0;y<_;y++)h+=p[y]*x[y];n.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function x1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function b1(t,e,n){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let Q=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",Q)};var p=Q;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let A=0;_===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let D=a.attributes.position.count*A,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*R*4*f),v=new fg(I,D,R,f);v.type=Jn,v.needsUpdate=!0;const T=A*4;for(let P=0;P<f;P++){const N=h[P],V=y[P],ee=E[P],X=D*R*4*P;for(let G=0;G<N.count;G++){const O=G*T;_===!0&&(s.fromBufferAttribute(N,G),I[X+O+0]=s.x,I[X+O+1]=s.y,I[X+O+2]=s.z,I[X+O+3]=0),x===!0&&(s.fromBufferAttribute(V,G),I[X+O+4]=s.x,I[X+O+5]=s.y,I[X+O+6]=s.z,I[X+O+7]=0),m===!0&&(s.fromBufferAttribute(ee,G),I[X+O+8]=s.x,I[X+O+9]=s.y,I[X+O+10]=s.z,I[X+O+11]=ee.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new Ye(D,R)},i.set(a,d),a.addEventListener("dispose",Q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function w1(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const y1={[jm]:"LINEAR_TONE_MAPPING",[Km]:"REINHARD_TONE_MAPPING",[Zm]:"CINEON_TONE_MAPPING",[Jm]:"ACES_FILMIC_TONE_MAPPING",[eg]:"AGX_TONE_MAPPING",[tg]:"NEUTRAL_TONE_MAPPING",[Qm]:"CUSTOM_TONE_MAPPING"};function S1(t,e,n,i,s){const r=new ti(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new ti(e,n,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),a=new Vn;a.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new bn([0,2,0,0,2,0],2));const l=new lE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new oi(a,l),u=new Ed(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(y,E){r.setSize(y,E),o.setSize(y,E);for(let A=0;A<m.length;A++){const D=m[A];D.setSize&&D.setSize(y,E)}},this.setEffects=function(y){m=y,h=m.length>0&&m[0].isRenderPass===!0;const E=r.width,A=r.height;for(let D=0;D<m.length;D++){const R=m[D];R.setSize&&R.setSize(E,A)}},this.begin=function(y,E){if(p||y.toneMapping===ei&&m.length===0)return!1;if(x=E,E!==null){const A=E.width,D=E.height;(r.width!==A||r.height!==D)&&this.setSize(A,D)}return h===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=ei,!0},this.hasRenderPass=function(){return h},this.end=function(y,E){y.toneMapping=_,p=!0;let A=r,D=o;for(let R=0;R<m.length;R++){const I=m[R];if(I.enabled!==!1&&(I.render(y,D,A,E),I.needsSwap!==!1)){const v=A;A=D,D=v}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},ot.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const R=y1[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(x),y.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Tg=new Jt,Pu=new ho(1,1),Ag=new fg,Cg=new OM,Rg=new xg,Mh=[],Eh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Ch=new Float32Array(4);function Lr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ml(t,e){let n=Eh[e];n===void 0&&(n=new Int32Array(e),Eh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function M1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function C1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Ch.set(i),t.uniformMatrix2fv(this.addr,!1,Ch),Ot(n,i)}}function R1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Ah.set(i),t.uniformMatrix3fv(this.addr,!1,Ah),Ot(n,i)}}function P1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Th.set(i),t.uniformMatrix4fv(this.addr,!1,Th),Ot(n,i)}}function L1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function N1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function k1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Pu.compareFunction=n.isReversedDepthBuffer()?vd:_d,r=Pu):r=Tg,n.setTexture2D(e||r,s)}function z1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Cg,s)}function V1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Rg,s)}function H1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Ag,s)}function G1(t){switch(t){case 5126:return M1;case 35664:return E1;case 35665:return T1;case 35666:return A1;case 35674:return C1;case 35675:return R1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return D1;case 35668:case 35672:return I1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return H1}}function W1(t,e){t.uniform1fv(this.addr,e)}function $1(t,e){const n=Lr(e,this.size,2);t.uniform2fv(this.addr,n)}function X1(t,e){const n=Lr(e,this.size,3);t.uniform3fv(this.addr,n)}function q1(t,e){const n=Lr(e,this.size,4);t.uniform4fv(this.addr,n)}function Y1(t,e){const n=Lr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function j1(t,e){const n=Lr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function K1(t,e){const n=Lr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Z1(t,e){t.uniform1iv(this.addr,e)}function J1(t,e){t.uniform2iv(this.addr,e)}function Q1(t,e){t.uniform3iv(this.addr,e)}function eC(t,e){t.uniform4iv(this.addr,e)}function tC(t,e){t.uniform1uiv(this.addr,e)}function nC(t,e){t.uniform2uiv(this.addr,e)}function iC(t,e){t.uniform3uiv(this.addr,e)}function sC(t,e){t.uniform4uiv(this.addr,e)}function rC(t,e,n){const i=this.cache,s=e.length,r=Ml(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Pu:o=Tg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function oC(t,e,n){const i=this.cache,s=e.length,r=Ml(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Cg,r[o])}function aC(t,e,n){const i=this.cache,s=e.length,r=Ml(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Rg,r[o])}function lC(t,e,n){const i=this.cache,s=e.length,r=Ml(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Ag,r[o])}function cC(t){switch(t){case 5126:return W1;case 35664:return $1;case 35665:return X1;case 35666:return q1;case 35674:return Y1;case 35675:return j1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return eC;case 5125:return tC;case 36294:return nC;case 36295:return iC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return rC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return aC;case 36289:case 36303:case 36311:case 36292:return lC}}class uC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class dC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cC(n.type)}}class fC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Rh(t,e){t.seq.push(e),t.map[e.id]=e}function hC(t,e,n){const i=t.name,s=i.length;for(vc.lastIndex=0;;){const r=vc.exec(i),o=vc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rh(n,c===void 0?new uC(a,t,e):new dC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new fC(a),Rh(n,f)),n=f}}}class Ta{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);hC(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Ph(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pC=37297;let mC=0;function gC(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Lh=new je;function _C(t){ot._getMatrix(Lh,ot.workingColorSpace,t);const e=`mat3( ${Lh.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case qa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Dh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+gC(t.getShaderSource(e),a)}else return r}function vC(t,e){const n=_C(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const xC={[jm]:"Linear",[Km]:"Reinhard",[Zm]:"Cineon",[Jm]:"ACESFilmic",[eg]:"AgX",[tg]:"Neutral",[Qm]:"Custom"};function bC(t,e){const n=xC[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ca=new W;function wC(){ot.getLuminanceCoefficients(ca);const t=ca.x.toFixed(4),e=ca.y.toFixed(4),n=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function SC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yr(t){return t!==""}function Ih(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(t){return t.replace(EC,AC)}const TC=new Map;function AC(t,e){let n=Ke[e];if(n===void 0){const i=TC.get(e);if(i!==void 0)n=Ke[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lu(n)}const CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(t){return t.replace(CC,RC)}function RC(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const PC={[ba]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function LC(t){return PC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DC={[Us]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[bl]:"ENVMAP_TYPE_CUBE_UV"};function IC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":DC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const UC={[xr]:"ENVMAP_MODE_REFRACTION"};function NC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":UC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FC={[Ym]:"ENVMAP_BLENDING_MULTIPLY",[mM]:"ENVMAP_BLENDING_MIX",[gM]:"ENVMAP_BLENDING_ADD"};function OC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":FC[t.combine]||"ENVMAP_BLENDING_NONE"}function BC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kC(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LC(n),c=IC(n),u=NC(n),f=OC(n),d=BC(n),p=yC(n),_=SC(r),x=s.createProgram();let m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Yr).join(`
`),h.length>0&&(h+=`
`)):(m=[Fh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),h=[Fh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ei?"#define TONE_MAPPING":"",n.toneMapping!==ei?Ke.tonemapping_pars_fragment:"",n.toneMapping!==ei?bC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,vC("linearToOutputTexel",n.outputColorSpace),wC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Lu(o),o=Ih(o,n),o=Uh(o,n),a=Lu(a),a=Ih(a,n),a=Uh(a,n),o=Nh(o),a=Nh(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=y+m+o,A=y+h+a,D=Ph(s,s.VERTEX_SHADER,E),R=Ph(s,s.FRAGMENT_SHADER,A);s.attachShader(x,D),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(P){if(t.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(D)||"",ee=s.getShaderInfoLog(R)||"",X=N.trim(),G=V.trim(),O=ee.trim();let de=!0,fe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(de=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,D,R);else{const ye=Dh(s,D,"vertex"),ue=Dh(s,R,"fragment");ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ye+`
`+ue)}else X!==""?Ge("WebGLProgram: Program Info Log:",X):(G===""||O==="")&&(fe=!1);fe&&(P.diagnostics={runnable:de,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:h}})}s.deleteShader(D),s.deleteShader(R),v=new Ta(s,x),T=MC(s,x)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let Q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=s.getProgramParameter(x,pC)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}let zC=0;class VC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HC(e),n.set(e,i)),i}}class HC{constructor(e){this.id=zC++,this.code=e,this.usedTimes=0}}function GC(t,e,n,i,s,r){const o=new hg,a=new VC,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,Q,P,N){const V=P.fog,ee=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||X,G),de=O&&O.mapping===bl?O.image.height:null,fe=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ye=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ue=ye!==void 0?ye.length:0;let he=0;ee.morphAttributes.position!==void 0&&(he=1),ee.morphAttributes.normal!==void 0&&(he=2),ee.morphAttributes.color!==void 0&&(he=3);let Fe,at,it,se;if(fe){const ht=jn[fe];Fe=ht.vertexShader,at=ht.fragmentShader}else Fe=v.vertexShader,at=v.fragmentShader,a.update(v),it=a.getVertexShaderID(v),se=a.getFragmentShaderID(v);const ge=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,te=!!v.map,M=!!v.matcap,C=!!O,k=!!v.aoMap,U=!!v.lightMap,F=!!v.bumpMap,Y=!!v.normalMap,S=!!v.displacementMap,ae=!!v.emissiveMap,oe=!!v.metalnessMap,ie=!!v.roughnessMap,Z=v.anisotropy>0,w=v.clearcoat>0,g=v.dispersion>0,L=v.iridescence>0,$=v.sheen>0,K=v.transmission>0,q=Z&&!!v.anisotropyMap,be=w&&!!v.clearcoatMap,pe=w&&!!v.clearcoatNormalMap,Pe=w&&!!v.clearcoatRoughnessMap,ze=L&&!!v.iridescenceMap,me=L&&!!v.iridescenceThicknessMap,xe=$&&!!v.sheenColorMap,Me=$&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,Re=!!v.specularColorMap,Je=!!v.specularIntensityMap,B=K&&!!v.transmissionMap,Se=K&&!!v.thicknessMap,we=!!v.gradientMap,De=!!v.alphaMap,_e=v.alphaTest>0,ce=!!v.alphaHash,Ie=!!v.extensions;let We=ei;v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(We=t.toneMapping);const bt={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:at,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:re,batchingColor:re&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:wr,alphaToCoverage:!!v.alphaToCoverage,map:te,matcap:M,envMap:C,envMapMode:C&&O.mapping,envMapCubeUVHeight:de,aoMap:k,lightMap:U,bumpMap:F,normalMap:Y,displacementMap:S,emissiveMap:ae,normalMapObjectSpace:Y&&v.normalMapType===xM,normalMapTangentSpace:Y&&v.normalMapType===ug,metalnessMap:oe,roughnessMap:ie,anisotropy:Z,anisotropyMap:q,clearcoat:w,clearcoatMap:be,clearcoatNormalMap:pe,clearcoatRoughnessMap:Pe,dispersion:g,iridescence:L,iridescenceMap:ze,iridescenceThicknessMap:me,sheen:$,sheenColorMap:xe,sheenRoughnessMap:Me,specularMap:Ce,specularColorMap:Re,specularIntensityMap:Je,transmission:K,transmissionMap:B,thicknessMap:Se,gradientMap:we,opaque:v.transparent===!1&&v.blending===fr&&v.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:ce,combine:v.combine,mapUv:te&&_(v.map.channel),aoMapUv:k&&_(v.aoMap.channel),lightMapUv:U&&_(v.lightMap.channel),bumpMapUv:F&&_(v.bumpMap.channel),normalMapUv:Y&&_(v.normalMap.channel),displacementMapUv:S&&_(v.displacementMap.channel),emissiveMapUv:ae&&_(v.emissiveMap.channel),metalnessMapUv:oe&&_(v.metalnessMap.channel),roughnessMapUv:ie&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:be&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(v.sheenRoughnessMap.channel),specularMapUv:Ce&&_(v.specularMap.channel),specularColorMapUv:Re&&_(v.specularColorMap.channel),specularIntensityMapUv:Je&&_(v.specularIntensityMap.channel),transmissionMapUv:B&&_(v.transmissionMap.channel),thicknessMapUv:Se&&_(v.thicknessMap.channel),alphaMapUv:De&&_(v.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Y||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!ee.attributes.uv&&(te||De),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||ee.attributes.normal===void 0&&Y===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,decodeVideoTexture:te&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:ae&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const Q in v.defines)T.push(Q),T.push(v.defines[Q]);return v.isRawShaderMaterial===!1&&(h(T,v),y(T,v),T.push(t.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function h(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const T=p[v.type];let Q;if(T){const P=jn[T];Q=rE.clone(P.uniforms)}else Q=v.uniforms;return Q}function A(v,T){let Q=u.get(T);return Q!==void 0?++Q.usedTimes:(Q=new kC(t,T,v,s),c.push(Q),u.set(T,Q)),Q}function D(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){a.remove(v)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:A,releaseProgram:D,releaseShaderCache:R,programs:c,dispose:I}}function WC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function $C(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Oh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,_,x,m,h){let y=t[e];return y===void 0?(y={id:d.id,object:d,geometry:p,material:_,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:h},t[e]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=_,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=h),e++,y}function l(d,p,_,x,m,h){const y=a(d,p,_,x,m,h);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):n.push(y)}function c(d,p,_,x,m,h){const y=a(d,p,_,x,m,h);_.transmission>0?i.unshift(y):_.transparent===!0?s.unshift(y):n.unshift(y)}function u(d,p){n.length>1&&n.sort(d||$C),i.length>1&&i.sort(p||Oh),s.length>1&&s.sort(p||Oh)}function f(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function XC(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Bh,t.set(i,[o])):s>=r.length?(o=new Bh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new nt};break;case"SpotLight":n={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function YC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jC=0;function KC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZC(t){const e=new qC,n=YC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new St,o=new St;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,y=0,E=0,A=0,D=0,R=0,I=0;c.sort(KC);for(let T=0,Q=c.length;T<Q;T++){const P=c[T],N=P.color,V=P.intensity,ee=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===br?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*V,f+=N.g*V,d+=N.b*V;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],V);I++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,de=n.get(P);de.shadowIntensity=O.intensity,de.shadowBias=O.bias,de.shadowNormalBias=O.normalBias,de.shadowRadius=O.radius,de.shadowMapSize=O.mapSize,i.directionalShadow[p]=de,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(V),G.distance=ee,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[x]=G;const O=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,O.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[x]=O.matrix,P.castShadow){const de=n.get(P);de.shadowIntensity=O.intensity,de.shadowBias=O.bias,de.shadowNormalBias=O.normalBias,de.shadowRadius=O.radius,de.shadowMapSize=O.mapSize,i.spotShadow[x]=de,i.spotShadowMap[x]=X,A++}x++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(V),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const O=P.shadow,de=n.get(P);de.shadowIntensity=O.intensity,de.shadowBias=O.bias,de.shadowNormalBias=O.normalBias,de.shadowRadius=O.radius,de.shadowMapSize=O.mapSize,de.shadowCameraNear=O.camera.near,de.shadowCameraFar=O.camera.far,i.pointShadow[_]=de,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=P.shadow.matrix,E++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(V),G.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==h||v.numDirectionalShadows!==y||v.numPointShadows!==E||v.numSpotShadows!==A||v.numSpotMaps!==D||v.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,v.directionalLength=p,v.pointLength=_,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=h,v.numDirectionalShadows=y,v.numPointShadows=E,v.numSpotShadows=A,v.numSpotMaps=D,v.numLightProbes=I,i.version=jC++)}function l(c,u){let f=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const E=c[h];if(E.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(E.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function kh(t){const e=new ZC(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function JC(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new kh(t),e.set(s,[a])):r>=o.length?(a=new kh(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,t2=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],n2=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],zh=new St,Hr=new W,xc=new W;function i2(t,e,n){let i=new yd;const s=new Ye,r=new Ye,o=new Et,a=new cE,l=new uE,c={},u=n.maxTextureSize,f={[rs]:fn,[fn]:rs,[vi]:vi},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:QC,fragmentShader:e2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let h=this.type;this.render=function(R,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===qm&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);const T=t.getRenderTarget(),Q=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(yi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=h!==this.type;V&&I.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(X=>X.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,X=R.length;ee<X;ee++){const G=R[ee],O=G.shadow;if(O===void 0){Ge("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const de=O.getFrameExtents();s.multiply(de),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,O.mapSize.y=r.y));const fe=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=fe,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===qr){if(G.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ti(s.x,s.y,{format:br,type:Ei,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new ho(s.x,s.y,Jn),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=Ti,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Wt,O.map.depthTexture.magFilter=Wt}else G.isPointLight?(O.map=new Eg(s.x),O.map.depthTexture=new iE(s.x,si)):(O.map=new ti(s.x,s.y),O.map.depthTexture=new ho(s.x,s.y,si)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=Ti,this.type===ba?(O.map.depthTexture.compareFunction=fe?vd:_d,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Wt,O.map.depthTexture.magFilter=Wt);O.camera.updateProjectionMatrix()}const ye=O.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ye;ue++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ue),t.clear();else{ue===0&&(t.setRenderTarget(O.map),t.clear());const he=O.getViewport(ue);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),N.viewport(o)}if(G.isPointLight){const he=O.camera,Fe=O.matrix,at=G.distance||he.far;at!==he.far&&(he.far=at,he.updateProjectionMatrix()),Hr.setFromMatrixPosition(G.matrixWorld),he.position.copy(Hr),xc.copy(he.position),xc.add(t2[ue]),he.up.copy(n2[ue]),he.lookAt(xc),he.updateMatrixWorld(),Fe.makeTranslation(-Hr.x,-Hr.y,-Hr.z),zh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(zh,he.coordinateSystem,he.reversedDepth)}else O.updateMatrices(G);i=O.getFrustum(),A(I,v,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===qr&&y(O,v),O.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,Q,P)};function y(R,I){const v=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(s.x,s.y,{format:br,type:Ei})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(I,null,v,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(I,null,v,p,x,null)}function E(R,I,v,T){let Q=null;const P=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)Q=P;else if(Q=v.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const N=Q.uuid,V=I.uuid;let ee=c[N];ee===void 0&&(ee={},c[N]=ee);let X=ee[V];X===void 0&&(X=Q.clone(),ee[V]=X,I.addEventListener("dispose",D)),Q=X}if(Q.visible=I.visible,Q.wireframe=I.wireframe,T===qr?Q.side=I.shadowSide!==null?I.shadowSide:I.side:Q.side=I.shadowSide!==null?I.shadowSide:f[I.side],Q.alphaMap=I.alphaMap,Q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,Q.map=I.map,Q.clipShadows=I.clipShadows,Q.clippingPlanes=I.clippingPlanes,Q.clipIntersection=I.clipIntersection,Q.displacementMap=I.displacementMap,Q.displacementScale=I.displacementScale,Q.displacementBias=I.displacementBias,Q.wireframeLinewidth=I.wireframeLinewidth,Q.linewidth=I.linewidth,v.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const N=t.properties.get(Q);N.light=v}return Q}function A(R,I,v,T,Q){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&Q===qr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const V=e.update(R),ee=R.material;if(Array.isArray(ee)){const X=V.groups;for(let G=0,O=X.length;G<O;G++){const de=X[G],fe=ee[de.materialIndex];if(fe&&fe.visible){const ye=E(R,fe,T,Q);R.onBeforeShadow(t,R,I,v,V,ye,de),t.renderBufferDirect(v,null,V,ye,R,de),R.onAfterShadow(t,R,I,v,V,ye,de)}}}else if(ee.visible){const X=E(R,ee,T,Q);R.onBeforeShadow(t,R,I,v,V,X,null),t.renderBufferDirect(v,null,V,X,R,null),R.onAfterShadow(t,R,I,v,V,X,null)}}const N=R.children;for(let V=0,ee=N.length;V<ee;V++)A(N[V],I,v,T,Q)}function D(R){R.target.removeEventListener("dispose",D);for(const v in c){const T=c[v],Q=R.target.uuid;Q in T&&(T[Q].dispose(),delete T[Q])}}}function s2(t,e){function n(){let B=!1;const Se=new Et;let we=null;const De=new Et(0,0,0,0);return{setMask:function(_e){we!==_e&&!B&&(t.colorMask(_e,_e,_e,_e),we=_e)},setLocked:function(_e){B=_e},setClear:function(_e,ce,Ie,We,bt){bt===!0&&(_e*=We,ce*=We,Ie*=We),Se.set(_e,ce,Ie,We),De.equals(Se)===!1&&(t.clearColor(_e,ce,Ie,We),De.copy(Se))},reset:function(){B=!1,we=null,De.set(-1,0,0,0)}}}function i(){let B=!1,Se=!1,we=null,De=null,_e=null;return{setReversed:function(ce){if(Se!==ce){const Ie=e.get("EXT_clip_control");ce?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Se=ce;const We=_e;_e=null,this.setClear(We)}},getReversed:function(){return Se},setTest:function(ce){ce?ge(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(ce){we!==ce&&!B&&(t.depthMask(ce),we=ce)},setFunc:function(ce){if(Se&&(ce=RM[ce]),De!==ce){switch(ce){case Hc:t.depthFunc(t.NEVER);break;case Gc:t.depthFunc(t.ALWAYS);break;case Wc:t.depthFunc(t.LESS);break;case vr:t.depthFunc(t.LEQUAL);break;case $c:t.depthFunc(t.EQUAL);break;case Xc:t.depthFunc(t.GEQUAL);break;case qc:t.depthFunc(t.GREATER);break;case Yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ce}},setLocked:function(ce){B=ce},setClear:function(ce){_e!==ce&&(_e=ce,Se&&(ce=1-ce),t.clearDepth(ce))},reset:function(){B=!1,we=null,De=null,_e=null,Se=!1}}}function s(){let B=!1,Se=null,we=null,De=null,_e=null,ce=null,Ie=null,We=null,bt=null;return{setTest:function(ht){B||(ht?ge(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(ht){Se!==ht&&!B&&(t.stencilMask(ht),Se=ht)},setFunc:function(ht,ci,ui){(we!==ht||De!==ci||_e!==ui)&&(t.stencilFunc(ht,ci,ui),we=ht,De=ci,_e=ui)},setOp:function(ht,ci,ui){(ce!==ht||Ie!==ci||We!==ui)&&(t.stencilOp(ht,ci,ui),ce=ht,Ie=ci,We=ui)},setLocked:function(ht){B=ht},setClear:function(ht){bt!==ht&&(t.clearStencil(ht),bt=ht)},reset:function(){B=!1,Se=null,we=null,De=null,_e=null,ce=null,Ie=null,We=null,bt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,y=null,E=null,A=null,D=null,R=null,I=new nt(0,0,0),v=0,T=!1,Q=null,P=null,N=null,V=null,ee=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const de=t.getParameter(t.VERSION);de.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(de)[1]),G=O>=1):de.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),G=O>=2);let fe=null,ye={};const ue=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),Fe=new Et().fromArray(ue),at=new Et().fromArray(he);function it(B,Se,we,De){const _e=new Uint8Array(4),ce=t.createTexture();t.bindTexture(B,ce),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<we;Ie++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(Se+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ce}const se={};se[t.TEXTURE_2D]=it(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=it(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=it(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=it(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(t.DEPTH_TEST),o.setFunc(vr),F(!1),Y(Ff),ge(t.CULL_FACE),k(yi);function ge(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function ve(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function He(B,Se){return f[B]!==Se?(t.bindFramebuffer(B,Se),f[B]=Se,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function re(B,Se){let we=p,De=!1;if(B){we=d.get(Se),we===void 0&&(we=[],d.set(Se,we));const _e=B.textures;if(we.length!==_e.length||we[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ie=_e.length;ce<Ie;ce++)we[ce]=t.COLOR_ATTACHMENT0+ce;we.length=_e.length,De=!0}}else we[0]!==t.BACK&&(we[0]=t.BACK,De=!0);De&&t.drawBuffers(we)}function te(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const M={[Es]:t.FUNC_ADD,[JS]:t.FUNC_SUBTRACT,[QS]:t.FUNC_REVERSE_SUBTRACT};M[eM]=t.MIN,M[tM]=t.MAX;const C={[nM]:t.ZERO,[iM]:t.ONE,[sM]:t.SRC_COLOR,[zc]:t.SRC_ALPHA,[uM]:t.SRC_ALPHA_SATURATE,[lM]:t.DST_COLOR,[oM]:t.DST_ALPHA,[rM]:t.ONE_MINUS_SRC_COLOR,[Vc]:t.ONE_MINUS_SRC_ALPHA,[cM]:t.ONE_MINUS_DST_COLOR,[aM]:t.ONE_MINUS_DST_ALPHA,[dM]:t.CONSTANT_COLOR,[fM]:t.ONE_MINUS_CONSTANT_COLOR,[hM]:t.CONSTANT_ALPHA,[pM]:t.ONE_MINUS_CONSTANT_ALPHA};function k(B,Se,we,De,_e,ce,Ie,We,bt,ht){if(B===yi){x===!0&&(ve(t.BLEND),x=!1);return}if(x===!1&&(ge(t.BLEND),x=!0),B!==ZS){if(B!==m||ht!==T){if((h!==Es||A!==Es)&&(t.blendEquation(t.FUNC_ADD),h=Es,A=Es),ht)switch(B){case fr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Of:t.blendFunc(t.ONE,t.ONE);break;case Bf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",B);break}else switch(B){case fr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Of:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bf:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kf:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",B);break}y=null,E=null,D=null,R=null,I.set(0,0,0),v=0,m=B,T=ht}return}_e=_e||Se,ce=ce||we,Ie=Ie||De,(Se!==h||_e!==A)&&(t.blendEquationSeparate(M[Se],M[_e]),h=Se,A=_e),(we!==y||De!==E||ce!==D||Ie!==R)&&(t.blendFuncSeparate(C[we],C[De],C[ce],C[Ie]),y=we,E=De,D=ce,R=Ie),(We.equals(I)===!1||bt!==v)&&(t.blendColor(We.r,We.g,We.b,bt),I.copy(We),v=bt),m=B,T=!1}function U(B,Se){B.side===vi?ve(t.CULL_FACE):ge(t.CULL_FACE);let we=B.side===fn;Se&&(we=!we),F(we),B.blending===fr&&B.transparent===!1?k(yi):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const De=B.stencilWrite;a.setTest(De),De&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){Q!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),Q=B)}function Y(B){B!==jS?(ge(t.CULL_FACE),B!==P&&(B===Ff?t.cullFace(t.BACK):B===KS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),P=B}function S(B){B!==N&&(G&&t.lineWidth(B),N=B)}function ae(B,Se,we){B?(ge(t.POLYGON_OFFSET_FILL),(V!==Se||ee!==we)&&(V=Se,ee=we,o.getReversed()&&(Se=-Se),t.polygonOffset(Se,we))):ve(t.POLYGON_OFFSET_FILL)}function oe(B){B?ge(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function ie(B){B===void 0&&(B=t.TEXTURE0+X-1),fe!==B&&(t.activeTexture(B),fe=B)}function Z(B,Se,we){we===void 0&&(fe===null?we=t.TEXTURE0+X-1:we=fe);let De=ye[we];De===void 0&&(De={type:void 0,texture:void 0},ye[we]=De),(De.type!==B||De.texture!==Se)&&(fe!==we&&(t.activeTexture(we),fe=we),t.bindTexture(B,Se||se[B]),De.type=B,De.texture=Se)}function w(){const B=ye[fe];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function $(){try{t.texSubImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function K(){try{t.texSubImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function pe(){try{t.texStorage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function Pe(){try{t.texStorage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function ze(){try{t.texImage2D(...arguments)}catch(B){ct("WebGLState:",B)}}function me(){try{t.texImage3D(...arguments)}catch(B){ct("WebGLState:",B)}}function xe(B){Fe.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Fe.copy(B))}function Me(B){at.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),at.copy(B))}function Ce(B,Se){let we=c.get(Se);we===void 0&&(we=new WeakMap,c.set(Se,we));let De=we.get(B);De===void 0&&(De=t.getUniformBlockIndex(Se,B.name),we.set(B,De))}function Re(B,Se){const De=c.get(Se).get(B);l.get(Se)!==De&&(t.uniformBlockBinding(Se,De,B.__bindingPointIndex),l.set(Se,De))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},fe=null,ye={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,y=null,E=null,A=null,D=null,R=null,I=new nt(0,0,0),v=0,T=!1,Q=null,P=null,N=null,V=null,ee=null,Fe.set(0,0,t.canvas.width,t.canvas.height),at.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:ve,bindFramebuffer:He,drawBuffers:re,useProgram:te,setBlending:k,setMaterial:U,setFlipSided:F,setCullFace:Y,setLineWidth:S,setPolygonOffset:ae,setScissorTest:oe,activeTexture:ie,bindTexture:Z,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:ze,texImage3D:me,updateUBOMapping:Ce,uniformBlockBinding:Re,texStorage2D:pe,texStorage3D:Pe,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:be,scissor:xe,viewport:Me,reset:Je}}function r2(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,g){return p?new OffscreenCanvas(w,g):fo("canvas")}function x(w,g,L){let $=1;const K=Z(w);if((K.width>L||K.height>L)&&($=L/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor($*K.width),be=Math.floor($*K.height);f===void 0&&(f=_(q,be));const pe=g?_(q,be):f;return pe.width=q,pe.height=be,pe.getContext("2d").drawImage(w,0,0,q,be),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+be+")."),pe}else return"data"in w&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){t.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(w,g,L,$,K=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=g;if(g===t.RED&&(L===t.FLOAT&&(q=t.R32F),L===t.HALF_FLOAT&&(q=t.R16F),L===t.UNSIGNED_BYTE&&(q=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(q=t.R8UI),L===t.UNSIGNED_SHORT&&(q=t.R16UI),L===t.UNSIGNED_INT&&(q=t.R32UI),L===t.BYTE&&(q=t.R8I),L===t.SHORT&&(q=t.R16I),L===t.INT&&(q=t.R32I)),g===t.RG&&(L===t.FLOAT&&(q=t.RG32F),L===t.HALF_FLOAT&&(q=t.RG16F),L===t.UNSIGNED_BYTE&&(q=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(q=t.RG8UI),L===t.UNSIGNED_SHORT&&(q=t.RG16UI),L===t.UNSIGNED_INT&&(q=t.RG32UI),L===t.BYTE&&(q=t.RG8I),L===t.SHORT&&(q=t.RG16I),L===t.INT&&(q=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(q=t.RGB8UI),L===t.UNSIGNED_SHORT&&(q=t.RGB16UI),L===t.UNSIGNED_INT&&(q=t.RGB32UI),L===t.BYTE&&(q=t.RGB8I),L===t.SHORT&&(q=t.RGB16I),L===t.INT&&(q=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),L===t.UNSIGNED_INT&&(q=t.RGBA32UI),L===t.BYTE&&(q=t.RGBA8I),L===t.SHORT&&(q=t.RGBA16I),L===t.INT&&(q=t.RGBA32I)),g===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),g===t.RGBA){const be=K?qa:ot.getTransfer($);L===t.FLOAT&&(q=t.RGBA32F),L===t.HALF_FLOAT&&(q=t.RGBA16F),L===t.UNSIGNED_BYTE&&(q=be===pt?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(w,g){let L;return w?g===null||g===si||g===co?L=t.DEPTH24_STENCIL8:g===Jn?L=t.DEPTH32F_STENCIL8:g===lo&&(L=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===si||g===co?L=t.DEPTH_COMPONENT24:g===Jn?L=t.DEPTH_COMPONENT32F:g===lo&&(L=t.DEPTH_COMPONENT16),L}function D(w,g){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==Zt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),v(g),g.isVideoTexture&&u.delete(g)}function I(w){const g=w.target;g.removeEventListener("dispose",I),Q(g)}function v(w){const g=i.get(w);if(g.__webglInit===void 0)return;const L=w.source,$=d.get(L);if($){const K=$[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(w),Object.keys($).length===0&&d.delete(L)}i.remove(w)}function T(w){const g=i.get(w);t.deleteTexture(g.__webglTexture);const L=w.source,$=d.get(L);delete $[g.__cacheKey],o.memory.textures--}function Q(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let K=0;K<g.__webglFramebuffer[$].length;K++)t.deleteFramebuffer(g.__webglFramebuffer[$][K]);else t.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)t.deleteFramebuffer(g.__webglFramebuffer[$]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=w.textures;for(let $=0,K=L.length;$<K;$++){const q=i.get(L[$]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[$])}i.remove(w)}let P=0;function N(){P=0}function V(){const w=P;return w>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function ee(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function X(w,g){const L=i.get(w);if(w.isVideoTexture&&oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&L.__version!==w.version){const $=w.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{se(L,w,g);return}}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function G(w,g){const L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){se(L,w,g);return}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function O(w,g){const L=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){se(L,w,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function de(w,g){const L=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&L.__version!==w.version){ge(L,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const fe={[jc]:t.REPEAT,[xi]:t.CLAMP_TO_EDGE,[Kc]:t.MIRRORED_REPEAT},ye={[Wt]:t.NEAREST,[_M]:t.NEAREST_MIPMAP_NEAREST,[ko]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Vl]:t.LINEAR_MIPMAP_NEAREST,[Cs]:t.LINEAR_MIPMAP_LINEAR},ue={[bM]:t.NEVER,[EM]:t.ALWAYS,[wM]:t.LESS,[_d]:t.LEQUAL,[yM]:t.EQUAL,[vd]:t.GEQUAL,[SM]:t.GREATER,[MM]:t.NOTEQUAL};function he(w,g){if(g.type===Jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Zt||g.magFilter===Vl||g.magFilter===ko||g.magFilter===Cs||g.minFilter===Zt||g.minFilter===Vl||g.minFilter===ko||g.minFilter===Cs)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,fe[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,fe[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,fe[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ye[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Wt||g.minFilter!==ko&&g.minFilter!==Cs||g.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Fe(w,g){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const $=g.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const q=ee(g);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[q].usedTimes++;const be=K[w.__cacheKey];be!==void 0&&(K[w.__cacheKey].usedTimes--,be.usedTimes===0&&T(g)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return L}function at(w,g,L){return Math.floor(Math.floor(w/L)/g)}function it(w,g,L,$){const q=w.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,$,g.data);else{q.sort((me,xe)=>me.start-xe.start);let be=0;for(let me=1;me<q.length;me++){const xe=q[be],Me=q[me],Ce=xe.start+xe.count,Re=at(Me.start,g.width,4),Je=at(xe.start,g.width,4);Me.start<=Ce+1&&Re===Je&&at(Me.start+Me.count-1,g.width,4)===Re?xe.count=Math.max(xe.count,Me.start+Me.count-xe.start):(++be,q[be]=Me)}q.length=be+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let me=0,xe=q.length;me<xe;me++){const Me=q[me],Ce=Math.floor(Me.start/4),Re=Math.ceil(Me.count/4),Je=Ce%g.width,B=Math.floor(Ce/g.width),Se=Re,we=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Je,B,Se,we,L,$,g.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function se(w,g,L){let $=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=t.TEXTURE_3D);const K=Fe(w,g),q=g.source;n.bindTexture($,w.__webglTexture,t.TEXTURE0+L);const be=i.get(q);if(q.version!==be.__version||K===!0){n.activeTexture(t.TEXTURE0+L);const pe=ot.getPrimaries(ot.workingColorSpace),Pe=g.colorSpace===qi?null:ot.getPrimaries(g.colorSpace),ze=g.colorSpace===qi||pe===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let me=x(g.image,!1,s.maxTextureSize);me=ie(g,me);const xe=r.convert(g.format,g.colorSpace),Me=r.convert(g.type);let Ce=E(g.internalFormat,xe,Me,g.colorSpace,g.isVideoTexture);he($,g);let Re;const Je=g.mipmaps,B=g.isVideoTexture!==!0,Se=be.__version===void 0||K===!0,we=q.dataReady,De=D(g,me);if(g.isDepthTexture)Ce=A(g.format===Rs,g.type),Se&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ce,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Ce,me.width,me.height,0,xe,Me,null));else if(g.isDataTexture)if(Je.length>0){B&&Se&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Je[0].width,Je[0].height);for(let _e=0,ce=Je.length;_e<ce;_e++)Re=Je[_e],B?we&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Re.width,Re.height,xe,Me,Re.data):n.texImage2D(t.TEXTURE_2D,_e,Ce,Re.width,Re.height,0,xe,Me,Re.data);g.generateMipmaps=!1}else B?(Se&&n.texStorage2D(t.TEXTURE_2D,De,Ce,me.width,me.height),we&&it(g,me,xe,Me)):n.texImage2D(t.TEXTURE_2D,0,Ce,me.width,me.height,0,xe,Me,me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){B&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,Je[0].width,Je[0].height,me.depth);for(let _e=0,ce=Je.length;_e<ce;_e++)if(Re=Je[_e],g.format!==zn)if(xe!==null)if(B){if(we)if(g.layerUpdates.size>0){const Ie=_h(Re.width,Re.height,g.format,g.type);for(const We of g.layerUpdates){const bt=Re.data.subarray(We*Ie/Re.data.BYTES_PER_ELEMENT,(We+1)*Ie/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,We,Re.width,Re.height,1,xe,bt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,me.depth,xe,Re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Ce,Re.width,Re.height,me.depth,0,Re.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?we&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,me.depth,xe,Me,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Ce,Re.width,Re.height,me.depth,0,xe,Me,Re.data)}else{B&&Se&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Je[0].width,Je[0].height);for(let _e=0,ce=Je.length;_e<ce;_e++)Re=Je[_e],g.format!==zn?xe!==null?B?we&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Re.width,Re.height,xe,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Ce,Re.width,Re.height,0,Re.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?we&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Re.width,Re.height,xe,Me,Re.data):n.texImage2D(t.TEXTURE_2D,_e,Ce,Re.width,Re.height,0,xe,Me,Re.data)}else if(g.isDataArrayTexture)if(B){if(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,me.width,me.height,me.depth),we)if(g.layerUpdates.size>0){const _e=_h(me.width,me.height,g.format,g.type);for(const ce of g.layerUpdates){const Ie=me.data.subarray(ce*_e/me.data.BYTES_PER_ELEMENT,(ce+1)*_e/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,xe,Me,Ie)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,Me,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,me.width,me.height,me.depth,0,xe,Me,me.data);else if(g.isData3DTexture)B?(Se&&n.texStorage3D(t.TEXTURE_3D,De,Ce,me.width,me.height,me.depth),we&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,Me,me.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,me.width,me.height,me.depth,0,xe,Me,me.data);else if(g.isFramebufferTexture){if(Se)if(B)n.texStorage2D(t.TEXTURE_2D,De,Ce,me.width,me.height);else{let _e=me.width,ce=me.height;for(let Ie=0;Ie<De;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Ce,_e,ce,0,xe,Me,null),_e>>=1,ce>>=1}}else if(Je.length>0){if(B&&Se){const _e=Z(Je[0]);n.texStorage2D(t.TEXTURE_2D,De,Ce,_e.width,_e.height)}for(let _e=0,ce=Je.length;_e<ce;_e++)Re=Je[_e],B?we&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,xe,Me,Re):n.texImage2D(t.TEXTURE_2D,_e,Ce,xe,Me,Re);g.generateMipmaps=!1}else if(B){if(Se){const _e=Z(me);n.texStorage2D(t.TEXTURE_2D,De,Ce,_e.width,_e.height)}we&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Me,me)}else n.texImage2D(t.TEXTURE_2D,0,Ce,xe,Me,me);m(g)&&h($),be.__version=q.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ge(w,g,L){if(g.image.length!==6)return;const $=Fe(w,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+L);const q=i.get(K);if(K.version!==q.__version||$===!0){n.activeTexture(t.TEXTURE0+L);const be=ot.getPrimaries(ot.workingColorSpace),pe=g.colorSpace===qi?null:ot.getPrimaries(g.colorSpace),Pe=g.colorSpace===qi||be===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ze=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let ce=0;ce<6;ce++)!ze&&!me?xe[ce]=x(g.image[ce],!0,s.maxCubemapSize):xe[ce]=me?g.image[ce].image:g.image[ce],xe[ce]=ie(g,xe[ce]);const Me=xe[0],Ce=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),Je=E(g.internalFormat,Ce,Re,g.colorSpace),B=g.isVideoTexture!==!0,Se=q.__version===void 0||$===!0,we=K.dataReady;let De=D(g,Me);he(t.TEXTURE_CUBE_MAP,g);let _e;if(ze){B&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Je,Me.width,Me.height);for(let ce=0;ce<6;ce++){_e=xe[ce].mipmaps;for(let Ie=0;Ie<_e.length;Ie++){const We=_e[Ie];g.format!==zn?Ce!==null?B?we&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,We.width,We.height,Ce,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,Je,We.width,We.height,0,We.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,We.width,We.height,Ce,Re,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,Je,We.width,We.height,0,Ce,Re,We.data)}}}else{if(_e=g.mipmaps,B&&Se){_e.length>0&&De++;const ce=Z(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){B?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,xe[ce].width,xe[ce].height,Ce,Re,xe[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,xe[ce].width,xe[ce].height,0,Ce,Re,xe[ce].data);for(let Ie=0;Ie<_e.length;Ie++){const bt=_e[Ie].image[ce].image;B?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,bt.width,bt.height,Ce,Re,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,Je,bt.width,bt.height,0,Ce,Re,bt.data)}}else{B?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce,Re,xe[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Ce,Re,xe[ce]);for(let Ie=0;Ie<_e.length;Ie++){const We=_e[Ie];B?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,Ce,Re,We.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,Je,Ce,Re,We.image[ce])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),q.__version=K.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ve(w,g,L,$,K,q){const be=r.convert(L.format,L.colorSpace),pe=r.convert(L.type),Pe=E(L.internalFormat,be,pe,L.colorSpace),ze=i.get(g),me=i.get(L);if(me.__renderTarget=g,!ze.__hasExternalTextures){const xe=Math.max(1,g.width>>q),Me=Math.max(1,g.height>>q);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,q,Pe,xe,Me,g.depth,0,be,pe,null):n.texImage2D(K,q,Pe,xe,Me,0,be,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),ae(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,K,me.__webglTexture,0,S(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,K,me.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(w,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const $=g.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=A(g.stencilBuffer,K),be=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ae(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,S(g),q,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,S(g),q,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,q,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,w)}else{const $=g.textures;for(let K=0;K<$.length;K++){const q=$[K],be=r.convert(q.format,q.colorSpace),pe=r.convert(q.type),Pe=E(q.internalFormat,be,pe,q.colorSpace);ae(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,S(g),Pe,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,S(g),Pe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(w,g,L){const $=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),he(t.TEXTURE_CUBE_MAP,g.depthTexture);const ze=r.convert(g.depthTexture.format),me=r.convert(g.depthTexture.type);let xe;g.depthTexture.format===Ti?xe=t.DEPTH_COMPONENT24:g.depthTexture.format===Rs&&(xe=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,xe,g.width,g.height,0,ze,me,null)}}else X(g.depthTexture,0);const q=K.__webglTexture,be=S(g),pe=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,Pe=g.depthTexture.format===Rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ti)ae(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,pe,q,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,pe,q,0);else if(g.depthTexture.format===Rs)ae(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,pe,q,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,pe,q,0);else throw new Error("Unknown depthTexture format")}function te(w){const g=i.get(w),L=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=$}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)re(g.__webglFramebuffer[$],w,$);else{const $=w.texture.mipmaps;$&&$.length>0?re(g.__webglFramebuffer[0],w,0):re(g.__webglFramebuffer,w,0)}else if(L){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=t.createRenderbuffer(),He(g.__webglDepthbuffer[$],w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,q)}}else{const $=w.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),He(g.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function M(w,g,L){const $=i.get(w);g!==void 0&&ve($.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&te(w)}function C(w){const g=w.texture,L=i.get(w),$=i.get(g);w.addEventListener("dispose",I);const K=w.textures,q=w.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=g.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[pe]=[];for(let Pe=0;Pe<g.mipmaps.length;Pe++)L.__webglFramebuffer[pe][Pe]=t.createFramebuffer()}else L.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)L.__webglFramebuffer[pe]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(be)for(let pe=0,Pe=K.length;pe<Pe;pe++){const ze=i.get(K[pe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&ae(w)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let pe=0;pe<K.length;pe++){const Pe=K[pe];L.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[pe]);const ze=r.convert(Pe.format,Pe.colorSpace),me=r.convert(Pe.type),xe=E(Pe.internalFormat,ze,me,Pe.colorSpace,w.isXRRenderTarget===!0),Me=S(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,xe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,L.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),He(L.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),he(t.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)ve(L.__webglFramebuffer[pe][Pe],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe);else ve(L.__webglFramebuffer[pe],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let pe=0,Pe=K.length;pe<Pe;pe++){const ze=K[pe],me=i.get(ze);let xe=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,me.__webglTexture),he(xe,ze),ve(L.__webglFramebuffer,w,ze,t.COLOR_ATTACHMENT0+pe,xe,0),m(ze)&&h(xe)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,$.__webglTexture),he(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)ve(L.__webglFramebuffer[Pe],w,g,t.COLOR_ATTACHMENT0,pe,Pe);else ve(L.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,pe,0);m(g)&&h(pe),n.unbindTexture()}w.depthBuffer&&te(w)}function k(w){const g=w.textures;for(let L=0,$=g.length;L<$;L++){const K=g[L];if(m(K)){const q=y(w),be=i.get(K).__webglTexture;n.bindTexture(q,be),h(q),n.unbindTexture()}}}const U=[],F=[];function Y(w){if(w.samples>0){if(ae(w)===!1){const g=w.textures,L=w.width,$=w.height;let K=t.COLOR_BUFFER_BIT;const q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(w),pe=g.length>1;if(pe)for(let ze=0;ze<g.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ze=0;ze<g.length;ze++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ze]);const me=i.get(g[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,L,$,0,0,L,$,K,t.NEAREST),l===!0&&(U.length=0,F.length=0,U.push(t.COLOR_ATTACHMENT0+ze),w.depthBuffer&&w.resolveDepthBuffer===!1&&(U.push(q),F.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ze=0;ze<g.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,be.__webglColorRenderbuffer[ze]);const me=i.get(g[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function S(w){return Math.min(s.maxSamples,w.samples)}function ae(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function oe(w){const g=o.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function ie(w,g){const L=w.colorSpace,$=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==wr&&L!==qi&&(ot.getTransfer(L)===pt?($!==zn||K!==xn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",L)),g}function Z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=de,this.rebindTextures=M,this.setupRenderTarget=C,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function o2(t,e){function n(i,s=qi){let r;const o=ot.getTransfer(s);if(i===xn)return t.UNSIGNED_BYTE;if(i===fd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===og)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ig)return t.BYTE;if(i===sg)return t.SHORT;if(i===lo)return t.UNSIGNED_SHORT;if(i===dd)return t.INT;if(i===si)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===ag)return t.ALPHA;if(i===lg)return t.RGB;if(i===zn)return t.RGBA;if(i===Ti)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===cg)return t.RED;if(i===pd)return t.RED_INTEGER;if(i===br)return t.RG;if(i===md)return t.RG_INTEGER;if(i===gd)return t.RGBA_INTEGER;if(i===wa||i===ya||i===Sa||i===Ma)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===Jc||i===Qc||i===eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tu||i===nu)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===iu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===su)return r.COMPRESSED_R11_EAC;if(i===ru)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ou)return r.COMPRESSED_RG11_EAC;if(i===au)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lu||i===cu||i===uu||i===du||i===fu||i===hu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===bu||i===wu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_u)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===Su||i===Mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yu)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===Tu||i===Au||i===Cu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ai({vertexShader:a2,fragmentShader:l2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new yl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u2 extends ks{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new c2,h={},y=n.getContextAttributes();let E=null,A=null;const D=[],R=[],I=new Ye;let v=null;const T=new vn;T.viewport=new Et;const Q=new vn;Q.viewport=new Et;const P=[T,Q],N=new bE;let V=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=D[se];return ge===void 0&&(ge=new Yl,D[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=D[se];return ge===void 0&&(ge=new Yl,D[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=D[se];return ge===void 0&&(ge=new Yl,D[se]=ge),ge.getHandSpace()};function X(se){const ge=R.indexOf(se.inputSource);if(ge===-1)return;const ve=D[ge];ve!==void 0&&(ve.update(se.inputSource,se.frame,c||o),ve.dispatchEvent({type:se.type,data:se.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",O);for(let se=0;se<D.length;se++){const ge=R[se];ge!==null&&(R[se]=null,D[se].disconnect(ge))}V=null,ee=null,m.reset();for(const se in h)delete h[se];e.setRenderTarget(E),p=null,d=null,f=null,s=null,A=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,re=null;y.depth&&(re=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=y.stencil?Rs:Ti,He=y.stencil?co:si);const te={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new ti(d.textureWidth,d.textureHeight,{format:zn,type:xn,depthTexture:new ho(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ti(p.framebufferWidth,p.framebufferHeight,{format:zn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(se){for(let ge=0;ge<se.removed.length;ge++){const ve=se.removed[ge],He=R.indexOf(ve);He>=0&&(R[He]=null,D[He].disconnect(ve))}for(let ge=0;ge<se.added.length;ge++){const ve=se.added[ge];let He=R.indexOf(ve);if(He===-1){for(let te=0;te<D.length;te++)if(te>=R.length){R.push(ve),He=te;break}else if(R[te]===null){R[te]=ve,He=te;break}if(He===-1)break}const re=D[He];re&&re.connect(ve)}}const de=new W,fe=new W;function ye(se,ge,ve){de.setFromMatrixPosition(ge.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const He=de.distanceTo(fe),re=ge.projectionMatrix.elements,te=ve.projectionMatrix.elements,M=re[14]/(re[10]-1),C=re[14]/(re[10]+1),k=(re[9]+1)/re[5],U=(re[9]-1)/re[5],F=(re[8]-1)/re[0],Y=(te[8]+1)/te[0],S=M*F,ae=M*Y,oe=He/(-F+Y),ie=oe*-F;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ie),se.translateZ(oe),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Z=M+oe,w=C+oe,g=S-ie,L=ae+(He-ie),$=k*C/w*Z,K=U*C/w*Z;se.projectionMatrix.makePerspective(g,L,$,K,Z,w),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ue(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let ge=se.near,ve=se.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),N.near=Q.near=T.near=ge,N.far=Q.far=T.far=ve,(V!==N.near||ee!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,ee=N.far),N.layers.mask=se.layers.mask|6,T.layers.mask=N.layers.mask&-5,Q.layers.mask=N.layers.mask&-3;const He=se.parent,re=N.cameras;ue(N,He);for(let te=0;te<re.length;te++)ue(re[te],He);re.length===2?ye(N,T,Q):N.projectionMatrix.copy(T.projectionMatrix),he(se,N,He)};function he(se,ge,ve){ve===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(ve.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ru*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(se){return h[se]};let Fe=null;function at(se,ge){if(u=ge.getViewerPose(c||o),_=ge,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let He=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,He=!0);for(let C=0;C<ve.length;C++){const k=ve[C];let U=null;if(p!==null)U=p.getViewport(k);else{const Y=f.getViewSubImage(d,k);U=Y.viewport,C===0&&(e.setRenderTargetTextures(A,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(A))}let F=P[C];F===void 0&&(F=new vn,F.layers.enable(C),F.viewport=new Et,P[C]=F),F.matrix.fromArray(k.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(k.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(U.x,U.y,U.width,U.height),C===0&&(N.matrix.copy(F.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),He===!0&&N.cameras.push(F)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const C=f.getDepthInformation(ve[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(re&&re.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<ve.length;C++){const k=ve[C].camera;if(k){let U=h[k];U||(U=new bg,h[k]=U);const F=f.getCameraImage(k);U.sourceTexture=F}}}}for(let ve=0;ve<D.length;ve++){const He=R[ve],re=D[ve];He!==null&&re!==void 0&&re.update(He,ge,c||o)}Fe&&Fe(se,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const it=new Mg;it.setAnimationLoop(at),this.setAnimationLoop=function(se){Fe=se},this.dispose=function(){}}}const xs=new ri,d2=new St;function f2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,wg(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,E,A){h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,A)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),E=y.envMap,A=y.envMapRotation;E&&(m.envMap.value=E,xs.copy(A),xs.x*=-1,xs.y*=-1,xs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(xs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function h2(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const A=E.program;i.uniformBlockBinding(y,A)}function c(y,E){let A=s[y.id];A===void 0&&(_(y),A=u(y),s[y.id]=A,y.addEventListener("dispose",m));const D=E.program;i.updateUBOMapping(y,D);const R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function u(y){const E=f();y.__bindingPointIndex=E;const A=t.createBuffer(),D=y.__size,R=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,D,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],A=y.uniforms,D=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,I=A.length;R<I;R++){const v=Array.isArray(A[R])?A[R]:[A[R]];for(let T=0,Q=v.length;T<Q;T++){const P=v[T];if(p(P,R,T,D)===!0){const N=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let ee=0;for(let X=0;X<V.length;X++){const G=V[X],O=x(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,N+ee,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,ee),ee+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,E,A,D){const R=y.value,I=E+"_"+A;if(D[I]===void 0)return typeof R=="number"||typeof R=="boolean"?D[I]=R:D[I]=R.clone(),!0;{const v=D[I];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return D[I]=R,!0}else if(v.equals(R)===!1)return v.copy(R),!0}return!1}function _(y){const E=y.uniforms;let A=0;const D=16;for(let I=0,v=E.length;I<v;I++){const T=Array.isArray(E[I])?E[I]:[E[I]];for(let Q=0,P=T.length;Q<P;Q++){const N=T[Q],V=Array.isArray(N.value)?N.value:[N.value];for(let ee=0,X=V.length;ee<X;ee++){const G=V[ee],O=x(G),de=A%D,fe=de%O.boundary,ye=de+fe;A+=fe,ye!==0&&D-ye<O.storage&&(A+=D-ye),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=O.storage}}}const R=A%D;return R>0&&(A+=D-R),y.__size=A,y.__cache={},this}function x(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}const p2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function m2(){return Xn===null&&(Xn=new ZM(p2,16,16,br,Ei),Xn.name="DFG_LUT",Xn.minFilter=Zt,Xn.magFilter=Zt,Xn.wrapS=xi,Xn.wrapT=xi,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class g2{constructor(e={}){const{canvas:n=AM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=xn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=p,m=new Set([gd,md,pd]),h=new Set([xn,si,lo,co,fd,hd]),y=new Uint32Array(4),E=new Int32Array(4);let A=null,D=null;const R=[],I=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let Q=!1;this._outputColorSpace=An;let P=0,N=0,V=null,ee=-1,X=null;const G=new Et,O=new Et;let de=null;const fe=new nt(0);let ye=0,ue=n.width,he=n.height,Fe=1,at=null,it=null;const se=new Et(0,0,ue,he),ge=new Et(0,0,ue,he);let ve=!1;const He=new yd;let re=!1,te=!1;const M=new St,C=new W,k=new Et,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function Y(){return V===null?Fe:1}let S=i;function ae(b,H){return n.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ud}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",We,!1),n.addEventListener("webglcontextcreationerror",bt,!1),S===null){const H="webgl2";if(S=ae(H,b),S===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ct("WebGLRenderer: "+b.message),b}let oe,ie,Z,w,g,L,$,K,q,be,pe,Pe,ze,me,xe,Me,Ce,Re,Je,B,Se,we,De;function _e(){oe=new g1(S),oe.init(),Se=new o2(S,oe),ie=new l1(S,oe,e,Se),Z=new s2(S,oe),ie.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),w=new x1(S),g=new WC,L=new r2(S,oe,Z,g,ie,Se,w),$=new m1(T),K=new ME(S),we=new o1(S,K),q=new _1(S,K,w,we),be=new w1(S,q,K,we,w),Re=new b1(S,ie,L),xe=new c1(g),pe=new GC(T,$,oe,ie,we,xe),Pe=new f2(T,g),ze=new XC,me=new JC(oe),Ce=new r1(T,$,Z,be,_,l),Me=new i2(T,be,ie),De=new h2(S,w,ie,Z),Je=new a1(S,oe,w),B=new v1(S,oe,w),w.programs=pe.programs,T.capabilities=ie,T.extensions=oe,T.properties=g,T.renderLists=ze,T.shadowMap=Me,T.state=Z,T.info=w}_e(),x!==xn&&(v=new S1(x,n.width,n.height,s,r));const ce=new u2(T,S);this.xr=ce,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(b){b!==void 0&&(Fe=b,this.setSize(ue,he,!1))},this.getSize=function(b){return b.set(ue,he)},this.setSize=function(b,H,ne=!0){if(ce.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=b,he=H,n.width=Math.floor(b*Fe),n.height=Math.floor(H*Fe),ne===!0&&(n.style.width=b+"px",n.style.height=H+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ue*Fe,he*Fe).floor()},this.setDrawingBufferSize=function(b,H,ne){ue=b,he=H,Fe=ne,n.width=Math.floor(b*ne),n.height=Math.floor(H*ne),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(x===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,H,ne,J){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,H,ne,J),Z.viewport(G.copy(se).multiplyScalar(Fe).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,H,ne,J){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,H,ne,J),Z.scissor(O.copy(ge).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){Z.setScissorTest(ve=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,ne=!0){let J=0;if(b){let j=!1;if(V!==null){const Te=V.texture.format;j=m.has(Te)}if(j){const Te=V.texture.type,Le=h.has(Te),Ae=Ce.getClearColor(),Ue=Ce.getClearAlpha(),Be=Ae.r,Xe=Ae.g,Qe=Ae.b;Le?(y[0]=Be,y[1]=Xe,y[2]=Qe,y[3]=Ue,S.clearBufferuiv(S.COLOR,0,y)):(E[0]=Be,E[1]=Xe,E[2]=Qe,E[3]=Ue,S.clearBufferiv(S.COLOR,0,E))}else J|=S.COLOR_BUFFER_BIT}H&&(J|=S.DEPTH_BUFFER_BIT),ne&&(J|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&S.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),Ce.dispose(),ze.dispose(),me.dispose(),g.dispose(),$.dispose(),be.dispose(),we.dispose(),De.dispose(),pe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Rd),ce.removeEventListener("sessionend",Pd),as.stop()};function Ie(b){b.preventDefault(),Wf("WebGLRenderer: Context Lost."),Q=!0}function We(){Wf("WebGLRenderer: Context Restored."),Q=!1;const b=w.autoReset,H=Me.enabled,ne=Me.autoUpdate,J=Me.needsUpdate,j=Me.type;_e(),w.autoReset=b,Me.enabled=H,Me.autoUpdate=ne,Me.needsUpdate=J,Me.type=j}function bt(b){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const H=b.target;H.removeEventListener("dispose",ht),ci(H)}function ci(b){ui(b),g.remove(b)}function ui(b){const H=g.get(b).programs;H!==void 0&&(H.forEach(function(ne){pe.releaseProgram(ne)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,ne,J,j,Te){H===null&&(H=U);const Le=j.isMesh&&j.matrixWorld.determinant()<0,Ae=Fg(b,H,ne,J,j);Z.setMaterial(J,Le);let Ue=ne.index,Be=1;if(J.wireframe===!0){if(Ue=q.getWireframeAttribute(ne),Ue===void 0)return;Be=2}const Xe=ne.drawRange,Qe=ne.attributes.position;let ke=Xe.start*Be,mt=(Xe.start+Xe.count)*Be;Te!==null&&(ke=Math.max(ke,Te.start*Be),mt=Math.min(mt,(Te.start+Te.count)*Be)),Ue!==null?(ke=Math.max(ke,0),mt=Math.min(mt,Ue.count)):Qe!=null&&(ke=Math.max(ke,0),mt=Math.min(mt,Qe.count));const Tt=mt-ke;if(Tt<0||Tt===1/0)return;we.setup(j,J,Ae,ne,Ue);let Mt,gt=Je;if(Ue!==null&&(Mt=K.get(Ue),gt=B,gt.setIndex(Mt)),j.isMesh)J.wireframe===!0?(Z.setLineWidth(J.wireframeLinewidth*Y()),gt.setMode(S.LINES)):gt.setMode(S.TRIANGLES);else if(j.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),Z.setLineWidth(Xt*Y()),j.isLineSegments?gt.setMode(S.LINES):j.isLineLoop?gt.setMode(S.LINE_LOOP):gt.setMode(S.LINE_STRIP)}else j.isPoints?gt.setMode(S.POINTS):j.isSprite&&gt.setMode(S.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Xt=j._multiDrawStarts,Ne=j._multiDrawCounts,mn=j._multiDrawCount,lt=Ue?K.get(Ue).bytesPerElement:1,In=g.get(J).currentProgram.getUniforms();for(let Gn=0;Gn<mn;Gn++)In.setValue(S,"_gl_DrawID",Gn),gt.render(Xt[Gn]/lt,Ne[Gn])}else if(j.isInstancedMesh)gt.renderInstances(ke,Tt,j.count);else if(ne.isInstancedBufferGeometry){const Xt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ne=Math.min(ne.instanceCount,Xt);gt.renderInstances(ke,Tt,Ne)}else gt.render(ke,Tt)};function Cd(b,H,ne){b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,Co(b,H,ne),b.side=rs,b.needsUpdate=!0,Co(b,H,ne),b.side=vi):Co(b,H,ne)}this.compile=function(b,H,ne=null){ne===null&&(ne=b),D=me.get(ne),D.init(H),I.push(D),ne.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(D.pushLight(j),j.castShadow&&D.pushShadow(j))}),b!==ne&&b.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(D.pushLight(j),j.castShadow&&D.pushShadow(j))}),D.setupLights();const J=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ae=Te[Le];Cd(Ae,ne,j),J.add(Ae)}else Cd(Te,ne,j),J.add(Te)}),D=I.pop(),J},this.compileAsync=function(b,H,ne=null){const J=this.compile(b,H,ne);return new Promise(j=>{function Te(){if(J.forEach(function(Le){g.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){j(b);return}setTimeout(Te,10)}oe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let El=null;function Ng(b){El&&El(b)}function Rd(){as.stop()}function Pd(){as.start()}const as=new Mg;as.setAnimationLoop(Ng),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(b){El=b,ce.setAnimationLoop(b),b===null?as.stop():as.start()},ce.addEventListener("sessionstart",Rd),ce.addEventListener("sessionend",Pd),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const ne=ce.enabled===!0&&ce.isPresenting===!0,J=v!==null&&(V===null||ne)&&v.begin(T,V);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(H),H=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,H,V),D=me.get(b,I.length),D.init(H),I.push(D),M.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),He.setFromProjectionMatrix(M,Qn,H.reversedDepth),te=this.localClippingEnabled,re=xe.init(this.clippingPlanes,te),A=ze.get(b,R.length),A.init(),R.push(A),ce.enabled===!0&&ce.isPresenting===!0){const Le=T.xr.getDepthSensingMesh();Le!==null&&Tl(Le,H,-1/0,T.sortObjects)}Tl(b,H,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(at,it),F=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,F&&Ce.addToRenderList(A,b),this.info.render.frame++,re===!0&&xe.beginShadows();const j=D.state.shadowsArray;if(Me.render(j,b,H),re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&v.hasRenderPass())===!1){const Le=A.opaque,Ae=A.transmissive;if(D.setupLights(),H.isArrayCamera){const Ue=H.cameras;if(Ae.length>0)for(let Be=0,Xe=Ue.length;Be<Xe;Be++){const Qe=Ue[Be];Dd(Le,Ae,b,Qe)}F&&Ce.render(b);for(let Be=0,Xe=Ue.length;Be<Xe;Be++){const Qe=Ue[Be];Ld(A,b,Qe,Qe.viewport)}}else Ae.length>0&&Dd(Le,Ae,b,H),F&&Ce.render(b),Ld(A,b,H)}V!==null&&N===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),J&&v.end(T),b.isScene===!0&&b.onAfterRender(T,b,H),we.resetDefaultState(),ee=-1,X=null,I.pop(),I.length>0?(D=I[I.length-1],re===!0&&xe.setGlobalState(T.clippingPlanes,D.state.camera)):D=null,R.pop(),R.length>0?A=R[R.length-1]:A=null};function Tl(b,H,ne,J){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||He.intersectsSprite(b)){J&&k.setFromMatrixPosition(b.matrixWorld).applyMatrix4(M);const Le=be.update(b),Ae=b.material;Ae.visible&&A.push(b,Le,Ae,ne,k.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||He.intersectsObject(b))){const Le=be.update(b),Ae=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),k.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),k.copy(Le.boundingSphere.center)),k.applyMatrix4(b.matrixWorld).applyMatrix4(M)),Array.isArray(Ae)){const Ue=Le.groups;for(let Be=0,Xe=Ue.length;Be<Xe;Be++){const Qe=Ue[Be],ke=Ae[Qe.materialIndex];ke&&ke.visible&&A.push(b,Le,ke,ne,k.z,Qe)}}else Ae.visible&&A.push(b,Le,Ae,ne,k.z,null)}}const Te=b.children;for(let Le=0,Ae=Te.length;Le<Ae;Le++)Tl(Te[Le],H,ne,J)}function Ld(b,H,ne,J){const{opaque:j,transmissive:Te,transparent:Le}=b;D.setupLightsView(ne),re===!0&&xe.setGlobalState(T.clippingPlanes,ne),J&&Z.viewport(G.copy(J)),j.length>0&&Ao(j,H,ne),Te.length>0&&Ao(Te,H,ne),Le.length>0&&Ao(Le,H,ne),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Dd(b,H,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[J.id]===void 0){const ke=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[J.id]=new ti(1,1,{generateMipmaps:!0,type:ke?Ei:xn,minFilter:Cs,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Te=D.state.transmissionRenderTarget[J.id],Le=J.viewport||G;Te.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);const Ae=T.getRenderTarget(),Ue=T.getActiveCubeFace(),Be=T.getActiveMipmapLevel();T.setRenderTarget(Te),T.getClearColor(fe),ye=T.getClearAlpha(),ye<1&&T.setClearColor(16777215,.5),T.clear(),F&&Ce.render(ne);const Xe=T.toneMapping;T.toneMapping=ei;const Qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),re===!0&&xe.setGlobalState(T.clippingPlanes,J),Ao(b,ne,J),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let mt=0,Tt=H.length;mt<Tt;mt++){const Mt=H[mt],{object:gt,geometry:Xt,material:Ne,group:mn}=Mt;if(Ne.side===vi&&gt.layers.test(J.layers)){const lt=Ne.side;Ne.side=fn,Ne.needsUpdate=!0,Id(gt,ne,J,Xt,Ne,mn),Ne.side=lt,Ne.needsUpdate=!0,ke=!0}}ke===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}T.setRenderTarget(Ae,Ue,Be),T.setClearColor(fe,ye),Qe!==void 0&&(J.viewport=Qe),T.toneMapping=Xe}function Ao(b,H,ne){const J=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Te=b.length;j<Te;j++){const Le=b[j],{object:Ae,geometry:Ue,group:Be}=Le;let Xe=Le.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Ae.layers.test(ne.layers)&&Id(Ae,H,ne,Ue,Xe,Be)}}function Id(b,H,ne,J,j,Te){b.onBeforeRender(T,H,ne,J,j,Te),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(T,H,ne,J,b,Te),j.transparent===!0&&j.side===vi&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,T.renderBufferDirect(ne,H,J,j,b,Te),j.side=rs,j.needsUpdate=!0,T.renderBufferDirect(ne,H,J,j,b,Te),j.side=vi):T.renderBufferDirect(ne,H,J,j,b,Te),b.onAfterRender(T,H,ne,J,j,Te)}function Co(b,H,ne){H.isScene!==!0&&(H=U);const J=g.get(b),j=D.state.lights,Te=D.state.shadowsArray,Le=j.state.version,Ae=pe.getParameters(b,j.state,Te,H,ne),Ue=pe.getProgramCacheKey(Ae);let Be=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;const Xe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=$.get(b.envMap||J.environment,Xe),J.envMapRotation=J.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ht),Be=new Map,J.programs=Be);let Qe=Be.get(Ue);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===Le)return Nd(b,Ae),Qe}else Ae.uniforms=pe.getUniforms(b),b.onBeforeCompile(Ae,T),Qe=pe.acquireProgram(Ae,Ue),Be.set(Ue,Qe),J.uniforms=Ae.uniforms;const ke=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=xe.uniform),Nd(b,Ae),J.needsLights=Bg(b),J.lightsStateVersion=Le,J.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotLightMatrix.value=j.state.spotLightMatrix,ke.spotLightMap.value=j.state.spotLightMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function Ud(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Ta.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Nd(b,H){const ne=g.get(b);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function Fg(b,H,ne,J,j){H.isScene!==!0&&(H=U),L.resetTextureUnits();const Te=H.fog,Le=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Ae=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wr,Ue=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Be=$.get(J.envMap||Le,Ue),Xe=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Qe=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,Tt=!!ne.morphAttributes.color;let Mt=ei;J.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=T.toneMapping);const gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Xt=gt!==void 0?gt.length:0,Ne=g.get(J),mn=D.state.lights;if(re===!0&&(te===!0||b!==X)){const Bt=b===X&&J.id===ee;xe.setState(J,b,Bt)}let lt=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==mn.state.version||Ne.outputColorSpace!==Ae||j.isBatchedMesh&&Ne.batching===!1||!j.isBatchedMesh&&Ne.batching===!0||j.isBatchedMesh&&Ne.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ne.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ne.instancing===!1||!j.isInstancedMesh&&Ne.instancing===!0||j.isSkinnedMesh&&Ne.skinning===!1||!j.isSkinnedMesh&&Ne.skinning===!0||j.isInstancedMesh&&Ne.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ne.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ne.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ne.instancingMorph===!1&&j.morphTexture!==null||Ne.envMap!==Be||J.fog===!0&&Ne.fog!==Te||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==xe.numPlanes||Ne.numIntersection!==xe.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==Qe||Ne.morphTargets!==ke||Ne.morphNormals!==mt||Ne.morphColors!==Tt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==Xt)&&(lt=!0):(lt=!0,Ne.__version=J.version);let In=Ne.currentProgram;lt===!0&&(In=Co(J,H,j));let Gn=!1,ls=!1,zs=!1;const vt=In.getUniforms(),Gt=Ne.uniforms;if(Z.useProgram(In.program)&&(Gn=!0,ls=!0,zs=!0),J.id!==ee&&(ee=J.id,ls=!0),Gn||X!==b){Z.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(S,"projectionMatrix",b.projectionMatrix),vt.setValue(S,"viewMatrix",b.matrixWorldInverse);const Li=vt.map.cameraPosition;Li!==void 0&&Li.setValue(S,C.setFromMatrixPosition(b.matrixWorld)),ie.logarithmicDepthBuffer&&vt.setValue(S,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vt.setValue(S,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,ls=!0,zs=!0)}if(Ne.needsLights&&(mn.state.directionalShadowMap.length>0&&vt.setValue(S,"directionalShadowMap",mn.state.directionalShadowMap,L),mn.state.spotShadowMap.length>0&&vt.setValue(S,"spotShadowMap",mn.state.spotShadowMap,L),mn.state.pointShadowMap.length>0&&vt.setValue(S,"pointShadowMap",mn.state.pointShadowMap,L)),j.isSkinnedMesh){vt.setOptional(S,j,"bindMatrix"),vt.setOptional(S,j,"bindMatrixInverse");const Bt=j.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(S,"boneTexture",Bt.boneTexture,L))}j.isBatchedMesh&&(vt.setOptional(S,j,"batchingTexture"),vt.setValue(S,"batchingTexture",j._matricesTexture,L),vt.setOptional(S,j,"batchingIdTexture"),vt.setValue(S,"batchingIdTexture",j._indirectTexture,L),vt.setOptional(S,j,"batchingColorTexture"),j._colorsTexture!==null&&vt.setValue(S,"batchingColorTexture",j._colorsTexture,L));const Pi=ne.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Re.update(j,ne,In),(ls||Ne.receiveShadow!==j.receiveShadow)&&(Ne.receiveShadow=j.receiveShadow,vt.setValue(S,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Gt.envMapIntensity.value=H.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=m2()),ls&&(vt.setValue(S,"toneMappingExposure",T.toneMappingExposure),Ne.needsLights&&Og(Gt,zs),Te&&J.fog===!0&&Pe.refreshFogUniforms(Gt,Te),Pe.refreshMaterialUniforms(Gt,J,Fe,he,D.state.transmissionRenderTarget[b.id]),Ta.upload(S,Ud(Ne),Gt,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ta.upload(S,Ud(Ne),Gt,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vt.setValue(S,"center",j.center),vt.setValue(S,"modelViewMatrix",j.modelViewMatrix),vt.setValue(S,"normalMatrix",j.normalMatrix),vt.setValue(S,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Bt=J.uniformsGroups;for(let Li=0,Vs=Bt.length;Li<Vs;Li++){const Fd=Bt[Li];De.update(Fd,In),De.bind(Fd,In)}}return In}function Og(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Bg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(b,H,ne){const J=g.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),g.get(b.texture).__webglTexture=H,g.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ne,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const ne=g.get(b);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0};const kg=S.createFramebuffer();this.setRenderTarget=function(b,H=0,ne=0){V=b,P=H,N=ne;let J=null,j=!1,Te=!1;if(b){const Ae=g.get(b);if(Ae.__useDefaultFramebuffer!==void 0){Z.bindFramebuffer(S.FRAMEBUFFER,Ae.__webglFramebuffer),G.copy(b.viewport),O.copy(b.scissor),de=b.scissorTest,Z.viewport(G),Z.scissor(O),Z.setScissorTest(de),ee=-1;return}else if(Ae.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Ae.__hasExternalTextures)L.rebindTextures(b,g.get(b.texture).__webglTexture,g.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Xe=b.depthTexture;if(Ae.__boundDepthTexture!==Xe){if(Xe!==null&&g.has(Xe)&&(b.width!==Xe.image.width||b.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Be=g.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?J=Be[H][ne]:J=Be[H],j=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?J=g.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?J=Be[ne]:J=Be,G.copy(b.viewport),O.copy(b.scissor),de=b.scissorTest}else G.copy(se).multiplyScalar(Fe).floor(),O.copy(ge).multiplyScalar(Fe).floor(),de=ve;if(ne!==0&&(J=kg),Z.bindFramebuffer(S.FRAMEBUFFER,J)&&Z.drawBuffers(b,J),Z.viewport(G),Z.scissor(O),Z.setScissorTest(de),j){const Ae=g.get(b.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,ne)}else if(Te){const Ae=H;for(let Ue=0;Ue<b.textures.length;Ue++){const Be=g.get(b.textures[Ue]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,ne,Ae)}}else if(b!==null&&ne!==0){const Ae=g.get(b.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ae.__webglTexture,ne)}ee=-1},this.readRenderTargetPixels=function(b,H,ne,J,j,Te,Le,Ae=0){if(!(b&&b.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){Z.bindFramebuffer(S.FRAMEBUFFER,Ue);try{const Be=b.textures[Ae],Xe=Be.format,Qe=Be.type;if(b.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ae),!ie.textureFormatReadable(Xe)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Qe)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-J&&ne>=0&&ne<=b.height-j&&S.readPixels(H,ne,J,j,Se.convert(Xe),Se.convert(Qe),Te)}finally{const Be=V!==null?g.get(V).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,H,ne,J,j,Te,Le,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(H>=0&&H<=b.width-J&&ne>=0&&ne<=b.height-j){Z.bindFramebuffer(S.FRAMEBUFFER,Ue);const Be=b.textures[Ae],Xe=Be.format,Qe=Be.type;if(b.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ae),!ie.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ke),S.bufferData(S.PIXEL_PACK_BUFFER,Te.byteLength,S.STREAM_READ),S.readPixels(H,ne,J,j,Se.convert(Xe),Se.convert(Qe),0);const mt=V!==null?g.get(V).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,mt);const Tt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await CM(S,Tt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ke),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Te),S.deleteBuffer(ke),S.deleteSync(Tt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,ne=0){const J=Math.pow(2,-ne),j=Math.floor(b.image.width*J),Te=Math.floor(b.image.height*J),Le=H!==null?H.x:0,Ae=H!==null?H.y:0;L.setTexture2D(b,0),S.copyTexSubImage2D(S.TEXTURE_2D,ne,0,0,Le,Ae,j,Te),Z.unbindTexture()};const zg=S.createFramebuffer(),Vg=S.createFramebuffer();this.copyTextureToTexture=function(b,H,ne=null,J=null,j=0,Te=0){let Le,Ae,Ue,Be,Xe,Qe,ke,mt,Tt;const Mt=b.isCompressedTexture?b.mipmaps[Te]:b.image;if(ne!==null)Le=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Ue=ne.isBox3?ne.max.z-ne.min.z:1,Be=ne.min.x,Xe=ne.min.y,Qe=ne.isBox3?ne.min.z:0;else{const Gt=Math.pow(2,-j);Le=Math.floor(Mt.width*Gt),Ae=Math.floor(Mt.height*Gt),b.isDataArrayTexture?Ue=Mt.depth:b.isData3DTexture?Ue=Math.floor(Mt.depth*Gt):Ue=1,Be=0,Xe=0,Qe=0}J!==null?(ke=J.x,mt=J.y,Tt=J.z):(ke=0,mt=0,Tt=0);const gt=Se.convert(H.format),Xt=Se.convert(H.type);let Ne;H.isData3DTexture?(L.setTexture3D(H,0),Ne=S.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(L.setTexture2DArray(H,0),Ne=S.TEXTURE_2D_ARRAY):(L.setTexture2D(H,0),Ne=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,H.unpackAlignment);const mn=S.getParameter(S.UNPACK_ROW_LENGTH),lt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),In=S.getParameter(S.UNPACK_SKIP_PIXELS),Gn=S.getParameter(S.UNPACK_SKIP_ROWS),ls=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(S.UNPACK_SKIP_ROWS,Xe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Qe);const zs=b.isDataArrayTexture||b.isData3DTexture,vt=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Gt=g.get(b),Pi=g.get(H),Bt=g.get(Gt.__renderTarget),Li=g.get(Pi.__renderTarget);Z.bindFramebuffer(S.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Vs=0;Vs<Ue;Vs++)zs&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,g.get(b).__webglTexture,j,Qe+Vs),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,g.get(H).__webglTexture,Te,Tt+Vs)),S.blitFramebuffer(Be,Xe,Le,Ae,ke,mt,Le,Ae,S.DEPTH_BUFFER_BIT,S.NEAREST);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||g.has(b)){const Gt=g.get(b),Pi=g.get(H);Z.bindFramebuffer(S.READ_FRAMEBUFFER,zg),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,Vg);for(let Bt=0;Bt<Ue;Bt++)zs?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Gt.__webglTexture,j,Qe+Bt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Gt.__webglTexture,j),vt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pi.__webglTexture,Te,Tt+Bt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Pi.__webglTexture,Te),j!==0?S.blitFramebuffer(Be,Xe,Le,Ae,ke,mt,Le,Ae,S.COLOR_BUFFER_BIT,S.NEAREST):vt?S.copyTexSubImage3D(Ne,Te,ke,mt,Tt+Bt,Be,Xe,Le,Ae):S.copyTexSubImage2D(Ne,Te,ke,mt,Be,Xe,Le,Ae);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?S.texSubImage3D(Ne,Te,ke,mt,Tt,Le,Ae,Ue,gt,Xt,Mt.data):H.isCompressedArrayTexture?S.compressedTexSubImage3D(Ne,Te,ke,mt,Tt,Le,Ae,Ue,gt,Mt.data):S.texSubImage3D(Ne,Te,ke,mt,Tt,Le,Ae,Ue,gt,Xt,Mt):b.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Te,ke,mt,Le,Ae,gt,Xt,Mt.data):b.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Te,ke,mt,Mt.width,Mt.height,gt,Mt.data):S.texSubImage2D(S.TEXTURE_2D,Te,ke,mt,Le,Ae,gt,Xt,Mt);S.pixelStorei(S.UNPACK_ROW_LENGTH,mn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,lt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,In),S.pixelStorei(S.UNPACK_SKIP_ROWS,Gn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ls),Te===0&&H.generateMipmaps&&S.generateMipmap(Ne),Z.unbindTexture()},this.initRenderTarget=function(b){g.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){P=0,N=0,V=null,Z.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const Vh={type:"change"},Td={type:"start"},Pg={type:"end"},ua=new wd,Hh=new Xi,_2=Math.cos(70*LM.DEG2RAD),Nt=new W,ln=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6;class v2 extends yE{constructor(e,n=null){super(e,n),this.state=_t.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new os,this._lastTargetPosition=new W,this._quat=new os().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gh,this._sphericalDelta=new gh,this._scale=1,this._panOffset=new W,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new W,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=b2.bind(this),this._onPointerDown=x2.bind(this),this._onPointerUp=w2.bind(this),this._onContextMenu=C2.bind(this),this._onMouseWheel=M2.bind(this),this._onKeyDown=E2.bind(this),this._onTouchStart=T2.bind(this),this._onTouchMove=A2.bind(this),this._onMouseDown=y2.bind(this),this._onMouseMove=S2.bind(this),this._interceptControlDown=R2.bind(this),this._interceptControlUp=P2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vh),this.update(),this.state=_t.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Nt.copy(n).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ua.origin.copy(this.object.position),ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ua.direction))<_2?this.object.lookAt(this.target):(Hh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ua.intersectPlane(Hh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(Vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Nt.setFromMatrixColumn(n,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,n){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(n,1):(Nt.setFromMatrixColumn(n,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ye,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function x2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function b2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function w2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pg),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function y2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=_t.DOLLY;break;case dr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}break;case dr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Td)}function S2(t){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function M2(t){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(t.preventDefault(),this.dispatchEvent(Td),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Pg))}function E2(t){this.enabled!==!1&&this._handleKeyDown(t)}function T2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=_t.TOUCH_ROTATE;break;case sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=_t.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Td)}function A2(t){switch(this._trackPointer(t),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=_t.NONE}}function C2(t){this.enabled!==!1&&t.preventDefault()}function R2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Lg=t=>(Ai("data-v-37de85dd"),t=t(),Ci(),t),L2={class:"three-container"},D2=Lg(()=>z("div",{class:"three-hint"},[z("i",{class:"fas fa-mouse-pointer"}),Mi(" 拖曳旋轉・滾輪縮放・右鍵平移 ")],-1)),I2=Lg(()=>z("i",{class:"fas fa-home"},null,-1)),U2=[I2],N2={__name:"ThreePreview",props:{designImageUrl:{type:String,default:""}},setup(t){const e=t,n=et(null);let i,s,r,o,a=null,l=null;const c=()=>{const y=n.value;if(!y)return;const E=y.clientWidth,A=y.clientHeight;i=new $M,i.background=new nt(1710638),i.fog=new bd(1710638,10,50),s=new vn(45,E/A,.1,100),s.position.set(0,1.5,5),r=new g2({antialias:!0}),r.setSize(E,A),r.setPixelRatio(window.devicePixelRatio),r.shadowMap.enabled=!0,r.shadowMap.type=qm,y.appendChild(r.domElement),o=new v2(s,r.domElement),o.enableDamping=!0,o.dampingFactor=.05,o.autoRotate=!1,o.minDistance=2,o.maxDistance=12,u(),f(),d(),x(),window.addEventListener("resize",m)},u=()=>{const y=new vE(16777215,.4);i.add(y);const E=new mh(16777215,1.2);E.position.set(5,8,5),E.castShadow=!0,E.shadow.mapSize.set(1024,1024),i.add(E);const A=new mh(5996543,.4);A.position.set(-5,2,-5),i.add(A);const D=new gE(16777215,.6,20);D.position.set(0,8,0),i.add(D)},f=()=>{const y=new wE(20,20,3355477,2236996);y.position.y=-1.5,i.add(y)},d=()=>{const y=new Pr(2,2,2,1,1,1),E=[p(4871528),p(4871528),p(2963272),p(2963272),p(5996543),p(4871528)];l=new oi(y,E),l.castShadow=!0,l.receiveShadow=!0,i.add(l),e.designImageUrl&&_(e.designImageUrl)},p=y=>new ch({color:y,roughness:.6,metalness:.2}),_=y=>{if(!l||!y)return;new pE().load(y,A=>{A.flipY=!0,A.needsUpdate=!0,l.material[4]=new ch({map:A,roughness:.5,metalness:.1}),l.material[4].needsUpdate=!0})},x=()=>{a=requestAnimationFrame(x),o.update(),r.render(i,s)},m=()=>{const y=n.value;if(!y)return;const E=y.clientWidth,A=y.clientHeight;s.aspect=E/A,s.updateProjectionMatrix(),r.setSize(E,A)},h=()=>{s.position.set(0,1.5,5),o.target.set(0,0,0),o.update()};return Zn(()=>e.designImageUrl,y=>{y&&_(y)}),go(c),Xu(()=>{cancelAnimationFrame(a),window.removeEventListener("resize",m),r==null||r.dispose(),n.value&&(r!=null&&r.domElement)&&n.value.removeChild(r.domElement)}),(y,E)=>($e(),qe("div",L2,[z("div",{ref_key:"mountRef",ref:n,class:"three-mount"},null,512),D2,z("div",{class:"three-controls"},[z("button",{class:"ctrl-btn",title:"重置視角",onClick:h},U2)])]))}},F2=li(N2,[["__scopeId","data-v-37de85dd"]]),Hn=t=>(Ai("data-v-4b5f5e33"),t=t(),Ci(),t),O2={class:"p-canvas-container"},B2={class:"canvas-content"},k2={key:0,class:"canvas-toolbar"},z2={class:"toolbar-group"},V2=Hn(()=>z("i",{class:"fas fa-search-plus"},null,-1)),H2=[V2],G2=Hn(()=>z("i",{class:"fas fa-search-minus"},null,-1)),W2=[G2],$2={class:"zoom-display"},X2=Hn(()=>z("i",{class:"fas fa-compress-arrows-alt"},null,-1)),q2=[X2],Y2={class:"toolbar-group"},j2=["title"],K2={class:"btn-label"},Z2=Hn(()=>z("div",{class:"toolbar-divider"},null,-1)),J2=Hn(()=>z("i",{class:"fas fa-trash-alt"},null,-1)),Q2=[J2],eR=Hn(()=>z("i",{class:"fas fa-eraser"},null,-1)),tR=[eR],nR={key:0,class:"canvas-empty-state"},iR=Hn(()=>z("div",{class:"empty-state-content"},[z("i",{class:"fas fa-box-open"}),z("h3",null,"請先選擇機台"),z("p",null,"從左側選擇一款機台，即可開始設計")],-1)),sR=[iR],rR={key:0,class:"three-overlay"},oR={class:"canvas-centering"},aR=["src"],lR={key:2,class:"machine-placeholder"},cR=Hn(()=>z("i",{class:"fas fa-image"},null,-1)),uR=Hn(()=>z("span",null,"機台圖載入中...",-1)),dR=[cR,uR],fR={key:3,class:"machine-error"},hR=Hn(()=>z("i",{class:"fas fa-exclamation-triangle"},null,-1)),pR=Hn(()=>z("span",null,"機台圖無法載入",-1)),mR=[hR,pR],da=10,Gh=20,Wh=300,$h=100,Xh=80,qh=.25,Gr=800,Wr=600,wc=250,gR={__name:"CanvasView",props:{zoomLevel:{type:Number,default:null},selectedMachine:{type:String,default:null},sceneBackground:{type:String,default:null},selectedObjectType:{type:String,default:null},getPreviewUrl:{type:Function,default:null}},emits:["canvas-ready","zoom-in","zoom-out","fit-screen","reset-view","clear-canvas","delete-selected","update:zoom-level"],setup(t,{expose:e,emit:n}){const i=t,s=n,r=et(null),o=et(null),a=et(null),l=et(!1),c=et(""),u=async()=>{l.value?l.value=!1:(i.getPreviewUrl&&(c.value=i.getPreviewUrl()),l.value=!0)},f=Ct(()=>i.selectedMachine!==null&&i.selectedMachine!==void 0),d=Ct(()=>!i.selectedMachine||i.selectedMachine==="pure"?null:Zi[i.selectedMachine]??null),p=Ct(()=>({width:`${Gr}px`,height:`${Wr}px`})),_=Math.round(wc*52/48),x={left:Math.round((Gr-wc)/2),top:Math.round((Wr-_)/2),width:wc,height:_},m=Ct(()=>{var ue;return((ue=d.value)==null?void 0:ue.printArea)??x}),h=Ct(()=>({left:`${m.value.left}px`,top:`${m.value.top}px`,width:`${m.value.width}px`,height:`${m.value.height}px`})),y=et($h),E=Ct({get:()=>i.zoomLevel??y.value,set:ue=>{const he=Math.min(Wh,Math.max(Gh,Math.round(ue)));y.value=he,s("update:zoom-level",he)}}),A=Ct(()=>E.value/100),D=Ct(()=>({width:`${Gr}px`,height:`${Wr}px`,transform:`scale(${A.value})`,transformOrigin:"center center",willChange:"transform",transition:"transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"})),R=()=>{E.value=E.value+da,s("zoom-in")},I=()=>{E.value=E.value-da,s("zoom-out")},v=()=>{E.value=$h,s("reset-view")},T=()=>{if(!r.value)return;const ue=r.value.clientWidth-Xh*2,he=r.value.clientHeight-Xh*2,Fe=Math.min(ue/Gr,he/Wr,1);E.value=Math.round(Fe*100),s("fit-screen")},Q=ue=>{l.value||!ue.ctrlKey&&!ue.metaKey||(ue.preventDefault(),E.value=E.value+(ue.deltaY>0?-da:da))};Zn(()=>i.zoomLevel,ue=>{ue!=null&&(y.value=Math.min(Wh,Math.max(Gh,ue)))});const P=et(0),N=et(0);let V=null;const ee=Ct(()=>!!Xa.find(ue=>ue.id===i.sceneBackground)),X=Ct(()=>{if(!ee.value)return{};const ue=Xa.find(se=>se.id===i.sceneBackground),he=P.value||Gr,Fe=N.value||Wr,at=Math.ceil(he/qh),it=Math.ceil(Fe/qh);return{position:"absolute",width:`${at}px`,height:`${it}px`,top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundImage:`url(${ue.url})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"0",pointerEvents:"none",transition:"background-image 0.25s ease"}}),G=Ct(()=>{var ue;return((ue=d.value)==null?void 0:ue.baseImage)??null}),O=et(!1),de=et(!1);Zn(G,ue=>{if(O.value=!1,de.value=!1,!ue)return;const he=new Image;he.onload=()=>{O.value=!0},he.onerror=()=>{de.value=!0},he.src=ue},{immediate:!0});const fe=async()=>{const{isConfirmed:ue}=await pw("清空畫布","確定要清空畫布嗎？所有內容將被刪除。","確定清空");ue&&s("clear-canvas")},ye=ue=>{var Fe;if(l.value)return;const he=(Fe=document.activeElement)==null?void 0:Fe.tagName;["INPUT","TEXTAREA","SELECT"].includes(he)||((ue.ctrlKey||ue.metaKey)&&(ue.key==="+"||ue.key==="=")&&(ue.preventDefault(),R()),(ue.ctrlKey||ue.metaKey)&&ue.key==="-"&&(ue.preventDefault(),I()),(ue.ctrlKey||ue.metaKey)&&ue.key==="0"&&(ue.preventDefault(),v()))};return go(()=>{var ue;window.addEventListener("keydown",ye),r.value&&(P.value=r.value.clientWidth,N.value=r.value.clientHeight,V=new ResizeObserver(he=>{for(const Fe of he)P.value=Fe.contentRect.width,N.value=Fe.contentRect.height}),V.observe(r.value)),f.value&&(s("canvas-ready",{wrapperEl:r.value,printArea:m.value,perspective:((ue=d.value)==null?void 0:ue.perspective)??null}),setTimeout(T,150))}),ll(()=>{window.removeEventListener("keydown",ye),V==null||V.disconnect()}),Zn(m,async ue=>{var he;await Ra(),s("canvas-ready",{wrapperEl:r.value,printArea:ue,perspective:((he=d.value)==null?void 0:he.perspective)??null})}),Zn(()=>i.selectedMachine,async()=>{l.value=!1,await Ra(),setTimeout(T,200)}),e({wrapperRef:r,canvasRef:a,zoomIn:R,zoomOut:I,resetZoom:v,fitScreen:T}),(ue,he)=>($e(),qe("div",O2,[z("div",B2,[f.value?($e(),qe("div",k2,[z("div",z2,[l.value?Dt("",!0):($e(),qe(Lt,{key:0},[z("button",{class:"toolbar-btn",title:"放大 (Ctrl +)",onClick:R},H2),z("button",{class:"toolbar-btn",title:"縮小 (Ctrl -)",onClick:I},W2),z("div",$2,un(E.value)+"%",1),z("button",{class:"toolbar-btn",title:"重設縮放 (100%)",onClick:v},q2)],64))]),z("div",Y2,[z("button",{class:It(["toolbar-btn view-toggle-btn",{"view-toggle-btn--active":l.value}]),title:l.value?"切換回 2D 編輯":"切換到 3D 預覽",onClick:u},[z("i",{class:It(l.value?"fas fa-pen":"fas fa-cube")},null,2),z("span",K2,un(l.value?"2D 編輯":"3D 預覽"),1)],10,j2),Z2,l.value?Dt("",!0):($e(),qe(Lt,{key:0},[z("button",{class:"toolbar-btn toolbar-btn--danger",title:"刪除選取 (Delete)",onClick:he[0]||(he[0]=Fe=>ue.$emit("delete-selected"))},Q2),z("button",{class:"toolbar-btn toolbar-btn--danger",title:"清空畫布",onClick:fe},tR)],64))])])):Dt("",!0),z("div",{ref_key:"wrapperRef",ref:r,class:It(["canvas-wrapper",{"canvas-wrapper--no-machine":!f.value}]),onWheel:pv(Q,["prevent"])},[f.value?($e(),qe(Lt,{key:1},[st(ts,{name:"view-fade"},{default:Cn(()=>[l.value?($e(),qe("div",rR,[st(F2,{"design-image-url":c.value},null,8,["design-image-url"])])):Dt("",!0)]),_:1}),z("div",oR,[z("div",{ref_key:"zoomTargetRef",ref:o,class:"zoom-target",style:_i(D.value)},[z("div",{class:"machine-stage",style:_i(p.value)},[ee.value?($e(),qe("div",{key:0,class:"scene-bg-layer",style:_i(X.value)},null,4)):Dt("",!0),O.value&&G.value?($e(),qe("img",{key:1,class:"machine-base-img",src:G.value,alt:"機台底圖",draggable:"false"},null,8,aR)):!O.value&&G.value?($e(),qe("div",lR,dR)):de.value?($e(),qe("div",fR,mR)):Dt("",!0),z("div",{class:"canvas-print-area",style:_i(h.value)},[z("canvas",{id:"main-canvas",ref_key:"canvasRef",ref:a,class:"design-canvas"},null,512)],4),z("div",{class:"print-area-border",style:_i(h.value)},null,4)],4)],4)])],64)):($e(),qe("div",nR,sR))],34)])]))}},_R=li(gR,[["__scopeId","data-v-4b5f5e33"]]),Ad=Math.PI/180,ir=8,vR=24,gi=20;function po(t,e,n,i,s){const r=s*Ad,o=Math.cos(r),a=Math.sin(r);return{x:o*(n-t)-a*(i-e)+t,y:a*(n-t)+o*(i-e)+e}}function xR(t,e,n){const i=t.x+t.width/2,s=t.y+t.height/2;return po(i,s,e,n,-t.rotation)}function bR(t,e,n){const i=xR(t,e,n);return i.x>=t.x&&i.x<=t.x+t.width&&i.y>=t.y&&i.y<=t.y+t.height}function Dg(t){const{x:e,y:n,width:i,height:s,rotation:r}=t,o=e+i/2,a=n+s/2,l=[{id:"tl",lx:e,ly:n},{id:"tr",lx:e+i,ly:n},{id:"br",lx:e+i,ly:n+s},{id:"bl",lx:e,ly:n+s}],c=po(o,a,o,n-vR,r);return{corners:l.map(u=>{const f=po(o,a,u.lx,u.ly,r);return{id:u.id,x:f.x,y:f.y}}),rotate:{id:"rotate",x:c.x,y:c.y}}}function wR(t,e,n,i=ir+2){for(const a of t.corners){const l=a.x-e,c=a.y-n;if(l*l+c*c<=i*i)return a.id}const s=t.rotate,r=s.x-e,o=s.y-n;return r*r+o*o<=(i+2)*i?"rotate":null}function Yh(t,e){e.font=Ig(t);const n=t.text.split(`
`),i=t.fontSize*1.2;let s=0;return n.forEach(r=>{const o=e.measureText(r).width;o>s&&(s=o)}),{width:Math.max(s,gi),height:i*n.length}}function Ig(t){return[t.italic?"italic":"",t.bold?"bold":"",`${t.fontSize}px`,`"${t.fontFamily}"`].filter(Boolean).join(" ")}function fa(t,e){t.save();const n=e.x+e.width/2,i=e.y+e.height/2;if(t.translate(n,i),t.rotate(e.rotation*Ad),t.globalAlpha=e.opacity??1,e.type==="text"){t.font=Ig(e),t.fillStyle=e.color??"#000000",t.textBaseline="top";const s=e.text.split(`
`),r=e.fontSize*1.2;s.forEach((o,a)=>{t.fillText(o,-e.width/2,-e.height/2+a*r)})}if(e.type==="image"&&e.imageEl){const s=e.brightness??0,r=e.contrast??0;t.filter=`brightness(${100+s}%) contrast(${100+r}%)`,t.drawImage(e.imageEl,-e.width/2,-e.height/2,e.width,e.height),t.filter="none"}t.restore()}function yR(t,e){t.save();const n=e.x+e.width/2,i=e.y+e.height/2;t.translate(n,i),t.rotate(e.rotation*Ad),t.strokeStyle="rgba(60, 130, 191, 0.9)",t.lineWidth=1.5,t.setLineDash([5,3]),t.strokeRect(-e.width/2-2,-e.height/2-2,e.width+4,e.height+4),t.setLineDash([]),t.restore();const s=Dg(e);s.corners.forEach(l=>{t.save(),t.fillStyle="#ffffff",t.strokeStyle="rgb(60, 130, 191)",t.lineWidth=2,t.beginPath(),t.rect(l.x-ir/2,l.y-ir/2,ir,ir),t.fill(),t.stroke(),t.restore()});const r=s.rotate;t.save(),t.fillStyle="rgb(60, 130, 191)",t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath(),t.arc(r.x,r.y,ir/2+2,0,Math.PI*2),t.fill(),t.stroke(),t.restore();const o=s.corners.find(l=>l.id==="tl"),a=s.corners.find(l=>l.id==="tr");t.save(),t.strokeStyle="rgb(60, 130, 191)",t.lineWidth=1.5,t.beginPath(),t.moveTo((o.x+a.x)/2,(o.y+a.y)/2),t.lineTo(r.x,r.y),t.stroke(),t.restore()}function SR(){const t=et(null),e=et([]),n=et(null),i=et(!1),s=et(100),r=et("transparent"),o=Ct(()=>!0);let a=null,l=1,c=null;const u=re=>{c=re},f=re=>{c&&c(re)},d=()=>{if(!t.value||!a)return;const re=t.value.width,te=t.value.height;a.clearRect(0,0,re,te);for(const C of e.value)fa(a,C);const M=E();M&&yR(a,M)},p=()=>{d()},_=()=>{d()},x=()=>{d()},m=(re,te=800,M=600)=>{const C=document.getElementById(re);if(!C){console.warn(`[useCanvas] 找不到 id="${re}" 的 canvas 元素`);return}t.value=C,C.width=te,C.height=M,a=C.getContext("2d"),ue(C),d()},h=(re,te)=>{t.value&&(t.value.width=re,t.value.height=te,d())},y=(re,te)=>{for(const M of e.value)M.x<0&&(M.x=0),M.y<0&&(M.y=0),M.x+M.width>re&&(M.x=Math.max(0,re-M.width)),M.y+M.height>te&&(M.y=Math.max(0,te-M.height));d()},E=()=>e.value.find(re=>re.id===n.value)??null,A=re=>{n.value=re,f(E()),d()},D=()=>{n.value=null,f(null),d()},R=(re,te={})=>{if(!a)return;const M={id:l++,type:"text",text:re,fontFamily:te.fontFamily??"Microsoft JhengHei",fontSize:te.fontSize??40,color:te.color??"#000000",bold:te.bold??!1,italic:te.italic??!1,x:te.x??100,y:te.y??100,width:0,height:0,rotation:0,opacity:1,scaleX:1,scaleY:1},C=Yh(M,a);M.width=C.width,M.height=C.height,e.value.push(M),n.value=M.id,f(M),d()},I=re=>{const te=new FileReader;te.onload=M=>{const C=new Image;C.onload=()=>{var oe,ie;const k=((oe=t.value)==null?void 0:oe.width)??800,U=((ie=t.value)==null?void 0:ie.height)??600;let F=C.naturalWidth,Y=C.naturalHeight;const S=F/Y;F>k*.7&&(F=k*.7,Y=F/S),Y>U*.7&&(Y=U*.7,F=Y*S);const ae={id:l++,type:"image",imageEl:C,x:(k-F)/2,y:(U-Y)/2,width:F,height:Y,rotation:0,opacity:1,scaleX:1,scaleY:1,brightness:0,contrast:0};e.value.push(ae),n.value=ae.id,f(ae),d()},C.src=M.target.result},te.readAsDataURL(re)},v=()=>{n.value&&(e.value=e.value.filter(re=>re.id!==n.value),D())},T=()=>{e.value=[],D()},Q=re=>{const te=E();if(!te)return;Object.assign(te,re);const M=["text","fontSize","fontFamily","bold","italic"];if(te.type==="text"&&a&&M.some(C=>C in re)){const C=Yh(te,a);te.width=C.width,te.height=C.height}f(te),d()},P=re=>{const te=e.value.findIndex(C=>C.id===re);if(te<0||te===e.value.length-1)return;const[M]=e.value.splice(te,1);e.value.push(M),d()},N=re=>{const te=e.value.findIndex(C=>C.id===re);if(te<=0)return;const[M]=e.value.splice(te,1);e.value.unshift(M),d()},V=(re=2)=>{if(!t.value||!a)return"";const te=t.value.width,M=t.value.height,C=document.createElement("canvas");C.width=te*re,C.height=M*re;const k=C.getContext("2d");k.scale(re,re);for(const U of e.value)fa(k,U);return C.toDataURL("image/png")},ee=(re,te,M={width:800,height:600},C=2)=>new Promise(k=>{if(!t.value)return k("");const{width:U,height:F}=M,Y=document.createElement("canvas");Y.width=U*C,Y.height=F*C;const S=Y.getContext("2d");S.scale(C,C);const ae=()=>{S.save(),S.translate(te.left,te.top);const oe=te.width/t.value.width,ie=te.height/t.value.height;S.scale(oe,ie);const Z=n.value;n.value=null,d();for(const w of e.value)fa(S,w);n.value=Z,d(),S.restore(),k(Y.toDataURL("image/png"))};if(re){const oe=new Image;oe.crossOrigin="anonymous",oe.onload=()=>{S.drawImage(oe,0,0,U,F),ae()},oe.onerror=()=>{ae()},oe.src=re}else ae()}),X=(re=.92,te=2)=>{if(!t.value||!a)return"";const M=t.value.width,C=t.value.height,k=document.createElement("canvas");k.width=M*te,k.height=C*te;const U=k.getContext("2d");U.scale(te,te),U.fillStyle="#ffffff",U.fillRect(0,0,M,C);for(const F of e.value)fa(U,F);return k.toDataURL("image/jpeg",re)},G=(re="png",te="design")=>{const M=re==="jpg"?X():V();if(!M)return;const C=document.createElement("a");C.href=M,C.download=`${te}.${re}`,C.click()},O=()=>{if(!t.value)return"";const re=n.value;n.value=null,d();const te=t.value.toDataURL("image/png");return n.value=re,d(),te},de=async(re={})=>{const te=E();if(!te||te.type!=="image")return{success:!1,error:"請先選取一張圖片"};const{tolerance:M=35,feather:C=6,samplingCorners:k=!0}=re;return new Promise(U=>{try{const F=te.imageEl,Y=F.naturalWidth,S=F.naturalHeight,ae=document.createElement("canvas");ae.width=Y,ae.height=S;const oe=ae.getContext("2d");oe.drawImage(F,0,0);const ie=oe.getImageData(0,0,Y,S),Z=ie.data;let w=255,g=255,L=255;if(k){const K=[],q=(be,pe)=>{for(let Pe=0;Pe<3;Pe++)for(let ze=0;ze<3;ze++){const me=Math.min(be+ze,Y-1),Me=(Math.min(pe+Pe,S-1)*Y+me)*4;Z[Me+3]>10&&K.push([Z[Me],Z[Me+1],Z[Me+2]])}};if(q(0,0),q(Y-3,0),q(0,S-3),q(Y-3,S-3),K.length===0)return U({success:!1,error:"此圖片已經是去背圖片"});w=Math.round(K.reduce((be,pe)=>be+pe[0],0)/K.length),g=Math.round(K.reduce((be,pe)=>be+pe[1],0)/K.length),L=Math.round(K.reduce((be,pe)=>be+pe[2],0)/K.length)}for(let K=0;K<Z.length;K+=4){if(Z[K+3]===0)continue;const q=Z[K],be=Z[K+1],pe=Z[K+2],Pe=Math.sqrt((q-w)**2+(be-g)**2+(pe-L)**2);Pe<=M?Z[K+3]=0:Pe<=M+C&&(Z[K+3]=Math.round((Pe-M)/C*(Z[K+3]??255)))}oe.putImageData(ie,0,0);const $=new Image;$.onload=()=>{te.imageEl=$,d(),U({success:!0})},$.onerror=()=>U({success:!1,error:"圖片重建失敗"}),$.src=ae.toDataURL("image/png")}catch(F){U({success:!1,error:F.message})}})};let fe=null;const ye=(re,te)=>{const M=re.getBoundingClientRect(),C=re.width/M.width,k=re.height/M.height;return{x:(te.clientX-M.left)*C,y:(te.clientY-M.top)*k}},ue=re=>{re.addEventListener("mousedown",it),re.addEventListener("mousemove",se),re.addEventListener("mouseup",ge),re.addEventListener("mouseleave",ge),re.addEventListener("touchstart",Fe,{passive:!1}),re.addEventListener("touchmove",at,{passive:!1}),re.addEventListener("touchend",ge)},he=re=>(re.preventDefault(),re.touches[0]),Fe=re=>it(he(re)),at=re=>se(he(re)),it=re=>{const te=ye(t.value,re),M=E();if(M){const k=Dg(M),U=wR(k,te.x,te.y);if(U){fe={type:U==="rotate"?"rotate":"resize",handle:U,startX:te.x,startY:te.y,objId:M.id,origObj:{...M}};return}}let C=null;for(let k=e.value.length-1;k>=0;k--)if(bR(e.value[k],te.x,te.y)){C=e.value[k];break}C?(n.value!==C.id&&(n.value=C.id,f(C),d()),fe={type:"move",startX:te.x,startY:te.y,objId:C.id,origObj:{...C}}):D()},se=re=>{if(!fe)return;const te=ye(t.value,re),M=e.value.find(F=>F.id===fe.objId);if(!M)return;const C=te.x-fe.startX,k=te.y-fe.startY,U=fe.origObj;switch(fe.type){case"move":M.x=U.x+C,M.y=U.y+k,f(M);break;case"rotate":{const F=U.x+U.width/2,Y=U.y+U.height/2,S=Math.atan2(te.y-Y,te.x-F)*(180/Math.PI)+90;M.rotation=(Math.round(S)%360+360)%360,f(M);break}case"resize":ve(M,U,fe.handle,te);break}d()},ge=()=>{fe=null},ve=(re,te,M,C)=>{const k=te.x+te.width/2,U=te.y+te.height/2,F=po(k,U,C.x,C.y,-te.rotation),Y={tl:{ax:te.x+te.width,ay:te.y+te.height},tr:{ax:te.x,ay:te.y+te.height},br:{ax:te.x,ay:te.y},bl:{ax:te.x+te.width,ay:te.y}},{ax:S,ay:ae}=Y[M];let oe,ie,Z,w;switch(M){case"br":Z=Math.max(gi,F.x-S),w=Math.max(gi,F.y-ae),oe=S,ie=ae;break;case"bl":Z=Math.max(gi,S-F.x),w=Math.max(gi,F.y-ae),oe=S-Z,ie=ae;break;case"tr":Z=Math.max(gi,F.x-S),w=Math.max(gi,ae-F.y),oe=S,ie=ae-w;break;case"tl":Z=Math.max(gi,S-F.x),w=Math.max(gi,ae-F.y),oe=S-Z,ie=ae-w;break}const g=po(k,U,oe+Z/2,ie+w/2,te.rotation);re.width=Z,re.height=w,re.x=g.x-Z/2,re.y=g.y-w/2,f(re)};return{canvasEl:t,objects:e,selectedId:n,canvasBackground:r,isTransparent:o,isProductLoaded:i,zoomLevel:s,initCanvas:m,onSelectChange:u,getSelected:E,selectObject:A,clearSelection:D,addText:R,addImage:I,deleteSelected:v,clearCanvas:T,updateSelected:Q,bringToFront:P,sendToBack:N,setBackground:p,setTransparent:_,setCanvasBackground:x,resizeCanvas:h,clampObjects:y,exportToPng:V,exportToJpg:X,exportComposite:ee,downloadImage:G,getPreviewUrl:O,removeBackground:de,render:d,registerZoomChangeCallback:()=>{}}}function MR(){const t=et(100),e=25,n=300,i=10;return{zoomLevel:t,zoomIn:()=>{t.value=Math.min(n,t.value+i)},zoomOut:()=>{t.value=Math.max(e,t.value-i)},resetView:()=>{t.value=100},fitScreen:l=>{if(!l)return;const c=800,u=600,f=80,d=l.clientWidth-f*2,p=l.clientHeight-f*2,_=Math.min(d/c,p/u,1);t.value=Math.round(_*100)}}}function ER(){const t=et(null),e=nl({x:0,y:0,width:0,height:0,rotation:0,opacity:100,scaleX:1,scaleY:1,text:"",fontSize:40,fontFamily:"Microsoft JhengHei",color:"#000000",bold:!1,italic:!1,brightness:0,contrast:0}),n=et(null);return{selectedObject:t,objectType:n,props:e,syncFromObject:r=>{if(!r){t.value=null,n.value=null;return}t.value=r,n.value=r.type,e.x=Math.round(r.x),e.y=Math.round(r.y),e.width=Math.round(r.width),e.height=Math.round(r.height),e.rotation=r.rotation??0,e.opacity=Math.round((r.opacity??1)*100),e.scaleX=r.scaleX??1,e.scaleY=r.scaleY??1,r.type==="text"&&(e.text=r.text??"",e.fontSize=r.fontSize??40,e.fontFamily=r.fontFamily??"Microsoft JhengHei",e.color=r.color??"#000000",e.bold=r.bold??!1,e.italic=r.italic??!1),r.type==="image"&&(e.brightness=r.brightness??0,e.contrast=r.contrast??0)},clearSelection:()=>{t.value=null,n.value=null}}}const TR=t=>(Ai("data-v-e6f1d7dc"),t=t(),Ci(),t),AR={id:"app"},CR={class:"top-right-actions"},RR=TR(()=>z("i",{class:"fas fa-download"},null,-1)),PR={class:"app-body"},LR={class:"d-flex"},DR={class:"sidebar-float-wrap"},IR={class:"canvas-float-wrap"},UR={__name:"App",setup(t){const{onSelectChange:e,initCanvas:n,addText:i,addImage:s,deleteSelected:r,clearCanvas:o,updateSelected:a,exportToPng:l,exportComposite:c,getPreviewUrl:u,resizeCanvas:f,clampObjects:d,removeBackground:p,setBackground:_,setTransparent:x}=SR(),{objectType:m,props:h,syncFromObject:y}=ER();e(U=>y(U));const{zoomLevel:E,zoomIn:A,zoomOut:D,resetView:R,fitScreen:I}=MR(),v=et(null),T=et(null),Q=et("#ffffff"),P=et(!1),N=et(null),V=et(!1),ee=et(null),X=et(null),G=Ct(()=>{var U;return v.value?((U=Zi[v.value])==null?void 0:U.baseImage)??null:null});Zn(v,U=>{var S;if(V.value=!1,!U||U==="pure"){f==null||f(250,Math.round(250*52/48));return}const F=Zi[U];if(!F)return;const Y=((S=F.printArea)==null?void 0:S.rect)??F.printArea;Y!=null&&Y.width&&(Y!=null&&Y.height)&&(f==null||f(Y.width,Y.height),d==null||d(Y.width,Y.height))});const O=U=>{P.value=U,document.documentElement.setAttribute("data-theme",U?"dark":"light")},de=()=>O(!P.value),fe=async()=>{var F,Y;if(m.value!=="image"){(F=N.value)==null||F.finishBgRemove();return}const U=await p({tolerance:35,feather:6});U.success||console.warn("去背失敗：",U.error),(Y=N.value)==null||Y.finishBgRemove()},ye=U=>{Q.value=U,U==="transparent"?x():_(U)};go(()=>{O(window.matchMedia("(prefers-color-scheme: dark)").matches),window.addEventListener("keydown",k)}),ll(()=>{window.removeEventListener("keydown",k)});const ue=({wrapperEl:U,printArea:F,perspective:Y})=>{if(X.value=F,V.value)f==null||f(F.width,F.height),d==null||d(F.width,F.height),ee.value=Y,setTimeout(()=>I(U),100);else{const S=()=>{document.getElementById("main-canvas")?(n("main-canvas",F.width,F.height),V.value=!0,ee.value=Y,setTimeout(()=>I(U),100)):requestAnimationFrame(S)};S()}},he=U=>i(U.content,U),Fe=U=>s(U),at=U=>{T.value=U},it=U=>a(U),se=()=>r(),ge=()=>o(),ve=()=>A(),He=()=>D(),re=()=>R(),te=()=>{const U=l(2);if(!U)return;const F=document.createElement("a");F.href=U,F.download="design.png",F.click()},M=async()=>{var ae,oe;if(!X.value)return;const U=(oe=(ae=N.value)==null?void 0:ae.$el)==null?void 0:oe.querySelector(".machine-stage"),F=U?{width:U.offsetWidth,height:U.offsetHeight}:{width:800,height:600},Y=await c(G.value,X.value,F,2);if(!Y)return;const S=document.createElement("a");S.href=Y,S.download="design-with-machine.png",S.click()},C=async()=>{te(),M()},k=U=>{var Y;const F=(Y=document.activeElement)==null?void 0:Y.tagName;["INPUT","TEXTAREA","SELECT"].includes(F)||((U.key==="Delete"||U.key==="Backspace")&&se(),(U.ctrlKey||U.metaKey)&&(U.key==="+"||U.key==="=")&&(U.preventDefault(),ve()),(U.ctrlKey||U.metaKey)&&U.key==="-"&&(U.preventDefault(),He()))};return(U,F)=>($e(),qe("div",AR,[z("div",{class:It(["app-bg",P.value?"app-bg--dark":"app-bg--light"])},null,2),z("div",CR,[z("button",{class:"btn btn-primary",onClick:C},[RR,Mi(" 下載 PNG ")]),z("button",{class:"btn btn-secondary theme-toggle",onClick:de},[z("i",{class:It(P.value?"fas fa-sun":"fas fa-moon")},null,2)])]),z("div",PR,[z("div",LR,[z("div",DR,[st(YS,{"scene-background":T.value,"selected-object-type":ws(m),"selected-props":ws(h),"selected-machine":v.value,onAddText:he,onUploadImage:Fe,onChangeBackground:at,onUpdateObject:it,onDeleteSelected:se,"onUpdate:selectedMachine":F[0]||(F[0]=Y=>v.value=Y)},null,8,["scene-background","selected-object-type","selected-props","selected-machine"])]),z("div",IR,[st(_R,{ref_key:"canvasViewRef",ref:N,"zoom-level":ws(E),"selected-machine":v.value,"scene-background":T.value,"selected-object-type":ws(m),"canvas-background":Q.value,"get-preview-url":ws(u),onCanvasReady:ue,onZoomIn:ve,onZoomOut:He,onResetView:re,onClearCanvas:ge,onDeleteSelected:se,onRemoveBg:fe,"onUpdate:canvasBackground":ye,onChangeBackground:ye},null,8,["zoom-level","selected-machine","scene-background","selected-object-type","canvas-background","get-preview-url"])])])])]))}},NR=li(UR,[["__scopeId","data-v-e6f1d7dc"]]),FR=wv(),Ug=_v(NR);Ug.use(FR);Ug.mount("#app");
//# sourceMappingURL=index-DzdkRsob.js.map
