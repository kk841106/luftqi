(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fu(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const yt={},ur=[],Rn=()=>{},Jg=()=>!1,nl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ou=t=>t.startsWith("onUpdate:"),Qt=Object.assign,Bu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qg=Object.prototype.hasOwnProperty,it=(t,e)=>Qg.call(t,e),ze=Array.isArray,dr=t=>bo(t)==="[object Map]",il=t=>bo(t)==="[object Set]",Xd=t=>bo(t)==="[object Date]",Ke=t=>typeof t=="function",Rt=t=>typeof t=="string",is=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",op=t=>(xt(t)||Ke(t))&&Ke(t.then)&&Ke(t.catch),ap=Object.prototype.toString,bo=t=>ap.call(t),e_=t=>bo(t).slice(8,-1),lp=t=>bo(t)==="[object Object]",ku=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,eo=Fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},t_=/-(\w)/g,xr=sl(t=>t.replace(t_,(e,n)=>n?n.toUpperCase():"")),n_=/\B([A-Z])/g,Cr=sl(t=>t.replace(n_,"-$1").toLowerCase()),cp=sl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dl=sl(t=>t?`on${cp(t)}`:""),ss=(t,e)=>!Object.is(t,e),va=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Da=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},oo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},i_=t=>{const e=Rt(t)?Number(t):NaN;return isNaN(e)?t:e};let qd;const up=()=>qd||(qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xi(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Rt(i)?a_(i):Xi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(t)||xt(t))return t}const s_=/;(?![^(]*\))/g,r_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(t){const e={};return t.replace(o_,"").split(s_).forEach(n=>{if(n){const i=n.split(r_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Bt(t){let e="";if(Rt(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=Bt(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=Fu(l_);function dp(t){return!!t||t===""}function u_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=rl(t[i],e[i]);return n}function rl(t,e){if(t===e)return!0;let n=Xd(t),i=Xd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=is(t),i=is(e),n||i)return t===e;if(n=ze(t),i=ze(e),n||i)return n&&i?u_(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!rl(t[o],e[o]))return!1}}return String(t)===String(e)}function d_(t,e){return t.findIndex(n=>rl(n,e))}const Cn=t=>Rt(t)?t:t==null?"":ze(t)||xt(t)&&(t.toString===ap||!Ke(t.toString))?JSON.stringify(t,fp,2):String(t),fp=(t,e)=>e&&e.__v_isRef?fp(t,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Il(i,r)+" =>"]=s,n),{})}:il(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Il(n))}:is(e)?Il(e):xt(e)&&!ze(e)&&!lp(e)?String(e):e,Il=(t,e="")=>{var n;return is(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let On;class hp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=On,!e&&On&&(this.index=(On.scopes||(On.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=On;try{return On=this,e()}finally{On=n}}}on(){On=this}off(){On=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function f_(t){return new hp(t)}function h_(t,e=On){e&&e.active&&e.effects.push(t)}function p_(){return On}let Rs;class zu{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,h_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Fs();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(m_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Os()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=es,n=Rs;try{return es=!0,Rs=this,this._runnings++,Yd(this),this.fn()}finally{jd(this),this._runnings--,Rs=n,es=e}}stop(){var e;this.active&&(Yd(this),jd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function m_(t){return t.value}function Yd(t){t._trackId++,t._depsLength=0}function jd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)pp(t.deps[e],t);t.deps.length=t._depsLength}}function pp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let es=!0,Tc=0;const mp=[];function Fs(){mp.push(es),es=!1}function Os(){const t=mp.pop();es=t===void 0?!0:t}function Vu(){Tc++}function Hu(){for(Tc--;!Tc&&Ac.length;)Ac.shift()()}function gp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&pp(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ac=[];function _p(t,e,n){Vu();for(const i of t.keys()){let s;i._dirtyLevel<e&&(s??(s=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Ac.push(i.scheduler)))}Hu()}const vp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Cc=new WeakMap,Ps=Symbol(""),Rc=Symbol("");function fn(t,e,n){if(es&&Rs){let i=Cc.get(t);i||Cc.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=vp(()=>i.delete(n))),gp(Rs,s)}}function yi(t,e,n,i,s,r){const o=Cc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ze(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!is(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ze(t)?ku(n)&&a.push(o.get("length")):(a.push(o.get(Ps)),dr(t)&&a.push(o.get(Rc)));break;case"delete":ze(t)||(a.push(o.get(Ps)),dr(t)&&a.push(o.get(Rc)));break;case"set":dr(t)&&a.push(o.get(Ps));break}Vu();for(const l of a)l&&_p(l,4);Hu()}const g_=Fu("__proto__,__v_isRef,__isVue"),xp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(is)),Kd=__();function __(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ct(this);for(let r=0,o=this.length;r<o;r++)fn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ct)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fs(),Vu();const i=ct(this)[e].apply(this,n);return Hu(),Os(),i}}),t}function v_(t){const e=ct(this);return fn(e,"has",t),e.hasOwnProperty(t)}class bp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?L_:Mp:r?Sp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){if(o&&it(Kd,n))return Reflect.get(Kd,n,i);if(n==="hasOwnProperty")return v_}const a=Reflect.get(e,n,i);return(is(n)?xp.has(n):g_(n))||(s||fn(e,"get",n),r)?a:hn(a)?o&&ku(n)?a:a.value:xt(a)?s?Ep(a):al(a):a}}class wp extends bp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=br(r);if(!Ia(i)&&!br(i)&&(r=ct(r),i=ct(i)),!ze(e)&&hn(r)&&!hn(i))return l?!1:(r.value=i,!0)}const o=ze(e)&&ku(n)?Number(n)<e.length:it(e,n),a=Reflect.set(e,n,i,s);return e===ct(s)&&(o?ss(i,r)&&yi(e,"set",n,i):yi(e,"add",n,i)),a}deleteProperty(e,n){const i=it(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&yi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!is(n)||!xp.has(n))&&fn(e,"has",n),i}ownKeys(e){return fn(e,"iterate",ze(e)?"length":Ps),Reflect.ownKeys(e)}}class x_ extends bp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const b_=new wp,w_=new x_,y_=new wp(!0),Gu=t=>t,ol=t=>Reflect.getPrototypeOf(t);function Uo(t,e,n=!1,i=!1){t=t.__v_raw;const s=ct(t),r=ct(e);n||(ss(e,r)&&fn(s,"get",e),fn(s,"get",r));const{has:o}=ol(s),a=i?Gu:n?qu:ao;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function No(t,e=!1){const n=this.__v_raw,i=ct(n),s=ct(t);return e||(ss(t,s)&&fn(i,"has",t),fn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Fo(t,e=!1){return t=t.__v_raw,!e&&fn(ct(t),"iterate",Ps),Reflect.get(t,"size",t)}function Zd(t){t=ct(t);const e=ct(this);return ol(e).has.call(e,t)||(e.add(t),yi(e,"add",t,t)),this}function Jd(t,e){e=ct(e);const n=ct(this),{has:i,get:s}=ol(n);let r=i.call(n,t);r||(t=ct(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ss(e,o)&&yi(n,"set",t,e):yi(n,"add",t,e),this}function Qd(t){const e=ct(this),{has:n,get:i}=ol(e);let s=n.call(e,t);s||(t=ct(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&yi(e,"delete",t,void 0),r}function ef(){const t=ct(this),e=t.size!==0,n=t.clear();return e&&yi(t,"clear",void 0,void 0),n}function Oo(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ct(o),l=e?Gu:t?qu:ao;return!t&&fn(a,"iterate",Ps),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Bo(t,e,n){return function(...i){const s=this.__v_raw,r=ct(s),o=dr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Gu:e?qu:ao;return!e&&fn(r,"iterate",l?Rc:Ps),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function S_(){const t={get(r){return Uo(this,r)},get size(){return Fo(this)},has:No,add:Zd,set:Jd,delete:Qd,clear:ef,forEach:Oo(!1,!1)},e={get(r){return Uo(this,r,!1,!0)},get size(){return Fo(this)},has:No,add:Zd,set:Jd,delete:Qd,clear:ef,forEach:Oo(!1,!0)},n={get(r){return Uo(this,r,!0)},get size(){return Fo(this,!0)},has(r){return No.call(this,r,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:Oo(!0,!1)},i={get(r){return Uo(this,r,!0,!0)},get size(){return Fo(this,!0)},has(r){return No.call(this,r,!0)},add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear"),forEach:Oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Bo(r,!1,!1),n[r]=Bo(r,!0,!1),e[r]=Bo(r,!1,!0),i[r]=Bo(r,!0,!0)}),[t,n,e,i]}const[M_,E_,T_,A_]=S_();function Wu(t,e){const n=e?t?A_:T_:t?E_:M_;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(it(n,s)&&s in i?n:i,s,r)}const C_={get:Wu(!1,!1)},R_={get:Wu(!1,!0)},P_={get:Wu(!0,!1)},yp=new WeakMap,Sp=new WeakMap,Mp=new WeakMap,L_=new WeakMap;function D_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function I_(t){return t.__v_skip||!Object.isExtensible(t)?0:D_(e_(t))}function al(t){return br(t)?t:$u(t,!1,b_,C_,yp)}function U_(t){return $u(t,!1,y_,R_,Sp)}function Ep(t){return $u(t,!0,w_,P_,Mp)}function $u(t,e,n,i,s){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=I_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function fr(t){return br(t)?fr(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Ia(t){return!!(t&&t.__v_isShallow)}function Tp(t){return fr(t)||br(t)}function ct(t){const e=t&&t.__v_raw;return e?ct(e):t}function Xu(t){return Object.isExtensible(t)&&Da(t,"__v_skip",!0),t}const ao=t=>xt(t)?al(t):t,qu=t=>xt(t)?Ep(t):t;class Ap{constructor(e,n,i,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zu(()=>e(this._value),()=>xa(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ct(this);return(!e._cacheable||e.effect.dirty)&&ss(e._value,e._value=e.effect.run())&&xa(e,4),Cp(e),e.effect._dirtyLevel>=2&&xa(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function N_(t,e,n=!1){let i,s;const r=Ke(t);return r?(i=t,s=Rn):(i=t.get,s=t.set),new Ap(i,s,r||!s,n)}function Cp(t){var e;es&&Rs&&(t=ct(t),gp(Rs,(e=t.dep)!=null?e:t.dep=vp(()=>t.dep=void 0,t instanceof Ap?t:void 0)))}function xa(t,e=4,n){t=ct(t);const i=t.dep;i&&_p(i,e)}function hn(t){return!!(t&&t.__v_isRef===!0)}function Qe(t){return F_(t,!1)}function F_(t,e){return hn(t)?t:new O_(t,e)}class O_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ct(e),this._value=n?e:ao(e)}get value(){return Cp(this),this._value}set value(e){const n=this.__v_isShallow||Ia(e)||br(e);e=n?e:ct(e),ss(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ao(e),xa(this,4))}}function ar(t){return hn(t)?t.value:t}const B_={get:(t,e,n)=>ar(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return hn(s)&&!hn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Rp(t){return fr(t)?t:new Proxy(t,B_)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ts(t,e,n,i){try{return i?t(...i):t()}catch(s){ll(s,e,n)}}function Pn(t,e,n,i){if(Ke(t)){const r=ts(t,e,n,i);return r&&op(r)&&r.catch(o=>{ll(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Pn(t[r],e,n,i));return s}function ll(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ts(l,null,10,[t,o,a]);return}}k_(t,n,s,i)}function k_(t,e,n,i=!0){console.error(t)}let lo=!1,Pc=!1;const jt=[];let Zn=0;const hr=[];let Vi=null,ws=0;const Pp=Promise.resolve();let Yu=null;function Ua(t){const e=Yu||Pp;return t?e.then(this?t.bind(this):t):e}function z_(t){let e=Zn+1,n=jt.length;for(;e<n;){const i=e+n>>>1,s=jt[i],r=co(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function ju(t){(!jt.length||!jt.includes(t,lo&&t.allowRecurse?Zn+1:Zn))&&(t.id==null?jt.push(t):jt.splice(z_(t.id),0,t),Lp())}function Lp(){!lo&&!Pc&&(Pc=!0,Yu=Pp.then(Ip))}function V_(t){const e=jt.indexOf(t);e>Zn&&jt.splice(e,1)}function H_(t){ze(t)?hr.push(...t):(!Vi||!Vi.includes(t,t.allowRecurse?ws+1:ws))&&hr.push(t),Lp()}function tf(t,e,n=lo?Zn+1:0){for(;n<jt.length;n++){const i=jt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;jt.splice(n,1),n--,i()}}}function Dp(t){if(hr.length){const e=[...new Set(hr)].sort((n,i)=>co(n)-co(i));if(hr.length=0,Vi){Vi.push(...e);return}for(Vi=e,ws=0;ws<Vi.length;ws++)Vi[ws]();Vi=null,ws=0}}const co=t=>t.id==null?1/0:t.id,G_=(t,e)=>{const n=co(t)-co(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ip(t){Pc=!1,lo=!0,jt.sort(G_);try{for(Zn=0;Zn<jt.length;Zn++){const e=jt[Zn];e&&e.active!==!1&&ts(e,null,14)}}finally{Zn=0,jt.length=0,Dp(),lo=!1,Yu=null,(jt.length||hr.length)&&Ip()}}function W_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||yt;d&&(s=n.map(h=>Rt(h)?h.trim():h)),f&&(s=n.map(oo))}let a,l=i[a=Dl(e)]||i[a=Dl(xr(e))];!l&&r&&(l=i[a=Dl(Cr(e))]),l&&Pn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,s)}}function Up(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ke(t)){const l=c=>{const u=Up(c,e,!0);u&&(a=!0,Qt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(xt(t)&&i.set(t,null),null):(ze(r)?r.forEach(l=>o[l]=null):Qt(o,r),xt(t)&&i.set(t,o),o)}function cl(t,e){return!t||!nl(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(t,e[0].toLowerCase()+e.slice(1))||it(t,Cr(e))||it(t,e))}let kt=null,ul=null;function Na(t){const e=kt;return kt=t,ul=t&&t.type.__scopeId||null,e}function ci(t){ul=t}function ui(){ul=null}function Yn(t,e=kt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&gf(-1);const r=Na(e);let o;try{o=t(...s)}finally{Na(r),i._d&&gf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function nf(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:h,ctx:_,inheritAttrs:b}=t;let m,p;const E=Na(t);try{if(n.shapeFlag&4){const S=s||i,P=S;m=jn(u.call(P,S,f,r,h,d,_)),p=l}else{const S=e;m=jn(S.length>1?S(r,{attrs:l,slots:a,emit:c}):S(r,null)),p=e.props?l:$_(l)}}catch(S){ro.length=0,ll(S,t,1),m=st(Ln)}let A=m;if(p&&b!==!1){const S=Object.keys(p),{shapeFlag:P}=A;S.length&&P&7&&(o&&S.some(Ou)&&(p=X_(p,o)),A=rs(A,p))}return n.dirs&&(A=rs(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),m=A,Na(E),m}const $_=t=>{let e;for(const n in t)(n==="class"||n==="style"||nl(n))&&((e||(e={}))[n]=t[n]);return e},X_=(t,e)=>{const n={};for(const i in t)(!Ou(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function q_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?sf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!cl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?sf(i,o,c):!0:!!o;return!1}function sf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!cl(n,r))return!0}return!1}function Y_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const j_=Symbol.for("v-ndc"),K_=t=>t.__isSuspense;function Z_(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):H_(t)}const J_=Symbol.for("v-scx"),Q_=()=>ba(J_),ko={};function bi(t,e,n){return Np(t,e,n)}function Np(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=yt){if(e&&r){const R=e;e=(...I)=>{R(...I),P()}}const l=Kt,c=R=>i===!0?R:Ts(R,i===!1?1:void 0);let u,f=!1,d=!1;if(hn(t)?(u=()=>t.value,f=Ia(t)):fr(t)?(u=()=>c(t),f=!0):ze(t)?(d=!0,f=t.some(R=>fr(R)||Ia(R)),u=()=>t.map(R=>{if(hn(R))return R.value;if(fr(R))return c(R);if(Ke(R))return ts(R,l,2)})):Ke(t)?e?u=()=>ts(t,l,2):u=()=>(h&&h(),Pn(t,l,3,[_])):u=Rn,e&&i){const R=u;u=()=>Ts(R())}let h,_=R=>{h=A.onStop=()=>{ts(R,l,4),h=A.onStop=void 0}},b;if(gl)if(_=Rn,e?n&&Pn(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const R=Q_();b=R.__watcherHandles||(R.__watcherHandles=[])}else return Rn;let m=d?new Array(t.length).fill(ko):ko;const p=()=>{if(!(!A.active||!A.dirty))if(e){const R=A.run();(i||f||(d?R.some((I,v)=>ss(I,m[v])):ss(R,m)))&&(h&&h(),Pn(e,l,3,[R,m===ko?void 0:d&&m[0]===ko?[]:m,_]),m=R)}else A.run()};p.allowRecurse=!!e;let E;s==="sync"?E=p:s==="post"?E=()=>cn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),E=()=>ju(p));const A=new zu(u,Rn,E),S=p_(),P=()=>{A.stop(),S&&Bu(S.effects,A)};return e?n?p():m=A.run():s==="post"?cn(A.run.bind(A),l&&l.suspense):A.run(),b&&b.push(P),P}function e0(t,e,n){const i=this.proxy,s=Rt(t)?t.includes(".")?Fp(i,t):()=>i[t]:t.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,n=e);const o=yo(this),a=Np(s,r.bind(i),n);return o(),a}function Fp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Ts(t,e,n=0,i){if(!xt(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),hn(t))Ts(t.value,e,n,i);else if(ze(t))for(let s=0;s<t.length;s++)Ts(t[s],e,n,i);else if(il(t)||dr(t))t.forEach(s=>{Ts(s,e,n,i)});else if(lp(t))for(const s in t)Ts(t[s],e,n,i);return t}function lr(t,e){if(kt===null)return t;const n=_l(kt)||kt.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&Ts(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function us(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Fs(),Pn(l,n,8,[t.el,a,t,e]),Os())}}const Hi=Symbol("_leaveCb"),zo=Symbol("_enterCb");function t0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wo(()=>{t.isMounted=!0}),Ku(()=>{t.isUnmounting=!0}),t}const Mn=[Function,Array],Op={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},n0={name:"BaseTransition",props:Op,setup(t,{slots:e}){const n=W0(),i=t0();return()=>{const s=e.default&&kp(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Ln){r=d;break}}const o=ct(t),{mode:a}=o;if(i.isLeaving)return Ul(r);const l=rf(r);if(!l)return Ul(r);const c=Lc(l,o,i,n);Dc(l,c);const u=n.subTree,f=u&&rf(u);if(f&&f.type!==Ln&&!ys(l,f)){const d=Lc(f,o,i,n);if(Dc(f,d),a==="out-in")return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ul(r);a==="in-out"&&l.type!==Ln&&(d.delayLeave=(h,_,b)=>{const m=Bp(i,f);m[String(f.key)]=f,h[Hi]=()=>{_(),h[Hi]=void 0,delete c.delayedLeave},c.delayedLeave=b})}return r}}},i0=n0;function Bp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Lc(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:b,onAppear:m,onAfterAppear:p,onAppearCancelled:E}=e,A=String(t.key),S=Bp(n,t),P=(v,T)=>{v&&Pn(v,i,9,T)},R=(v,T)=>{const j=T[1];P(v,T),ze(v)?v.every(L=>L.length<=1)&&j():v.length<=1&&j()},I={mode:r,persisted:o,beforeEnter(v){let T=a;if(!n.isMounted)if(s)T=b||a;else return;v[Hi]&&v[Hi](!0);const j=S[A];j&&ys(t,j)&&j.el[Hi]&&j.el[Hi](),P(T,[v])},enter(v){let T=l,j=c,L=u;if(!n.isMounted)if(s)T=m||l,j=p||c,L=E||u;else return;let U=!1;const k=v[zo]=ne=>{U||(U=!0,ne?P(L,[v]):P(j,[v]),I.delayedLeave&&I.delayedLeave(),v[zo]=void 0)};T?R(T,[v,k]):k()},leave(v,T){const j=String(t.key);if(v[zo]&&v[zo](!0),n.isUnmounting)return T();P(f,[v]);let L=!1;const U=v[Hi]=k=>{L||(L=!0,T(),k?P(_,[v]):P(h,[v]),v[Hi]=void 0,S[j]===t&&delete S[j])};S[j]=t,d?R(d,[v,U]):U()},clone(v){return Lc(v,e,n,i)}};return I}function Ul(t){if(dl(t))return t=rs(t),t.children=null,t}function rf(t){return dl(t)?t.children?t.children[0]:void 0:t}function Dc(t,e){t.shapeFlag&6&&t.component?Dc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kp(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Yt?(o.patchFlag&128&&s++,i=i.concat(kp(o.children,e,a))):(e||o.type!==Ln)&&i.push(a!=null?rs(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const to=t=>!!t.type.__asyncLoader,dl=t=>t.type.__isKeepAlive;function s0(t,e){zp(t,"a",e)}function r0(t,e){zp(t,"da",e)}function zp(t,e,n=Kt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)dl(s.parent.vnode)&&o0(i,e,n,s),s=s.parent}}function o0(t,e,n,i){const s=fl(e,t,i,!0);hl(()=>{Bu(i[e],s)},n)}function fl(t,e,n=Kt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fs();const a=yo(n),l=Pn(e,n,t,o);return a(),Os(),l});return i?s.unshift(r):s.push(r),r}}const Ci=t=>(e,n=Kt)=>(!gl||t==="sp")&&fl(t,(...i)=>e(...i),n),a0=Ci("bm"),wo=Ci("m"),l0=Ci("bu"),c0=Ci("u"),Ku=Ci("bum"),hl=Ci("um"),u0=Ci("sp"),d0=Ci("rtg"),f0=Ci("rtc");function h0(t,e=Kt){fl("ec",t,e)}function Vp(t,e,n,i){let s;const r=n;if(ze(t)||Rt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r)}else if(xt(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r)}}else s=[];return s}function p0(t,e,n={},i,s){if(kt.isCE||kt.parent&&to(kt.parent)&&kt.parent.isCE)return st("slot",n,i);let r=t[e];r&&r._c&&(r._d=!1),Ye();const o=r&&Hp(r(n)),a=Qu(Yt,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),a}function Hp(t){return t.some(e=>Oa(e)?!(e.type===Ln||e.type===Yt&&!Hp(e.children)):!0)?t:null}const Ic=t=>t?tm(t)?_l(t)||t.proxy:Ic(t.parent):null,no=Qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ic(t.parent),$root:t=>Ic(t.root),$emit:t=>t.emit,$options:t=>Wp(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ju(t.update)}),$nextTick:t=>t.n||(t.n=Ua.bind(t.proxy)),$watch:t=>e0.bind(t)}),Nl=(t,e)=>t!==yt&&!t.__isScriptSetup&&it(t,e),m0={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Nl(i,e))return o[e]=1,i[e];if(s!==yt&&it(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&it(c,e))return o[e]=3,r[e];if(n!==yt&&it(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const u=no[e];let f,d;if(u)return e==="$attrs"&&fn(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==yt&&it(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,it(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Nl(s,e)?(s[e]=n,!0):i!==yt&&it(i,e)?(i[e]=n,!0):it(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==yt&&it(t,o)||Nl(e,o)||(a=r[0])&&it(a,o)||it(i,o)||it(no,o)||it(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:it(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function of(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function g0(t){const e=Wp(t),n=t.proxy,i=t.ctx;Uc=!1,e.beforeCreate&&af(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:b,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:A,unmounted:S,render:P,renderTracked:R,renderTriggered:I,errorCaptured:v,serverPrefetch:T,expose:j,inheritAttrs:L,components:U,directives:k,filters:ne}=e;if(c&&_0(c,i,null),o)for(const F in o){const H=o[F];Ke(H)&&(i[F]=H.bind(n))}if(s){const F=s.call(n,n);xt(F)&&(t.data=al(F))}if(Uc=!0,r)for(const F in r){const H=r[F],oe=Ke(H)?H.bind(n,n):Ke(H.get)?H.get.bind(n,n):Rn,me=!Ke(H)&&Ke(H.set)?H.set.bind(n):Rn,Me=Ct({get:oe,set:me});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>Me.value,set:be=>Me.value=be})}if(a)for(const F in a)Gp(a[F],i,n,F);if(l){const F=Ke(l)?l.call(n):l;Reflect.ownKeys(F).forEach(H=>{S0(H,F[H])})}u&&af(u,t,"c");function G(F,H){ze(H)?H.forEach(oe=>F(oe.bind(n))):H&&F(H.bind(n))}if(G(a0,f),G(wo,d),G(l0,h),G(c0,_),G(s0,b),G(r0,m),G(h0,v),G(f0,R),G(d0,I),G(Ku,E),G(hl,S),G(u0,T),ze(j))if(j.length){const F=t.exposed||(t.exposed={});j.forEach(H=>{Object.defineProperty(F,H,{get:()=>n[H],set:oe=>n[H]=oe})})}else t.exposed||(t.exposed={});P&&t.render===Rn&&(t.render=P),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k)}function _0(t,e,n=Rn){ze(t)&&(t=Nc(t));for(const i in t){const s=t[i];let r;xt(s)?"default"in s?r=ba(s.from||i,s.default,!0):r=ba(s.from||i):r=ba(s),hn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function af(t,e,n){Pn(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gp(t,e,n,i){const s=i.includes(".")?Fp(n,i):()=>n[i];if(Rt(t)){const r=e[t];Ke(r)&&bi(s,r)}else if(Ke(t))bi(s,t.bind(n));else if(xt(t))if(ze(t))t.forEach(r=>Gp(r,e,n,i));else{const r=Ke(t.handler)?t.handler.bind(n):e[t.handler];Ke(r)&&bi(s,r,t)}}function Wp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Fa(l,c,o,!0)),Fa(l,e,o)),xt(e)&&r.set(e,l),l}function Fa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Fa(t,r,n,!0),s&&s.forEach(o=>Fa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=v0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const v0={data:lf,props:cf,emits:cf,methods:Zr,computed:Zr,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Zr,directives:Zr,watch:b0,provide:lf,inject:x0};function lf(t,e){return e?t?function(){return Qt(Ke(t)?t.call(this,this):t,Ke(e)?e.call(this,this):e)}:e:t}function x0(t,e){return Zr(Nc(t),Nc(e))}function Nc(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Zr(t,e){return t?Qt(Object.create(null),t,e):e}function cf(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:Qt(Object.create(null),of(t),of(e??{})):e}function b0(t,e){if(!t)return e;if(!e)return t;const n=Qt(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function $p(){return{app:null,config:{isNativeTag:Jg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w0=0;function y0(t,e){return function(i,s=null){Ke(i)||(i=Qt({},i)),s!=null&&!xt(s)&&(s=null);const r=$p(),o=new WeakSet;let a=!1;const l=r.app={_uid:w0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Z0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ke(c.install)?(o.add(c),c.install(l,...u)):Ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=st(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,_l(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=io;io=l;try{return c()}finally{io=u}}};return l}}let io=null;function S0(t,e){if(Kt){let n=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===n&&(n=Kt.provides=Object.create(i)),n[t]=e}}function ba(t,e,n=!1){const i=Kt||kt;if(i||io){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:io._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ke(e)?e.call(i&&i.proxy):e}}function M0(t,e,n,i=!1){const s={},r={};Da(r,ml,1),t.propsDefaults=Object.create(null),Xp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:U_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function E0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ct(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(cl(t.emitsOptions,d))continue;const h=e[d];if(l)if(it(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const _=xr(d);s[_]=Fc(l,a,_,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Xp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!it(e,f)&&((u=Cr(f))===f||!it(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Fc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!it(e,f))&&(delete r[f],c=!0)}c&&yi(t,"set","$attrs")}function Xp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(eo(l))continue;const c=e[l];let u;s&&it(s,u=xr(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:cl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(n),c=a||yt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Fc(s,l,f,c[f],t,!it(c,f))}}return o}function Fc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=yo(s);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Cr(n))&&(i=!0))}return i}function qp(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ke(t)){const u=f=>{l=!0;const[d,h]=qp(f,e,!0);Qt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return xt(t)&&i.set(t,ur),ur;if(ze(r))for(let u=0;u<r.length;u++){const f=xr(r[u]);uf(f)&&(o[f]=yt)}else if(r)for(const u in r){const f=xr(u);if(uf(f)){const d=r[u],h=o[f]=ze(d)||Ke(d)?{type:d}:Qt({},d);if(h){const _=hf(Boolean,h.type),b=hf(String,h.type);h[0]=_>-1,h[1]=b<0||_<b,(_>-1||it(h,"default"))&&a.push(f)}}}const c=[o,a];return xt(t)&&i.set(t,c),c}function uf(t){return t[0]!=="$"&&!eo(t)}function df(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ff(t,e){return df(t)===df(e)}function hf(t,e){return ze(e)?e.findIndex(n=>ff(n,t)):Ke(e)&&ff(e,t)?0:-1}const Yp=t=>t[0]==="_"||t==="$stable",Zu=t=>ze(t)?t.map(jn):[jn(t)],T0=(t,e,n)=>{if(e._n)return e;const i=Yn((...s)=>Zu(e(...s)),n);return i._c=!1,i},jp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Yp(s))continue;const r=t[s];if(Ke(r))e[s]=T0(s,r,i);else if(r!=null){const o=Zu(r);e[s]=()=>o}}},Kp=(t,e)=>{const n=Zu(e);t.slots.default=()=>n},A0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ct(e),Da(e,"_",n)):jp(e,t.slots={})}else t.slots={},e&&Kp(t,e);Da(t.slots,ml,1)},C0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Qt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,jp(e,s)),o=e}else e&&(Kp(t,e),o={default:1});if(r)for(const a in s)!Yp(a)&&o[a]==null&&delete s[a]};function Oc(t,e,n,i,s=!1){if(ze(t)){t.forEach((d,h)=>Oc(d,e&&(ze(e)?e[h]:e),n,i,s));return}if(to(i)&&!s)return;const r=i.shapeFlag&4?_l(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,it(f,c)&&(f[c]=null)):hn(c)&&(c.value=null)),Ke(l))ts(l,a,12,[o,u]);else{const d=Rt(l),h=hn(l);if(d||h){const _=()=>{if(t.f){const b=d?it(f,l)?f[l]:u[l]:l.value;s?ze(b)&&Bu(b,r):ze(b)?b.includes(r)||b.push(r):d?(u[l]=[r],it(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,it(f,l)&&(f[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,cn(_,n)):_()}}}const cn=Z_;function R0(t){return P0(t)}function P0(t,e){const n=up();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Rn,insertStaticContent:_}=t,b=(M,C,B,W=null,V=null,le=null,x=void 0,Y=null,Z=!!C.dynamicChildren)=>{if(M===C)return;M&&!ys(M,C)&&(W=pe(M),be(M,V,le,!0),M=null),C.patchFlag===-2&&(Z=!1,C.dynamicChildren=null);const{type:ie,ref:K,shapeFlag:w}=C;switch(ie){case pl:m(M,C,B,W);break;case Ln:p(M,C,B,W);break;case wa:M==null&&E(C,B,W,x);break;case Yt:U(M,C,B,W,V,le,x,Y,Z);break;default:w&1?P(M,C,B,W,V,le,x,Y,Z):w&6?k(M,C,B,W,V,le,x,Y,Z):(w&64||w&128)&&ie.process(M,C,B,W,V,le,x,Y,Z,ae)}K!=null&&V&&Oc(K,M&&M.ref,le,C||M,!C)},m=(M,C,B,W)=>{if(M==null)i(C.el=a(C.children),B,W);else{const V=C.el=M.el;C.children!==M.children&&c(V,C.children)}},p=(M,C,B,W)=>{M==null?i(C.el=l(C.children||""),B,W):C.el=M.el},E=(M,C,B,W)=>{[M.el,M.anchor]=_(M.children,C,B,W,M.el,M.anchor)},A=({el:M,anchor:C},B,W)=>{let V;for(;M&&M!==C;)V=d(M),i(M,B,W),M=V;i(C,B,W)},S=({el:M,anchor:C})=>{let B;for(;M&&M!==C;)B=d(M),s(M),M=B;s(C)},P=(M,C,B,W,V,le,x,Y,Z)=>{C.type==="svg"?x="svg":C.type==="math"&&(x="mathml"),M==null?R(C,B,W,V,le,x,Y,Z):T(M,C,V,le,x,Y,Z)},R=(M,C,B,W,V,le,x,Y)=>{let Z,ie;const{props:K,shapeFlag:w,transition:g,dirs:D}=M;if(Z=M.el=o(M.type,le,K&&K.is,K),w&8?u(Z,M.children):w&16&&v(M.children,Z,null,W,V,Fl(M,le),x,Y),D&&us(M,null,W,"created"),I(Z,M,M.scopeId,x,W),K){for(const ee in K)ee!=="value"&&!eo(ee)&&r(Z,ee,null,K[ee],le,M.children,W,V,ue);"value"in K&&r(Z,"value",null,K.value,le),(ie=K.onVnodeBeforeMount)&&Wn(ie,W,M)}D&&us(M,null,W,"beforeMount");const q=L0(V,g);q&&g.beforeEnter(Z),i(Z,C,B),((ie=K&&K.onVnodeMounted)||q||D)&&cn(()=>{ie&&Wn(ie,W,M),q&&g.enter(Z),D&&us(M,null,W,"mounted")},V)},I=(M,C,B,W,V)=>{if(B&&h(M,B),W)for(let le=0;le<W.length;le++)h(M,W[le]);if(V){let le=V.subTree;if(C===le){const x=V.vnode;I(M,x,x.scopeId,x.slotScopeIds,V.parent)}}},v=(M,C,B,W,V,le,x,Y,Z=0)=>{for(let ie=Z;ie<M.length;ie++){const K=M[ie]=Y?Gi(M[ie]):jn(M[ie]);b(null,K,C,B,W,V,le,x,Y)}},T=(M,C,B,W,V,le,x)=>{const Y=C.el=M.el;let{patchFlag:Z,dynamicChildren:ie,dirs:K}=C;Z|=M.patchFlag&16;const w=M.props||yt,g=C.props||yt;let D;if(B&&ds(B,!1),(D=g.onVnodeBeforeUpdate)&&Wn(D,B,C,M),K&&us(C,M,B,"beforeUpdate"),B&&ds(B,!0),ie?j(M.dynamicChildren,ie,Y,B,W,Fl(C,V),le):x||H(M,C,Y,null,B,W,Fl(C,V),le,!1),Z>0){if(Z&16)L(Y,C,w,g,B,W,V);else if(Z&2&&w.class!==g.class&&r(Y,"class",null,g.class,V),Z&4&&r(Y,"style",w.style,g.style,V),Z&8){const q=C.dynamicProps;for(let ee=0;ee<q.length;ee++){const J=q[ee],xe=w[J],fe=g[J];(fe!==xe||J==="value")&&r(Y,J,xe,fe,V,M.children,B,W,ue)}}Z&1&&M.children!==C.children&&u(Y,C.children)}else!x&&ie==null&&L(Y,C,w,g,B,W,V);((D=g.onVnodeUpdated)||K)&&cn(()=>{D&&Wn(D,B,C,M),K&&us(C,M,B,"updated")},W)},j=(M,C,B,W,V,le,x)=>{for(let Y=0;Y<C.length;Y++){const Z=M[Y],ie=C[Y],K=Z.el&&(Z.type===Yt||!ys(Z,ie)||Z.shapeFlag&70)?f(Z.el):B;b(Z,ie,K,null,W,V,le,x,!0)}},L=(M,C,B,W,V,le,x)=>{if(B!==W){if(B!==yt)for(const Y in B)!eo(Y)&&!(Y in W)&&r(M,Y,B[Y],null,x,C.children,V,le,ue);for(const Y in W){if(eo(Y))continue;const Z=W[Y],ie=B[Y];Z!==ie&&Y!=="value"&&r(M,Y,ie,Z,x,C.children,V,le,ue)}"value"in W&&r(M,"value",B.value,W.value,x)}},U=(M,C,B,W,V,le,x,Y,Z)=>{const ie=C.el=M?M.el:a(""),K=C.anchor=M?M.anchor:a("");let{patchFlag:w,dynamicChildren:g,slotScopeIds:D}=C;D&&(Y=Y?Y.concat(D):D),M==null?(i(ie,B,W),i(K,B,W),v(C.children||[],B,K,V,le,x,Y,Z)):w>0&&w&64&&g&&M.dynamicChildren?(j(M.dynamicChildren,g,B,V,le,x,Y),(C.key!=null||V&&C===V.subTree)&&Ju(M,C,!0)):H(M,C,B,K,V,le,x,Y,Z)},k=(M,C,B,W,V,le,x,Y,Z)=>{C.slotScopeIds=Y,M==null?C.shapeFlag&512?V.ctx.activate(C,B,W,x,Z):ne(C,B,W,V,le,x,Z):X(M,C,Z)},ne=(M,C,B,W,V,le,x)=>{const Y=M.component=G0(M,W,V);if(dl(M)&&(Y.ctx.renderer=ae),$0(Y),Y.asyncDep){if(V&&V.registerDep(Y,G),!M.el){const Z=Y.subTree=st(Ln);p(null,Z,C,B)}}else G(Y,M,C,B,V,le,x)},X=(M,C,B)=>{const W=C.component=M.component;if(q_(M,C,B))if(W.asyncDep&&!W.asyncResolved){F(W,C,B);return}else W.next=C,V_(W.update),W.effect.dirty=!0,W.update();else C.el=M.el,W.vnode=C},G=(M,C,B,W,V,le,x)=>{const Y=()=>{if(M.isMounted){let{next:K,bu:w,u:g,parent:D,vnode:q}=M;{const Pe=Zp(M);if(Pe){K&&(K.el=q.el,F(M,K,x)),Pe.asyncDep.then(()=>{M.isUnmounted||Y()});return}}let ee=K,J;ds(M,!1),K?(K.el=q.el,F(M,K,x)):K=q,w&&va(w),(J=K.props&&K.props.onVnodeBeforeUpdate)&&Wn(J,D,K,q),ds(M,!0);const xe=nf(M),fe=M.subTree;M.subTree=xe,b(fe,xe,f(fe.el),pe(fe),M,V,le),K.el=xe.el,ee===null&&Y_(M,xe.el),g&&cn(g,V),(J=K.props&&K.props.onVnodeUpdated)&&cn(()=>Wn(J,D,K,q),V)}else{let K;const{el:w,props:g}=C,{bm:D,m:q,parent:ee}=M,J=to(C);ds(M,!1),D&&va(D),!J&&(K=g&&g.onVnodeBeforeMount)&&Wn(K,ee,C),ds(M,!0);{const xe=M.subTree=nf(M);b(null,xe,B,W,M,V,le),C.el=xe.el}if(q&&cn(q,V),!J&&(K=g&&g.onVnodeMounted)){const xe=C;cn(()=>Wn(K,ee,xe),V)}(C.shapeFlag&256||ee&&to(ee.vnode)&&ee.vnode.shapeFlag&256)&&M.a&&cn(M.a,V),M.isMounted=!0,C=B=W=null}},Z=M.effect=new zu(Y,Rn,()=>ju(ie),M.scope),ie=M.update=()=>{Z.dirty&&Z.run()};ie.id=M.uid,ds(M,!0),ie()},F=(M,C,B)=>{C.component=M;const W=M.vnode.props;M.vnode=C,M.next=null,E0(M,C.props,W,B),C0(M,C.children,B),Fs(),tf(M),Os()},H=(M,C,B,W,V,le,x,Y,Z=!1)=>{const ie=M&&M.children,K=M?M.shapeFlag:0,w=C.children,{patchFlag:g,shapeFlag:D}=C;if(g>0){if(g&128){me(ie,w,B,W,V,le,x,Y,Z);return}else if(g&256){oe(ie,w,B,W,V,le,x,Y,Z);return}}D&8?(K&16&&ue(ie,V,le),w!==ie&&u(B,w)):K&16?D&16?me(ie,w,B,W,V,le,x,Y,Z):ue(ie,V,le,!0):(K&8&&u(B,""),D&16&&v(w,B,W,V,le,x,Y,Z))},oe=(M,C,B,W,V,le,x,Y,Z)=>{M=M||ur,C=C||ur;const ie=M.length,K=C.length,w=Math.min(ie,K);let g;for(g=0;g<w;g++){const D=C[g]=Z?Gi(C[g]):jn(C[g]);b(M[g],D,B,null,V,le,x,Y,Z)}ie>K?ue(M,V,le,!0,!1,w):v(C,B,W,V,le,x,Y,Z,w)},me=(M,C,B,W,V,le,x,Y,Z)=>{let ie=0;const K=C.length;let w=M.length-1,g=K-1;for(;ie<=w&&ie<=g;){const D=M[ie],q=C[ie]=Z?Gi(C[ie]):jn(C[ie]);if(ys(D,q))b(D,q,B,null,V,le,x,Y,Z);else break;ie++}for(;ie<=w&&ie<=g;){const D=M[w],q=C[g]=Z?Gi(C[g]):jn(C[g]);if(ys(D,q))b(D,q,B,null,V,le,x,Y,Z);else break;w--,g--}if(ie>w){if(ie<=g){const D=g+1,q=D<K?C[D].el:W;for(;ie<=g;)b(null,C[ie]=Z?Gi(C[ie]):jn(C[ie]),B,q,V,le,x,Y,Z),ie++}}else if(ie>g)for(;ie<=w;)be(M[ie],V,le,!0),ie++;else{const D=ie,q=ie,ee=new Map;for(ie=q;ie<=g;ie++){const Se=C[ie]=Z?Gi(C[ie]):jn(C[ie]);Se.key!=null&&ee.set(Se.key,ie)}let J,xe=0;const fe=g-q+1;let Pe=!1,ke=0;const he=new Array(fe);for(ie=0;ie<fe;ie++)he[ie]=0;for(ie=D;ie<=w;ie++){const Se=M[ie];if(xe>=fe){be(Se,V,le,!0);continue}let Ce;if(Se.key!=null)Ce=ee.get(Se.key);else for(J=q;J<=g;J++)if(he[J-q]===0&&ys(Se,C[J])){Ce=J;break}Ce===void 0?be(Se,V,le,!0):(he[Ce-q]=ie+1,Ce>=ke?ke=Ce:Pe=!0,b(Se,C[Ce],B,null,V,le,x,Y,Z),xe++)}const _e=Pe?D0(he):ur;for(J=_e.length-1,ie=fe-1;ie>=0;ie--){const Se=q+ie,Ce=C[Se],Re=Se+1<K?C[Se+1].el:W;he[ie]===0?b(null,Ce,B,Re,V,le,x,Y,Z):Pe&&(J<0||ie!==_e[J]?Me(Ce,B,Re,2):J--)}}},Me=(M,C,B,W,V=null)=>{const{el:le,type:x,transition:Y,children:Z,shapeFlag:ie}=M;if(ie&6){Me(M.component.subTree,C,B,W);return}if(ie&128){M.suspense.move(C,B,W);return}if(ie&64){x.move(M,C,B,ae);return}if(x===Yt){i(le,C,B);for(let w=0;w<Z.length;w++)Me(Z[w],C,B,W);i(M.anchor,C,B);return}if(x===wa){A(M,C,B);return}if(W!==2&&ie&1&&Y)if(W===0)Y.beforeEnter(le),i(le,C,B),cn(()=>Y.enter(le),V);else{const{leave:w,delayLeave:g,afterLeave:D}=Y,q=()=>i(le,C,B),ee=()=>{w(le,()=>{q(),D&&D()})};g?g(le,q,ee):ee()}else i(le,C,B)},be=(M,C,B,W=!1,V=!1)=>{const{type:le,props:x,ref:Y,children:Z,dynamicChildren:ie,shapeFlag:K,patchFlag:w,dirs:g}=M;if(Y!=null&&Oc(Y,null,B,M,!0),K&256){C.ctx.deactivate(M);return}const D=K&1&&g,q=!to(M);let ee;if(q&&(ee=x&&x.onVnodeBeforeUnmount)&&Wn(ee,C,M),K&6)ot(M.component,B,W);else{if(K&128){M.suspense.unmount(B,W);return}D&&us(M,null,C,"beforeUnmount"),K&64?M.type.remove(M,C,B,V,ae,W):ie&&(le!==Yt||w>0&&w&64)?ue(ie,C,B,!1,!0):(le===Yt&&w&384||!V&&K&16)&&ue(Z,C,B),W&&Ve(M)}(q&&(ee=x&&x.onVnodeUnmounted)||D)&&cn(()=>{ee&&Wn(ee,C,M),D&&us(M,null,C,"unmounted")},B)},Ve=M=>{const{type:C,el:B,anchor:W,transition:V}=M;if(C===Yt){ft(B,W);return}if(C===wa){S(M);return}const le=()=>{s(B),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(M.shapeFlag&1&&V&&!V.persisted){const{leave:x,delayLeave:Y}=V,Z=()=>x(B,le);Y?Y(M.el,le,Z):Z()}else le()},ft=(M,C)=>{let B;for(;M!==C;)B=d(M),s(M),M=B;s(C)},ot=(M,C,B)=>{const{bum:W,scope:V,update:le,subTree:x,um:Y}=M;W&&va(W),V.stop(),le&&(le.active=!1,be(x,M,C,B)),Y&&cn(Y,C),cn(()=>{M.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},ue=(M,C,B,W=!1,V=!1,le=0)=>{for(let x=le;x<M.length;x++)be(M[x],C,B,W,V)},pe=M=>M.shapeFlag&6?pe(M.component.subTree):M.shapeFlag&128?M.suspense.next():d(M.anchor||M.el);let ve=!1;const He=(M,C,B)=>{M==null?C._vnode&&be(C._vnode,null,null,!0):b(C._vnode||null,M,C,null,null,null,B),ve||(ve=!0,tf(),Dp(),ve=!1),C._vnode=M},ae={p:b,um:be,m:Me,r:Ve,mt:ne,mc:v,pc:H,pbc:j,n:pe,o:t};return{render:He,hydrate:void 0,createApp:y0(He)}}function Fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function L0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ju(t,e,n=!1){const i=t.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Gi(s[r]),a.el=o.el),n||Ju(o,a)),a.type===pl&&(a.el=o.el)}}function D0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Zp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zp(e)}const I0=t=>t.__isTeleport,so=t=>t&&(t.disabled||t.disabled===""),pf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,mf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Bc=(t,e)=>{const n=t&&t.to;return Rt(n)?e?e(n):null:n},U0={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:_,createText:b,createComment:m}}=c,p=so(e.props);let{shapeFlag:E,children:A,dynamicChildren:S}=e;if(t==null){const P=e.el=b(""),R=e.anchor=b("");h(P,n,i),h(R,n,i);const I=e.target=Bc(e.props,_),v=e.targetAnchor=b("");I&&(h(v,I),o==="svg"||pf(I)?o="svg":(o==="mathml"||mf(I))&&(o="mathml"));const T=(j,L)=>{E&16&&u(A,j,L,s,r,o,a,l)};p?T(n,R):I&&T(I,v)}else{e.el=t.el;const P=e.anchor=t.anchor,R=e.target=t.target,I=e.targetAnchor=t.targetAnchor,v=so(t.props),T=v?n:R,j=v?P:I;if(o==="svg"||pf(R)?o="svg":(o==="mathml"||mf(R))&&(o="mathml"),S?(d(t.dynamicChildren,S,T,s,r,o,a),Ju(t,e,!0)):l||f(t,e,T,j,s,r,o,a,!1),p)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Vo(e,n,P,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Bc(e.props,_);L&&Vo(e,L,null,c,0)}else v&&Vo(e,R,I,c,1)}Jp(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=t;if(f&&r(u),o&&r(c),a&16){const h=o||!so(d);for(let _=0;_<l.length;_++){const b=l[_];s(b,e,n,h,!!b.dynamicChildren)}}},move:Vo,hydrate:N0};function Vo(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||so(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);f&&i(a,e,n)}function N0(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Bc(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(so(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=f;else{e.anchor=o(t);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,s,r)}Jp(e)}return e.anchor&&o(e.anchor)}const F0=U0;function Jp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Yt=Symbol.for("v-fgt"),pl=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),ro=[];let kn=null;function Ye(t=!1){ro.push(kn=t?null:[])}function O0(){ro.pop(),kn=ro[ro.length-1]||null}let uo=1;function gf(t){uo+=t}function Qp(t){return t.dynamicChildren=uo>0?kn||ur:null,O0(),uo>0&&kn&&kn.push(t),t}function et(t,e,n,i,s,r){return Qp(N(t,e,n,i,s,r,!0))}function Qu(t,e,n,i,s){return Qp(st(t,e,n,i,s,!0))}function Oa(t){return t?t.__v_isVNode===!0:!1}function ys(t,e){return t.type===e.type&&t.key===e.key}const ml="__vInternal",em=({key:t})=>t??null,ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||hn(t)||Ke(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,i=0,s=null,r=t===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&em(e),ref:e&&ya(e),scopeId:ul,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return a?(td(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),uo>0&&!o&&kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kn.push(l),l}const st=B0;function B0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===j_)&&(t=Ln),Oa(t)){const a=rs(t,e,!0);return n&&td(a,n),uo>0&&!r&&kn&&(a.shapeFlag&6?kn[kn.indexOf(t)]=a:kn.push(a)),a.patchFlag|=-2,a}if(j0(t)&&(t=t.__vccOpts),e){e=k0(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Bt(a)),xt(l)&&(Tp(l)&&!ze(l)&&(l=Qt({},l)),e.style=Xi(l))}const o=Rt(t)?1:K_(t)?128:I0(t)?64:xt(t)?4:Ke(t)?2:0;return N(t,e,n,i,s,o,r,!0)}function k0(t){return t?Tp(t)||ml in t?Qt({},t):t:null}function rs(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?z0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&em(a),ref:e&&e.ref?n&&s?ze(s)?s.concat(ya(e)):[s,ya(e)]:ya(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ii(t=" ",e=0){return st(pl,null,t,e)}function ed(t,e){const n=st(wa,null,t);return n.staticCount=e,n}function It(t="",e=!1){return e?(Ye(),Qu(Ln,null,t)):st(Ln,null,t)}function jn(t){return t==null||typeof t=="boolean"?st(Ln):ze(t)?st(Yt,null,t.slice()):typeof t=="object"?Gi(t):st(pl,null,String(t))}function Gi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function td(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),td(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ml in e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),i&64?(n=16,e=[ii(e)]):n=8);t.children=e,t.shapeFlag|=n}function z0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Bt([e.class,i.class]));else if(s==="style")e.style=Xi([e.style,i.style]);else if(nl(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Wn(t,e,n,i=null){Pn(t,e,7,[n,i])}const V0=$p();let H0=0;function G0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||V0,r={uid:H0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(i,s),emitsOptions:Up(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=W_.bind(null,r),t.ce&&t.ce(r),r}let Kt=null;const W0=()=>Kt||kt;let Ba,kc;{const t=up(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),kc=e("__VUE_SSR_SETTERS__",n=>gl=n)}const yo=t=>{const e=Kt;return Ba(t),t.scope.on(),()=>{t.scope.off(),Ba(e)}},_f=()=>{Kt&&Kt.scope.off(),Ba(null)};function tm(t){return t.vnode.shapeFlag&4}let gl=!1;function $0(t,e=!1){e&&kc(e);const{props:n,children:i}=t.vnode,s=tm(t);M0(t,n,s,e),A0(t,i);const r=s?X0(t,e):void 0;return e&&kc(!1),r}function X0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xu(new Proxy(t.ctx,m0));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Y0(t):null,r=yo(t);Fs();const o=ts(i,t,0,[t.props,s]);if(Os(),r(),op(o)){if(o.then(_f,_f),e)return o.then(a=>{vf(t,a)}).catch(a=>{ll(a,t,0)});t.asyncDep=o}else vf(t,o)}else nm(t)}function vf(t,e,n){Ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=Rp(e)),nm(t)}function nm(t,e,n){const i=t.type;t.render||(t.render=i.render||Rn);{const s=yo(t);Fs();try{g0(t)}finally{Os(),s()}}}function q0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return fn(t,"get","$attrs"),e[n]}}))}function Y0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return q0(t)},slots:t.slots,emit:t.emit,expose:e}}function _l(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rp(Xu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)},has(e,n){return n in e||n in no}}))}function j0(t){return Ke(t)&&"__vccOpts"in t}const Ct=(t,e)=>N_(t,e,gl);function K0(t,e,n){const i=arguments.length;return i===2?xt(e)&&!ze(e)?Oa(e)?st(t,null,[e]):st(t,e):st(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Oa(n)&&(n=[n]),st(t,e,n))}const Z0="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const J0="http://www.w3.org/2000/svg",Q0="http://www.w3.org/1998/Math/MathML",Wi=typeof document<"u"?document:null,xf=Wi&&Wi.createElement("template"),ev={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Wi.createElementNS(J0,t):e==="mathml"?Wi.createElementNS(Q0,t):Wi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Wi.createTextNode(t),createComment:t=>Wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{xf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=xf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Di="transition",Br="animation",fo=Symbol("_vtc"),Rr=(t,{slots:e})=>K0(i0,tv(t),e);Rr.displayName="Transition";const im={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rr.props=Qt({},Op,im);const fs=(t,e=[])=>{ze(t)?t.forEach(n=>n(...e)):t&&t(...e)},bf=t=>t?ze(t)?t.some(e=>e.length>1):t.length>1:!1;function tv(t){const e={};for(const U in t)U in im||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,_=nv(s),b=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:A,onLeave:S,onLeaveCancelled:P,onBeforeAppear:R=p,onAppear:I=E,onAppearCancelled:v=A}=e,T=(U,k,ne)=>{hs(U,k?u:a),hs(U,k?c:o),ne&&ne()},j=(U,k)=>{U._isLeaving=!1,hs(U,f),hs(U,h),hs(U,d),k&&k()},L=U=>(k,ne)=>{const X=U?I:E,G=()=>T(k,U,ne);fs(X,[k,G]),wf(()=>{hs(k,U?l:r),Ii(k,U?u:a),bf(X)||yf(k,i,b,G)})};return Qt(e,{onBeforeEnter(U){fs(p,[U]),Ii(U,r),Ii(U,o)},onBeforeAppear(U){fs(R,[U]),Ii(U,l),Ii(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const ne=()=>j(U,k);Ii(U,f),rv(),Ii(U,d),wf(()=>{U._isLeaving&&(hs(U,f),Ii(U,h),bf(S)||yf(U,i,m,ne))}),fs(S,[U,ne])},onEnterCancelled(U){T(U,!1),fs(A,[U])},onAppearCancelled(U){T(U,!0),fs(v,[U])},onLeaveCancelled(U){j(U),fs(P,[U])}})}function nv(t){if(t==null)return null;if(xt(t))return[Ol(t.enter),Ol(t.leave)];{const e=Ol(t);return[e,e]}}function Ol(t){return i_(t)}function Ii(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fo]||(t[fo]=new Set)).add(e)}function hs(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[fo];n&&(n.delete(e),n.size||(t[fo]=void 0))}function wf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iv=0;function yf(t,e,n,i){const s=t._endId=++iv,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=sv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function sv(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${Di}Delay`),r=i(`${Di}Duration`),o=Sf(s,r),a=i(`${Br}Delay`),l=i(`${Br}Duration`),c=Sf(a,l);let u=null,f=0,d=0;e===Di?o>0&&(u=Di,f=o,d=r.length):e===Br?c>0&&(u=Br,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Di:Br:null,d=u?u===Di?r.length:l.length:0);const h=u===Di&&/\b(transform|all)(,|$)/.test(i(`${Di}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Sf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Mf(n)+Mf(t[i])))}function Mf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function rv(){return document.body.offsetHeight}function ov(t,e,n){const i=t[fo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ka=Symbol("_vod"),sm=Symbol("_vsh"),av={beforeMount(t,{value:e},{transition:n}){t[ka]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):kr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),kr(t,!0),i.enter(t)):i.leave(t,()=>{kr(t,!1)}):kr(t,e))},beforeUnmount(t,{value:e}){kr(t,e)}};function kr(t,e){t.style.display=e?t[ka]:"none",t[sm]=!e}const lv=Symbol(""),cv=/(^|;)\s*display\s*:/;function uv(t,e,n){const i=t.style,s=Rt(n);let r=!1;if(n&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Sa(i,a,"")}else for(const o in e)n[o]==null&&Sa(i,o,"");for(const o in n)o==="display"&&(r=!0),Sa(i,o,n[o])}else if(s){if(e!==n){const o=i[lv];o&&(n+=";"+o),i.cssText=n,r=cv.test(n)}}else e&&t.removeAttribute("style");ka in t&&(t[ka]=r?i.display:"",t[sm]&&(i.display="none"))}const Ef=/\s*!important$/;function Sa(t,e,n){if(ze(n))n.forEach(i=>Sa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=dv(t,e);Ef.test(n)?t.setProperty(Cr(i),n.replace(Ef,""),"important"):t[i]=n}}const Tf=["Webkit","Moz","ms"],Bl={};function dv(t,e){const n=Bl[e];if(n)return n;let i=xr(e);if(i!=="filter"&&i in t)return Bl[e]=i;i=cp(i);for(let s=0;s<Tf.length;s++){const r=Tf[s]+i;if(r in t)return Bl[e]=r}return e}const Af="http://www.w3.org/1999/xlink";function fv(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Af,e.slice(6,e.length)):t.setAttributeNS(Af,e,n);else{const r=c_(e);n==null||r&&!dp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function hv(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=dp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ss(t,e,n,i){t.addEventListener(e,n,i)}function pv(t,e,n,i){t.removeEventListener(e,n,i)}const Cf=Symbol("_vei");function mv(t,e,n,i,s=null){const r=t[Cf]||(t[Cf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=gv(e);if(i){const c=r[e]=xv(i,s);Ss(t,a,c,l)}else o&&(pv(t,a,o,l),r[e]=void 0)}}const Rf=/(?:Once|Passive|Capture)$/;function gv(t){let e;if(Rf.test(t)){e={};let i;for(;i=t.match(Rf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let kl=0;const _v=Promise.resolve(),vv=()=>kl||(_v.then(()=>kl=0),kl=Date.now());function xv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Pn(bv(i,n.value),e,5,[i])};return n.value=t,n.attached=vv(),n}function bv(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wv=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?ov(t,i,c):e==="style"?uv(t,n,i):nl(e)?Ou(e)||mv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yv(t,e,i,c))?hv(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),fv(t,e,i,c))};function yv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pf(e)&&Ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pf(e)&&Rt(n)?!1:e in t}const za=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ze(e)?n=>va(e,n):e};function Sv(t){t.target.composing=!0}function Lf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pr=Symbol("_assign"),Ma={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[pr]=za(s);const r=i||s.props&&s.props.type==="number";Ss(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=oo(a)),t[pr](a)}),n&&Ss(t,"change",()=>{t.value=t.value.trim()}),e||(Ss(t,"compositionstart",Sv),Ss(t,"compositionend",Lf),Ss(t,"change",Lf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[pr]=za(r),t.composing)return;const o=s||t.type==="number"?oo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},Mv={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=il(e);Ss(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?oo(Va(o)):Va(o));t[pr](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Ua(()=>{t._assigning=!1})}),t[pr]=za(i)},mounted(t,{value:e,modifiers:{number:n}}){Df(t,e,n)},beforeUpdate(t,e,n){t[pr]=za(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Df(t,e,n)}};function Df(t,e,n){const i=t.multiple,s=ze(e);if(!(i&&!s&&!il(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=Va(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?oo(l):l):a.selected=d_(e,l)>-1}else a.selected=e.has(l);else if(rl(Va(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Va(t){return"_value"in t?t._value:t.value}const Ev=["ctrl","shift","alt","meta"],Tv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ev.some(n=>t[`${n}Key`]&&!e.includes(n))},rm=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Tv[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Av=Qt({patchProp:wv},ev);let If;function Cv(){return If||(If=R0(Av))}const Rv=(...t)=>{const e=Cv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Lv(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Pv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Pv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lv(t){return Rt(t)?document.querySelector(t):t}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Dv=Symbol();var Uf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Uf||(Uf={}));function Iv(){const t=f_(!0),e=t.run(()=>Qe({}));let n=[],i=[];const s=Xu({install(r){s._a=r,r.provide(Dv,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Uv="/luftqi/assets/LOGO_450x450_01.png",Vn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Nv={class:"section-title"},Fv={class:"section-body"},Ov={__name:"SidebarSection",props:{title:{type:String,required:!0},icon:{type:String,default:"fas fa-circle"},defaultOpen:{type:Boolean,default:!0}},setup(t){const n=Qe(t.defaultOpen),i=()=>{n.value=!n.value};return(s,r)=>(Ye(),et("div",{class:Bt(["section",{collapsed:!n.value}])},[N("button",{class:Bt(["section-header",n.value?"section-header-close":"section-header-open"]),onClick:i},[N("div",Nv,[N("i",{class:Bt(t.icon)},null,2),N("span",null,Cn(t.title),1)]),N("i",{class:Bt(["toggle-icon fas",n.value?"fa-chevron-up":"fa-chevron-down"])},null,2)],2),st(Rr,{name:"collapse"},{default:Yn(()=>[lr(N("div",Fv,[p0(s.$slots,"default",{},void 0,!0)],512),[[av,n.value]])]),_:3})],2))}},zr=Vn(Ov,[["__scopeId","data-v-2d285c84"]]);/*!
* sweetalert2 v11.26.18
* Released under the MIT License.
*/function om(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function Bv(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Nf(t,e){return t.get(om(t,e))}function kv(t,e,n){Bv(t,e),e.set(t,n)}function zv(t,e,n){return t.set(om(t,e),n),n}const Vv=100,Fe={},Hv=()=>{Fe.previousActiveElement instanceof HTMLElement?(Fe.previousActiveElement.focus(),Fe.previousActiveElement=null):document.body&&document.body.focus()},Gv=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Fe.restoreFocusTimeout=setTimeout(()=>{Hv(),e()},Vv),window.scrollTo(n,i)}),am="swal2-",Wv=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],ce=Wv.reduce((t,e)=>(t[e]=am+e,t),{}),$v=["success","warning","info","question","error"],Ha=$v.reduce((t,e)=>(t[e]=am+e,t),{}),lm="SweetAlert2:",nd=t=>t.charAt(0).toUpperCase()+t.slice(1),sn=t=>{console.warn(`${lm} ${typeof t=="object"?t.join(" "):t}`)},Bs=t=>{console.error(`${lm} ${t}`)},Ff=[],Xv=t=>{Ff.includes(t)||(Ff.push(t),sn(t))},cm=(t,e=null)=>{Xv(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},vl=t=>typeof t=="function"?t():t,id=t=>t&&typeof t.toPromise=="function",So=t=>id(t)?t.toPromise():Promise.resolve(t),sd=t=>t&&Promise.resolve(t)===t,rn=()=>document.body.querySelector(`.${ce.container}`),Mo=t=>{const e=rn();return e?e.querySelector(t):null},wn=t=>Mo(`.${t}`),dt=()=>wn(ce.popup),Pr=()=>wn(ce.icon),qv=()=>wn(ce["icon-content"]),um=()=>wn(ce.title),rd=()=>wn(ce["html-container"]),dm=()=>wn(ce.image),od=()=>wn(ce["progress-steps"]),xl=()=>wn(ce["validation-message"]),si=()=>Mo(`.${ce.actions} .${ce.confirm}`),Lr=()=>Mo(`.${ce.actions} .${ce.cancel}`),ks=()=>Mo(`.${ce.actions} .${ce.deny}`),Yv=()=>wn(ce["input-label"]),Dr=()=>Mo(`.${ce.loader}`),Eo=()=>wn(ce.actions),fm=()=>wn(ce.footer),bl=()=>wn(ce["timer-progress-bar"]),ad=()=>wn(ce.close),jv=`
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
`,ld=()=>{const t=dt();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(jv),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>un(r))},cd=()=>Si(document.body,ce.shown)&&!Si(document.body,ce["toast-shown"])&&!Si(document.body,ce["no-backdrop"]),wl=()=>{const t=dt();return t?Si(t,ce.toast):!1},Kv=()=>{const t=dt();return t?t.hasAttribute("data-loading"):!1},yn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Si=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Zv=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(ce).includes(n)&&!Object.values(Ha).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},bn=(t,e,n)=>{if(Zv(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){sn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}ut(t,i)}},yl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${ce.popup} > .${ce[e]}`);case"checkbox":return t.querySelector(`.${ce.popup} > .${ce.checkbox} input`);case"radio":return t.querySelector(`.${ce.popup} > .${ce.radio} input:checked`)||t.querySelector(`.${ce.popup} > .${ce.radio} input:first-child`);case"range":return t.querySelector(`.${ce.popup} > .${ce.range} input`);default:return t.querySelector(`.${ce.popup} > .${ce.input}`)}},hm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},pm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},ut=(t,e)=>{pm(t,e,!0)},Dn=(t,e)=>{pm(t,e,!1)},Yi=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&Si(s,e))return s}},Ls=(t,e,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||parseInt(`${n}`)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},zt=(t,e="flex")=>{t&&(t.style.display=e)},en=t=>{t&&(t.style.display="none")},ud=(t,e="block")=>{t&&new MutationObserver(()=>{To(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Of=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},To=(t,e,n="flex")=>{e?zt(t,n):en(t)},un=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Jv=()=>!un(si())&&!un(ks())&&!un(Lr()),zc=t=>t.scrollHeight>t.clientHeight,Qv=(t,e)=>{let n=t;for(;n&&n!==e;){if(zc(n))return!0;n=n.parentElement}return!1},mm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},dd=(t,e=!1)=>{const n=bl();n&&un(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},ex=()=>{const t=bl();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},tx=()=>typeof window>"u"||typeof document>"u",nx=`
 <div aria-labelledby="${ce.title}" aria-describedby="${ce["html-container"]}" class="${ce.popup}" tabindex="-1">
   <button type="button" class="${ce.close}"></button>
   <ul class="${ce["progress-steps"]}"></ul>
   <div class="${ce.icon}"></div>
   <img class="${ce.image}" />
   <h2 class="${ce.title}" id="${ce.title}"></h2>
   <div class="${ce["html-container"]}" id="${ce["html-container"]}"></div>
   <input class="${ce.input}" id="${ce.input}" />
   <input type="file" class="${ce.file}" />
   <div class="${ce.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${ce.select}" id="${ce.select}"></select>
   <div class="${ce.radio}"></div>
   <label class="${ce.checkbox}">
     <input type="checkbox" id="${ce.checkbox}" />
     <span class="${ce.label}"></span>
   </label>
   <textarea class="${ce.textarea}" id="${ce.textarea}"></textarea>
   <div class="${ce["validation-message"]}" id="${ce["validation-message"]}"></div>
   <div class="${ce.actions}">
     <div class="${ce.loader}"></div>
     <button type="button" class="${ce.confirm}"></button>
     <button type="button" class="${ce.deny}"></button>
     <button type="button" class="${ce.cancel}"></button>
   </div>
   <div class="${ce.footer}"></div>
   <div class="${ce["timer-progress-bar-container"]}">
     <div class="${ce["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),ix=()=>{const t=rn();return t?(t.remove(),Dn([document.documentElement,document.body],[ce["no-backdrop"],ce["toast-shown"],ce["has-column"]]),!0):!1},ps=()=>{Fe.currentInstance&&Fe.currentInstance.resetValidationMessage()},sx=()=>{const t=dt();if(!t)return;const e=Yi(t,ce.input),n=Yi(t,ce.file),i=t.querySelector(`.${ce.range} input`),s=t.querySelector(`.${ce.range} output`),r=Yi(t,ce.select),o=t.querySelector(`.${ce.checkbox} input`),a=Yi(t,ce.textarea);e&&(e.oninput=ps),n&&(n.onchange=ps),r&&(r.onchange=ps),o&&(o.onchange=ps),a&&(a.oninput=ps),i&&s&&(i.oninput=()=>{ps(),s.value=i.value},i.onchange=()=>{ps(),s.value=i.value})},rx=t=>{if(typeof t=="string"){const e=document.querySelector(t);if(!e)throw new Error(`Target element "${t}" not found`);return e}return t},ox=t=>{const e=dt();e&&(e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true"))},ax=t=>{window.getComputedStyle(t).direction==="rtl"&&(ut(rn(),ce.rtl),Fe.isRTL=!0)},lx=t=>{const e=ix();if(tx()){Bs("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=ce.container,e&&ut(n,ce["no-transition"]),yn(n,nx),n.dataset.swal2Theme=t.theme;const i=rx(t.target||"body");i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),ox(t),ax(i),sx()},fd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?cx(t,e):t&&yn(e,t)},cx=(t,e)=>{"jquery"in t?ux(e,t):yn(e,t.toString())},ux=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},dx=(t,e)=>{const n=Eo(),i=Dr();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?en(n):zt(n),bn(n,e,"actions"),fx(n,i,e),yn(i,e.loaderHtml||""),bn(i,e,"loader"))};function fx(t,e,n){const i=si(),s=ks(),r=Lr();!i||!s||!r||(Vl(i,"confirm",n),Vl(s,"deny",n),Vl(r,"cancel",n),hx(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function hx(t,e,n,i){if(!i.buttonsStyling){Dn([t,e,n],ce.styled);return}ut([t,e,n],ce.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),zl(t),zl(e),zl(n)}function zl(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Vl(t,e,n){const i=nd(e);To(t,n[`show${i}Button`],"inline-block"),yn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=ce[e],bn(t,n,`${e}Button`)}const px=(t,e)=>{const n=ad();n&&(yn(n,e.closeButtonHtml||""),bn(n,e,"closeButton"),To(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},mx=(t,e)=>{const n=rn();n&&(gx(n,e.backdrop),_x(n,e.position),vx(n,e.grow),bn(n,e,"container"))};function gx(t,e){typeof e=="string"?t.style.background=e:e||ut([document.documentElement,document.body],ce["no-backdrop"])}function _x(t,e){e&&(e in ce?ut(t,ce[e]):(sn('The "position" parameter is not valid, defaulting to "center"'),ut(t,ce.center)))}function vx(t,e){e&&ut(t,ce[`grow-${e}`])}var wt={innerParams:new WeakMap,domCache:new WeakMap};const xx=["input","file","range","select","radio","checkbox","textarea"],bx=(t,e)=>{const n=dt();if(!n)return;const i=wt.innerParams.get(t),s=!i||e.input!==i.input;xx.forEach(r=>{const o=Yi(n,ce[r]);o&&(Sx(r,e.inputAttributes),o.className=ce[r],s&&en(o))}),e.input&&(s&&wx(e),Mx(e))},wx=t=>{if(!t.input)return;if(!At[t.input]){Bs(`Unexpected type of input! Expected ${Object.keys(At).join(" | ")}, got "${t.input}"`);return}const e=gm(t.input);if(!e)return;const n=At[t.input](e,t);zt(e),t.inputAutoFocus&&setTimeout(()=>{hm(n)})},yx=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},Sx=(t,e)=>{const n=dt();if(!n)return;const i=yl(n,t);if(i){yx(i);for(const s in e)i.setAttribute(s,e[s])}},Mx=t=>{if(!t.input)return;const e=gm(t.input);e&&bn(e,t,"input")},hd=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Ao=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=ce["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&ut(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},gm=t=>{const e=dt();if(e)return Yi(e,ce[t]||ce.input)},Ga=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:sd(e)||sn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},At={};At.text=At.email=At.password=At.number=At.tel=At.url=At.search=At.date=At["datetime-local"]=At.time=At.week=At.month=(t,e)=>{const n=t;return Ga(n,e.inputValue),Ao(n,n,e),hd(n,e),n.type=e.input,n};At.file=(t,e)=>{const n=t;return Ao(n,n,e),hd(n,e),n};At.range=(t,e)=>{const n=t,i=n.querySelector("input"),s=n.querySelector("output");return i&&(Ga(i,e.inputValue),i.type=e.input,Ao(i,t,e)),s&&Ga(s,e.inputValue),t};At.select=(t,e)=>{const n=t;if(n.textContent="",e.inputPlaceholder){const i=document.createElement("option");yn(i,e.inputPlaceholder),i.value="",i.disabled=!0,i.selected=!0,n.appendChild(i)}return Ao(n,n,e),n};At.radio=t=>{const e=t;return e.textContent="",t};At.checkbox=(t,e)=>{const n=dt();if(!n)throw new Error("Popup not found");const i=yl(n,"checkbox");if(!i)throw new Error("Checkbox input not found");i.value="1",i.checked=!!e.inputValue;const r=t.querySelector("span");if(r){const o=e.inputPlaceholder||e.inputLabel;o&&yn(r,o)}return i};At.textarea=(t,e)=>{const n=t;Ga(n,e.inputValue),hd(n,e),Ao(n,n,e);const i=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=dt();if(!s)return;const r=parseInt(window.getComputedStyle(s).width),o=()=>{if(!document.body.contains(n))return;const a=n.offsetWidth+i(n),l=dt();l&&(a>r?l.style.width=`${a}px`:Ls(l,"width",e.width))};new MutationObserver(o).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const Ex=(t,e)=>{const n=rd();n&&(ud(n),bn(n,e,"htmlContainer"),e.html?(fd(e.html,n),zt(n,"block")):e.text?(n.textContent=e.text,zt(n,"block")):en(n),bx(t,e))},Tx=(t,e)=>{const n=fm();n&&(ud(n),To(n,!!e.footer,"block"),e.footer&&fd(e.footer,n),bn(n,e,"footer"))},Ax=(t,e)=>{const n=wt.innerParams.get(t),i=Pr();if(!i)return;if(n&&e.icon===n.icon){kf(i,e),Bf(i,e);return}if(!e.icon&&!e.iconHtml){en(i);return}if(e.icon&&Object.keys(Ha).indexOf(e.icon)===-1){Bs(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),en(i);return}zt(i),kf(i,e),Bf(i,e),ut(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",_m)},Bf=(t,e)=>{for(const[n,i]of Object.entries(Ha))e.icon!==n&&Dn(t,i);ut(t,e.icon&&Ha[e.icon]),Px(t,e),_m(),bn(t,e,"icon")},_m=()=>{const t=dt();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},Cx=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Rx=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,kf=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=zf(e.iconHtml):e.icon==="success"?(i=Cx(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=Rx:e.icon&&(i=zf({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&yn(t,i)},Px=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Of(t,n,"background-color",e.iconColor);Of(t,".swal2-success-ring","border-color",e.iconColor)}},zf=t=>`<div class="${ce["icon-content"]}">${t}</div>`,Lx=(t,e)=>{const n=dm();if(n){if(!e.imageUrl){en(n);return}zt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Ls(n,"width",e.imageWidth),Ls(n,"height",e.imageHeight),n.className=ce.image,bn(n,e,"image")}};let pd=!1,vm=0,xm=0,bm=0,wm=0;const Dx=t=>{t.addEventListener("mousedown",Wa),document.body.addEventListener("mousemove",$a),t.addEventListener("mouseup",Xa),t.addEventListener("touchstart",Wa),document.body.addEventListener("touchmove",$a),t.addEventListener("touchend",Xa)},Ix=t=>{t.removeEventListener("mousedown",Wa),document.body.removeEventListener("mousemove",$a),t.removeEventListener("mouseup",Xa),t.removeEventListener("touchstart",Wa),document.body.removeEventListener("touchmove",$a),t.removeEventListener("touchend",Xa)},Wa=t=>{const e=dt();if(!e)return;const n=Pr();if(t.target===e||n&&n.contains(t.target)){pd=!0;const i=ym(t);vm=i.clientX,xm=i.clientY,bm=parseInt(e.style.insetInlineStart)||0,wm=parseInt(e.style.insetBlockStart)||0,ut(e,"swal2-dragging")}},$a=t=>{const e=dt();if(e&&pd){let{clientX:n,clientY:i}=ym(t);const s=n-vm;e.style.insetInlineStart=`${bm+(Fe.isRTL?-s:s)}px`,e.style.insetBlockStart=`${wm+(i-xm)}px`}},Xa=()=>{const t=dt();pd=!1,Dn(t,"swal2-dragging")},ym=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},Ux=(t,e)=>{const n=rn(),i=dt();if(!(!n||!i)){if(e.toast){Ls(n,"width",e.width),i.style.width="100%";const s=Dr();s&&i.insertBefore(s,Pr())}else Ls(i,"width",e.width);Ls(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),en(xl()),Nx(i,e),e.draggable&&!e.toast?(ut(i,ce.draggable),Dx(i)):(Dn(i,ce.draggable),Ix(i))}},Nx=(t,e)=>{const n=e.showClass||{};t.className=`${ce.popup} ${un(t)?n.popup:""}`,e.toast?(ut([document.documentElement,document.body],ce["toast-shown"]),ut(t,ce.toast)):ut(t,ce.modal),bn(t,e,"popup"),typeof e.customClass=="string"&&ut(t,e.customClass),e.icon&&ut(t,ce[`icon-${e.icon}`])},Fx=(t,e)=>{const n=od();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){en(n);return}zt(n),n.textContent="",s>=i.length&&sn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=Ox(r);if(n.appendChild(a),o===s&&ut(a,ce["active-progress-step"]),o!==i.length-1){const l=Bx(e);n.appendChild(l)}})},Ox=t=>{const e=document.createElement("li");return ut(e,ce["progress-step"]),yn(e,t),e},Bx=t=>{const e=document.createElement("li");return ut(e,ce["progress-step-line"]),t.progressStepsDistance&&Ls(e,"width",t.progressStepsDistance),e},kx=(t,e)=>{const n=um();n&&(ud(n),To(n,!!(e.title||e.titleText),"block"),e.title&&fd(e.title,n),e.titleText&&(n.innerText=e.titleText),bn(n,e,"title"))},Sm=(t,e)=>{var n;Ux(t,e),mx(t,e),Fx(t,e),Ax(t,e),Lx(t,e),kx(t,e),px(t,e),Ex(t,e),dx(t,e),Tx(t,e);const i=dt();typeof e.didRender=="function"&&i&&e.didRender(i),(n=Fe.eventEmitter)===null||n===void 0||n.emit("didRender",i)},zx=()=>un(dt()),Mm=()=>{var t;return(t=si())===null||t===void 0?void 0:t.click()},Vx=()=>{var t;return(t=ks())===null||t===void 0?void 0:t.click()},Hx=()=>{var t;return(t=Lr())===null||t===void 0?void 0:t.click()},Ir=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Em=t=>{if(t.keydownTarget&&t.keydownHandlerAdded&&t.keydownHandler){const e=t.keydownHandler;t.keydownTarget.removeEventListener("keydown",e,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1}},Gx=(t,e,n)=>{if(Em(t),!e.toast){const i=r=>$x(e,r,n);t.keydownHandler=i;const s=e.keydownListenerCapture?window:dt();if(s){t.keydownTarget=s,t.keydownListenerCapture=e.keydownListenerCapture;const r=i;t.keydownTarget.addEventListener("keydown",r,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0}}},Vc=(t,e)=>{var n;const i=ld();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=dt())===null||n===void 0||n.focus()},Tm=["ArrowRight","ArrowDown"],Wx=["ArrowLeft","ArrowUp"],$x=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Xx(e,t):e.key==="Tab"?qx(e):[...Tm,...Wx].includes(e.key)?Yx(e.key):e.key==="Escape"&&jx(e,t,n)))},Xx=(t,e)=>{if(!vl(e.allowEnterKey))return;const n=dt();if(!n||!e.input)return;const i=yl(n,e.input);if(t.target&&i&&t.target instanceof HTMLElement&&t.target.outerHTML===i.outerHTML){if(["textarea","file"].includes(e.input))return;Mm(),t.preventDefault()}},qx=t=>{const e=t.target,n=ld();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?Vc(i,-1):Vc(i,1),t.stopPropagation(),t.preventDefault()},Yx=t=>{const e=Eo(),n=si(),i=ks(),s=Lr();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=Tm.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&un(a))break}a instanceof HTMLButtonElement&&a.focus()}},jx=(t,e,n)=>{t.preventDefault(),vl(e.allowEscapeKey)&&n(Ir.esc)};var wr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Kx=()=>{const t=rn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Am=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Cm=typeof window<"u"&&!!window.GestureEvent,Zx=()=>{if(Cm&&!Si(document.body,ce.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ut(document.body,ce.iosfix),Jx()}},Jx=()=>{const t=rn();if(!t)return;let e;t.ontouchstart=n=>{e=Qx(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Qx=t=>{const e=t.target,n=rn(),i=rd();return!n||!i||eb(t)||tb(t)?!1:e===n||!zc(n)&&e instanceof HTMLElement&&!Qv(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(zc(i)&&i.contains(e))},eb=t=>!!(t.touches&&t.touches.length&&t.touches[0].touchType==="stylus"),tb=t=>t.touches&&t.touches.length>1,nb=()=>{if(Si(document.body,ce.iosfix)){const t=parseInt(document.body.style.top,10);Dn(document.body,ce.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},ib=()=>{const t=document.createElement("div");t.className=ce["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let mr=null;const sb=t=>{mr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(mr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${mr+ib()}px`)},rb=()=>{mr!==null&&(document.body.style.paddingRight=`${mr}px`,mr=null)};function Rm(t,e,n,i){wl()?Vf(t,i):(Gv(n).then(()=>Vf(t,i)),Em(Fe)),Cm?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),cd()&&(rb(),nb(),Am()),ob()}function ob(){Dn([document.documentElement,document.body],[ce.shown,ce["height-auto"],ce["no-backdrop"],ce["toast-shown"]])}function ji(t){t=lb(t);const e=wr.swalPromiseResolve.get(this),n=ab(this);this.isAwaitingPromise?t.isDismissed||(Co(this),e(t)):n&&e(t)}const ab=t=>{const e=dt();if(!e)return!1;const n=wt.innerParams.get(t);if(!n||Si(e,n.hideClass.popup))return!1;Dn(e,n.showClass.popup),ut(e,n.hideClass.popup);const i=rn();return Dn(i,n.showClass.backdrop),ut(i,n.hideClass.backdrop),cb(t,e,n),!0};function Pm(t){const e=wr.swalPromiseReject.get(this);Co(this),e&&e(t)}const Co=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,wt.innerParams.get(t)||t._destroy())},lb=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),cb=(t,e,n)=>{var i;const s=rn(),r=mm(e);typeof n.willClose=="function"&&n.willClose(e),(i=Fe.eventEmitter)===null||i===void 0||i.emit("willClose",e),r&&s?ub(t,e,s,!!n.returnFocus,n.didClose):s&&Rm(t,s,!!n.returnFocus,n.didClose)},ub=(t,e,n,i,s)=>{Fe.swalCloseEventFinishedCallback=Rm.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Fe.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Fe),delete Fe.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Vf=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Fe.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},yr=t=>{let e=dt();if(e||new ho,e=dt(),!e)return;const n=Dr();wl()?en(Pr()):db(e,t),zt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},db=(t,e)=>{const n=Eo(),i=Dr();!n||!i||(!e&&un(si())&&(e=si()),zt(n),e&&(en(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),ut([t,n],ce.loading))},fb=(t,e)=>{e.input==="select"||e.input==="radio"?_b(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(id(e.inputValue)||sd(e.inputValue))&&(yr(si()),vb(t,e))},hb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return pb(n);case"radio":return mb(n);case"file":return gb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},pb=t=>t.checked?1:0,mb=t=>t.checked?t.value:null,gb=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,_b=(t,e)=>{const n=dt();if(!n)return;const i=s=>{e.input==="select"?xb(n,qa(s),e):e.input==="radio"&&bb(n,qa(s),e)};id(e.inputOptions)||sd(e.inputOptions)?(yr(si()),So(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Bs(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},vb=(t,e)=>{const n=t.getInput();n&&(en(n),So(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,zt(n),n.focus(),t.hideLoading()}).catch(i=>{Bs(`Error in inputValue promise: ${i}`),n.value="",zt(n),n.focus(),t.hideLoading()}))};function xb(t,e,n){const i=Yi(t,ce.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,yn(l,o),l.selected=Lm(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function bb(t,e,n){const i=Yi(t,ce.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=ce.radio,l.value=o,Lm(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");yn(u,a),u.className=ce.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const qa=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=qa(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=qa(i)),e.push([n,i])}),e},Lm=(t,e)=>!!e&&e!==null&&e!==void 0&&e.toString()===t.toString(),wb=t=>{const e=wt.innerParams.get(t);t.disableButtons(),e.input?Dm(t,"confirm"):gd(t,!0)},yb=t=>{const e=wt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Dm(t,"deny"):md(t,!1)},Sb=(t,e)=>{t.disableButtons(),e(Ir.cancel)},Dm=(t,e)=>{const n=wt.innerParams.get(t);if(!n.input){Bs(`The "input" parameter is needed to be set when using returnInputValueOn${nd(e)}`);return}const i=t.getInput(),s=hb(t,n);n.inputValidator?Mb(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?md(t,s):gd(t,s)},Mb=(t,e,n)=>{const i=wt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>So(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?md(t,e):gd(t,e)})},md=(t,e)=>{const n=wt.innerParams.get(t);n.showLoaderOnDeny&&yr(ks()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>So(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Co(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Im(t,s))):t.close({isDenied:!0,value:e})},Hf=(t,e)=>{t.close({isConfirmed:!0,value:e})},Im=(t,e)=>{t.rejectPromise(e)},gd=(t,e)=>{const n=wt.innerParams.get(t);n.showLoaderOnConfirm&&yr(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>So(n.preConfirm(e,n.validationMessage))).then(s=>{un(xl())||s===!1?(t.hideLoading(),Co(t)):Hf(t,typeof s>"u"?e:s)}).catch(s=>Im(t,s))):Hf(t,e)};function Ya(){const t=wt.innerParams.get(this);if(!t)return;const e=wt.domCache.get(this);en(e.loader),wl()?t.icon&&zt(Pr()):Eb(e),Dn([e.popup,e.actions],ce.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Eb=t=>{const e=t.loader.getAttribute("data-button-to-replace"),n=e?t.popup.getElementsByClassName(e):[];n.length?zt(n[0],"inline-block"):Jv()&&en(t.actions)};function Um(){const t=wt.innerParams.get(this),e=wt.domCache.get(this);return e?yl(e.popup,t.input):null}function Nm(t,e,n){const i=wt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Fm(t,e){const n=dt();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${ce.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function Om(){Nm(this,["confirmButton","denyButton","cancelButton"],!1)}function Bm(){Nm(this,["confirmButton","denyButton","cancelButton"],!0)}function km(){Fm(this.getInput(),!1)}function zm(){Fm(this.getInput(),!0)}function Vm(t){const e=wt.domCache.get(this),n=wt.innerParams.get(this);yn(e.validationMessage,t),e.validationMessage.className=ce["validation-message"],n.customClass&&n.customClass.validationMessage&&ut(e.validationMessage,n.customClass.validationMessage),zt(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",ce["validation-message"]),hm(i),ut(i,ce.inputerror))}function Hm(){const t=wt.domCache.get(this);t.validationMessage&&en(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Dn(e,ce.inputerror))}const Ki={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},Tb=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],Ab={allowEnterKey:void 0},Cb=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Gm=t=>Object.prototype.hasOwnProperty.call(Ki,t),Wm=t=>Tb.indexOf(t)!==-1,$m=t=>Ab[t],Rb=t=>{Gm(t)||sn(`Unknown parameter "${t}"`)},Pb=t=>{Cb.includes(t)&&sn(`The parameter "${t}" is incompatible with toasts`)},Lb=t=>{const e=$m(t);e&&cm(t,e)},Xm=t=>{t.backdrop===!1&&t.allowOutsideClick&&sn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&sn(`Invalid theme "${t.theme}"`);for(const e in t)Rb(e),t.toast&&Pb(e),Lb(e)};function qm(t){const e=rn(),n=dt(),i=wt.innerParams.get(this);if(!n||Si(n,i.hideClass.popup)){sn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=Db(t),r=Object.assign({},i,s);Xm(r),e&&(e.dataset.swal2Theme=r.theme),Sm(this,r),wt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const Db=t=>{const e={};return Object.keys(t).forEach(n=>{if(Wm(n)){const i=t;e[n]=i[n]}else sn(`Invalid parameter to update: ${n}`)}),e};function Ym(){var t;const e=wt.domCache.get(this),n=wt.innerParams.get(this);if(!n){jm(this);return}e.popup&&Fe.swalCloseEventFinishedCallback&&(Fe.swalCloseEventFinishedCallback(),delete Fe.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),(t=Fe.eventEmitter)===null||t===void 0||t.emit("didDestroy"),Ib(this)}const Ib=t=>{jm(t),delete t.params,delete Fe.keydownHandler,delete Fe.keydownTarget,delete Fe.currentInstance},jm=t=>{t.isAwaitingPromise?(Hl(wt,t),t.isAwaitingPromise=!0):(Hl(wr,t),Hl(wt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Hl=(t,e)=>{for(const n in t)t[n].delete(e)};var Ub=Object.freeze({__proto__:null,_destroy:Ym,close:ji,closeModal:ji,closePopup:ji,closeToast:ji,disableButtons:Bm,disableInput:zm,disableLoading:Ya,enableButtons:Om,enableInput:km,getInput:Um,handleAwaitingPromise:Co,hideLoading:Ya,rejectPromise:Pm,resetValidationMessage:Hm,showValidationMessage:Vm,update:qm});const Nb=(t,e,n)=>{t.toast?Fb(t,e,n):(Bb(e),kb(e),zb(t,e,n))},Fb=(t,e,n)=>{e.popup.onclick=()=>{t&&(Ob(t)||t.timer||t.input)||n(Ir.close)}},Ob=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let ja=!1;const Bb=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(ja=!0)}}},kb=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(ja=!0)}}},zb=(t,e,n)=>{e.container.onclick=i=>{if(ja){ja=!1;return}i.target===e.container&&vl(t.allowOutsideClick)&&n(Ir.backdrop)}},Vb=t=>typeof t=="object"&&t!==null&&"jquery"in t,Gf=t=>t instanceof Element||Vb(t),Hb=t=>{const e={};return typeof t[0]=="object"&&!Gf(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||Gf(s)?e[n]=s:s!==void 0&&Bs(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Gb(...t){return new this(...t)}function Wb(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const $b=()=>Fe.timeout&&Fe.timeout.getTimerLeft(),Km=()=>{if(Fe.timeout)return ex(),Fe.timeout.stop()},Zm=()=>{if(Fe.timeout){const t=Fe.timeout.start();return dd(t),t}},Xb=()=>{const t=Fe.timeout;return t&&(t.running?Km():Zm())},qb=t=>{if(Fe.timeout){const e=Fe.timeout.increase(t);return dd(e,!0),e}},Yb=()=>!!(Fe.timeout&&Fe.timeout.isRunning());let Wf=!1;const Hc={};function jb(t="data-swal-template"){Hc[t]=this,Wf||(document.body.addEventListener("click",Kb),Wf=!0)}const Kb=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Hc){const i=e.getAttribute&&e.getAttribute(n);if(i){Hc[n].fire({template:i});return}}};class Zb{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Fe.eventEmitter=new Zb;const Jb=(t,e)=>{Fe.eventEmitter&&Fe.eventEmitter.on(t,e)},Qb=(t,e)=>{Fe.eventEmitter&&Fe.eventEmitter.once(t,e)},ew=(t,e)=>{if(Fe.eventEmitter){if(!t){Fe.eventEmitter.reset();return}e?Fe.eventEmitter.removeListener(t,e):Fe.eventEmitter.removeAllListeners(t)}};var tw=Object.freeze({__proto__:null,argsToParams:Hb,bindClickHandler:jb,clickCancel:Hx,clickConfirm:Mm,clickDeny:Vx,enableLoading:yr,fire:Gb,getActions:Eo,getCancelButton:Lr,getCloseButton:ad,getConfirmButton:si,getContainer:rn,getDenyButton:ks,getFocusableElements:ld,getFooter:fm,getHtmlContainer:rd,getIcon:Pr,getIconContent:qv,getImage:dm,getInputLabel:Yv,getLoader:Dr,getPopup:dt,getProgressSteps:od,getTimerLeft:$b,getTimerProgressBar:bl,getTitle:um,getValidationMessage:xl,increaseTimer:qb,isDeprecatedParameter:$m,isLoading:Kv,isTimerRunning:Yb,isUpdatableParameter:Wm,isValidParameter:Gm,isVisible:zx,mixin:Wb,off:ew,on:Jb,once:Qb,resumeTimer:Zm,showLoading:yr,stopTimer:Km,toggleTimer:Xb});class nw{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Jm=["swal-title","swal-html","swal-footer"],iw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return dw(n),Object.assign(sw(n),rw(n),ow(n),aw(n),lw(n),cw(n),uw(n,Jm))},sw=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{Us(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(s in Ki&&typeof Ki[s]=="boolean"?e[s]=r!=="false":s in Ki&&typeof Ki[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},rw=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},ow=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{Us(i,["type","color","aria-label"]);const s=i.getAttribute("type");if(!(!s||!["confirm","cancel","deny"].includes(s))){if(e[`${s}ButtonText`]=i.innerHTML,e[`show${nd(s)}Button`]=!0,i.hasAttribute("color")){const r=i.getAttribute("color");r!==null&&(e[`${s}ButtonColor`]=r)}if(i.hasAttribute("aria-label")){const r=i.getAttribute("aria-label");r!==null&&(e[`${s}ButtonAriaLabel`]=r)}}}),e},aw=t=>{const e={},n=t.querySelector("swal-image");return n&&(Us(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},lw=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Us(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},cw=t=>{const e={},n=t.querySelector("swal-input");n&&(Us(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{Us(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},uw=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(Us(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},dw=t=>{const e=Jm.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||sn(`Unrecognized element <${i}>`)})},Us=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&sn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Qm=10,fw=t=>{var e,n;const i=rn(),s=dt();if(!i||!s)return;typeof t.willOpen=="function"&&t.willOpen(s),(e=Fe.eventEmitter)===null||e===void 0||e.emit("willOpen",s);const o=window.getComputedStyle(document.body).overflowY;if(mw(i,s,t),setTimeout(()=>{hw(i,s)},Qm),cd()&&(pw(i,t.scrollbarPadding!==void 0?t.scrollbarPadding:!1,o),Kx()),!wl()&&!Fe.previousActiveElement&&(Fe.previousActiveElement=document.activeElement),typeof t.didOpen=="function"){const a=t.didOpen;setTimeout(()=>a(s))}(n=Fe.eventEmitter)===null||n===void 0||n.emit("didOpen",s)},Ka=t=>{const e=dt();if(!e||t.target!==e)return;const n=rn();n&&(e.removeEventListener("animationend",Ka),e.removeEventListener("transitionend",Ka),n.style.overflowY="auto",Dn(n,ce["no-transition"]))},hw=(t,e)=>{mm(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Ka),e.addEventListener("transitionend",Ka)):t.style.overflowY="auto"},pw=(t,e,n)=>{Zx(),e&&n!=="hidden"&&sb(n),setTimeout(()=>{t.scrollTop=0})},mw=(t,e,n)=>{var i;(i=n.showClass)!==null&&i!==void 0&&i.backdrop&&ut(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),zt(e,"grid"),setTimeout(()=>{var s;(s=n.showClass)!==null&&s!==void 0&&s.popup&&ut(e,n.showClass.popup),e.style.removeProperty("opacity")},Qm)):zt(e,"grid"),ut([document.documentElement,document.body],ce.shown),n.heightAuto&&n.backdrop&&!n.toast&&ut([document.documentElement,document.body],ce["height-auto"])};var $f={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function gw(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=$f.email),t.input==="url"&&(t.inputValidator=$f.url))}function _w(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(sn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function vw(t){gw(t),t.showLoaderOnConfirm&&!t.preConfirm&&sn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),_w(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),lx(t)}let qn;var Ho=new WeakMap;class Pt{constructor(...e){if(kv(this,Ho,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;qn=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,zv(Ho,this,this._main(qn.params))}_main(e,n={}){if(Xm(Object.assign({},n,e)),Fe.currentInstance){const r=wr.swalPromiseResolve.get(Fe.currentInstance),{isAwaitingPromise:o}=Fe.currentInstance;Fe.currentInstance._destroy(),o||r({isDismissed:!0}),cd()&&Am()}Fe.currentInstance=qn;const i=bw(e,n);vw(i),Object.freeze(i),Fe.timeout&&(Fe.timeout.stop(),delete Fe.timeout),clearTimeout(Fe.restoreFocusTimeout);const s=ww(qn);return Sm(qn,i),wt.innerParams.set(qn,i),xw(qn,s,i)}then(e){return Nf(Ho,this).then(e)}finally(e){return Nf(Ho,this).finally(e)}}const xw=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o,isConfirmed:!1,isDenied:!1})};wr.swalPromiseResolve.set(t,i),wr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{wb(t)},e.denyButton.onclick=()=>{yb(t)},e.cancelButton.onclick=()=>{Sb(t,r)},e.closeButton.onclick=()=>{r(Ir.close)},Nb(n,e,r),Gx(Fe,n,r),fb(t,n),fw(n),yw(Fe,n,r),Sw(e,n),setTimeout(()=>{e.container.scrollTop=0})}),bw=(t,e)=>{const n=iw(t),i=Object.assign({},Ki,e,n,t);return i.showClass=Object.assign({},Ki.showClass,i.showClass),i.hideClass=Object.assign({},Ki.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},ww=t=>{const e={popup:dt(),container:rn(),actions:Eo(),confirmButton:si(),denyButton:ks(),cancelButton:Lr(),loader:Dr(),closeButton:ad(),validationMessage:xl(),progressSteps:od()};return wt.domCache.set(t,e),e},yw=(t,e,n)=>{const i=bl();en(i),e.timer&&(t.timeout=new nw(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&i&&(zt(i),bn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&dd(e.timer)})))},Sw=(t,e)=>{if(!e.toast){if(!vl(e.allowEnterKey)){cm("allowEnterKey"),Tw();return}Mw(t)||Ew(t,e)||Vc(-1,1)}},Mw=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&un(n))return n.focus(),!0;return!1},Ew=(t,e)=>e.focusDeny&&un(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&un(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&un(t.confirmButton)?(t.confirmButton.focus(),!0):!1,Tw=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Pt.prototype.disableButtons=Bm;Pt.prototype.enableButtons=Om;Pt.prototype.getInput=Um;Pt.prototype.disableInput=zm;Pt.prototype.enableInput=km;Pt.prototype.hideLoading=Ya;Pt.prototype.disableLoading=Ya;Pt.prototype.showValidationMessage=Vm;Pt.prototype.resetValidationMessage=Hm;Pt.prototype.close=ji;Pt.prototype.closePopup=ji;Pt.prototype.closeModal=ji;Pt.prototype.closeToast=ji;Pt.prototype.rejectPromise=Pm;Pt.prototype.update=qm;Pt.prototype._destroy=Ym;Object.assign(Pt,tw);Object.keys(Ub).forEach(t=>{Pt[t]=function(...e){if(qn&&qn[t])return qn[t](...e)}});Pt.DismissReason=Ir;Pt.version="11.26.18";const ho=Pt;ho.default=ho;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const eg={confirmButtonColor:"rgb(60, 130, 191)",cancelButtonColor:"#6c757d",confirmButtonText:"確定",cancelButtonText:"取消",buttonsStyling:!0,customClass:{popup:"swal-custom-popup",title:"swal-custom-title",htmlContainer:"swal-custom-content",confirmButton:"swal-custom-confirm",cancelButton:"swal-custom-cancel"}},Gc=(t,e="")=>ho.fire({...eg,icon:"warning",title:t,text:e}),Aw=(t,e="",n="確定")=>ho.fire({...eg,icon:"warning",title:t,text:e,showCancelButton:!0,confirmButtonText:n,confirmButtonColor:"#dc3545"}),Ur=t=>(ci("data-v-af655900"),t=t(),ui(),t),Cw={class:"text-editor"},Rw={class:"form-group"},Pw=Ur(()=>N("label",null,"文字內容",-1)),Lw={class:"form-row"},Dw={class:"form-group"},Iw=Ur(()=>N("label",null,"字型",-1)),Uw=ed('<option value="Microsoft JhengHei" data-v-af655900>微軟正黑體</option><option value="Arial" data-v-af655900>Arial</option><option value="Times New Roman" data-v-af655900>Times New Roman</option><option value="Georgia" data-v-af655900>Georgia</option><option value="Courier New" data-v-af655900>Courier New</option>',5),Nw=[Uw],Fw={class:"form-group"},Ow=Ur(()=>N("label",null,"大小",-1)),Bw={class:"form-group"},kw=Ur(()=>N("label",null,"文字顏色",-1)),zw={class:"color-row"},Vw={class:"color-value"},Hw=Ur(()=>N("i",{class:"fas fa-plus"},null,-1)),Gw=Ur(()=>N("div",{class:"hint"},[N("i",{class:"fas fa-info-circle"}),ii(" 雙擊畫布上的文字可直接編輯 ")],-1)),Ww={__name:"TextEditor",emits:["add-text"],setup(t,{emit:e}){const n=e,i=Qe(""),s=Qe("Microsoft JhengHei"),r=Qe(16),o=Qe("#000000"),a=()=>{if(!i.value.trim()){Gc("請輸入文字","文字內容不能為空白");return}n("add-text",{content:i.value,fontFamily:s.value,fontSize:r.value,color:o.value}),i.value=""};return(l,c)=>(Ye(),et("div",Cw,[N("div",Rw,[Pw,lr(N("textarea",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),class:"form-control",placeholder:"輸入文字內容...",rows:"3"},null,512),[[Ma,i.value]])]),N("div",Lw,[N("div",Dw,[Iw,lr(N("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),class:"form-control"},Nw,512),[[Mv,s.value]])]),N("div",Fw,[Ow,lr(N("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u),type:"number",class:"form-control",min:"12",max:"200"},null,512),[[Ma,r.value,void 0,{number:!0}]])])]),N("div",Bw,[kw,N("div",zw,[lr(N("input",{"onUpdate:modelValue":c[3]||(c[3]=u=>o.value=u),type:"color",class:"color-input"},null,512),[[Ma,o.value]]),N("span",Vw,Cn(o.value),1)])]),N("button",{class:"add-btn btn btn-primary",onClick:a},[Hw,ii(" 新增至畫布 ")]),Gw]))}},$w=Vn(Ww,[["__scopeId","data-v-af655900"]]),Sl=t=>(ci("data-v-1163b916"),t=t(),ui(),t),Xw={class:"panel"},qw={class:"panel-content"},Yw=Sl(()=>N("i",{class:"fas fa-cloud-upload-alt"},null,-1)),jw=Sl(()=>N("span",null,"點擊或拖曳上傳圖片",-1)),Kw=Sl(()=>N("small",null,"PNG、JPG、GIF・最大 5MB",-1)),Zw=Sl(()=>N("div",{class:"help-text"},[N("i",{class:"fas fa-info-circle"}),N("span",null,"圖片將自動縮放至可編輯區域內")],-1)),Jw={__name:"ImageUploader",emits:["upload-image"],setup(t,{emit:e}){const n=e,i=Qe(null),s=Qe(!1),r=a=>a?a.type.startsWith("image/")?a.size>5*1024*1024?(Gc("檔案過大","圖片大小不能超過 5MB"),!1):!0:(Gc("格式錯誤","請選擇圖片檔案（PNG、JPG、GIF）"),!1):!1,o=a=>{const l=a.target.files[0];r(l)&&(n("upload-image",l),a.target.value="")};return(a,l)=>(Ye(),et("div",Xw,[N("div",qw,[N("label",{class:Bt(["upload-label",{dragging:s.value}])},[N("input",{ref_key:"fileInput",ref:i,type:"file",accept:"image/*",style:{display:"none"},onChange:o},null,544),Yw,jw,Kw],2),Zw])]))}},Qw=Vn(Jw,[["__scopeId","data-v-1163b916"]]),ey="/luftqi";function Tn(t){return`${ey}${t}`}const ns=250,Ds=Math.round(ns*52/48),tg=800,ng=600,Zi=Math.round((tg-ns)/2),Ji=Math.round((ng-Ds)/2),Ws={topLeft:{x:Zi,y:Ji},topRight:{x:Zi+ns,y:Ji},bottomLeft:{x:Zi,y:Ji+Ds},bottomRight:{x:Zi+ns,y:Ji+Ds},width:ns,height:Ds},Ui={topLeft:{x:Zi,y:Ji},topRight:{x:Zi+ns,y:Ji},bottomLeft:{x:Zi,y:Ji+Ds},bottomRight:{x:Zi+ns,y:Ji+Ds},width:ns,height:Ds},ty={width:tg,height:ng};function ny(t){const e=[t.topLeft.x,t.topRight.x,t.bottomLeft.x,t.bottomRight.x],n=[t.topLeft.y,t.topRight.y,t.bottomLeft.y,t.bottomRight.y],i=Math.min(...e),s=Math.min(...n),r=Math.max(...e),o=Math.max(...n);return{left:i,top:s,width:r-i,height:o-s}}function on(t,e,n){return{id:t,name:e,thumbnail:Tn(`/assets/products/${t}.png`),baseImage:Tn(`/assets/products/${t}.png`),canvasSize:ty,perspective:n,printArea:ny(n)}}const Is={Cube_B:on("Cube_B","Cube Black",Ws),Cube_BG:on("Cube_BG","Cube Beige",Ws),Cube_Blue:on("Cube_Blue","Cube Blue",Ws),Cube_G:on("Cube_G","Cube Gold",Ws),Cube_P:on("Cube_P","Cube Pink",Ws),Cube_S:on("Cube_S","Cube Silver",Ws),Duo_B:on("Duo_B","Duo Black",Ui),Duo_BG:on("Duo_BG","Duo Black Gold",Ui),Duo_Blue:on("Duo_Blue","Duo Blue",Ui),Duo_G:on("Duo_G","Duo Gold",Ui),Duo_Green:on("Duo_Green","Duo Green",Ui),Duo_P:on("Duo_P","Duo Pink",Ui),Duo_R:on("Duo_R","Duo Red",Ui),Duo_S:on("Duo_S","Duo Silver",Ui)},Za=[{id:"scene_office",name:"辦公桌",thumbnail:Tn("/scenes/office.jpg"),url:Tn("/scenes/office.jpg")},{id:"scene_cafe",name:"咖啡廳",thumbnail:Tn("/scenes/cafe.jpg"),url:Tn("/scenes/cafe.jpg")},{id:"scene_home",name:"居家",thumbnail:Tn("/scenes/home.jpg"),url:Tn("/scenes/home.jpg")},{id:"scene_car",name:"車上",thumbnail:Tn("/scenes/car.jpg"),url:Tn("/scenes/car.jpg")},{id:"scene_dark",name:"暗色背景",thumbnail:Tn("/scenes/dark.jpg"),url:Tn("/scenes/dark.jpg")}],Ro=t=>(ci("data-v-18a179e1"),t=t(),ui(),t),iy={class:"bg-setting"},sy=Ro(()=>N("div",{class:"section-label"},[N("i",{class:"fas fa-mountain"}),N("span",null,"選擇場景背景")],-1)),ry=Ro(()=>N("div",{class:"scene-none-icon"},[N("i",{class:"fas fa-ban"})],-1)),oy=Ro(()=>N("span",null,"無背景（透明）",-1)),ay={key:0,class:"fas fa-check-circle check-icon"},ly={class:"scene-grid"},cy=["title","onClick"],uy={class:"scene-thumb"},dy=["src","alt"],fy={key:0,class:"scene-overlay"},hy=Ro(()=>N("i",{class:"fas fa-check-circle"},null,-1)),py=[hy],my={class:"scene-name"},gy={key:0,class:"selected-hint"},_y=Ro(()=>N("i",{class:"fas fa-image"},null,-1)),vy={__name:"BackgroundSetting",props:{modelValue:{type:String,default:null}},emits:["change-background"],setup(t){const e=t,n=Ct(()=>e.modelValue?Za.find(i=>i.id===e.modelValue)??null:null);return(i,s)=>(Ye(),et("div",iy,[sy,N("div",{class:Bt(["scene-none",{active:t.modelValue===null}]),onClick:s[0]||(s[0]=r=>i.$emit("change-background",null))},[ry,oy,t.modelValue===null?(Ye(),et("i",ay)):It("",!0)],2),N("div",ly,[(Ye(!0),et(Yt,null,Vp(ar(Za),r=>(Ye(),et("div",{key:r.id,class:Bt(["scene-card",{active:t.modelValue===r.id}]),title:r.name,onClick:o=>i.$emit("change-background",r.id)},[N("div",uy,[N("img",{src:r.thumbnail,alt:r.name,loading:"lazy"},null,8,dy),t.modelValue===r.id?(Ye(),et("div",fy,py)):It("",!0)]),N("div",my,Cn(r.name),1)],10,cy))),128))]),n.value?(Ye(),et("div",gy,[_y,N("span",null,"已選："+Cn(n.value.name),1)])):It("",!0)]))}},xy=Vn(vy,[["__scopeId","data-v-18a179e1"]]),Vt=t=>(ci("data-v-8b2e4df1"),t=t(),ui(),t),by={key:0,class:"obj-props"},wy={key:0,class:"form-group"},yy=Vt(()=>N("label",null,"文字內容",-1)),Sy=["value"],My={key:1,class:"form-row"},Ey={class:"form-group"},Ty=Vt(()=>N("label",null,"字型",-1)),Ay=["value"],Cy=ed('<option value="Microsoft JhengHei" data-v-8b2e4df1>微軟正黑體</option><option value="Arial" data-v-8b2e4df1>Arial</option><option value="Times New Roman" data-v-8b2e4df1>Times New Roman</option><option value="Georgia" data-v-8b2e4df1>Georgia</option><option value="Courier New" data-v-8b2e4df1>Courier New</option>',5),Ry=[Cy],Py={class:"form-group"},Ly=Vt(()=>N("label",null,"大小",-1)),Dy=["value"],Iy={key:2,class:"form-group"},Uy=Vt(()=>N("label",null,"樣式",-1)),Ny={class:"toggle-row"},Fy=Vt(()=>N("b",null,"B",-1)),Oy=[Fy],By=Vt(()=>N("i",null,"I",-1)),ky=[By],zy={key:3,class:"form-group"},Vy=Vt(()=>N("label",null,"文字顏色",-1)),Hy={class:"color-row"},Gy=["value"],Wy={class:"color-value"},$y=Vt(()=>N("div",{class:"divider"},null,-1)),Xy={class:"form-group"},qy={class:"slider-row"},Yy=["value"],jy=["value"],Ky={class:"form-group"},Zy=["value"],Jy={class:"form-row"},Qy={class:"form-group"},eS=Vt(()=>N("label",null,"寬度",-1)),tS=["value"],nS={class:"form-group"},iS=Vt(()=>N("label",null,"高度",-1)),sS=["value"],rS={class:"form-row"},oS={class:"form-group"},aS=Vt(()=>N("label",null,"X",-1)),lS=["value"],cS={class:"form-group"},uS=Vt(()=>N("label",null,"Y",-1)),dS=["value"],fS=Vt(()=>N("div",{class:"divider"},null,-1)),hS={class:"form-group"},pS={class:"label-row"},mS=Vt(()=>N("label",null,"亮度",-1)),gS={class:"value-badge"},_S={class:"slider-row"},vS=["value"],xS={class:"form-group"},bS={class:"label-row"},wS=Vt(()=>N("label",null,"對比",-1)),yS={class:"value-badge"},SS={class:"slider-row"},MS=["value"],ES=Vt(()=>N("i",{class:"fas fa-trash-alt"},null,-1)),TS={key:1,class:"no-select"},AS=Vt(()=>N("i",{class:"fas fa-mouse-pointer"},null,-1)),CS=Vt(()=>N("span",null,[ii("點選畫布物件"),N("br"),ii("以編輯屬性")],-1)),RS=[AS,CS],PS={__name:"ObjectProperties",props:{objectType:{type:String,default:null},props:{type:Object,default:()=>({})}},emits:["update","delete"],setup(t,{emit:e}){const n=e;return(i,s)=>t.objectType?(Ye(),et("div",by,[t.objectType==="text"?(Ye(),et("div",wy,[yy,N("textarea",{value:t.props.text,class:"form-control",rows:"3",onInput:s[0]||(s[0]=r=>n("update",{text:r.target.value}))},null,40,Sy)])):It("",!0),t.objectType==="text"?(Ye(),et("div",My,[N("div",Ey,[Ty,N("select",{value:t.props.fontFamily,class:"form-control",onChange:s[1]||(s[1]=r=>n("update",{fontFamily:r.target.value}))},Ry,40,Ay)]),N("div",Py,[Ly,N("input",{value:t.props.fontSize,type:"number",class:"form-control",min:"8",max:"300",onInput:s[2]||(s[2]=r=>n("update",{fontSize:Number(r.target.value)}))},null,40,Dy)])])):It("",!0),t.objectType==="text"?(Ye(),et("div",Iy,[Uy,N("div",Ny,[N("button",{class:Bt(["style-btn",{active:t.props.bold}]),onClick:s[3]||(s[3]=r=>n("update",{bold:!t.props.bold}))},Oy,2),N("button",{class:Bt(["style-btn",{active:t.props.italic}]),onClick:s[4]||(s[4]=r=>n("update",{italic:!t.props.italic}))},ky,2)])])):It("",!0),t.objectType==="text"?(Ye(),et("div",zy,[Vy,N("div",Hy,[N("input",{value:t.props.color,type:"color",class:"color-input",onInput:s[5]||(s[5]=r=>n("update",{color:r.target.value}))},null,40,Gy),N("span",Wy,Cn(t.props.color),1)])])):It("",!0),$y,N("div",Xy,[N("label",null,"旋轉角度："+Cn(t.props.rotation??0)+"°",1),N("div",qy,[N("input",{value:t.props.rotation??0,type:"range",min:"0",max:"360",step:"1",class:"slider",onInput:s[6]||(s[6]=r=>n("update",{rotation:Number(r.target.value)}))},null,40,Yy),N("input",{value:t.props.rotation??0,type:"number",class:"form-control num-input",min:"0",max:"360",onInput:s[7]||(s[7]=r=>n("update",{rotation:Number(r.target.value)}))},null,40,jy)])]),N("div",Ky,[N("label",null,"透明度："+Cn(t.props.opacity)+"%",1),N("input",{value:t.props.opacity,type:"range",min:"0",max:"100",step:"1",class:"slider",onInput:s[8]||(s[8]=r=>n("update",{opacity:Number(r.target.value)/100}))},null,40,Zy)]),N("div",Jy,[N("div",Qy,[eS,N("input",{value:t.props.width,type:"number",class:"form-control",min:"10",onInput:s[9]||(s[9]=r=>n("update",{width:Number(r.target.value)}))},null,40,tS)]),N("div",nS,[iS,N("input",{value:t.props.height,type:"number",class:"form-control",min:"10",onInput:s[10]||(s[10]=r=>n("update",{height:Number(r.target.value)}))},null,40,sS)])]),N("div",rS,[N("div",oS,[aS,N("input",{value:t.props.x,type:"number",class:"form-control",onInput:s[11]||(s[11]=r=>n("update",{x:Number(r.target.value)}))},null,40,lS)]),N("div",cS,[uS,N("input",{value:t.props.y,type:"number",class:"form-control",onInput:s[12]||(s[12]=r=>n("update",{y:Number(r.target.value)}))},null,40,dS)])]),t.objectType==="image"?(Ye(),et(Yt,{key:4},[fS,N("div",hS,[N("div",pS,[mS,N("span",gS,Cn(t.props.brightness??0),1)]),N("div",_S,[N("span",{class:"slider-cap",onClick:s[13]||(s[13]=r=>n("update",{brightness:Math.max(-100,(t.props.brightness??0)-1)}))},"−"),N("input",{value:t.props.brightness??0,type:"range",min:"-100",max:"100",step:"1",class:"slider slider--bipolar",onInput:s[14]||(s[14]=r=>n("update",{brightness:Number(r.target.value)}))},null,40,vS),N("span",{class:"slider-cap",onClick:s[15]||(s[15]=r=>n("update",{brightness:Math.min(100,(t.props.brightness??0)+1)}))},"＋")])]),N("div",xS,[N("div",bS,[wS,N("span",yS,Cn(t.props.contrast??0),1)]),N("div",SS,[N("span",{class:"slider-cap",onClick:s[16]||(s[16]=r=>n("update",{contrast:Math.max(-100,(t.props.contrast??0)-1)}))},"−"),N("input",{value:t.props.contrast??0,type:"range",min:"-100",max:"100",step:"1",class:"slider slider--bipolar",onInput:s[17]||(s[17]=r=>n("update",{contrast:Number(r.target.value)}))},null,40,MS),N("span",{class:"slider-cap",onClick:s[18]||(s[18]=r=>n("update",{contrast:Math.min(100,(t.props.contrast??0)+1)}))},"＋")])])],64)):It("",!0),N("button",{class:"delete-btn btn",onClick:s[19]||(s[19]=r=>n("delete"))},[ES,ii(" 刪除物件 ")])])):(Ye(),et("div",TS,RS))}},LS=Vn(PS,[["__scopeId","data-v-8b2e4df1"]]),zs=t=>(ci("data-v-9681f375"),t=t(),ui(),t),DS={class:"picker"},IS={class:"picker-search"},US=zs(()=>N("i",{class:"fas fa-search"},null,-1)),NS=zs(()=>N("i",{class:"fas fa-times"},null,-1)),FS=[NS],OS={class:"picker-list"},BS=ed('<div class="picker-thumb picker-thumb--icon" data-v-9681f375><i class="fas fa-layer-group" data-v-9681f375></i></div><div class="picker-info" data-v-9681f375><div class="picker-name" data-v-9681f375>純設計稿</div><div class="picker-desc" data-v-9681f375>不套用機台外觀</div></div>',2),kS={key:0,class:"fas fa-check-circle check-icon"},zS=zs(()=>N("div",{class:"picker-divider"},"機台列表",-1)),VS=["onClick"],HS={class:"picker-thumb"},GS=["src","alt"],WS={class:"picker-info"},$S={class:"picker-name"},XS={key:0,class:"fas fa-check-circle check-icon"},qS={key:0,class:"picker-empty"},YS=zs(()=>N("i",{class:"fas fa-search"},null,-1)),jS=zs(()=>N("span",null,"找不到符合的機台",-1)),KS=[YS,jS],ZS={key:0,class:"picker-selected-bar"},JS=zs(()=>N("i",{class:"fas fa-check-circle"},null,-1)),QS=zs(()=>N("i",{class:"fas fa-times"},null,-1)),eM=[QS],tM={__name:"MachinePicker",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,s=Qe(""),r=Ct(()=>Object.values(Is)),o=Ct(()=>{const c=s.value.trim().toLowerCase();return c?r.value.filter(u=>u.name.toLowerCase().includes(c)):r.value}),a=Ct(()=>n.modelValue?n.modelValue==="pure"?{name:"純設計稿"}:Is[n.modelValue]?{name:Is[n.modelValue].name}:null:null),l=c=>{i("update:modelValue",c)};return(c,u)=>(Ye(),et("div",DS,[N("div",IS,[US,lr(N("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f),type:"text",placeholder:"搜尋機台..."},null,512),[[Ma,s.value]]),s.value?(Ye(),et("button",{key:0,class:"clear-btn",onClick:u[1]||(u[1]=f=>s.value="")},FS)):It("",!0)]),N("div",OS,[N("div",{class:Bt(["picker-item",{active:t.modelValue==="pure"}]),onClick:u[2]||(u[2]=f=>l("pure"))},[BS,t.modelValue==="pure"?(Ye(),et("i",kS)):It("",!0)],2),zS,(Ye(!0),et(Yt,null,Vp(o.value,f=>(Ye(),et("div",{key:f.id,class:Bt(["picker-item",{active:t.modelValue===f.id}]),onClick:d=>l(f.id)},[N("div",HS,[N("img",{src:f.thumbnail,alt:f.name,loading:"lazy"},null,8,GS)]),N("div",WS,[N("div",$S,Cn(f.name),1)]),t.modelValue===f.id?(Ye(),et("i",XS)):It("",!0)],10,VS))),128)),o.value.length===0?(Ye(),et("div",qS,KS)):It("",!0)]),st(Rr,{name:"slide-up"},{default:Yn(()=>[a.value?(Ye(),et("div",ZS,[JS,N("span",null,Cn(a.value.name),1),N("button",{class:"unselect-btn",onClick:u[3]||(u[3]=f=>l(null))},eM)])):It("",!0)]),_:1})]))}},nM=Vn(tM,[["__scopeId","data-v-9681f375"]]),ig=t=>(ci("data-v-d1d5157e"),t=t(),ui(),t),iM={class:"sidebar"},sM={class:"sidebar-scroll"},rM={key:0,class:"no-machine-tip"},oM=ig(()=>N("i",{class:"fas fa-arrow-up"},null,-1)),aM=ig(()=>N("span",null,"請先選擇機台以解鎖設計工具",-1)),lM=[oM,aM],cM={__name:"LeftSidebar",props:{sceneBackground:{type:String,default:null},selectedObjectType:{type:String,default:null},selectedProps:{type:Object,default:()=>({})},selectedMachine:{type:String,default:null}},emits:["add-text","upload-image","change-background","update-object","delete-selected","update:selected-machine"],setup(t){const e=t,n=Ct(()=>e.selectedMachine!==null),i=Ct(()=>{var r;return e.selectedMachine?e.selectedMachine==="pure"?"純設計稿":((r=Is[e.selectedMachine])==null?void 0:r.name)??e.selectedMachine:null}),s=Ct(()=>i.value?`選擇機台  ${i.value}`:"選擇機台");return(r,o)=>(Ye(),et("div",iM,[N("div",sM,[st(zr,{title:s.value,icon:"fas fa-box","default-open":!0},{default:Yn(()=>[st(nM,{"model-value":t.selectedMachine,"onUpdate:modelValue":o[0]||(o[0]=a=>r.$emit("update:selected-machine",a))},null,8,["model-value"])]),_:1},8,["title"]),st(Rr,{name:"fade-slide"},{default:Yn(()=>[n.value?It("",!0):(Ye(),et("div",rM,lM))]),_:1}),n.value?(Ye(),et(Yt,{key:0},[st(zr,{title:"調整工具",icon:"fas fa-sliders-h","default-open":!0},{default:Yn(()=>[st(LS,{"object-type":t.selectedObjectType,props:t.selectedProps,onUpdate:o[1]||(o[1]=a=>r.$emit("update-object",a)),onDelete:o[2]||(o[2]=a=>r.$emit("delete-selected"))},null,8,["object-type","props"])]),_:1}),st(zr,{title:"文字工具",icon:"fas fa-font","default-open":!1},{default:Yn(()=>[st($w,{onAddText:o[3]||(o[3]=a=>r.$emit("add-text",a))})]),_:1}),st(zr,{title:"圖片上傳",icon:"fas fa-image","default-open":!1},{default:Yn(()=>[st(Qw,{onUploadImage:o[4]||(o[4]=a=>r.$emit("upload-image",a))})]),_:1}),st(zr,{title:"背景設定",icon:"fas fa-fill-drip","default-open":!1},{default:Yn(()=>[st(xy,{"model-value":t.sceneBackground,onChangeBackground:o[5]||(o[5]=a=>r.$emit("change-background",a))},null,8,["model-value"])]),_:1})],64)):It("",!0)])]))}},uM=Vn(cM,[["__scopeId","data-v-d1d5157e"]]),Sn=t=>(ci("data-v-a0bb864b"),t=t(),ui(),t),dM={class:"p-canvas-container"},fM={class:"canvas-content"},hM={key:0,class:"canvas-toolbar"},pM={class:"toolbar-group"},mM=Sn(()=>N("i",{class:"fas fa-search-plus"},null,-1)),gM=[mM],_M=Sn(()=>N("i",{class:"fas fa-search-minus"},null,-1)),vM=[_M],xM={class:"zoom-display"},bM=Sn(()=>N("i",{class:"fas fa-compress-arrows-alt"},null,-1)),wM=[bM],yM={class:"toolbar-group"},SM=Sn(()=>N("i",{class:"fas fa-eye"},null,-1)),MM=Sn(()=>N("span",{class:"btn-label"},"預覽",-1)),EM=[SM,MM],TM=Sn(()=>N("div",{class:"toolbar-divider"},null,-1)),AM=Sn(()=>N("i",{class:"fas fa-trash-alt"},null,-1)),CM=[AM],RM=Sn(()=>N("i",{class:"fas fa-eraser"},null,-1)),PM=[RM],LM={key:0,class:"canvas-empty-state"},DM=Sn(()=>N("div",{class:"empty-state-content"},[N("i",{class:"fas fa-box-open"}),N("h3",null,"請先選擇機台"),N("p",null,"從左側選擇一款機台，即可開始設計")],-1)),IM=[DM],UM={key:1,class:"canvas-centering"},NM=["src"],FM={key:2,class:"machine-placeholder"},OM=Sn(()=>N("i",{class:"fas fa-image"},null,-1)),BM=Sn(()=>N("span",null,"機台圖載入中...",-1)),kM=[OM,BM],zM={key:3,class:"machine-error"},VM=Sn(()=>N("i",{class:"fas fa-exclamation-triangle"},null,-1)),HM=Sn(()=>N("span",null,"機台圖無法載入",-1)),GM=[VM,HM],Go=10,Xf=20,qf=300,Yf=100,jf=80,Kf=.25,Vr=800,Hr=600,Gl=250,WM={__name:"CanvasView",props:{zoomLevel:{type:Number,default:null},selectedMachine:{type:String,default:null},sceneBackground:{type:String,default:null},selectedObjectType:{type:String,default:null}},emits:["canvas-ready","zoom-in","zoom-out","fit-screen","reset-view","clear-canvas","delete-selected","open-preview","update:zoom-level"],setup(t,{expose:e,emit:n}){const i=t,s=n,r=Qe(null),o=Qe(null),a=Qe(null),l=Ct(()=>i.selectedMachine!==null&&i.selectedMachine!==void 0),c=Ct(()=>!i.selectedMachine||i.selectedMachine==="pure"?null:Is[i.selectedMachine]??null),u=Ct(()=>({width:`${Vr}px`,height:`${Hr}px`})),f=Math.round(Gl*52/48),d={left:Math.round((Vr-Gl)/2),top:Math.round((Hr-f)/2),width:Gl,height:f},h=Ct(()=>{var H;return((H=c.value)==null?void 0:H.printArea)??d}),_=Ct(()=>({left:`${h.value.left}px`,top:`${h.value.top}px`,width:`${h.value.width}px`,height:`${h.value.height}px`})),b=Qe(Yf),m=Ct({get:()=>i.zoomLevel??b.value,set:H=>{const oe=Math.min(qf,Math.max(Xf,Math.round(H)));b.value=oe,s("update:zoom-level",oe)}}),p=Ct(()=>m.value/100),E=Ct(()=>({width:`${Vr}px`,height:`${Hr}px`,transform:`scale(${p.value})`,transformOrigin:"center center",willChange:"transform",transition:"transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)"})),A=()=>{m.value=m.value+Go,s("zoom-in")},S=()=>{m.value=m.value-Go,s("zoom-out")},P=()=>{m.value=Yf,s("reset-view")},R=()=>{if(!r.value)return;const H=r.value.clientWidth-jf*2,oe=r.value.clientHeight-jf*2,me=Math.min(H/Vr,oe/Hr,1);m.value=Math.round(me*100),s("fit-screen")},I=H=>{!H.ctrlKey&&!H.metaKey||(H.preventDefault(),m.value=m.value+(H.deltaY>0?-Go:Go))};bi(()=>i.zoomLevel,H=>{H!=null&&(b.value=Math.min(qf,Math.max(Xf,H)))});const v=Qe(0),T=Qe(0);let j=null;const L=Ct(()=>!!Za.find(H=>H.id===i.sceneBackground)),U=Ct(()=>{if(!L.value)return{};const H=Za.find(Ve=>Ve.id===i.sceneBackground),oe=v.value||Vr,me=T.value||Hr,Me=Math.ceil(oe/Kf),be=Math.ceil(me/Kf);return{position:"absolute",width:`${Me}px`,height:`${be}px`,top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundImage:`url(${H.url})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"0",pointerEvents:"none",transition:"background-image 0.25s ease"}}),k=Ct(()=>{var H;return((H=c.value)==null?void 0:H.baseImage)??null}),ne=Qe(!1),X=Qe(!1);bi(k,H=>{if(ne.value=!1,X.value=!1,!H)return;const oe=new Image;oe.onload=()=>{ne.value=!0},oe.onerror=()=>{X.value=!0},oe.src=H},{immediate:!0});const G=async()=>{const{isConfirmed:H}=await Aw("清空畫布","確定要清空畫布嗎？所有內容將被刪除。","確定清空");H&&s("clear-canvas")},F=H=>{var me;const oe=(me=document.activeElement)==null?void 0:me.tagName;["INPUT","TEXTAREA","SELECT"].includes(oe)||((H.ctrlKey||H.metaKey)&&(H.key==="+"||H.key==="=")&&(H.preventDefault(),A()),(H.ctrlKey||H.metaKey)&&H.key==="-"&&(H.preventDefault(),S()),(H.ctrlKey||H.metaKey)&&H.key==="0"&&(H.preventDefault(),P()))};return wo(()=>{var H;window.addEventListener("keydown",F),r.value&&(v.value=r.value.clientWidth,T.value=r.value.clientHeight,j=new ResizeObserver(oe=>{for(const me of oe)v.value=me.contentRect.width,T.value=me.contentRect.height}),j.observe(r.value)),l.value&&(s("canvas-ready",{wrapperEl:r.value,printArea:h.value,perspective:((H=c.value)==null?void 0:H.perspective)??null}),setTimeout(R,150))}),hl(()=>{window.removeEventListener("keydown",F),j==null||j.disconnect()}),bi(h,async H=>{var oe;await Ua(),s("canvas-ready",{wrapperEl:r.value,printArea:H,perspective:((oe=c.value)==null?void 0:oe.perspective)??null})}),bi(()=>i.selectedMachine,async()=>{await Ua(),setTimeout(R,200)}),e({wrapperRef:r,canvasRef:a,zoomIn:A,zoomOut:S,resetZoom:P,fitScreen:R}),(H,oe)=>(Ye(),et("div",dM,[N("div",fM,[l.value?(Ye(),et("div",hM,[N("div",pM,[N("button",{class:"toolbar-btn",title:"放大 (Ctrl +)",onClick:A},gM),N("button",{class:"toolbar-btn",title:"縮小 (Ctrl -)",onClick:S},vM),N("div",xM,Cn(m.value)+"%",1),N("button",{class:"toolbar-btn",title:"重設縮放 (100%)",onClick:P},wM)]),N("div",yM,[N("button",{class:"toolbar-btn",title:"預覽",onClick:oe[0]||(oe[0]=me=>H.$emit("open-preview"))},EM),TM,N("button",{class:"toolbar-btn toolbar-btn--danger",title:"刪除選取 (Delete)",onClick:oe[1]||(oe[1]=me=>H.$emit("delete-selected"))},CM),N("button",{class:"toolbar-btn toolbar-btn--danger",title:"清空畫布",onClick:G},PM)])])):It("",!0),N("div",{ref_key:"wrapperRef",ref:r,class:Bt(["canvas-wrapper",{"canvas-wrapper--no-machine":!l.value}]),onWheel:rm(I,["prevent"])},[l.value?(Ye(),et("div",UM,[N("div",{ref_key:"zoomTargetRef",ref:o,class:"zoom-target",style:Xi(E.value)},[N("div",{class:"machine-stage",style:Xi(u.value)},[L.value?(Ye(),et("div",{key:0,class:"scene-bg-layer",style:Xi(U.value)},null,4)):It("",!0),ne.value&&k.value?(Ye(),et("img",{key:1,class:"machine-base-img",src:k.value,alt:"機台底圖",draggable:"false"},null,8,NM)):!ne.value&&k.value?(Ye(),et("div",FM,kM)):X.value?(Ye(),et("div",zM,GM)):It("",!0),N("div",{class:"canvas-print-area",style:Xi(_.value)},[N("canvas",{id:"main-canvas",ref_key:"canvasRef",ref:a,class:"design-canvas"},null,512)],4),N("div",{class:"print-area-border",style:Xi(_.value)},null,4)],4)],4)])):(Ye(),et("div",LM,IM))],34)])]))}},$M=Vn(WM,[["__scopeId","data-v-a0bb864b"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="183",gr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XM=0,Zf=1,qM=2,Ea=1,sg=2,Jr=3,os=0,dn=1,xi=2,Mi=0,_r=1,Jf=2,Qf=3,eh=4,YM=5,Ms=100,jM=101,KM=102,ZM=103,JM=104,QM=200,eE=201,tE=202,nE=203,Wc=204,$c=205,iE=206,sE=207,rE=208,oE=209,aE=210,lE=211,cE=212,uE=213,dE=214,Xc=0,qc=1,Yc=2,Sr=3,jc=4,Kc=5,Zc=6,Jc=7,rg=0,fE=1,hE=2,ei=0,og=1,ag=2,lg=3,cg=4,ug=5,dg=6,fg=7,hg=300,Ns=301,Mr=302,Wl=303,$l=304,Ml=306,Qc=1e3,wi=1001,eu=1002,Gt=1003,pE=1004,Wo=1005,Zt=1006,Xl=1007,As=1008,vn=1009,pg=1010,mg=1011,po=1012,vd=1013,ri=1014,Jn=1015,Ti=1016,xd=1017,bd=1018,mo=1020,gg=35902,_g=35899,vg=1021,xg=1022,zn=1023,Ai=1026,Cs=1027,bg=1028,wd=1029,Er=1030,yd=1031,Sd=1033,Ta=33776,Aa=33777,Ca=33778,Ra=33779,tu=35840,nu=35841,iu=35842,su=35843,ru=36196,ou=37492,au=37496,lu=37488,cu=37489,uu=37490,du=37491,fu=37808,hu=37809,pu=37810,mu=37811,gu=37812,_u=37813,vu=37814,xu=37815,bu=37816,wu=37817,yu=37818,Su=37819,Mu=37820,Eu=37821,Tu=36492,Au=36494,Cu=36495,Ru=36283,Pu=36284,Lu=36285,Du=36286,mE=3200,wg=0,gE=1,qi="",An="srgb",Tr="srgb-linear",Ja="linear",pt="srgb",$s=7680,th=519,_E=512,vE=513,xE=514,Md=515,bE=516,wE=517,Ed=518,yE=519,nh=35044,ih="300 es",Qn=2e3,go=2001;function SE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ME(){const t=_o("canvas");return t.style.display="block",t}const sh={};function rh(...t){const e="THREE."+t.shift();console.log(e,...t)}function yg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=yg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function lt(...t){t=yg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Qa(...t){const e=t.join(" ");e in sh||(sh[e]=!0,Ge(...t))}function EE(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const TE={[Xc]:qc,[Yc]:Zc,[jc]:Jc,[Sr]:Kc,[qc]:Xc,[Zc]:Yc,[Jc]:jc,[Kc]:Sr};class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,Iu=180/Math.PI;function Po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function AE(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function Gr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const CE={DEG2RAD:Pa};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],_=r[o+2],b=r[o+3];if(f!==b||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*b;m<0&&(d=-d,h=-h,_=-_,b=-b,m=-m);let p=1-a;if(m<.9995){const E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A,l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+b*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+b*a;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*h-c*d,e[n+1]=l*_+u*d+c*f-a*h,e[n+2]=c*_+u*h+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(oh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new $,oh=new as;class qe{constructor(e,n,i,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],b=s[0],m=s[3],p=s[6],E=s[1],A=s[4],S=s[7],P=s[2],R=s[5],I=s[8];return r[0]=o*b+a*E+l*P,r[3]=o*m+a*A+l*R,r[6]=o*p+a*S+l*I,r[1]=c*b+u*E+f*P,r[4]=c*m+u*A+f*R,r[7]=c*p+u*S+f*I,r[2]=d*b+h*E+_*P,r[5]=d*m+h*A+_*R,r[8]=d*p+h*S+_*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,_=n*f+i*d+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=f*b,e[1]=(s*c-u*i)*b,e[2]=(a*i-s*o)*b,e[3]=d*b,e[4]=(u*n-s*l)*b,e[5]=(s*r-a*n)*b,e[6]=h*b,e[7]=(i*l-c*n)*b,e[8]=(o*n-i*r)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(jl.makeScale(e,n)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,n){return this.premultiply(jl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new qe,ah=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const t={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Tr]:{primaries:e,whitePoint:i,transfer:Ja,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const rt=RE();function Ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xs;class PE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=_o("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_o("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ei(n[i]/255)*255):n[i]=Ei(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LE=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Kl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?PE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let DE=0;const Zl=new $;class Jt extends Vs{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=wi,s=wi,r=Zt,o=As,a=zn,l=vn,c=Jt.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Po(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=hg;Jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(c+1)/2,S=(h+1)/2,P=(p+1)/2,R=(u+d)/4,I=(f+b)/4,v=(_+m)/4;return A>S&&A>P?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=I/i):S>P?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=v/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=I/r,s=v/r),this.set(i,s,r,n),this}let E=Math.sqrt((m-_)*(m-_)+(f-b)*(f-b)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-b)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IE extends Vs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new Jt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Td(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends IE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sg extends Jt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UE extends Jt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,_,b,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,_,b,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,_,b,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,b=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+_*c,n[5]=d-b*c,n[9]=-a*l,n[2]=b-d*c,n[6]=_+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,b=c*f;n[0]=d+b*a,n[4]=_*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-_,n[6]=b+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,b=c*f;n[0]=d-b*a,n[4]=-o*f,n[8]=_+h*a,n[1]=h+_*a,n[5]=o*u,n[9]=b-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,b=a*f;n[0]=l*u,n[4]=_*c-h,n[8]=d*c+b,n[1]=l*f,n[5]=b*c+d,n[9]=h*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,b=a*c;n[0]=l*u,n[4]=b-d*f,n[8]=_*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+_,n[10]=d-b*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,b=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+b,n[5]=o*u,n[9]=h*f-_,n[2]=_*f-h,n[6]=a*u,n[10]=b*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NE,e,FE)}lookAt(e,n,i){const s=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ni.crossVectors(i,mn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ni.crossVectors(i,mn)),Ni.normalize(),$o.crossVectors(mn,Ni),s[0]=Ni.x,s[4]=$o.x,s[8]=mn.x,s[1]=Ni.y,s[5]=$o.y,s[9]=mn.y,s[2]=Ni.z,s[6]=$o.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],b=i[6],m=i[10],p=i[14],E=i[3],A=i[7],S=i[11],P=i[15],R=s[0],I=s[4],v=s[8],T=s[12],j=s[1],L=s[5],U=s[9],k=s[13],ne=s[2],X=s[6],G=s[10],F=s[14],H=s[3],oe=s[7],me=s[11],Me=s[15];return r[0]=o*R+a*j+l*ne+c*H,r[4]=o*I+a*L+l*X+c*oe,r[8]=o*v+a*U+l*G+c*me,r[12]=o*T+a*k+l*F+c*Me,r[1]=u*R+f*j+d*ne+h*H,r[5]=u*I+f*L+d*X+h*oe,r[9]=u*v+f*U+d*G+h*me,r[13]=u*T+f*k+d*F+h*Me,r[2]=_*R+b*j+m*ne+p*H,r[6]=_*I+b*L+m*X+p*oe,r[10]=_*v+b*U+m*G+p*me,r[14]=_*T+b*k+m*F+p*Me,r[3]=E*R+A*j+S*ne+P*H,r[7]=E*I+A*L+S*X+P*oe,r[11]=E*v+A*U+S*G+P*me,r[15]=E*T+A*k+S*F+P*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],b=e[7],m=e[11],p=e[15],E=l*h-c*d,A=a*h-c*f,S=a*d-l*f,P=o*h-c*u,R=o*d-l*u,I=o*f-a*u;return n*(b*E-m*A+p*S)-i*(_*E-m*P+p*R)+s*(_*A-b*P+p*I)-r*(_*S-b*R+m*I)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],b=e[13],m=e[14],p=e[15],E=n*a-i*o,A=n*l-s*o,S=n*c-r*o,P=i*l-s*a,R=i*c-r*a,I=s*c-r*l,v=u*b-f*_,T=u*m-d*_,j=u*p-h*_,L=f*m-d*b,U=f*p-h*b,k=d*p-h*m,ne=E*k-A*U+S*L+P*j-R*T+I*v;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ne;return e[0]=(a*k-l*U+c*L)*X,e[1]=(s*U-i*k-r*L)*X,e[2]=(b*I-m*R+p*P)*X,e[3]=(d*R-f*I-h*P)*X,e[4]=(l*j-o*k-c*T)*X,e[5]=(n*k-s*j+r*T)*X,e[6]=(m*S-_*I-p*A)*X,e[7]=(u*I-d*S+h*A)*X,e[8]=(o*U-a*j+c*v)*X,e[9]=(i*j-n*U-r*v)*X,e[10]=(_*R-b*S+p*E)*X,e[11]=(f*S-u*R-h*E)*X,e[12]=(a*T-o*L-l*v)*X,e[13]=(n*L-i*T+s*v)*X,e[14]=(b*A-_*P-m*E)*X,e[15]=(u*P-f*A+d*E)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,_=r*f,b=o*u,m=o*f,p=a*f,E=l*c,A=l*u,S=l*f,P=i.x,R=i.y,I=i.z;return s[0]=(1-(b+p))*P,s[1]=(h+S)*P,s[2]=(_-A)*P,s[3]=0,s[4]=(h-S)*R,s[5]=(1-(d+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(_+A)*I,s[9]=(m-E)*I,s[10]=(1-(d+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=qs.set(s[0],s[1],s[2]).length();const a=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const c=1/o,u=1/a,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let _,b;if(l)_=r/(o-r),b=o*r/(o-r);else if(a===Qn)_=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===go)_=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let _,b;if(l)_=1/(o-r),b=o/(o-r);else if(a===Qn)_=-2/(o-r),b=-(o+r)/(o-r);else if(a===go)_=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qs=new $,Un=new St,NE=new $(0,0,0),FE=new $(1,1,1),Ni=new $,$o=new $,mn=new $,ch=new St,uh=new as;class oi{constructor(e=0,n=0,i=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uh.setFromEuler(this),this.setFromQuaternion(uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OE=0;const dh=new $,Ys=new as,hi=new St,Xo=new $,Wr=new $,BE=new $,kE=new as,fh=new $(1,0,0),hh=new $(0,1,0),ph=new $(0,0,1),mh={type:"added"},zE={type:"removed"},js={type:"childadded",child:null},Jl={type:"childremoved",child:null};class Wt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new $,n=new oi,i=new as,s=new $(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(ph,e)}translateOnAxis(e,n){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Wr,Xo,this.up):hi.lookAt(Xo,Wr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(hi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mh),js.child=e,this.dispatchEvent(js),js.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zE),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mh),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,kE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new $(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qo extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=n.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function ec(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=rt.workingColorSpace){if(e=AE(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ec(o,r,e+1/3),this.g=ec(o,r,e),this.b=ec(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,n=An){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=Eg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return rt.workingToColorSpace(qt.copy(this),e),Math.round(tt(qt.r*255,0,255))*65536+Math.round(tt(qt.g*255,0,255))*256+Math.round(tt(qt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(qt.copy(this),n);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=An){rt.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,s=qt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Yo);const i=ql(Fi.h,Yo.h,n),s=ql(Fi.s,Yo.s,n),r=ql(Fi.l,Yo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new nt;nt.NAMES=Eg;class Ad{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=n,this.far=i}clone(){return new Ad(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class HE extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Nn=new $,pi=new $,tc=new $,mi=new $,Ks=new $,Zs=new $,gh=new $,nc=new $,ic=new $,sc=new $,rc=new Et,oc=new Et,ac=new Et;class Bn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Nn.subVectors(e,n),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Nn.subVectors(s,n),pi.subVectors(i,n),tc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(pi),l=Nn.dot(tc),c=pi.dot(pi),u=pi.dot(tc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-h-_,_,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(e,n,i,s){return Nn.subVectors(i,n),pi.subVectors(e,n),Nn.cross(pi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Nn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ks.subVectors(s,i),Zs.subVectors(r,i),nc.subVectors(e,i);const l=Ks.dot(nc),c=Zs.dot(nc);if(l<=0&&c<=0)return n.copy(i);ic.subVectors(e,s);const u=Ks.dot(ic),f=Zs.dot(ic);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ks,o);sc.subVectors(e,r);const h=Ks.dot(sc),_=Zs.dot(sc);if(_>=0&&h<=_)return n.copy(r);const b=h*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Zs,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return gh.subVectors(r,s),a=(f-u)/(f-u+(h-_)),n.copy(s).addScaledVector(gh,a);const p=1/(m+b+d);return o=b*p,a=d*p,n.copy(i).addScaledVector(Ks,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Ko.subVectors(this.max,$r),Js.subVectors(e.a,$r),Qs.subVectors(e.b,$r),er.subVectors(e.c,$r),Oi.subVectors(Qs,Js),Bi.subVectors(er,Qs),ms.subVectors(Js,er);let n=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ms.z,ms.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ms.z,0,-ms.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ms.y,ms.x,0];return!lc(n,Js,Qs,er,Ko)||(n=[1,0,0,0,1,0,0,0,1],!lc(n,Js,Qs,er,Ko))?!1:(Zo.crossVectors(Oi,Bi),n=[Zo.x,Zo.y,Zo.z],lc(n,Js,Qs,er,Ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new $,new $,new $,new $,new $,new $,new $,new $],Fn=new $,jo=new Lo,Js=new $,Qs=new $,er=new $,Oi=new $,Bi=new $,ms=new $,$r=new $,Ko=new $,Zo=new $,gs=new $;function lc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){gs.fromArray(t,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=e.dot(gs),c=n.dot(gs),u=i.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lt=new $,Jo=new Xe;let GE=0;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gr(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gr(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gr(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nh&&(e.usage=this.usage),e}}class Tg extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ag extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xn extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const WE=new Lo,Xr=new $,cc=new $;class El{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):WE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const n=Xr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(cc)),this.expandByPoint(Xr.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $E=0;const En=new St,uc=new Wt,tr=new $,gn=new Lo,qr=new Lo,Ot=new $;class Hn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SE(e)?Ag:Tg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(gn.min,qr.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,qr.max),gn.expandByPoint(Ot)):(gn.expandByPoint(qr.min),gn.expandByPoint(qr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),Ot.add(tr)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new $,l[v]=new $;const c=new $,u=new $,f=new $,d=new Xe,h=new Xe,_=new Xe,b=new $,m=new $;function p(v,T,j){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,j),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,j),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(L),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),a[v].add(b),a[T].add(b),a[j].add(b),l[v].add(m),l[T].add(m),l[j].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,T=E.length;v<T;++v){const j=E[v],L=j.start,U=j.count;for(let k=L,ne=L+U;k<ne;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new $,S=new $,P=new $,R=new $;function I(v){P.fromBufferAttribute(s,v),R.copy(P);const T=a[v];A.copy(T),A.sub(P.multiplyScalar(P.dot(T))).normalize(),S.crossVectors(R,T);const L=S.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,L)}for(let v=0,T=E.length;v<T;++v){const j=E[v],L=j.start,U=j.count;for(let k=L,ne=L+U;k<ne;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,b),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?h=l[b]*a.data.stride+a.offset:h=l[b]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new ni(d,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let XE=0;class Nr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=_r,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=$c,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new $,dc=new $,Qo=new $,ki=new $,fc=new $,ea=new $,hc=new $;class Cd{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){dc.copy(e).add(n).multiplyScalar(.5),Qo.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(dc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Qo),a=ki.dot(this.direction),l=-ki.dot(Qo),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const b=1/u;f*=b,d*=b,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(Qo,d),h}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,s,r){fc.subVectors(n,e),ea.subVectors(i,e),hc.crossVectors(fc,ea);let o=this.direction.dot(hc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(ki,ea));if(l<0)return null;const c=a*this.direction.dot(fc.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(hc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cg extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _h=new St,_s=new Cd,ta=new El,vh=new $,na=new $,ia=new $,sa=new $,pc=new $,ra=new $,xh=new $,oa=new $;class ai extends Wt{constructor(e=new Hn,n=new Cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(pc.fromBufferAttribute(f,e),o?ra.addScaledVector(pc,u):ra.addScaledVector(pc.sub(n),u))}n.add(ra)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(ta.containsPoint(_s.origin)===!1&&(_s.intersectSphere(ta,vh)===null||_s.origin.distanceToSquared(vh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),_s.copy(e.ray).applyMatrix4(_h),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_s)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=d.length;_<b;_++){const m=d[_],p=o[m.materialIndex],E=Math.max(m.start,h.start),A=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=E,P=A;S<P;S+=3){const R=a.getX(S),I=a.getX(S+1),v=a.getX(S+2);s=aa(this,p,e,i,c,u,f,R,I,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,h.start),b=Math.min(a.count,h.start+h.count);for(let m=_,p=b;m<p;m+=3){const E=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=aa(this,o,e,i,c,u,f,E,A,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=d.length;_<b;_++){const m=d[_],p=o[m.materialIndex],E=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=E,P=A;S<P;S+=3){const R=S,I=S+1,v=S+2;s=aa(this,p,e,i,c,u,f,R,I,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=_,p=b;m<p;m+=3){const E=m,A=m+1,S=m+2;s=aa(this,o,e,i,c,u,f,E,A,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function qE(t,e,n,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===os,a),l===null)return null;oa.copy(a),oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oa);return c<n.near||c>n.far?null:{distance:c,point:oa.clone(),object:t}}function aa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,na),t.getVertexPosition(l,ia),t.getVertexPosition(c,sa);const u=qE(t,e,n,i,na,ia,sa,xh);if(u){const f=new $;Bn.getBarycoord(xh,na,ia,sa,f),s&&(u.uv=Bn.getInterpolatedAttribute(s,a,l,c,f,new Xe)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,a,l,c,f,new Xe)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};Bn.getNormal(na,ia,sa,d.normal),u.face=d,u.barycoord=f}return u}class YE extends Jt{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Gt,u=Gt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mc=new $,jE=new $,KE=new qe;class $i{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=mc.subVectors(i,n).cross(jE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KE.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new El,ZE=new Xe(.5,.5),la=new $;class Rd{constructor(e=new $i,n=new $i,i=new $i,s=new $i,r=new $i,o=new $i){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],_=r[8],b=r[9],m=r[10],p=r[11],E=r[12],A=r[13],S=r[14],P=r[15];if(s[0].setComponents(c-o,h-u,p-_,P-E).normalize(),s[1].setComponents(c+o,h+u,p+_,P+E).normalize(),s[2].setComponents(c+a,h+f,p+b,P+A).normalize(),s[3].setComponents(c-a,h-f,p-b,P-A).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,p-m,P-S).normalize();else if(s[4].setComponents(c-l,h-d,p-m,P-S).normalize(),n===Qn)s[5].setComponents(c+l,h+d,p+m,P+S).normalize();else if(n===go)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const n=ZE.distanceTo(e.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rg extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new $,tl=new $,bh=new St,Yr=new Cd,ca=new El,gc=new $,wh=new $;class JE extends Wt{constructor(e=new Hn,n=new Rg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)el.fromBufferAttribute(n,s-1),tl.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=el.distanceTo(tl);e.setAttribute("lineDistance",new xn(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;bh.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let b=h,m=_-1;b<m;b+=c){const p=u.getX(b),E=u.getX(b+1),A=ua(this,e,Yr,l,p,E,b);A&&n.push(A)}if(this.isLineLoop){const b=u.getX(_-1),m=u.getX(h),p=ua(this,e,Yr,l,b,m,_-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let b=h,m=_-1;b<m;b+=c){const p=ua(this,e,Yr,l,b,b+1,b);p&&n.push(p)}if(this.isLineLoop){const b=ua(this,e,Yr,l,_-1,h,_-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(el.fromBufferAttribute(a,s),tl.fromBufferAttribute(a,r),n.distanceSqToSegment(el,tl,gc,wh)>i)return;gc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(gc);if(!(c<e.near||c>e.far))return{distance:c,point:wh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const yh=new $,Sh=new $;class QE extends JE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)yh.fromBufferAttribute(n,s),Sh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yh.distanceTo(Sh);e.setAttribute("lineDistance",new xn(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pg extends Jt{constructor(e=[],n=Ns,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vo extends Jt{constructor(e,n,i=ri,s,r,o,a=Gt,l=Gt,c,u=Ai,f=1){if(u!==Ai&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Td(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class eT extends vo{constructor(e,n=ri,i=Ns,s,r,o=Gt,a=Gt,l,c=Ai){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lg extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fr extends Hn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function _(b,m,p,E,A,S,P,R,I,v,T){const j=S/I,L=P/v,U=S/2,k=P/2,ne=R/2,X=I+1,G=v+1;let F=0,H=0;const oe=new $;for(let me=0;me<G;me++){const Me=me*L-k;for(let be=0;be<X;be++){const Ve=be*j-U;oe[b]=Ve*E,oe[m]=Me*A,oe[p]=ne,c.push(oe.x,oe.y,oe.z),oe[b]=0,oe[m]=0,oe[p]=R>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(be/I),f.push(1-me/v),F+=1}}for(let me=0;me<v;me++)for(let Me=0;Me<I;Me++){const be=d+Me+X*me,Ve=d+Me+X*(me+1),ft=d+(Me+1)+X*(me+1),ot=d+(Me+1)+X*me;l.push(be,Ve,ot),l.push(Ve,ft,ot),H+=6}a.addGroup(h,H,T),h+=H,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tl extends Hn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],_=[],b=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let A=0;A<c;A++){const S=A*f-r;_.push(S,-E,0),b.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const A=E+c*p,S=E+c*(p+1),P=E+1+c*(p+1),R=E+1+c*p;h.push(A,S,R),h.push(S,P,R)}this.setIndex(h),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ar(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Ar(t[n]);for(const s in i)e[s]=i[s]}return e}function tT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const nT={clone:Ar,merge:nn};var iT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iT,this.fragmentShader=sT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=tT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class rT extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mh extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oT extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aT extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _c={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Eh(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Eh(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Eh(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lT{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cT=new lT;class Pd{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pd.DEFAULT_MATERIAL_NAME="__DEFAULT";const nr=new WeakMap;class uT extends Pd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_c.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let f=nr.get(o);f===void 0&&(f=[],nr.set(o,f)),f.push({onLoad:n,onError:s})}return o}const a=_o("img");function l(){u(),n&&n(this);const f=nr.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}nr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),_c.remove(`image:${e}`);const d=nr.get(this)||[];for(let h=0;h<d.length;h++){const _=d[h];_.onError&&_.onError(f)}nr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_c.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class dT extends Pd{constructor(e){super(e)}load(e,n,i,s){const r=new Jt,o=new uT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Ld extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const vc=new St,Th=new $,Ah=new $;class Ig{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Th.setFromMatrixPosition(e.matrixWorld),n.position.copy(Th),Ah.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ah),n.updateMatrixWorld(),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===go||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const da=new $,fa=new as,$n=new $;class Ug extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,fa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,$n.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(da,fa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new $,Ch=new Xe,Rh=new Xe;class _n extends Ug{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Iu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Ch,Rh),n.subVectors(Rh,Ch)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fT extends Ig{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class hT extends Ld{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new fT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Dd extends Ug{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pT extends Ig{constructor(){super(new Dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ph extends Ld{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new pT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class mT extends Ld{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ir=-90,sr=1;class gT extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ir,sr,e,n);s.layers=this.layers,this.add(s);const r=new _n(ir,sr,e,n);r.layers=this.layers,this.add(r);const o=new _n(ir,sr,e,n);o.layers=this.layers,this.add(o);const a=new _n(ir,sr,e,n);a.layers=this.layers,this.add(a);const l=new _n(ir,sr,e,n);l.layers=this.layers,this.add(l);const c=new _n(ir,sr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _T extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vT extends QE{constructor(e=10,n=10,i=4473924,s=8947848){i=new nt(i),s=new nt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const b=d===r?i:s;b.toArray(c,h),h+=3,b.toArray(c,h),h+=3,b.toArray(c,h),h+=3,b.toArray(c,h),h+=3}const u=new Hn;u.setAttribute("position",new xn(l,3)),u.setAttribute("color",new xn(c,3));const f=new Rg({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xT extends Vs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ge("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dh(t,e,n,i){const s=bT(i);switch(n){case vg:return t*e;case bg:return t*e/s.components*s.byteLength;case wd:return t*e/s.components*s.byteLength;case Er:return t*e*2/s.components*s.byteLength;case yd:return t*e*2/s.components*s.byteLength;case xg:return t*e*3/s.components*s.byteLength;case zn:return t*e*4/s.components*s.byteLength;case Sd:return t*e*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nu:case su:return Math.max(t,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(t,8)*Math.max(e,8)/2;case ru:case ou:case lu:case cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case au:case uu:case du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case pu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tu:case Au:case Cu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ru:case Pu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lu:case Du:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bT(t){switch(t){case vn:case pg:return{byteLength:1,components:1};case po:case mg:case Ti:return{byteLength:2,components:1};case xd:case bd:return{byteLength:2,components:4};case ri:case vd:case Jn:return{byteLength:4,components:1};case gg:case _g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ng(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function wT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],b=f[h];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++d,f[d]=b)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const b=f[h];t.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
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
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CT=`#ifdef USE_AOMAP
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
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PT=`#ifdef USE_BATCHING
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
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NT=`#ifdef USE_IRIDESCENCE
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
#endif`,FT=`#ifdef USE_BUMPMAP
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
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$T=`#define PI 3.141592653589793
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
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qT=`vec3 transformedNormal = objectNormal;
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
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eA=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
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
#endif`,iA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cA=`#ifdef USE_GRADIENTMAP
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
}`,uA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hA=`uniform bool receiveShadow;
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
#endif`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xA=`PhysicalMaterial material;
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
#endif`,bA=`uniform sampler2D dfgLUT;
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
}`,wA=`
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
#endif`,yA=`#if defined( RE_IndirectDiffuse )
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LA=`#if defined( USE_POINTS_UV )
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
#endif`,DA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`#ifdef USE_MORPHTARGETS
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
#endif`,BA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WA=`#ifdef USE_NORMALMAP
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
#endif`,$A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,N1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,B1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,V1=`#define NORMAL
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
}`,H1=`#define NORMAL
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
}`,G1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,$1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,j1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,J1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,eC=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:yT,alphahash_pars_fragment:ST,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:AT,aomap_fragment:CT,aomap_pars_fragment:RT,batching_pars_vertex:PT,batching_vertex:LT,begin_vertex:DT,beginnormal_vertex:IT,bsdfs:UT,iridescence_fragment:NT,bumpmap_pars_fragment:FT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:kT,clipping_planes_vertex:zT,color_fragment:VT,color_pars_fragment:HT,color_pars_vertex:GT,color_vertex:WT,common:$T,cube_uv_reflection_fragment:XT,defaultnormal_vertex:qT,displacementmap_pars_vertex:YT,displacementmap_vertex:jT,emissivemap_fragment:KT,emissivemap_pars_fragment:ZT,colorspace_fragment:JT,colorspace_pars_fragment:QT,envmap_fragment:eA,envmap_common_pars_fragment:tA,envmap_pars_fragment:nA,envmap_pars_vertex:iA,envmap_physical_pars_fragment:pA,envmap_vertex:sA,fog_vertex:rA,fog_pars_vertex:oA,fog_fragment:aA,fog_pars_fragment:lA,gradientmap_pars_fragment:cA,lightmap_pars_fragment:uA,lights_lambert_fragment:dA,lights_lambert_pars_fragment:fA,lights_pars_begin:hA,lights_toon_fragment:mA,lights_toon_pars_fragment:gA,lights_phong_fragment:_A,lights_phong_pars_fragment:vA,lights_physical_fragment:xA,lights_physical_pars_fragment:bA,lights_fragment_begin:wA,lights_fragment_maps:yA,lights_fragment_end:SA,logdepthbuf_fragment:MA,logdepthbuf_pars_fragment:EA,logdepthbuf_pars_vertex:TA,logdepthbuf_vertex:AA,map_fragment:CA,map_pars_fragment:RA,map_particle_fragment:PA,map_particle_pars_fragment:LA,metalnessmap_fragment:DA,metalnessmap_pars_fragment:IA,morphinstance_vertex:UA,morphcolor_vertex:NA,morphnormal_vertex:FA,morphtarget_pars_vertex:OA,morphtarget_vertex:BA,normal_fragment_begin:kA,normal_fragment_maps:zA,normal_pars_fragment:VA,normal_pars_vertex:HA,normal_vertex:GA,normalmap_pars_fragment:WA,clearcoat_normal_fragment_begin:$A,clearcoat_normal_fragment_maps:XA,clearcoat_pars_fragment:qA,iridescence_pars_fragment:YA,opaque_fragment:jA,packing:KA,premultiplied_alpha_fragment:ZA,project_vertex:JA,dithering_fragment:QA,dithering_pars_fragment:e1,roughnessmap_fragment:t1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:u1,specularmap_fragment:d1,specularmap_pars_fragment:f1,tonemapping_fragment:h1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:_1,uv_pars_vertex:v1,uv_vertex:x1,worldpos_vertex:b1,background_vert:w1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:M1,cube_vert:E1,cube_frag:T1,depth_vert:A1,depth_frag:C1,distance_vert:R1,distance_frag:P1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:I1,linedashed_frag:U1,meshbasic_vert:N1,meshbasic_frag:F1,meshlambert_vert:O1,meshlambert_frag:B1,meshmatcap_vert:k1,meshmatcap_frag:z1,meshnormal_vert:V1,meshnormal_frag:H1,meshphong_vert:G1,meshphong_frag:W1,meshphysical_vert:$1,meshphysical_frag:X1,meshtoon_vert:q1,meshtoon_frag:Y1,points_vert:j1,points_frag:K1,shadow_vert:Z1,shadow_frag:J1,sprite_vert:Q1,sprite_frag:eC},Ee={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Kn={basic:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:nn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:nn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:nn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:nn([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:nn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:nn([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:nn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:nn([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:nn([Ee.common,Ee.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:nn([Ee.lights,Ee.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Kn.physical={uniforms:nn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ha={r:0,b:0,g:0},xs=new oi,tC=new St;function nC(t,e,n,i,s,r){const o=new nt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const S=E.backgroundBlurriness>0;A=e.get(A,S)}return A}function _(E){let A=!1;const S=h(E);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(E,A){const S=h(A);S&&(S.isCubeTexture||S.mapping===Ml)?(c===void 0&&(c=new ai(new Fr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ar(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),xs.copy(A.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tC.makeRotationFromEuler(xs)),c.material.toneMapped=rt.getTransfer(S.colorSpace)!==pt,(u!==S||f!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ai(new Tl(2,2),new li({name:"BackgroundMaterial",uniforms:Ar(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=rt.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(ha,Dg(t)),n.buffers.color.setClear(ha.r,ha.g,ha.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:_,addToRenderList:b,dispose:p}}function iC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(L,U,k,ne,X){let G=!1;const F=f(L,ne,k,U);r!==F&&(r=F,c(r.object)),G=h(L,ne,k,X),G&&_(L,ne,k,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(L,U,k,ne),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function f(L,U,k,ne){const X=ne.wireframe===!0;let G=i[U.id];G===void 0&&(G={},i[U.id]=G);const F=L.isInstancedMesh===!0?L.id:0;let H=G[F];H===void 0&&(H={},G[F]=H);let oe=H[k.id];oe===void 0&&(oe={},H[k.id]=oe);let me=oe[X];return me===void 0&&(me=d(l()),oe[X]=me),me}function d(L){const U=[],k=[],ne=[];for(let X=0;X<n;X++)U[X]=0,k[X]=0,ne[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:ne,object:L,attributes:{},index:null}}function h(L,U,k,ne){const X=r.attributes,G=U.attributes;let F=0;const H=k.getAttributes();for(const oe in H)if(H[oe].location>=0){const Me=X[oe];let be=G[oe];if(be===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),Me===void 0||Me.attribute!==be||be&&Me.data!==be.data)return!0;F++}return r.attributesNum!==F||r.index!==ne}function _(L,U,k,ne){const X={},G=U.attributes;let F=0;const H=k.getAttributes();for(const oe in H)if(H[oe].location>=0){let Me=G[oe];Me===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Me=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Me=L.instanceColor));const be={};be.attribute=Me,Me&&Me.data&&(be.data=Me.data),X[oe]=be,F++}r.attributes=X,r.attributesNum=F,r.index=ne}function b(){const L=r.newAttributes;for(let U=0,k=L.length;U<k;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){const k=r.newAttributes,ne=r.enabledAttributes,X=r.attributeDivisors;k[L]=1,ne[L]===0&&(t.enableVertexAttribArray(L),ne[L]=1),X[L]!==U&&(t.vertexAttribDivisor(L,U),X[L]=U)}function E(){const L=r.newAttributes,U=r.enabledAttributes;for(let k=0,ne=U.length;k<ne;k++)U[k]!==L[k]&&(t.disableVertexAttribArray(k),U[k]=0)}function A(L,U,k,ne,X,G,F){F===!0?t.vertexAttribIPointer(L,U,k,X,G):t.vertexAttribPointer(L,U,k,ne,X,G)}function S(L,U,k,ne){b();const X=ne.attributes,G=k.getAttributes(),F=U.defaultAttributeValues;for(const H in G){const oe=G[H];if(oe.location>=0){let me=X[H];if(me===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),me!==void 0){const Me=me.normalized,be=me.itemSize,Ve=e.get(me);if(Ve===void 0)continue;const ft=Ve.buffer,ot=Ve.type,ue=Ve.bytesPerElement,pe=ot===t.INT||ot===t.UNSIGNED_INT||me.gpuType===vd;if(me.isInterleavedBufferAttribute){const ve=me.data,He=ve.stride,ae=me.offset;if(ve.isInstancedInterleavedBuffer){for(let se=0;se<oe.locationSize;se++)p(oe.location+se,ve.meshPerAttribute);L.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let se=0;se<oe.locationSize;se++)m(oe.location+se);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let se=0;se<oe.locationSize;se++)A(oe.location+se,be/oe.locationSize,ot,Me,He*ue,(ae+be/oe.locationSize*se)*ue,pe)}else{if(me.isInstancedBufferAttribute){for(let ve=0;ve<oe.locationSize;ve++)p(oe.location+ve,me.meshPerAttribute);L.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ve=0;ve<oe.locationSize;ve++)m(oe.location+ve);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let ve=0;ve<oe.locationSize;ve++)A(oe.location+ve,be/oe.locationSize,ot,Me,be*ue,be/oe.locationSize*ve*ue,pe)}}else if(F!==void 0){const Me=F[H];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(oe.location,Me);break;case 3:t.vertexAttrib3fv(oe.location,Me);break;case 4:t.vertexAttrib4fv(oe.location,Me);break;default:t.vertexAttrib1fv(oe.location,Me)}}}}E()}function P(){T();for(const L in i){const U=i[L];for(const k in U){const ne=U[k];for(const X in ne){const G=ne[X];for(const F in G)u(G[F].object),delete G[F];delete ne[X]}}delete i[L]}}function R(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const k in U){const ne=U[k];for(const X in ne){const G=ne[X];for(const F in G)u(G[F].object),delete G[F];delete ne[X]}}delete i[L.id]}function I(L){for(const U in i){const k=i[U];for(const ne in k){const X=k[ne];if(X[L.id]===void 0)continue;const G=X[L.id];for(const F in G)u(G[F].object),delete G[F];delete X[L.id]}}}function v(L){for(const U in i){const k=i[U],ne=L.isInstancedMesh===!0?L.id:0,X=k[ne];if(X!==void 0){for(const G in X){const F=X[G];for(const H in F)u(F[H].object),delete F[H];delete X[G]}delete k[ne],Object.keys(k).length===0&&delete i[U]}}}function T(){j(),o=!0,r!==s&&(r=s,c(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:j,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:m,disableUnusedAttributes:E}}function sC(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let b=0;b<f;b++)_+=u[b]*d[b];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rC(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==zn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const v=I===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Jn&&!v)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:S,maxSamples:P,samples:R}}function oC(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new $i,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,A=E*4;let S=p.clippingState||null;l.value=S,S=u(_,d,A,h);for(let P=0;P!==A;++P)S[P]=n[P];p.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,_!==!0||m===null){const p=h+b*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=h;A!==b;++A,S+=4)o.copy(f[A]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const Qi=4,Ih=[.125,.215,.35,.446,.526,.582],Es=20,aC=256,jr=new Dd,Uh=new nt;let xc=null,bc=0,wc=0,yc=!1;const lC=new $;class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=lC}=r;xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,bc,wc),this._renderer.xr.enabled=yc,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ti,format:zn,colorSpace:Tr,depthBuffer:!1},s=Fh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cC(r)),this._blurMaterial=dC(r,e,n),this._ggxMaterial=uC(r,e,n)}return s}_compileMaterial(e){const n=new ai(new Hn,e);this._renderer.compile(n,jr)}_sceneToCubeUV(e,n,i,s,r){const l=new _n(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Uh),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Fr,new Cg({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Uh),p=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):S===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const P=this._cubeSize;rr(s,S*P,A>2?P:0,P,P),f.setRenderTarget(s),p&&f.render(b,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ns||e.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,jr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,b=this._sizeLods[i],m=3*b*(i>_-Qi?i-_+Qi:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-n,rr(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(a,jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,rr(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(a,jr)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Es-1),b=r/_,m=isFinite(r)?1+Math.floor(u*b):Es;m>Es&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);const p=[];let E=0;for(let I=0;I<Es;++I){const v=I/b,T=Math.exp(-v*v/2);p.push(T),I===0?E+=T:I<m&&(E+=2*T)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const S=this._sizeLods[s],P=3*S*(s>A-Qi?s-A+Qi:0),R=4*(this._cubeSize-S);rr(n,P,R,3*S,2*S),l.setRenderTarget(n),l.render(f,jr)}}function cC(t){const e=[],n=[],i=[];let s=t;const r=t-Qi+1+Ih.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Qi?l=Ih[o-t+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,b=3,m=2,p=1,E=new Float32Array(b*_*h),A=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let R=0;R<h;R++){const I=R%3*2/3-1,v=R>2?0:-1,T=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];E.set(T,b*_*R),A.set(d,m*_*R);const j=[R,R,R,R,R,R];S.set(j,p*_*R)}const P=new Hn;P.setAttribute("position",new ni(E,b)),P.setAttribute("uv",new ni(A,m)),P.setAttribute("faceIndex",new ni(S,p)),i.push(new ai(P,null)),s>Qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Fh(t,e,n){const i=new ti(t,e,n);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function uC(t,e,n){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function dC(t,e,n){const i=new Float32Array(Es),s=new $(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Oh(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Bh(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}class Fg extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pg(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fr(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Mi});r.uniforms.tEquirect.value=n;const o=new ai(s,r),a=n.minFilter;return n.minFilter===As&&(n.minFilter=Zt),new gT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function fC(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Wl||h===$l)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const b=new Fg(_.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",c),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,_=h===Wl||h===$l,b=h===Ns||h===Mr;if(_||b){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Nh(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const E=d.image;return _&&E&&E.height>0||b&&E&&l(E)?(i===null&&(i=new Nh(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Wl?d.mapping=Ns:h===$l&&(d.mapping=Mr),d}function l(d){let h=0;const _=6;for(let b=0;b<_;b++)d[b]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function hC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Qa("WebGLRenderer: "+i+" extension not supported."),s}}}function pC(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let b=0;if(_===void 0)return;if(h!==null){const E=h.array;b=h.version;for(let A=0,S=E.length;A<S;A+=3){const P=E[A+0],R=E[A+1],I=E[A+2];d.push(P,R,R,I,I,P)}}else{const E=_.array;b=_.version;for(let A=0,S=E.length/3-1;A<S;A+=3){const P=A+0,R=A+1,I=A+2;d.push(P,R,R,I,I,P)}}const m=new(_.count>=65535?Ag:Tg)(d,1);m.version=b;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function mC(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*o),n.update(h,i,1)}function c(d,h,_){_!==0&&(t.drawElementsInstanced(i,h,r,d*o,_),n.update(h,i,_))}function u(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];n.update(m,i,1)}function f(d,h,_,b){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,b,0,_);let p=0;for(let E=0;E<_;E++)p+=h[E]*b[E];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function gC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function _C(t,e,n){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let j=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",j)};var h=j;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*R*4*f),v=new Sg(I,P,R,f);v.type=Jn,v.needsUpdate=!0;const T=S*4;for(let L=0;L<f;L++){const U=p[L],k=E[L],ne=A[L],X=P*R*4*L;for(let G=0;G<U.count;G++){const F=G*T;_===!0&&(s.fromBufferAttribute(U,G),I[X+F+0]=s.x,I[X+F+1]=s.y,I[X+F+2]=s.z,I[X+F+3]=0),b===!0&&(s.fromBufferAttribute(k,G),I[X+F+4]=s.x,I[X+F+5]=s.y,I[X+F+6]=s.z,I[X+F+7]=0),m===!0&&(s.fromBufferAttribute(ne,G),I[X+F+8]=s.x,I[X+F+9]=s.y,I[X+F+10]=s.z,I[X+F+11]=ne.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new Xe(P,R)},i.set(a,d),a.addEventListener("dispose",j)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const b=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function vC(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const xC={[og]:"LINEAR_TONE_MAPPING",[ag]:"REINHARD_TONE_MAPPING",[lg]:"CINEON_TONE_MAPPING",[cg]:"ACES_FILMIC_TONE_MAPPING",[dg]:"AGX_TONE_MAPPING",[fg]:"NEUTRAL_TONE_MAPPING",[ug]:"CUSTOM_TONE_MAPPING"};function bC(t,e,n,i,s){const r=new ti(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new ti(e,n,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),a=new Hn;a.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xn([0,2,0,0,2,0],2));const l=new rT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ai(a,l),u=new Dd(-1,1,1,-1,0,1);let f=null,d=null,h=!1,_,b=null,m=[],p=!1;this.setSize=function(E,A){r.setSize(E,A),o.setSize(E,A);for(let S=0;S<m.length;S++){const P=m[S];P.setSize&&P.setSize(E,A)}},this.setEffects=function(E){m=E,p=m.length>0&&m[0].isRenderPass===!0;const A=r.width,S=r.height;for(let P=0;P<m.length;P++){const R=m[P];R.setSize&&R.setSize(A,S)}},this.begin=function(E,A){if(h||E.toneMapping===ei&&m.length===0)return!1;if(b=A,A!==null){const S=A.width,P=A.height;(r.width!==S||r.height!==P)&&this.setSize(S,P)}return p===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=ei,!0},this.hasRenderPass=function(){return p},this.end=function(E,A){E.toneMapping=_,h=!0;let S=r,P=o;for(let R=0;R<m.length;R++){const I=m[R];if(I.enabled!==!1&&(I.render(E,P,S,A),I.needsSwap!==!1)){const v=S;S=P,P=v}}if(f!==E.outputColorSpace||d!==E.toneMapping){f=E.outputColorSpace,d=E.toneMapping,l.defines={},rt.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const R=xC[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,E.setRenderTarget(b),E.render(c,u),b=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Og=new Jt,Uu=new vo(1,1),Bg=new Sg,kg=new UE,zg=new Pg,kh=[],zh=[],Vh=new Float32Array(16),Hh=new Float32Array(9),Gh=new Float32Array(4);function Or(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cl(t,e){let n=zh[e];n===void 0&&(n=new Int32Array(e),zh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function MC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function EC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Gh.set(i),t.uniformMatrix2fv(this.addr,!1,Gh),Nt(n,i)}}function TC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Hh.set(i),t.uniformMatrix3fv(this.addr,!1,Hh),Nt(n,i)}}function AC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Vh.set(i),t.uniformMatrix4fv(this.addr,!1,Vh),Nt(n,i)}}function CC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function DC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function FC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Uu.compareFunction=n.isReversedDepthBuffer()?Ed:Md,r=Uu):r=Og,n.setTexture2D(e||r,s)}function OC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||kg,s)}function BC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||zg,s)}function kC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Bg,s)}function zC(t){switch(t){case 5126:return wC;case 35664:return yC;case 35665:return SC;case 35666:return MC;case 35674:return EC;case 35675:return TC;case 35676:return AC;case 5124:case 35670:return CC;case 35667:case 35671:return RC;case 35668:case 35672:return PC;case 35669:case 35673:return LC;case 5125:return DC;case 36294:return IC;case 36295:return UC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return FC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return kC}}function VC(t,e){t.uniform1fv(this.addr,e)}function HC(t,e){const n=Or(e,this.size,2);t.uniform2fv(this.addr,n)}function GC(t,e){const n=Or(e,this.size,3);t.uniform3fv(this.addr,n)}function WC(t,e){const n=Or(e,this.size,4);t.uniform4fv(this.addr,n)}function $C(t,e){const n=Or(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XC(t,e){const n=Or(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qC(t,e){const n=Or(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YC(t,e){t.uniform1iv(this.addr,e)}function jC(t,e){t.uniform2iv(this.addr,e)}function KC(t,e){t.uniform3iv(this.addr,e)}function ZC(t,e){t.uniform4iv(this.addr,e)}function JC(t,e){t.uniform1uiv(this.addr,e)}function QC(t,e){t.uniform2uiv(this.addr,e)}function e2(t,e){t.uniform3uiv(this.addr,e)}function t2(t,e){t.uniform4uiv(this.addr,e)}function n2(t,e,n){const i=this.cache,s=e.length,r=Cl(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Uu:o=Og;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function i2(t,e,n){const i=this.cache,s=e.length,r=Cl(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||kg,r[o])}function s2(t,e,n){const i=this.cache,s=e.length,r=Cl(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||zg,r[o])}function r2(t,e,n){const i=this.cache,s=e.length,r=Cl(n,s);Ut(i,r)||(t.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Bg,r[o])}function o2(t){switch(t){case 5126:return VC;case 35664:return HC;case 35665:return GC;case 35666:return WC;case 35674:return $C;case 35675:return XC;case 35676:return qC;case 5124:case 35670:return YC;case 35667:case 35671:return jC;case 35668:case 35672:return KC;case 35669:case 35673:return ZC;case 5125:return JC;case 36294:return QC;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return r2}}class a2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zC(n.type)}}class l2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=o2(n.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function Wh(t,e){t.seq.push(e),t.map[e.id]=e}function u2(t,e,n){const i=t.name,s=i.length;for(Sc.lastIndex=0;;){const r=Sc.exec(i),o=Sc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wh(n,c===void 0?new a2(a,t,e):new l2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new c2(a),Wh(n,f)),n=f}}}class La{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);u2(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function $h(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const d2=37297;let f2=0;function h2(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xh=new qe;function p2(t){rt._getMatrix(Xh,rt.workingColorSpace,t);const e=`mat3( ${Xh.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case Ja:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+h2(t.getShaderSource(e),a)}else return r}function m2(t,e){const n=p2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const g2={[og]:"Linear",[ag]:"Reinhard",[lg]:"Cineon",[cg]:"ACESFilmic",[dg]:"AgX",[fg]:"Neutral",[ug]:"Custom"};function _2(t,e){const n=g2[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pa=new $;function v2(){rt.getLuminanceCoefficients(pa);const t=pa.x.toFixed(4),e=pa.y.toFixed(4),n=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function b2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function w2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qr(t){return t!==""}function Yh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(t){return t.replace(y2,M2)}const S2=new Map;function M2(t,e){let n=je[e];if(n===void 0){const i=S2.get(e);if(i!==void 0)n=je[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nu(n)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(t){return t.replace(E2,T2)}function T2(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const A2={[Ea]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function C2(t){return A2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R2={[Ns]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function P2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":R2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const L2={[Mr]:"ENVMAP_MODE_REFRACTION"};function D2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":L2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I2={[rg]:"ENVMAP_BLENDING_MULTIPLY",[fE]:"ENVMAP_BLENDING_MIX",[hE]:"ENVMAP_BLENDING_ADD"};function U2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":I2[t.combine]||"ENVMAP_BLENDING_NONE"}function N2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function F2(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=C2(n),c=P2(n),u=D2(n),f=U2(n),d=N2(n),h=x2(n),_=b2(r),b=s.createProgram();let m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[Zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ei?"#define TONE_MAPPING":"",n.toneMapping!==ei?je.tonemapping_pars_fragment:"",n.toneMapping!==ei?_2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),v2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Nu(o),o=Yh(o,n),o=jh(o,n),a=Nu(a),a=Yh(a,n),a=jh(a,n),o=Kh(o),a=Kh(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=E+m+o,S=E+p+a,P=$h(s,s.VERTEX_SHADER,A),R=$h(s,s.FRAGMENT_SHADER,S);s.attachShader(b,P),s.attachShader(b,R),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(L){if(t.debug.checkShaderErrors){const U=s.getProgramInfoLog(b)||"",k=s.getShaderInfoLog(P)||"",ne=s.getShaderInfoLog(R)||"",X=U.trim(),G=k.trim(),F=ne.trim();let H=!0,oe=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,b,P,R);else{const me=qh(s,P,"vertex"),Me=qh(s,R,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+me+`
`+Me)}else X!==""?Ge("WebGLProgram: Program Info Log:",X):(G===""||F==="")&&(oe=!1);oe&&(L.diagnostics={runnable:H,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(P),s.deleteShader(R),v=new La(s,b),T=w2(s,b)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=s.getProgramParameter(b,d2)),j},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=R,this}let O2=0;class B2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new k2(e),n.set(e,i)),i}}class k2{constructor(e){this.id=O2++,this.code=e,this.usedTimes=0}}function z2(t,e,n,i,s,r){const o=new Mg,a=new B2,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,T,j,L,U){const k=L.fog,ne=U.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||X,G),H=F&&F.mapping===Ml?F.image.height:null,oe=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const me=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Me=me!==void 0?me.length:0;let be=0;ne.morphAttributes.position!==void 0&&(be=1),ne.morphAttributes.normal!==void 0&&(be=2),ne.morphAttributes.color!==void 0&&(be=3);let Ve,ft,ot,ue;if(oe){const ht=Kn[oe];Ve=ht.vertexShader,ft=ht.fragmentShader}else Ve=v.vertexShader,ft=v.fragmentShader,a.update(v),ot=a.getVertexShaderID(v),ue=a.getFragmentShaderID(v);const pe=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),He=U.isInstancedMesh===!0,ae=U.isBatchedMesh===!0,se=!!v.map,M=!!v.matcap,C=!!F,B=!!v.aoMap,W=!!v.lightMap,V=!!v.bumpMap,le=!!v.normalMap,x=!!v.displacementMap,Y=!!v.emissiveMap,Z=!!v.metalnessMap,ie=!!v.roughnessMap,K=v.anisotropy>0,w=v.clearcoat>0,g=v.dispersion>0,D=v.iridescence>0,q=v.sheen>0,ee=v.transmission>0,J=K&&!!v.anisotropyMap,xe=w&&!!v.clearcoatMap,fe=w&&!!v.clearcoatNormalMap,Pe=w&&!!v.clearcoatRoughnessMap,ke=D&&!!v.iridescenceMap,he=D&&!!v.iridescenceThicknessMap,_e=q&&!!v.sheenColorMap,Se=q&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,Re=!!v.specularColorMap,Ze=!!v.specularIntensityMap,O=ee&&!!v.transmissionMap,ye=ee&&!!v.thicknessMap,we=!!v.gradientMap,De=!!v.alphaMap,ge=v.alphaTest>0,de=!!v.alphaHash,Ie=!!v.extensions;let We=ei;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(We=t.toneMapping);const bt={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:ft,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ae,batchingColor:ae&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Tr,alphaToCoverage:!!v.alphaToCoverage,map:se,matcap:M,envMap:C,envMapMode:C&&F.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:W,bumpMap:V,normalMap:le,displacementMap:x,emissiveMap:Y,normalMapObjectSpace:le&&v.normalMapType===gE,normalMapTangentSpace:le&&v.normalMapType===wg,metalnessMap:Z,roughnessMap:ie,anisotropy:K,anisotropyMap:J,clearcoat:w,clearcoatMap:xe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:g,iridescence:D,iridescenceMap:ke,iridescenceThicknessMap:he,sheen:q,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:Re,specularIntensityMap:Ze,transmission:ee,transmissionMap:O,thicknessMap:ye,gradientMap:we,opaque:v.transparent===!1&&v.blending===_r&&v.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:de,combine:v.combine,mapUv:se&&_(v.map.channel),aoMapUv:B&&_(v.aoMap.channel),lightMapUv:W&&_(v.lightMap.channel),bumpMapUv:V&&_(v.bumpMap.channel),normalMapUv:le&&_(v.normalMap.channel),displacementMapUv:x&&_(v.displacementMap.channel),emissiveMapUv:Y&&_(v.emissiveMap.channel),metalnessMapUv:Z&&_(v.metalnessMap.channel),roughnessMapUv:ie&&_(v.roughnessMap.channel),anisotropyMapUv:J&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(v.sheenRoughnessMap.channel),specularMapUv:Ce&&_(v.specularMap.channel),specularColorMapUv:Re&&_(v.specularColorMap.channel),specularIntensityMapUv:Ze&&_(v.specularIntensityMap.channel),transmissionMapUv:O&&_(v.transmissionMap.channel),thicknessMapUv:ye&&_(v.thicknessMap.channel),alphaMapUv:De&&_(v.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(le||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!ne.attributes.uv&&(se||De),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||ne.attributes.normal===void 0&&le===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:U.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&j.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,decodeVideoTexture:se&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:Y&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xi,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const j in v.defines)T.push(j),T.push(v.defines[j]);return v.isRawShaderMaterial===!1&&(p(T,v),E(T,v),T.push(t.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function E(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function A(v){const T=h[v.type];let j;if(T){const L=Kn[T];j=nT.clone(L.uniforms)}else j=v.uniforms;return j}function S(v,T){let j=u.get(T);return j!==void 0?++j.usedTimes:(j=new F2(t,T,v,s),c.push(j),u.set(T,j)),j}function P(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){a.remove(v)}function I(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:I}}function V2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function H2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,_,b,m,p){let E=t[e];return E===void 0?(E={id:d.id,object:d,geometry:h,material:_,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},t[e]=E):(E.id=d.id,E.object=d,E.geometry=h,E.material=_,E.materialVariant=o(d),E.groupOrder=b,E.renderOrder=d.renderOrder,E.z=m,E.group=p),e++,E}function l(d,h,_,b,m,p){const E=a(d,h,_,b,m,p);_.transmission>0?i.push(E):_.transparent===!0?s.push(E):n.push(E)}function c(d,h,_,b,m,p){const E=a(d,h,_,b,m,p);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):n.unshift(E)}function u(d,h){n.length>1&&n.sort(d||H2),i.length>1&&i.sort(h||Jh),s.length>1&&s.sort(h||Jh)}function f(){for(let d=e,h=t.length;d<h;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function G2(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Qh,t.set(i,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function W2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new nt};break;case"SpotLight":n={position:new $,direction:new $,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function $2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let X2=0;function q2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Y2(t){const e=new W2,n=$2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const s=new $,r=new St,o=new St;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,_=0,b=0,m=0,p=0,E=0,A=0,S=0,P=0,R=0,I=0;c.sort(q2);for(let T=0,j=c.length;T<j;T++){const L=c[T],U=L.color,k=L.intensity,ne=L.distance;let X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Er?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*k,f+=U.g*k,d+=U.b*k;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],k);I++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const F=L.shadow,H=n.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=L.shadow.matrix,E++}i.directional[h]=G,h++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=ne,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[b]=G;const F=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,F.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[b]=F.matrix,L.castShadow){const H=n.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,i.spotShadow[b]=H,i.spotShadowMap[b]=X,S++}b++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=G,m++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const F=L.shadow,H=n.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=L.shadow.matrix,A++}i.point[_]=G,_++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(k),G.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[p]=G,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==h||v.pointLength!==_||v.spotLength!==b||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==E||v.numPointShadows!==A||v.numSpotShadows!==S||v.numSpotMaps!==P||v.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=b,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,v.directionalLength=h,v.pointLength=_,v.spotLength=b,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=E,v.numPointShadows=A,v.numSpotShadows=S,v.numSpotMaps=P,v.numLightProbes=I,i.version=X2++)}function l(c,u){let f=0,d=0,h=0,_=0,b=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const A=c[p];if(A.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(A.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:i}}function ep(t){const e=new Y2(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function j2(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ep(t),e.set(s,[a])):r>=o.length?(a=new ep(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
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
}`,J2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Q2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],tp=new St,Kr=new $,Mc=new $;function eR(t,e,n){let i=new Rd;const s=new Xe,r=new Xe,o=new Et,a=new oT,l=new aT,c={},u=n.maxTextureSize,f={[os]:dn,[dn]:os,[xi]:xi},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:K2,fragmentShader:Z2}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ai(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let p=this.type;this.render=function(R,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===sg&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ea);const T=t.getRenderTarget(),j=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==this.type;k&&I.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(X=>X.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,X=R.length;ne<X;ne++){const G=R[ne],F=G.shadow;if(F===void 0){Ge("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const H=F.getFrameExtents();s.multiply(H),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,F.mapSize.y=r.y));const oe=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=oe,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Jr){if(G.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ti(s.x,s.y,{format:Er,type:Ti,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new vo(s.x,s.y,Jn),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=Ai,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt}else G.isPointLight?(F.map=new Fg(s.x),F.map.depthTexture=new eT(s.x,ri)):(F.map=new ti(s.x,s.y),F.map.depthTexture=new vo(s.x,s.y,ri)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=Ai,this.type===Ea?(F.map.depthTexture.compareFunction=oe?Ed:Md,F.map.depthTexture.minFilter=Zt,F.map.depthTexture.magFilter=Zt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt);F.camera.updateProjectionMatrix()}const me=F.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<me;Me++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,Me),t.clear();else{Me===0&&(t.setRenderTarget(F.map),t.clear());const be=F.getViewport(Me);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),U.viewport(o)}if(G.isPointLight){const be=F.camera,Ve=F.matrix,ft=G.distance||be.far;ft!==be.far&&(be.far=ft,be.updateProjectionMatrix()),Kr.setFromMatrixPosition(G.matrixWorld),be.position.copy(Kr),Mc.copy(be.position),Mc.add(J2[Me]),be.up.copy(Q2[Me]),be.lookAt(Mc),be.updateMatrixWorld(),Ve.makeTranslation(-Kr.x,-Kr.y,-Kr.z),tp.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),F._frustum.setFromProjectionMatrix(tp,be.coordinateSystem,be.reversedDepth)}else F.updateMatrices(G);i=F.getFrustum(),S(I,v,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===Jr&&E(F,v),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,j,L)};function E(R,I){const v=e.update(b);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(s.x,s.y,{format:Er,type:Ti})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(I,null,v,d,b,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(I,null,v,h,b,null)}function A(R,I,v,T){let j=null;const L=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)j=L;else if(j=v.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const U=j.uuid,k=I.uuid;let ne=c[U];ne===void 0&&(ne={},c[U]=ne);let X=ne[k];X===void 0&&(X=j.clone(),ne[k]=X,I.addEventListener("dispose",P)),j=X}if(j.visible=I.visible,j.wireframe=I.wireframe,T===Jr?j.side=I.shadowSide!==null?I.shadowSide:I.side:j.side=I.shadowSide!==null?I.shadowSide:f[I.side],j.alphaMap=I.alphaMap,j.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,j.map=I.map,j.clipShadows=I.clipShadows,j.clippingPlanes=I.clippingPlanes,j.clipIntersection=I.clipIntersection,j.displacementMap=I.displacementMap,j.displacementScale=I.displacementScale,j.displacementBias=I.displacementBias,j.wireframeLinewidth=I.wireframeLinewidth,j.linewidth=I.linewidth,v.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const U=t.properties.get(j);U.light=v}return j}function S(R,I,v,T,j){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&j===Jr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const k=e.update(R),ne=R.material;if(Array.isArray(ne)){const X=k.groups;for(let G=0,F=X.length;G<F;G++){const H=X[G],oe=ne[H.materialIndex];if(oe&&oe.visible){const me=A(R,oe,T,j);R.onBeforeShadow(t,R,I,v,k,me,H),t.renderBufferDirect(v,null,k,me,R,H),R.onAfterShadow(t,R,I,v,k,me,H)}}}else if(ne.visible){const X=A(R,ne,T,j);R.onBeforeShadow(t,R,I,v,k,X,null),t.renderBufferDirect(v,null,k,X,R,null),R.onAfterShadow(t,R,I,v,k,X,null)}}const U=R.children;for(let k=0,ne=U.length;k<ne;k++)S(U[k],I,v,T,j)}function P(R){R.target.removeEventListener("dispose",P);for(const v in c){const T=c[v],j=R.target.uuid;j in T&&(T[j].dispose(),delete T[j])}}}function tR(t,e){function n(){let O=!1;const ye=new Et;let we=null;const De=new Et(0,0,0,0);return{setMask:function(ge){we!==ge&&!O&&(t.colorMask(ge,ge,ge,ge),we=ge)},setLocked:function(ge){O=ge},setClear:function(ge,de,Ie,We,bt){bt===!0&&(ge*=We,de*=We,Ie*=We),ye.set(ge,de,Ie,We),De.equals(ye)===!1&&(t.clearColor(ge,de,Ie,We),De.copy(ye))},reset:function(){O=!1,we=null,De.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,we=null,De=null,ge=null;return{setReversed:function(de){if(ye!==de){const Ie=e.get("EXT_clip_control");de?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ye=de;const We=ge;ge=null,this.setClear(We)}},getReversed:function(){return ye},setTest:function(de){de?pe(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(de){we!==de&&!O&&(t.depthMask(de),we=de)},setFunc:function(de){if(ye&&(de=TE[de]),De!==de){switch(de){case Xc:t.depthFunc(t.NEVER);break;case qc:t.depthFunc(t.ALWAYS);break;case Yc:t.depthFunc(t.LESS);break;case Sr:t.depthFunc(t.LEQUAL);break;case jc:t.depthFunc(t.EQUAL);break;case Kc:t.depthFunc(t.GEQUAL);break;case Zc:t.depthFunc(t.GREATER);break;case Jc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=de}},setLocked:function(de){O=de},setClear:function(de){ge!==de&&(ge=de,ye&&(de=1-de),t.clearDepth(de))},reset:function(){O=!1,we=null,De=null,ge=null,ye=!1}}}function s(){let O=!1,ye=null,we=null,De=null,ge=null,de=null,Ie=null,We=null,bt=null;return{setTest:function(ht){O||(ht?pe(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!O&&(t.stencilMask(ht),ye=ht)},setFunc:function(ht,di,fi){(we!==ht||De!==di||ge!==fi)&&(t.stencilFunc(ht,di,fi),we=ht,De=di,ge=fi)},setOp:function(ht,di,fi){(de!==ht||Ie!==di||We!==fi)&&(t.stencilOp(ht,di,fi),de=ht,Ie=di,We=fi)},setLocked:function(ht){O=ht},setClear:function(ht){bt!==ht&&(t.clearStencil(ht),bt=ht)},reset:function(){O=!1,ye=null,we=null,De=null,ge=null,de=null,Ie=null,We=null,bt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],_=null,b=!1,m=null,p=null,E=null,A=null,S=null,P=null,R=null,I=new nt(0,0,0),v=0,T=!1,j=null,L=null,U=null,k=null,ne=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=F>=2);let oe=null,me={};const Me=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),Ve=new Et().fromArray(Me),ft=new Et().fromArray(be);function ot(O,ye,we,De){const ge=new Uint8Array(4),de=t.createTexture();t.bindTexture(O,de),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<we;Ie++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ye+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return de}const ue={};ue[t.TEXTURE_2D]=ot(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ot(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=ot(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ot(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),o.setFunc(Sr),V(!1),le(Zf),pe(t.CULL_FACE),B(Mi);function pe(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function ve(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function He(O,ye){return f[O]!==ye?(t.bindFramebuffer(O,ye),f[O]=ye,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ye),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function ae(O,ye){let we=h,De=!1;if(O){we=d.get(ye),we===void 0&&(we=[],d.set(ye,we));const ge=O.textures;if(we.length!==ge.length||we[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Ie=ge.length;de<Ie;de++)we[de]=t.COLOR_ATTACHMENT0+de;we.length=ge.length,De=!0}}else we[0]!==t.BACK&&(we[0]=t.BACK,De=!0);De&&t.drawBuffers(we)}function se(O){return _!==O?(t.useProgram(O),_=O,!0):!1}const M={[Ms]:t.FUNC_ADD,[jM]:t.FUNC_SUBTRACT,[KM]:t.FUNC_REVERSE_SUBTRACT};M[ZM]=t.MIN,M[JM]=t.MAX;const C={[QM]:t.ZERO,[eE]:t.ONE,[tE]:t.SRC_COLOR,[Wc]:t.SRC_ALPHA,[aE]:t.SRC_ALPHA_SATURATE,[rE]:t.DST_COLOR,[iE]:t.DST_ALPHA,[nE]:t.ONE_MINUS_SRC_COLOR,[$c]:t.ONE_MINUS_SRC_ALPHA,[oE]:t.ONE_MINUS_DST_COLOR,[sE]:t.ONE_MINUS_DST_ALPHA,[lE]:t.CONSTANT_COLOR,[cE]:t.ONE_MINUS_CONSTANT_COLOR,[uE]:t.CONSTANT_ALPHA,[dE]:t.ONE_MINUS_CONSTANT_ALPHA};function B(O,ye,we,De,ge,de,Ie,We,bt,ht){if(O===Mi){b===!0&&(ve(t.BLEND),b=!1);return}if(b===!1&&(pe(t.BLEND),b=!0),O!==YM){if(O!==m||ht!==T){if((p!==Ms||S!==Ms)&&(t.blendEquation(t.FUNC_ADD),p=Ms,S=Ms),ht)switch(O){case _r:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jf:t.blendFunc(t.ONE,t.ONE);break;case Qf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case eh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",O);break}else switch(O){case _r:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Qf:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",O);break}E=null,A=null,P=null,R=null,I.set(0,0,0),v=0,m=O,T=ht}return}ge=ge||ye,de=de||we,Ie=Ie||De,(ye!==p||ge!==S)&&(t.blendEquationSeparate(M[ye],M[ge]),p=ye,S=ge),(we!==E||De!==A||de!==P||Ie!==R)&&(t.blendFuncSeparate(C[we],C[De],C[de],C[Ie]),E=we,A=De,P=de,R=Ie),(We.equals(I)===!1||bt!==v)&&(t.blendColor(We.r,We.g,We.b,bt),I.copy(We),v=bt),m=O,T=!1}function W(O,ye){O.side===xi?ve(t.CULL_FACE):pe(t.CULL_FACE);let we=O.side===dn;ye&&(we=!we),V(we),O.blending===_r&&O.transparent===!1?B(Mi):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const De=O.stencilWrite;a.setTest(De),De&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Y(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(O){j!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),j=O)}function le(O){O!==XM?(pe(t.CULL_FACE),O!==L&&(O===Zf?t.cullFace(t.BACK):O===qM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),L=O}function x(O){O!==U&&(G&&t.lineWidth(O),U=O)}function Y(O,ye,we){O?(pe(t.POLYGON_OFFSET_FILL),(k!==ye||ne!==we)&&(k=ye,ne=we,o.getReversed()&&(ye=-ye),t.polygonOffset(ye,we))):ve(t.POLYGON_OFFSET_FILL)}function Z(O){O?pe(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function ie(O){O===void 0&&(O=t.TEXTURE0+X-1),oe!==O&&(t.activeTexture(O),oe=O)}function K(O,ye,we){we===void 0&&(oe===null?we=t.TEXTURE0+X-1:we=oe);let De=me[we];De===void 0&&(De={type:void 0,texture:void 0},me[we]=De),(De.type!==O||De.texture!==ye)&&(oe!==we&&(t.activeTexture(we),oe=we),t.bindTexture(O,ye||ue[O]),De.type=O,De.texture=ye)}function w(){const O=me[oe];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function q(){try{t.texSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function ee(){try{t.texSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function xe(){try{t.compressedTexSubImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function fe(){try{t.texStorage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function Pe(){try{t.texStorage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function ke(){try{t.texImage2D(...arguments)}catch(O){lt("WebGLState:",O)}}function he(){try{t.texImage3D(...arguments)}catch(O){lt("WebGLState:",O)}}function _e(O){Ve.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ve.copy(O))}function Se(O){ft.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function Ce(O,ye){let we=c.get(ye);we===void 0&&(we=new WeakMap,c.set(ye,we));let De=we.get(O);De===void 0&&(De=t.getUniformBlockIndex(ye,O.name),we.set(O,De))}function Re(O,ye){const De=c.get(ye).get(O);l.get(ye)!==De&&(t.uniformBlockBinding(ye,De,O.__bindingPointIndex),l.set(ye,De))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},oe=null,me={},f={},d=new WeakMap,h=[],_=null,b=!1,m=null,p=null,E=null,A=null,S=null,P=null,R=null,I=new nt(0,0,0),v=0,T=!1,j=null,L=null,U=null,k=null,ne=null,Ve.set(0,0,t.canvas.width,t.canvas.height),ft.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:ve,bindFramebuffer:He,drawBuffers:ae,useProgram:se,setBlending:B,setMaterial:W,setFlipSided:V,setCullFace:le,setLineWidth:x,setPolygonOffset:Y,setScissorTest:Z,activeTexture:ie,bindTexture:K,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:ke,texImage3D:he,updateUBOMapping:Ce,uniformBlockBinding:Re,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:q,texSubImage3D:ee,compressedTexSubImage2D:J,compressedTexSubImage3D:xe,scissor:_e,viewport:Se,reset:Ze}}function nR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,g){return h?new OffscreenCanvas(w,g):_o("canvas")}function b(w,g,D){let q=1;const ee=K(w);if((ee.width>D||ee.height>D)&&(q=D/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(q*ee.width),xe=Math.floor(q*ee.height);f===void 0&&(f=_(J,xe));const fe=g?_(J,xe):f;return fe.width=J,fe.height=xe,fe.getContext("2d").drawImage(w,0,0,J,xe),Ge("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+xe+")."),fe}else return"data"in w&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){t.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(w,g,D,q,ee=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=g;if(g===t.RED&&(D===t.FLOAT&&(J=t.R32F),D===t.HALF_FLOAT&&(J=t.R16F),D===t.UNSIGNED_BYTE&&(J=t.R8)),g===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.R8UI),D===t.UNSIGNED_SHORT&&(J=t.R16UI),D===t.UNSIGNED_INT&&(J=t.R32UI),D===t.BYTE&&(J=t.R8I),D===t.SHORT&&(J=t.R16I),D===t.INT&&(J=t.R32I)),g===t.RG&&(D===t.FLOAT&&(J=t.RG32F),D===t.HALF_FLOAT&&(J=t.RG16F),D===t.UNSIGNED_BYTE&&(J=t.RG8)),g===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RG8UI),D===t.UNSIGNED_SHORT&&(J=t.RG16UI),D===t.UNSIGNED_INT&&(J=t.RG32UI),D===t.BYTE&&(J=t.RG8I),D===t.SHORT&&(J=t.RG16I),D===t.INT&&(J=t.RG32I)),g===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RGB8UI),D===t.UNSIGNED_SHORT&&(J=t.RGB16UI),D===t.UNSIGNED_INT&&(J=t.RGB32UI),D===t.BYTE&&(J=t.RGB8I),D===t.SHORT&&(J=t.RGB16I),D===t.INT&&(J=t.RGB32I)),g===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),D===t.UNSIGNED_INT&&(J=t.RGBA32UI),D===t.BYTE&&(J=t.RGBA8I),D===t.SHORT&&(J=t.RGBA16I),D===t.INT&&(J=t.RGBA32I)),g===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),g===t.RGBA){const xe=ee?Ja:rt.getTransfer(q);D===t.FLOAT&&(J=t.RGBA32F),D===t.HALF_FLOAT&&(J=t.RGBA16F),D===t.UNSIGNED_BYTE&&(J=xe===pt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(w,g){let D;return w?g===null||g===ri||g===mo?D=t.DEPTH24_STENCIL8:g===Jn?D=t.DEPTH32F_STENCIL8:g===po&&(D=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ri||g===mo?D=t.DEPTH_COMPONENT24:g===Jn?D=t.DEPTH_COMPONENT32F:g===po&&(D=t.DEPTH_COMPONENT16),D}function P(w,g){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Zt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),v(g),g.isVideoTexture&&u.delete(g)}function I(w){const g=w.target;g.removeEventListener("dispose",I),j(g)}function v(w){const g=i.get(w);if(g.__webglInit===void 0)return;const D=w.source,q=d.get(D);if(q){const ee=q[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(w),Object.keys(q).length===0&&d.delete(D)}i.remove(w)}function T(w){const g=i.get(w);t.deleteTexture(g.__webglTexture);const D=w.source,q=d.get(D);delete q[g.__cacheKey],o.memory.textures--}function j(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let ee=0;ee<g.__webglFramebuffer[q].length;ee++)t.deleteFramebuffer(g.__webglFramebuffer[q][ee]);else t.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)t.deleteFramebuffer(g.__webglFramebuffer[q]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=w.textures;for(let q=0,ee=D.length;q<ee;q++){const J=i.get(D[q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(D[q])}i.remove(w)}let L=0;function U(){L=0}function k(){const w=L;return w>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function ne(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function X(w,g){const D=i.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const q=w.image;if(q===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(D,w,g);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+g)}function G(w,g){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){ue(D,w,g);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+g)}function F(w,g){const D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){ue(D,w,g);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+g)}function H(w,g){const D=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){pe(D,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+g)}const oe={[Qc]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[eu]:t.MIRRORED_REPEAT},me={[Gt]:t.NEAREST,[pE]:t.NEAREST_MIPMAP_NEAREST,[Wo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Xl]:t.LINEAR_MIPMAP_NEAREST,[As]:t.LINEAR_MIPMAP_LINEAR},Me={[_E]:t.NEVER,[yE]:t.ALWAYS,[vE]:t.LESS,[Md]:t.LEQUAL,[xE]:t.EQUAL,[Ed]:t.GEQUAL,[bE]:t.GREATER,[wE]:t.NOTEQUAL};function be(w,g){if(g.type===Jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Zt||g.magFilter===Xl||g.magFilter===Wo||g.magFilter===As||g.minFilter===Zt||g.minFilter===Xl||g.minFilter===Wo||g.minFilter===As)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,oe[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,oe[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,oe[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,me[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Gt||g.minFilter!==Wo&&g.minFilter!==As||g.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ve(w,g){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const q=g.source;let ee=d.get(q);ee===void 0&&(ee={},d.set(q,ee));const J=ne(g);if(J!==w.__cacheKey){ee[J]===void 0&&(ee[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),ee[J].usedTimes++;const xe=ee[w.__cacheKey];xe!==void 0&&(ee[w.__cacheKey].usedTimes--,xe.usedTimes===0&&T(g)),w.__cacheKey=J,w.__webglTexture=ee[J].texture}return D}function ft(w,g,D){return Math.floor(Math.floor(w/D)/g)}function ot(w,g,D,q){const J=w.updateRanges;if(J.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,D,q,g.data);else{J.sort((he,_e)=>he.start-_e.start);let xe=0;for(let he=1;he<J.length;he++){const _e=J[xe],Se=J[he],Ce=_e.start+_e.count,Re=ft(Se.start,g.width,4),Ze=ft(_e.start,g.width,4);Se.start<=Ce+1&&Re===Ze&&ft(Se.start+Se.count-1,g.width,4)===Re?_e.count=Math.max(_e.count,Se.start+Se.count-_e.start):(++xe,J[xe]=Se)}J.length=xe+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),ke=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let he=0,_e=J.length;he<_e;he++){const Se=J[he],Ce=Math.floor(Se.start/4),Re=Math.ceil(Se.count/4),Ze=Ce%g.width,O=Math.floor(Ce/g.width),ye=Re,we=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ze,O,ye,we,D,q,g.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,ke)}}function ue(w,g,D){let q=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=t.TEXTURE_3D);const ee=Ve(w,g),J=g.source;n.bindTexture(q,w.__webglTexture,t.TEXTURE0+D);const xe=i.get(J);if(J.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+D);const fe=rt.getPrimaries(rt.workingColorSpace),Pe=g.colorSpace===qi?null:rt.getPrimaries(g.colorSpace),ke=g.colorSpace===qi||fe===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let he=b(g.image,!1,s.maxTextureSize);he=ie(g,he);const _e=r.convert(g.format,g.colorSpace),Se=r.convert(g.type);let Ce=A(g.internalFormat,_e,Se,g.colorSpace,g.isVideoTexture);be(q,g);let Re;const Ze=g.mipmaps,O=g.isVideoTexture!==!0,ye=xe.__version===void 0||ee===!0,we=J.dataReady,De=P(g,he);if(g.isDepthTexture)Ce=S(g.format===Cs,g.type),ye&&(O?n.texStorage2D(t.TEXTURE_2D,1,Ce,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ce,he.width,he.height,0,_e,Se,null));else if(g.isDataTexture)if(Ze.length>0){O&&ye&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Ze[0].width,Ze[0].height);for(let ge=0,de=Ze.length;ge<de;ge++)Re=Ze[ge],O?we&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,_e,Se,Re.data):n.texImage2D(t.TEXTURE_2D,ge,Ce,Re.width,Re.height,0,_e,Se,Re.data);g.generateMipmaps=!1}else O?(ye&&n.texStorage2D(t.TEXTURE_2D,De,Ce,he.width,he.height),we&&ot(g,he,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,Ce,he.width,he.height,0,_e,Se,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,Ze[0].width,Ze[0].height,he.depth);for(let ge=0,de=Ze.length;ge<de;ge++)if(Re=Ze[ge],g.format!==zn)if(_e!==null)if(O){if(we)if(g.layerUpdates.size>0){const Ie=Dh(Re.width,Re.height,g.format,g.type);for(const We of g.layerUpdates){const bt=Re.data.subarray(We*Ie/Re.data.BYTES_PER_ELEMENT,(We+1)*Ie/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,We,Re.width,Re.height,1,_e,bt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,he.depth,_e,Re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Ce,Re.width,Re.height,he.depth,0,Re.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?we&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,he.depth,_e,Se,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Ce,Re.width,Re.height,he.depth,0,_e,Se,Re.data)}else{O&&ye&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Ze[0].width,Ze[0].height);for(let ge=0,de=Ze.length;ge<de;ge++)Re=Ze[ge],g.format!==zn?_e!==null?O?we&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,_e,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Ce,Re.width,Re.height,0,Re.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?we&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,_e,Se,Re.data):n.texImage2D(t.TEXTURE_2D,ge,Ce,Re.width,Re.height,0,_e,Se,Re.data)}else if(g.isDataArrayTexture)if(O){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,he.width,he.height,he.depth),we)if(g.layerUpdates.size>0){const ge=Dh(he.width,he.height,g.format,g.type);for(const de of g.layerUpdates){const Ie=he.data.subarray(de*ge/he.data.BYTES_PER_ELEMENT,(de+1)*ge/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,he.width,he.height,1,_e,Se,Ie)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,_e,Se,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,he.width,he.height,he.depth,0,_e,Se,he.data);else if(g.isData3DTexture)O?(ye&&n.texStorage3D(t.TEXTURE_3D,De,Ce,he.width,he.height,he.depth),we&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,_e,Se,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,he.width,he.height,he.depth,0,_e,Se,he.data);else if(g.isFramebufferTexture){if(ye)if(O)n.texStorage2D(t.TEXTURE_2D,De,Ce,he.width,he.height);else{let ge=he.width,de=he.height;for(let Ie=0;Ie<De;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Ce,ge,de,0,_e,Se,null),ge>>=1,de>>=1}}else if(Ze.length>0){if(O&&ye){const ge=K(Ze[0]);n.texStorage2D(t.TEXTURE_2D,De,Ce,ge.width,ge.height)}for(let ge=0,de=Ze.length;ge<de;ge++)Re=Ze[ge],O?we&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,_e,Se,Re):n.texImage2D(t.TEXTURE_2D,ge,Ce,_e,Se,Re);g.generateMipmaps=!1}else if(O){if(ye){const ge=K(he);n.texStorage2D(t.TEXTURE_2D,De,Ce,ge.width,ge.height)}we&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,he)}else n.texImage2D(t.TEXTURE_2D,0,Ce,_e,Se,he);m(g)&&p(q),xe.__version=J.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function pe(w,g,D){if(g.image.length!==6)return;const q=Ve(w,g),ee=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+D);const J=i.get(ee);if(ee.version!==J.__version||q===!0){n.activeTexture(t.TEXTURE0+D);const xe=rt.getPrimaries(rt.workingColorSpace),fe=g.colorSpace===qi?null:rt.getPrimaries(g.colorSpace),Pe=g.colorSpace===qi||xe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ke=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let de=0;de<6;de++)!ke&&!he?_e[de]=b(g.image[de],!0,s.maxCubemapSize):_e[de]=he?g.image[de].image:g.image[de],_e[de]=ie(g,_e[de]);const Se=_e[0],Ce=r.convert(g.format,g.colorSpace),Re=r.convert(g.type),Ze=A(g.internalFormat,Ce,Re,g.colorSpace),O=g.isVideoTexture!==!0,ye=J.__version===void 0||q===!0,we=ee.dataReady;let De=P(g,Se);be(t.TEXTURE_CUBE_MAP,g);let ge;if(ke){O&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Ze,Se.width,Se.height);for(let de=0;de<6;de++){ge=_e[de].mipmaps;for(let Ie=0;Ie<ge.length;Ie++){const We=ge[Ie];g.format!==zn?Ce!==null?O?we&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,We.width,We.height,Ce,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Ze,We.width,We.height,0,We.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,We.width,We.height,Ce,Re,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,Ze,We.width,We.height,0,Ce,Re,We.data)}}}else{if(ge=g.mipmaps,O&&ye){ge.length>0&&De++;const de=K(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Ze,de.width,de.height)}for(let de=0;de<6;de++)if(he){O?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,_e[de].width,_e[de].height,Ce,Re,_e[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ze,_e[de].width,_e[de].height,0,Ce,Re,_e[de].data);for(let Ie=0;Ie<ge.length;Ie++){const bt=ge[Ie].image[de].image;O?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,bt.width,bt.height,Ce,Re,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Ze,bt.width,bt.height,0,Ce,Re,bt.data)}}else{O?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ce,Re,_e[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ze,Ce,Re,_e[de]);for(let Ie=0;Ie<ge.length;Ie++){const We=ge[Ie];O?we&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Ce,Re,We.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,Ze,Ce,Re,We.image[de])}}}m(g)&&p(t.TEXTURE_CUBE_MAP),J.__version=ee.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ve(w,g,D,q,ee,J){const xe=r.convert(D.format,D.colorSpace),fe=r.convert(D.type),Pe=A(D.internalFormat,xe,fe,D.colorSpace),ke=i.get(g),he=i.get(D);if(he.__renderTarget=g,!ke.__hasExternalTextures){const _e=Math.max(1,g.width>>J),Se=Math.max(1,g.height>>J);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,J,Pe,_e,Se,g.depth,0,xe,fe,null):n.texImage2D(ee,J,Pe,_e,Se,0,xe,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Y(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ee,he.__webglTexture,0,x(g)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ee,he.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(w,g,D){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const q=g.depthTexture,ee=q&&q.isDepthTexture?q.type:null,J=S(g.stencilBuffer,ee),xe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Y(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,x(g),J,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,x(g),J,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,J,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,w)}else{const q=g.textures;for(let ee=0;ee<q.length;ee++){const J=q[ee],xe=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),Pe=A(J.internalFormat,xe,fe,J.colorSpace);Y(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,x(g),Pe,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,x(g),Pe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(w,g,D){const q=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),be(t.TEXTURE_CUBE_MAP,g.depthTexture);const ke=r.convert(g.depthTexture.format),he=r.convert(g.depthTexture.type);let _e;g.depthTexture.format===Ai?_e=t.DEPTH_COMPONENT24:g.depthTexture.format===Cs&&(_e=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,_e,g.width,g.height,0,ke,he,null)}}else X(g.depthTexture,0);const J=ee.__webglTexture,xe=x(g),fe=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Pe=g.depthTexture.format===Cs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ai)Y(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,fe,J,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,fe,J,0);else if(g.depthTexture.format===Cs)Y(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,fe,J,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,fe,J,0);else throw new Error("Unknown depthTexture format")}function se(w){const g=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=q}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)ae(g.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?ae(g.__webglFramebuffer[0],w,0):ae(g.__webglFramebuffer,w,0)}else if(D){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=t.createRenderbuffer(),He(g.__webglDepthbuffer[q],w,!1);else{const ee=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,J)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),He(g.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,J)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function M(w,g,D){const q=i.get(w);g!==void 0&&ve(q.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&se(w)}function C(w){const g=w.texture,D=i.get(w),q=i.get(g);w.addEventListener("dispose",I);const ee=w.textures,J=w.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=g.version,o.memory.textures++),J){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<g.mipmaps.length;Pe++)D.__webglFramebuffer[fe][Pe]=t.createFramebuffer()}else D.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)D.__webglFramebuffer[fe]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(xe)for(let fe=0,Pe=ee.length;fe<Pe;fe++){const ke=i.get(ee[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&Y(w)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const Pe=ee[fe];D.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const ke=r.convert(Pe.format,Pe.colorSpace),he=r.convert(Pe.type),_e=A(Pe.internalFormat,ke,he,Pe.colorSpace,w.isXRRenderTarget===!0),Se=x(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,_e,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),He(D.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),be(t.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)ve(D.__webglFramebuffer[fe][Pe],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else ve(D.__webglFramebuffer[fe],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(g)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let fe=0,Pe=ee.length;fe<Pe;fe++){const ke=ee[fe],he=i.get(ke);let _e=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,he.__webglTexture),be(_e,ke),ve(D.__webglFramebuffer,w,ke,t.COLOR_ATTACHMENT0+fe,_e,0),m(ke)&&p(_e)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,q.__webglTexture),be(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)ve(D.__webglFramebuffer[Pe],w,g,t.COLOR_ATTACHMENT0,fe,Pe);else ve(D.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,fe,0);m(g)&&p(fe),n.unbindTexture()}w.depthBuffer&&se(w)}function B(w){const g=w.textures;for(let D=0,q=g.length;D<q;D++){const ee=g[D];if(m(ee)){const J=E(w),xe=i.get(ee).__webglTexture;n.bindTexture(J,xe),p(J),n.unbindTexture()}}}const W=[],V=[];function le(w){if(w.samples>0){if(Y(w)===!1){const g=w.textures,D=w.width,q=w.height;let ee=t.COLOR_BUFFER_BIT;const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(w),fe=g.length>1;if(fe)for(let ke=0;ke<g.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ke=0;ke<g.length;ke++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ke]);const he=i.get(g[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,D,q,0,0,D,q,ee,t.NEAREST),l===!0&&(W.length=0,V.length=0,W.push(t.COLOR_ATTACHMENT0+ke),w.depthBuffer&&w.resolveDepthBuffer===!1&&(W.push(J),V.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,V)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,W))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ke=0;ke<g.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ke]);const he=i.get(g[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function x(w){return Math.min(s.maxSamples,w.samples)}function Y(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Z(w){const g=o.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function ie(w,g){const D=w.colorSpace,q=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Tr&&D!==qi&&(rt.getTransfer(D)===pt?(q!==zn||ee!==vn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",D)),g}function K(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=H,this.rebindTextures=M,this.setupRenderTarget=C,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Y,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iR(t,e){function n(i,s=qi){let r;const o=rt.getTransfer(s);if(i===vn)return t.UNSIGNED_BYTE;if(i===xd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_g)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===pg)return t.BYTE;if(i===mg)return t.SHORT;if(i===po)return t.UNSIGNED_SHORT;if(i===vd)return t.INT;if(i===ri)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===Ti)return t.HALF_FLOAT;if(i===vg)return t.ALPHA;if(i===xg)return t.RGB;if(i===zn)return t.RGBA;if(i===Ai)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===bg)return t.RED;if(i===wd)return t.RED_INTEGER;if(i===Er)return t.RG;if(i===yd)return t.RG_INTEGER;if(i===Sd)return t.RGBA_INTEGER;if(i===Ta||i===Aa||i===Ca||i===Ra)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tu||i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ru||i===ou)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===au)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lu)return r.COMPRESSED_R11_EAC;if(i===cu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===uu)return r.COMPRESSED_RG11_EAC;if(i===du)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fu||i===hu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===bu||i===wu||i===yu||i===Su||i===Mu||i===Eu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_u)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Su)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tu||i===Au||i===Cu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tu)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ru||i===Pu||i===Lu||i===Du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ru)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rR=`
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

}`;class oR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Lg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new li({vertexShader:sR,fragmentShader:rR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new Tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aR extends Vs{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const b=typeof XRWebGLBinding<"u",m=new oR,p={},E=n.getContextAttributes();let A=null,S=null;const P=[],R=[],I=new Xe;let v=null;const T=new _n;T.viewport=new Et;const j=new _n;j.viewport=new Et;const L=[T,j],U=new _T;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let pe=P[ue];return pe===void 0&&(pe=new Ql,P[ue]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ue){let pe=P[ue];return pe===void 0&&(pe=new Ql,P[ue]=pe),pe.getGripSpace()},this.getHand=function(ue){let pe=P[ue];return pe===void 0&&(pe=new Ql,P[ue]=pe),pe.getHandSpace()};function X(ue){const pe=R.indexOf(ue.inputSource);if(pe===-1)return;const ve=P[pe];ve!==void 0&&(ve.update(ue.inputSource,ue.frame,c||o),ve.dispatchEvent({type:ue.type,data:ue.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",F);for(let ue=0;ue<P.length;ue++){const pe=R[ue];pe!==null&&(R[ue]=null,P[ue].disconnect(pe))}k=null,ne=null,m.reset();for(const ue in p)delete p[ue];e.setRenderTarget(A),h=null,d=null,f=null,s=null,S=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){r=ue,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){a=ue,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ue){c=ue},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ue){if(s=ue,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",F),E.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,ae=null;E.depth&&(ae=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=E.stencil?Cs:Ai,He=E.stencil?mo:ri);const se={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ti(d.textureWidth,d.textureHeight,{format:zn,type:vn,depthTexture:new vo(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,ve),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ti(h.framebufferWidth,h.framebufferHeight,{format:zn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(ue){for(let pe=0;pe<ue.removed.length;pe++){const ve=ue.removed[pe],He=R.indexOf(ve);He>=0&&(R[He]=null,P[He].disconnect(ve))}for(let pe=0;pe<ue.added.length;pe++){const ve=ue.added[pe];let He=R.indexOf(ve);if(He===-1){for(let se=0;se<P.length;se++)if(se>=R.length){R.push(ve),He=se;break}else if(R[se]===null){R[se]=ve,He=se;break}if(He===-1)break}const ae=P[He];ae&&ae.connect(ve)}}const H=new $,oe=new $;function me(ue,pe,ve){H.setFromMatrixPosition(pe.matrixWorld),oe.setFromMatrixPosition(ve.matrixWorld);const He=H.distanceTo(oe),ae=pe.projectionMatrix.elements,se=ve.projectionMatrix.elements,M=ae[14]/(ae[10]-1),C=ae[14]/(ae[10]+1),B=(ae[9]+1)/ae[5],W=(ae[9]-1)/ae[5],V=(ae[8]-1)/ae[0],le=(se[8]+1)/se[0],x=M*V,Y=M*le,Z=He/(-V+le),ie=Z*-V;if(pe.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(ie),ue.translateZ(Z),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),ae[10]===-1)ue.projectionMatrix.copy(pe.projectionMatrix),ue.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const K=M+Z,w=C+Z,g=x-ie,D=Y+(He-ie),q=B*C/w*K,ee=W*C/w*K;ue.projectionMatrix.makePerspective(g,D,q,ee,K,w),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function Me(ue,pe){pe===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(pe.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(s===null)return;let pe=ue.near,ve=ue.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),U.near=j.near=T.near=pe,U.far=j.far=T.far=ve,(k!==U.near||ne!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,ne=U.far),U.layers.mask=ue.layers.mask|6,T.layers.mask=U.layers.mask&-5,j.layers.mask=U.layers.mask&-3;const He=ue.parent,ae=U.cameras;Me(U,He);for(let se=0;se<ae.length;se++)Me(ae[se],He);ae.length===2?me(U,T,j):U.projectionMatrix.copy(T.projectionMatrix),be(ue,U,He)};function be(ue,pe,ve){ve===null?ue.matrix.copy(pe.matrixWorld):(ue.matrix.copy(ve.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(pe.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(pe.projectionMatrix),ue.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=Iu*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ue){l=ue,d!==null&&(d.fixedFoveation=ue),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ue)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(ue){return p[ue]};let Ve=null;function ft(ue,pe){if(u=pe.getViewerPose(c||o),_=pe,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let He=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,He=!0);for(let C=0;C<ve.length;C++){const B=ve[C];let W=null;if(h!==null)W=h.getViewport(B);else{const le=f.getViewSubImage(d,B);W=le.viewport,C===0&&(e.setRenderTargetTextures(S,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(S))}let V=L[C];V===void 0&&(V=new _n,V.layers.enable(C),V.viewport=new Et,L[C]=V),V.matrix.fromArray(B.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(B.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(W.x,W.y,W.width,W.height),C===0&&(U.matrix.copy(V.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),He===!0&&U.cameras.push(V)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const C=f.getDepthInformation(ve[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(ae&&ae.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<ve.length;C++){const B=ve[C].camera;if(B){let W=p[B];W||(W=new Lg,p[B]=W);const V=f.getCameraImage(B);W.sourceTexture=V}}}}for(let ve=0;ve<P.length;ve++){const He=R[ve],ae=P[ve];He!==null&&ae!==void 0&&ae.update(He,pe,c||o)}Ve&&Ve(ue,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),_=null}const ot=new Ng;ot.setAnimationLoop(ft),this.setAnimationLoop=function(ue){Ve=ue},this.dispose=function(){}}}const bs=new oi,lR=new St;function cR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,S){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),A=E.envMap,S=E.envMapRotation;A&&(m.envMap.value=A,bs.copy(S),bs.x*=-1,bs.y*=-1,bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(bs)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const S=A.program;i.uniformBlockBinding(E,S)}function c(E,A){let S=s[E.id];S===void 0&&(_(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const P=A.program;i.updateUBOMapping(E,P);const R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const A=f();E.__bindingPointIndex=A;const S=t.createBuffer(),P=E.__size,R=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,S),S}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const A=s[E.id],S=E.uniforms,P=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let R=0,I=S.length;R<I;R++){const v=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,j=v.length;T<j;T++){const L=v[T];if(h(L,R,T,P)===!0){const U=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let X=0;X<k.length;X++){const G=k[X],F=b(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,U+ne,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,ne),ne+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,A,S,P){const R=E.value,I=A+"_"+S;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{const v=P[I];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return P[I]=R,!0}else if(v.equals(R)===!1)return v.copy(R),!0}return!1}function _(E){const A=E.uniforms;let S=0;const P=16;for(let I=0,v=A.length;I<v;I++){const T=Array.isArray(A[I])?A[I]:[A[I]];for(let j=0,L=T.length;j<L;j++){const U=T[j],k=Array.isArray(U.value)?U.value:[U.value];for(let ne=0,X=k.length;ne<X;ne++){const G=k[ne],F=b(G),H=S%P,oe=H%F.boundary,me=H+oe;S+=oe,me!==0&&P-me<F.storage&&(S+=P-me),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=F.storage}}}const R=S%P;return R>0&&(S+=P-R),E.__size=S,E.__cache={},this}function b(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",E),A}function m(E){const A=E.target;A.removeEventListener("dispose",m);const S=o.indexOf(A.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const E in s)t.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const dR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function fR(){return Xn===null&&(Xn=new YE(dR,16,16,Er,Ti),Xn.name="DFG_LUT",Xn.minFilter=Zt,Xn.magFilter=Zt,Xn.wrapS=wi,Xn.wrapT=wi,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class hR{constructor(e={}){const{canvas:n=ME(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=vn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const b=h,m=new Set([Sd,yd,wd]),p=new Set([vn,ri,po,mo,xd,bd]),E=new Uint32Array(4),A=new Int32Array(4);let S=null,P=null;const R=[],I=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let j=!1;this._outputColorSpace=An;let L=0,U=0,k=null,ne=-1,X=null;const G=new Et,F=new Et;let H=null;const oe=new nt(0);let me=0,Me=n.width,be=n.height,Ve=1,ft=null,ot=null;const ue=new Et(0,0,Me,be),pe=new Et(0,0,Me,be);let ve=!1;const He=new Rd;let ae=!1,se=!1;const M=new St,C=new $,B=new Et,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function le(){return k===null?Ve:1}let x=i;function Y(y,z){return n.getContext(y,z)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_d}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",We,!1),n.addEventListener("webglcontextcreationerror",bt,!1),x===null){const z="webgl2";if(x=Y(z,y),x===null)throw Y(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw lt("WebGLRenderer: "+y.message),y}let Z,ie,K,w,g,D,q,ee,J,xe,fe,Pe,ke,he,_e,Se,Ce,Re,Ze,O,ye,we,De;function ge(){Z=new hC(x),Z.init(),ye=new iR(x,Z),ie=new rC(x,Z,e,ye),K=new tR(x,Z),ie.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),w=new gC(x),g=new V2,D=new nR(x,Z,K,g,ie,ye,w),q=new fC(T),ee=new wT(x),we=new iC(x,ee),J=new pC(x,ee,w,we),xe=new vC(x,J,ee,we,w),Re=new _C(x,ie,D),_e=new oC(g),fe=new z2(T,q,Z,ie,we,_e),Pe=new cR(T,g),ke=new G2,he=new j2(Z),Ce=new nC(T,q,K,xe,_,l),Se=new eR(T,xe,ie),De=new uR(x,w,ie,K),Ze=new sC(x,Z,w),O=new mC(x,Z,w),w.programs=fe.programs,T.capabilities=ie,T.extensions=Z,T.properties=g,T.renderLists=ke,T.shadowMap=Se,T.state=K,T.info=w}ge(),b!==vn&&(v=new bC(b,n.width,n.height,s,r));const de=new aR(T,x);this.xr=de,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const y=Z.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Z.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(y){y!==void 0&&(Ve=y,this.setSize(Me,be,!1))},this.getSize=function(y){return y.set(Me,be)},this.setSize=function(y,z,re=!0){if(de.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=y,be=z,n.width=Math.floor(y*Ve),n.height=Math.floor(z*Ve),re===!0&&(n.style.width=y+"px",n.style.height=z+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(Me*Ve,be*Ve).floor()},this.setDrawingBufferSize=function(y,z,re){Me=y,be=z,Ve=re,n.width=Math.floor(y*re),n.height=Math.floor(z*re),this.setViewport(0,0,y,z)},this.setEffects=function(y){if(b===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let z=0;z<y.length;z++)if(y[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,z,re,te){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,z,re,te),K.viewport(G.copy(ue).multiplyScalar(Ve).round())},this.getScissor=function(y){return y.copy(pe)},this.setScissor=function(y,z,re,te){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,z,re,te),K.scissor(F.copy(pe).multiplyScalar(Ve).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(y){K.setScissorTest(ve=y)},this.setOpaqueSort=function(y){ft=y},this.setTransparentSort=function(y){ot=y},this.getClearColor=function(y){return y.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(y=!0,z=!0,re=!0){let te=0;if(y){let Q=!1;if(k!==null){const Te=k.texture.format;Q=m.has(Te)}if(Q){const Te=k.texture.type,Le=p.has(Te),Ae=Ce.getClearColor(),Ue=Ce.getClearAlpha(),Oe=Ae.r,$e=Ae.g,Je=Ae.b;Le?(E[0]=Oe,E[1]=$e,E[2]=Je,E[3]=Ue,x.clearBufferuiv(x.COLOR,0,E)):(A[0]=Oe,A[1]=$e,A[2]=Je,A[3]=Ue,x.clearBufferiv(x.COLOR,0,A))}else te|=x.COLOR_BUFFER_BIT}z&&(te|=x.DEPTH_BUFFER_BIT),re&&(te|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&x.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),Ce.dispose(),ke.dispose(),he.dispose(),g.dispose(),q.dispose(),xe.dispose(),we.dispose(),De.dispose(),fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Bd),de.removeEventListener("sessionend",kd),ls.stop()};function Ie(y){y.preventDefault(),rh("WebGLRenderer: Context Lost."),j=!0}function We(){rh("WebGLRenderer: Context Restored."),j=!1;const y=w.autoReset,z=Se.enabled,re=Se.autoUpdate,te=Se.needsUpdate,Q=Se.type;ge(),w.autoReset=y,Se.enabled=z,Se.autoUpdate=re,Se.needsUpdate=te,Se.type=Q}function bt(y){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ht(y){const z=y.target;z.removeEventListener("dispose",ht),di(z)}function di(y){fi(y),g.remove(y)}function fi(y){const z=g.get(y).programs;z!==void 0&&(z.forEach(function(re){fe.releaseProgram(re)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,re,te,Q,Te){z===null&&(z=W);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=Xg(y,z,re,te,Q);K.setMaterial(te,Le);let Ue=re.index,Oe=1;if(te.wireframe===!0){if(Ue=J.getWireframeAttribute(re),Ue===void 0)return;Oe=2}const $e=re.drawRange,Je=re.attributes.position;let Be=$e.start*Oe,mt=($e.start+$e.count)*Oe;Te!==null&&(Be=Math.max(Be,Te.start*Oe),mt=Math.min(mt,(Te.start+Te.count)*Oe)),Ue!==null?(Be=Math.max(Be,0),mt=Math.min(mt,Ue.count)):Je!=null&&(Be=Math.max(Be,0),mt=Math.min(mt,Je.count));const Tt=mt-Be;if(Tt<0||Tt===1/0)return;we.setup(Q,te,Ae,re,Ue);let Mt,gt=Ze;if(Ue!==null&&(Mt=ee.get(Ue),gt=O,gt.setIndex(Mt)),Q.isMesh)te.wireframe===!0?(K.setLineWidth(te.wireframeLinewidth*le()),gt.setMode(x.LINES)):gt.setMode(x.TRIANGLES);else if(Q.isLine){let $t=te.linewidth;$t===void 0&&($t=1),K.setLineWidth($t*le()),Q.isLineSegments?gt.setMode(x.LINES):Q.isLineLoop?gt.setMode(x.LINE_LOOP):gt.setMode(x.LINE_STRIP)}else Q.isPoints?gt.setMode(x.POINTS):Q.isSprite&&gt.setMode(x.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,Ne=Q._multiDrawCounts,pn=Q._multiDrawCount,at=Ue?ee.get(Ue).bytesPerElement:1,In=g.get(te).currentProgram.getUniforms();for(let Gn=0;Gn<pn;Gn++)In.setValue(x,"_gl_DrawID",Gn),gt.render($t[Gn]/at,Ne[Gn])}else if(Q.isInstancedMesh)gt.renderInstances(Be,Tt,Q.count);else if(re.isInstancedBufferGeometry){const $t=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ne=Math.min(re.instanceCount,$t);gt.renderInstances(Be,Tt,Ne)}else gt.render(Be,Tt)};function Od(y,z,re){y.transparent===!0&&y.side===xi&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,Io(y,z,re),y.side=os,y.needsUpdate=!0,Io(y,z,re),y.side=xi):Io(y,z,re)}this.compile=function(y,z,re=null){re===null&&(re=y),P=he.get(re),P.init(z),I.push(P),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),y!==re&&y.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const te=new Set;return y.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Te=Q.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ae=Te[Le];Od(Ae,re,Q),te.add(Ae)}else Od(Te,re,Q),te.add(Te)}),P=I.pop(),te},this.compileAsync=function(y,z,re=null){const te=this.compile(y,z,re);return new Promise(Q=>{function Te(){if(te.forEach(function(Le){g.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){Q(y);return}setTimeout(Te,10)}Z.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Pl=null;function $g(y){Pl&&Pl(y)}function Bd(){ls.stop()}function kd(){ls.start()}const ls=new Ng;ls.setAnimationLoop($g),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(y){Pl=y,de.setAnimationLoop(y),y===null?ls.stop():ls.start()},de.addEventListener("sessionstart",Bd),de.addEventListener("sessionend",kd),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;const re=de.enabled===!0&&de.isPresenting===!0,te=v!==null&&(k===null||re)&&v.begin(T,k);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,z,k),P=he.get(y,I.length),P.init(z),I.push(P),M.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),He.setFromProjectionMatrix(M,Qn,z.reversedDepth),se=this.localClippingEnabled,ae=_e.init(this.clippingPlanes,se),S=ke.get(y,R.length),S.init(),R.push(S),de.enabled===!0&&de.isPresenting===!0){const Le=T.xr.getDepthSensingMesh();Le!==null&&Ll(Le,z,-1/0,T.sortObjects)}Ll(y,z,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(ft,ot),V=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,V&&Ce.addToRenderList(S,y),this.info.render.frame++,ae===!0&&_e.beginShadows();const Q=P.state.shadowsArray;if(Se.render(Q,y,z),ae===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&v.hasRenderPass())===!1){const Le=S.opaque,Ae=S.transmissive;if(P.setupLights(),z.isArrayCamera){const Ue=z.cameras;if(Ae.length>0)for(let Oe=0,$e=Ue.length;Oe<$e;Oe++){const Je=Ue[Oe];Vd(Le,Ae,y,Je)}V&&Ce.render(y);for(let Oe=0,$e=Ue.length;Oe<$e;Oe++){const Je=Ue[Oe];zd(S,y,Je,Je.viewport)}}else Ae.length>0&&Vd(Le,Ae,y,z),V&&Ce.render(y),zd(S,y,z)}k!==null&&U===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),te&&v.end(T),y.isScene===!0&&y.onAfterRender(T,y,z),we.resetDefaultState(),ne=-1,X=null,I.pop(),I.length>0?(P=I[I.length-1],ae===!0&&_e.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function Ll(y,z,re,te){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)re=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)P.pushLight(y),y.castShadow&&P.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||He.intersectsSprite(y)){te&&B.setFromMatrixPosition(y.matrixWorld).applyMatrix4(M);const Le=xe.update(y),Ae=y.material;Ae.visible&&S.push(y,Le,Ae,re,B.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||He.intersectsObject(y))){const Le=xe.update(y),Ae=y.material;if(te&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),B.copy(y.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),B.copy(Le.boundingSphere.center)),B.applyMatrix4(y.matrixWorld).applyMatrix4(M)),Array.isArray(Ae)){const Ue=Le.groups;for(let Oe=0,$e=Ue.length;Oe<$e;Oe++){const Je=Ue[Oe],Be=Ae[Je.materialIndex];Be&&Be.visible&&S.push(y,Le,Be,re,B.z,Je)}}else Ae.visible&&S.push(y,Le,Ae,re,B.z,null)}}const Te=y.children;for(let Le=0,Ae=Te.length;Le<Ae;Le++)Ll(Te[Le],z,re,te)}function zd(y,z,re,te){const{opaque:Q,transmissive:Te,transparent:Le}=y;P.setupLightsView(re),ae===!0&&_e.setGlobalState(T.clippingPlanes,re),te&&K.viewport(G.copy(te)),Q.length>0&&Do(Q,z,re),Te.length>0&&Do(Te,z,re),Le.length>0&&Do(Le,z,re),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Vd(y,z,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const Be=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new ti(1,1,{generateMipmaps:!0,type:Be?Ti:vn,minFilter:As,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Te=P.state.transmissionRenderTarget[te.id],Le=te.viewport||G;Te.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);const Ae=T.getRenderTarget(),Ue=T.getActiveCubeFace(),Oe=T.getActiveMipmapLevel();T.setRenderTarget(Te),T.getClearColor(oe),me=T.getClearAlpha(),me<1&&T.setClearColor(16777215,.5),T.clear(),V&&Ce.render(re);const $e=T.toneMapping;T.toneMapping=ei;const Je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),ae===!0&&_e.setGlobalState(T.clippingPlanes,te),Do(y,re,te),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let mt=0,Tt=z.length;mt<Tt;mt++){const Mt=z[mt],{object:gt,geometry:$t,material:Ne,group:pn}=Mt;if(Ne.side===xi&&gt.layers.test(te.layers)){const at=Ne.side;Ne.side=dn,Ne.needsUpdate=!0,Hd(gt,re,te,$t,Ne,pn),Ne.side=at,Ne.needsUpdate=!0,Be=!0}}Be===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}T.setRenderTarget(Ae,Ue,Oe),T.setClearColor(oe,me),Je!==void 0&&(te.viewport=Je),T.toneMapping=$e}function Do(y,z,re){const te=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,Te=y.length;Q<Te;Q++){const Le=y[Q],{object:Ae,geometry:Ue,group:Oe}=Le;let $e=Le.material;$e.allowOverride===!0&&te!==null&&($e=te),Ae.layers.test(re.layers)&&Hd(Ae,z,re,Ue,$e,Oe)}}function Hd(y,z,re,te,Q,Te){y.onBeforeRender(T,z,re,te,Q,Te),y.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Q.onBeforeRender(T,z,re,te,y,Te),Q.transparent===!0&&Q.side===xi&&Q.forceSinglePass===!1?(Q.side=dn,Q.needsUpdate=!0,T.renderBufferDirect(re,z,te,Q,y,Te),Q.side=os,Q.needsUpdate=!0,T.renderBufferDirect(re,z,te,Q,y,Te),Q.side=xi):T.renderBufferDirect(re,z,te,Q,y,Te),y.onAfterRender(T,z,re,te,Q,Te)}function Io(y,z,re){z.isScene!==!0&&(z=W);const te=g.get(y),Q=P.state.lights,Te=P.state.shadowsArray,Le=Q.state.version,Ae=fe.getParameters(y,Q.state,Te,z,re),Ue=fe.getProgramCacheKey(Ae);let Oe=te.programs;te.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?z.environment:null,te.fog=z.fog;const $e=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;te.envMap=q.get(y.envMap||te.environment,$e),te.envMapRotation=te.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",ht),Oe=new Map,te.programs=Oe);let Je=Oe.get(Ue);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===Le)return Wd(y,Ae),Je}else Ae.uniforms=fe.getUniforms(y),y.onBeforeCompile(Ae,T),Je=fe.acquireProgram(Ae,Ue),Oe.set(Ue,Je),te.uniforms=Ae.uniforms;const Be=te.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=_e.uniform),Wd(y,Ae),te.needsLights=Yg(y),te.lightsStateVersion=Le,te.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function Gd(y){if(y.uniformsList===null){const z=y.currentProgram.getUniforms();y.uniformsList=La.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function Wd(y,z){const re=g.get(y);re.outputColorSpace=z.outputColorSpace,re.batching=z.batching,re.batchingColor=z.batchingColor,re.instancing=z.instancing,re.instancingColor=z.instancingColor,re.instancingMorph=z.instancingMorph,re.skinning=z.skinning,re.morphTargets=z.morphTargets,re.morphNormals=z.morphNormals,re.morphColors=z.morphColors,re.morphTargetsCount=z.morphTargetsCount,re.numClippingPlanes=z.numClippingPlanes,re.numIntersection=z.numClipIntersection,re.vertexAlphas=z.vertexAlphas,re.vertexTangents=z.vertexTangents,re.toneMapping=z.toneMapping}function Xg(y,z,re,te,Q){z.isScene!==!0&&(z=W),D.resetTextureUnits();const Te=z.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?z.environment:null,Ae=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Tr,Ue=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Oe=q.get(te.envMap||Le,Ue),$e=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Be=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Tt=!!re.morphAttributes.color;let Mt=ei;te.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Mt=T.toneMapping);const gt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,$t=gt!==void 0?gt.length:0,Ne=g.get(te),pn=P.state.lights;if(ae===!0&&(se===!0||y!==X)){const Ft=y===X&&te.id===ne;_e.setState(te,y,Ft)}let at=!1;te.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==pn.state.version||Ne.outputColorSpace!==Ae||Q.isBatchedMesh&&Ne.batching===!1||!Q.isBatchedMesh&&Ne.batching===!0||Q.isBatchedMesh&&Ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ne.instancing===!1||!Q.isInstancedMesh&&Ne.instancing===!0||Q.isSkinnedMesh&&Ne.skinning===!1||!Q.isSkinnedMesh&&Ne.skinning===!0||Q.isInstancedMesh&&Ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ne.instancingMorph===!1&&Q.morphTexture!==null||Ne.envMap!==Oe||te.fog===!0&&Ne.fog!==Te||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==_e.numPlanes||Ne.numIntersection!==_e.numIntersection)||Ne.vertexAlphas!==$e||Ne.vertexTangents!==Je||Ne.morphTargets!==Be||Ne.morphNormals!==mt||Ne.morphColors!==Tt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==$t)&&(at=!0):(at=!0,Ne.__version=te.version);let In=Ne.currentProgram;at===!0&&(In=Io(te,z,Q));let Gn=!1,cs=!1,Hs=!1;const vt=In.getUniforms(),Ht=Ne.uniforms;if(K.useProgram(In.program)&&(Gn=!0,cs=!0,Hs=!0),te.id!==ne&&(ne=te.id,cs=!0),Gn||X!==y){K.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),vt.setValue(x,"projectionMatrix",y.projectionMatrix),vt.setValue(x,"viewMatrix",y.matrixWorldInverse);const Pi=vt.map.cameraPosition;Pi!==void 0&&Pi.setValue(x,C.setFromMatrixPosition(y.matrixWorld)),ie.logarithmicDepthBuffer&&vt.setValue(x,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&vt.setValue(x,"isOrthographic",y.isOrthographicCamera===!0),X!==y&&(X=y,cs=!0,Hs=!0)}if(Ne.needsLights&&(pn.state.directionalShadowMap.length>0&&vt.setValue(x,"directionalShadowMap",pn.state.directionalShadowMap,D),pn.state.spotShadowMap.length>0&&vt.setValue(x,"spotShadowMap",pn.state.spotShadowMap,D),pn.state.pointShadowMap.length>0&&vt.setValue(x,"pointShadowMap",pn.state.pointShadowMap,D)),Q.isSkinnedMesh){vt.setOptional(x,Q,"bindMatrix"),vt.setOptional(x,Q,"bindMatrixInverse");const Ft=Q.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(x,"boneTexture",Ft.boneTexture,D))}Q.isBatchedMesh&&(vt.setOptional(x,Q,"batchingTexture"),vt.setValue(x,"batchingTexture",Q._matricesTexture,D),vt.setOptional(x,Q,"batchingIdTexture"),vt.setValue(x,"batchingIdTexture",Q._indirectTexture,D),vt.setOptional(x,Q,"batchingColorTexture"),Q._colorsTexture!==null&&vt.setValue(x,"batchingColorTexture",Q._colorsTexture,D));const Ri=re.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Re.update(Q,re,In),(cs||Ne.receiveShadow!==Q.receiveShadow)&&(Ne.receiveShadow=Q.receiveShadow,vt.setValue(x,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&z.environment!==null&&(Ht.envMapIntensity.value=z.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=fR()),cs&&(vt.setValue(x,"toneMappingExposure",T.toneMappingExposure),Ne.needsLights&&qg(Ht,Hs),Te&&te.fog===!0&&Pe.refreshFogUniforms(Ht,Te),Pe.refreshMaterialUniforms(Ht,te,Ve,be,P.state.transmissionRenderTarget[y.id]),La.upload(x,Gd(Ne),Ht,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(La.upload(x,Gd(Ne),Ht,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&vt.setValue(x,"center",Q.center),vt.setValue(x,"modelViewMatrix",Q.modelViewMatrix),vt.setValue(x,"normalMatrix",Q.normalMatrix),vt.setValue(x,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Ft=te.uniformsGroups;for(let Pi=0,Gs=Ft.length;Pi<Gs;Pi++){const $d=Ft[Pi];De.update($d,In),De.bind($d,In)}}return In}function qg(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function Yg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,z,re){const te=g.get(y);te.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),g.get(y.texture).__webglTexture=z,g.get(y.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,z){const re=g.get(y);re.__webglFramebuffer=z,re.__useDefaultFramebuffer=z===void 0};const jg=x.createFramebuffer();this.setRenderTarget=function(y,z=0,re=0){k=y,L=z,U=re;let te=null,Q=!1,Te=!1;if(y){const Ae=g.get(y);if(Ae.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(x.FRAMEBUFFER,Ae.__webglFramebuffer),G.copy(y.viewport),F.copy(y.scissor),H=y.scissorTest,K.viewport(G),K.scissor(F),K.setScissorTest(H),ne=-1;return}else if(Ae.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(Ae.__hasExternalTextures)D.rebindTextures(y,g.get(y.texture).__webglTexture,g.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const $e=y.depthTexture;if(Ae.__boundDepthTexture!==$e){if($e!==null&&g.has($e)&&(y.width!==$e.image.width||y.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Te=!0);const Oe=g.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?te=Oe[z][re]:te=Oe[z],Q=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?te=g.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?te=Oe[re]:te=Oe,G.copy(y.viewport),F.copy(y.scissor),H=y.scissorTest}else G.copy(ue).multiplyScalar(Ve).floor(),F.copy(pe).multiplyScalar(Ve).floor(),H=ve;if(re!==0&&(te=jg),K.bindFramebuffer(x.FRAMEBUFFER,te)&&K.drawBuffers(y,te),K.viewport(G),K.scissor(F),K.setScissorTest(H),Q){const Ae=g.get(y.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,re)}else if(Te){const Ae=z;for(let Ue=0;Ue<y.textures.length;Ue++){const Oe=g.get(y.textures[Ue]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,re,Ae)}}else if(y!==null&&re!==0){const Ae=g.get(y.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ae.__webglTexture,re)}ne=-1},this.readRenderTargetPixels=function(y,z,re,te,Q,Te,Le,Ae=0){if(!(y&&y.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){K.bindFramebuffer(x.FRAMEBUFFER,Ue);try{const Oe=y.textures[Ae],$e=Oe.format,Je=Oe.type;if(y.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ae),!ie.textureFormatReadable($e)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Je)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-te&&re>=0&&re<=y.height-Q&&x.readPixels(z,re,te,Q,ye.convert($e),ye.convert(Je),Te)}finally{const Oe=k!==null?g.get(k).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(y,z,re,te,Q,Te,Le,Ae=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(z>=0&&z<=y.width-te&&re>=0&&re<=y.height-Q){K.bindFramebuffer(x.FRAMEBUFFER,Ue);const Oe=y.textures[Ae],$e=Oe.format,Je=Oe.type;if(y.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ae),!ie.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Be),x.bufferData(x.PIXEL_PACK_BUFFER,Te.byteLength,x.STREAM_READ),x.readPixels(z,re,te,Q,ye.convert($e),ye.convert(Je),0);const mt=k!==null?g.get(k).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,mt);const Tt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await EE(x,Tt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Be),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,Te),x.deleteBuffer(Be),x.deleteSync(Tt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,z=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(y.image.width*te),Te=Math.floor(y.image.height*te),Le=z!==null?z.x:0,Ae=z!==null?z.y:0;D.setTexture2D(y,0),x.copyTexSubImage2D(x.TEXTURE_2D,re,0,0,Le,Ae,Q,Te),K.unbindTexture()};const Kg=x.createFramebuffer(),Zg=x.createFramebuffer();this.copyTextureToTexture=function(y,z,re=null,te=null,Q=0,Te=0){let Le,Ae,Ue,Oe,$e,Je,Be,mt,Tt;const Mt=y.isCompressedTexture?y.mipmaps[Te]:y.image;if(re!==null)Le=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Ue=re.isBox3?re.max.z-re.min.z:1,Oe=re.min.x,$e=re.min.y,Je=re.isBox3?re.min.z:0;else{const Ht=Math.pow(2,-Q);Le=Math.floor(Mt.width*Ht),Ae=Math.floor(Mt.height*Ht),y.isDataArrayTexture?Ue=Mt.depth:y.isData3DTexture?Ue=Math.floor(Mt.depth*Ht):Ue=1,Oe=0,$e=0,Je=0}te!==null?(Be=te.x,mt=te.y,Tt=te.z):(Be=0,mt=0,Tt=0);const gt=ye.convert(z.format),$t=ye.convert(z.type);let Ne;z.isData3DTexture?(D.setTexture3D(z,0),Ne=x.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),Ne=x.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),Ne=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,z.unpackAlignment);const pn=x.getParameter(x.UNPACK_ROW_LENGTH),at=x.getParameter(x.UNPACK_IMAGE_HEIGHT),In=x.getParameter(x.UNPACK_SKIP_PIXELS),Gn=x.getParameter(x.UNPACK_SKIP_ROWS),cs=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Oe),x.pixelStorei(x.UNPACK_SKIP_ROWS,$e),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Je);const Hs=y.isDataArrayTexture||y.isData3DTexture,vt=z.isDataArrayTexture||z.isData3DTexture;if(y.isDepthTexture){const Ht=g.get(y),Ri=g.get(z),Ft=g.get(Ht.__renderTarget),Pi=g.get(Ri.__renderTarget);K.bindFramebuffer(x.READ_FRAMEBUFFER,Ft.__webglFramebuffer),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Gs=0;Gs<Ue;Gs++)Hs&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,g.get(y).__webglTexture,Q,Je+Gs),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,g.get(z).__webglTexture,Te,Tt+Gs)),x.blitFramebuffer(Oe,$e,Le,Ae,Be,mt,Le,Ae,x.DEPTH_BUFFER_BIT,x.NEAREST);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(Q!==0||y.isRenderTargetTexture||g.has(y)){const Ht=g.get(y),Ri=g.get(z);K.bindFramebuffer(x.READ_FRAMEBUFFER,Kg),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Zg);for(let Ft=0;Ft<Ue;Ft++)Hs?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ht.__webglTexture,Q,Je+Ft):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ht.__webglTexture,Q),vt?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ri.__webglTexture,Te,Tt+Ft):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ri.__webglTexture,Te),Q!==0?x.blitFramebuffer(Oe,$e,Le,Ae,Be,mt,Le,Ae,x.COLOR_BUFFER_BIT,x.NEAREST):vt?x.copyTexSubImage3D(Ne,Te,Be,mt,Tt+Ft,Oe,$e,Le,Ae):x.copyTexSubImage2D(Ne,Te,Be,mt,Oe,$e,Le,Ae);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else vt?y.isDataTexture||y.isData3DTexture?x.texSubImage3D(Ne,Te,Be,mt,Tt,Le,Ae,Ue,gt,$t,Mt.data):z.isCompressedArrayTexture?x.compressedTexSubImage3D(Ne,Te,Be,mt,Tt,Le,Ae,Ue,gt,Mt.data):x.texSubImage3D(Ne,Te,Be,mt,Tt,Le,Ae,Ue,gt,$t,Mt):y.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Te,Be,mt,Le,Ae,gt,$t,Mt.data):y.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Te,Be,mt,Mt.width,Mt.height,gt,Mt.data):x.texSubImage2D(x.TEXTURE_2D,Te,Be,mt,Le,Ae,gt,$t,Mt);x.pixelStorei(x.UNPACK_ROW_LENGTH,pn),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,at),x.pixelStorei(x.UNPACK_SKIP_PIXELS,In),x.pixelStorei(x.UNPACK_SKIP_ROWS,Gn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,cs),Te===0&&z.generateMipmaps&&x.generateMipmap(Ne),K.unbindTexture()},this.initRenderTarget=function(y){g.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),K.unbindTexture()},this.resetState=function(){L=0,U=0,k=null,K.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const np={type:"change"},Id={type:"start"},Vg={type:"end"},ma=new Cd,ip=new $i,pR=Math.cos(70*CE.DEG2RAD),Dt=new $,ln=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ec=1e-6;class mR extends xT{constructor(e,n=null){super(e,n),this.state=_t.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new as,this._lastTargetPosition=new $,this._quat=new as().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lh,this._sphericalDelta=new Lh,this._scale=1,this._panOffset=new $,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new $,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_R.bind(this),this._onPointerDown=gR.bind(this),this._onPointerUp=vR.bind(this),this._onContextMenu=ER.bind(this),this._onMouseWheel=wR.bind(this),this._onKeyDown=yR.bind(this),this._onTouchStart=SR.bind(this),this._onTouchMove=MR.bind(this),this._onMouseDown=xR.bind(this),this._onMouseMove=bR.bind(this),this._interceptControlDown=TR.bind(this),this._interceptControlUp=AR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(np),this.update(),this.state=_t.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new $(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ma.origin.copy(this.object.position),ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ma.direction))<pR?this.object.lookAt(this.target):(ip.setFromNormalAndCoplanarPoint(this.object.up,this.target),ma.intersectPlane(ip,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ec||this._lastTargetPosition.distanceToSquared(this.target)>Ec?(this.dispatchEvent(np),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _R(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function vR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vg),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function xR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=_t.DOLLY;break;case gr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}break;case gr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Id)}function bR(t){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function wR(t){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(t.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Vg))}function yR(t){this.enabled!==!1&&this._handleKeyDown(t)}function SR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=_t.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=_t.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Id)}function MR(t){switch(this._trackPointer(t),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=_t.NONE}}function ER(t){this.enabled!==!1&&t.preventDefault()}function TR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ud=t=>(ci("data-v-d513558d"),t=t(),ui(),t),CR={class:"three-container"},RR=Ud(()=>N("div",{class:"three-hint"},[N("i",{class:"fas fa-mouse-pointer"}),ii(" 拖曳旋轉・滾輪縮放・右鍵平移 ")],-1)),PR={class:"three-controls"},LR=Ud(()=>N("i",{class:"fas fa-home"},null,-1)),DR=[LR],IR=Ud(()=>N("i",{class:"fas fa-sync-alt"},null,-1)),UR=[IR],NR={__name:"ThreePreview",props:{designImageUrl:{type:String,default:""}},setup(t){const e=t,n=Qe(null),i=Qe(!0);let s,r,o,a,l=null,c=null;const u=()=>{const S=n.value;if(!S)return;const P=S.clientWidth,R=S.clientHeight;s=new HE,s.background=new nt(1710638),s.fog=new Ad(1710638,10,50),r=new _n(45,P/R,.1,100),r.position.set(0,1.5,5),o=new hR({antialias:!0}),o.setSize(P,R),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0,o.shadowMap.type=sg,S.appendChild(o.domElement),a=new mR(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.05,a.autoRotate=i.value,a.autoRotateSpeed=1.5,a.minDistance=2,a.maxDistance=12,f(),d(),h(),m(),window.addEventListener("resize",p)},f=()=>{const S=new mT(16777215,.4);s.add(S);const P=new Ph(16777215,1.2);P.position.set(5,8,5),P.castShadow=!0,P.shadow.mapSize.set(1024,1024),s.add(P);const R=new Ph(5996543,.4);R.position.set(-5,2,-5),s.add(R);const I=new hT(16777215,.6,20);I.position.set(0,8,0),s.add(I)},d=()=>{const S=new vT(20,20,3355477,2236996);S.position.y=-1.5,s.add(S)},h=()=>{const S=new Fr(2,2,2,1,1,1),P=[_(4871528),_(4871528),_(2963272),_(2963272),_(5996543),_(4871528)];c=new ai(S,P),c.castShadow=!0,c.receiveShadow=!0,c.position.y=0,s.add(c),e.designImageUrl&&b(e.designImageUrl)},_=S=>new Mh({color:S,roughness:.6,metalness:.2}),b=S=>{if(!c||!S)return;new dT().load(S,R=>{R.flipY=!0,R.needsUpdate=!0,c.material[4]=new Mh({map:R,roughness:.5,metalness:.1}),c.material[4].needsUpdate=!0})},m=()=>{l=requestAnimationFrame(m),a.update(),o.render(s,r)},p=()=>{const S=n.value;if(!S)return;const P=S.clientWidth,R=S.clientHeight;r.aspect=P/R,r.updateProjectionMatrix(),o.setSize(P,R)},E=()=>{r.position.set(0,1.5,5),a.target.set(0,0,0),a.update()},A=()=>{i.value=!i.value,a.autoRotate=i.value};return bi(()=>e.designImageUrl,S=>{S&&b(S)}),wo(u),Ku(()=>{cancelAnimationFrame(l),window.removeEventListener("resize",p),o==null||o.dispose(),n.value&&(o!=null&&o.domElement)&&n.value.removeChild(o.domElement)}),(S,P)=>(Ye(),et("div",CR,[N("div",{ref_key:"mountRef",ref:n,class:"three-mount"},null,512),RR,N("div",PR,[N("button",{class:"ctrl-btn",title:"重置視角",onClick:E},DR),N("button",{class:Bt(["ctrl-btn",{active:i.value}]),title:"自動旋轉",onClick:A},UR,2)])]))}},FR=Vn(NR,[["__scopeId","data-v-d513558d"]]),Rl=t=>(ci("data-v-ee8d2b31"),t=t(),ui(),t),OR={class:"modal-container"},BR={class:"modal-header"},kR=Rl(()=>N("div",{class:"modal-title"},[N("i",{class:"fas fa-cube"}),N("span",null,"3D 預覽效果")],-1)),zR=Rl(()=>N("i",{class:"fas fa-times"},null,-1)),VR=[zR],HR={class:"modal-body"},GR={class:"modal-footer"},WR=Rl(()=>N("i",{class:"fas fa-arrow-left"},null,-1)),$R={class:"footer-actions"},XR=Rl(()=>N("i",{class:"fas fa-download"},null,-1)),qR={__name:"PreviewModal",props:{visible:{type:Boolean,default:!1},previewImageUrl:{type:String,default:""}},emits:["close","export-png"],setup(t){return(e,n)=>(Ye(),Qu(F0,{to:"body"},[st(Rr,{name:"modal-fade"},{default:Yn(()=>[t.visible?(Ye(),et("div",{key:0,class:"modal-overlay",onClick:n[3]||(n[3]=rm(i=>e.$emit("close"),["self"]))},[N("div",OR,[N("div",BR,[kR,N("button",{class:"close-btn",onClick:n[0]||(n[0]=i=>e.$emit("close"))},VR)]),N("div",HR,[st(FR,{"design-image-url":t.previewImageUrl},null,8,["design-image-url"])]),N("div",GR,[N("button",{class:"btn btn-secondary",onClick:n[1]||(n[1]=i=>e.$emit("close"))},[WR,ii(" 繼續編輯 ")]),N("div",$R,[N("button",{class:"btn btn-primary",onClick:n[2]||(n[2]=i=>e.$emit("export-png"))},[XR,ii(" 下載 PNG ")])])])])])):It("",!0)]),_:1})]))}},YR=Vn(qR,[["__scopeId","data-v-ee8d2b31"]]),Nd=Math.PI/180,or=8,jR=24,vi=20;function xo(t,e,n,i,s){const r=s*Nd,o=Math.cos(r),a=Math.sin(r);return{x:o*(n-t)-a*(i-e)+t,y:a*(n-t)+o*(i-e)+e}}function KR(t,e,n){const i=t.x+t.width/2,s=t.y+t.height/2;return xo(i,s,e,n,-t.rotation)}function ZR(t,e,n){const i=KR(t,e,n);return i.x>=t.x&&i.x<=t.x+t.width&&i.y>=t.y&&i.y<=t.y+t.height}function Hg(t){const{x:e,y:n,width:i,height:s,rotation:r}=t,o=e+i/2,a=n+s/2,l=[{id:"tl",lx:e,ly:n},{id:"tr",lx:e+i,ly:n},{id:"br",lx:e+i,ly:n+s},{id:"bl",lx:e,ly:n+s}],c=xo(o,a,o,n-jR,r);return{corners:l.map(u=>{const f=xo(o,a,u.lx,u.ly,r);return{id:u.id,x:f.x,y:f.y}}),rotate:{id:"rotate",x:c.x,y:c.y}}}function JR(t,e,n,i=or+2){for(const a of t.corners){const l=a.x-e,c=a.y-n;if(l*l+c*c<=i*i)return a.id}const s=t.rotate,r=s.x-e,o=s.y-n;return r*r+o*o<=(i+2)*i?"rotate":null}function sp(t,e){e.font=Gg(t);const n=t.text.split(`
`),i=t.fontSize*1.2;let s=0;return n.forEach(r=>{const o=e.measureText(r).width;o>s&&(s=o)}),{width:Math.max(s,vi),height:i*n.length}}function Gg(t){return[t.italic?"italic":"",t.bold?"bold":"",`${t.fontSize}px`,`"${t.fontFamily}"`].filter(Boolean).join(" ")}function ga(t,e){t.save();const n=e.x+e.width/2,i=e.y+e.height/2;if(t.translate(n,i),t.rotate(e.rotation*Nd),t.globalAlpha=e.opacity??1,e.type==="text"){t.font=Gg(e),t.fillStyle=e.color??"#000000",t.textBaseline="top";const s=e.text.split(`
`),r=e.fontSize*1.2;s.forEach((o,a)=>{t.fillText(o,-e.width/2,-e.height/2+a*r)})}if(e.type==="image"&&e.imageEl){const s=e.brightness??0,r=e.contrast??0;t.filter=`brightness(${100+s}%) contrast(${100+r}%)`,t.drawImage(e.imageEl,-e.width/2,-e.height/2,e.width,e.height),t.filter="none"}t.restore()}function QR(t,e){t.save();const n=e.x+e.width/2,i=e.y+e.height/2;t.translate(n,i),t.rotate(e.rotation*Nd),t.strokeStyle="rgba(60, 130, 191, 0.9)",t.lineWidth=1.5,t.setLineDash([5,3]),t.strokeRect(-e.width/2-2,-e.height/2-2,e.width+4,e.height+4),t.setLineDash([]),t.restore();const s=Hg(e);s.corners.forEach(l=>{t.save(),t.fillStyle="#ffffff",t.strokeStyle="rgb(60, 130, 191)",t.lineWidth=2,t.beginPath(),t.rect(l.x-or/2,l.y-or/2,or,or),t.fill(),t.stroke(),t.restore()});const r=s.rotate;t.save(),t.fillStyle="rgb(60, 130, 191)",t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath(),t.arc(r.x,r.y,or/2+2,0,Math.PI*2),t.fill(),t.stroke(),t.restore();const o=s.corners.find(l=>l.id==="tl"),a=s.corners.find(l=>l.id==="tr");t.save(),t.strokeStyle="rgb(60, 130, 191)",t.lineWidth=1.5,t.beginPath(),t.moveTo((o.x+a.x)/2,(o.y+a.y)/2),t.lineTo(r.x,r.y),t.stroke(),t.restore()}function eP(){const t=Qe(null),e=Qe([]),n=Qe(null),i=Qe(!1),s=Qe(100),r=Qe("transparent"),o=Ct(()=>!0);let a=null,l=1,c=null;const u=ae=>{c=ae},f=ae=>{c&&c(ae)},d=()=>{if(!t.value||!a)return;const ae=t.value.width,se=t.value.height;a.clearRect(0,0,ae,se);for(const C of e.value)ga(a,C);const M=A();M&&QR(a,M)},h=()=>{d()},_=()=>{d()},b=()=>{d()},m=(ae,se=800,M=600)=>{const C=document.getElementById(ae);if(!C){console.warn(`[useCanvas] 找不到 id="${ae}" 的 canvas 元素`);return}t.value=C,C.width=se,C.height=M,a=C.getContext("2d"),Me(C),d()},p=(ae,se)=>{t.value&&(t.value.width=ae,t.value.height=se,d())},E=(ae,se)=>{for(const M of e.value)M.x<0&&(M.x=0),M.y<0&&(M.y=0),M.x+M.width>ae&&(M.x=Math.max(0,ae-M.width)),M.y+M.height>se&&(M.y=Math.max(0,se-M.height));d()},A=()=>e.value.find(ae=>ae.id===n.value)??null,S=ae=>{n.value=ae,f(A()),d()},P=()=>{n.value=null,f(null),d()},R=(ae,se={})=>{if(!a)return;const M={id:l++,type:"text",text:ae,fontFamily:se.fontFamily??"Microsoft JhengHei",fontSize:se.fontSize??40,color:se.color??"#000000",bold:se.bold??!1,italic:se.italic??!1,x:se.x??100,y:se.y??100,width:0,height:0,rotation:0,opacity:1,scaleX:1,scaleY:1},C=sp(M,a);M.width=C.width,M.height=C.height,e.value.push(M),n.value=M.id,f(M),d()},I=ae=>{const se=new FileReader;se.onload=M=>{const C=new Image;C.onload=()=>{var Z,ie;const B=((Z=t.value)==null?void 0:Z.width)??800,W=((ie=t.value)==null?void 0:ie.height)??600;let V=C.naturalWidth,le=C.naturalHeight;const x=V/le;V>B*.7&&(V=B*.7,le=V/x),le>W*.7&&(le=W*.7,V=le*x);const Y={id:l++,type:"image",imageEl:C,x:(B-V)/2,y:(W-le)/2,width:V,height:le,rotation:0,opacity:1,scaleX:1,scaleY:1,brightness:0,contrast:0};e.value.push(Y),n.value=Y.id,f(Y),d()},C.src=M.target.result},se.readAsDataURL(ae)},v=()=>{n.value&&(e.value=e.value.filter(ae=>ae.id!==n.value),P())},T=()=>{e.value=[],P()},j=ae=>{const se=A();if(!se)return;Object.assign(se,ae);const M=["text","fontSize","fontFamily","bold","italic"];if(se.type==="text"&&a&&M.some(C=>C in ae)){const C=sp(se,a);se.width=C.width,se.height=C.height}f(se),d()},L=ae=>{const se=e.value.findIndex(C=>C.id===ae);if(se<0||se===e.value.length-1)return;const[M]=e.value.splice(se,1);e.value.push(M),d()},U=ae=>{const se=e.value.findIndex(C=>C.id===ae);if(se<=0)return;const[M]=e.value.splice(se,1);e.value.unshift(M),d()},k=(ae=2)=>{if(!t.value||!a)return"";const se=t.value.width,M=t.value.height,C=document.createElement("canvas");C.width=se*ae,C.height=M*ae;const B=C.getContext("2d");B.scale(ae,ae);for(const W of e.value)ga(B,W);return C.toDataURL("image/png")},ne=(ae,se,M={width:800,height:600},C=2)=>new Promise(B=>{if(!t.value)return B("");const{width:W,height:V}=M,le=document.createElement("canvas");le.width=W*C,le.height=V*C;const x=le.getContext("2d");x.scale(C,C);const Y=()=>{x.save(),x.translate(se.left,se.top);const Z=se.width/t.value.width,ie=se.height/t.value.height;x.scale(Z,ie);const K=n.value;n.value=null,d();for(const w of e.value)ga(x,w);n.value=K,d(),x.restore(),B(le.toDataURL("image/png"))};if(ae){const Z=new Image;Z.crossOrigin="anonymous",Z.onload=()=>{x.drawImage(Z,0,0,W,V),Y()},Z.onerror=()=>{Y()},Z.src=ae}else Y()}),X=(ae=.92,se=2)=>{if(!t.value||!a)return"";const M=t.value.width,C=t.value.height,B=document.createElement("canvas");B.width=M*se,B.height=C*se;const W=B.getContext("2d");W.scale(se,se),W.fillStyle="#ffffff",W.fillRect(0,0,M,C);for(const V of e.value)ga(W,V);return B.toDataURL("image/jpeg",ae)},G=(ae="png",se="design")=>{const M=ae==="jpg"?X():k();if(!M)return;const C=document.createElement("a");C.href=M,C.download=`${se}.${ae}`,C.click()},F=()=>{if(!t.value)return"";const ae=n.value;n.value=null,d();const se=t.value.toDataURL("image/png");return n.value=ae,d(),se},H=async(ae={})=>{const se=A();if(!se||se.type!=="image")return{success:!1,error:"請先選取一張圖片"};const{tolerance:M=35,feather:C=6,samplingCorners:B=!0}=ae;return new Promise(W=>{try{const V=se.imageEl,le=V.naturalWidth,x=V.naturalHeight,Y=document.createElement("canvas");Y.width=le,Y.height=x;const Z=Y.getContext("2d");Z.drawImage(V,0,0);const ie=Z.getImageData(0,0,le,x),K=ie.data;let w=255,g=255,D=255;if(B){const ee=[],J=(xe,fe)=>{for(let Pe=0;Pe<3;Pe++)for(let ke=0;ke<3;ke++){const he=Math.min(xe+ke,le-1),Se=(Math.min(fe+Pe,x-1)*le+he)*4;K[Se+3]>10&&ee.push([K[Se],K[Se+1],K[Se+2]])}};if(J(0,0),J(le-3,0),J(0,x-3),J(le-3,x-3),ee.length===0)return W({success:!1,error:"此圖片已經是去背圖片"});w=Math.round(ee.reduce((xe,fe)=>xe+fe[0],0)/ee.length),g=Math.round(ee.reduce((xe,fe)=>xe+fe[1],0)/ee.length),D=Math.round(ee.reduce((xe,fe)=>xe+fe[2],0)/ee.length)}for(let ee=0;ee<K.length;ee+=4){if(K[ee+3]===0)continue;const J=K[ee],xe=K[ee+1],fe=K[ee+2],Pe=Math.sqrt((J-w)**2+(xe-g)**2+(fe-D)**2);Pe<=M?K[ee+3]=0:Pe<=M+C&&(K[ee+3]=Math.round((Pe-M)/C*(K[ee+3]??255)))}Z.putImageData(ie,0,0);const q=new Image;q.onload=()=>{se.imageEl=q,d(),W({success:!0})},q.onerror=()=>W({success:!1,error:"圖片重建失敗"}),q.src=Y.toDataURL("image/png")}catch(V){W({success:!1,error:V.message})}})};let oe=null;const me=(ae,se)=>{const M=ae.getBoundingClientRect(),C=ae.width/M.width,B=ae.height/M.height;return{x:(se.clientX-M.left)*C,y:(se.clientY-M.top)*B}},Me=ae=>{ae.addEventListener("mousedown",ot),ae.addEventListener("mousemove",ue),ae.addEventListener("mouseup",pe),ae.addEventListener("mouseleave",pe),ae.addEventListener("touchstart",Ve,{passive:!1}),ae.addEventListener("touchmove",ft,{passive:!1}),ae.addEventListener("touchend",pe)},be=ae=>(ae.preventDefault(),ae.touches[0]),Ve=ae=>ot(be(ae)),ft=ae=>ue(be(ae)),ot=ae=>{const se=me(t.value,ae),M=A();if(M){const B=Hg(M),W=JR(B,se.x,se.y);if(W){oe={type:W==="rotate"?"rotate":"resize",handle:W,startX:se.x,startY:se.y,objId:M.id,origObj:{...M}};return}}let C=null;for(let B=e.value.length-1;B>=0;B--)if(ZR(e.value[B],se.x,se.y)){C=e.value[B];break}C?(n.value!==C.id&&(n.value=C.id,f(C),d()),oe={type:"move",startX:se.x,startY:se.y,objId:C.id,origObj:{...C}}):P()},ue=ae=>{if(!oe)return;const se=me(t.value,ae),M=e.value.find(V=>V.id===oe.objId);if(!M)return;const C=se.x-oe.startX,B=se.y-oe.startY,W=oe.origObj;switch(oe.type){case"move":M.x=W.x+C,M.y=W.y+B,f(M);break;case"rotate":{const V=W.x+W.width/2,le=W.y+W.height/2,x=Math.atan2(se.y-le,se.x-V)*(180/Math.PI)+90;M.rotation=(Math.round(x)%360+360)%360,f(M);break}case"resize":ve(M,W,oe.handle,se);break}d()},pe=()=>{oe=null},ve=(ae,se,M,C)=>{const B=se.x+se.width/2,W=se.y+se.height/2,V=xo(B,W,C.x,C.y,-se.rotation),le={tl:{ax:se.x+se.width,ay:se.y+se.height},tr:{ax:se.x,ay:se.y+se.height},br:{ax:se.x,ay:se.y},bl:{ax:se.x+se.width,ay:se.y}},{ax:x,ay:Y}=le[M];let Z,ie,K,w;switch(M){case"br":K=Math.max(vi,V.x-x),w=Math.max(vi,V.y-Y),Z=x,ie=Y;break;case"bl":K=Math.max(vi,x-V.x),w=Math.max(vi,V.y-Y),Z=x-K,ie=Y;break;case"tr":K=Math.max(vi,V.x-x),w=Math.max(vi,Y-V.y),Z=x,ie=Y-w;break;case"tl":K=Math.max(vi,x-V.x),w=Math.max(vi,Y-V.y),Z=x-K,ie=Y-w;break}const g=xo(B,W,Z+K/2,ie+w/2,se.rotation);ae.width=K,ae.height=w,ae.x=g.x-K/2,ae.y=g.y-w/2,f(ae)};return{canvasEl:t,objects:e,selectedId:n,canvasBackground:r,isTransparent:o,isProductLoaded:i,zoomLevel:s,initCanvas:m,onSelectChange:u,getSelected:A,selectObject:S,clearSelection:P,addText:R,addImage:I,deleteSelected:v,clearCanvas:T,updateSelected:j,bringToFront:L,sendToBack:U,setBackground:h,setTransparent:_,setCanvasBackground:b,resizeCanvas:p,clampObjects:E,exportToPng:k,exportToJpg:X,exportComposite:ne,downloadImage:G,getPreviewUrl:F,removeBackground:H,render:d,registerZoomChangeCallback:()=>{}}}function tP(){const t=Qe(100),e=25,n=300,i=10;return{zoomLevel:t,zoomIn:()=>{t.value=Math.min(n,t.value+i)},zoomOut:()=>{t.value=Math.max(e,t.value-i)},resetView:()=>{t.value=100},fitScreen:l=>{if(!l)return;const c=800,u=600,f=80,d=l.clientWidth-f*2,h=l.clientHeight-f*2,_=Math.min(d/c,h/u,1);t.value=Math.round(_*100)}}}function nP(){const t=Qe(null),e=al({x:0,y:0,width:0,height:0,rotation:0,opacity:100,scaleX:1,scaleY:1,text:"",fontSize:40,fontFamily:"Microsoft JhengHei",color:"#000000",bold:!1,italic:!1,brightness:0,contrast:0}),n=Qe(null);return{selectedObject:t,objectType:n,props:e,syncFromObject:r=>{if(!r){t.value=null,n.value=null;return}t.value=r,n.value=r.type,e.x=Math.round(r.x),e.y=Math.round(r.y),e.width=Math.round(r.width),e.height=Math.round(r.height),e.rotation=r.rotation??0,e.opacity=Math.round((r.opacity??1)*100),e.scaleX=r.scaleX??1,e.scaleY=r.scaleY??1,r.type==="text"&&(e.text=r.text??"",e.fontSize=r.fontSize??40,e.fontFamily=r.fontFamily??"Microsoft JhengHei",e.color=r.color??"#000000",e.bold=r.bold??!1,e.italic=r.italic??!1),r.type==="image"&&(e.brightness=r.brightness??0,e.contrast=r.contrast??0)},clearSelection:()=>{t.value=null,n.value=null}}}function iP(t,e,n){return new Promise((i,s)=>{const r=document.createElement("canvas"),o=r.getContext("2d"),a=new Image;a.crossOrigin="anonymous",a.onload=()=>{r.width=a.naturalWidth,r.height=a.naturalHeight,o.drawImage(a,0,0);const l=new Image;l.onload=()=>{sP(o,l,n),i(r.toDataURL("image/png"))},l.onerror=s,l.src=t},a.onerror=s,a.src=e})}function sP(t,e,{topLeft:n,topRight:i,bottomLeft:s,bottomRight:r}){const a=e.naturalWidth,l=e.naturalHeight;for(let c=0;c<20;c++)for(let u=0;u<20;u++){const f=u/20*a,d=c/20*l,h=a/20,_=l/20,b=c/20,m=(c+1)/20,p=u/20,E=(u+1)/20,A=_a(n,i,s,r,p,b),S=_a(n,i,s,r,E,b),P=_a(n,i,s,r,p,m),R=_a(n,i,s,r,E,m);rp(t,e,f,d,A.x,A.y,f+h,d,S.x,S.y,f,d+_,P.x,P.y),rp(t,e,f+h,d,S.x,S.y,f+h,d+_,R.x,R.y,f,d+_,P.x,P.y)}}function _a(t,e,n,i,s,r){return{x:(1-s)*(1-r)*t.x+s*(1-r)*e.x+(1-s)*r*n.x+s*r*i.x,y:(1-s)*(1-r)*t.y+s*(1-r)*e.y+(1-s)*r*n.y+s*r*i.y}}function rp(t,e,n,i,s,r,o,a,l,c,u,f,d,h){t.save(),t.beginPath(),t.moveTo(s,r),t.lineTo(l,c),t.lineTo(d,h),t.closePath(),t.clip();const _=(o-n)*(f-i)-(u-n)*(a-i);if(Math.abs(_)<1e-8){t.restore();return}const b=((l-s)*(f-i)-(d-s)*(a-i))/_,m=((l-s)*(n-u)+(d-s)*(o-n))/_,p=((c-r)*(f-i)-(h-r)*(a-i))/_,E=((c-r)*(n-u)+(h-r)*(o-n))/_,A=s-b*n-p*i,S=r-m*n-E*i;t.transform(b,m,p,E,A,S),t.drawImage(e,0,0),t.restore()}const Fd=t=>(ci("data-v-975807ff"),t=t(),ui(),t),rP={id:"app"},oP={class:"header"},aP=Fd(()=>N("div",{class:"nav-left"},null,-1)),lP=Fd(()=>N("div",{class:"logo"},[N("img",{src:Uv,alt:"Logo"})],-1)),cP={class:"header-actions"},uP=Fd(()=>N("i",{class:"fas fa-download"},null,-1)),dP={class:"app-body"},fP={class:"d-flex"},hP={class:"sidebar-float-wrap"},pP={class:"canvas-float-wrap"},mP={__name:"App",setup(t){const{onSelectChange:e,initCanvas:n,addText:i,addImage:s,deleteSelected:r,clearCanvas:o,updateSelected:a,exportToPng:l,exportComposite:c,getPreviewUrl:u,resizeCanvas:f,clampObjects:d,removeBackground:h,setBackground:_,setTransparent:b}=eP(),{objectType:m,props:p,syncFromObject:E}=nP();e(x=>E(x));const{zoomLevel:A,zoomIn:S,zoomOut:P,resetView:R,fitScreen:I}=tP(),v=Qe(null);bi(v,x=>{var ie;if(oe.value=!1,!x||x==="pure"){f==null||f(250,Math.round(250*52/48));return}const Y=Is[x];if(!Y)return;const Z=((ie=Y.printArea)==null?void 0:ie.rect)??Y.printArea;Z!=null&&Z.width&&(Z!=null&&Z.height)&&(f==null||f(Z.width,Z.height),d==null||d(Z.width,Z.height))});const T=Qe(null),j=Qe(!1),L=x=>{j.value=x,document.documentElement.setAttribute("data-theme",x?"dark":"light")},U=()=>L(!j.value),k=Qe(null),ne=async()=>{var Y,Z;if(m.value!=="image"){(Y=k.value)==null||Y.finishBgRemove();return}const x=await h({tolerance:35,feather:6});x.success||console.warn("去背失敗：",x.error),(Z=k.value)==null||Z.finishBgRemove()},X=Qe(!1),G=Qe(""),F=Qe(null),H=Qe(null),oe=Qe(!1),me=Ct(()=>{if(!v.value)return null;const x=Is[v.value];return(x==null?void 0:x.baseImage)??null}),Me=async()=>{const x=u();if(F.value&&me.value)try{G.value=await iP(x,me.value,F.value)}catch(Y){console.error("透視變形失敗",Y),G.value=x}else G.value=x;X.value=!0},be=Qe("#ffffff"),Ve=x=>{be.value=x,x==="transparent"?b():_(x)};wo(()=>{const x=window.matchMedia("(prefers-color-scheme: dark)").matches;L(x),window.addEventListener("keydown",le)}),hl(()=>{window.removeEventListener("keydown",le)});const ft=({wrapperEl:x,printArea:Y,perspective:Z})=>{if(H.value=Y,oe.value)f==null||f(Y.width,Y.height),d==null||d(Y.width,Y.height),F.value=Z,setTimeout(()=>I(x),100);else{const ie=()=>{document.getElementById("main-canvas")?(n("main-canvas",Y.width,Y.height),oe.value=!0,F.value=Z,setTimeout(()=>I(x),100)):requestAnimationFrame(ie)};ie()}},ot=x=>i(x.content,x),ue=x=>s(x),pe=x=>{T.value=x},ve=x=>a(x),He=()=>r(),ae=()=>o(),se=()=>S(),M=()=>P(),C=()=>R(),B=()=>{const x=l(2);if(!x)return;const Y=document.createElement("a");Y.href=x,Y.download="design.png",Y.click()},W=async()=>{var w,g;if(!H.value){console.warn("尚未取得印刷區域資訊");return}const x=me.value,Y=(g=(w=k.value)==null?void 0:w.$el)==null?void 0:g.querySelector(".machine-stage"),Z=Y?{width:Y.offsetWidth,height:Y.offsetHeight}:{width:800,height:600},ie=await c(x,H.value,Z,2);if(!ie)return;const K=document.createElement("a");K.href=ie,K.download="design-with-machine.png",K.click()},V=async()=>{B(),W()},le=x=>{var Z;const Y=(Z=document.activeElement)==null?void 0:Z.tagName;["INPUT","TEXTAREA","SELECT"].includes(Y)||((x.key==="Delete"||x.key==="Backspace")&&He(),(x.ctrlKey||x.metaKey)&&(x.key==="+"||x.key==="=")&&(x.preventDefault(),se()),(x.ctrlKey||x.metaKey)&&x.key==="-"&&(x.preventDefault(),M()))};return(x,Y)=>(Ye(),et("div",rP,[N("div",{class:Bt(["app-bg",j.value?"app-bg--dark":"app-bg--light"])},null,2),N("header",oP,[aP,lP,N("div",cP,[N("button",{class:"btn btn-primary",onClick:V},[uP,ii(" 下載 PNG ")]),N("button",{class:"btn btn-secondary theme-toggle",onClick:U},[N("i",{class:Bt(j.value?"fas fa-sun":"fas fa-moon")},null,2)])])]),N("div",dP,[N("div",fP,[N("div",hP,[st(uM,{"scene-background":T.value,"selected-object-type":ar(m),"selected-props":ar(p),"selected-machine":v.value,onAddText:ot,onUploadImage:ue,onChangeBackground:pe,onUpdateObject:ve,onDeleteSelected:He,"onUpdate:selectedMachine":Y[0]||(Y[0]=Z=>v.value=Z)},null,8,["scene-background","selected-object-type","selected-props","selected-machine"])]),N("div",pP,[st($M,{ref_key:"canvasViewRef",ref:k,"zoom-level":ar(A),"selected-machine":v.value,"scene-background":T.value,"selected-object-type":ar(m),"canvas-background":be.value,onCanvasReady:ft,onZoomIn:se,onZoomOut:M,onResetView:C,onClearCanvas:ae,onDeleteSelected:He,onOpenPreview:Me,onRemoveBg:ne,"onUpdate:canvasBackground":Ve,onChangeBackground:Ve},null,8,["zoom-level","selected-machine","scene-background","selected-object-type","canvas-background"])])])]),st(YR,{visible:X.value,"preview-image-url":G.value,onClose:Y[1]||(Y[1]=Z=>X.value=!1),onExportPng:B},null,8,["visible","preview-image-url"])]))}},gP=Vn(mP,[["__scopeId","data-v-975807ff"]]),_P=Iv(),Wg=Rv(gP);Wg.use(_P);Wg.mount("#app");
//# sourceMappingURL=index-MigCd8Bb.js.map
