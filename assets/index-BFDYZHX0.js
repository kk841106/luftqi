(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xu(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const yt={},Qs=[],Tn=()=>{},Cg=()=>!1,za=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bu=t=>t.startsWith("onUpdate:"),Zt=Object.assign,wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rg=Object.prototype.hasOwnProperty,st=(t,e)=>Rg.call(t,e),He=Array.isArray,er=t=>lo(t)==="[object Map]",Va=t=>lo(t)==="[object Set]",Pd=t=>lo(t)==="[object Date]",Ze=t=>typeof t=="function",Ct=t=>typeof t=="string",Yi=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",kh=t=>(xt(t)||Ze(t))&&Ze(t.then)&&Ze(t.catch),zh=Object.prototype.toString,lo=t=>zh.call(t),Pg=t=>lo(t).slice(8,-1),Vh=t=>lo(t)==="[object Object]",yu=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hr=xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lg=/-(\w)/g,cr=Ha(t=>t.replace(Lg,(e,n)=>n?n.toUpperCase():"")),Dg=/\B([A-Z])/g,vr=Ha(t=>t.replace(Dg,"-$1").toLowerCase()),Hh=Ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=Ha(t=>t?`on${Hh(t)}`:""),ji=(t,e)=>!Object.is(t,e),sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},va=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},jr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ig=t=>{const e=Ct(t)?Number(t):NaN;return isNaN(e)?t:e};let Ld;const Gh=()=>Ld||(Ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ct(i)?Og(i):_s(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ct(t)||xt(t))return t}const Ug=/;(?![^(]*\))/g,Ng=/:([^]+)/,Fg=/\/\*[^]*?\*\//g;function Og(t){const e={};return t.replace(Fg,"").split(Ug).forEach(n=>{if(n){const i=n.split(Ng);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zt(t){let e="";if(Ct(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=zt(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kg=xu(Bg);function Wh(t){return!!t||t===""}function zg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ga(t[i],e[i]);return n}function Ga(t,e){if(t===e)return!0;let n=Pd(t),i=Pd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Yi(t),i=Yi(e),n||i)return t===e;if(n=He(t),i=He(e),n||i)return n&&i?zg(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ga(t[o],e[o]))return!1}}return String(t)===String(e)}function Vg(t,e){return t.findIndex(n=>Ga(n,e))}const En=t=>Ct(t)?t:t==null?"":He(t)||xt(t)&&(t.toString===zh||!Ze(t.toString))?JSON.stringify(t,$h,2):String(t),$h=(t,e)=>e&&e.__v_isRef?$h(t,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[gl(i,r)+" =>"]=s,n),{})}:Va(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gl(n))}:Yi(e)?gl(e):xt(e)&&!He(e)&&!Vh(e)?String(e):e,gl=(t,e="")=>{var n;return Yi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nn;class Xh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nn,!e&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nn;try{return Nn=this,e()}finally{Nn=n}}}on(){Nn=this}off(){Nn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hg(t){return new Xh(t)}function Gg(t,e=Nn){e&&e.active&&e.effects.push(t)}function Wg(){return Nn}let ws;class Su{constructor(e,n,i,s){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Gg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,As();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&($g(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Cs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Xi,n=ws;try{return Xi=!0,ws=this,this._runnings++,Dd(this),this.fn()}finally{Id(this),this._runnings--,ws=n,Xi=e}}stop(){var e;this.active&&(Dd(this),Id(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function $g(t){return t.value}function Dd(t){t._trackId++,t._depsLength=0}function Id(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)qh(t.deps[e],t);t.deps.length=t._depsLength}}function qh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Xi=!0,lc=0;const Yh=[];function As(){Yh.push(Xi),Xi=!1}function Cs(){const t=Yh.pop();Xi=t===void 0?!0:t}function Mu(){lc++}function Eu(){for(lc--;!lc&&cc.length;)cc.shift()()}function jh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&qh(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const cc=[];function Kh(t,e,n){Mu();for(const i of t.keys()){let s;i._dirtyLevel<e&&(s??(s=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&cc.push(i.scheduler)))}Eu()}const Zh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},uc=new WeakMap,ys=Symbol(""),dc=Symbol("");function dn(t,e,n){if(Xi&&ws){let i=uc.get(t);i||uc.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Zh(()=>i.delete(n))),jh(ws,s)}}function vi(t,e,n,i,s,r){const o=uc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&He(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Yi(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":He(t)?yu(n)&&a.push(o.get("length")):(a.push(o.get(ys)),er(t)&&a.push(o.get(dc)));break;case"delete":He(t)||(a.push(o.get(ys)),er(t)&&a.push(o.get(dc)));break;case"set":er(t)&&a.push(o.get(ys));break}Mu();for(const l of a)l&&Kh(l,4);Eu()}const Xg=xu("__proto__,__v_isRef,__isVue"),Jh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yi)),Ud=qg();function qg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ct(this);for(let r=0,o=this.length;r<o;r++)dn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ct)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){As(),Mu();const i=ct(this)[e].apply(this,n);return Eu(),Cs(),i}}),t}function Yg(t){const e=ct(this);return dn(e,"has",t),e.hasOwnProperty(t)}class Qh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?a_:ip:r?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!s){if(o&&st(Ud,n))return Reflect.get(Ud,n,i);if(n==="hasOwnProperty")return Yg}const a=Reflect.get(e,n,i);return(Yi(n)?Jh.has(n):Xg(n))||(s||dn(e,"get",n),r)?a:fn(a)?o&&yu(n)?a:a.value:xt(a)?s?sp(a):$a(a):a}}class ep extends Qh{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ur(r);if(!xa(i)&&!ur(i)&&(r=ct(r),i=ct(i)),!He(e)&&fn(r)&&!fn(i))return l?!1:(r.value=i,!0)}const o=He(e)&&yu(n)?Number(n)<e.length:st(e,n),a=Reflect.set(e,n,i,s);return e===ct(s)&&(o?ji(i,r)&&vi(e,"set",n,i):vi(e,"add",n,i)),a}deleteProperty(e,n){const i=st(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&vi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Yi(n)||!Jh.has(n))&&dn(e,"has",n),i}ownKeys(e){return dn(e,"iterate",He(e)?"length":ys),Reflect.ownKeys(e)}}class jg extends Qh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kg=new ep,Zg=new jg,Jg=new ep(!0),Tu=t=>t,Wa=t=>Reflect.getPrototypeOf(t);function So(t,e,n=!1,i=!1){t=t.__v_raw;const s=ct(t),r=ct(e);n||(ji(e,r)&&dn(s,"get",e),dn(s,"get",r));const{has:o}=Wa(s),a=i?Tu:n?Pu:Kr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Mo(t,e=!1){const n=this.__v_raw,i=ct(n),s=ct(t);return e||(ji(t,s)&&dn(i,"has",t),dn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Eo(t,e=!1){return t=t.__v_raw,!e&&dn(ct(t),"iterate",ys),Reflect.get(t,"size",t)}function Nd(t){t=ct(t);const e=ct(this);return Wa(e).has.call(e,t)||(e.add(t),vi(e,"add",t,t)),this}function Fd(t,e){e=ct(e);const n=ct(this),{has:i,get:s}=Wa(n);let r=i.call(n,t);r||(t=ct(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ji(e,o)&&vi(n,"set",t,e):vi(n,"add",t,e),this}function Od(t){const e=ct(this),{has:n,get:i}=Wa(e);let s=n.call(e,t);s||(t=ct(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&vi(e,"delete",t,void 0),r}function Bd(){const t=ct(this),e=t.size!==0,n=t.clear();return e&&vi(t,"clear",void 0,void 0),n}function To(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ct(o),l=e?Tu:t?Pu:Kr;return!t&&dn(a,"iterate",ys),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Ao(t,e,n){return function(...i){const s=this.__v_raw,r=ct(s),o=er(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Tu:e?Pu:Kr;return!e&&dn(r,"iterate",l?dc:ys),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ai(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qg(){const t={get(r){return So(this,r)},get size(){return Eo(this)},has:Mo,add:Nd,set:Fd,delete:Od,clear:Bd,forEach:To(!1,!1)},e={get(r){return So(this,r,!1,!0)},get size(){return Eo(this)},has:Mo,add:Nd,set:Fd,delete:Od,clear:Bd,forEach:To(!1,!0)},n={get(r){return So(this,r,!0)},get size(){return Eo(this,!0)},has(r){return Mo.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:To(!0,!1)},i={get(r){return So(this,r,!0,!0)},get size(){return Eo(this,!0)},has(r){return Mo.call(this,r,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:To(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ao(r,!1,!1),n[r]=Ao(r,!0,!1),e[r]=Ao(r,!1,!0),i[r]=Ao(r,!0,!0)}),[t,n,e,i]}const[e_,t_,n_,i_]=Qg();function Au(t,e){const n=e?t?i_:n_:t?t_:e_;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(st(n,s)&&s in i?n:i,s,r)}const s_={get:Au(!1,!1)},r_={get:Au(!1,!0)},o_={get:Au(!0,!1)},tp=new WeakMap,np=new WeakMap,ip=new WeakMap,a_=new WeakMap;function l_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c_(t){return t.__v_skip||!Object.isExtensible(t)?0:l_(Pg(t))}function $a(t){return ur(t)?t:Cu(t,!1,Kg,s_,tp)}function u_(t){return Cu(t,!1,Jg,r_,np)}function sp(t){return Cu(t,!0,Zg,o_,ip)}function Cu(t,e,n,i,s){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=c_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function tr(t){return ur(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function xa(t){return!!(t&&t.__v_isShallow)}function rp(t){return tr(t)||ur(t)}function ct(t){const e=t&&t.__v_raw;return e?ct(e):t}function Ru(t){return Object.isExtensible(t)&&va(t,"__v_skip",!0),t}const Kr=t=>xt(t)?$a(t):t,Pu=t=>xt(t)?sp(t):t;class op{constructor(e,n,i,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Su(()=>e(this._value),()=>ra(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ct(this);return(!e._cacheable||e.effect.dirty)&&ji(e._value,e._value=e.effect.run())&&ra(e,4),ap(e),e.effect._dirtyLevel>=2&&ra(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function d_(t,e,n=!1){let i,s;const r=Ze(t);return r?(i=t,s=Tn):(i=t.get,s=t.set),new op(i,s,r||!s,n)}function ap(t){var e;Xi&&ws&&(t=ct(t),jh(ws,(e=t.dep)!=null?e:t.dep=Zh(()=>t.dep=void 0,t instanceof op?t:void 0)))}function ra(t,e=4,n){t=ct(t);const i=t.dep;i&&Kh(i,e)}function fn(t){return!!(t&&t.__v_isRef===!0)}function ft(t){return f_(t,!1)}function f_(t,e){return fn(t)?t:new h_(t,e)}class h_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ct(e),this._value=n?e:Kr(e)}get value(){return ap(this),this._value}set value(e){const n=this.__v_isShallow||xa(e)||ur(e);e=n?e:ct(e),ji(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Kr(e),ra(this,4))}}function Gr(t){return fn(t)?t.value:t}const p_={get:(t,e,n)=>Gr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return fn(s)&&!fn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function lp(t){return tr(t)?t:new Proxy(t,p_)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,i){try{return i?t(...i):t()}catch(s){Xa(s,e,n)}}function An(t,e,n,i){if(Ze(t)){const r=qi(t,e,n,i);return r&&kh(r)&&r.catch(o=>{Xa(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(An(t[r],e,n,i));return s}function Xa(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){qi(l,null,10,[t,o,a]);return}}m_(t,n,s,i)}function m_(t,e,n,i=!0){console.error(t)}let Zr=!1,fc=!1;const qt=[];let jn=0;const nr=[];let Fi=null,fs=0;const cp=Promise.resolve();let Lu=null;function up(t){const e=Lu||cp;return t?e.then(this?t.bind(this):t):e}function g_(t){let e=jn+1,n=qt.length;for(;e<n;){const i=e+n>>>1,s=qt[i],r=Jr(s);r<t||r===t&&s.pre?e=i+1:n=i}return e}function Du(t){(!qt.length||!qt.includes(t,Zr&&t.allowRecurse?jn+1:jn))&&(t.id==null?qt.push(t):qt.splice(g_(t.id),0,t),dp())}function dp(){!Zr&&!fc&&(fc=!0,Lu=cp.then(hp))}function __(t){const e=qt.indexOf(t);e>jn&&qt.splice(e,1)}function v_(t){He(t)?nr.push(...t):(!Fi||!Fi.includes(t,t.allowRecurse?fs+1:fs))&&nr.push(t),dp()}function kd(t,e,n=Zr?jn+1:0){for(;n<qt.length;n++){const i=qt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;qt.splice(n,1),n--,i()}}}function fp(t){if(nr.length){const e=[...new Set(nr)].sort((n,i)=>Jr(n)-Jr(i));if(nr.length=0,Fi){Fi.push(...e);return}for(Fi=e,fs=0;fs<Fi.length;fs++)Fi[fs]();Fi=null,fs=0}}const Jr=t=>t.id==null?1/0:t.id,x_=(t,e)=>{const n=Jr(t)-Jr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hp(t){fc=!1,Zr=!0,qt.sort(x_);try{for(jn=0;jn<qt.length;jn++){const e=qt[jn];e&&e.active!==!1&&qi(e,null,14)}}finally{jn=0,qt.length=0,fp(),Zr=!1,Lu=null,(qt.length||nr.length)&&hp()}}function b_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||yt;d&&(s=n.map(p=>Ct(p)?p.trim():p)),f&&(s=n.map(jr))}let a,l=i[a=ml(e)]||i[a=ml(cr(e))];!l&&r&&(l=i[a=ml(vr(e))]),l&&An(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,An(c,t,6,s)}}function pp(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ze(t)){const l=c=>{const u=pp(c,e,!0);u&&(a=!0,Zt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(xt(t)&&i.set(t,null),null):(He(r)?r.forEach(l=>o[l]=null):Zt(o,r),xt(t)&&i.set(t,o),o)}function qa(t,e){return!t||!za(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(t,e[0].toLowerCase()+e.slice(1))||st(t,vr(e))||st(t,e))}let Ft=null,Ya=null;function ba(t){const e=Ft;return Ft=t,Ya=t&&t.type.__scopeId||null,e}function ai(t){Ya=t}function li(){Ya=null}function Xn(t,e=Ft,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Qd(-1);const r=ba(e);let o;try{o=t(...s)}finally{ba(r),i._d&&Qd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zd(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:_,inheritAttrs:x}=t;let m,h;const E=ba(t);try{if(n.shapeFlag&4){const w=s||i,C=w;m=qn(u.call(C,w,f,r,p,d,_)),h=l}else{const w=e;m=qn(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),h=e.props?l:w_(l)}}catch(w){Yr.length=0,Xa(w,t,1),m=rt(Cn)}let M=m;if(h&&x!==!1){const w=Object.keys(h),{shapeFlag:C}=M;w.length&&C&7&&(o&&w.some(bu)&&(h=y_(h,o)),M=Ki(M,h))}return n.dirs&&(M=Ki(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),m=M,ba(E),m}const w_=t=>{let e;for(const n in t)(n==="class"||n==="style"||za(n))&&((e||(e={}))[n]=t[n]);return e},y_=(t,e)=>{const n={};for(const i in t)(!bu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function S_(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!qa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vd(i,o,c):!0:!!o;return!1}function Vd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!qa(n,r))return!0}return!1}function M_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const E_=Symbol.for("v-ndc"),T_=t=>t.__isSuspense;function A_(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):v_(t)}const C_=Symbol.for("v-scx"),R_=()=>oa(C_),Co={};function Ss(t,e,n){return mp(t,e,n)}function mp(t,e,{immediate:n,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=yt){if(e&&r){const A=e;e=(...D)=>{A(...D),C()}}const l=Yt,c=A=>i===!0?A:vs(A,i===!1?1:void 0);let u,f=!1,d=!1;if(fn(t)?(u=()=>t.value,f=xa(t)):tr(t)?(u=()=>c(t),f=!0):He(t)?(d=!0,f=t.some(A=>tr(A)||xa(A)),u=()=>t.map(A=>{if(fn(A))return A.value;if(tr(A))return c(A);if(Ze(A))return qi(A,l,2)})):Ze(t)?e?u=()=>qi(t,l,2):u=()=>(p&&p(),An(t,l,3,[_])):u=Tn,e&&i){const A=u;u=()=>vs(A())}let p,_=A=>{p=M.onStop=()=>{qi(A,l,4),p=M.onStop=void 0}},x;if(Qa)if(_=Tn,e?n&&An(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const A=R_();x=A.__watcherHandles||(A.__watcherHandles=[])}else return Tn;let m=d?new Array(t.length).fill(Co):Co;const h=()=>{if(!(!M.active||!M.dirty))if(e){const A=M.run();(i||f||(d?A.some((D,v)=>ji(D,m[v])):ji(A,m)))&&(p&&p(),An(e,l,3,[A,m===Co?void 0:d&&m[0]===Co?[]:m,_]),m=A)}else M.run()};h.allowRecurse=!!e;let E;s==="sync"?E=h:s==="post"?E=()=>ln(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),E=()=>Du(h));const M=new Su(u,Tn,E),w=Wg(),C=()=>{M.stop(),w&&wu(w.effects,M)};return e?n?h():m=M.run():s==="post"?ln(M.run.bind(M),l&&l.suspense):M.run(),x&&x.push(C),C}function P_(t,e,n){const i=this.proxy,s=Ct(t)?t.includes(".")?gp(i,t):()=>i[t]:t.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,n=e);const o=uo(this),a=mp(s,r.bind(i),n);return o(),a}function gp(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function vs(t,e,n=0,i){if(!xt(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),fn(t))vs(t.value,e,n,i);else if(He(t))for(let s=0;s<t.length;s++)vs(t[s],e,n,i);else if(Va(t)||er(t))t.forEach(s=>{vs(s,e,n,i)});else if(Vh(t))for(const s in t)vs(t[s],e,n,i);return t}function Zs(t,e){if(Ft===null)return t;const n=el(Ft)||Ft.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&vs(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ts(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(As(),An(l,n,8,[t.el,a,t,e]),Cs())}}const Oi=Symbol("_leaveCb"),Ro=Symbol("_enterCb");function L_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return co(()=>{t.isMounted=!0}),Iu(()=>{t.isUnmounting=!0}),t}const yn=[Function,Array],_p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},D_={name:"BaseTransition",props:_p,setup(t,{slots:e}){const n=b0(),i=L_();return()=>{const s=e.default&&xp(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Cn){r=d;break}}const o=ct(t),{mode:a}=o;if(i.isLeaving)return _l(r);const l=Hd(r);if(!l)return _l(r);const c=hc(l,o,i,n);pc(l,c);const u=n.subTree,f=u&&Hd(u);if(f&&f.type!==Cn&&!hs(l,f)){const d=hc(f,o,i,n);if(pc(f,d),a==="out-in")return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},_l(r);a==="in-out"&&l.type!==Cn&&(d.delayLeave=(p,_,x)=>{const m=vp(i,f);m[String(f.key)]=f,p[Oi]=()=>{_(),p[Oi]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return r}}},I_=D_;function vp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function hc(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:x,onAppear:m,onAfterAppear:h,onAppearCancelled:E}=e,M=String(t.key),w=vp(n,t),C=(v,S)=>{v&&An(v,i,9,S)},A=(v,S)=>{const K=S[1];C(v,S),He(v)?v.every(P=>P.length<=1)&&K():v.length<=1&&K()},D={mode:r,persisted:o,beforeEnter(v){let S=a;if(!n.isMounted)if(s)S=x||a;else return;v[Oi]&&v[Oi](!0);const K=w[M];K&&hs(t,K)&&K.el[Oi]&&K.el[Oi](),C(S,[v])},enter(v){let S=l,K=c,P=u;if(!n.isMounted)if(s)S=m||l,K=h||c,P=E||u;else return;let U=!1;const H=v[Ro]=J=>{U||(U=!0,J?C(P,[v]):C(K,[v]),D.delayedLeave&&D.delayedLeave(),v[Ro]=void 0)};S?A(S,[v,H]):H()},leave(v,S){const K=String(t.key);if(v[Ro]&&v[Ro](!0),n.isUnmounting)return S();C(f,[v]);let P=!1;const U=v[Oi]=H=>{P||(P=!0,S(),H?C(_,[v]):C(p,[v]),v[Oi]=void 0,w[K]===t&&delete w[K])};w[K]=t,d?A(d,[v,U]):U()},clone(v){return hc(v,e,n,i)}};return D}function _l(t){if(ja(t))return t=Ki(t),t.children=null,t}function Hd(t){return ja(t)?t.children?t.children[0]:void 0:t}function pc(t,e){t.shapeFlag&6&&t.component?pc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xp(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Xt?(o.patchFlag&128&&s++,i=i.concat(xp(o.children,e,a))):(e||o.type!==Cn)&&i.push(a!=null?Ki(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const Wr=t=>!!t.type.__asyncLoader,ja=t=>t.type.__isKeepAlive;function U_(t,e){bp(t,"a",e)}function N_(t,e){bp(t,"da",e)}function bp(t,e,n=Yt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ka(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ja(s.parent.vnode)&&F_(i,e,n,s),s=s.parent}}function F_(t,e,n,i){const s=Ka(e,t,i,!0);Uu(()=>{wu(i[e],s)},n)}function Ka(t,e,n=Yt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;As();const a=uo(n),l=An(e,n,t,o);return a(),Cs(),l});return i?s.unshift(r):s.push(r),r}}const Mi=t=>(e,n=Yt)=>(!Qa||t==="sp")&&Ka(t,(...i)=>e(...i),n),O_=Mi("bm"),co=Mi("m"),B_=Mi("bu"),k_=Mi("u"),Iu=Mi("bum"),Uu=Mi("um"),z_=Mi("sp"),V_=Mi("rtg"),H_=Mi("rtc");function G_(t,e=Yt){Ka("ec",t,e)}function wp(t,e,n,i){let s;const r=n;if(He(t)||Ct(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r)}else if(xt(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r)}}else s=[];return s}function W_(t,e,n={},i,s){if(Ft.isCE||Ft.parent&&Wr(Ft.parent)&&Ft.parent.isCE)return rt("slot",n,i);let r=t[e];r&&r._c&&(r._d=!1),tt();const o=r&&yp(r(n)),a=Ou(Xt,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return r&&r._c&&(r._d=!0),a}function yp(t){return t.some(e=>ya(e)?!(e.type===Cn||e.type===Xt&&!yp(e.children)):!0)?t:null}const mc=t=>t?Np(t)?el(t)||t.proxy:mc(t.parent):null,$r=Zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mc(t.parent),$root:t=>mc(t.root),$emit:t=>t.emit,$options:t=>Mp(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Du(t.update)}),$nextTick:t=>t.n||(t.n=up.bind(t.proxy)),$watch:t=>P_.bind(t)}),vl=(t,e)=>t!==yt&&!t.__isScriptSetup&&st(t,e),$_={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(vl(i,e))return o[e]=1,i[e];if(s!==yt&&st(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&st(c,e))return o[e]=3,r[e];if(n!==yt&&st(n,e))return o[e]=4,n[e];gc&&(o[e]=0)}}const u=$r[e];let f,d;if(u)return e==="$attrs"&&dn(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==yt&&st(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,st(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return vl(s,e)?(s[e]=n,!0):i!==yt&&st(i,e)?(i[e]=n,!0):st(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==yt&&st(t,o)||vl(e,o)||(a=r[0])&&st(a,o)||st(i,o)||st($r,o)||st(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:st(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gd(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gc=!0;function X_(t){const e=Mp(t),n=t.proxy,i=t.ctx;gc=!1,e.beforeCreate&&Wd(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:E,destroyed:M,unmounted:w,render:C,renderTracked:A,renderTriggered:D,errorCaptured:v,serverPrefetch:S,expose:K,inheritAttrs:P,components:U,directives:H,filters:J}=e;if(c&&q_(c,i,null),o)for(const O in o){const z=o[O];Ze(z)&&(i[O]=z.bind(n))}if(s){const O=s.call(n,n);xt(O)&&(t.data=$a(O))}if(gc=!0,r)for(const O in r){const z=r[O],V=Ze(z)?z.bind(n,n):Ze(z.get)?z.get.bind(n,n):Tn,ne=!Ze(z)&&Ze(z.set)?z.set.bind(n):Tn,ue=nn({get:V,set:ne});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>ue.value,set:pe=>ue.value=pe})}if(a)for(const O in a)Sp(a[O],i,n,O);if(l){const O=Ze(l)?l.call(n):l;Reflect.ownKeys(O).forEach(z=>{Q_(z,O[z])})}u&&Wd(u,t,"c");function W(O,z){He(z)?z.forEach(V=>O(V.bind(n))):z&&O(z.bind(n))}if(W(O_,f),W(co,d),W(B_,p),W(k_,_),W(U_,x),W(N_,m),W(G_,v),W(H_,A),W(V_,D),W(Iu,E),W(Uu,w),W(z_,S),He(K))if(K.length){const O=t.exposed||(t.exposed={});K.forEach(z=>{Object.defineProperty(O,z,{get:()=>n[z],set:V=>n[z]=V})})}else t.exposed||(t.exposed={});C&&t.render===Tn&&(t.render=C),P!=null&&(t.inheritAttrs=P),U&&(t.components=U),H&&(t.directives=H)}function q_(t,e,n=Tn){He(t)&&(t=_c(t));for(const i in t){const s=t[i];let r;xt(s)?"default"in s?r=oa(s.from||i,s.default,!0):r=oa(s.from||i):r=oa(s),fn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Wd(t,e,n){An(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sp(t,e,n,i){const s=i.includes(".")?gp(n,i):()=>n[i];if(Ct(t)){const r=e[t];Ze(r)&&Ss(s,r)}else if(Ze(t))Ss(s,t.bind(n));else if(xt(t))if(He(t))t.forEach(r=>Sp(r,e,n,i));else{const r=Ze(t.handler)?t.handler.bind(n):e[t.handler];Ze(r)&&Ss(s,r,t)}}function Mp(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>wa(l,c,o,!0)),wa(l,e,o)),xt(e)&&r.set(e,l),l}function wa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&wa(t,r,n,!0),s&&s.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Y_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Y_={data:$d,props:Xd,emits:Xd,methods:kr,computed:kr,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:kr,directives:kr,watch:K_,provide:$d,inject:j_};function $d(t,e){return e?t?function(){return Zt(Ze(t)?t.call(this,this):t,Ze(e)?e.call(this,this):e)}:e:t}function j_(t,e){return kr(_c(t),_c(e))}function _c(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function kr(t,e){return t?Zt(Object.create(null),t,e):e}function Xd(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Zt(Object.create(null),Gd(t),Gd(e??{})):e}function K_(t,e){if(!t)return e;if(!e)return t;const n=Zt(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function Ep(){return{app:null,config:{isNativeTag:Cg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Z_=0;function J_(t,e){return function(i,s=null){Ze(i)||(i=Zt({},i)),s!=null&&!xt(s)&&(s=null);const r=Ep(),o=new WeakSet;let a=!1;const l=r.app={_uid:Z_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:A0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ze(c.install)?(o.add(c),c.install(l,...u)):Ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=rt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,el(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Xr;Xr=l;try{return c()}finally{Xr=u}}};return l}}let Xr=null;function Q_(t,e){if(Yt){let n=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===n&&(n=Yt.provides=Object.create(i)),n[t]=e}}function oa(t,e,n=!1){const i=Yt||Ft;if(i||Xr){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Xr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ze(e)?e.call(i&&i.proxy):e}}function e0(t,e,n,i=!1){const s={},r={};va(r,Ja,1),t.propsDefaults=Object.create(null),Tp(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:u_(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function t0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ct(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(qa(t.emitsOptions,d))continue;const p=e[d];if(l)if(st(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=cr(d);s[_]=vc(l,a,_,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Tp(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!st(e,f)&&((u=vr(f))===f||!st(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=vc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!st(e,f))&&(delete r[f],c=!0)}c&&vi(t,"set","$attrs")}function Tp(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hr(l))continue;const c=e[l];let u;s&&st(s,u=cr(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:qa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(n),c=a||yt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=vc(s,l,f,c[f],t,!st(c,f))}}return o}function vc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=uo(s);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vr(n))&&(i=!0))}return i}function Ap(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ze(t)){const u=f=>{l=!0;const[d,p]=Ap(f,e,!0);Zt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return xt(t)&&i.set(t,Qs),Qs;if(He(r))for(let u=0;u<r.length;u++){const f=cr(r[u]);qd(f)&&(o[f]=yt)}else if(r)for(const u in r){const f=cr(u);if(qd(f)){const d=r[u],p=o[f]=He(d)||Ze(d)?{type:d}:Zt({},d);if(p){const _=Kd(Boolean,p.type),x=Kd(String,p.type);p[0]=_>-1,p[1]=x<0||_<x,(_>-1||st(p,"default"))&&a.push(f)}}}const c=[o,a];return xt(t)&&i.set(t,c),c}function qd(t){return t[0]!=="$"&&!Hr(t)}function Yd(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function jd(t,e){return Yd(t)===Yd(e)}function Kd(t,e){return He(e)?e.findIndex(n=>jd(n,t)):Ze(e)&&jd(e,t)?0:-1}const Cp=t=>t[0]==="_"||t==="$stable",Nu=t=>He(t)?t.map(qn):[qn(t)],n0=(t,e,n)=>{if(e._n)return e;const i=Xn((...s)=>Nu(e(...s)),n);return i._c=!1,i},Rp=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Cp(s))continue;const r=t[s];if(Ze(r))e[s]=n0(s,r,i);else if(r!=null){const o=Nu(r);e[s]=()=>o}}},Pp=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},i0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ct(e),va(e,"_",n)):Rp(e,t.slots={})}else t.slots={},e&&Pp(t,e);va(t.slots,Ja,1)},s0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Zt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Rp(e,s)),o=e}else e&&(Pp(t,e),o={default:1});if(r)for(const a in s)!Cp(a)&&o[a]==null&&delete s[a]};function xc(t,e,n,i,s=!1){if(He(t)){t.forEach((d,p)=>xc(d,e&&(He(e)?e[p]:e),n,i,s));return}if(Wr(i)&&!s)return;const r=i.shapeFlag&4?el(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,st(f,c)&&(f[c]=null)):fn(c)&&(c.value=null)),Ze(l))qi(l,a,12,[o,u]);else{const d=Ct(l),p=fn(l);if(d||p){const _=()=>{if(t.f){const x=d?st(f,l)?f[l]:u[l]:l.value;s?He(x)&&wu(x,r):He(x)?x.includes(r)||x.push(r):d?(u[l]=[r],st(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,st(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ln(_,n)):_()}}}const ln=A_;function r0(t){return o0(t)}function o0(t,e){const n=Gh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Tn,insertStaticContent:_}=t,x=(R,I,q,ie=null,ee=null,he=null,T=void 0,fe=null,de=!!I.dynamicChildren)=>{if(R===I)return;R&&!hs(R,I)&&(ie=le(R),pe(R,ee,he,!0),R=null),I.patchFlag===-2&&(de=!1,I.dynamicChildren=null);const{type:ae,ref:re,shapeFlag:y}=I;switch(ae){case Za:m(R,I,q,ie);break;case Cn:h(R,I,q,ie);break;case aa:R==null&&E(I,q,ie,T);break;case Xt:U(R,I,q,ie,ee,he,T,fe,de);break;default:y&1?C(R,I,q,ie,ee,he,T,fe,de):y&6?H(R,I,q,ie,ee,he,T,fe,de):(y&64||y&128)&&ae.process(R,I,q,ie,ee,he,T,fe,de,Le)}re!=null&&ee&&xc(re,R&&R.ref,he,I||R,!I)},m=(R,I,q,ie)=>{if(R==null)i(I.el=a(I.children),q,ie);else{const ee=I.el=R.el;I.children!==R.children&&c(ee,I.children)}},h=(R,I,q,ie)=>{R==null?i(I.el=l(I.children||""),q,ie):I.el=R.el},E=(R,I,q,ie)=>{[R.el,R.anchor]=_(R.children,I,q,ie,R.el,R.anchor)},M=({el:R,anchor:I},q,ie)=>{let ee;for(;R&&R!==I;)ee=d(R),i(R,q,ie),R=ee;i(I,q,ie)},w=({el:R,anchor:I})=>{let q;for(;R&&R!==I;)q=d(R),s(R),R=q;s(I)},C=(R,I,q,ie,ee,he,T,fe,de)=>{I.type==="svg"?T="svg":I.type==="math"&&(T="mathml"),R==null?A(I,q,ie,ee,he,T,fe,de):S(R,I,ee,he,T,fe,de)},A=(R,I,q,ie,ee,he,T,fe)=>{let de,ae;const{props:re,shapeFlag:y,transition:g,dirs:L}=R;if(de=R.el=o(R.type,he,re&&re.is,re),y&8?u(de,R.children):y&16&&v(R.children,de,null,ie,ee,xl(R,he),T,fe),L&&ts(R,null,ie,"created"),D(de,R,R.scopeId,T,ie),re){for(const te in re)te!=="value"&&!Hr(te)&&r(de,te,null,re[te],he,R.children,ie,ee,B);"value"in re&&r(de,"value",null,re.value,he),(ae=re.onVnodeBeforeMount)&&Hn(ae,ie,R)}L&&ts(R,null,ie,"beforeMount");const $=a0(ee,g);$&&g.beforeEnter(de),i(de,I,q),((ae=re&&re.onVnodeMounted)||$||L)&&ln(()=>{ae&&Hn(ae,ie,R),$&&g.enter(de),L&&ts(R,null,ie,"mounted")},ee)},D=(R,I,q,ie,ee)=>{if(q&&p(R,q),ie)for(let he=0;he<ie.length;he++)p(R,ie[he]);if(ee){let he=ee.subTree;if(I===he){const T=ee.vnode;D(R,T,T.scopeId,T.slotScopeIds,ee.parent)}}},v=(R,I,q,ie,ee,he,T,fe,de=0)=>{for(let ae=de;ae<R.length;ae++){const re=R[ae]=fe?Bi(R[ae]):qn(R[ae]);x(null,re,I,q,ie,ee,he,T,fe)}},S=(R,I,q,ie,ee,he,T)=>{const fe=I.el=R.el;let{patchFlag:de,dynamicChildren:ae,dirs:re}=I;de|=R.patchFlag&16;const y=R.props||yt,g=I.props||yt;let L;if(q&&ns(q,!1),(L=g.onVnodeBeforeUpdate)&&Hn(L,q,I,R),re&&ts(I,R,q,"beforeUpdate"),q&&ns(q,!0),ae?K(R.dynamicChildren,ae,fe,q,ie,xl(I,ee),he):T||z(R,I,fe,null,q,ie,xl(I,ee),he,!1),de>0){if(de&16)P(fe,I,y,g,q,ie,ee);else if(de&2&&y.class!==g.class&&r(fe,"class",null,g.class,ee),de&4&&r(fe,"style",y.style,g.style,ee),de&8){const $=I.dynamicProps;for(let te=0;te<$.length;te++){const Z=$[te],we=y[Z],ge=g[Z];(ge!==we||Z==="value")&&r(fe,Z,we,ge,ee,R.children,q,ie,B)}}de&1&&R.children!==I.children&&u(fe,I.children)}else!T&&ae==null&&P(fe,I,y,g,q,ie,ee);((L=g.onVnodeUpdated)||re)&&ln(()=>{L&&Hn(L,q,I,R),re&&ts(I,R,q,"updated")},ie)},K=(R,I,q,ie,ee,he,T)=>{for(let fe=0;fe<I.length;fe++){const de=R[fe],ae=I[fe],re=de.el&&(de.type===Xt||!hs(de,ae)||de.shapeFlag&70)?f(de.el):q;x(de,ae,re,null,ie,ee,he,T,!0)}},P=(R,I,q,ie,ee,he,T)=>{if(q!==ie){if(q!==yt)for(const fe in q)!Hr(fe)&&!(fe in ie)&&r(R,fe,q[fe],null,T,I.children,ee,he,B);for(const fe in ie){if(Hr(fe))continue;const de=ie[fe],ae=q[fe];de!==ae&&fe!=="value"&&r(R,fe,ae,de,T,I.children,ee,he,B)}"value"in ie&&r(R,"value",q.value,ie.value,T)}},U=(R,I,q,ie,ee,he,T,fe,de)=>{const ae=I.el=R?R.el:a(""),re=I.anchor=R?R.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:L}=I;L&&(fe=fe?fe.concat(L):L),R==null?(i(ae,q,ie),i(re,q,ie),v(I.children||[],q,re,ee,he,T,fe,de)):y>0&&y&64&&g&&R.dynamicChildren?(K(R.dynamicChildren,g,q,ee,he,T,fe),(I.key!=null||ee&&I===ee.subTree)&&Fu(R,I,!0)):z(R,I,q,re,ee,he,T,fe,de)},H=(R,I,q,ie,ee,he,T,fe,de)=>{I.slotScopeIds=fe,R==null?I.shapeFlag&512?ee.ctx.activate(I,q,ie,T,de):J(I,q,ie,ee,he,T,de):X(R,I,de)},J=(R,I,q,ie,ee,he,T)=>{const fe=R.component=x0(R,ie,ee);if(ja(R)&&(fe.ctx.renderer=Le),w0(fe),fe.asyncDep){if(ee&&ee.registerDep(fe,W),!R.el){const de=fe.subTree=rt(Cn);h(null,de,I,q)}}else W(fe,R,I,q,ee,he,T)},X=(R,I,q)=>{const ie=I.component=R.component;if(S_(R,I,q))if(ie.asyncDep&&!ie.asyncResolved){O(ie,I,q);return}else ie.next=I,__(ie.update),ie.effect.dirty=!0,ie.update();else I.el=R.el,ie.vnode=I},W=(R,I,q,ie,ee,he,T)=>{const fe=()=>{if(R.isMounted){let{next:re,bu:y,u:g,parent:L,vnode:$}=R;{const De=Lp(R);if(De){re&&(re.el=$.el,O(R,re,T)),De.asyncDep.then(()=>{R.isUnmounted||fe()});return}}let te=re,Z;ns(R,!1),re?(re.el=$.el,O(R,re,T)):re=$,y&&sa(y),(Z=re.props&&re.props.onVnodeBeforeUpdate)&&Hn(Z,L,re,$),ns(R,!0);const we=zd(R),ge=R.subTree;R.subTree=we,x(ge,we,f(ge.el),le(ge),R,ee,he),re.el=we.el,te===null&&M_(R,we.el),g&&ln(g,ee),(Z=re.props&&re.props.onVnodeUpdated)&&ln(()=>Hn(Z,L,re,$),ee)}else{let re;const{el:y,props:g}=I,{bm:L,m:$,parent:te}=R,Z=Wr(I);ns(R,!1),L&&sa(L),!Z&&(re=g&&g.onVnodeBeforeMount)&&Hn(re,te,I),ns(R,!0);{const we=R.subTree=zd(R);x(null,we,q,ie,R,ee,he),I.el=we.el}if($&&ln($,ee),!Z&&(re=g&&g.onVnodeMounted)){const we=I;ln(()=>Hn(re,te,we),ee)}(I.shapeFlag&256||te&&Wr(te.vnode)&&te.vnode.shapeFlag&256)&&R.a&&ln(R.a,ee),R.isMounted=!0,I=q=ie=null}},de=R.effect=new Su(fe,Tn,()=>Du(ae),R.scope),ae=R.update=()=>{de.dirty&&de.run()};ae.id=R.uid,ns(R,!0),ae()},O=(R,I,q)=>{I.component=R;const ie=R.vnode.props;R.vnode=I,R.next=null,t0(R,I.props,ie,q),s0(R,I.children,q),As(),kd(R),Cs()},z=(R,I,q,ie,ee,he,T,fe,de=!1)=>{const ae=R&&R.children,re=R?R.shapeFlag:0,y=I.children,{patchFlag:g,shapeFlag:L}=I;if(g>0){if(g&128){ne(ae,y,q,ie,ee,he,T,fe,de);return}else if(g&256){V(ae,y,q,ie,ee,he,T,fe,de);return}}L&8?(re&16&&B(ae,ee,he),y!==ae&&u(q,y)):re&16?L&16?ne(ae,y,q,ie,ee,he,T,fe,de):B(ae,ee,he,!0):(re&8&&u(q,""),L&16&&v(y,q,ie,ee,he,T,fe,de))},V=(R,I,q,ie,ee,he,T,fe,de)=>{R=R||Qs,I=I||Qs;const ae=R.length,re=I.length,y=Math.min(ae,re);let g;for(g=0;g<y;g++){const L=I[g]=de?Bi(I[g]):qn(I[g]);x(R[g],L,q,null,ee,he,T,fe,de)}ae>re?B(R,ee,he,!0,!1,y):v(I,q,ie,ee,he,T,fe,de,y)},ne=(R,I,q,ie,ee,he,T,fe,de)=>{let ae=0;const re=I.length;let y=R.length-1,g=re-1;for(;ae<=y&&ae<=g;){const L=R[ae],$=I[ae]=de?Bi(I[ae]):qn(I[ae]);if(hs(L,$))x(L,$,q,null,ee,he,T,fe,de);else break;ae++}for(;ae<=y&&ae<=g;){const L=R[y],$=I[g]=de?Bi(I[g]):qn(I[g]);if(hs(L,$))x(L,$,q,null,ee,he,T,fe,de);else break;y--,g--}if(ae>y){if(ae<=g){const L=g+1,$=L<re?I[L].el:ie;for(;ae<=g;)x(null,I[ae]=de?Bi(I[ae]):qn(I[ae]),q,$,ee,he,T,fe,de),ae++}}else if(ae>g)for(;ae<=y;)pe(R[ae],ee,he,!0),ae++;else{const L=ae,$=ae,te=new Map;for(ae=$;ae<=g;ae++){const ye=I[ae]=de?Bi(I[ae]):qn(I[ae]);ye.key!=null&&te.set(ye.key,ae)}let Z,we=0;const ge=g-$+1;let De=!1,Ve=0;const me=new Array(ge);for(ae=0;ae<ge;ae++)me[ae]=0;for(ae=L;ae<=y;ae++){const ye=R[ae];if(we>=ge){pe(ye,ee,he,!0);continue}let Te;if(ye.key!=null)Te=te.get(ye.key);else for(Z=$;Z<=g;Z++)if(me[Z-$]===0&&hs(ye,I[Z])){Te=Z;break}Te===void 0?pe(ye,ee,he,!0):(me[Te-$]=ae+1,Te>=Ve?Ve=Te:De=!0,x(ye,I[Te],q,null,ee,he,T,fe,de),we++)}const ve=De?l0(me):Qs;for(Z=ve.length-1,ae=ge-1;ae>=0;ae--){const ye=$+ae,Te=I[ye],Ae=ye+1<re?I[ye+1].el:ie;me[ae]===0?x(null,Te,q,Ae,ee,he,T,fe,de):De&&(Z<0||ae!==ve[Z]?ue(Te,q,Ae,2):Z--)}}},ue=(R,I,q,ie,ee=null)=>{const{el:he,type:T,transition:fe,children:de,shapeFlag:ae}=R;if(ae&6){ue(R.component.subTree,I,q,ie);return}if(ae&128){R.suspense.move(I,q,ie);return}if(ae&64){T.move(R,I,q,Le);return}if(T===Xt){i(he,I,q);for(let y=0;y<de.length;y++)ue(de[y],I,q,ie);i(R.anchor,I,q);return}if(T===aa){M(R,I,q);return}if(ie!==2&&ae&1&&fe)if(ie===0)fe.beforeEnter(he),i(he,I,q),ln(()=>fe.enter(he),ee);else{const{leave:y,delayLeave:g,afterLeave:L}=fe,$=()=>i(he,I,q),te=()=>{y(he,()=>{$(),L&&L()})};g?g(he,$,te):te()}else i(he,I,q)},pe=(R,I,q,ie=!1,ee=!1)=>{const{type:he,props:T,ref:fe,children:de,dynamicChildren:ae,shapeFlag:re,patchFlag:y,dirs:g}=R;if(fe!=null&&xc(fe,null,q,R,!0),re&256){I.ctx.deactivate(R);return}const L=re&1&&g,$=!Wr(R);let te;if($&&(te=T&&T.onVnodeBeforeUnmount)&&Hn(te,I,R),re&6)Xe(R.component,q,ie);else{if(re&128){R.suspense.unmount(q,ie);return}L&&ts(R,null,I,"beforeUnmount"),re&64?R.type.remove(R,I,q,ee,Le,ie):ae&&(he!==Xt||y>0&&y&64)?B(ae,I,q,!1,!0):(he===Xt&&y&384||!ee&&re&16)&&B(de,I,q),ie&&Ce(R)}($&&(te=T&&T.onVnodeUnmounted)||L)&&ln(()=>{te&&Hn(te,I,R),L&&ts(R,null,I,"unmounted")},q)},Ce=R=>{const{type:I,el:q,anchor:ie,transition:ee}=R;if(I===Xt){Ge(q,ie);return}if(I===aa){w(R);return}const he=()=>{s(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(R.shapeFlag&1&&ee&&!ee.persisted){const{leave:T,delayLeave:fe}=ee,de=()=>T(q,he);fe?fe(R.el,he,de):de()}else he()},Ge=(R,I)=>{let q;for(;R!==I;)q=d(R),s(R),R=q;s(I)},Xe=(R,I,q)=>{const{bum:ie,scope:ee,update:he,subTree:T,um:fe}=R;ie&&sa(ie),ee.stop(),he&&(he.active=!1,pe(T,R,I,q)),fe&&ln(fe,I),ln(()=>{R.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},B=(R,I,q,ie=!1,ee=!1,he=0)=>{for(let T=he;T<R.length;T++)pe(R[T],I,q,ie,ee)},le=R=>R.shapeFlag&6?le(R.component.subTree):R.shapeFlag&128?R.suspense.next():d(R.anchor||R.el);let ce=!1;const Be=(R,I,q)=>{R==null?I._vnode&&pe(I._vnode,null,null,!0):x(I._vnode||null,R,I,null,null,null,q),ce||(ce=!0,kd(),fp(),ce=!1),I._vnode=R},Le={p:x,um:pe,m:ue,r:Ce,mt:J,mc:v,pc:z,pbc:K,n:le,o:t};return{render:Be,hydrate:void 0,createApp:J_(Be)}}function xl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ns({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function a0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fu(t,e,n=!1){const i=t.children,s=e.children;if(He(i)&&He(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Bi(s[r]),a.el=o.el),n||Fu(o,a)),a.type===Za&&(a.el=o.el)}}function l0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Lp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lp(e)}const c0=t=>t.__isTeleport,qr=t=>t&&(t.disabled||t.disabled===""),Zd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Jd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,bc=(t,e)=>{const n=t&&t.to;return Ct(n)?e?e(n):null:n},u0={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:p,querySelector:_,createText:x,createComment:m}}=c,h=qr(e.props);let{shapeFlag:E,children:M,dynamicChildren:w}=e;if(t==null){const C=e.el=x(""),A=e.anchor=x("");p(C,n,i),p(A,n,i);const D=e.target=bc(e.props,_),v=e.targetAnchor=x("");D&&(p(v,D),o==="svg"||Zd(D)?o="svg":(o==="mathml"||Jd(D))&&(o="mathml"));const S=(K,P)=>{E&16&&u(M,K,P,s,r,o,a,l)};h?S(n,A):D&&S(D,v)}else{e.el=t.el;const C=e.anchor=t.anchor,A=e.target=t.target,D=e.targetAnchor=t.targetAnchor,v=qr(t.props),S=v?n:A,K=v?C:D;if(o==="svg"||Zd(A)?o="svg":(o==="mathml"||Jd(A))&&(o="mathml"),w?(d(t.dynamicChildren,w,S,s,r,o,a),Fu(t,e,!0)):l||f(t,e,S,K,s,r,o,a,!1),h)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Po(e,n,C,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const P=e.target=bc(e.props,_);P&&Po(e,P,null,c,0)}else v&&Po(e,A,D,c,1)}Dp(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=t;if(f&&r(u),o&&r(c),a&16){const p=o||!qr(d);for(let _=0;_<l.length;_++){const x=l[_];s(x,e,n,p,!!x.dynamicChildren)}}},move:Po,hydrate:d0};function Po(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=r===2;if(f&&i(o,e,n),(!f||qr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);f&&i(a,e,n)}function d0(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=bc(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(qr(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=f;else{e.anchor=o(t);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,n,i,s,r)}Dp(e)}return e.anchor&&o(e.anchor)}const f0=u0;function Dp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Xt=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),Yr=[];let On=null;function tt(t=!1){Yr.push(On=t?null:[])}function h0(){Yr.pop(),On=Yr[Yr.length-1]||null}let Qr=1;function Qd(t){Qr+=t}function Ip(t){return t.dynamicChildren=Qr>0?On||Qs:null,h0(),Qr>0&&On&&On.push(t),t}function it(t,e,n,i,s,r){return Ip(F(t,e,n,i,s,r,!0))}function Ou(t,e,n,i,s){return Ip(rt(t,e,n,i,s,!0))}function ya(t){return t?t.__v_isVNode===!0:!1}function hs(t,e){return t.type===e.type&&t.key===e.key}const Ja="__vInternal",Up=({key:t})=>t??null,la=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||fn(t)||Ze(t)?{i:Ft,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,i=0,s=null,r=t===Xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Up(e),ref:e&&la(e),scopeId:Ya,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return a?(ku(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),Qr>0&&!o&&On&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&On.push(l),l}const rt=p0;function p0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===E_)&&(t=Cn),ya(t)){const a=Ki(t,e,!0);return n&&ku(a,n),Qr>0&&!r&&On&&(a.shapeFlag&6?On[On.indexOf(t)]=a:On.push(a)),a.patchFlag|=-2,a}if(E0(t)&&(t=t.__vccOpts),e){e=m0(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=zt(a)),xt(l)&&(rp(l)&&!He(l)&&(l=Zt({},l)),e.style=_s(l))}const o=Ct(t)?1:T_(t)?128:c0(t)?64:xt(t)?4:Ze(t)?2:0;return F(t,e,n,i,s,o,r,!0)}function m0(t){return t?rp(t)||Ja in t?Zt({},t):t:null}function Ki(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?g0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Up(a),ref:e&&e.ref?n&&s?He(s)?s.concat(la(e)):[s,la(e)]:la(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ki(t.ssContent),ssFallback:t.ssFallback&&Ki(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ti(t=" ",e=0){return rt(Za,null,t,e)}function Bu(t,e){const n=rt(aa,null,t);return n.staticCount=e,n}function kt(t="",e=!1){return e?(tt(),Ou(Cn,null,t)):rt(Cn,null,t)}function qn(t){return t==null||typeof t=="boolean"?rt(Cn):He(t)?rt(Xt,null,t.slice()):typeof t=="object"?Bi(t):rt(Za,null,String(t))}function Bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ki(t)}function ku(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ku(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ja in e)?e._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),i&64?(n=16,e=[ti(e)]):n=8);t.children=e,t.shapeFlag|=n}function g0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=zt([e.class,i.class]));else if(s==="style")e.style=_s([e.style,i.style]);else if(za(s)){const r=e[s],o=i[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Hn(t,e,n,i=null){An(t,e,7,[n,i])}const _0=Ep();let v0=0;function x0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||_0,r={uid:v0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(i,s),emitsOptions:pp(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=b_.bind(null,r),t.ce&&t.ce(r),r}let Yt=null;const b0=()=>Yt||Ft;let Sa,wc;{const t=Gh(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Sa=e("__VUE_INSTANCE_SETTERS__",n=>Yt=n),wc=e("__VUE_SSR_SETTERS__",n=>Qa=n)}const uo=t=>{const e=Yt;return Sa(t),t.scope.on(),()=>{t.scope.off(),Sa(e)}},ef=()=>{Yt&&Yt.scope.off(),Sa(null)};function Np(t){return t.vnode.shapeFlag&4}let Qa=!1;function w0(t,e=!1){e&&wc(e);const{props:n,children:i}=t.vnode,s=Np(t);e0(t,n,s,e),i0(t,i);const r=s?y0(t,e):void 0;return e&&wc(!1),r}function y0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ru(new Proxy(t.ctx,$_));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?M0(t):null,r=uo(t);As();const o=qi(i,t,0,[t.props,s]);if(Cs(),r(),kh(o)){if(o.then(ef,ef),e)return o.then(a=>{tf(t,a)}).catch(a=>{Xa(a,t,0)});t.asyncDep=o}else tf(t,o)}else Fp(t)}function tf(t,e,n){Ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=lp(e)),Fp(t)}function Fp(t,e,n){const i=t.type;t.render||(t.render=i.render||Tn);{const s=uo(t);As();try{X_(t)}finally{Cs(),s()}}}function S0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dn(t,"get","$attrs"),e[n]}}))}function M0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return S0(t)},slots:t.slots,emit:t.emit,expose:e}}function el(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lp(Ru(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $r)return $r[n](t)},has(e,n){return n in e||n in $r}}))}function E0(t){return Ze(t)&&"__vccOpts"in t}const nn=(t,e)=>d_(t,e,Qa);function T0(t,e,n){const i=arguments.length;return i===2?xt(e)&&!He(e)?ya(e)?rt(t,null,[e]):rt(t,e):rt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ya(n)&&(n=[n]),rt(t,e,n))}const A0="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const C0="http://www.w3.org/2000/svg",R0="http://www.w3.org/1998/Math/MathML",ki=typeof document<"u"?document:null,nf=ki&&ki.createElement("template"),P0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?ki.createElementNS(C0,t):e==="mathml"?ki.createElementNS(R0,t):ki.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ki.createTextNode(t),createComment:t=>ki.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ki.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{nf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=nf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ci="transition",Cr="animation",eo=Symbol("_vtc"),xr=(t,{slots:e})=>T0(I_,L0(t),e);xr.displayName="Transition";const Op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xr.props=Zt({},_p,Op);const is=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},sf=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function L0(t){const e={};for(const U in t)U in Op||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=D0(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:h,onEnter:E,onEnterCancelled:M,onLeave:w,onLeaveCancelled:C,onBeforeAppear:A=h,onAppear:D=E,onAppearCancelled:v=M}=e,S=(U,H,J)=>{ss(U,H?u:a),ss(U,H?c:o),J&&J()},K=(U,H)=>{U._isLeaving=!1,ss(U,f),ss(U,p),ss(U,d),H&&H()},P=U=>(H,J)=>{const X=U?D:E,W=()=>S(H,U,J);is(X,[H,W]),rf(()=>{ss(H,U?l:r),Ri(H,U?u:a),sf(X)||of(H,i,x,W)})};return Zt(e,{onBeforeEnter(U){is(h,[U]),Ri(U,r),Ri(U,o)},onBeforeAppear(U){is(A,[U]),Ri(U,l),Ri(U,c)},onEnter:P(!1),onAppear:P(!0),onLeave(U,H){U._isLeaving=!0;const J=()=>K(U,H);Ri(U,f),N0(),Ri(U,d),rf(()=>{U._isLeaving&&(ss(U,f),Ri(U,p),sf(w)||of(U,i,m,J))}),is(w,[U,J])},onEnterCancelled(U){S(U,!1),is(M,[U])},onAppearCancelled(U){S(U,!0),is(v,[U])},onLeaveCancelled(U){K(U),is(C,[U])}})}function D0(t){if(t==null)return null;if(xt(t))return[bl(t.enter),bl(t.leave)];{const e=bl(t);return[e,e]}}function bl(t){return Ig(t)}function Ri(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[eo]||(t[eo]=new Set)).add(e)}function ss(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[eo];n&&(n.delete(e),n.size||(t[eo]=void 0))}function rf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let I0=0;function of(t,e,n,i){const s=t._endId=++I0,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=U0(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function U0(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${Ci}Delay`),r=i(`${Ci}Duration`),o=af(s,r),a=i(`${Cr}Delay`),l=i(`${Cr}Duration`),c=af(a,l);let u=null,f=0,d=0;e===Ci?o>0&&(u=Ci,f=o,d=r.length):e===Cr?c>0&&(u=Cr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Ci:Cr:null,d=u?u===Ci?r.length:l.length:0);const p=u===Ci&&/\b(transform|all)(,|$)/.test(i(`${Ci}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>lf(n)+lf(t[i])))}function lf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function N0(){return document.body.offsetHeight}function F0(t,e,n){const i=t[eo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ma=Symbol("_vod"),Bp=Symbol("_vsh"),O0={beforeMount(t,{value:e},{transition:n}){t[Ma]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Rr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Rr(t,!0),i.enter(t)):i.leave(t,()=>{Rr(t,!1)}):Rr(t,e))},beforeUnmount(t,{value:e}){Rr(t,e)}};function Rr(t,e){t.style.display=e?t[Ma]:"none",t[Bp]=!e}const B0=Symbol(""),k0=/(^|;)\s*display\s*:/;function z0(t,e,n){const i=t.style,s=Ct(n);let r=!1;if(n&&!s){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ca(i,a,"")}else for(const o in e)n[o]==null&&ca(i,o,"");for(const o in n)o==="display"&&(r=!0),ca(i,o,n[o])}else if(s){if(e!==n){const o=i[B0];o&&(n+=";"+o),i.cssText=n,r=k0.test(n)}}else e&&t.removeAttribute("style");Ma in t&&(t[Ma]=r?i.display:"",t[Bp]&&(i.display="none"))}const cf=/\s*!important$/;function ca(t,e,n){if(He(n))n.forEach(i=>ca(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=V0(t,e);cf.test(n)?t.setProperty(vr(i),n.replace(cf,""),"important"):t[i]=n}}const uf=["Webkit","Moz","ms"],wl={};function V0(t,e){const n=wl[e];if(n)return n;let i=cr(e);if(i!=="filter"&&i in t)return wl[e]=i;i=Hh(i);for(let s=0;s<uf.length;s++){const r=uf[s]+i;if(r in t)return wl[e]=r}return e}const df="http://www.w3.org/1999/xlink";function H0(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(df,e.slice(6,e.length)):t.setAttributeNS(df,e,n);else{const r=kg(e);n==null||r&&!Wh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function G0(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ps(t,e,n,i){t.addEventListener(e,n,i)}function W0(t,e,n,i){t.removeEventListener(e,n,i)}const ff=Symbol("_vei");function $0(t,e,n,i,s=null){const r=t[ff]||(t[ff]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=X0(e);if(i){const c=r[e]=j0(i,s);ps(t,a,c,l)}else o&&(W0(t,a,o,l),r[e]=void 0)}}const hf=/(?:Once|Passive|Capture)$/;function X0(t){let e;if(hf.test(t)){e={};let i;for(;i=t.match(hf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vr(t.slice(2)),e]}let yl=0;const q0=Promise.resolve(),Y0=()=>yl||(q0.then(()=>yl=0),yl=Date.now());function j0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;An(K0(i,n.value),e,5,[i])};return n.value=t,n.attached=Y0(),n}function K0(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Z0=(t,e,n,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?F0(t,i,c):e==="style"?z0(t,n,i):za(e)?bu(e)||$0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):J0(t,e,i,c))?G0(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),H0(t,e,i,c))};function J0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&pf(e)&&Ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pf(e)&&Ct(n)?!1:e in t}const Ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return He(e)?n=>sa(e,n):e};function Q0(t){t.target.composing=!0}function mf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ir=Symbol("_assign"),ua={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ir]=Ea(s);const r=i||s.props&&s.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=jr(a)),t[ir](a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",Q0),ps(t,"compositionend",mf),ps(t,"change",mf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t[ir]=Ea(r),t.composing)return;const o=s||t.type==="number"?jr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===a)||(t.value=a))}},ev={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Va(e);ps(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?jr(Ta(o)):Ta(o));t[ir](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,up(()=>{t._assigning=!1})}),t[ir]=Ea(i)},mounted(t,{value:e,modifiers:{number:n}}){gf(t,e,n)},beforeUpdate(t,e,n){t[ir]=Ea(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||gf(t,e,n)}};function gf(t,e,n){const i=t.multiple,s=He(e);if(!(i&&!s&&!Va(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=Ta(a);if(i)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?jr(l):l):a.selected=Vg(e,l)>-1}else a.selected=e.has(l);else if(Ga(Ta(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!i&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ta(t){return"_value"in t?t._value:t.value}const tv=["ctrl","shift","alt","meta"],nv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tv.some(n=>t[`${n}Key`]&&!e.includes(n))},iv=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=nv[e[o]];if(a&&a(s,e))return}return t(s,...r)})},sv=Zt({patchProp:Z0},P0);let _f;function rv(){return _f||(_f=r0(sv))}const ov=(...t)=>{const e=rv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=lv(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,av(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function av(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lv(t){return Ct(t)?document.querySelector(t):t}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const cv=Symbol();var vf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vf||(vf={}));function uv(){const t=Hg(!0),e=t.run(()=>ft({}));let n=[],i=[];const s=Ru({install(r){s._a=r,r.provide(cv,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const dv="/luftqi/assets/LOGO_450x450_01.png",kn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fv={class:"section-title"},hv={class:"section-body"},pv={__name:"SidebarSection",props:{title:{type:String,required:!0},icon:{type:String,default:"fas fa-circle"},defaultOpen:{type:Boolean,default:!0}},setup(t){const n=ft(t.defaultOpen),i=()=>{n.value=!n.value};return(s,r)=>(tt(),it("div",{class:zt(["section",{collapsed:!n.value}])},[F("button",{class:zt(["section-header",n.value?"section-header-close":"section-header-open"]),onClick:i},[F("div",fv,[F("i",{class:zt(t.icon)},null,2),F("span",null,En(t.title),1)]),F("i",{class:zt(["toggle-icon fas",n.value?"fa-chevron-up":"fa-chevron-down"])},null,2)],2),rt(xr,{name:"collapse"},{default:Xn(()=>[Zs(F("div",hv,[W_(s.$slots,"default",{},void 0,!0)],512),[[O0,n.value]])]),_:3})],2))}},Pr=kn(pv,[["__scopeId","data-v-2d285c84"]]);/*!
* sweetalert2 v11.26.18
* Released under the MIT License.
*/function kp(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function mv(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function xf(t,e){return t.get(kp(t,e))}function gv(t,e,n){mv(t,e),e.set(t,n)}function _v(t,e,n){return t.set(kp(t,e),n),n}const vv=100,Fe={},xv=()=>{Fe.previousActiveElement instanceof HTMLElement?(Fe.previousActiveElement.focus(),Fe.previousActiveElement=null):document.body&&document.body.focus()},bv=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Fe.restoreFocusTimeout=setTimeout(()=>{xv(),e()},vv),window.scrollTo(n,i)}),zp="swal2-",wv=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],se=wv.reduce((t,e)=>(t[e]=zp+e,t),{}),yv=["success","warning","info","question","error"],Aa=yv.reduce((t,e)=>(t[e]=zp+e,t),{}),Vp="SweetAlert2:",zu=t=>t.charAt(0).toUpperCase()+t.slice(1),sn=t=>{console.warn(`${Vp} ${typeof t=="object"?t.join(" "):t}`)},Rs=t=>{console.error(`${Vp} ${t}`)},bf=[],Sv=t=>{bf.includes(t)||(bf.push(t),sn(t))},Hp=(t,e=null)=>{Sv(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},tl=t=>typeof t=="function"?t():t,Vu=t=>t&&typeof t.toPromise=="function",fo=t=>Vu(t)?t.toPromise():Promise.resolve(t),Hu=t=>t&&Promise.resolve(t)===t,rn=()=>document.body.querySelector(`.${se.container}`),ho=t=>{const e=rn();return e?e.querySelector(t):null},bn=t=>ho(`.${t}`),dt=()=>bn(se.popup),br=()=>bn(se.icon),Mv=()=>bn(se["icon-content"]),Gp=()=>bn(se.title),Gu=()=>bn(se["html-container"]),Wp=()=>bn(se.image),Wu=()=>bn(se["progress-steps"]),nl=()=>bn(se["validation-message"]),ni=()=>ho(`.${se.actions} .${se.confirm}`),wr=()=>ho(`.${se.actions} .${se.cancel}`),Ps=()=>ho(`.${se.actions} .${se.deny}`),Ev=()=>bn(se["input-label"]),yr=()=>ho(`.${se.loader}`),po=()=>bn(se.actions),$p=()=>bn(se.footer),il=()=>bn(se["timer-progress-bar"]),$u=()=>bn(se.close),Tv=`
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
`,Xu=()=>{const t=dt();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Tv),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>cn(r))},qu=()=>xi(document.body,se.shown)&&!xi(document.body,se["toast-shown"])&&!xi(document.body,se["no-backdrop"]),sl=()=>{const t=dt();return t?xi(t,se.toast):!1},Av=()=>{const t=dt();return t?t.hasAttribute("data-loading"):!1},wn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},xi=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Cv=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(se).includes(n)&&!Object.values(Aa).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},xn=(t,e,n)=>{if(Cv(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){sn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}ut(t,i)}},rl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${se.popup} > .${se[e]}`);case"checkbox":return t.querySelector(`.${se.popup} > .${se.checkbox} input`);case"radio":return t.querySelector(`.${se.popup} > .${se.radio} input:checked`)||t.querySelector(`.${se.popup} > .${se.radio} input:first-child`);case"range":return t.querySelector(`.${se.popup} > .${se.range} input`);default:return t.querySelector(`.${se.popup} > .${se.input}`)}},Xp=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},qp=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},ut=(t,e)=>{qp(t,e,!0)},Rn=(t,e)=>{qp(t,e,!1)},Hi=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&xi(s,e))return s}},Ms=(t,e,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||parseInt(`${n}`)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},Ot=(t,e="flex")=>{t&&(t.style.display=e)},Jt=t=>{t&&(t.style.display="none")},Yu=(t,e="block")=>{t&&new MutationObserver(()=>{mo(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},wf=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},mo=(t,e,n="flex")=>{e?Ot(t,n):Jt(t)},cn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Rv=()=>!cn(ni())&&!cn(Ps())&&!cn(wr()),yc=t=>t.scrollHeight>t.clientHeight,Pv=(t,e)=>{let n=t;for(;n&&n!==e;){if(yc(n))return!0;n=n.parentElement}return!1},Yp=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},ju=(t,e=!1)=>{const n=il();n&&cn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Lv=()=>{const t=il();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Dv=()=>typeof window>"u"||typeof document>"u",Iv=`
 <div aria-labelledby="${se.title}" aria-describedby="${se["html-container"]}" class="${se.popup}" tabindex="-1">
   <button type="button" class="${se.close}"></button>
   <ul class="${se["progress-steps"]}"></ul>
   <div class="${se.icon}"></div>
   <img class="${se.image}" />
   <h2 class="${se.title}" id="${se.title}"></h2>
   <div class="${se["html-container"]}" id="${se["html-container"]}"></div>
   <input class="${se.input}" id="${se.input}" />
   <input type="file" class="${se.file}" />
   <div class="${se.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${se.select}" id="${se.select}"></select>
   <div class="${se.radio}"></div>
   <label class="${se.checkbox}">
     <input type="checkbox" id="${se.checkbox}" />
     <span class="${se.label}"></span>
   </label>
   <textarea class="${se.textarea}" id="${se.textarea}"></textarea>
   <div class="${se["validation-message"]}" id="${se["validation-message"]}"></div>
   <div class="${se.actions}">
     <div class="${se.loader}"></div>
     <button type="button" class="${se.confirm}"></button>
     <button type="button" class="${se.deny}"></button>
     <button type="button" class="${se.cancel}"></button>
   </div>
   <div class="${se.footer}"></div>
   <div class="${se["timer-progress-bar-container"]}">
     <div class="${se["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Uv=()=>{const t=rn();return t?(t.remove(),Rn([document.documentElement,document.body],[se["no-backdrop"],se["toast-shown"],se["has-column"]]),!0):!1},rs=()=>{Fe.currentInstance&&Fe.currentInstance.resetValidationMessage()},Nv=()=>{const t=dt();if(!t)return;const e=Hi(t,se.input),n=Hi(t,se.file),i=t.querySelector(`.${se.range} input`),s=t.querySelector(`.${se.range} output`),r=Hi(t,se.select),o=t.querySelector(`.${se.checkbox} input`),a=Hi(t,se.textarea);e&&(e.oninput=rs),n&&(n.onchange=rs),r&&(r.onchange=rs),o&&(o.onchange=rs),a&&(a.oninput=rs),i&&s&&(i.oninput=()=>{rs(),s.value=i.value},i.onchange=()=>{rs(),s.value=i.value})},Fv=t=>{if(typeof t=="string"){const e=document.querySelector(t);if(!e)throw new Error(`Target element "${t}" not found`);return e}return t},Ov=t=>{const e=dt();e&&(e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true"))},Bv=t=>{window.getComputedStyle(t).direction==="rtl"&&(ut(rn(),se.rtl),Fe.isRTL=!0)},kv=t=>{const e=Uv();if(Dv()){Rs("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=se.container,e&&ut(n,se["no-transition"]),wn(n,Iv),n.dataset.swal2Theme=t.theme;const i=Fv(t.target||"body");i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Ov(t),Bv(i),Nv()},Ku=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?zv(t,e):t&&wn(e,t)},zv=(t,e)=>{"jquery"in t?Vv(e,t):wn(e,t.toString())},Vv=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Hv=(t,e)=>{const n=po(),i=yr();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Jt(n):Ot(n),xn(n,e,"actions"),Gv(n,i,e),wn(i,e.loaderHtml||""),xn(i,e,"loader"))};function Gv(t,e,n){const i=ni(),s=Ps(),r=wr();!i||!s||!r||(Ml(i,"confirm",n),Ml(s,"deny",n),Ml(r,"cancel",n),Wv(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function Wv(t,e,n,i){if(!i.buttonsStyling){Rn([t,e,n],se.styled);return}ut([t,e,n],se.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),Sl(t),Sl(e),Sl(n)}function Sl(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Ml(t,e,n){const i=zu(e);mo(t,n[`show${i}Button`],"inline-block"),wn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=se[e],xn(t,n,`${e}Button`)}const $v=(t,e)=>{const n=$u();n&&(wn(n,e.closeButtonHtml||""),xn(n,e,"closeButton"),mo(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Xv=(t,e)=>{const n=rn();n&&(qv(n,e.backdrop),Yv(n,e.position),jv(n,e.grow),xn(n,e,"container"))};function qv(t,e){typeof e=="string"?t.style.background=e:e||ut([document.documentElement,document.body],se["no-backdrop"])}function Yv(t,e){e&&(e in se?ut(t,se[e]):(sn('The "position" parameter is not valid, defaulting to "center"'),ut(t,se.center)))}function jv(t,e){e&&ut(t,se[`grow-${e}`])}var wt={innerParams:new WeakMap,domCache:new WeakMap};const Kv=["input","file","range","select","radio","checkbox","textarea"],Zv=(t,e)=>{const n=dt();if(!n)return;const i=wt.innerParams.get(t),s=!i||e.input!==i.input;Kv.forEach(r=>{const o=Hi(n,se[r]);o&&(ex(r,e.inputAttributes),o.className=se[r],s&&Jt(o))}),e.input&&(s&&Jv(e),tx(e))},Jv=t=>{if(!t.input)return;if(!At[t.input]){Rs(`Unexpected type of input! Expected ${Object.keys(At).join(" | ")}, got "${t.input}"`);return}const e=jp(t.input);if(!e)return;const n=At[t.input](e,t);Ot(e),t.inputAutoFocus&&setTimeout(()=>{Xp(n)})},Qv=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},ex=(t,e)=>{const n=dt();if(!n)return;const i=rl(n,t);if(i){Qv(i);for(const s in e)i.setAttribute(s,e[s])}},tx=t=>{if(!t.input)return;const e=jp(t.input);e&&xn(e,t,"input")},Zu=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},go=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=se["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&ut(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},jp=t=>{const e=dt();if(e)return Hi(e,se[t]||se.input)},Ca=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Hu(e)||sn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},At={};At.text=At.email=At.password=At.number=At.tel=At.url=At.search=At.date=At["datetime-local"]=At.time=At.week=At.month=(t,e)=>{const n=t;return Ca(n,e.inputValue),go(n,n,e),Zu(n,e),n.type=e.input,n};At.file=(t,e)=>{const n=t;return go(n,n,e),Zu(n,e),n};At.range=(t,e)=>{const n=t,i=n.querySelector("input"),s=n.querySelector("output");return i&&(Ca(i,e.inputValue),i.type=e.input,go(i,t,e)),s&&Ca(s,e.inputValue),t};At.select=(t,e)=>{const n=t;if(n.textContent="",e.inputPlaceholder){const i=document.createElement("option");wn(i,e.inputPlaceholder),i.value="",i.disabled=!0,i.selected=!0,n.appendChild(i)}return go(n,n,e),n};At.radio=t=>{const e=t;return e.textContent="",t};At.checkbox=(t,e)=>{const n=dt();if(!n)throw new Error("Popup not found");const i=rl(n,"checkbox");if(!i)throw new Error("Checkbox input not found");i.value="1",i.checked=!!e.inputValue;const r=t.querySelector("span");if(r){const o=e.inputPlaceholder||e.inputLabel;o&&wn(r,o)}return i};At.textarea=(t,e)=>{const n=t;Ca(n,e.inputValue),Zu(n,e),go(n,n,e);const i=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=dt();if(!s)return;const r=parseInt(window.getComputedStyle(s).width),o=()=>{if(!document.body.contains(n))return;const a=n.offsetWidth+i(n),l=dt();l&&(a>r?l.style.width=`${a}px`:Ms(l,"width",e.width))};new MutationObserver(o).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const nx=(t,e)=>{const n=Gu();n&&(Yu(n),xn(n,e,"htmlContainer"),e.html?(Ku(e.html,n),Ot(n,"block")):e.text?(n.textContent=e.text,Ot(n,"block")):Jt(n),Zv(t,e))},ix=(t,e)=>{const n=$p();n&&(Yu(n),mo(n,!!e.footer,"block"),e.footer&&Ku(e.footer,n),xn(n,e,"footer"))},sx=(t,e)=>{const n=wt.innerParams.get(t),i=br();if(!i)return;if(n&&e.icon===n.icon){Sf(i,e),yf(i,e);return}if(!e.icon&&!e.iconHtml){Jt(i);return}if(e.icon&&Object.keys(Aa).indexOf(e.icon)===-1){Rs(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Jt(i);return}Ot(i),Sf(i,e),yf(i,e),ut(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Kp)},yf=(t,e)=>{for(const[n,i]of Object.entries(Aa))e.icon!==n&&Rn(t,i);ut(t,e.icon&&Aa[e.icon]),ax(t,e),Kp(),xn(t,e,"icon")},Kp=()=>{const t=dt();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},rx=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,ox=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Sf=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=Mf(e.iconHtml):e.icon==="success"?(i=rx(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=ox:e.icon&&(i=Mf({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&wn(t,i)},ax=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])wf(t,n,"background-color",e.iconColor);wf(t,".swal2-success-ring","border-color",e.iconColor)}},Mf=t=>`<div class="${se["icon-content"]}">${t}</div>`,lx=(t,e)=>{const n=Wp();if(n){if(!e.imageUrl){Jt(n);return}Ot(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Ms(n,"width",e.imageWidth),Ms(n,"height",e.imageHeight),n.className=se.image,xn(n,e,"image")}};let Ju=!1,Zp=0,Jp=0,Qp=0,em=0;const cx=t=>{t.addEventListener("mousedown",Ra),document.body.addEventListener("mousemove",Pa),t.addEventListener("mouseup",La),t.addEventListener("touchstart",Ra),document.body.addEventListener("touchmove",Pa),t.addEventListener("touchend",La)},ux=t=>{t.removeEventListener("mousedown",Ra),document.body.removeEventListener("mousemove",Pa),t.removeEventListener("mouseup",La),t.removeEventListener("touchstart",Ra),document.body.removeEventListener("touchmove",Pa),t.removeEventListener("touchend",La)},Ra=t=>{const e=dt();if(!e)return;const n=br();if(t.target===e||n&&n.contains(t.target)){Ju=!0;const i=tm(t);Zp=i.clientX,Jp=i.clientY,Qp=parseInt(e.style.insetInlineStart)||0,em=parseInt(e.style.insetBlockStart)||0,ut(e,"swal2-dragging")}},Pa=t=>{const e=dt();if(e&&Ju){let{clientX:n,clientY:i}=tm(t);const s=n-Zp;e.style.insetInlineStart=`${Qp+(Fe.isRTL?-s:s)}px`,e.style.insetBlockStart=`${em+(i-Jp)}px`}},La=()=>{const t=dt();Ju=!1,Rn(t,"swal2-dragging")},tm=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},dx=(t,e)=>{const n=rn(),i=dt();if(!(!n||!i)){if(e.toast){Ms(n,"width",e.width),i.style.width="100%";const s=yr();s&&i.insertBefore(s,br())}else Ms(i,"width",e.width);Ms(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),Jt(nl()),fx(i,e),e.draggable&&!e.toast?(ut(i,se.draggable),cx(i)):(Rn(i,se.draggable),ux(i))}},fx=(t,e)=>{const n=e.showClass||{};t.className=`${se.popup} ${cn(t)?n.popup:""}`,e.toast?(ut([document.documentElement,document.body],se["toast-shown"]),ut(t,se.toast)):ut(t,se.modal),xn(t,e,"popup"),typeof e.customClass=="string"&&ut(t,e.customClass),e.icon&&ut(t,se[`icon-${e.icon}`])},hx=(t,e)=>{const n=Wu();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){Jt(n);return}Ot(n),n.textContent="",s>=i.length&&sn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=px(r);if(n.appendChild(a),o===s&&ut(a,se["active-progress-step"]),o!==i.length-1){const l=mx(e);n.appendChild(l)}})},px=t=>{const e=document.createElement("li");return ut(e,se["progress-step"]),wn(e,t),e},mx=t=>{const e=document.createElement("li");return ut(e,se["progress-step-line"]),t.progressStepsDistance&&Ms(e,"width",t.progressStepsDistance),e},gx=(t,e)=>{const n=Gp();n&&(Yu(n),mo(n,!!(e.title||e.titleText),"block"),e.title&&Ku(e.title,n),e.titleText&&(n.innerText=e.titleText),xn(n,e,"title"))},nm=(t,e)=>{var n;dx(t,e),Xv(t,e),hx(t,e),sx(t,e),lx(t,e),gx(t,e),$v(t,e),nx(t,e),Hv(t,e),ix(t,e);const i=dt();typeof e.didRender=="function"&&i&&e.didRender(i),(n=Fe.eventEmitter)===null||n===void 0||n.emit("didRender",i)},_x=()=>cn(dt()),im=()=>{var t;return(t=ni())===null||t===void 0?void 0:t.click()},vx=()=>{var t;return(t=Ps())===null||t===void 0?void 0:t.click()},xx=()=>{var t;return(t=wr())===null||t===void 0?void 0:t.click()},Sr=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),sm=t=>{if(t.keydownTarget&&t.keydownHandlerAdded&&t.keydownHandler){const e=t.keydownHandler;t.keydownTarget.removeEventListener("keydown",e,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1}},bx=(t,e,n)=>{if(sm(t),!e.toast){const i=r=>yx(e,r,n);t.keydownHandler=i;const s=e.keydownListenerCapture?window:dt();if(s){t.keydownTarget=s,t.keydownListenerCapture=e.keydownListenerCapture;const r=i;t.keydownTarget.addEventListener("keydown",r,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0}}},Sc=(t,e)=>{var n;const i=Xu();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=dt())===null||n===void 0||n.focus()},rm=["ArrowRight","ArrowDown"],wx=["ArrowLeft","ArrowUp"],yx=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Sx(e,t):e.key==="Tab"?Mx(e):[...rm,...wx].includes(e.key)?Ex(e.key):e.key==="Escape"&&Tx(e,t,n)))},Sx=(t,e)=>{if(!tl(e.allowEnterKey))return;const n=dt();if(!n||!e.input)return;const i=rl(n,e.input);if(t.target&&i&&t.target instanceof HTMLElement&&t.target.outerHTML===i.outerHTML){if(["textarea","file"].includes(e.input))return;im(),t.preventDefault()}},Mx=t=>{const e=t.target,n=Xu();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?Sc(i,-1):Sc(i,1),t.stopPropagation(),t.preventDefault()},Ex=t=>{const e=po(),n=ni(),i=Ps(),s=wr();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=rm.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&cn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Tx=(t,e,n)=>{t.preventDefault(),tl(e.allowEscapeKey)&&n(Sr.esc)};var dr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ax=()=>{const t=rn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},om=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},am=typeof window<"u"&&!!window.GestureEvent,Cx=()=>{if(am&&!xi(document.body,se.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ut(document.body,se.iosfix),Rx()}},Rx=()=>{const t=rn();if(!t)return;let e;t.ontouchstart=n=>{e=Px(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Px=t=>{const e=t.target,n=rn(),i=Gu();return!n||!i||Lx(t)||Dx(t)?!1:e===n||!yc(n)&&e instanceof HTMLElement&&!Pv(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(yc(i)&&i.contains(e))},Lx=t=>!!(t.touches&&t.touches.length&&t.touches[0].touchType==="stylus"),Dx=t=>t.touches&&t.touches.length>1,Ix=()=>{if(xi(document.body,se.iosfix)){const t=parseInt(document.body.style.top,10);Rn(document.body,se.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Ux=()=>{const t=document.createElement("div");t.className=se["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let sr=null;const Nx=t=>{sr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(sr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${sr+Ux()}px`)},Fx=()=>{sr!==null&&(document.body.style.paddingRight=`${sr}px`,sr=null)};function lm(t,e,n,i){sl()?Ef(t,i):(bv(n).then(()=>Ef(t,i)),sm(Fe)),am?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),qu()&&(Fx(),Ix(),om()),Ox()}function Ox(){Rn([document.documentElement,document.body],[se.shown,se["height-auto"],se["no-backdrop"],se["toast-shown"]])}function Gi(t){t=kx(t);const e=dr.swalPromiseResolve.get(this),n=Bx(this);this.isAwaitingPromise?t.isDismissed||(_o(this),e(t)):n&&e(t)}const Bx=t=>{const e=dt();if(!e)return!1;const n=wt.innerParams.get(t);if(!n||xi(e,n.hideClass.popup))return!1;Rn(e,n.showClass.popup),ut(e,n.hideClass.popup);const i=rn();return Rn(i,n.showClass.backdrop),ut(i,n.hideClass.backdrop),zx(t,e,n),!0};function cm(t){const e=dr.swalPromiseReject.get(this);_o(this),e&&e(t)}const _o=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,wt.innerParams.get(t)||t._destroy())},kx=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),zx=(t,e,n)=>{var i;const s=rn(),r=Yp(e);typeof n.willClose=="function"&&n.willClose(e),(i=Fe.eventEmitter)===null||i===void 0||i.emit("willClose",e),r&&s?Vx(t,e,s,!!n.returnFocus,n.didClose):s&&lm(t,s,!!n.returnFocus,n.didClose)},Vx=(t,e,n,i,s)=>{Fe.swalCloseEventFinishedCallback=lm.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Fe.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Fe),delete Fe.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Ef=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Fe.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},fr=t=>{let e=dt();if(e||new to,e=dt(),!e)return;const n=yr();sl()?Jt(br()):Hx(e,t),Ot(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Hx=(t,e)=>{const n=po(),i=yr();!n||!i||(!e&&cn(ni())&&(e=ni()),Ot(n),e&&(Jt(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),ut([t,n],se.loading))},Gx=(t,e)=>{e.input==="select"||e.input==="radio"?Yx(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Vu(e.inputValue)||Hu(e.inputValue))&&(fr(ni()),jx(t,e))},Wx=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return $x(n);case"radio":return Xx(n);case"file":return qx(n);default:return e.inputAutoTrim?n.value.trim():n.value}},$x=t=>t.checked?1:0,Xx=t=>t.checked?t.value:null,qx=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Yx=(t,e)=>{const n=dt();if(!n)return;const i=s=>{e.input==="select"?Kx(n,Da(s),e):e.input==="radio"&&Zx(n,Da(s),e)};Vu(e.inputOptions)||Hu(e.inputOptions)?(fr(ni()),fo(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Rs(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},jx=(t,e)=>{const n=t.getInput();n&&(Jt(n),fo(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,Ot(n),n.focus(),t.hideLoading()}).catch(i=>{Rs(`Error in inputValue promise: ${i}`),n.value="",Ot(n),n.focus(),t.hideLoading()}))};function Kx(t,e,n){const i=Hi(t,se.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,wn(l,o),l.selected=um(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function Zx(t,e,n){const i=Hi(t,se.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=se.radio,l.value=o,um(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");wn(u,a),u.className=se.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Da=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Da(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Da(i)),e.push([n,i])}),e},um=(t,e)=>!!e&&e!==null&&e!==void 0&&e.toString()===t.toString(),Jx=t=>{const e=wt.innerParams.get(t);t.disableButtons(),e.input?dm(t,"confirm"):ed(t,!0)},Qx=t=>{const e=wt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?dm(t,"deny"):Qu(t,!1)},eb=(t,e)=>{t.disableButtons(),e(Sr.cancel)},dm=(t,e)=>{const n=wt.innerParams.get(t);if(!n.input){Rs(`The "input" parameter is needed to be set when using returnInputValueOn${zu(e)}`);return}const i=t.getInput(),s=Wx(t,n);n.inputValidator?tb(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?Qu(t,s):ed(t,s)},tb=(t,e,n)=>{const i=wt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>fo(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Qu(t,e):ed(t,e)})},Qu=(t,e)=>{const n=wt.innerParams.get(t);n.showLoaderOnDeny&&fr(Ps()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>fo(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),_o(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>fm(t,s))):t.close({isDenied:!0,value:e})},Tf=(t,e)=>{t.close({isConfirmed:!0,value:e})},fm=(t,e)=>{t.rejectPromise(e)},ed=(t,e)=>{const n=wt.innerParams.get(t);n.showLoaderOnConfirm&&fr(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>fo(n.preConfirm(e,n.validationMessage))).then(s=>{cn(nl())||s===!1?(t.hideLoading(),_o(t)):Tf(t,typeof s>"u"?e:s)}).catch(s=>fm(t,s))):Tf(t,e)};function Ia(){const t=wt.innerParams.get(this);if(!t)return;const e=wt.domCache.get(this);Jt(e.loader),sl()?t.icon&&Ot(br()):nb(e),Rn([e.popup,e.actions],se.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const nb=t=>{const e=t.loader.getAttribute("data-button-to-replace"),n=e?t.popup.getElementsByClassName(e):[];n.length?Ot(n[0],"inline-block"):Rv()&&Jt(t.actions)};function hm(){const t=wt.innerParams.get(this),e=wt.domCache.get(this);return e?rl(e.popup,t.input):null}function pm(t,e,n){const i=wt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function mm(t,e){const n=dt();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${se.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function gm(){pm(this,["confirmButton","denyButton","cancelButton"],!1)}function _m(){pm(this,["confirmButton","denyButton","cancelButton"],!0)}function vm(){mm(this.getInput(),!1)}function xm(){mm(this.getInput(),!0)}function bm(t){const e=wt.domCache.get(this),n=wt.innerParams.get(this);wn(e.validationMessage,t),e.validationMessage.className=se["validation-message"],n.customClass&&n.customClass.validationMessage&&ut(e.validationMessage,n.customClass.validationMessage),Ot(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",se["validation-message"]),Xp(i),ut(i,se.inputerror))}function wm(){const t=wt.domCache.get(this);t.validationMessage&&Jt(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Rn(e,se.inputerror))}const Wi={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},ib=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],sb={allowEnterKey:void 0},rb=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ym=t=>Object.prototype.hasOwnProperty.call(Wi,t),Sm=t=>ib.indexOf(t)!==-1,Mm=t=>sb[t],ob=t=>{ym(t)||sn(`Unknown parameter "${t}"`)},ab=t=>{rb.includes(t)&&sn(`The parameter "${t}" is incompatible with toasts`)},lb=t=>{const e=Mm(t);e&&Hp(t,e)},Em=t=>{t.backdrop===!1&&t.allowOutsideClick&&sn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&sn(`Invalid theme "${t.theme}"`);for(const e in t)ob(e),t.toast&&ab(e),lb(e)};function Tm(t){const e=rn(),n=dt(),i=wt.innerParams.get(this);if(!n||xi(n,i.hideClass.popup)){sn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=cb(t),r=Object.assign({},i,s);Em(r),e&&(e.dataset.swal2Theme=r.theme),nm(this,r),wt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const cb=t=>{const e={};return Object.keys(t).forEach(n=>{if(Sm(n)){const i=t;e[n]=i[n]}else sn(`Invalid parameter to update: ${n}`)}),e};function Am(){var t;const e=wt.domCache.get(this),n=wt.innerParams.get(this);if(!n){Cm(this);return}e.popup&&Fe.swalCloseEventFinishedCallback&&(Fe.swalCloseEventFinishedCallback(),delete Fe.swalCloseEventFinishedCallback),typeof n.didDestroy=="function"&&n.didDestroy(),(t=Fe.eventEmitter)===null||t===void 0||t.emit("didDestroy"),ub(this)}const ub=t=>{Cm(t),delete t.params,delete Fe.keydownHandler,delete Fe.keydownTarget,delete Fe.currentInstance},Cm=t=>{t.isAwaitingPromise?(El(wt,t),t.isAwaitingPromise=!0):(El(dr,t),El(wt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},El=(t,e)=>{for(const n in t)t[n].delete(e)};var db=Object.freeze({__proto__:null,_destroy:Am,close:Gi,closeModal:Gi,closePopup:Gi,closeToast:Gi,disableButtons:_m,disableInput:xm,disableLoading:Ia,enableButtons:gm,enableInput:vm,getInput:hm,handleAwaitingPromise:_o,hideLoading:Ia,rejectPromise:cm,resetValidationMessage:wm,showValidationMessage:bm,update:Tm});const fb=(t,e,n)=>{t.toast?hb(t,e,n):(mb(e),gb(e),_b(t,e,n))},hb=(t,e,n)=>{e.popup.onclick=()=>{t&&(pb(t)||t.timer||t.input)||n(Sr.close)}},pb=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Ua=!1;const mb=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Ua=!0)}}},gb=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Ua=!0)}}},_b=(t,e,n)=>{e.container.onclick=i=>{if(Ua){Ua=!1;return}i.target===e.container&&tl(t.allowOutsideClick)&&n(Sr.backdrop)}},vb=t=>typeof t=="object"&&t!==null&&"jquery"in t,Af=t=>t instanceof Element||vb(t),xb=t=>{const e={};return typeof t[0]=="object"&&!Af(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||Af(s)?e[n]=s:s!==void 0&&Rs(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function bb(...t){return new this(...t)}function wb(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const yb=()=>Fe.timeout&&Fe.timeout.getTimerLeft(),Rm=()=>{if(Fe.timeout)return Lv(),Fe.timeout.stop()},Pm=()=>{if(Fe.timeout){const t=Fe.timeout.start();return ju(t),t}},Sb=()=>{const t=Fe.timeout;return t&&(t.running?Rm():Pm())},Mb=t=>{if(Fe.timeout){const e=Fe.timeout.increase(t);return ju(e,!0),e}},Eb=()=>!!(Fe.timeout&&Fe.timeout.isRunning());let Cf=!1;const Mc={};function Tb(t="data-swal-template"){Mc[t]=this,Cf||(document.body.addEventListener("click",Ab),Cf=!0)}const Ab=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Mc){const i=e.getAttribute&&e.getAttribute(n);if(i){Mc[n].fire({template:i});return}}};class Cb{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Fe.eventEmitter=new Cb;const Rb=(t,e)=>{Fe.eventEmitter&&Fe.eventEmitter.on(t,e)},Pb=(t,e)=>{Fe.eventEmitter&&Fe.eventEmitter.once(t,e)},Lb=(t,e)=>{if(Fe.eventEmitter){if(!t){Fe.eventEmitter.reset();return}e?Fe.eventEmitter.removeListener(t,e):Fe.eventEmitter.removeAllListeners(t)}};var Db=Object.freeze({__proto__:null,argsToParams:xb,bindClickHandler:Tb,clickCancel:xx,clickConfirm:im,clickDeny:vx,enableLoading:fr,fire:bb,getActions:po,getCancelButton:wr,getCloseButton:$u,getConfirmButton:ni,getContainer:rn,getDenyButton:Ps,getFocusableElements:Xu,getFooter:$p,getHtmlContainer:Gu,getIcon:br,getIconContent:Mv,getImage:Wp,getInputLabel:Ev,getLoader:yr,getPopup:dt,getProgressSteps:Wu,getTimerLeft:yb,getTimerProgressBar:il,getTitle:Gp,getValidationMessage:nl,increaseTimer:Mb,isDeprecatedParameter:Mm,isLoading:Av,isTimerRunning:Eb,isUpdatableParameter:Sm,isValidParameter:ym,isVisible:_x,mixin:wb,off:Lb,on:Rb,once:Pb,resumeTimer:Pm,showLoading:fr,stopTimer:Rm,toggleTimer:Sb});class Ib{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Lm=["swal-title","swal-html","swal-footer"],Ub=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Hb(n),Object.assign(Nb(n),Fb(n),Ob(n),Bb(n),kb(n),zb(n),Vb(n,Lm))},Nb=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{Es(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(s in Wi&&typeof Wi[s]=="boolean"?e[s]=r!=="false":s in Wi&&typeof Wi[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},Fb=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},Ob=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{Es(i,["type","color","aria-label"]);const s=i.getAttribute("type");if(!(!s||!["confirm","cancel","deny"].includes(s))){if(e[`${s}ButtonText`]=i.innerHTML,e[`show${zu(s)}Button`]=!0,i.hasAttribute("color")){const r=i.getAttribute("color");r!==null&&(e[`${s}ButtonColor`]=r)}if(i.hasAttribute("aria-label")){const r=i.getAttribute("aria-label");r!==null&&(e[`${s}ButtonAriaLabel`]=r)}}}),e},Bb=t=>{const e={},n=t.querySelector("swal-image");return n&&(Es(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},kb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Es(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},zb=t=>{const e={},n=t.querySelector("swal-input");n&&(Es(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{Es(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Vb=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(Es(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Hb=t=>{const e=Lm.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||sn(`Unrecognized element <${i}>`)})},Es=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&sn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Dm=10,Gb=t=>{var e,n;const i=rn(),s=dt();if(!i||!s)return;typeof t.willOpen=="function"&&t.willOpen(s),(e=Fe.eventEmitter)===null||e===void 0||e.emit("willOpen",s);const o=window.getComputedStyle(document.body).overflowY;if(Xb(i,s,t),setTimeout(()=>{Wb(i,s)},Dm),qu()&&($b(i,t.scrollbarPadding!==void 0?t.scrollbarPadding:!1,o),Ax()),!sl()&&!Fe.previousActiveElement&&(Fe.previousActiveElement=document.activeElement),typeof t.didOpen=="function"){const a=t.didOpen;setTimeout(()=>a(s))}(n=Fe.eventEmitter)===null||n===void 0||n.emit("didOpen",s)},Na=t=>{const e=dt();if(!e||t.target!==e)return;const n=rn();n&&(e.removeEventListener("animationend",Na),e.removeEventListener("transitionend",Na),n.style.overflowY="auto",Rn(n,se["no-transition"]))},Wb=(t,e)=>{Yp(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Na),e.addEventListener("transitionend",Na)):t.style.overflowY="auto"},$b=(t,e,n)=>{Cx(),e&&n!=="hidden"&&Nx(n),setTimeout(()=>{t.scrollTop=0})},Xb=(t,e,n)=>{var i;(i=n.showClass)!==null&&i!==void 0&&i.backdrop&&ut(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),Ot(e,"grid"),setTimeout(()=>{var s;(s=n.showClass)!==null&&s!==void 0&&s.popup&&ut(e,n.showClass.popup),e.style.removeProperty("opacity")},Dm)):Ot(e,"grid"),ut([document.documentElement,document.body],se.shown),n.heightAuto&&n.backdrop&&!n.toast&&ut([document.documentElement,document.body],se["height-auto"])};var Rf={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function qb(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Rf.email),t.input==="url"&&(t.inputValidator=Rf.url))}function Yb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(sn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function jb(t){qb(t),t.showLoaderOnConfirm&&!t.preConfirm&&sn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Yb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),kv(t)}let $n;var Lo=new WeakMap;class Rt{constructor(...e){if(gv(this,Lo,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;$n=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,_v(Lo,this,this._main($n.params))}_main(e,n={}){if(Em(Object.assign({},n,e)),Fe.currentInstance){const r=dr.swalPromiseResolve.get(Fe.currentInstance),{isAwaitingPromise:o}=Fe.currentInstance;Fe.currentInstance._destroy(),o||r({isDismissed:!0}),qu()&&om()}Fe.currentInstance=$n;const i=Zb(e,n);jb(i),Object.freeze(i),Fe.timeout&&(Fe.timeout.stop(),delete Fe.timeout),clearTimeout(Fe.restoreFocusTimeout);const s=Jb($n);return nm($n,i),wt.innerParams.set($n,i),Kb($n,s,i)}then(e){return xf(Lo,this).then(e)}finally(e){return xf(Lo,this).finally(e)}}const Kb=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o,isConfirmed:!1,isDenied:!1})};dr.swalPromiseResolve.set(t,i),dr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{Jx(t)},e.denyButton.onclick=()=>{Qx(t)},e.cancelButton.onclick=()=>{eb(t,r)},e.closeButton.onclick=()=>{r(Sr.close)},fb(n,e,r),bx(Fe,n,r),Gx(t,n),Gb(n),Qb(Fe,n,r),ew(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Zb=(t,e)=>{const n=Ub(t),i=Object.assign({},Wi,e,n,t);return i.showClass=Object.assign({},Wi.showClass,i.showClass),i.hideClass=Object.assign({},Wi.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},Jb=t=>{const e={popup:dt(),container:rn(),actions:po(),confirmButton:ni(),denyButton:Ps(),cancelButton:wr(),loader:yr(),closeButton:$u(),validationMessage:nl(),progressSteps:Wu()};return wt.domCache.set(t,e),e},Qb=(t,e,n)=>{const i=il();Jt(i),e.timer&&(t.timeout=new Ib(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&i&&(Ot(i),xn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&ju(e.timer)})))},ew=(t,e)=>{if(!e.toast){if(!tl(e.allowEnterKey)){Hp("allowEnterKey"),iw();return}tw(t)||nw(t,e)||Sc(-1,1)}},tw=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&cn(n))return n.focus(),!0;return!1},nw=(t,e)=>e.focusDeny&&cn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&cn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&cn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,iw=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Rt.prototype.disableButtons=_m;Rt.prototype.enableButtons=gm;Rt.prototype.getInput=hm;Rt.prototype.disableInput=xm;Rt.prototype.enableInput=vm;Rt.prototype.hideLoading=Ia;Rt.prototype.disableLoading=Ia;Rt.prototype.showValidationMessage=bm;Rt.prototype.resetValidationMessage=wm;Rt.prototype.close=Gi;Rt.prototype.closePopup=Gi;Rt.prototype.closeModal=Gi;Rt.prototype.closeToast=Gi;Rt.prototype.rejectPromise=cm;Rt.prototype.update=Tm;Rt.prototype._destroy=Am;Object.assign(Rt,Db);Object.keys(db).forEach(t=>{Rt[t]=function(...e){if($n&&$n[t])return $n[t](...e)}});Rt.DismissReason=Sr;Rt.version="11.26.18";const to=Rt;to.default=to;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const Im={confirmButtonColor:"rgb(60, 130, 191)",cancelButtonColor:"#6c757d",confirmButtonText:"確定",cancelButtonText:"取消",buttonsStyling:!0,customClass:{popup:"swal-custom-popup",title:"swal-custom-title",htmlContainer:"swal-custom-content",confirmButton:"swal-custom-confirm",cancelButton:"swal-custom-cancel"}},Ec=(t,e="")=>to.fire({...Im,icon:"warning",title:t,text:e}),sw=(t,e="",n="確定")=>to.fire({...Im,icon:"warning",title:t,text:e,showCancelButton:!0,confirmButtonText:n,confirmButtonColor:"#dc3545"}),Mr=t=>(ai("data-v-af655900"),t=t(),li(),t),rw={class:"text-editor"},ow={class:"form-group"},aw=Mr(()=>F("label",null,"文字內容",-1)),lw={class:"form-row"},cw={class:"form-group"},uw=Mr(()=>F("label",null,"字型",-1)),dw=Bu('<option value="Microsoft JhengHei" data-v-af655900>微軟正黑體</option><option value="Arial" data-v-af655900>Arial</option><option value="Times New Roman" data-v-af655900>Times New Roman</option><option value="Georgia" data-v-af655900>Georgia</option><option value="Courier New" data-v-af655900>Courier New</option>',5),fw=[dw],hw={class:"form-group"},pw=Mr(()=>F("label",null,"大小",-1)),mw={class:"form-group"},gw=Mr(()=>F("label",null,"文字顏色",-1)),_w={class:"color-row"},vw={class:"color-value"},xw=Mr(()=>F("i",{class:"fas fa-plus"},null,-1)),bw=Mr(()=>F("div",{class:"hint"},[F("i",{class:"fas fa-info-circle"}),ti(" 雙擊畫布上的文字可直接編輯 ")],-1)),ww={__name:"TextEditor",emits:["add-text"],setup(t,{emit:e}){const n=e,i=ft(""),s=ft("Microsoft JhengHei"),r=ft(16),o=ft("#000000"),a=()=>{if(!i.value.trim()){Ec("請輸入文字","文字內容不能為空白");return}n("add-text",{content:i.value,fontFamily:s.value,fontSize:r.value,color:o.value}),i.value=""};return(l,c)=>(tt(),it("div",rw,[F("div",ow,[aw,Zs(F("textarea",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),class:"form-control",placeholder:"輸入文字內容...",rows:"3"},null,512),[[ua,i.value]])]),F("div",lw,[F("div",cw,[uw,Zs(F("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),class:"form-control"},fw,512),[[ev,s.value]])]),F("div",hw,[pw,Zs(F("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u),type:"number",class:"form-control",min:"12",max:"200"},null,512),[[ua,r.value,void 0,{number:!0}]])])]),F("div",mw,[gw,F("div",_w,[Zs(F("input",{"onUpdate:modelValue":c[3]||(c[3]=u=>o.value=u),type:"color",class:"color-input"},null,512),[[ua,o.value]]),F("span",vw,En(o.value),1)])]),F("button",{class:"add-btn btn btn-primary",onClick:a},[xw,ti(" 新增至畫布 ")]),bw]))}},yw=kn(ww,[["__scopeId","data-v-af655900"]]),ol=t=>(ai("data-v-1163b916"),t=t(),li(),t),Sw={class:"panel"},Mw={class:"panel-content"},Ew=ol(()=>F("i",{class:"fas fa-cloud-upload-alt"},null,-1)),Tw=ol(()=>F("span",null,"點擊或拖曳上傳圖片",-1)),Aw=ol(()=>F("small",null,"PNG、JPG、GIF・最大 5MB",-1)),Cw=ol(()=>F("div",{class:"help-text"},[F("i",{class:"fas fa-info-circle"}),F("span",null,"圖片將自動縮放至可編輯區域內")],-1)),Rw={__name:"ImageUploader",emits:["upload-image"],setup(t,{emit:e}){const n=e,i=ft(null),s=ft(!1),r=a=>a?a.type.startsWith("image/")?a.size>5*1024*1024?(Ec("檔案過大","圖片大小不能超過 5MB"),!1):!0:(Ec("格式錯誤","請選擇圖片檔案（PNG、JPG、GIF）"),!1):!1,o=a=>{const l=a.target.files[0];r(l)&&(n("upload-image",l),a.target.value="")};return(a,l)=>(tt(),it("div",Sw,[F("div",Mw,[F("label",{class:zt(["upload-label",{dragging:s.value}])},[F("input",{ref_key:"fileInput",ref:i,type:"file",accept:"image/*",style:{display:"none"},onChange:o},null,544),Ew,Tw,Aw],2),Cw])]))}},Pw=kn(Rw,[["__scopeId","data-v-1163b916"]]),rr={Cube_B:{id:"Cube_B",name:"Cube Black",thumbnail:"/assets/products/Cube_B.png",baseImage:"/assets/products/Cube_B.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:270,y:170},topRight:{x:520,y:170},bottomLeft:{x:250,y:420},bottomRight:{x:540,y:420},width:300,height:300}},Cube_BG:{id:"Cube_BG",name:"Cube Beige",thumbnail:"/assets/products/Cube_BG.png",baseImage:"/assets/products/Cube_BG.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:270,y:170},topRight:{x:520,y:170},bottomLeft:{x:250,y:420},bottomRight:{x:540,y:420},width:300,height:300}},Cube_Blue:{id:"Cube_Blue",name:"Cube Blue",thumbnail:"/assets/products/Cube_Blue.png",baseImage:"/assets/products/Cube_Blue.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:270,y:170},topRight:{x:520,y:170},bottomLeft:{x:250,y:420},bottomRight:{x:540,y:420},width:300,height:300}},Cube_G:{id:"Cube_G",name:"Cube Gold",thumbnail:"/assets/products/Cube_G.png",baseImage:"/assets/products/Cube_G.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:270,y:170},topRight:{x:520,y:170},bottomLeft:{x:250,y:420},bottomRight:{x:540,y:420},width:300,height:300}},Cube_P:{id:"Cube_P",name:"Cube Pink",thumbnail:"/assets/products/Cube_P.png",baseImage:"/assets/products/Cube_P.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:270,y:170},topRight:{x:520,y:170},bottomLeft:{x:250,y:420},bottomRight:{x:540,y:420},width:300,height:300}},Cube_S:{id:"Cube_S",name:"Cube Silver",thumbnail:"/assets/products/Cube_S.png",baseImage:"/assets/products/Cube_S.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:270,y:170},topRight:{x:520,y:170},bottomLeft:{x:250,y:420},bottomRight:{x:540,y:420},width:300,height:300}},Duo_B:{id:"Duo_B",name:"Duo Black",thumbnail:"/assets/products/Duo_B.png",baseImage:"/assets/products/Duo_B.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_BG:{id:"Duo_BG",name:"Duo Black Gold",thumbnail:"/assets/products/Duo_BG.png",baseImage:"/assets/products/Duo_BG.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_Blue:{id:"Duo_Blue",name:"Duo Blue",thumbnail:"/assets/products/Duo_Blue.png",baseImage:"/assets/products/Duo_Blue.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_G:{id:"Duo_G",name:"Duo Gold",thumbnail:"/assets/products/Duo_G.png",baseImage:"/assets/products/Duo_G.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_Green:{id:"Duo_Green",name:"Duo Green",thumbnail:"/assets/products/Duo_Green.png",baseImage:"/assets/products/Duo_Green.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_P:{id:"Duo_P",name:"Duo Pink",thumbnail:"/assets/products/Duo_P.png",baseImage:"/assets/products/Duo_P.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_R:{id:"Duo_R",name:"Duo Red",thumbnail:"/assets/products/Duo_R.png",baseImage:"/assets/products/Duo_R.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}},Duo_S:{id:"Duo_S",name:"Duo Silver",thumbnail:"/assets/products/Duo_S.png",baseImage:"/assets/products/Duo_S.png",canvasSize:{width:800,height:600},perspective:{topLeft:{x:300,y:170},topRight:{x:520,y:150},bottomLeft:{x:330,y:470},bottomRight:{x:530,y:450},width:300,height:300}}},Tc=[{id:"scene_office",name:"辦公桌",thumbnail:"/scenes/office.jpg",url:"/scenes/office.jpg"},{id:"scene_cafe",name:"咖啡廳",thumbnail:"/scenes/cafe.jpg",url:"/scenes/cafe.jpg"},{id:"scene_outdoor",name:"戶外",thumbnail:"/scenes/outdoor.jpg",url:"/scenes/outdoor.jpg"},{id:"scene_studio",name:"攝影棚",thumbnail:"/scenes/studio.jpg",url:"/scenes/studio.jpg"},{id:"scene_home",name:"居家",thumbnail:"/scenes/home.jpg",url:"/scenes/home.jpg"},{id:"scene_dark",name:"暗色背景",thumbnail:"/scenes/dark.jpg",url:"/scenes/dark.jpg"}],vo=t=>(ai("data-v-18a179e1"),t=t(),li(),t),Lw={class:"bg-setting"},Dw=vo(()=>F("div",{class:"section-label"},[F("i",{class:"fas fa-mountain"}),F("span",null,"選擇場景背景")],-1)),Iw=vo(()=>F("div",{class:"scene-none-icon"},[F("i",{class:"fas fa-ban"})],-1)),Uw=vo(()=>F("span",null,"無背景（透明）",-1)),Nw={key:0,class:"fas fa-check-circle check-icon"},Fw={class:"scene-grid"},Ow=["title","onClick"],Bw={class:"scene-thumb"},kw=["src","alt"],zw={key:0,class:"scene-overlay"},Vw=vo(()=>F("i",{class:"fas fa-check-circle"},null,-1)),Hw=[Vw],Gw={class:"scene-name"},Ww={key:0,class:"selected-hint"},$w=vo(()=>F("i",{class:"fas fa-image"},null,-1)),Xw={__name:"BackgroundSetting",props:{modelValue:{type:String,default:null}},emits:["change-background"],setup(t){const e=t,n=nn(()=>e.modelValue?Tc.find(i=>i.id===e.modelValue)??null:null);return(i,s)=>(tt(),it("div",Lw,[Dw,F("div",{class:zt(["scene-none",{active:t.modelValue===null}]),onClick:s[0]||(s[0]=r=>i.$emit("change-background",null))},[Iw,Uw,t.modelValue===null?(tt(),it("i",Nw)):kt("",!0)],2),F("div",Fw,[(tt(!0),it(Xt,null,wp(Gr(Tc),r=>(tt(),it("div",{key:r.id,class:zt(["scene-card",{active:t.modelValue===r.id}]),title:r.name,onClick:o=>i.$emit("change-background",r.id)},[F("div",Bw,[F("img",{src:r.thumbnail,alt:r.name,loading:"lazy"},null,8,kw),t.modelValue===r.id?(tt(),it("div",zw,Hw)):kt("",!0)]),F("div",Gw,En(r.name),1)],10,Ow))),128))]),n.value?(tt(),it("div",Ww,[$w,F("span",null,"已選："+En(n.value.name),1)])):kt("",!0)]))}},qw=kn(Xw,[["__scopeId","data-v-18a179e1"]]),Qt=t=>(ai("data-v-5b489f61"),t=t(),li(),t),Yw={key:0,class:"obj-props"},jw={key:0,class:"form-group"},Kw=Qt(()=>F("label",null,"文字內容",-1)),Zw=["value"],Jw={key:1,class:"form-row"},Qw={class:"form-group"},ey=Qt(()=>F("label",null,"字型",-1)),ty=["value"],ny=Bu('<option value="Microsoft JhengHei" data-v-5b489f61>微軟正黑體</option><option value="Arial" data-v-5b489f61>Arial</option><option value="Times New Roman" data-v-5b489f61>Times New Roman</option><option value="Georgia" data-v-5b489f61>Georgia</option><option value="Courier New" data-v-5b489f61>Courier New</option>',5),iy=[ny],sy={class:"form-group"},ry=Qt(()=>F("label",null,"大小",-1)),oy=["value"],ay={key:2,class:"form-group"},ly=Qt(()=>F("label",null,"樣式",-1)),cy={class:"toggle-row"},uy=Qt(()=>F("b",null,"B",-1)),dy=[uy],fy=Qt(()=>F("i",null,"I",-1)),hy=[fy],py={key:3,class:"form-group"},my=Qt(()=>F("label",null,"文字顏色",-1)),gy={class:"color-row"},_y=["value"],vy={class:"color-value"},xy=Qt(()=>F("div",{class:"divider"},null,-1)),by={class:"form-group"},wy={class:"slider-row"},yy=["value"],Sy=["value"],My={class:"form-group"},Ey=["value"],Ty={class:"form-row"},Ay={class:"form-group"},Cy=Qt(()=>F("label",null,"寬度",-1)),Ry=["value"],Py={class:"form-group"},Ly=Qt(()=>F("label",null,"高度",-1)),Dy=["value"],Iy={class:"form-row"},Uy={class:"form-group"},Ny=Qt(()=>F("label",null,"X",-1)),Fy=["value"],Oy={class:"form-group"},By=Qt(()=>F("label",null,"Y",-1)),ky=["value"],zy=Qt(()=>F("div",{class:"divider"},null,-1)),Vy={class:"form-group"},Hy=["value"],Gy={class:"form-group"},Wy=["value"],$y=Qt(()=>F("i",{class:"fas fa-trash-alt"},null,-1)),Xy={key:1,class:"no-select"},qy=Qt(()=>F("i",{class:"fas fa-mouse-pointer"},null,-1)),Yy=Qt(()=>F("span",null,[ti("點選畫布物件"),F("br"),ti("以編輯屬性")],-1)),jy=[qy,Yy],Ky={__name:"ObjectProperties",props:{objectType:{type:String,default:null},props:{type:Object,default:()=>({})}},emits:["update","delete"],setup(t,{emit:e}){const n=e;return(i,s)=>t.objectType?(tt(),it("div",Yw,[t.objectType==="text"?(tt(),it("div",jw,[Kw,F("textarea",{value:t.props.text,class:"form-control",rows:"3",onInput:s[0]||(s[0]=r=>n("update",{text:r.target.value}))},null,40,Zw)])):kt("",!0),t.objectType==="text"?(tt(),it("div",Jw,[F("div",Qw,[ey,F("select",{value:t.props.fontFamily,class:"form-control",onChange:s[1]||(s[1]=r=>n("update",{fontFamily:r.target.value}))},iy,40,ty)]),F("div",sy,[ry,F("input",{value:t.props.fontSize,type:"number",class:"form-control",min:"8",max:"300",onInput:s[2]||(s[2]=r=>n("update",{fontSize:Number(r.target.value)}))},null,40,oy)])])):kt("",!0),t.objectType==="text"?(tt(),it("div",ay,[ly,F("div",cy,[F("button",{class:zt(["style-btn",{active:t.props.bold}]),onClick:s[3]||(s[3]=r=>n("update",{bold:!t.props.bold}))},dy,2),F("button",{class:zt(["style-btn",{active:t.props.italic}]),onClick:s[4]||(s[4]=r=>n("update",{italic:!t.props.italic}))},hy,2)])])):kt("",!0),t.objectType==="text"?(tt(),it("div",py,[my,F("div",gy,[F("input",{value:t.props.color,type:"color",class:"color-input",onInput:s[5]||(s[5]=r=>n("update",{color:r.target.value}))},null,40,_y),F("span",vy,En(t.props.color),1)])])):kt("",!0),xy,F("div",by,[F("label",null,"旋轉角度："+En(t.props.rotation)+"°",1),F("div",wy,[F("input",{value:t.props.rotation,type:"range",min:"0",max:"360",step:"1",class:"slider",onInput:s[6]||(s[6]=r=>n("update",{rotation:Number(r.target.value)}))},null,40,yy),F("input",{value:t.props.rotation,type:"number",class:"form-control num-input",min:"0",max:"360",onInput:s[7]||(s[7]=r=>n("update",{rotation:Number(r.target.value)}))},null,40,Sy)])]),F("div",My,[F("label",null,"透明度："+En(t.props.opacity)+"%",1),F("input",{value:t.props.opacity,type:"range",min:"0",max:"100",step:"1",class:"slider",onInput:s[8]||(s[8]=r=>n("update",{opacity:Number(r.target.value)/100}))},null,40,Ey)]),F("div",Ty,[F("div",Ay,[Cy,F("input",{value:t.props.width,type:"number",class:"form-control",min:"10",onInput:s[9]||(s[9]=r=>n("update",{width:Number(r.target.value)}))},null,40,Ry)]),F("div",Py,[Ly,F("input",{value:t.props.height,type:"number",class:"form-control",min:"10",onInput:s[10]||(s[10]=r=>n("update",{height:Number(r.target.value)}))},null,40,Dy)])]),F("div",Iy,[F("div",Uy,[Ny,F("input",{value:t.props.x,type:"number",class:"form-control",onInput:s[11]||(s[11]=r=>n("update",{x:Number(r.target.value)}))},null,40,Fy)]),F("div",Oy,[By,F("input",{value:t.props.y,type:"number",class:"form-control",onInput:s[12]||(s[12]=r=>n("update",{y:Number(r.target.value)}))},null,40,ky)])]),t.objectType==="image"?(tt(),it(Xt,{key:4},[zy,F("div",Vy,[F("label",null,"亮度："+En(t.props.brightness),1),F("input",{value:t.props.brightness,type:"range",min:"-100",max:"100",step:"1",class:"slider",onInput:s[13]||(s[13]=r=>n("update",{brightness:Number(r.target.value)}))},null,40,Hy)]),F("div",Gy,[F("label",null,"對比："+En(t.props.contrast),1),F("input",{value:t.props.contrast,type:"range",min:"-100",max:"100",step:"1",class:"slider",onInput:s[14]||(s[14]=r=>n("update",{contrast:Number(r.target.value)}))},null,40,Wy)])],64)):kt("",!0),F("button",{class:"delete-btn btn",onClick:s[15]||(s[15]=r=>n("delete"))},[$y,ti(" 刪除物件 ")])])):(tt(),it("div",Xy,jy))}},Zy=kn(Ky,[["__scopeId","data-v-5b489f61"]]),Ls=t=>(ai("data-v-9681f375"),t=t(),li(),t),Jy={class:"picker"},Qy={class:"picker-search"},eS=Ls(()=>F("i",{class:"fas fa-search"},null,-1)),tS=Ls(()=>F("i",{class:"fas fa-times"},null,-1)),nS=[tS],iS={class:"picker-list"},sS=Bu('<div class="picker-thumb picker-thumb--icon" data-v-9681f375><i class="fas fa-layer-group" data-v-9681f375></i></div><div class="picker-info" data-v-9681f375><div class="picker-name" data-v-9681f375>純設計稿</div><div class="picker-desc" data-v-9681f375>不套用機台外觀</div></div>',2),rS={key:0,class:"fas fa-check-circle check-icon"},oS=Ls(()=>F("div",{class:"picker-divider"},"機台列表",-1)),aS=["onClick"],lS={class:"picker-thumb"},cS=["src","alt"],uS={class:"picker-info"},dS={class:"picker-name"},fS={key:0,class:"fas fa-check-circle check-icon"},hS={key:0,class:"picker-empty"},pS=Ls(()=>F("i",{class:"fas fa-search"},null,-1)),mS=Ls(()=>F("span",null,"找不到符合的機台",-1)),gS=[pS,mS],_S={key:0,class:"picker-selected-bar"},vS=Ls(()=>F("i",{class:"fas fa-check-circle"},null,-1)),xS=Ls(()=>F("i",{class:"fas fa-times"},null,-1)),bS=[xS],wS={__name:"MachinePicker",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,s=ft(""),r=nn(()=>Object.values(rr)),o=nn(()=>{const c=s.value.trim().toLowerCase();return c?r.value.filter(u=>u.name.toLowerCase().includes(c)):r.value}),a=nn(()=>n.modelValue?n.modelValue==="pure"?{name:"純設計稿"}:rr[n.modelValue]?{name:rr[n.modelValue].name}:null:null),l=c=>{i("update:modelValue",c)};return(c,u)=>(tt(),it("div",Jy,[F("div",Qy,[eS,Zs(F("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f),type:"text",placeholder:"搜尋機台..."},null,512),[[ua,s.value]]),s.value?(tt(),it("button",{key:0,class:"clear-btn",onClick:u[1]||(u[1]=f=>s.value="")},nS)):kt("",!0)]),F("div",iS,[F("div",{class:zt(["picker-item",{active:t.modelValue==="pure"}]),onClick:u[2]||(u[2]=f=>l("pure"))},[sS,t.modelValue==="pure"?(tt(),it("i",rS)):kt("",!0)],2),oS,(tt(!0),it(Xt,null,wp(o.value,f=>(tt(),it("div",{key:f.id,class:zt(["picker-item",{active:t.modelValue===f.id}]),onClick:d=>l(f.id)},[F("div",lS,[F("img",{src:f.thumbnail,alt:f.name,loading:"lazy"},null,8,cS)]),F("div",uS,[F("div",dS,En(f.name),1)]),t.modelValue===f.id?(tt(),it("i",fS)):kt("",!0)],10,aS))),128)),o.value.length===0?(tt(),it("div",hS,gS)):kt("",!0)]),rt(xr,{name:"slide-up"},{default:Xn(()=>[a.value?(tt(),it("div",_S,[vS,F("span",null,En(a.value.name),1),F("button",{class:"unselect-btn",onClick:u[3]||(u[3]=f=>l(null))},bS)])):kt("",!0)]),_:1})]))}},yS=kn(wS,[["__scopeId","data-v-9681f375"]]),Um=t=>(ai("data-v-f5e09c9c"),t=t(),li(),t),SS={class:"sidebar"},MS={class:"sidebar-scroll"},ES={key:0,class:"no-machine-tip"},TS=Um(()=>F("i",{class:"fas fa-arrow-up"},null,-1)),AS=Um(()=>F("span",null,"請先選擇機台以解鎖設計工具",-1)),CS=[TS,AS],RS={__name:"LeftSidebar",props:{sceneBackground:{type:String,default:null},selectedObjectType:{type:String,default:null},selectedProps:{type:Object,default:()=>({})},selectedMachine:{type:String,default:null}},emits:["add-text","upload-image","change-background","update-object","delete-selected","update:selected-machine"],setup(t){const e=t,n=nn(()=>e.selectedMachine!==null),i=nn(()=>{var r;return e.selectedMachine?e.selectedMachine==="pure"?"純設計稿":((r=rr[e.selectedMachine])==null?void 0:r.name)??e.selectedMachine:null}),s=nn(()=>i.value?`選擇機台  ${i.value}`:"選擇機台");return(r,o)=>(tt(),it("div",SS,[F("div",MS,[rt(Pr,{title:s.value,icon:"fas fa-box","default-open":!0},{default:Xn(()=>[rt(yS,{"model-value":t.selectedMachine,"onUpdate:modelValue":o[0]||(o[0]=a=>r.$emit("update:selected-machine",a))},null,8,["model-value"])]),_:1},8,["title"]),rt(xr,{name:"fade-slide"},{default:Xn(()=>[n.value?kt("",!0):(tt(),it("div",ES,CS))]),_:1}),n.value?(tt(),it(Xt,{key:0},[rt(Pr,{title:"調整工具",icon:"fas fa-sliders-h","default-open":!0},{default:Xn(()=>[rt(Zy,{"object-type":t.selectedObjectType,props:t.selectedProps,onUpdate:o[1]||(o[1]=a=>r.$emit("update-object",a)),onDelete:o[2]||(o[2]=a=>r.$emit("delete-selected"))},null,8,["object-type","props"])]),_:1}),rt(Pr,{title:"文字工具",icon:"fas fa-font","default-open":!1},{default:Xn(()=>[rt(yw,{onAddText:o[3]||(o[3]=a=>r.$emit("add-text",a))})]),_:1}),rt(Pr,{title:"圖片上傳",icon:"fas fa-image","default-open":!1},{default:Xn(()=>[rt(Pw,{onUploadImage:o[4]||(o[4]=a=>r.$emit("upload-image",a))})]),_:1}),rt(Pr,{title:"背景設定",icon:"fas fa-fill-drip","default-open":!1},{default:Xn(()=>[rt(qw,{"model-value":t.sceneBackground,onChangeBackground:o[5]||(o[5]=a=>r.$emit("change-background",a))},null,8,["model-value"])]),_:1})],64)):kt("",!0)])]))}},PS=kn(RS,[["__scopeId","data-v-f5e09c9c"]]),Pn=t=>(ai("data-v-cded0df1"),t=t(),li(),t),LS={class:"p-canvas-container"},DS={class:"canvas-content"},IS={class:"canvas-toolbar"},US={class:"toolbar-group"},NS=Pn(()=>F("i",{class:"fas fa-search-plus"},null,-1)),FS=[NS],OS=Pn(()=>F("i",{class:"fas fa-search-minus"},null,-1)),BS=[OS],kS={class:"zoom-display"},zS=Pn(()=>F("i",{class:"fas fa-compress-arrows-alt"},null,-1)),VS=[zS],HS={class:"toolbar-group"},GS=Pn(()=>F("i",{class:"fas fa-eye"},null,-1)),WS=Pn(()=>F("span",{class:"btn-label"},"預覽",-1)),$S=[GS,WS],XS=Pn(()=>F("div",{class:"toolbar-divider"},null,-1)),qS=Pn(()=>F("i",{class:"fas fa-trash-alt"},null,-1)),YS=[qS],jS=Pn(()=>F("i",{class:"fas fa-eraser"},null,-1)),KS=[jS],ZS={class:"canvas-centering"},JS=["src"],QS={key:1,class:"machine-placeholder"},eM=Pn(()=>F("i",{class:"fas fa-image"},null,-1)),tM=Pn(()=>F("span",null,"機台圖載入中...",-1)),nM=[eM,tM],iM={key:2,class:"machine-error"},sM=Pn(()=>F("i",{class:"fas fa-exclamation-triangle"},null,-1)),rM=Pn(()=>F("span",null,"機台圖無法載入",-1)),oM=[sM,rM],aM={__name:"CanvasView",props:{zoomLevel:{type:Number,default:100},selectedMachine:{type:String,default:null},sceneBackground:{type:String,default:null}},emits:["canvas-ready","zoom-in","zoom-out","fit-screen","reset-view","clear-canvas","delete-selected","open-preview"],setup(t,{expose:e,emit:n}){const i=t,s=n,r=ft(null),o=ft(null),a=nn(()=>!i.selectedMachine||i.selectedMachine==="pure"?null:rr[i.selectedMachine]??null),l=nn(()=>{var M;return((M=a.value)==null?void 0:M.baseImage)??null}),c=ft(!1),u=ft(!1);Ss(l,M=>{if(!M){c.value=!1,u.value=!1;return}c.value=!1,u.value=!1;const w=new Image;w.onload=()=>{c.value=!0},w.onerror=()=>{u.value=!0},w.src=M},{immediate:!0});const f={width:520,height:480},d={left:310,top:150,width:190,height:205},p=nn(()=>{var M;return((M=a.value)==null?void 0:M.canvasSize)??f}),_=nn(()=>{var w;const M=(w=a.value)==null?void 0:w.printArea;return M?M.rect??M:d}),x=nn(()=>({width:`${p.value.width}px`,height:`${p.value.height}px`})),m=nn(()=>({left:`${_.value.left}px`,top:`${_.value.top}px`,width:`${_.value.width}px`,height:`${_.value.height}px`})),h=nn(()=>{if(!i.sceneBackground)return{};const M=Tc.find(w=>w.id===i.sceneBackground);return M?(console.log({backgroundImage:`url(${M.url})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),{backgroundImage:`url(./${M.url})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}):{}}),E=async()=>{const{isConfirmed:M}=await sw("清空畫布","確定要清空畫布嗎？所有內容將被刪除。","確定清空");M&&s("clear-canvas")};return co(()=>{s("canvas-ready",{wrapperEl:r.value,printArea:_.value})}),Ss(_,M=>{s("canvas-ready",{wrapperEl:r.value,printArea:M})}),e({wrapperRef:r,canvasRef:o}),(M,w)=>(tt(),it("div",LS,[F("div",DS,[F("div",IS,[F("div",US,[F("button",{class:"toolbar-btn",title:"放大 (Ctrl +)",onClick:w[0]||(w[0]=C=>M.$emit("zoom-in"))},FS),F("button",{class:"toolbar-btn",title:"縮小 (Ctrl -)",onClick:w[1]||(w[1]=C=>M.$emit("zoom-out"))},BS),F("div",kS,En(t.zoomLevel)+"%",1),F("button",{class:"toolbar-btn",title:"重設縮放",onClick:w[2]||(w[2]=C=>M.$emit("reset-view"))},VS)]),F("div",HS,[F("button",{class:"toolbar-btn",title:"預覽",onClick:w[3]||(w[3]=C=>M.$emit("open-preview"))},$S),XS,F("button",{class:"toolbar-btn toolbar-btn--danger",title:"刪除選取 (Delete)",onClick:w[4]||(w[4]=C=>M.$emit("delete-selected"))},YS),F("button",{class:"toolbar-btn toolbar-btn--danger",title:"清空畫布",onClick:E},KS)])]),F("div",{ref_key:"wrapperRef",ref:r,class:"canvas-wrapper"},[F("div",{class:"scene-layer",style:_s(h.value)},null,4),F("div",ZS,[F("div",{class:"machine-stage",style:_s(x.value)},[c.value&&l.value?(tt(),it("img",{key:0,class:"machine-base-img",src:l.value,alt:"機台底圖",draggable:"false"},null,8,JS)):!c.value&&l.value?(tt(),it("div",QS,nM)):u.value?(tt(),it("div",iM,oM)):kt("",!0),F("div",{class:"canvas-print-area",style:_s(m.value)},[F("canvas",{id:"main-canvas",ref_key:"canvasRef",ref:o,class:"design-canvas"},null,512)],4),F("div",{class:"print-area-border",style:_s(m.value)},null,4)],4)])],512)])]))}},lM=kn(aM,[["__scopeId","data-v-cded0df1"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="183",or={ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,Pf=1,uM=2,da=1,Nm=2,zr=3,Zi=0,un=1,gi=2,bi=0,ar=1,Lf=2,Df=3,If=4,dM=5,ms=100,fM=101,hM=102,pM=103,mM=104,gM=200,_M=201,vM=202,xM=203,Ac=204,Cc=205,bM=206,wM=207,yM=208,SM=209,MM=210,EM=211,TM=212,AM=213,CM=214,Rc=0,Pc=1,Lc=2,hr=3,Dc=4,Ic=5,Uc=6,Nc=7,Fm=0,RM=1,PM=2,Jn=0,Om=1,Bm=2,km=3,zm=4,Vm=5,Hm=6,Gm=7,Wm=300,Ts=301,pr=302,Tl=303,Al=304,al=306,Fc=1e3,_i=1001,Oc=1002,Vt=1003,LM=1004,Do=1005,jt=1006,Cl=1007,xs=1008,_n=1009,$m=1010,Xm=1011,no=1012,nd=1013,ii=1014,Kn=1015,yi=1016,id=1017,sd=1018,io=1020,qm=35902,Ym=35899,jm=1021,Km=1022,Bn=1023,Si=1026,bs=1027,Zm=1028,rd=1029,mr=1030,od=1031,ad=1033,fa=33776,ha=33777,pa=33778,ma=33779,Bc=35840,kc=35841,zc=35842,Vc=35843,Hc=36196,Gc=37492,Wc=37496,$c=37488,Xc=37489,qc=37490,Yc=37491,jc=37808,Kc=37809,Zc=37810,Jc=37811,Qc=37812,eu=37813,tu=37814,nu=37815,iu=37816,su=37817,ru=37818,ou=37819,au=37820,lu=37821,cu=36492,uu=36494,du=36495,fu=36283,hu=36284,pu=36285,mu=36286,DM=3200,Jm=0,IM=1,Vi="",Mn="srgb",gr="srgb-linear",Fa="linear",pt="srgb",Ns=7680,Uf=519,UM=512,NM=513,FM=514,ld=515,OM=516,BM=517,cd=518,kM=519,Nf=35044,Ff="300 es",Zn=2e3,so=2001;function zM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ro(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VM(){const t=ro("canvas");return t.style.display="block",t}const Of={};function Bf(...t){const e="THREE."+t.shift();console.log(e,...t)}function Qm(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function We(...t){t=Qm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function lt(...t){t=Qm(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Oa(...t){const e=t.join(" ");e in Of||(Of[e]=!0,We(...t))}function HM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const GM={[Rc]:Pc,[Lc]:Uc,[Dc]:Nc,[hr]:Ic,[Pc]:Rc,[Uc]:Lc,[Nc]:Dc,[Ic]:hr};class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,gu=180/Math.PI;function xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function WM(t,e){return(t%e+e)%e}function Rl(t,e,n){return(1-n)*t+n*e}function Lr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const $M={DEG2RAD:ga};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ji{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+f*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let h=1-a;if(m<.9995){const E=Math.acos(m),M=Math.sin(E);h=Math.sin(h*E)/M,a=Math.sin(a*E)/M,l=l*h+d*a,c=c*h+p*a,u=u*h+_*a,f=f*h+x*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+_*a,f=f*h+x*a;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new G,kf=new Ji;class je{constructor(e,n,i,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],h=s[6],E=s[1],M=s[4],w=s[7],C=s[2],A=s[5],D=s[8];return r[0]=o*x+a*E+l*C,r[3]=o*m+a*M+l*A,r[6]=o*h+a*w+l*D,r[1]=c*x+u*E+f*C,r[4]=c*m+u*M+f*A,r[7]=c*h+u*w+f*D,r[2]=d*x+p*E+_*C,r[5]=d*m+p*M+_*A,r[8]=d*h+p*w+_*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=n*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ll.makeScale(e,n)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ll.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new je,zf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XM(){const t={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gr]:{primaries:e,whitePoint:i,transfer:Fa,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const ot=XM();function wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fs;class qM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fs===void 0&&(Fs=ro("canvas")),Fs.width=e.width,Fs.height=e.height;const s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ro("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wi(n[i]/255)*255):n[i]=wi(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YM=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Dl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let jM=0;const Il=new G;class Kt extends Ds{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=_i,s=_i,r=jt,o=xs,a=Bn,l=_n,c=Kt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=xo(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Wm;Kt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,w=(p+1)/2,C=(h+1)/2,A=(u+d)/4,D=(f+x)/4,v=(_+m)/4;return M>w&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=D/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=v/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=v/r),this.set(i,s,r,n),this}let E=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-x)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KM extends Ds{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new Kt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new ud(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends KM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class eg extends Kt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZM extends Kt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,_,x,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,_,x,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JM,e,QM)}lookAt(e,n,i){const s=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Pi.crossVectors(i,pn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Pi.crossVectors(i,pn)),Pi.normalize(),Io.crossVectors(pn,Pi),s[0]=Pi.x,s[4]=Io.x,s[8]=pn.x,s[1]=Pi.y,s[5]=Io.y,s[9]=pn.y,s[2]=Pi.z,s[6]=Io.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],E=i[3],M=i[7],w=i[11],C=i[15],A=s[0],D=s[4],v=s[8],S=s[12],K=s[1],P=s[5],U=s[9],H=s[13],J=s[2],X=s[6],W=s[10],O=s[14],z=s[3],V=s[7],ne=s[11],ue=s[15];return r[0]=o*A+a*K+l*J+c*z,r[4]=o*D+a*P+l*X+c*V,r[8]=o*v+a*U+l*W+c*ne,r[12]=o*S+a*H+l*O+c*ue,r[1]=u*A+f*K+d*J+p*z,r[5]=u*D+f*P+d*X+p*V,r[9]=u*v+f*U+d*W+p*ne,r[13]=u*S+f*H+d*O+p*ue,r[2]=_*A+x*K+m*J+h*z,r[6]=_*D+x*P+m*X+h*V,r[10]=_*v+x*U+m*W+h*ne,r[14]=_*S+x*H+m*O+h*ue,r[3]=E*A+M*K+w*J+C*z,r[7]=E*D+M*P+w*X+C*V,r[11]=E*v+M*U+w*W+C*ne,r[15]=E*S+M*H+w*O+C*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15],E=l*p-c*d,M=a*p-c*f,w=a*d-l*f,C=o*p-c*u,A=o*d-l*u,D=o*f-a*u;return n*(x*E-m*M+h*w)-i*(_*E-m*C+h*A)+s*(_*M-x*C+h*D)-r*(_*w-x*A+m*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],E=n*a-i*o,M=n*l-s*o,w=n*c-r*o,C=i*l-s*a,A=i*c-r*a,D=s*c-r*l,v=u*x-f*_,S=u*m-d*_,K=u*h-p*_,P=f*m-d*x,U=f*h-p*x,H=d*h-p*m,J=E*H-M*U+w*P+C*K-A*S+D*v;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/J;return e[0]=(a*H-l*U+c*P)*X,e[1]=(s*U-i*H-r*P)*X,e[2]=(x*D-m*A+h*C)*X,e[3]=(d*A-f*D-p*C)*X,e[4]=(l*K-o*H-c*S)*X,e[5]=(n*H-s*K+r*S)*X,e[6]=(m*w-_*D-h*M)*X,e[7]=(u*D-d*w+p*M)*X,e[8]=(o*U-a*K+c*v)*X,e[9]=(i*K-n*U-r*v)*X,e[10]=(_*A-x*w+h*E)*X,e[11]=(f*w-u*A-p*E)*X,e[12]=(a*S-o*P-l*v)*X,e[13]=(n*P-i*S+s*v)*X,e[14]=(x*M-_*C-m*E)*X,e[15]=(u*C-f*M+d*E)*X,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,_=r*f,x=o*u,m=o*f,h=a*f,E=l*c,M=l*u,w=l*f,C=i.x,A=i.y,D=i.z;return s[0]=(1-(x+h))*C,s[1]=(p+w)*C,s[2]=(_-M)*C,s[3]=0,s[4]=(p-w)*A,s[5]=(1-(d+h))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(_+M)*D,s[9]=(m-E)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Os.set(s[0],s[1],s[2]).length();const a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);const c=1/o,u=1/a,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Zn,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),p=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===Zn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Zn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),p=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===Zn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Os=new G,Dn=new St,JM=new G(0,0,0),QM=new G(1,1,1),Pi=new G,Io=new G,pn=new G,Hf=new St,Gf=new Ji;class si{constructor(e=0,n=0,i=0,s=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eE=0;const Wf=new G,Bs=new Ji,di=new St,Uo=new G,Dr=new G,tE=new G,nE=new Ji,$f=new G(1,0,0),Xf=new G(0,1,0),qf=new G(0,0,1),Yf={type:"added"},iE={type:"removed"},ks={type:"childadded",child:null},Ul={type:"childremoved",child:null};class Ht extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,n=new si,i=new Ji,s=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis($f,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis(qf,e)}translateOnAxis(e,n){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($f,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis(qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uo.copy(e):Uo.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Dr,Uo,this.up):di.lookAt(Uo,Dr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(di),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yf),ks.child=e,this.dispatchEvent(ks),ks.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iE),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yf),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,tE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,nE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class No extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sE={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new No;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Fl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ot.workingColorSpace){if(e=WM(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Fl(o,r,e+1/3),this.g=Fl(o,r,e),this.b=Fl(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,n=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=ng[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return ot.workingToColorSpace($t.copy(this),e),Math.round(et($t.r*255,0,255))*65536+Math.round(et($t.g*255,0,255))*256+Math.round(et($t.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace($t.copy(this),n);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Mn){ot.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,s=$t.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Fo);const i=Rl(Li.h,Fo.h,n),s=Rl(Li.s,Fo.s,n),r=Rl(Li.l,Fo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new nt;nt.NAMES=ng;class dd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=n,this.far=i}clone(){return new dd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rE extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const In=new G,fi=new G,Ol=new G,hi=new G,zs=new G,Vs=new G,jf=new G,Bl=new G,kl=new G,zl=new G,Vl=new Et,Hl=new Et,Gl=new Et;class Fn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),In.subVectors(e,n),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){In.subVectors(s,n),fi.subVectors(i,n),Ol.subVectors(e,n);const o=In.dot(In),a=In.dot(fi),l=In.dot(Ol),c=fi.dot(fi),u=fi.dot(Ol),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Hl,r.y),o.addScaledVector(Gl,r.z),o}static isFrontFacing(e,n,i,s){return In.subVectors(i,n),fi.subVectors(e,n),In.cross(fi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),In.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,i),Vs.subVectors(r,i),Bl.subVectors(e,i);const l=zs.dot(Bl),c=Vs.dot(Bl);if(l<=0&&c<=0)return n.copy(i);kl.subVectors(e,s);const u=zs.dot(kl),f=Vs.dot(kl);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(zs,o);zl.subVectors(e,r);const p=zs.dot(zl),_=Vs.dot(zl);if(_>=0&&p<=_)return n.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Vs,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return jf.subVectors(r,s),a=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(jf,a);const h=1/(m+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(zs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Bo.subVectors(this.max,Ir),Hs.subVectors(e.a,Ir),Gs.subVectors(e.b,Ir),Ws.subVectors(e.c,Ir),Di.subVectors(Gs,Hs),Ii.subVectors(Ws,Gs),os.subVectors(Hs,Ws);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-os.z,os.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,os.z,0,-os.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-os.y,os.x,0];return!Wl(n,Hs,Gs,Ws,Bo)||(n=[1,0,0,0,1,0,0,0,1],!Wl(n,Hs,Gs,Ws,Bo))?!1:(ko.crossVectors(Di,Ii),n=[ko.x,ko.y,ko.z],Wl(n,Hs,Gs,Ws,Bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new G,new G,new G,new G,new G,new G,new G,new G],Un=new G,Oo=new bo,Hs=new G,Gs=new G,Ws=new G,Di=new G,Ii=new G,os=new G,Ir=new G,Bo=new G,ko=new G,as=new G;function Wl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){as.fromArray(t,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=n.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Pt=new G,zo=new Ye;let oE=0;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nf,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lr(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lr(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lr(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}}class ig extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sg extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vn extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}const aE=new bo,Ur=new G,$l=new G;class ll{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):aE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const n=Ur.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add($l)),this.expandByPoint(Ur.copy(e.center).sub($l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lE=0;const Sn=new St,Xl=new Ht,$s=new G,mn=new bo,Nr=new bo,Nt=new G;class zn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zM(e)?sg:ig)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(mn.min,Nr.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,Nr.max),mn.expandByPoint(Nt)):(mn.expandByPoint(Nr.min),mn.expandByPoint(Nr.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),Nt.add($s)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new G,l[v]=new G;const c=new G,u=new G,f=new G,d=new Ye,p=new Ye,_=new Ye,x=new G,m=new G;function h(v,S,K){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,K),d.fromBufferAttribute(r,v),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,K),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[v].add(x),a[S].add(x),a[K].add(x),l[v].add(m),l[S].add(m),l[K].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,S=E.length;v<S;++v){const K=E[v],P=K.start,U=K.count;for(let H=P,J=P+U;H<J;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new G,w=new G,C=new G,A=new G;function D(v){C.fromBufferAttribute(s,v),A.copy(C);const S=a[v];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),w.crossVectors(A,S);const P=w.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,S=E.length;v<S;++v){const K=E[v],P=K.start,U=K.count;for(let H=P,J=P+U;H<J;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new ei(d,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cE=0;class Er extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=ar,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Cc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new G,ql=new G,Vo=new G,Ui=new G,Yl=new G,Ho=new G,jl=new G;class fd{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){ql.copy(e).add(n).multiplyScalar(.5),Vo.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(ql);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Vo),a=Ui.dot(this.direction),l=-Ui.dot(Vo),c=Ui.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ql).addScaledVector(Vo,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,s,r){Yl.subVectors(n,e),Ho.subVectors(i,e),jl.crossVectors(Yl,Ho);let o=this.direction.dot(jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Ho.crossVectors(Ui,Ho));if(l<0)return null;const c=a*this.direction.dot(Yl.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(jl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rg extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kf=new St,ls=new fd,Go=new ll,Zf=new G,Wo=new G,$o=new G,Xo=new G,Kl=new G,qo=new G,Jf=new G,Yo=new G;class ri extends Ht{constructor(e=new zn,n=new rg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Kl.fromBufferAttribute(f,e),o?qo.addScaledVector(Kl,u):qo.addScaledVector(Kl.sub(n),u))}n.add(qo)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Go.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Go,Zf)===null||ls.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Kf.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Kf),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ls)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,C=M;w<C;w+=3){const A=a.getX(w),D=a.getX(w+1),v=a.getX(w+2);s=jo(this,h,e,i,c,u,f,A,D,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const E=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);s=jo(this,o,e,i,c,u,f,E,M,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,C=M;w<C;w+=3){const A=w,D=w+1,v=w+2;s=jo(this,h,e,i,c,u,f,A,D,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const E=m,M=m+1,w=m+2;s=jo(this,o,e,i,c,u,f,E,M,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function uE(t,e,n,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Yo);return c<n.near||c>n.far?null:{distance:c,point:Yo.clone(),object:t}}function jo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Wo),t.getVertexPosition(l,$o),t.getVertexPosition(c,Xo);const u=uE(t,e,n,i,Wo,$o,Xo,Jf);if(u){const f=new G;Fn.getBarycoord(Jf,Wo,$o,Xo,f),s&&(u.uv=Fn.getInterpolatedAttribute(s,a,l,c,f,new Ye)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,a,l,c,f,new Ye)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};Fn.getNormal(Wo,$o,Xo,d.normal),u.face=d,u.barycoord=f}return u}class dE extends Kt{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Vt,u=Vt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=new G,fE=new G,hE=new je;class zi{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Zl.subVectors(i,n).cross(fE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||hE.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new ll,pE=new Ye(.5,.5),Ko=new G;class hd{constructor(e=new zi,n=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],_=r[8],x=r[9],m=r[10],h=r[11],E=r[12],M=r[13],w=r[14],C=r[15];if(s[0].setComponents(c-o,p-u,h-_,C-E).normalize(),s[1].setComponents(c+o,p+u,h+_,C+E).normalize(),s[2].setComponents(c+a,p+f,h+x,C+M).normalize(),s[3].setComponents(c-a,p-f,h-x,C-M).normalize(),i)s[4].setComponents(l,d,m,w).normalize(),s[5].setComponents(c-l,p-d,h-m,C-w).normalize();else if(s[4].setComponents(c-l,p-d,h-m,C-w).normalize(),n===Zn)s[5].setComponents(c+l,p+d,h+m,C+w).normalize();else if(n===so)s[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const n=pE.distanceTo(e.center);return cs.radius=.7071067811865476+n,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ko.x=s.normal.x>0?e.max.x:e.min.x,Ko.y=s.normal.y>0?e.max.y:e.min.y,Ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class og extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ba=new G,ka=new G,Qf=new St,Fr=new fd,Zo=new ll,Jl=new G,eh=new G;class mE extends Ht{constructor(e=new zn,n=new og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ba.fromBufferAttribute(n,s-1),ka.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ba.distanceTo(ka);e.setAttribute("lineDistance",new vn(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Qf.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Qf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=u.getX(x),E=u.getX(x+1),M=Jo(this,e,Fr,l,h,E,x);M&&n.push(M)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),h=Jo(this,e,Fr,l,x,m,_-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=Jo(this,e,Fr,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=Jo(this,e,Fr,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jo(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ba.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),n.distanceSqToSegment(Ba,ka,Jl,eh)>i)return;Jl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:eh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const th=new G,nh=new G;class gE extends mE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)th.fromBufferAttribute(n,s),nh.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+th.distanceTo(nh);e.setAttribute("lineDistance",new vn(i,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ag extends Kt{constructor(e=[],n=Ts,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oo extends Kt{constructor(e,n,i=ii,s,r,o,a=Vt,l=Vt,c,u=Si,f=1){if(u!==Si&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _E extends oo{constructor(e,n=ii,i=Ts,s,r,o=Vt,a=Vt,l,c=Si){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lg extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tr extends zn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(f,2));function _(x,m,h,E,M,w,C,A,D,v,S){const K=w/D,P=C/v,U=w/2,H=C/2,J=A/2,X=D+1,W=v+1;let O=0,z=0;const V=new G;for(let ne=0;ne<W;ne++){const ue=ne*P-H;for(let pe=0;pe<X;pe++){const Ce=pe*K-U;V[x]=Ce*E,V[m]=ue*M,V[h]=J,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[h]=A>0?1:-1,u.push(V.x,V.y,V.z),f.push(pe/D),f.push(1-ne/v),O+=1}}for(let ne=0;ne<v;ne++)for(let ue=0;ue<D;ue++){const pe=d+ue+X*ne,Ce=d+ue+X*(ne+1),Ge=d+(ue+1)+X*(ne+1),Xe=d+(ue+1)+X*ne;l.push(pe,Ce,Xe),l.push(Ce,Ge,Xe),z+=6}a.addGroup(p,z,S),p+=z,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cl extends zn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const E=h*d-o;for(let M=0;M<c;M++){const w=M*f-r;_.push(w,-E,0),x.push(0,0,1),m.push(M/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const M=E+c*h,w=E+c*(h+1),C=E+1+c*(h+1),A=E+1+c*h;p.push(M,w,A),p.push(w,C,A)}this.setIndex(p),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}function _r(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=_r(t[n]);for(const s in i)e[s]=i[s]}return e}function vE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const xE={clone:_r,merge:tn};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=wE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=vE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yE extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ih extends Er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jm,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SE extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ME extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ql={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(sh(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!sh(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function sh(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class EE{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const TE=new EE;class pd{constructor(e){this.manager=e!==void 0?e:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class AE extends pd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ql.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let f=Xs.get(o);f===void 0&&(f=[],Xs.set(o,f)),f.push({onLoad:n,onError:s})}return o}const a=ro("img");function l(){u(),n&&n(this);const f=Xs.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Xs.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),Ql.remove(`image:${e}`);const d=Xs.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(f)}Xs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ql.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class CE extends pd{constructor(e){super(e)}load(e,n,i,s){const r=new Kt,o=new AE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class md extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ec=new St,rh=new G,oh=new G;class ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hd,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rh.setFromMatrixPosition(e.matrixWorld),n.position.copy(rh),oh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(oh),n.updateMatrixWorld(),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===so||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qo=new G,ea=new Ji,Gn=new G;class dg extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qo,ea,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ea,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Qo,ea,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,ea,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new G,ah=new Ye,lh=new Ye;class gn extends dg{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=gu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gu*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,ah,lh),n.subVectors(lh,ah)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class RE extends ug{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class PE extends md{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new RE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class gd extends dg{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class LE extends ug{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ch extends md{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new LE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class DE extends md{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,Ys=1;class IE extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(qs,Ys,e,n);s.layers=this.layers,this.add(s);const r=new gn(qs,Ys,e,n);r.layers=this.layers,this.add(r);const o=new gn(qs,Ys,e,n);o.layers=this.layers,this.add(o);const a=new gn(qs,Ys,e,n);a.layers=this.layers,this.add(a);const l=new gn(qs,Ys,e,n);l.layers=this.layers,this.add(l);const c=new gn(qs,Ys,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class UE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class NE extends gE{constructor(e=10,n=10,i=4473924,s=8947848){i=new nt(i),s=new nt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,p=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===r?i:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const u=new zn;u.setAttribute("position",new vn(l,3)),u.setAttribute("color",new vn(c,3));const f=new og({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class FE extends Ds{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){We("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function dh(t,e,n,i){const s=OE(i);switch(n){case jm:return t*e;case Zm:return t*e/s.components*s.byteLength;case rd:return t*e/s.components*s.byteLength;case mr:return t*e*2/s.components*s.byteLength;case od:return t*e*2/s.components*s.byteLength;case Km:return t*e*3/s.components*s.byteLength;case Bn:return t*e*4/s.components*s.byteLength;case ad:return t*e*4/s.components*s.byteLength;case fa:case ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kc:case Vc:return Math.max(t,16)*Math.max(e,8)/4;case Bc:case zc:return Math.max(t,8)*Math.max(e,8)/2;case Hc:case Gc:case $c:case Xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wc:case qc:case Yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case iu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case su:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ou:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case au:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cu:case uu:case du:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fu:case hu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case pu:case mu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(t){switch(t){case _n:case $m:return{byteLength:1,components:1};case no:case Xm:case yi:return{byteLength:2,components:1};case id:case sd:return{byteLength:2,components:4};case ii:case nd:case Kn:return{byteLength:4,components:1};case qm:case Ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function BE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
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
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JE=`#ifdef USE_IRIDESCENCE
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
#endif`,QE=`#ifdef USE_BUMPMAP
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uT=`vec3 transformedNormal = objectNormal;
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
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
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
}`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
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
#endif`,OT=`uniform sampler2D dfgLUT;
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
}`,BT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YT=`#if defined( USE_POINTS_UV )
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
#endif`,jT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`#ifdef USE_MORPHTARGETS
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
#endif`,tA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aA=`#ifdef USE_NORMALMAP
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
#endif`,lA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SA=`float getShadowMask() {
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
}`,MA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EA=`#ifdef USE_SKINNING
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
#endif`,TA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,CA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#ifdef USE_TRANSMISSION
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
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
}`,$A=`#if DEPTH_PACKING == 3200
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
}`,XA=`#define DISTANCE
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
}`,qA=`#define DISTANCE
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`uniform float scale;
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
}`,ZA=`uniform vec3 diffuse;
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
}`,JA=`#include <common>
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
}`,QA=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,s1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,d1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:kE,alphahash_pars_fragment:zE,alphamap_fragment:VE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:WE,aomap_fragment:$E,aomap_pars_fragment:XE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:jE,beginnormal_vertex:KE,bsdfs:ZE,iridescence_fragment:JE,bumpmap_pars_fragment:QE,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:sT,color_pars_fragment:rT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:dT,displacementmap_vertex:fT,emissivemap_fragment:hT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:bT,envmap_physical_pars_fragment:LT,envmap_vertex:wT,fog_vertex:yT,fog_pars_vertex:ST,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:TT,lightmap_pars_fragment:AT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:RT,lights_pars_begin:PT,lights_toon_fragment:DT,lights_toon_pars_fragment:IT,lights_phong_fragment:UT,lights_phong_pars_fragment:NT,lights_physical_fragment:FT,lights_physical_pars_fragment:OT,lights_fragment_begin:BT,lights_fragment_maps:kT,lights_fragment_end:zT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:$T,map_pars_fragment:XT,map_particle_fragment:qT,map_particle_pars_fragment:YT,metalnessmap_fragment:jT,metalnessmap_pars_fragment:KT,morphinstance_vertex:ZT,morphcolor_vertex:JT,morphnormal_vertex:QT,morphtarget_pars_vertex:eA,morphtarget_vertex:tA,normal_fragment_begin:nA,normal_fragment_maps:iA,normal_pars_fragment:sA,normal_pars_vertex:rA,normal_vertex:oA,normalmap_pars_fragment:aA,clearcoat_normal_fragment_begin:lA,clearcoat_normal_fragment_maps:cA,clearcoat_pars_fragment:uA,iridescence_pars_fragment:dA,opaque_fragment:fA,packing:hA,premultiplied_alpha_fragment:pA,project_vertex:mA,dithering_fragment:gA,dithering_pars_fragment:_A,roughnessmap_fragment:vA,roughnessmap_pars_fragment:xA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:wA,shadowmap_vertex:yA,shadowmask_pars_fragment:SA,skinbase_vertex:MA,skinning_pars_vertex:EA,skinning_vertex:TA,skinnormal_vertex:AA,specularmap_fragment:CA,specularmap_pars_fragment:RA,tonemapping_fragment:PA,tonemapping_pars_fragment:LA,transmission_fragment:DA,transmission_pars_fragment:IA,uv_pars_fragment:UA,uv_pars_vertex:NA,uv_vertex:FA,worldpos_vertex:OA,background_vert:BA,background_frag:kA,backgroundCube_vert:zA,backgroundCube_frag:VA,cube_vert:HA,cube_frag:GA,depth_vert:WA,depth_frag:$A,distance_vert:XA,distance_frag:qA,equirect_vert:YA,equirect_frag:jA,linedashed_vert:KA,linedashed_frag:ZA,meshbasic_vert:JA,meshbasic_frag:QA,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:s1,meshnormal_frag:r1,meshphong_vert:o1,meshphong_frag:a1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:d1,points_vert:f1,points_frag:h1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:_1},Se={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Yn={basic:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:tn([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:tn([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:tn([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:tn([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:tn([Se.lights,Se.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Yn.physical={uniforms:tn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ta={r:0,b:0,g:0},us=new si,v1=new St;function x1(t,e,n,i,s,r){const o=new nt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function p(E){let M=E.isScene===!0?E.background:null;if(M&&M.isTexture){const w=E.backgroundBlurriness>0;M=e.get(M,w)}return M}function _(E){let M=!1;const w=p(E);w===null?m(o,a):w&&w.isColor&&(m(w,1),M=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(E,M){const w=p(M);w&&(w.isCubeTexture||w.mapping===al)?(c===void 0&&(c=new ri(new Tr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:_r(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),us.copy(M.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(us)),c.material.toneMapped=ot.getTransfer(w.colorSpace)!==pt,(u!==w||f!==w.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ri(new cl(2,2),new oi({name:"BackgroundMaterial",uniforms:_r(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ot.getTransfer(w.colorSpace)!==pt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=t.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,M){E.getRGB(ta,cg(t)),n.buffers.color.setClear(ta.r,ta.g,ta.b,M,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:_,addToRenderList:x,dispose:h}}function b1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(P,U,H,J,X){let W=!1;const O=f(P,J,H,U);r!==O&&(r=O,c(r.object)),W=p(P,J,H,X),W&&_(P,J,H,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,w(P,U,H,J),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function f(P,U,H,J){const X=J.wireframe===!0;let W=i[U.id];W===void 0&&(W={},i[U.id]=W);const O=P.isInstancedMesh===!0?P.id:0;let z=W[O];z===void 0&&(z={},W[O]=z);let V=z[H.id];V===void 0&&(V={},z[H.id]=V);let ne=V[X];return ne===void 0&&(ne=d(l()),V[X]=ne),ne}function d(P){const U=[],H=[],J=[];for(let X=0;X<n;X++)U[X]=0,H[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:J,object:P,attributes:{},index:null}}function p(P,U,H,J){const X=r.attributes,W=U.attributes;let O=0;const z=H.getAttributes();for(const V in z)if(z[V].location>=0){const ue=X[V];let pe=W[V];if(pe===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;O++}return r.attributesNum!==O||r.index!==J}function _(P,U,H,J){const X={},W=U.attributes;let O=0;const z=H.getAttributes();for(const V in z)if(z[V].location>=0){let ue=W[V];ue===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),X[V]=pe,O++}r.attributes=X,r.attributesNum=O,r.index=J}function x(){const P=r.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function m(P){h(P,0)}function h(P,U){const H=r.newAttributes,J=r.enabledAttributes,X=r.attributeDivisors;H[P]=1,J[P]===0&&(t.enableVertexAttribArray(P),J[P]=1),X[P]!==U&&(t.vertexAttribDivisor(P,U),X[P]=U)}function E(){const P=r.newAttributes,U=r.enabledAttributes;for(let H=0,J=U.length;H<J;H++)U[H]!==P[H]&&(t.disableVertexAttribArray(H),U[H]=0)}function M(P,U,H,J,X,W,O){O===!0?t.vertexAttribIPointer(P,U,H,X,W):t.vertexAttribPointer(P,U,H,J,X,W)}function w(P,U,H,J){x();const X=J.attributes,W=H.getAttributes(),O=U.defaultAttributeValues;for(const z in W){const V=W[z];if(V.location>=0){let ne=X[z];if(ne===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const ue=ne.normalized,pe=ne.itemSize,Ce=e.get(ne);if(Ce===void 0)continue;const Ge=Ce.buffer,Xe=Ce.type,B=Ce.bytesPerElement,le=Xe===t.INT||Xe===t.UNSIGNED_INT||ne.gpuType===nd;if(ne.isInterleavedBufferAttribute){const ce=ne.data,Be=ce.stride,Le=ne.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)h(V.location+ke,ce.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ke=0;ke<V.locationSize;ke++)M(V.location+ke,pe/V.locationSize,Xe,ue,Be*B,(Le+pe/V.locationSize*ke)*B,le)}else{if(ne.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)h(V.location+ce,ne.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ce=0;ce<V.locationSize;ce++)M(V.location+ce,pe/V.locationSize,Xe,ue,pe*B,pe/V.locationSize*ce*B,le)}}else if(O!==void 0){const ue=O[z];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(V.location,ue);break;case 3:t.vertexAttrib3fv(V.location,ue);break;case 4:t.vertexAttrib4fv(V.location,ue);break;default:t.vertexAttrib1fv(V.location,ue)}}}}E()}function C(){S();for(const P in i){const U=i[P];for(const H in U){const J=U[H];for(const X in J){const W=J[X];for(const O in W)u(W[O].object),delete W[O];delete J[X]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const H in U){const J=U[H];for(const X in J){const W=J[X];for(const O in W)u(W[O].object),delete W[O];delete J[X]}}delete i[P.id]}function D(P){for(const U in i){const H=i[U];for(const J in H){const X=H[J];if(X[P.id]===void 0)continue;const W=X[P.id];for(const O in W)u(W[O].object),delete W[O];delete X[P.id]}}}function v(P){for(const U in i){const H=i[U],J=P.isInstancedMesh===!0?P.id:0,X=H[J];if(X!==void 0){for(const W in X){const O=X[W];for(const z in O)u(O[z].object),delete O[z];delete X[W]}delete H[J],Object.keys(H).length===0&&delete i[U]}}}function S(){K(),o=!0,r!==s&&(r=s,c(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:K,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function w1(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y1(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Bn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const v=D===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==_n&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kn&&!v)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:w,maxSamples:C,samples:A}}function S1(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new zi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,M=E*4;let w=h.clippingState||null;l.value=w,w=u(_,d,M,p);for(let C=0;C!==M;++C)w[C]=n[C];h.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,w=p;M!==x;++M,w+=4)o.copy(f[M]).applyMatrix4(E,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const $i=4,fh=[.125,.215,.35,.446,.526,.582],gs=20,M1=256,Or=new gd,hh=new nt;let tc=null,nc=0,ic=0,sc=!1;const E1=new G;class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=E1}=r;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=sc,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:yi,format:Bn,colorSpace:gr,depthBuffer:!1},s=mh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T1(r)),this._blurMaterial=C1(r,e,n),this._ggxMaterial=A1(r,e,n)}return s}_compileMaterial(e){const n=new ri(new zn,e);this._renderer.compile(n,Or)}_sceneToCubeUV(e,n,i,s,r){const l=new gn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(hh),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Tr,new rg({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,h=!0):(m.color.copy(hh),h=!0);for(let M=0;M<6;M++){const w=M%3;w===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):w===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const C=this._cubeSize;js(s,w*C,M>2?C:0,C,C),f.setRenderTarget(s),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ts||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;js(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Or)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-$i?i-_+$i:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,js(r,m,h,3*x,2*x),s.setRenderTarget(r),s.render(a,Or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,js(e,m,h,3*x,2*x),s.setRenderTarget(e),s.render(a,Or)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gs-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):gs;m>gs&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const h=[];let E=0;for(let D=0;D<gs;++D){const v=D/x,S=Math.exp(-v*v/2);h.push(S),D===0?E+=S:D<m&&(E+=2*S)}for(let D=0;D<h.length;D++)h[D]=h[D]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const w=this._sizeLods[s],C=3*w*(s>M-$i?s-M+$i:0),A=4*(this._cubeSize-w);js(n,C,A,3*w,2*w),l.setRenderTarget(n),l.render(f,Or)}}function T1(t){const e=[],n=[],i=[];let s=t;const r=t-$i+1+fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-$i?l=fh[o-t+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,h=1,E=new Float32Array(x*_*p),M=new Float32Array(m*_*p),w=new Float32Array(h*_*p);for(let A=0;A<p;A++){const D=A%3*2/3-1,v=A>2?0:-1,S=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];E.set(S,x*_*A),M.set(d,m*_*A);const K=[A,A,A,A,A,A];w.set(K,h*_*A)}const C=new zn;C.setAttribute("position",new ei(E,x)),C.setAttribute("uv",new ei(M,m)),C.setAttribute("faceIndex",new ei(w,h)),i.push(new ri(C,null)),s>$i&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function mh(t,e,n){const i=new Qn(t,e,n);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function A1(t,e,n){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function C1(t,e,n){const i=new Float32Array(gs),s=new G(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _h(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}class hg extends Qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ag(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tr(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:bi});r.uniforms.tEquirect.value=n;const o=new ri(s,r),a=n.minFilter;return n.minFilter===xs&&(n.minFilter=jt),new IE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function R1(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Tl||p===Al)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new hg(_.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const p=d.mapping,_=p===Tl||p===Al,x=p===Ts||p===pr;if(_||x){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new ph(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const E=d.image;return _&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new ph(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Tl?d.mapping=Ts:p===Al&&(d.mapping=pr),d}function l(d){let p=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function P1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Oa("WebGLRenderer: "+i+" extension not supported."),s}}}function L1(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(p!==null){const E=p.array;x=p.version;for(let M=0,w=E.length;M<w;M+=3){const C=E[M+0],A=E[M+1],D=E[M+2];d.push(C,A,A,D,D,C)}}else{const E=_.array;x=_.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const C=M+0,A=M+1,D=M+2;d.push(C,A,A,D,D,C)}}const m=new(_.count>=65535?sg:ig)(d,1);m.version=x;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function D1(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,_);let h=0;for(let E=0;E<_;E++)h+=p[E]*x[E];n.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function I1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function U1(t,e,n){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let K=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",K)};var p=K;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),m===!0&&(w=3);let C=a.attributes.position.count*w,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*A*4*f),v=new eg(D,C,A,f);v.type=Kn,v.needsUpdate=!0;const S=w*4;for(let P=0;P<f;P++){const U=h[P],H=E[P],J=M[P],X=C*A*4*P;for(let W=0;W<U.count;W++){const O=W*S;_===!0&&(s.fromBufferAttribute(U,W),D[X+O+0]=s.x,D[X+O+1]=s.y,D[X+O+2]=s.z,D[X+O+3]=0),x===!0&&(s.fromBufferAttribute(H,W),D[X+O+4]=s.x,D[X+O+5]=s.y,D[X+O+6]=s.z,D[X+O+7]=0),m===!0&&(s.fromBufferAttribute(J,W),D[X+O+8]=s.x,D[X+O+9]=s.y,D[X+O+10]=s.z,D[X+O+11]=J.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new Ye(C,A)},i.set(a,d),a.addEventListener("dispose",K)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function N1(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const F1={[Om]:"LINEAR_TONE_MAPPING",[Bm]:"REINHARD_TONE_MAPPING",[km]:"CINEON_TONE_MAPPING",[zm]:"ACES_FILMIC_TONE_MAPPING",[Hm]:"AGX_TONE_MAPPING",[Gm]:"NEUTRAL_TONE_MAPPING",[Vm]:"CUSTOM_TONE_MAPPING"};function O1(t,e,n,i,s){const r=new Qn(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new Qn(e,n,{type:yi,depthBuffer:!1,stencilBuffer:!1}),a=new zn;a.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new vn([0,2,0,0,2,0],2));const l=new yE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ri(a,l),u=new gd(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(E,M){r.setSize(E,M),o.setSize(E,M);for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(E,M)}},this.setEffects=function(E){m=E,h=m.length>0&&m[0].isRenderPass===!0;const M=r.width,w=r.height;for(let C=0;C<m.length;C++){const A=m[C];A.setSize&&A.setSize(M,w)}},this.begin=function(E,M){if(p||E.toneMapping===Jn&&m.length===0)return!1;if(x=M,M!==null){const w=M.width,C=M.height;(r.width!==w||r.height!==C)&&this.setSize(w,C)}return h===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=Jn,!0},this.hasRenderPass=function(){return h},this.end=function(E,M){E.toneMapping=_,p=!0;let w=r,C=o;for(let A=0;A<m.length;A++){const D=m[A];if(D.enabled!==!1&&(D.render(E,C,w,M),D.needsSwap!==!1)){const v=w;w=C,C=v}}if(f!==E.outputColorSpace||d!==E.toneMapping){f=E.outputColorSpace,d=E.toneMapping,l.defines={},ot.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const A=F1[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(x),E.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const pg=new Kt,_u=new oo(1,1),mg=new eg,gg=new ZM,_g=new ag,vh=[],xh=[],bh=new Float32Array(16),wh=new Float32Array(9),yh=new Float32Array(4);function Ar(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dl(t,e){let n=xh[e];n===void 0&&(n=new Int32Array(e),xh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function B1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function H1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;yh.set(i),t.uniformMatrix2fv(this.addr,!1,yh),It(n,i)}}function G1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;wh.set(i),t.uniformMatrix3fv(this.addr,!1,wh),It(n,i)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;bh.set(i),t.uniformMatrix4fv(this.addr,!1,bh),It(n,i)}}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function j1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Q1(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(_u.compareFunction=n.isReversedDepthBuffer()?cd:ld,r=_u):r=pg,n.setTexture2D(e||r,s)}function eC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||gg,s)}function tC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||_g,s)}function nC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||mg,s)}function iC(t){switch(t){case 5126:return B1;case 35664:return k1;case 35665:return z1;case 35666:return V1;case 35674:return H1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return $1;case 35667:case 35671:return X1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return j1;case 36294:return K1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return nC}}function sC(t,e){t.uniform1fv(this.addr,e)}function rC(t,e){const n=Ar(e,this.size,2);t.uniform2fv(this.addr,n)}function oC(t,e){const n=Ar(e,this.size,3);t.uniform3fv(this.addr,n)}function aC(t,e){const n=Ar(e,this.size,4);t.uniform4fv(this.addr,n)}function lC(t,e){const n=Ar(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cC(t,e){const n=Ar(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uC(t,e){const n=Ar(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dC(t,e){t.uniform1iv(this.addr,e)}function fC(t,e){t.uniform2iv(this.addr,e)}function hC(t,e){t.uniform3iv(this.addr,e)}function pC(t,e){t.uniform4iv(this.addr,e)}function mC(t,e){t.uniform1uiv(this.addr,e)}function gC(t,e){t.uniform2uiv(this.addr,e)}function _C(t,e){t.uniform3uiv(this.addr,e)}function vC(t,e){t.uniform4uiv(this.addr,e)}function xC(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=_u:o=pg;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function bC(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||gg,r[o])}function wC(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||_g,r[o])}function yC(t,e,n){const i=this.cache,s=e.length,r=dl(n,s);Dt(i,r)||(t.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||mg,r[o])}function SC(t){switch(t){case 5126:return sC;case 35664:return rC;case 35665:return oC;case 35666:return aC;case 35674:return lC;case 35675:return cC;case 35676:return uC;case 5124:case 35670:return dC;case 35667:case 35671:return fC;case 35668:case 35672:return hC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return _C;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return bC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return yC}}class MC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iC(n.type)}}class EC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=SC(n.type)}}class TC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function Sh(t,e){t.seq.push(e),t.map[e.id]=e}function AC(t,e,n){const i=t.name,s=i.length;for(rc.lastIndex=0;;){const r=rc.exec(i),o=rc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sh(n,c===void 0?new MC(a,t,e):new EC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new TC(a),Sh(n,f)),n=f}}}class _a{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);AC(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Mh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CC=37297;let RC=0;function PC(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Eh=new je;function LC(t){ot._getMatrix(Eh,ot.workingColorSpace,t);const e=`mat3( ${Eh.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Fa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Th(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+PC(t.getShaderSource(e),a)}else return r}function DC(t,e){const n=LC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const IC={[Om]:"Linear",[Bm]:"Reinhard",[km]:"Cineon",[zm]:"ACESFilmic",[Hm]:"AgX",[Gm]:"Neutral",[Vm]:"Custom"};function UC(t,e){const n=IC[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const na=new G;function NC(){ot.getLuminanceCoefficients(na);const t=na.x.toFixed(4),e=na.y.toFixed(4),n=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function OC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vr(t){return t!==""}function Ah(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kC=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(t){return t.replace(kC,VC)}const zC=new Map;function VC(t,e){let n=Ke[e];if(n===void 0){const i=zC.get(e);if(i!==void 0)n=Ke[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vu(n)}const HC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(t){return t.replace(HC,GC)}function GC(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const WC={[da]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function $C(t){return WC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XC={[Ts]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[al]:"ENVMAP_TYPE_CUBE_UV"};function qC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":XC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const YC={[pr]:"ENVMAP_MODE_REFRACTION"};function jC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":YC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KC={[Fm]:"ENVMAP_BLENDING_MULTIPLY",[RM]:"ENVMAP_BLENDING_MIX",[PM]:"ENVMAP_BLENDING_ADD"};function ZC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":KC[t.combine]||"ENVMAP_BLENDING_NONE"}function JC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QC(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$C(n),c=qC(n),u=jC(n),f=ZC(n),d=JC(n),p=FC(n),_=OC(r),x=s.createProgram();let m,h,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Vr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Vr).join(`
`),h.length>0&&(h+=`
`)):(m=[Ph(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),h=[Ph(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Jn?"#define TONE_MAPPING":"",n.toneMapping!==Jn?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Jn?UC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,DC("linearToOutputTexel",n.outputColorSpace),NC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vr).join(`
`)),o=vu(o),o=Ah(o,n),o=Ch(o,n),a=vu(a),a=Ah(a,n),a=Ch(a,n),o=Rh(o),a=Rh(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=E+m+o,w=E+h+a,C=Mh(s,s.VERTEX_SHADER,M),A=Mh(s,s.FRAGMENT_SHADER,w);s.attachShader(x,C),s.attachShader(x,A),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(P){if(t.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(C)||"",J=s.getShaderInfoLog(A)||"",X=U.trim(),W=H.trim(),O=J.trim();let z=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,C,A);else{const ne=Th(s,C,"vertex"),ue=Th(s,A,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ne+`
`+ue)}else X!==""?We("WebGLProgram: Program Info Log:",X):(W===""||O==="")&&(V=!1);V&&(P.diagnostics={runnable:z,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:O,prefix:h}})}s.deleteShader(C),s.deleteShader(A),v=new _a(s,x),S=BC(s,x)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let K=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=s.getProgramParameter(x,CC)),K},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let e2=0;class t2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new n2(e),n.set(e,i)),i}}class n2{constructor(e){this.id=e2++,this.code=e,this.usedTimes=0}}function i2(t,e,n,i,s,r){const o=new tg,a=new t2,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,S,K,P,U){const H=P.fog,J=U.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||X,W),z=O&&O.mapping===al?O.image.height:null,V=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ne=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=ne!==void 0?ne.length:0;let pe=0;J.morphAttributes.position!==void 0&&(pe=1),J.morphAttributes.normal!==void 0&&(pe=2),J.morphAttributes.color!==void 0&&(pe=3);let Ce,Ge,Xe,B;if(V){const ht=Yn[V];Ce=ht.vertexShader,Ge=ht.fragmentShader}else Ce=v.vertexShader,Ge=v.fragmentShader,a.update(v),Xe=a.getVertexShaderID(v),B=a.getFragmentShaderID(v);const le=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,Le=U.isBatchedMesh===!0,ke=!!v.map,R=!!v.matcap,I=!!O,q=!!v.aoMap,ie=!!v.lightMap,ee=!!v.bumpMap,he=!!v.normalMap,T=!!v.displacementMap,fe=!!v.emissiveMap,de=!!v.metalnessMap,ae=!!v.roughnessMap,re=v.anisotropy>0,y=v.clearcoat>0,g=v.dispersion>0,L=v.iridescence>0,$=v.sheen>0,te=v.transmission>0,Z=re&&!!v.anisotropyMap,we=y&&!!v.clearcoatMap,ge=y&&!!v.clearcoatNormalMap,De=y&&!!v.clearcoatRoughnessMap,Ve=L&&!!v.iridescenceMap,me=L&&!!v.iridescenceThicknessMap,ve=$&&!!v.sheenColorMap,ye=$&&!!v.sheenRoughnessMap,Te=!!v.specularMap,Ae=!!v.specularColorMap,Je=!!v.specularIntensityMap,N=te&&!!v.transmissionMap,be=te&&!!v.thicknessMap,xe=!!v.gradientMap,Pe=!!v.alphaMap,_e=v.alphaTest>0,oe=!!v.alphaHash,Ie=!!v.extensions;let $e=Jn;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&($e=t.toneMapping);const bt={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:Ce,fragmentShader:Ge,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Le,batchingColor:Le&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:gr,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:R,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:z,aoMap:q,lightMap:ie,bumpMap:ee,normalMap:he,displacementMap:T,emissiveMap:fe,normalMapObjectSpace:he&&v.normalMapType===IM,normalMapTangentSpace:he&&v.normalMapType===Jm,metalnessMap:de,roughnessMap:ae,anisotropy:re,anisotropyMap:Z,clearcoat:y,clearcoatMap:we,clearcoatNormalMap:ge,clearcoatRoughnessMap:De,dispersion:g,iridescence:L,iridescenceMap:Ve,iridescenceThicknessMap:me,sheen:$,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:Te,specularColorMap:Ae,specularIntensityMap:Je,transmission:te,transmissionMap:N,thicknessMap:be,gradientMap:xe,opaque:v.transparent===!1&&v.blending===ar&&v.alphaToCoverage===!1,alphaMap:Pe,alphaTest:_e,alphaHash:oe,combine:v.combine,mapUv:ke&&_(v.map.channel),aoMapUv:q&&_(v.aoMap.channel),lightMapUv:ie&&_(v.lightMap.channel),bumpMapUv:ee&&_(v.bumpMap.channel),normalMapUv:he&&_(v.normalMap.channel),displacementMapUv:T&&_(v.displacementMap.channel),emissiveMapUv:fe&&_(v.emissiveMap.channel),metalnessMapUv:de&&_(v.metalnessMap.channel),roughnessMapUv:ae&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:we&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(v.sheenRoughnessMap.channel),specularMapUv:Te&&_(v.specularMap.channel),specularColorMapUv:Ae&&_(v.specularColorMap.channel),specularIntensityMapUv:Je&&_(v.specularIntensityMap.channel),transmissionMapUv:N&&_(v.transmissionMap.channel),thicknessMapUv:be&&_(v.thicknessMap.channel),alphaMapUv:Pe&&_(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(he||re),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!J.attributes.uv&&(ke||Pe),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||J.attributes.normal===void 0&&he===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:U.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&K.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:fe&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gi,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ie&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&v.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const K in v.defines)S.push(K),S.push(v.defines[K]);return v.isRawShaderMaterial===!1&&(h(S,v),E(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function h(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=p[v.type];let K;if(S){const P=Yn[S];K=xE.clone(P.uniforms)}else K=v.uniforms;return K}function w(v,S){let K=u.get(S);return K!==void 0?++K.usedTimes:(K=new QC(t,S,v,s),c.push(K),u.set(S,K)),K}function C(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function D(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:D}}function s2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function r2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Lh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dh(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,_,x,m,h){let E=t[e];return E===void 0?(E={id:d.id,object:d,geometry:p,material:_,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:h},t[e]=E):(E.id=d.id,E.object=d,E.geometry=p,E.material=_,E.materialVariant=o(d),E.groupOrder=x,E.renderOrder=d.renderOrder,E.z=m,E.group=h),e++,E}function l(d,p,_,x,m,h){const E=a(d,p,_,x,m,h);_.transmission>0?i.push(E):_.transparent===!0?s.push(E):n.push(E)}function c(d,p,_,x,m,h){const E=a(d,p,_,x,m,h);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):n.unshift(E)}function u(d,p){n.length>1&&n.sort(d||r2),i.length>1&&i.sort(p||Lh),s.length>1&&s.sort(p||Lh)}function f(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function o2(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Dh,t.set(i,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function a2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new nt};break;case"SpotLight":n={position:new G,direction:new G,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function l2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let c2=0;function u2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function d2(t){const e=new a2,n=l2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new St,o=new St;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,E=0,M=0,w=0,C=0,A=0,D=0;c.sort(u2);for(let S=0,K=c.length;S<K;S++){const P=c[S],U=P.color,H=P.intensity,J=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===mr?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*H,f+=U.g*H,d+=U.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],H);D++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,z=n.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(H),W.distance=J,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const O=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,O.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=O.matrix,P.castShadow){const z=n.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=X,w++}x++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const O=P.shadow,z=n.get(P);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=P.shadow.matrix,M++}i.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[h]=W,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==h||v.numDirectionalShadows!==E||v.numPointShadows!==M||v.numSpotShadows!==w||v.numSpotMaps!==C||v.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,v.directionalLength=p,v.pointLength=_,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=h,v.numDirectionalShadows=E,v.numPointShadows=M,v.numSpotShadows=w,v.numSpotMaps=C,v.numLightProbes=D,i.version=c2++)}function l(c,u){let f=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const M=c[h];if(M.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ih(t){const e=new d2(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function f2(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ih(t),e.set(s,[a])):r>=o.length?(a=new Ih(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const h2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`,m2=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],g2=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Uh=new St,Br=new G,oc=new G;function _2(t,e,n){let i=new hd;const s=new Ye,r=new Ye,o=new Et,a=new SE,l=new ME,c={},u=n.maxTextureSize,f={[Zi]:un,[un]:Zi,[gi]:gi},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:h2,fragmentShader:p2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ri(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let h=this.type;this.render=function(A,D,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Nm&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=da);const S=t.getRenderTarget(),K=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(bi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=h!==this.type;H&&D.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(X=>X.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,X=A.length;J<X;J++){const W=A[J],O=W.shadow;if(O===void 0){We("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));const V=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===zr){if(W.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Qn(s.x,s.y,{format:mr,type:yi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new oo(s.x,s.y,Kn),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=Si,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Vt,O.map.depthTexture.magFilter=Vt}else W.isPointLight?(O.map=new hg(s.x),O.map.depthTexture=new _E(s.x,ii)):(O.map=new Qn(s.x,s.y),O.map.depthTexture=new oo(s.x,s.y,ii)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=Si,this.type===da?(O.map.depthTexture.compareFunction=V?cd:ld,O.map.depthTexture.minFilter=jt,O.map.depthTexture.magFilter=jt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Vt,O.map.depthTexture.magFilter=Vt);O.camera.updateProjectionMatrix()}const ne=O.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ne;ue++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ue),t.clear();else{ue===0&&(t.setRenderTarget(O.map),t.clear());const pe=O.getViewport(ue);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),U.viewport(o)}if(W.isPointLight){const pe=O.camera,Ce=O.matrix,Ge=W.distance||pe.far;Ge!==pe.far&&(pe.far=Ge,pe.updateProjectionMatrix()),Br.setFromMatrixPosition(W.matrixWorld),pe.position.copy(Br),oc.copy(pe.position),oc.add(m2[ue]),pe.up.copy(g2[ue]),pe.lookAt(oc),pe.updateMatrixWorld(),Ce.makeTranslation(-Br.x,-Br.y,-Br.z),Uh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Uh,pe.coordinateSystem,pe.reversedDepth)}else O.updateMatrices(W);i=O.getFrustum(),w(D,v,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===zr&&E(O,v),O.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(S,K,P)};function E(A,D){const v=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(s.x,s.y,{format:mr,type:yi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(D,null,v,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(D,null,v,p,x,null)}function M(A,D,v,S){let K=null;const P=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)K=P;else if(K=v.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const U=K.uuid,H=D.uuid;let J=c[U];J===void 0&&(J={},c[U]=J);let X=J[H];X===void 0&&(X=K.clone(),J[H]=X,D.addEventListener("dispose",C)),K=X}if(K.visible=D.visible,K.wireframe=D.wireframe,S===zr?K.side=D.shadowSide!==null?D.shadowSide:D.side:K.side=D.shadowSide!==null?D.shadowSide:f[D.side],K.alphaMap=D.alphaMap,K.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,K.map=D.map,K.clipShadows=D.clipShadows,K.clippingPlanes=D.clippingPlanes,K.clipIntersection=D.clipIntersection,K.displacementMap=D.displacementMap,K.displacementScale=D.displacementScale,K.displacementBias=D.displacementBias,K.wireframeLinewidth=D.wireframeLinewidth,K.linewidth=D.linewidth,v.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const U=t.properties.get(K);U.light=v}return K}function w(A,D,v,S,K){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&K===zr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const H=e.update(A),J=A.material;if(Array.isArray(J)){const X=H.groups;for(let W=0,O=X.length;W<O;W++){const z=X[W],V=J[z.materialIndex];if(V&&V.visible){const ne=M(A,V,S,K);A.onBeforeShadow(t,A,D,v,H,ne,z),t.renderBufferDirect(v,null,H,ne,A,z),A.onAfterShadow(t,A,D,v,H,ne,z)}}}else if(J.visible){const X=M(A,J,S,K);A.onBeforeShadow(t,A,D,v,H,X,null),t.renderBufferDirect(v,null,H,X,A,null),A.onAfterShadow(t,A,D,v,H,X,null)}}const U=A.children;for(let H=0,J=U.length;H<J;H++)w(U[H],D,v,S,K)}function C(A){A.target.removeEventListener("dispose",C);for(const v in c){const S=c[v],K=A.target.uuid;K in S&&(S[K].dispose(),delete S[K])}}}function v2(t,e){function n(){let N=!1;const be=new Et;let xe=null;const Pe=new Et(0,0,0,0);return{setMask:function(_e){xe!==_e&&!N&&(t.colorMask(_e,_e,_e,_e),xe=_e)},setLocked:function(_e){N=_e},setClear:function(_e,oe,Ie,$e,bt){bt===!0&&(_e*=$e,oe*=$e,Ie*=$e),be.set(_e,oe,Ie,$e),Pe.equals(be)===!1&&(t.clearColor(_e,oe,Ie,$e),Pe.copy(be))},reset:function(){N=!1,xe=null,Pe.set(-1,0,0,0)}}}function i(){let N=!1,be=!1,xe=null,Pe=null,_e=null;return{setReversed:function(oe){if(be!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),be=oe;const $e=_e;_e=null,this.setClear($e)}},getReversed:function(){return be},setTest:function(oe){oe?le(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(oe){xe!==oe&&!N&&(t.depthMask(oe),xe=oe)},setFunc:function(oe){if(be&&(oe=GM[oe]),Pe!==oe){switch(oe){case Rc:t.depthFunc(t.NEVER);break;case Pc:t.depthFunc(t.ALWAYS);break;case Lc:t.depthFunc(t.LESS);break;case hr:t.depthFunc(t.LEQUAL);break;case Dc:t.depthFunc(t.EQUAL);break;case Ic:t.depthFunc(t.GEQUAL);break;case Uc:t.depthFunc(t.GREATER);break;case Nc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=oe}},setLocked:function(oe){N=oe},setClear:function(oe){_e!==oe&&(_e=oe,be&&(oe=1-oe),t.clearDepth(oe))},reset:function(){N=!1,xe=null,Pe=null,_e=null,be=!1}}}function s(){let N=!1,be=null,xe=null,Pe=null,_e=null,oe=null,Ie=null,$e=null,bt=null;return{setTest:function(ht){N||(ht?le(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(ht){be!==ht&&!N&&(t.stencilMask(ht),be=ht)},setFunc:function(ht,ci,ui){(xe!==ht||Pe!==ci||_e!==ui)&&(t.stencilFunc(ht,ci,ui),xe=ht,Pe=ci,_e=ui)},setOp:function(ht,ci,ui){(oe!==ht||Ie!==ci||$e!==ui)&&(t.stencilOp(ht,ci,ui),oe=ht,Ie=ci,$e=ui)},setLocked:function(ht){N=ht},setClear:function(ht){bt!==ht&&(t.clearStencil(ht),bt=ht)},reset:function(){N=!1,be=null,xe=null,Pe=null,_e=null,oe=null,Ie=null,$e=null,bt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,E=null,M=null,w=null,C=null,A=null,D=new nt(0,0,0),v=0,S=!1,K=null,P=null,U=null,H=null,J=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,O=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=O>=2);let V=null,ne={};const ue=t.getParameter(t.SCISSOR_BOX),pe=t.getParameter(t.VIEWPORT),Ce=new Et().fromArray(ue),Ge=new Et().fromArray(pe);function Xe(N,be,xe,Pe){const _e=new Uint8Array(4),oe=t.createTexture();t.bindTexture(N,oe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<xe;Ie++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(be+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return oe}const B={};B[t.TEXTURE_2D]=Xe(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=Xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=Xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=Xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(hr),ee(!1),he(Pf),le(t.CULL_FACE),q(bi);function le(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function ce(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Be(N,be){return f[N]!==be?(t.bindFramebuffer(N,be),f[N]=be,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=be),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(N,be){let xe=p,Pe=!1;if(N){xe=d.get(be),xe===void 0&&(xe=[],d.set(be,xe));const _e=N.textures;if(xe.length!==_e.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Ie=_e.length;oe<Ie;oe++)xe[oe]=t.COLOR_ATTACHMENT0+oe;xe.length=_e.length,Pe=!0}}else xe[0]!==t.BACK&&(xe[0]=t.BACK,Pe=!0);Pe&&t.drawBuffers(xe)}function ke(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const R={[ms]:t.FUNC_ADD,[fM]:t.FUNC_SUBTRACT,[hM]:t.FUNC_REVERSE_SUBTRACT};R[pM]=t.MIN,R[mM]=t.MAX;const I={[gM]:t.ZERO,[_M]:t.ONE,[vM]:t.SRC_COLOR,[Ac]:t.SRC_ALPHA,[MM]:t.SRC_ALPHA_SATURATE,[yM]:t.DST_COLOR,[bM]:t.DST_ALPHA,[xM]:t.ONE_MINUS_SRC_COLOR,[Cc]:t.ONE_MINUS_SRC_ALPHA,[SM]:t.ONE_MINUS_DST_COLOR,[wM]:t.ONE_MINUS_DST_ALPHA,[EM]:t.CONSTANT_COLOR,[TM]:t.ONE_MINUS_CONSTANT_COLOR,[AM]:t.CONSTANT_ALPHA,[CM]:t.ONE_MINUS_CONSTANT_ALPHA};function q(N,be,xe,Pe,_e,oe,Ie,$e,bt,ht){if(N===bi){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),N!==dM){if(N!==m||ht!==S){if((h!==ms||w!==ms)&&(t.blendEquation(t.FUNC_ADD),h=ms,w=ms),ht)switch(N){case ar:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lf:t.blendFunc(t.ONE,t.ONE);break;case Df:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case If:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",N);break}else switch(N){case ar:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Df:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",N);break}E=null,M=null,C=null,A=null,D.set(0,0,0),v=0,m=N,S=ht}return}_e=_e||be,oe=oe||xe,Ie=Ie||Pe,(be!==h||_e!==w)&&(t.blendEquationSeparate(R[be],R[_e]),h=be,w=_e),(xe!==E||Pe!==M||oe!==C||Ie!==A)&&(t.blendFuncSeparate(I[xe],I[Pe],I[oe],I[Ie]),E=xe,M=Pe,C=oe,A=Ie),($e.equals(D)===!1||bt!==v)&&(t.blendColor($e.r,$e.g,$e.b,bt),D.copy($e),v=bt),m=N,S=!1}function ie(N,be){N.side===gi?ce(t.CULL_FACE):le(t.CULL_FACE);let xe=N.side===un;be&&(xe=!xe),ee(xe),N.blending===ar&&N.transparent===!1?q(bi):q(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Pe=N.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){K!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),K=N)}function he(N){N!==cM?(le(t.CULL_FACE),N!==P&&(N===Pf?t.cullFace(t.BACK):N===uM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),P=N}function T(N){N!==U&&(W&&t.lineWidth(N),U=N)}function fe(N,be,xe){N?(le(t.POLYGON_OFFSET_FILL),(H!==be||J!==xe)&&(H=be,J=xe,o.getReversed()&&(be=-be),t.polygonOffset(be,xe))):ce(t.POLYGON_OFFSET_FILL)}function de(N){N?le(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function ae(N){N===void 0&&(N=t.TEXTURE0+X-1),V!==N&&(t.activeTexture(N),V=N)}function re(N,be,xe){xe===void 0&&(V===null?xe=t.TEXTURE0+X-1:xe=V);let Pe=ne[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ne[xe]=Pe),(Pe.type!==N||Pe.texture!==be)&&(V!==xe&&(t.activeTexture(xe),V=xe),t.bindTexture(N,be||B[N]),Pe.type=N,Pe.texture=be)}function y(){const N=ne[V];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function $(){try{t.texSubImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function te(){try{t.texSubImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function ge(){try{t.texStorage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function De(){try{t.texStorage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function Ve(){try{t.texImage2D(...arguments)}catch(N){lt("WebGLState:",N)}}function me(){try{t.texImage3D(...arguments)}catch(N){lt("WebGLState:",N)}}function ve(N){Ce.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ce.copy(N))}function ye(N){Ge.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ge.copy(N))}function Te(N,be){let xe=c.get(be);xe===void 0&&(xe=new WeakMap,c.set(be,xe));let Pe=xe.get(N);Pe===void 0&&(Pe=t.getUniformBlockIndex(be,N.name),xe.set(N,Pe))}function Ae(N,be){const Pe=c.get(be).get(N);l.get(be)!==Pe&&(t.uniformBlockBinding(be,Pe,N.__bindingPointIndex),l.set(be,Pe))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},V=null,ne={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,E=null,M=null,w=null,C=null,A=null,D=new nt(0,0,0),v=0,S=!1,K=null,P=null,U=null,H=null,J=null,Ce.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:ce,bindFramebuffer:Be,drawBuffers:Le,useProgram:ke,setBlending:q,setMaterial:ie,setFlipSided:ee,setCullFace:he,setLineWidth:T,setPolygonOffset:fe,setScissorTest:de,activeTexture:ae,bindTexture:re,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ve,texImage3D:me,updateUBOMapping:Te,uniformBlockBinding:Ae,texStorage2D:ge,texStorage3D:De,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:we,scissor:ve,viewport:ye,reset:Je}}function x2(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):ro("canvas")}function x(y,g,L){let $=1;const te=re(y);if((te.width>L||te.height>L)&&($=L/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Z=Math.floor($*te.width),we=Math.floor($*te.height);f===void 0&&(f=_(Z,we));const ge=g?_(Z,we):f;return ge.width=Z,ge.height=we,ge.getContext("2d").drawImage(y,0,0,Z,we),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+we+")."),ge}else return"data"in y&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){t.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(y,g,L,$,te=!1){if(y!==null){if(t[y]!==void 0)return t[y];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=g;if(g===t.RED&&(L===t.FLOAT&&(Z=t.R32F),L===t.HALF_FLOAT&&(Z=t.R16F),L===t.UNSIGNED_BYTE&&(Z=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.R8UI),L===t.UNSIGNED_SHORT&&(Z=t.R16UI),L===t.UNSIGNED_INT&&(Z=t.R32UI),L===t.BYTE&&(Z=t.R8I),L===t.SHORT&&(Z=t.R16I),L===t.INT&&(Z=t.R32I)),g===t.RG&&(L===t.FLOAT&&(Z=t.RG32F),L===t.HALF_FLOAT&&(Z=t.RG16F),L===t.UNSIGNED_BYTE&&(Z=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.RG8UI),L===t.UNSIGNED_SHORT&&(Z=t.RG16UI),L===t.UNSIGNED_INT&&(Z=t.RG32UI),L===t.BYTE&&(Z=t.RG8I),L===t.SHORT&&(Z=t.RG16I),L===t.INT&&(Z=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),L===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),L===t.UNSIGNED_INT&&(Z=t.RGB32UI),L===t.BYTE&&(Z=t.RGB8I),L===t.SHORT&&(Z=t.RGB16I),L===t.INT&&(Z=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),L===t.UNSIGNED_INT&&(Z=t.RGBA32UI),L===t.BYTE&&(Z=t.RGBA8I),L===t.SHORT&&(Z=t.RGBA16I),L===t.INT&&(Z=t.RGBA32I)),g===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),g===t.RGBA){const we=te?Fa:ot.getTransfer($);L===t.FLOAT&&(Z=t.RGBA32F),L===t.HALF_FLOAT&&(Z=t.RGBA16F),L===t.UNSIGNED_BYTE&&(Z=we===pt?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(y,g){let L;return y?g===null||g===ii||g===io?L=t.DEPTH24_STENCIL8:g===Kn?L=t.DEPTH32F_STENCIL8:g===no&&(L=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ii||g===io?L=t.DEPTH_COMPONENT24:g===Kn?L=t.DEPTH_COMPONENT32F:g===no&&(L=t.DEPTH_COMPONENT16),L}function C(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==jt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function A(y){const g=y.target;g.removeEventListener("dispose",A),v(g),g.isVideoTexture&&u.delete(g)}function D(y){const g=y.target;g.removeEventListener("dispose",D),K(g)}function v(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,$=d.get(L);if($){const te=$[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(y),Object.keys($).length===0&&d.delete(L)}i.remove(y)}function S(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const L=y.source,$=d.get(L);delete $[g.__cacheKey],o.memory.textures--}function K(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let te=0;te<g.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(g.__webglFramebuffer[$][te]);else t.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)t.deleteFramebuffer(g.__webglFramebuffer[$]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let $=0,te=L.length;$<te;$++){const Z=i.get(L[$]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(L[$])}i.remove(y)}let P=0;function U(){P=0}function H(){const y=P;return y>=s.maxTextures&&We("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),P+=1,y}function J(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function X(y,g){const L=i.get(y);if(y.isVideoTexture&&de(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const $=y.image;if($===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{B(L,y,g);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function W(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){B(L,y,g);return}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function O(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){B(L,y,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function z(y,g){const L=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&L.__version!==y.version){le(L,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const V={[Fc]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[Oc]:t.MIRRORED_REPEAT},ne={[Vt]:t.NEAREST,[LM]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[Cl]:t.LINEAR_MIPMAP_NEAREST,[xs]:t.LINEAR_MIPMAP_LINEAR},ue={[UM]:t.NEVER,[kM]:t.ALWAYS,[NM]:t.LESS,[ld]:t.LEQUAL,[FM]:t.EQUAL,[cd]:t.GEQUAL,[OM]:t.GREATER,[BM]:t.NOTEQUAL};function pe(y,g){if(g.type===Kn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===jt||g.magFilter===Cl||g.magFilter===Do||g.magFilter===xs||g.minFilter===jt||g.minFilter===Cl||g.minFilter===Do||g.minFilter===xs)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,V[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,V[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,V[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,ne[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Vt||g.minFilter!==Do&&g.minFilter!==xs||g.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ce(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",A));const $=g.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const Z=J(g);if(Z!==y.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[Z].usedTimes++;const we=te[y.__cacheKey];we!==void 0&&(te[y.__cacheKey].usedTimes--,we.usedTimes===0&&S(g)),y.__cacheKey=Z,y.__webglTexture=te[Z].texture}return L}function Ge(y,g,L){return Math.floor(Math.floor(y/L)/g)}function Xe(y,g,L,$){const Z=y.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,$,g.data);else{Z.sort((me,ve)=>me.start-ve.start);let we=0;for(let me=1;me<Z.length;me++){const ve=Z[we],ye=Z[me],Te=ve.start+ve.count,Ae=Ge(ye.start,g.width,4),Je=Ge(ve.start,g.width,4);ye.start<=Te+1&&Ae===Je&&Ge(ye.start+ye.count-1,g.width,4)===Ae?ve.count=Math.max(ve.count,ye.start+ye.count-ve.start):(++we,Z[we]=ye)}Z.length=we+1;const ge=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ve=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let me=0,ve=Z.length;me<ve;me++){const ye=Z[me],Te=Math.floor(ye.start/4),Ae=Math.ceil(ye.count/4),Je=Te%g.width,N=Math.floor(Te/g.width),be=Ae,xe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Je,N,be,xe,L,$,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ge),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ve)}}function B(y,g,L){let $=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=t.TEXTURE_3D);const te=Ce(y,g),Z=g.source;n.bindTexture($,y.__webglTexture,t.TEXTURE0+L);const we=i.get(Z);if(Z.version!==we.__version||te===!0){n.activeTexture(t.TEXTURE0+L);const ge=ot.getPrimaries(ot.workingColorSpace),De=g.colorSpace===Vi?null:ot.getPrimaries(g.colorSpace),Ve=g.colorSpace===Vi||ge===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let me=x(g.image,!1,s.maxTextureSize);me=ae(g,me);const ve=r.convert(g.format,g.colorSpace),ye=r.convert(g.type);let Te=M(g.internalFormat,ve,ye,g.colorSpace,g.isVideoTexture);pe($,g);let Ae;const Je=g.mipmaps,N=g.isVideoTexture!==!0,be=we.__version===void 0||te===!0,xe=Z.dataReady,Pe=C(g,me);if(g.isDepthTexture)Te=w(g.format===bs,g.type),be&&(N?n.texStorage2D(t.TEXTURE_2D,1,Te,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Te,me.width,me.height,0,ve,ye,null));else if(g.isDataTexture)if(Je.length>0){N&&be&&n.texStorage2D(t.TEXTURE_2D,Pe,Te,Je[0].width,Je[0].height);for(let _e=0,oe=Je.length;_e<oe;_e++)Ae=Je[_e],N?xe&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,ve,ye,Ae.data):n.texImage2D(t.TEXTURE_2D,_e,Te,Ae.width,Ae.height,0,ve,ye,Ae.data);g.generateMipmaps=!1}else N?(be&&n.texStorage2D(t.TEXTURE_2D,Pe,Te,me.width,me.height),xe&&Xe(g,me,ve,ye)):n.texImage2D(t.TEXTURE_2D,0,Te,me.width,me.height,0,ve,ye,me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Te,Je[0].width,Je[0].height,me.depth);for(let _e=0,oe=Je.length;_e<oe;_e++)if(Ae=Je[_e],g.format!==Bn)if(ve!==null)if(N){if(xe)if(g.layerUpdates.size>0){const Ie=dh(Ae.width,Ae.height,g.format,g.type);for(const $e of g.layerUpdates){const bt=Ae.data.subarray($e*Ie/Ae.data.BYTES_PER_ELEMENT,($e+1)*Ie/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,$e,Ae.width,Ae.height,1,ve,bt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,me.depth,ve,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Te,Ae.width,Ae.height,me.depth,0,Ae.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,me.depth,ve,ye,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Te,Ae.width,Ae.height,me.depth,0,ve,ye,Ae.data)}else{N&&be&&n.texStorage2D(t.TEXTURE_2D,Pe,Te,Je[0].width,Je[0].height);for(let _e=0,oe=Je.length;_e<oe;_e++)Ae=Je[_e],g.format!==Bn?ve!==null?N?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,ve,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Te,Ae.width,Ae.height,0,Ae.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?xe&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,ve,ye,Ae.data):n.texImage2D(t.TEXTURE_2D,_e,Te,Ae.width,Ae.height,0,ve,ye,Ae.data)}else if(g.isDataArrayTexture)if(N){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Te,me.width,me.height,me.depth),xe)if(g.layerUpdates.size>0){const _e=dh(me.width,me.height,g.format,g.type);for(const oe of g.layerUpdates){const Ie=me.data.subarray(oe*_e/me.data.BYTES_PER_ELEMENT,(oe+1)*_e/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,ve,ye,Ie)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ve,ye,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,me.width,me.height,me.depth,0,ve,ye,me.data);else if(g.isData3DTexture)N?(be&&n.texStorage3D(t.TEXTURE_3D,Pe,Te,me.width,me.height,me.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ve,ye,me.data)):n.texImage3D(t.TEXTURE_3D,0,Te,me.width,me.height,me.depth,0,ve,ye,me.data);else if(g.isFramebufferTexture){if(be)if(N)n.texStorage2D(t.TEXTURE_2D,Pe,Te,me.width,me.height);else{let _e=me.width,oe=me.height;for(let Ie=0;Ie<Pe;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Te,_e,oe,0,ve,ye,null),_e>>=1,oe>>=1}}else if(Je.length>0){if(N&&be){const _e=re(Je[0]);n.texStorage2D(t.TEXTURE_2D,Pe,Te,_e.width,_e.height)}for(let _e=0,oe=Je.length;_e<oe;_e++)Ae=Je[_e],N?xe&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ve,ye,Ae):n.texImage2D(t.TEXTURE_2D,_e,Te,ve,ye,Ae);g.generateMipmaps=!1}else if(N){if(be){const _e=re(me);n.texStorage2D(t.TEXTURE_2D,Pe,Te,_e.width,_e.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,ye,me)}else n.texImage2D(t.TEXTURE_2D,0,Te,ve,ye,me);m(g)&&h($),we.__version=Z.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function le(y,g,L){if(g.image.length!==6)return;const $=Ce(y,g),te=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+L);const Z=i.get(te);if(te.version!==Z.__version||$===!0){n.activeTexture(t.TEXTURE0+L);const we=ot.getPrimaries(ot.workingColorSpace),ge=g.colorSpace===Vi?null:ot.getPrimaries(g.colorSpace),De=g.colorSpace===Vi||we===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ve=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let oe=0;oe<6;oe++)!Ve&&!me?ve[oe]=x(g.image[oe],!0,s.maxCubemapSize):ve[oe]=me?g.image[oe].image:g.image[oe],ve[oe]=ae(g,ve[oe]);const ye=ve[0],Te=r.convert(g.format,g.colorSpace),Ae=r.convert(g.type),Je=M(g.internalFormat,Te,Ae,g.colorSpace),N=g.isVideoTexture!==!0,be=Z.__version===void 0||$===!0,xe=te.dataReady;let Pe=C(g,ye);pe(t.TEXTURE_CUBE_MAP,g);let _e;if(Ve){N&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Je,ye.width,ye.height);for(let oe=0;oe<6;oe++){_e=ve[oe].mipmaps;for(let Ie=0;Ie<_e.length;Ie++){const $e=_e[Ie];g.format!==Bn?Te!==null?N?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,$e.width,$e.height,Te,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Je,$e.width,$e.height,0,$e.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,$e.width,$e.height,Te,Ae,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Je,$e.width,$e.height,0,Te,Ae,$e.data)}}}else{if(_e=g.mipmaps,N&&be){_e.length>0&&Pe++;const oe=re(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ve[oe].width,ve[oe].height,Te,Ae,ve[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,ve[oe].width,ve[oe].height,0,Te,Ae,ve[oe].data);for(let Ie=0;Ie<_e.length;Ie++){const bt=_e[Ie].image[oe].image;N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,bt.width,bt.height,Te,Ae,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Je,bt.width,bt.height,0,Te,Ae,bt.data)}}else{N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te,Ae,ve[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,Te,Ae,ve[oe]);for(let Ie=0;Ie<_e.length;Ie++){const $e=_e[Ie];N?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,Te,Ae,$e.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Je,Te,Ae,$e.image[oe])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),Z.__version=te.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ce(y,g,L,$,te,Z){const we=r.convert(L.format,L.colorSpace),ge=r.convert(L.type),De=M(L.internalFormat,we,ge,L.colorSpace),Ve=i.get(g),me=i.get(L);if(me.__renderTarget=g,!Ve.__hasExternalTextures){const ve=Math.max(1,g.width>>Z),ye=Math.max(1,g.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,De,ve,ye,g.depth,0,we,ge,null):n.texImage2D(te,Z,De,ve,ye,0,we,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,me.__webglTexture,0,T(g)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,me.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(y,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const $=g.depthTexture,te=$&&$.isDepthTexture?$.type:null,Z=w(g.stencilBuffer,te),we=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;fe(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,T(g),Z,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,T(g),Z,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Z,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,y)}else{const $=g.textures;for(let te=0;te<$.length;te++){const Z=$[te],we=r.convert(Z.format,Z.colorSpace),ge=r.convert(Z.type),De=M(Z.internalFormat,we,ge,Z.colorSpace);fe(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,T(g),De,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,T(g),De,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,De,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(y,g,L){const $=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(g.depthTexture);if(te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),pe(t.TEXTURE_CUBE_MAP,g.depthTexture);const Ve=r.convert(g.depthTexture.format),me=r.convert(g.depthTexture.type);let ve;g.depthTexture.format===Si?ve=t.DEPTH_COMPONENT24:g.depthTexture.format===bs&&(ve=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ve,g.width,g.height,0,Ve,me,null)}}else X(g.depthTexture,0);const Z=te.__webglTexture,we=T(g),ge=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,De=g.depthTexture.format===bs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Si)fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,De,ge,Z,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,De,ge,Z,0);else if(g.depthTexture.format===bs)fe(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,De,ge,Z,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,De,ge,Z,0);else throw new Error("Unknown depthTexture format")}function ke(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const $=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=$}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)Le(g.__webglFramebuffer[$],y,$);else{const $=y.texture.mipmaps;$&&$.length>0?Le(g.__webglFramebuffer[0],y,0):Le(g.__webglFramebuffer,y,0)}else if(L){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=t.createRenderbuffer(),Be(g.__webglDepthbuffer[$],y,!1);else{const te=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else{const $=y.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Be(g.__webglDepthbuffer,y,!1);else{const te=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(y,g,L){const $=i.get(y);g!==void 0&&ce($.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&ke(y)}function I(y){const g=y.texture,L=i.get(y),$=i.get(g);y.addEventListener("dispose",D);const te=y.textures,Z=y.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=g.version,o.memory.textures++),Z){L.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ge]=[];for(let De=0;De<g.mipmaps.length;De++)L.__webglFramebuffer[ge][De]=t.createFramebuffer()}else L.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ge=0;ge<g.mipmaps.length;ge++)L.__webglFramebuffer[ge]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(we)for(let ge=0,De=te.length;ge<De;ge++){const Ve=i.get(te[ge]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&fe(y)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){const De=te[ge];L.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ge]);const Ve=r.convert(De.format,De.colorSpace),me=r.convert(De.type),ve=M(De.internalFormat,Ve,me,De.colorSpace,y.isXRRenderTarget===!0),ye=T(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ve,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,L.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(L.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),pe(t.TEXTURE_CUBE_MAP,g);for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0)for(let De=0;De<g.mipmaps.length;De++)ce(L.__webglFramebuffer[ge][De],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De);else ce(L.__webglFramebuffer[ge],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ge=0,De=te.length;ge<De;ge++){const Ve=te[ge],me=i.get(Ve);let ve=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,me.__webglTexture),pe(ve,Ve),ce(L.__webglFramebuffer,y,Ve,t.COLOR_ATTACHMENT0+ge,ve,0),m(Ve)&&h(ve)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ge=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,$.__webglTexture),pe(ge,g),g.mipmaps&&g.mipmaps.length>0)for(let De=0;De<g.mipmaps.length;De++)ce(L.__webglFramebuffer[De],y,g,t.COLOR_ATTACHMENT0,ge,De);else ce(L.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,ge,0);m(g)&&h(ge),n.unbindTexture()}y.depthBuffer&&ke(y)}function q(y){const g=y.textures;for(let L=0,$=g.length;L<$;L++){const te=g[L];if(m(te)){const Z=E(y),we=i.get(te).__webglTexture;n.bindTexture(Z,we),h(Z),n.unbindTexture()}}}const ie=[],ee=[];function he(y){if(y.samples>0){if(fe(y)===!1){const g=y.textures,L=y.width,$=y.height;let te=t.COLOR_BUFFER_BIT;const Z=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(y),ge=g.length>1;if(ge)for(let Ve=0;Ve<g.length;Ve++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const De=y.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ve=0;Ve<g.length;Ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ve]);const me=i.get(g[Ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,L,$,0,0,L,$,te,t.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(t.COLOR_ATTACHMENT0+Ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ie.push(Z),ee.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ve=0;Ve<g.length;Ve++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ve]);const me=i.get(g[Ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ve,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function T(y){return Math.min(s.maxSamples,y.samples)}function fe(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function de(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function ae(y,g){const L=y.colorSpace,$=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==gr&&L!==Vi&&(ot.getTransfer(L)===pt?($!==Bn||te!==_n)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",L)),g}function re(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=R,this.setupRenderTarget=I,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function b2(t,e){function n(i,s=Vi){let r;const o=ot.getTransfer(s);if(i===_n)return t.UNSIGNED_BYTE;if(i===id)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ym)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$m)return t.BYTE;if(i===Xm)return t.SHORT;if(i===no)return t.UNSIGNED_SHORT;if(i===nd)return t.INT;if(i===ii)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===yi)return t.HALF_FLOAT;if(i===jm)return t.ALPHA;if(i===Km)return t.RGB;if(i===Bn)return t.RGBA;if(i===Si)return t.DEPTH_COMPONENT;if(i===bs)return t.DEPTH_STENCIL;if(i===Zm)return t.RED;if(i===rd)return t.RED_INTEGER;if(i===mr)return t.RG;if(i===od)return t.RG_INTEGER;if(i===ad)return t.RGBA_INTEGER;if(i===fa||i===ha||i===pa||i===ma)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===kc||i===zc||i===Vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hc||i===Gc||i===Wc||i===$c||i===Xc||i===qc||i===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hc||i===Gc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$c)return r.COMPRESSED_R11_EAC;if(i===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qc)return r.COMPRESSED_RG11_EAC;if(i===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jc||i===Kc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===iu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===su)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ru)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ou)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===au)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lu)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cu||i===uu||i===du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cu)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fu||i===hu||i===pu||i===mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y2=`
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

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new lg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new oi({vertexShader:w2,fragmentShader:y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M2 extends Ds{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new S2,h={},E=n.getContextAttributes();let M=null,w=null;const C=[],A=[],D=new Ye;let v=null;const S=new gn;S.viewport=new Et;const K=new gn;K.viewport=new Et;const P=[S,K],U=new UE;let H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let le=C[B];return le===void 0&&(le=new Nl,C[B]=le),le.getTargetRaySpace()},this.getControllerGrip=function(B){let le=C[B];return le===void 0&&(le=new Nl,C[B]=le),le.getGripSpace()},this.getHand=function(B){let le=C[B];return le===void 0&&(le=new Nl,C[B]=le),le.getHandSpace()};function X(B){const le=A.indexOf(B.inputSource);if(le===-1)return;const ce=C[le];ce!==void 0&&(ce.update(B.inputSource,B.frame,c||o),ce.dispatchEvent({type:B.type,data:B.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",O);for(let B=0;B<C.length;B++){const le=A[B];le!==null&&(A[B]=null,C[B].disconnect(le))}H=null,J=null,m.reset();for(const B in h)delete h[B];e.setRenderTarget(M),p=null,d=null,f=null,s=null,w=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Be=null,Le=null;E.depth&&(Le=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=E.stencil?bs:Si,Be=E.stencil?io:ii);const ke={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Qn(d.textureWidth,d.textureHeight,{format:Bn,type:_n,depthTexture:new oo(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(B){for(let le=0;le<B.removed.length;le++){const ce=B.removed[le],Be=A.indexOf(ce);Be>=0&&(A[Be]=null,C[Be].disconnect(ce))}for(let le=0;le<B.added.length;le++){const ce=B.added[le];let Be=A.indexOf(ce);if(Be===-1){for(let ke=0;ke<C.length;ke++)if(ke>=A.length){A.push(ce),Be=ke;break}else if(A[ke]===null){A[ke]=ce,Be=ke;break}if(Be===-1)break}const Le=C[Be];Le&&Le.connect(ce)}}const z=new G,V=new G;function ne(B,le,ce){z.setFromMatrixPosition(le.matrixWorld),V.setFromMatrixPosition(ce.matrixWorld);const Be=z.distanceTo(V),Le=le.projectionMatrix.elements,ke=ce.projectionMatrix.elements,R=Le[14]/(Le[10]-1),I=Le[14]/(Le[10]+1),q=(Le[9]+1)/Le[5],ie=(Le[9]-1)/Le[5],ee=(Le[8]-1)/Le[0],he=(ke[8]+1)/ke[0],T=R*ee,fe=R*he,de=Be/(-ee+he),ae=de*-ee;if(le.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ae),B.translateZ(de),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Le[10]===-1)B.projectionMatrix.copy(le.projectionMatrix),B.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const re=R+de,y=I+de,g=T-ae,L=fe+(Be-ae),$=q*I/y*re,te=ie*I/y*re;B.projectionMatrix.makePerspective(g,L,$,te,re,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ue(B,le){le===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(le.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let le=B.near,ce=B.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),U.near=K.near=S.near=le,U.far=K.far=S.far=ce,(H!==U.near||J!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,J=U.far),U.layers.mask=B.layers.mask|6,S.layers.mask=U.layers.mask&-5,K.layers.mask=U.layers.mask&-3;const Be=B.parent,Le=U.cameras;ue(U,Be);for(let ke=0;ke<Le.length;ke++)ue(Le[ke],Be);Le.length===2?ne(U,S,K):U.projectionMatrix.copy(S.projectionMatrix),pe(B,U,Be)};function pe(B,le,ce){ce===null?B.matrix.copy(le.matrixWorld):(B.matrix.copy(ce.matrixWorld),B.matrix.invert(),B.matrix.multiply(le.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(le.projectionMatrix),B.projectionMatrixInverse.copy(le.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=gu*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(B){return h[B]};let Ce=null;function Ge(B,le){if(u=le.getViewerPose(c||o),_=le,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Be=!1;ce.length!==U.cameras.length&&(U.cameras.length=0,Be=!0);for(let I=0;I<ce.length;I++){const q=ce[I];let ie=null;if(p!==null)ie=p.getViewport(q);else{const he=f.getViewSubImage(d,q);ie=he.viewport,I===0&&(e.setRenderTargetTextures(w,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(w))}let ee=P[I];ee===void 0&&(ee=new gn,ee.layers.enable(I),ee.viewport=new Et,P[I]=ee),ee.matrix.fromArray(q.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(q.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),I===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Be===!0&&U.cameras.push(ee)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const I=f.getDepthInformation(ce[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<ce.length;I++){const q=ce[I].camera;if(q){let ie=h[q];ie||(ie=new lg,h[q]=ie);const ee=f.getCameraImage(q);ie.sourceTexture=ee}}}}for(let ce=0;ce<C.length;ce++){const Be=A[ce],Le=C[ce];Be!==null&&Le!==void 0&&Le.update(Be,le,c||o)}Ce&&Ce(B,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Xe=new fg;Xe.setAnimationLoop(Ge),this.setAnimationLoop=function(B){Ce=B},this.dispose=function(){}}}const ds=new si,E2=new St;function T2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,cg(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,E,M,w){h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,E,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),M=E.envMap,w=E.envMapRotation;M&&(m.envMap.value=M,ds.copy(w),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(ds)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=M*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A2(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const w=M.program;i.uniformBlockBinding(E,w)}function c(E,M){let w=s[E.id];w===void 0&&(_(E),w=u(E),s[E.id]=w,E.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(E,C);const A=e.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function u(E){const M=f();E.__bindingPointIndex=M;const w=t.createBuffer(),C=E.__size,A=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,w),w}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=s[E.id],w=E.uniforms,C=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let A=0,D=w.length;A<D;A++){const v=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,K=v.length;S<K;S++){const P=v[S];if(p(P,A,S,C)===!0){const U=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let X=0;X<H.length;X++){const W=H[X],O=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,U+J,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,J),J+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(E,M,w,C){const A=E.value,D=M+"_"+w;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{const v=C[D];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return C[D]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function _(E){const M=E.uniforms;let w=0;const C=16;for(let D=0,v=M.length;D<v;D++){const S=Array.isArray(M[D])?M[D]:[M[D]];for(let K=0,P=S.length;K<P;K++){const U=S[K],H=Array.isArray(U.value)?U.value:[U.value];for(let J=0,X=H.length;J<X;J++){const W=H[J],O=x(W),z=w%C,V=z%O.boundary,ne=z+V;w+=V,ne!==0&&C-ne<O.storage&&(w+=C-ne),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=O.storage}}}const A=w%C;return A>0&&(w+=C-A),E.__size=w,E.__cache={},this}function x(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const E in s)t.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}const C2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function R2(){return Wn===null&&(Wn=new dE(C2,16,16,mr,yi),Wn.name="DFG_LUT",Wn.minFilter=jt,Wn.magFilter=jt,Wn.wrapS=_i,Wn.wrapT=_i,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class P2{constructor(e={}){const{canvas:n=VM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=_n}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=p,m=new Set([ad,od,rd]),h=new Set([_n,ii,no,io,id,sd]),E=new Uint32Array(4),M=new Int32Array(4);let w=null,C=null;const A=[],D=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let K=!1;this._outputColorSpace=Mn;let P=0,U=0,H=null,J=-1,X=null;const W=new Et,O=new Et;let z=null;const V=new nt(0);let ne=0,ue=n.width,pe=n.height,Ce=1,Ge=null,Xe=null;const B=new Et(0,0,ue,pe),le=new Et(0,0,ue,pe);let ce=!1;const Be=new hd;let Le=!1,ke=!1;const R=new St,I=new G,q=new Et,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function he(){return H===null?Ce:1}let T=i;function fe(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${td}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",$e,!1),n.addEventListener("webglcontextcreationerror",bt,!1),T===null){const k="webgl2";if(T=fe(k,b),T===null)throw fe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw lt("WebGLRenderer: "+b.message),b}let de,ae,re,y,g,L,$,te,Z,we,ge,De,Ve,me,ve,ye,Te,Ae,Je,N,be,xe,Pe;function _e(){de=new P1(T),de.init(),be=new b2(T,de),ae=new y1(T,de,e,be),re=new v2(T,de),ae.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),y=new I1(T),g=new s2,L=new x2(T,de,re,g,ae,be,y),$=new R1(S),te=new BE(T),xe=new b1(T,te),Z=new L1(T,te,y,xe),we=new N1(T,Z,te,xe,y),Ae=new U1(T,ae,L),ve=new S1(g),ge=new i2(S,$,de,ae,xe,ve),De=new T2(S,g),Ve=new o2,me=new f2(de),Te=new x1(S,$,re,we,_,l),ye=new _2(S,we,ae),Pe=new A2(T,y,ae,re),Je=new w1(T,de,y),N=new D1(T,de,y),y.programs=ge.programs,S.capabilities=ae,S.extensions=de,S.properties=g,S.renderLists=Ve,S.shadowMap=ye,S.state=re,S.info=y}_e(),x!==_n&&(v=new O1(x,n.width,n.height,s,r));const oe=new M2(S,T);this.xr=oe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(b){b!==void 0&&(Ce=b,this.setSize(ue,pe,!1))},this.getSize=function(b){return b.set(ue,pe)},this.setSize=function(b,k,Q=!0){if(oe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=b,pe=k,n.width=Math.floor(b*Ce),n.height=Math.floor(k*Ce),Q===!0&&(n.style.width=b+"px",n.style.height=k+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(ue*Ce,pe*Ce).floor()},this.setDrawingBufferSize=function(b,k,Q){ue=b,pe=k,Ce=Q,n.width=Math.floor(b*Q),n.height=Math.floor(k*Q),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(x===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,k,Q,j){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,k,Q,j),re.viewport(W.copy(B).multiplyScalar(Ce).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,k,Q,j){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,k,Q,j),re.scissor(O.copy(le).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){re.setScissorTest(ce=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){Xe=b},this.getClearColor=function(b){return b.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,Q=!0){let j=0;if(b){let Y=!1;if(H!==null){const Me=H.texture.format;Y=m.has(Me)}if(Y){const Me=H.texture.type,Re=h.has(Me),Ee=Te.getClearColor(),Ue=Te.getClearAlpha(),Oe=Ee.r,qe=Ee.g,Qe=Ee.b;Re?(E[0]=Oe,E[1]=qe,E[2]=Qe,E[3]=Ue,T.clearBufferuiv(T.COLOR,0,E)):(M[0]=Oe,M[1]=qe,M[2]=Qe,M[3]=Ue,T.clearBufferiv(T.COLOR,0,M))}else j|=T.COLOR_BUFFER_BIT}k&&(j|=T.DEPTH_BUFFER_BIT),Q&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),Te.dispose(),Ve.dispose(),me.dispose(),g.dispose(),$.dispose(),we.dispose(),xe.dispose(),Pe.dispose(),ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",yd),oe.removeEventListener("sessionend",Sd),Qi.stop()};function Ie(b){b.preventDefault(),Bf("WebGLRenderer: Context Lost."),K=!0}function $e(){Bf("WebGLRenderer: Context Restored."),K=!1;const b=y.autoReset,k=ye.enabled,Q=ye.autoUpdate,j=ye.needsUpdate,Y=ye.type;_e(),y.autoReset=b,ye.enabled=k,ye.autoUpdate=Q,ye.needsUpdate=j,ye.type=Y}function bt(b){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const k=b.target;k.removeEventListener("dispose",ht),ci(k)}function ci(b){ui(b),g.remove(b)}function ui(b){const k=g.get(b).programs;k!==void 0&&(k.forEach(function(Q){ge.releaseProgram(Q)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Q,j,Y,Me){k===null&&(k=ie);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Ee=yg(b,k,Q,j,Y);re.setMaterial(j,Re);let Ue=Q.index,Oe=1;if(j.wireframe===!0){if(Ue=Z.getWireframeAttribute(Q),Ue===void 0)return;Oe=2}const qe=Q.drawRange,Qe=Q.attributes.position;let ze=qe.start*Oe,mt=(qe.start+qe.count)*Oe;Me!==null&&(ze=Math.max(ze,Me.start*Oe),mt=Math.min(mt,(Me.start+Me.count)*Oe)),Ue!==null?(ze=Math.max(ze,0),mt=Math.min(mt,Ue.count)):Qe!=null&&(ze=Math.max(ze,0),mt=Math.min(mt,Qe.count));const Tt=mt-ze;if(Tt<0||Tt===1/0)return;xe.setup(Y,j,Ee,Q,Ue);let Mt,gt=Je;if(Ue!==null&&(Mt=te.get(Ue),gt=N,gt.setIndex(Mt)),Y.isMesh)j.wireframe===!0?(re.setLineWidth(j.wireframeLinewidth*he()),gt.setMode(T.LINES)):gt.setMode(T.TRIANGLES);else if(Y.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),re.setLineWidth(Gt*he()),Y.isLineSegments?gt.setMode(T.LINES):Y.isLineLoop?gt.setMode(T.LINE_LOOP):gt.setMode(T.LINE_STRIP)}else Y.isPoints?gt.setMode(T.POINTS):Y.isSprite&&gt.setMode(T.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Oa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,Ne=Y._multiDrawCounts,hn=Y._multiDrawCount,at=Ue?te.get(Ue).bytesPerElement:1,Ln=g.get(j).currentProgram.getUniforms();for(let Vn=0;Vn<hn;Vn++)Ln.setValue(T,"_gl_DrawID",Vn),gt.render(Gt[Vn]/at,Ne[Vn])}else if(Y.isInstancedMesh)gt.renderInstances(ze,Tt,Y.count);else if(Q.isInstancedBufferGeometry){const Gt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ne=Math.min(Q.instanceCount,Gt);gt.renderInstances(ze,Tt,Ne)}else gt.render(ze,Tt)};function wd(b,k,Q){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,yo(b,k,Q),b.side=Zi,b.needsUpdate=!0,yo(b,k,Q),b.side=gi):yo(b,k,Q)}this.compile=function(b,k,Q=null){Q===null&&(Q=b),C=me.get(Q),C.init(k),D.push(C),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),b!==Q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights();const j=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ee=Me[Re];wd(Ee,Q,Y),j.add(Ee)}else wd(Me,Q,Y),j.add(Me)}),C=D.pop(),j},this.compileAsync=function(b,k,Q=null){const j=this.compile(b,k,Q);return new Promise(Y=>{function Me(){if(j.forEach(function(Re){g.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){Y(b);return}setTimeout(Me,10)}de.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let hl=null;function wg(b){hl&&hl(b)}function yd(){Qi.stop()}function Sd(){Qi.start()}const Qi=new fg;Qi.setAnimationLoop(wg),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(b){hl=b,oe.setAnimationLoop(b),b===null?Qi.stop():Qi.start()},oe.addEventListener("sessionstart",yd),oe.addEventListener("sessionend",Sd),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;const Q=oe.enabled===!0&&oe.isPresenting===!0,j=v!==null&&(H===null||Q)&&v.begin(S,H);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,k,H),C=me.get(b,D.length),C.init(k),D.push(C),R.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Be.setFromProjectionMatrix(R,Zn,k.reversedDepth),ke=this.localClippingEnabled,Le=ve.init(this.clippingPlanes,ke),w=Ve.get(b,A.length),w.init(),A.push(w),oe.enabled===!0&&oe.isPresenting===!0){const Re=S.xr.getDepthSensingMesh();Re!==null&&pl(Re,k,-1/0,S.sortObjects)}pl(b,k,0,S.sortObjects),w.finish(),S.sortObjects===!0&&w.sort(Ge,Xe),ee=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ee&&Te.addToRenderList(w,b),this.info.render.frame++,Le===!0&&ve.beginShadows();const Y=C.state.shadowsArray;if(ye.render(Y,b,k),Le===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&v.hasRenderPass())===!1){const Re=w.opaque,Ee=w.transmissive;if(C.setupLights(),k.isArrayCamera){const Ue=k.cameras;if(Ee.length>0)for(let Oe=0,qe=Ue.length;Oe<qe;Oe++){const Qe=Ue[Oe];Ed(Re,Ee,b,Qe)}ee&&Te.render(b);for(let Oe=0,qe=Ue.length;Oe<qe;Oe++){const Qe=Ue[Oe];Md(w,b,Qe,Qe.viewport)}}else Ee.length>0&&Ed(Re,Ee,b,k),ee&&Te.render(b),Md(w,b,k)}H!==null&&U===0&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),j&&v.end(S),b.isScene===!0&&b.onAfterRender(S,b,k),xe.resetDefaultState(),J=-1,X=null,D.pop(),D.length>0?(C=D[D.length-1],Le===!0&&ve.setGlobalState(S.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?w=A[A.length-1]:w=null};function pl(b,k,Q,j){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Be.intersectsSprite(b)){j&&q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);const Re=we.update(b),Ee=b.material;Ee.visible&&w.push(b,Re,Ee,Q,q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Be.intersectsObject(b))){const Re=we.update(b),Ee=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),q.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),q.copy(Re.boundingSphere.center)),q.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(Ee)){const Ue=Re.groups;for(let Oe=0,qe=Ue.length;Oe<qe;Oe++){const Qe=Ue[Oe],ze=Ee[Qe.materialIndex];ze&&ze.visible&&w.push(b,Re,ze,Q,q.z,Qe)}}else Ee.visible&&w.push(b,Re,Ee,Q,q.z,null)}}const Me=b.children;for(let Re=0,Ee=Me.length;Re<Ee;Re++)pl(Me[Re],k,Q,j)}function Md(b,k,Q,j){const{opaque:Y,transmissive:Me,transparent:Re}=b;C.setupLightsView(Q),Le===!0&&ve.setGlobalState(S.clippingPlanes,Q),j&&re.viewport(W.copy(j)),Y.length>0&&wo(Y,k,Q),Me.length>0&&wo(Me,k,Q),Re.length>0&&wo(Re,k,Q),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Ed(b,k,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){const ze=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new Qn(1,1,{generateMipmaps:!0,type:ze?yi:_n,minFilter:xs,samples:Math.max(4,ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Me=C.state.transmissionRenderTarget[j.id],Re=j.viewport||W;Me.setSize(Re.z*S.transmissionResolutionScale,Re.w*S.transmissionResolutionScale);const Ee=S.getRenderTarget(),Ue=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(Me),S.getClearColor(V),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),ee&&Te.render(Q);const qe=S.toneMapping;S.toneMapping=Jn;const Qe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),Le===!0&&ve.setGlobalState(S.clippingPlanes,j),wo(b,Q,j),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),de.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let mt=0,Tt=k.length;mt<Tt;mt++){const Mt=k[mt],{object:gt,geometry:Gt,material:Ne,group:hn}=Mt;if(Ne.side===gi&&gt.layers.test(j.layers)){const at=Ne.side;Ne.side=un,Ne.needsUpdate=!0,Td(gt,Q,j,Gt,Ne,hn),Ne.side=at,Ne.needsUpdate=!0,ze=!0}}ze===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}S.setRenderTarget(Ee,Ue,Oe),S.setClearColor(V,ne),Qe!==void 0&&(j.viewport=Qe),S.toneMapping=qe}function wo(b,k,Q){const j=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Me=b.length;Y<Me;Y++){const Re=b[Y],{object:Ee,geometry:Ue,group:Oe}=Re;let qe=Re.material;qe.allowOverride===!0&&j!==null&&(qe=j),Ee.layers.test(Q.layers)&&Td(Ee,k,Q,Ue,qe,Oe)}}function Td(b,k,Q,j,Y,Me){b.onBeforeRender(S,k,Q,j,Y,Me),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(S,k,Q,j,b,Me),Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,S.renderBufferDirect(Q,k,j,Y,b,Me),Y.side=Zi,Y.needsUpdate=!0,S.renderBufferDirect(Q,k,j,Y,b,Me),Y.side=gi):S.renderBufferDirect(Q,k,j,Y,b,Me),b.onAfterRender(S,k,Q,j,Y,Me)}function yo(b,k,Q){k.isScene!==!0&&(k=ie);const j=g.get(b),Y=C.state.lights,Me=C.state.shadowsArray,Re=Y.state.version,Ee=ge.getParameters(b,Y.state,Me,k,Q),Ue=ge.getProgramCacheKey(Ee);let Oe=j.programs;j.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;const qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;j.envMap=$.get(b.envMap||j.environment,qe),j.envMapRotation=j.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",ht),Oe=new Map,j.programs=Oe);let Qe=Oe.get(Ue);if(Qe!==void 0){if(j.currentProgram===Qe&&j.lightsStateVersion===Re)return Cd(b,Ee),Qe}else Ee.uniforms=ge.getUniforms(b),b.onBeforeCompile(Ee,S),Qe=ge.acquireProgram(Ee,Ue),Oe.set(Ue,Qe),j.uniforms=Ee.uniforms;const ze=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ve.uniform),Cd(b,Ee),j.needsLights=Mg(b),j.lightsStateVersion=Re,j.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=Qe,j.uniformsList=null,Qe}function Ad(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=_a.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Cd(b,k){const Q=g.get(b);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function yg(b,k,Q,j,Y){k.isScene!==!0&&(k=ie),L.resetTextureUnits();const Me=k.fog,Re=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,Ee=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:gr,Ue=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Oe=$.get(j.envMap||Re,Ue),qe=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!Q.morphAttributes.position,mt=!!Q.morphAttributes.normal,Tt=!!Q.morphAttributes.color;let Mt=Jn;j.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Mt=S.toneMapping);const gt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Gt=gt!==void 0?gt.length:0,Ne=g.get(j),hn=C.state.lights;if(Le===!0&&(ke===!0||b!==X)){const Ut=b===X&&j.id===J;ve.setState(j,b,Ut)}let at=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==hn.state.version||Ne.outputColorSpace!==Ee||Y.isBatchedMesh&&Ne.batching===!1||!Y.isBatchedMesh&&Ne.batching===!0||Y.isBatchedMesh&&Ne.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ne.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ne.instancing===!1||!Y.isInstancedMesh&&Ne.instancing===!0||Y.isSkinnedMesh&&Ne.skinning===!1||!Y.isSkinnedMesh&&Ne.skinning===!0||Y.isInstancedMesh&&Ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ne.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ne.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ne.instancingMorph===!1&&Y.morphTexture!==null||Ne.envMap!==Oe||j.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ve.numPlanes||Ne.numIntersection!==ve.numIntersection)||Ne.vertexAlphas!==qe||Ne.vertexTangents!==Qe||Ne.morphTargets!==ze||Ne.morphNormals!==mt||Ne.morphColors!==Tt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==Gt)&&(at=!0):(at=!0,Ne.__version=j.version);let Ln=Ne.currentProgram;at===!0&&(Ln=yo(j,k,Y));let Vn=!1,es=!1,Is=!1;const vt=Ln.getUniforms(),Bt=Ne.uniforms;if(re.useProgram(Ln.program)&&(Vn=!0,es=!0,Is=!0),j.id!==J&&(J=j.id,es=!0),Vn||X!==b){re.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(T,"projectionMatrix",b.projectionMatrix),vt.setValue(T,"viewMatrix",b.matrixWorldInverse);const Ti=vt.map.cameraPosition;Ti!==void 0&&Ti.setValue(T,I.setFromMatrixPosition(b.matrixWorld)),ae.logarithmicDepthBuffer&&vt.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),X!==b&&(X=b,es=!0,Is=!0)}if(Ne.needsLights&&(hn.state.directionalShadowMap.length>0&&vt.setValue(T,"directionalShadowMap",hn.state.directionalShadowMap,L),hn.state.spotShadowMap.length>0&&vt.setValue(T,"spotShadowMap",hn.state.spotShadowMap,L),hn.state.pointShadowMap.length>0&&vt.setValue(T,"pointShadowMap",hn.state.pointShadowMap,L)),Y.isSkinnedMesh){vt.setOptional(T,Y,"bindMatrix"),vt.setOptional(T,Y,"bindMatrixInverse");const Ut=Y.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),vt.setValue(T,"boneTexture",Ut.boneTexture,L))}Y.isBatchedMesh&&(vt.setOptional(T,Y,"batchingTexture"),vt.setValue(T,"batchingTexture",Y._matricesTexture,L),vt.setOptional(T,Y,"batchingIdTexture"),vt.setValue(T,"batchingIdTexture",Y._indirectTexture,L),vt.setOptional(T,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(T,"batchingColorTexture",Y._colorsTexture,L));const Ei=Q.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Ae.update(Y,Q,Ln),(es||Ne.receiveShadow!==Y.receiveShadow)&&(Ne.receiveShadow=Y.receiveShadow,vt.setValue(T,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(Bt.envMapIntensity.value=k.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=R2()),es&&(vt.setValue(T,"toneMappingExposure",S.toneMappingExposure),Ne.needsLights&&Sg(Bt,Is),Me&&j.fog===!0&&De.refreshFogUniforms(Bt,Me),De.refreshMaterialUniforms(Bt,j,Ce,pe,C.state.transmissionRenderTarget[b.id]),_a.upload(T,Ad(Ne),Bt,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(_a.upload(T,Ad(Ne),Bt,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(T,"center",Y.center),vt.setValue(T,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(T,"normalMatrix",Y.normalMatrix),vt.setValue(T,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ut=j.uniformsGroups;for(let Ti=0,Us=Ut.length;Ti<Us;Ti++){const Rd=Ut[Ti];Pe.update(Rd,Ln),Pe.bind(Rd,Ln)}}return Ln}function Sg(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Mg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,k,Q){const j=g.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),g.get(b.texture).__webglTexture=k,g.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const Q=g.get(b);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0};const Eg=T.createFramebuffer();this.setRenderTarget=function(b,k=0,Q=0){H=b,P=k,U=Q;let j=null,Y=!1,Me=!1;if(b){const Ee=g.get(b);if(Ee.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(T.FRAMEBUFFER,Ee.__webglFramebuffer),W.copy(b.viewport),O.copy(b.scissor),z=b.scissorTest,re.viewport(W),re.scissor(O),re.setScissorTest(z),J=-1;return}else if(Ee.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Ee.__hasExternalTextures)L.rebindTextures(b,g.get(b.texture).__webglTexture,g.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qe=b.depthTexture;if(Ee.__boundDepthTexture!==qe){if(qe!==null&&g.has(qe)&&(b.width!==qe.image.width||b.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);const Oe=g.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?j=Oe[k][Q]:j=Oe[k],Y=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?j=g.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?j=Oe[Q]:j=Oe,W.copy(b.viewport),O.copy(b.scissor),z=b.scissorTest}else W.copy(B).multiplyScalar(Ce).floor(),O.copy(le).multiplyScalar(Ce).floor(),z=ce;if(Q!==0&&(j=Eg),re.bindFramebuffer(T.FRAMEBUFFER,j)&&re.drawBuffers(b,j),re.viewport(W),re.scissor(O),re.setScissorTest(z),Y){const Ee=g.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,Q)}else if(Me){const Ee=k;for(let Ue=0;Ue<b.textures.length;Ue++){const Oe=g.get(b.textures[Ue]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,Q,Ee)}}else if(b!==null&&Q!==0){const Ee=g.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ee.__webglTexture,Q)}J=-1},this.readRenderTargetPixels=function(b,k,Q,j,Y,Me,Re,Ee=0){if(!(b&&b.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){re.bindFramebuffer(T.FRAMEBUFFER,Ue);try{const Oe=b.textures[Ee],qe=Oe.format,Qe=Oe.type;if(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ee),!ae.textureFormatReadable(qe)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Qe)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-j&&Q>=0&&Q<=b.height-Y&&T.readPixels(k,Q,j,Y,be.convert(qe),be.convert(Qe),Me)}finally{const Oe=H!==null?g.get(H).__webglFramebuffer:null;re.bindFramebuffer(T.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,k,Q,j,Y,Me,Re,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue)if(k>=0&&k<=b.width-j&&Q>=0&&Q<=b.height-Y){re.bindFramebuffer(T.FRAMEBUFFER,Ue);const Oe=b.textures[Ee],qe=Oe.format,Qe=Oe.type;if(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ee),!ae.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,Me.byteLength,T.STREAM_READ),T.readPixels(k,Q,j,Y,be.convert(qe),be.convert(Qe),0);const mt=H!==null?g.get(H).__webglFramebuffer:null;re.bindFramebuffer(T.FRAMEBUFFER,mt);const Tt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await HM(T,Tt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Me),T.deleteBuffer(ze),T.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,Q=0){const j=Math.pow(2,-Q),Y=Math.floor(b.image.width*j),Me=Math.floor(b.image.height*j),Re=k!==null?k.x:0,Ee=k!==null?k.y:0;L.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,Q,0,0,Re,Ee,Y,Me),re.unbindTexture()};const Tg=T.createFramebuffer(),Ag=T.createFramebuffer();this.copyTextureToTexture=function(b,k,Q=null,j=null,Y=0,Me=0){let Re,Ee,Ue,Oe,qe,Qe,ze,mt,Tt;const Mt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(Q!==null)Re=Q.max.x-Q.min.x,Ee=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,Oe=Q.min.x,qe=Q.min.y,Qe=Q.isBox3?Q.min.z:0;else{const Bt=Math.pow(2,-Y);Re=Math.floor(Mt.width*Bt),Ee=Math.floor(Mt.height*Bt),b.isDataArrayTexture?Ue=Mt.depth:b.isData3DTexture?Ue=Math.floor(Mt.depth*Bt):Ue=1,Oe=0,qe=0,Qe=0}j!==null?(ze=j.x,mt=j.y,Tt=j.z):(ze=0,mt=0,Tt=0);const gt=be.convert(k.format),Gt=be.convert(k.type);let Ne;k.isData3DTexture?(L.setTexture3D(k,0),Ne=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),Ne=T.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),Ne=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const hn=T.getParameter(T.UNPACK_ROW_LENGTH),at=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ln=T.getParameter(T.UNPACK_SKIP_PIXELS),Vn=T.getParameter(T.UNPACK_SKIP_ROWS),es=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Oe),T.pixelStorei(T.UNPACK_SKIP_ROWS,qe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Qe);const Is=b.isDataArrayTexture||b.isData3DTexture,vt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Bt=g.get(b),Ei=g.get(k),Ut=g.get(Bt.__renderTarget),Ti=g.get(Ei.__renderTarget);re.bindFramebuffer(T.READ_FRAMEBUFFER,Ut.__webglFramebuffer),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Us=0;Us<Ue;Us++)Is&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,g.get(b).__webglTexture,Y,Qe+Us),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,g.get(k).__webglTexture,Me,Tt+Us)),T.blitFramebuffer(Oe,qe,Re,Ee,ze,mt,Re,Ee,T.DEPTH_BUFFER_BIT,T.NEAREST);re.bindFramebuffer(T.READ_FRAMEBUFFER,null),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||g.has(b)){const Bt=g.get(b),Ei=g.get(k);re.bindFramebuffer(T.READ_FRAMEBUFFER,Tg),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ag);for(let Ut=0;Ut<Ue;Ut++)Is?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Bt.__webglTexture,Y,Qe+Ut):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Bt.__webglTexture,Y),vt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ei.__webglTexture,Me,Tt+Ut):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ei.__webglTexture,Me),Y!==0?T.blitFramebuffer(Oe,qe,Re,Ee,ze,mt,Re,Ee,T.COLOR_BUFFER_BIT,T.NEAREST):vt?T.copyTexSubImage3D(Ne,Me,ze,mt,Tt+Ut,Oe,qe,Re,Ee):T.copyTexSubImage2D(Ne,Me,ze,mt,Oe,qe,Re,Ee);re.bindFramebuffer(T.READ_FRAMEBUFFER,null),re.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(Ne,Me,ze,mt,Tt,Re,Ee,Ue,gt,Gt,Mt.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(Ne,Me,ze,mt,Tt,Re,Ee,Ue,gt,Mt.data):T.texSubImage3D(Ne,Me,ze,mt,Tt,Re,Ee,Ue,gt,Gt,Mt):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Me,ze,mt,Re,Ee,gt,Gt,Mt.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Me,ze,mt,Mt.width,Mt.height,gt,Mt.data):T.texSubImage2D(T.TEXTURE_2D,Me,ze,mt,Re,Ee,gt,Gt,Mt);T.pixelStorei(T.UNPACK_ROW_LENGTH,hn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,at),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ln),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,es),Me===0&&k.generateMipmaps&&T.generateMipmap(Ne),re.unbindTexture()},this.initRenderTarget=function(b){g.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),re.unbindTexture()},this.resetState=function(){P=0,U=0,H=null,re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const Nh={type:"change"},_d={type:"start"},vg={type:"end"},ia=new fd,Fh=new zi,L2=Math.cos(70*$M.DEG2RAD),Lt=new G,an=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ac=1e-6;class D2 extends FE{constructor(e,n=null){super(e,n),this.state=_t.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Ji,this._lastTargetPosition=new G,this._quat=new Ji().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new G,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new G,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U2.bind(this),this._onPointerDown=I2.bind(this),this._onPointerUp=N2.bind(this),this._onContextMenu=H2.bind(this),this._onMouseWheel=B2.bind(this),this._onKeyDown=k2.bind(this),this._onTouchStart=z2.bind(this),this._onTouchMove=V2.bind(this),this._onMouseDown=F2.bind(this),this._onMouseMove=O2.bind(this),this._interceptControlDown=G2.bind(this),this._interceptControlUp=W2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nh),this.update(),this.state=_t.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ia.origin.copy(this.object.position),ia.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ia.direction))<L2?this.object.lookAt(this.target):(Fh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ia.intersectPlane(Fh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ac||this._lastTargetPosition.distanceToSquared(this.target)>ac?(this.dispatchEvent(Nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(an*this._rotateDelta.x/n.clientHeight),this._rotateUp(an*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(an*this._rotateDelta.x/n.clientHeight),this._rotateUp(an*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ye,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function I2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function U2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function N2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vg),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function F2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=_t.DOLLY;break;case or.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}break;case or.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(_d)}function O2(t){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function B2(t){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(t.preventDefault(),this.dispatchEvent(_d),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(vg))}function k2(t){this.enabled!==!1&&this._handleKeyDown(t)}function z2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=_t.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=_t.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(_d)}function V2(t){switch(this._trackPointer(t),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=_t.NONE}}function H2(t){this.enabled!==!1&&t.preventDefault()}function G2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vd=t=>(ai("data-v-91e825e6"),t=t(),li(),t),$2={class:"three-container"},X2=vd(()=>F("div",{class:"three-hint"},[F("i",{class:"fas fa-mouse-pointer"}),ti(" 拖曳旋轉・滾輪縮放・右鍵平移 ")],-1)),q2={class:"three-controls"},Y2=vd(()=>F("i",{class:"fas fa-home"},null,-1)),j2=[Y2],K2=vd(()=>F("i",{class:"fas fa-sync-alt"},null,-1)),Z2=[K2],J2={__name:"ThreePreview",props:{designImageUrl:{type:String,default:""}},setup(t){const e=t,n=ft(null),i=ft(!0);let s,r,o,a,l=null,c=null;const u=()=>{const w=n.value;if(!w)return;const C=w.clientWidth,A=w.clientHeight;s=new rE,s.background=new nt(1710638),s.fog=new dd(1710638,10,50),r=new gn(45,C/A,.1,100),r.position.set(0,1.5,5),o=new P2({antialias:!0}),o.setSize(C,A),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0,o.shadowMap.type=Nm,w.appendChild(o.domElement),a=new D2(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.05,a.autoRotate=i.value,a.autoRotateSpeed=1.5,a.minDistance=2,a.maxDistance=12,f(),d(),p(),m(),window.addEventListener("resize",h)},f=()=>{const w=new DE(16777215,.4);s.add(w);const C=new ch(16777215,1.2);C.position.set(5,8,5),C.castShadow=!0,C.shadow.mapSize.set(1024,1024),s.add(C);const A=new ch(5996543,.4);A.position.set(-5,2,-5),s.add(A);const D=new PE(16777215,.6,20);D.position.set(0,8,0),s.add(D)},d=()=>{const w=new NE(20,20,3355477,2236996);w.position.y=-1.5,s.add(w)},p=()=>{const w=new Tr(2,2,2,1,1,1),C=[_(4871528),_(4871528),_(2963272),_(2963272),_(5996543),_(4871528)];c=new ri(w,C),c.castShadow=!0,c.receiveShadow=!0,c.position.y=0,s.add(c),e.designImageUrl&&x(e.designImageUrl)},_=w=>new ih({color:w,roughness:.6,metalness:.2}),x=w=>{if(!c||!w)return;new CE().load(w,A=>{A.flipY=!0,A.needsUpdate=!0,c.material[4]=new ih({map:A,roughness:.5,metalness:.1}),c.material[4].needsUpdate=!0})},m=()=>{l=requestAnimationFrame(m),a.update(),o.render(s,r)},h=()=>{const w=n.value;if(!w)return;const C=w.clientWidth,A=w.clientHeight;r.aspect=C/A,r.updateProjectionMatrix(),o.setSize(C,A)},E=()=>{r.position.set(0,1.5,5),a.target.set(0,0,0),a.update()},M=()=>{i.value=!i.value,a.autoRotate=i.value};return Ss(()=>e.designImageUrl,w=>{w&&x(w)}),co(u),Iu(()=>{cancelAnimationFrame(l),window.removeEventListener("resize",h),o==null||o.dispose(),n.value&&(o!=null&&o.domElement)&&n.value.removeChild(o.domElement)}),(w,C)=>(tt(),it("div",$2,[F("div",{ref_key:"mountRef",ref:n,class:"three-mount"},null,512),X2,F("div",q2,[F("button",{class:"ctrl-btn",title:"重置視角",onClick:E},j2),F("button",{class:zt(["ctrl-btn",{active:i.value}]),title:"自動旋轉",onClick:M},Z2,2)])]))}},Q2=kn(J2,[["__scopeId","data-v-91e825e6"]]),fl=t=>(ai("data-v-ee8d2b31"),t=t(),li(),t),eR={class:"modal-container"},tR={class:"modal-header"},nR=fl(()=>F("div",{class:"modal-title"},[F("i",{class:"fas fa-cube"}),F("span",null,"3D 預覽效果")],-1)),iR=fl(()=>F("i",{class:"fas fa-times"},null,-1)),sR=[iR],rR={class:"modal-body"},oR={class:"modal-footer"},aR=fl(()=>F("i",{class:"fas fa-arrow-left"},null,-1)),lR={class:"footer-actions"},cR=fl(()=>F("i",{class:"fas fa-download"},null,-1)),uR={__name:"PreviewModal",props:{visible:{type:Boolean,default:!1},previewImageUrl:{type:String,default:""}},emits:["close","export-png"],setup(t){return(e,n)=>(tt(),Ou(f0,{to:"body"},[rt(xr,{name:"modal-fade"},{default:Xn(()=>[t.visible?(tt(),it("div",{key:0,class:"modal-overlay",onClick:n[3]||(n[3]=iv(i=>e.$emit("close"),["self"]))},[F("div",eR,[F("div",tR,[nR,F("button",{class:"close-btn",onClick:n[0]||(n[0]=i=>e.$emit("close"))},sR)]),F("div",rR,[rt(Q2,{"design-image-url":t.previewImageUrl},null,8,["design-image-url"])]),F("div",oR,[F("button",{class:"btn btn-secondary",onClick:n[1]||(n[1]=i=>e.$emit("close"))},[aR,ti(" 繼續編輯 ")]),F("div",lR,[F("button",{class:"btn btn-primary",onClick:n[2]||(n[2]=i=>e.$emit("export-png"))},[cR,ti(" 下載 PNG ")])])])])])):kt("",!0)]),_:1})]))}},dR=kn(uR,[["__scopeId","data-v-ee8d2b31"]]),xd=Math.PI/180;function ao(t,e,n,i,s){const r=s*xd,o=Math.cos(r),a=Math.sin(r);return{x:o*(n-t)-a*(i-e)+t,y:a*(n-t)+o*(i-e)+e}}function fR(t,e,n){const i=t.x+t.width/2,s=t.y+t.height/2;return ao(i,s,e,n,-t.rotation)}function hR(t,e,n){const i=fR(t,e,n);return i.x>=t.x&&i.x<=t.x+t.width&&i.y>=t.y&&i.y<=t.y+t.height}const Ks=8,pR=24;function xg(t){const{x:e,y:n,width:i,height:s,rotation:r}=t,o=e+i/2,a=n+s/2,l=[{id:"tl",lx:e,ly:n},{id:"tr",lx:e+i,ly:n},{id:"br",lx:e+i,ly:n+s},{id:"bl",lx:e,ly:n+s}],c=ao(o,a,o,n-pR,r);return{corners:l.map(u=>{const f=ao(o,a,u.lx,u.ly,r);return{id:u.id,x:f.x,y:f.y}}),rotate:{id:"rotate",x:c.x,y:c.y}}}function mR(t,e,n,i=Ks+2){for(const a of t.corners){const l=a.x-e,c=a.y-n;if(l*l+c*c<=i*i)return a.id}const s=t.rotate,r=s.x-e,o=s.y-n;return r*r+o*o<=(i+2)*i?"rotate":null}function Oh(t,e){t.save();const n=e.x+e.width/2,i=e.y+e.height/2;if(t.translate(n,i),t.rotate(e.rotation*xd),t.globalAlpha=e.opacity??1,e.type==="text"){const s=[e.italic?"italic":"",e.bold?"bold":"",`${e.fontSize}px`,`"${e.fontFamily}"`].filter(Boolean).join(" ");t.font=s,t.fillStyle=e.color??"#000000",t.textBaseline="top";const r=e.text.split(`
`),o=e.fontSize*1.2;r.forEach((a,l)=>{t.fillText(a,-e.width/2,-e.height/2+l*o)})}if(e.type==="image"&&e.imageEl){const s=e.brightness??0,r=e.contrast??0;t.filter=`brightness(${100+s}%) contrast(${100+r}%)`,t.drawImage(e.imageEl,-e.width/2,-e.height/2,e.width,e.height),t.filter="none"}t.restore()}function gR(t,e){t.save();const n=e.x+e.width/2,i=e.y+e.height/2;t.translate(n,i),t.rotate(e.rotation*xd),t.strokeStyle="rgba(60, 130, 191, 0.9)",t.lineWidth=1.5,t.setLineDash([5,3]),t.strokeRect(-e.width/2-2,-e.height/2-2,e.width+4,e.height+4),t.setLineDash([]),t.restore();const s=xg(e);s.corners.forEach(u=>{t.save(),t.fillStyle="#ffffff",t.strokeStyle="rgb(60, 130, 191)",t.lineWidth=2,t.beginPath(),t.rect(u.x-Ks/2,u.y-Ks/2,Ks,Ks),t.fill(),t.stroke(),t.restore()});const r=s.rotate;t.save(),t.fillStyle="rgb(60, 130, 191)",t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath(),t.arc(r.x,r.y,Ks/2+2,0,Math.PI*2),t.fill(),t.stroke(),t.restore();const o=s.corners.find(u=>u.id==="tl"),a=s.corners.find(u=>u.id==="tr"),l=(o.x+a.x)/2,c=(o.y+a.y)/2;t.save(),t.strokeStyle="rgb(60, 130, 191)",t.lineWidth=1.5,t.beginPath(),t.moveTo(l,c),t.lineTo(r.x,r.y),t.stroke(),t.restore()}function Bh(t,e){const n=[t.italic?"italic":"",t.bold?"bold":"",`${t.fontSize}px`,`"${t.fontFamily}"`].filter(Boolean).join(" ");e.font=n;const i=t.text.split(`
`),s=t.fontSize*1.2;let r=0;return i.forEach(o=>{const a=e.measureText(o).width;a>r&&(r=a)}),{width:Math.max(r,10),height:s*i.length}}function _R(){const t=ft(null),e=ft([]),n=ft(null),i=ft("#ffffff"),s=ft(!1);let r=null,o=1,a=null;const l=(z,V)=>{t.value&&(t.value.width=z,t.value.height=V,d())},c=(z,V)=>{for(const ne of e.value)ne.x<0&&(ne.x=0),ne.y<0&&(ne.y=0),ne.x+ne.width>z&&(ne.x=Math.max(0,z-ne.width)),ne.y+ne.height>V&&(ne.y=Math.max(0,V-ne.height));d()},u=z=>{a=z},f=z=>{a&&a(z)},d=()=>{if(!t.value||!r)return;const z=t.value.width,V=t.value.height;r.clearRect(0,0,z,V),r.fillStyle=i.value,r.fillRect(0,0,z,V);for(const ue of e.value)Oh(r,ue);const ne=_();ne&&gR(r,ne)},p=(z,V=800,ne=600)=>{const ue=document.getElementById(z);ue&&(t.value=ue,ue.width=V,ue.height=ne,r=ue.getContext("2d"),P(ue),d())},_=()=>e.value.find(z=>z.id===n.value)??null,x=z=>{n.value=z,f(_()),d()},m=()=>{n.value=null,f(null),d()},h=(z,V={})=>{if(!r)return;const ne={id:o++,type:"text",text:z,fontFamily:V.fontFamily??"Microsoft JhengHei",fontSize:V.fontSize??40,color:V.color??"#000000",bold:V.bold??!1,italic:V.italic??!1,x:100,y:100,width:0,height:0,rotation:0,opacity:1,scaleX:1,scaleY:1},ue=Bh(ne,r);ne.width=ue.width,ne.height=ue.height,e.value.push(ne),n.value=ne.id,f(ne),d()},E=z=>{const V=new FileReader;V.onload=ne=>{const ue=new Image;ue.onload=()=>{var ce,Be;const pe=((ce=t.value)==null?void 0:ce.width)??800,Ce=((Be=t.value)==null?void 0:Be.height)??600;let Ge=ue.naturalWidth,Xe=ue.naturalHeight;const B=Ge/Xe;Ge>pe*.7&&(Ge=pe*.7,Xe=Ge/B),Xe>Ce*.7&&(Xe=Ce*.7,Ge=Xe*B);const le={id:o++,type:"image",imageEl:ue,x:(pe-Ge)/2,y:(Ce-Xe)/2,width:Ge,height:Xe,rotation:0,opacity:1,scaleX:1,scaleY:1,brightness:0,contrast:0};e.value.push(le),n.value=le.id,f(le),d()},ue.src=ne.target.result},V.readAsDataURL(z)},M=()=>{n.value&&(e.value=e.value.filter(z=>z.id!==n.value),m())},w=()=>{e.value=[],m()},C=z=>{const V=_();if(V){if(Object.assign(V,z),V.type==="text"&&r&&("text"in z||"fontSize"in z||"fontFamily"in z||"bold"in z||"italic"in z)){const ne=Bh(V,r);V.width=ne.width,V.height=ne.height}f(V),d()}},A=z=>{i.value=z,d()},D=(z=2)=>{if(!t.value||!r)return"";const V=t.value.width,ne=t.value.height,ue=document.createElement("canvas");ue.width=V*z,ue.height=ne*z;const pe=ue.getContext("2d");pe.scale(z,z),pe.fillStyle=i.value,pe.fillRect(0,0,V,ne);for(const Ce of e.value)Oh(pe,Ce);return ue.toDataURL("image/png")},v=()=>t.value?(m(),d(),t.value.toDataURL("image/png")):"";let S=null;const K=(z,V)=>{const ne=z.getBoundingClientRect(),ue=z.width/ne.width,pe=z.height/ne.height;return{x:(V.clientX-ne.left)*ue,y:(V.clientY-ne.top)*pe}},P=z=>{z.addEventListener("mousedown",U),z.addEventListener("mousemove",H),z.addEventListener("mouseup",J),z.addEventListener("mouseleave",J)},U=z=>{const V=K(t.value,z),ne=_();if(ne){const pe=xg(ne),Ce=mR(pe,V.x,V.y);if(Ce){S={type:Ce==="rotate"?"rotate":"resize",handle:Ce,startX:V.x,startY:V.y,objId:ne.id,origObj:{...ne}};return}}let ue=null;for(let pe=e.value.length-1;pe>=0;pe--)if(hR(e.value[pe],V.x,V.y)){ue=e.value[pe];break}ue?(n.value!==ue.id&&(n.value=ue.id,f(ue),d()),S={type:"move",startX:V.x,startY:V.y,objId:ue.id,origObj:{...ue}}):m()},H=z=>{if(!S)return;const V=K(t.value,z),ne=e.value.find(Ge=>Ge.id===S.objId);if(!ne)return;const ue=V.x-S.startX,pe=V.y-S.startY,Ce=S.origObj;if(S.type==="move"){ne.x=Ce.x+ue,ne.y=Ce.y+pe,f(ne),d();return}if(S.type==="rotate"){const Ge=Ce.x+Ce.width/2,Xe=Ce.y+Ce.height/2,B=Math.atan2(V.y-Xe,V.x-Ge)*(180/Math.PI)+90;ne.rotation=(Math.round(B)%360+360)%360,f(ne),d();return}if(S.type==="resize"){X(ne,Ce,S.handle,V),d();return}},J=()=>{S=null},X=(z,V,ne,ue)=>{const pe=V.x+V.width/2,Ce=V.y+V.height/2,Ge=ao(pe,Ce,ue.x,ue.y,-V.rotation),Xe={tl:{ax:V.x+V.width,ay:V.y+V.height},tr:{ax:V.x,ay:V.y+V.height},br:{ax:V.x,ay:V.y},bl:{ax:V.x+V.width,ay:V.y}},{ax:B,ay:le}=Xe[ne],ce=20;let Be,Le,ke,R;ne==="br"?(ke=Math.max(ce,Ge.x-B),R=Math.max(ce,Ge.y-le),Be=B,Le=le):ne==="bl"?(ke=Math.max(ce,B-Ge.x),R=Math.max(ce,Ge.y-le),Be=B-ke,Le=le):ne==="tr"?(ke=Math.max(ce,Ge.x-B),R=Math.max(ce,le-Ge.y),Be=B,Le=le-R):ne==="tl"&&(ke=Math.max(ce,B-Ge.x),R=Math.max(ce,le-Ge.y),Be=B-ke,Le=le-R);const I=Be+ke/2,q=Le+R/2,ie=ao(pe,Ce,I,q,V.rotation);z.width=ke,z.height=R,z.x=ie.x-ke/2,z.y=ie.y-R/2,f(z)},W=ft(100);return{canvasEl:t,objects:e,selectedId:n,canvasBackground:i,isProductLoaded:s,zoomLevel:W,registerZoomChangeCallback:()=>{},onSelectChange:u,initCanvas:p,getSelected:_,selectObject:x,clearSelection:m,addText:h,addImage:E,deleteSelected:M,clearCanvas:w,updateSelected:C,setCanvasBackground:A,exportToPng:D,getPreviewUrl:v,render:d,resizeCanvas:l,clampObjects:c}}function vR(t){const e=ft(100),n=25,i=300,s=10,r=()=>{const u=t.value;u&&(u.style.transform=`scale(${e.value/100})`,u.style.transformOrigin="center center")};return{zoomLevel:e,zoomIn:()=>{e.value=Math.min(i,e.value+s),r()},zoomOut:()=>{e.value=Math.max(n,e.value-s),r()},resetView:()=>{e.value=100,r()},fitScreen:u=>{if(!t.value||!u)return;const f=u.clientWidth-80,d=u.clientHeight-80,p=t.value.width,_=t.value.height,x=Math.min(f/p,d/_,1);e.value=Math.round(x*100),r()}}}function xR(){const t=ft(null),e=$a({x:0,y:0,width:0,height:0,rotation:0,opacity:100,scaleX:1,scaleY:1,text:"",fontSize:40,fontFamily:"Microsoft JhengHei",color:"#000000",bold:!1,italic:!1,brightness:0,contrast:0}),n=ft(null);return{selectedObject:t,objectType:n,props:e,syncFromObject:r=>{if(!r){t.value=null,n.value=null;return}t.value=r,n.value=r.type,e.x=Math.round(r.x),e.y=Math.round(r.y),e.width=Math.round(r.width),e.height=Math.round(r.height),e.rotation=r.rotation??0,e.opacity=Math.round((r.opacity??1)*100),e.scaleX=r.scaleX??1,e.scaleY=r.scaleY??1,r.type==="text"&&(e.text=r.text??"",e.fontSize=r.fontSize??40,e.fontFamily=r.fontFamily??"Microsoft JhengHei",e.color=r.color??"#000000",e.bold=r.bold??!1,e.italic=r.italic??!1),r.type==="image"&&(e.brightness=r.brightness??0,e.contrast=r.contrast??0)},clearSelection:()=>{t.value=null,n.value=null}}}const bd=t=>(ai("data-v-3b8a5cc9"),t=t(),li(),t),bR={id:"app"},wR={class:"header"},yR=bd(()=>F("div",{class:"nav-left"},null,-1)),SR=bd(()=>F("div",{class:"logo"},[F("img",{src:dv,alt:"Logo"})],-1)),MR={class:"header-actions"},ER=bd(()=>F("i",{class:"fas fa-download"},null,-1)),TR={class:"app-body"},AR={class:"d-flex"},CR={class:"sidebar-float-wrap"},RR={class:"canvas-float-wrap"},PR={__name:"App",setup(t){const{canvasEl:e,onSelectChange:n,initCanvas:i,addText:s,addImage:r,deleteSelected:o,clearCanvas:a,updateSelected:l,exportToPng:c,getPreviewUrl:u,resizeCanvas:f,clampObjects:d}=_R(),{objectType:p,props:_,syncFromObject:x}=xR();n(B=>x(B));const{zoomLevel:m,zoomIn:h,zoomOut:E,resetView:M,fitScreen:w}=vR(e),C=ft(null);Ss(C,B=>{var Be;if(!B||B==="pure"){f==null||f(190,205);return}const le=rr[B];if(!le)return;const ce=((Be=le.printArea)==null?void 0:Be.rect)??le.printArea;ce!=null&&ce.width&&(ce!=null&&ce.height)&&(f==null||f(ce.width,ce.height),d==null||d(ce.width,ce.height))});const A=ft(null),D=ft(!1),v=B=>{D.value=B,document.documentElement.setAttribute("data-theme",B?"dark":"light")},S=()=>v(!D.value),K=ft(null),P=ft(!1),U=ft(""),H=()=>{U.value=u(),P.value=!0};co(()=>{const B=window.matchMedia("(prefers-color-scheme: dark)").matches;v(B),window.addEventListener("keydown",Xe)}),Uu(()=>{window.removeEventListener("keydown",Xe)});const J=({wrapperEl:B,printArea:le})=>{i("main-canvas",le.width,le.height),setTimeout(()=>w(B),100)},X=B=>s(B.content,B),W=B=>r(B),O=B=>{A.value=B},z=B=>l(B),V=()=>o(),ne=()=>a(),ue=()=>h(),pe=()=>E(),Ce=()=>M(),Ge=()=>{const B=c(2);if(!B)return;const le=document.createElement("a");le.href=B,le.download="design.png",le.click()},Xe=B=>{var ce;const le=(ce=document.activeElement)==null?void 0:ce.tagName;["INPUT","TEXTAREA","SELECT"].includes(le)||((B.key==="Delete"||B.key==="Backspace")&&V(),(B.ctrlKey||B.metaKey)&&(B.key==="+"||B.key==="=")&&(B.preventDefault(),ue()),(B.ctrlKey||B.metaKey)&&B.key==="-"&&(B.preventDefault(),pe()))};return(B,le)=>(tt(),it("div",bR,[F("div",{class:zt(["app-bg",D.value?"app-bg--dark":"app-bg--light"])},null,2),F("header",wR,[yR,SR,F("div",MR,[F("button",{class:"btn btn-primary",onClick:Ge},[ER,ti(" 下載 PNG ")]),F("button",{class:"btn btn-secondary theme-toggle",onClick:S},[F("i",{class:zt(D.value?"fas fa-sun":"fas fa-moon")},null,2)])])]),F("div",TR,[F("div",AR,[F("div",CR,[rt(PS,{"scene-background":A.value,"selected-object-type":Gr(p),"selected-props":Gr(_),"selected-machine":C.value,onAddText:X,onUploadImage:W,onChangeBackground:O,onUpdateObject:z,onDeleteSelected:V,"onUpdate:selectedMachine":le[0]||(le[0]=ce=>C.value=ce)},null,8,["scene-background","selected-object-type","selected-props","selected-machine"])]),F("div",RR,[rt(lM,{ref_key:"canvasViewRef",ref:K,"zoom-level":Gr(m),"selected-machine":C.value,"scene-background":A.value,onCanvasReady:J,onZoomIn:ue,onZoomOut:pe,onResetView:Ce,onClearCanvas:ne,onDeleteSelected:V,onOpenPreview:H},null,8,["zoom-level","selected-machine","scene-background"])])])]),rt(dR,{visible:P.value,"preview-image-url":U.value,onClose:le[1]||(le[1]=ce=>P.value=!1),onExportPng:Ge},null,8,["visible","preview-image-url"])]))}},LR=kn(PR,[["__scopeId","data-v-3b8a5cc9"]]),DR=uv(),bg=ov(LR);bg.use(DR);bg.mount("#app");
//# sourceMappingURL=index-BFDYZHX0.js.map
