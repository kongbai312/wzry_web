import{a as F,u as H,d as Q}from"./use-route-D8W4l6is.js";import{I as _}from"./_plugin-vue_export-helper-DKafNNip.js";import{j as B,b as a,d as O,n as G,x as k,aj as J,a3 as v,y as d,a9 as K,k as z,A as W,w as P,l as X,aC as Y,m as $,z as Z,ao as ee,ad as D,Q as ne,aD as te,I as oe,V as ae,ar as ie,r as se,ai as le}from"./index-Con2zwDB.js";import{u as ce}from"./use-expose-B7WTVG09.js";import{P as re}from"./index-CKha1vea.js";const[ue,x]=B("loading"),de=Array(12).fill(null).map((e,n)=>a("i",{class:x("line",String(n+1))},null)),fe=a("svg",{class:x("circular"),viewBox:"25 25 50 50"},[a("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),me={size:v,type:d("circular"),color:String,vertical:Boolean,textSize:v,textColor:String};var ge=O({name:ue,props:me,setup(e,{slots:n}){const t=G(()=>k({color:e.color},J(e.size))),c=()=>{const s=e.type==="spinner"?de:fe;return a("span",{class:x("spinner",e.type),style:t.value},[n.icon?n.icon():s])},l=()=>{var s;if(n.default)return a("span",{class:x("text"),style:{fontSize:K(e.textSize),color:(s=e.textColor)!=null?s:e.color}},[n.default()])};return()=>{const{type:s,vertical:u}=e;return a("div",{class:x([s,{vertical:u}]),"aria-live":"polite","aria-busy":!0},[c(),l()])}}});const j=z(ge),[ye,g]=B("button"),ve=k({},F,{tag:d("button"),text:String,icon:String,type:d("default"),size:d("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:d("button"),loadingSize:v,loadingText:String,loadingType:String,iconPosition:d("left")});var ke=O({name:ye,props:ve,emits:["click"],setup(e,{emit:n,slots:t}){const c=H(),l=()=>t.loading?t.loading():a(j,{size:e.loadingSize,type:e.loadingType,class:g("loading")},null),s=()=>{if(e.loading)return l();if(t.icon)return a("div",{class:g("icon")},[t.icon()]);if(e.icon)return a(_,{name:e.icon,class:g("icon"),classPrefix:e.iconPrefix},null)},u=()=>{let o;if(e.loading?o=e.loadingText:o=t.default?t.default():e.text,o)return a("span",{class:g("text")},[o])},S=()=>{const{color:o,plain:m}=e;if(o){const i={color:m?o:"white"};return m||(i.background=o),o.includes("gradient")?i.border=0:i.borderColor=o,i}},f=o=>{e.loading?W(o):e.disabled||(n("click",o),c())};return()=>{const{tag:o,type:m,size:i,block:r,round:C,plain:p,square:w,loading:I,disabled:T,hairline:M,nativeType:E,iconPosition:N}=e,V=[g([m,i,{plain:p,block:r,round:C,square:w,loading:I,disabled:T,hairline:M}]),{[Q]:M}];return a(o,{type:E,class:V,style:S(),disabled:T,onClick:f},{default:()=>[a("div",{class:g("content")},[N==="left"&&s(),u(),N==="right"&&s()])]})}}});const $e=z(ke);let b=0;function Se(e){e?(b||document.body.classList.add("van-toast--unclickable"),b++):b&&(b--,b||document.body.classList.remove("van-toast--unclickable"))}const[be,y]=B("toast"),xe=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],Ce={icon:String,show:Boolean,type:d("text"),overlay:Boolean,message:v,iconSize:v,duration:ee(2e3),position:d("middle"),teleport:[String,Object],wordBreak:String,className:D,iconPrefix:String,transition:d("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:D,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:v};var L=O({name:be,props:Ce,emits:["update:show"],setup(e,{emit:n,slots:t}){let c,l=!1;const s=()=>{const i=e.show&&e.forbidClick;l!==i&&(l=i,Se(l))},u=i=>n("update:show",i),S=()=>{e.closeOnClick&&u(!1)},f=()=>clearTimeout(c),o=()=>{const{icon:i,type:r,iconSize:C,iconPrefix:p,loadingType:w}=e;if(i||r==="success"||r==="fail")return a(_,{name:i||r,size:C,class:y("icon"),classPrefix:p},null);if(r==="loading")return a(j,{class:y("loading"),size:C,type:w},null)},m=()=>{const{type:i,message:r}=e;if(t.message)return a("div",{class:y("text")},[t.message()]);if(ne(r)&&r!=="")return i==="html"?a("div",{key:0,class:y("text"),innerHTML:String(r)},null):a("div",{class:y("text")},[r])};return P(()=>[e.show,e.forbidClick],s),P(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(c=setTimeout(()=>{u(!1)},e.duration))}),X(s),Y(s),()=>a(re,$({class:[y([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:S,onClosed:f,"onUpdate:show":u},Z(e,xe)),{default:()=>[o(),m()]})}});function he(){const e=oe({show:!1}),n=l=>{e.show=l},t=l=>{k(e,l,{transitionAppear:!0}),n(!0)},c=()=>n(!1);return ce({open:t,close:c,toggle:n}),{open:t,close:c,state:e,toggle:n}}function pe(e){const n=te(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}const we={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let h=[],Pe=!1,U=k({},we);const Be=new Map;function R(e){return ie(e)?e:{message:e}}function Oe(){const{instance:e,unmount:n}=pe({setup(){const t=se(""),{open:c,state:l,close:s,toggle:u}=he(),S=()=>{},f=()=>a(L,$(l,{onClosed:S,"onUpdate:show":u}),null);return P(t,o=>{l.message=o}),le().render=f,{open:c,close:s,message:t}}});return e}function ze(){if(!h.length||Pe){const e=Oe();h.push(e)}return h[h.length-1]}function A(e={}){if(!ae)return{};const n=ze(),t=R(e);return n.open(k({},U,Be.get(t.type||U.type),t)),n}const q=e=>n=>A(k({type:e},R(n))),Ie=q("success"),Te=q("fail");z(L);const je={success:(e,n)=>{Ie({message:e,position:n})},info:(e,n)=>{A({message:e,position:n})},fail:(e,n)=>{Te({message:e,position:n})}};export{$e as B,pe as a,je as m,he as u};