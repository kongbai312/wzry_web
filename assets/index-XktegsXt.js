import{b as $,c as x,d as y,h as I,J as c,a as g,n as m,A as P,t as B,P as b,aD as C,w as S,aC as w,aE as O,i as _}from"./index-B_UMJman.js";const Y={to:[String,Object],url:String,replace:Boolean};function N({to:t,url:n,replace:r,$router:s}){t&&s?s[r?"replace":"push"](t):n&&(r?location.replace(n):location.href=n)}function Z(){const t=$().proxy;return()=>N(t)}const[j,h]=x("badge"),z={dot:Boolean,max:m,tag:P("div"),color:String,offset:Array,content:m,showZero:B,position:P("top-right")};var D=y({name:j,props:z,setup(t,{slots:n}){const r=()=>{if(n.content)return!0;const{content:e,showZero:o}=t;return b(e)&&e!==""&&(o||e!==0&&e!=="0")},s=()=>{const{dot:e,max:o,content:a}=t;if(!e&&r())return n.content?n.content():b(o)&&C(a)&&+a>+o?`${o}+`:a},u=e=>e.startsWith("-")?e.replace("-",""):`-${e}`,p=I(()=>{const e={background:t.color};if(t.offset){const[o,a]=t.offset,{position:l}=t,[i,d]=l.split("-");n.default?(typeof a=="number"?e[i]=c(i==="top"?a:-a):e[i]=i==="top"?c(a):u(a),typeof o=="number"?e[d]=c(d==="left"?o:-o):e[d]=d==="left"?c(o):u(o)):(e.marginTop=c(a),e.marginLeft=c(o))}return e}),f=()=>{if(r()||t.dot)return g("div",{class:h([t.position,{dot:t.dot,fixed:!!n.default}]),style:p.value},[s()])};return()=>{if(n.default){const{tag:e}=t;return g(e,{class:h("wrapper")},{default:()=>[n.default(),f()]})}return f()}}});const E=S(D),[R,v]=x("icon"),k=t=>t==null?void 0:t.includes("/"),A={dot:Boolean,tag:P("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var V=y({name:R,props:A,setup(t,{slots:n}){const r=w(O,null),s=I(()=>t.classPrefix||(r==null?void 0:r.iconPrefix)||v());return()=>{const{tag:u,dot:p,name:f,size:e,badge:o,color:a}=t,l=k(f);return g(E,_({dot:p,tag:u,class:[s.value,l?"":`${s.value}-${f}`],style:{color:a,fontSize:c(e)},content:o},t.badgeProps),{default:()=>{var i;return[(i=n.default)==null?void 0:i.call(n),l&&g("img",{class:v("image"),src:f},null)]}})}}});const F=S(V);export{E as B,F as I,N as a,Y as r,Z as u};