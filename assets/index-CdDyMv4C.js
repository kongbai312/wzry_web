import{j as R,d as W,r as k,a4 as M,Y as j,n as T,Q as Y,az as F,K as Q,b as r,t as O,a3 as V,M as U,y as Z,N as _,a2 as q,I as G,ac as J,aA as X,E as ee,ad as A,aB as te,D as oe,L as ae,m as ne,_ as se,k as B}from"./index-CACfW1L3.js";import{u as N}from"./use-expose-BBR89yB_.js";import{C as le}from"./index-o2k_8JYP.js";import{I as re}from"./_plugin-vue_export-helper-CZ9DfyQk.js";import{P as ie}from"./index-COY7Uf5f.js";import{u as ce}from"./use-id-dOBWTR5s.js";import{H as de}from"./use-route-B3Rl6And.js";const[L,b]=R("dropdown-menu"),ue={overlay:O,zIndex:V,duration:U(.2),direction:Z("down"),activeColor:String,autoLocate:Boolean,closeOnClickOutside:O,closeOnClickOverlay:O,swipeThreshold:V},H=Symbol(L);var pe=W({name:L,props:ue,setup(t,{slots:i}){const c=ce(),p=k(),o=k(),d=k(0),{children:n,linkChildren:I}=M(H),f=j(p),m=T(()=>n.some(e=>e.state.showWrapper)),h=T(()=>t.swipeThreshold&&n.length>+t.swipeThreshold),x=T(()=>{if(m.value&&Y(t.zIndex))return{zIndex:+t.zIndex+1}}),C=()=>{n.forEach(e=>{e.toggle(!1)})},S=()=>{t.closeOnClickOutside&&C()},g=()=>{if(o.value){const e=_(o);t.direction==="down"?d.value=e.bottom:d.value=q.value-e.top}},z=()=>{m.value&&g()},D=e=>{n.forEach((a,s)=>{s===e?a.toggle():a.state.showPopup&&a.toggle(!1,{immediate:!0})})},P=(e,a)=>{const{showPopup:s}=e.state,{disabled:l,titleClass:v}=e;return r("div",{id:`${c}-${a}`,role:"button",tabindex:l?void 0:0,"data-allow-mismatch":"attribute",class:[b("item",{disabled:l,grow:h.value}),{[de]:!l}],onClick:()=>{l||D(a)}},[r("span",{class:[b("title",{down:s===(t.direction==="down"),active:s}),v],style:{color:s?t.activeColor:""}},[r("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return N({close:C}),I({id:c,props:t,offset:d,updateOffset:g}),F(p,S),Q("scroll",z,{target:f,passive:!0}),()=>{var e;return r("div",{ref:p,class:b()},[r("div",{ref:o,style:x.value,class:b("bar",{opened:m.value,scrollable:h.value})},[n.map(P)]),(e=i.default)==null?void 0:e.call(i)])}}});const[fe,y]=R("dropdown-item"),me={title:String,options:ee(),disabled:Boolean,teleport:[String,Object],lazyRender:O,modelValue:A,titleClass:A};var ve=W({name:fe,inheritAttrs:!1,props:me,emits:["open","opened","close","closed","change","update:modelValue"],setup(t,{emit:i,slots:c,attrs:p}){const o=G({showPopup:!1,transition:!0,showWrapper:!1}),d=k(),{parent:n,index:I}=J(H);if(!n)return;const f=e=>()=>i(e),m=f("open"),h=f("close"),x=f("opened"),C=()=>{o.showWrapper=!1,i("closed")},S=e=>{t.teleport&&e.stopPropagation()},g=(e=!o.showPopup,a={})=>{e!==o.showPopup&&(o.showPopup=e,o.transition=!a.immediate,e&&(n.updateOffset(),o.showWrapper=!0))},z=()=>{if(c.title)return c.title();if(t.title)return t.title;const e=t.options.find(a=>a.value===t.modelValue);return e?e.text:""},D=e=>{const{activeColor:a}=n.props,{disabled:s}=e,l=e.value===t.modelValue,v=()=>{s||(o.showPopup=!1,e.value!==t.modelValue&&(i("update:modelValue",e.value),i("change",e.value)))},w=()=>{if(l)return r(re,{class:y("icon"),color:s?void 0:a,name:"success"},null)};return r(le,{role:"menuitem",key:String(e.value),icon:e.icon,title:e.text,class:y("option",{active:l,disabled:s}),style:{color:l?a:""},tabindex:l?0:-1,clickable:!s,onClick:v},{value:w})},P=()=>{const{offset:e}=n,{autoLocate:a,zIndex:s,overlay:l,duration:v,direction:w,closeOnClickOverlay:K}=n.props,E=se(s);let $=e.value;if(a&&d.value){const u=te(d.value);u&&($-=_(u).top)}return w==="down"?E.top=`${$}px`:E.bottom=`${$}px`,oe(r("div",ne({ref:d,style:E,class:y([w]),onClick:S},p),[r(ie,{show:o.showPopup,"onUpdate:show":u=>o.showPopup=u,role:"menu",class:y("content"),overlay:l,position:w==="down"?"top":"bottom",duration:o.transition?v:0,lazyRender:t.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${n.id}-${I.value}`,"data-allow-mismatch":"attribute",closeOnClickOverlay:K,onOpen:m,onClose:h,onOpened:x,onClosed:C},{default:()=>{var u;return[t.options.map(D),(u=c.default)==null?void 0:u.call(c)]}})]),[[ae,o.showWrapper]])};return N({state:o,toggle:g,renderTitle:z}),()=>t.teleport?r(X,{to:t.teleport},{default:()=>[P()]}):P()}});const ke=B(ve),Oe=B(pe);export{Oe as D,ke as a};
