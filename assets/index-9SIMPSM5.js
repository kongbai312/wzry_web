import{j as H,d as G,a4 as ye,w as D,ax as ue,b as u,a3 as z,y as Ve,E as Pe,k as U,ad as de,x as ve,a8 as we,t as R,r as y,n as w,a9 as L,ac as Me,z as Ie,m as le,aj as Te,D as ee,L as te,M as A,au as me,Q as Y,a0 as Be,aw as ze,A as Q,ay as Ee,I as $e,az as Ge,K as qe,N as Ne,a7 as Re,an as je,o as E,g as j,p as N,a as S,e as T,f as B,i as O,F as Z,v as ge,q as oe,H as De,c as se}from"./index-CACfW1L3.js";import{a as Fe,T as Ae}from"./index-CvatWPN_.js";import{_ as Le}from"./narback.vue_vue_type_script_setup_true_lang-B8rtVQL-.js";import{m as W,B as be}from"./vantTool-CjtyTWdr.js";import{u as ie}from"./use-expose-BBR89yB_.js";import{I as We,_ as ce}from"./_plugin-vue_export-helper-CZ9DfyQk.js";import{H as fe,L as Oe}from"./use-route-B3Rl6And.js";import{c as he}from"./interceptor-DDwOqtEV.js";import{a as He,D as Ue}from"./index-CdDyMv4C.js";import"./index-o2k_8JYP.js";import{b as Ke}from"./index-COY7Uf5f.js";import"./use-placeholder-1a0hyej0.js";import"./use-id-dOBWTR5s.js";const[pe,Xe]=H("checkbox-group"),Je={max:z,shape:Ve("round"),disabled:Boolean,iconSize:z,direction:String,modelValue:Pe(),checkedColor:String},_e=Symbol(pe);var Qe=G({name:pe,props:Je,emits:["change","update:modelValue"],setup(e,{emit:l,slots:d}){const{children:c,linkChildren:r}=ye(_e),i=n=>l("update:modelValue",n),o=(n={})=>{typeof n=="boolean"&&(n={checked:n});const{checked:b,skipDisabled:C}=n,v=c.filter(s=>s.props.bindGroup?s.props.disabled&&C?s.checked.value:b??!s.checked.value:!1).map(s=>s.name);i(v)};return D(()=>e.modelValue,n=>l("change",n)),ie({toggleAll:o}),ue(()=>e.modelValue),r({props:e,updateValue:i}),()=>{var n;return u("div",{class:Xe([e.direction])},[(n=d.default)==null?void 0:n.call(d)])}}});const ke=U(Qe),xe={name:de,disabled:Boolean,iconSize:z,modelValue:de,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var Ye=G({props:ve({},xe,{bem:we(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:R,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:l,slots:d}){const c=y(),r=s=>{if(e.parent&&e.bindGroup)return e.parent.props[s]},i=w(()=>{if(e.parent&&e.bindGroup){const s=r("disabled")||e.disabled;if(e.role==="checkbox"){const k=r("modelValue").length,x=r("max"),P=x&&k>=+x;return s||P&&!e.checked}return s}return e.disabled}),o=w(()=>r("direction")),n=w(()=>{const s=e.checkedColor||r("checkedColor");if(s&&e.checked&&!i.value)return{borderColor:s,backgroundColor:s}}),b=w(()=>e.shape||r("shape")||"round"),C=s=>{const{target:k}=s,x=c.value,P=x===k||(x==null?void 0:x.contains(k));!i.value&&(P||!e.labelDisabled)&&l("toggle"),l("click",s)},m=()=>{var s,k;const{bem:x,checked:P,indeterminate:h}=e,a=e.iconSize||r("iconSize");return u("div",{ref:c,class:x("icon",[b.value,{disabled:i.value,checked:P,indeterminate:h}]),style:b.value!=="dot"?{fontSize:L(a)}:{width:L(a),height:L(a),borderColor:(s=n.value)==null?void 0:s.borderColor}},[d.icon?d.icon({checked:P,disabled:i.value}):b.value!=="dot"?u(We,{name:h?"minus":"success",style:n.value},null):u("div",{class:x("icon--dot__icon"),style:{backgroundColor:(k=n.value)==null?void 0:k.backgroundColor}},null)])},v=()=>{const{checked:s}=e;if(d.default)return u("span",{class:e.bem("label",[e.labelPosition,{disabled:i.value}])},[d.default({checked:s,disabled:i.value})])};return()=>{const s=e.labelPosition==="left"?[v(),m()]:[m(),v()];return u("div",{role:e.role,class:e.bem([{disabled:i.value,"label-disabled":e.labelDisabled},o.value]),tabindex:i.value?void 0:0,"aria-checked":e.checked,onClick:C},[s])}}});const[Ze,et]=H("checkbox"),tt=ve({},xe,{shape:String,bindGroup:R,indeterminate:{type:Boolean,default:null}});var at=G({name:Ze,props:tt,emits:["change","update:modelValue"],setup(e,{emit:l,slots:d}){const{parent:c}=Me(_e),r=n=>{const{name:b}=e,{max:C,modelValue:m}=c.props,v=m.slice();if(n)!(C&&v.length>=+C)&&!v.includes(b)&&(v.push(b),e.bindGroup&&c.updateValue(v));else{const s=v.indexOf(b);s!==-1&&(v.splice(s,1),e.bindGroup&&c.updateValue(v))}},i=w(()=>c&&e.bindGroup?c.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),o=(n=!i.value)=>{c&&e.bindGroup?r(n):l("update:modelValue",n),e.indeterminate!==null&&l("change",n)};return D(()=>e.modelValue,n=>{e.indeterminate===null&&l("change",n)}),ie({toggle:o,props:e,checked:i}),ue(()=>e.modelValue),()=>u(Ye,le({bem:et,role:"checkbox",parent:c,checked:i.value,onToggle:o},e),Ie(d,["default","icon"]))}});const Se=U(at),[nt,ae]=H("progress"),lt={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:R,pivotColor:String,trackColor:String,strokeWidth:z,percentage:{type:z,default:0,validator:e=>+e>=0&&+e<=100}};var ot=G({name:nt,props:lt,setup(e){const l=w(()=>e.inactive?void 0:e.color),d=()=>{const{textColor:c,pivotText:r,pivotColor:i,percentage:o}=e,n=r??`${o}%`;if(e.showPivot&&n){const b={color:c,left:`${+o}%`,transform:`translate(-${+o}%,-50%)`,background:i||l.value};return u("span",{style:b,class:ae("pivot",{inactive:e.inactive})},[n])}};return()=>{const{trackColor:c,percentage:r,strokeWidth:i}=e,o={background:c,height:L(i)},n={width:`${r}%`,background:l.value};return u("div",{class:ae(),style:o},[u("span",{class:ae("portion",{inactive:e.inactive}),style:n},null),d()])}}});const st=U(ot),[ut,X]=H("stepper"),it=200,J=(e,l)=>String(e)===String(l),ct={min:A(1),max:A(1/0),name:A(""),step:A(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:R,showMinus:R,showInput:R,longPress:R,autoFixed:R,allowEmpty:Boolean,modelValue:z,inputWidth:z,buttonSize:z,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:A(1),decimalLength:z};var rt=G({name:ut,props:ct,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:l}){const d=(t,f=!0)=>{const{min:_,max:F,allowEmpty:I,decimalLength:K}=e;return I&&t===""||(t=me(String(t),!e.integer),t=t===""?0:+t,t=Number.isNaN(t)?+_:t,t=f?Math.max(Math.min(+F,t),+_):t,Y(K)&&(t=t.toFixed(+K))),t},c=()=>{var t;const f=(t=e.modelValue)!=null?t:e.defaultValue,_=d(f);return J(_,e.modelValue)||l("update:modelValue",_),_};let r;const i=y(),o=y(c()),n=w(()=>e.disabled||e.disableMinus||+o.value<=+e.min),b=w(()=>e.disabled||e.disablePlus||+o.value>=+e.max),C=w(()=>({width:L(e.inputWidth),height:L(e.buttonSize)})),m=w(()=>Te(e.buttonSize)),v=()=>{const t=d(o.value);J(t,o.value)||(o.value=t)},s=t=>{e.beforeChange?he(e.beforeChange,{args:[t],done(){o.value=t}}):o.value=t},k=()=>{if(r==="plus"&&b.value||r==="minus"&&n.value){l("overlimit",r);return}const t=r==="minus"?-e.step:+e.step,f=d(Ee(+o.value,t));s(f),l(r)},x=t=>{const f=t.target,{value:_}=f,{decimalLength:F}=e;let I=me(String(_),!e.integer);if(Y(F)&&I.includes(".")){const re=I.split(".");I=`${re[0]}.${re[1].slice(0,+F)}`}e.beforeChange?f.value=String(o.value):J(_,I)||(f.value=I);const K=I===String(+I);s(K?+I:I)},P=t=>{var f;e.disableInput?(f=i.value)==null||f.blur():l("focus",t)},h=t=>{const f=t.target,_=d(f.value,e.autoFixed);f.value=String(_),o.value=_,Be(()=>{l("blur",t),ze()})};let a,g;const V=()=>{g=setTimeout(()=>{k(),V()},it)},M=()=>{e.longPress&&(a=!1,clearTimeout(g),g=setTimeout(()=>{a=!0,k(),V()},Oe))},$=t=>{e.longPress&&(clearTimeout(g),a&&Q(t))},q=t=>{e.disableInput&&Q(t)},p=t=>({onClick:f=>{Q(f),r=t,k()},onTouchstartPassive:()=>{r=t,M()},onTouchend:$,onTouchcancel:$});return D(()=>[e.max,e.min,e.integer,e.decimalLength],v),D(()=>e.modelValue,t=>{J(t,o.value)||(o.value=d(t))}),D(o,t=>{l("update:modelValue",t),l("change",t,{name:e.name})}),ue(()=>e.modelValue),()=>u("div",{role:"group",class:X([e.theme])},[ee(u("button",le({type:"button",style:m.value,class:[X("minus",{disabled:n.value}),{[fe]:!n.value}],"aria-disabled":n.value||void 0},p("minus")),null),[[te,e.showMinus]]),ee(u("input",{ref:i,type:e.integer?"tel":"text",role:"spinbutton",class:X("input"),value:o.value,style:C.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,autocomplete:"off","aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":o.value,onBlur:h,onInput:x,onFocus:P,onMousedown:q},null),[[te,e.showInput]]),ee(u("button",le({type:"button",style:m.value,class:[X("plus",{disabled:b.value}),{[fe]:!b.value}],"aria-disabled":b.value||void 0},p("plus")),null),[[te,e.showPlus]])])}});const dt=U(rt),[mt,ne]=H("swipe-cell"),ft={name:A(""),disabled:Boolean,leftWidth:z,rightWidth:z,beforeClose:Function,stopPropagation:Boolean};var vt=G({name:mt,props:ft,emits:["open","close","click"],setup(e,{emit:l,slots:d}){let c,r,i,o;const n=y(),b=y(),C=y(),m=$e({offset:0,dragging:!1}),v=Ke(),s=t=>t.value?Ne(t).width:0,k=w(()=>Y(e.leftWidth)?+e.leftWidth:s(b)),x=w(()=>Y(e.rightWidth)?+e.rightWidth:s(C)),P=t=>{m.offset=t==="left"?k.value:-x.value,c||(c=!0,l("open",{name:e.name,position:t}))},h=t=>{m.offset=0,c&&(c=!1,l("close",{name:e.name,position:t}))},a=t=>{const f=Math.abs(m.offset),_=.15,F=c?1-_:_,I=t==="left"?k.value:x.value;I&&f>I*F?P(t):h(t)},g=t=>{e.disabled||(i=m.offset,v.start(t))},V=t=>{if(e.disabled)return;const{deltaX:f}=v;v.move(t),v.isHorizontal()&&(r=!0,m.dragging=!0,(!c||f.value*i<0)&&Q(t,e.stopPropagation),m.offset=Re(f.value+i,-x.value,k.value))},M=()=>{m.dragging&&(m.dragging=!1,a(m.offset>0?"left":"right"),setTimeout(()=>{r=!1},0))},$=(t="outside",f)=>{o||(l("click",t),c&&!r&&(o=!0,he(e.beforeClose,{args:[{event:f,name:e.name,position:t}],done:()=>{o=!1,h(t)},canceled:()=>o=!1,error:()=>o=!1})))},q=(t,f)=>_=>{f&&_.stopPropagation(),!r&&$(t,_)},p=(t,f)=>{const _=d[t];if(_)return u("div",{ref:f,class:ne(t),onClick:q(t,!0)},[_()])};return ie({open:P,close:h}),Ge(n,t=>$("outside",t),{eventName:"touchstart"}),qe("touchmove",V,{target:n}),()=>{var t;const f={transform:`translate3d(${m.offset}px, 0, 0)`,transitionDuration:m.dragging?"0s":".6s"};return u("div",{ref:n,class:ne(),onClick:q("cell",r),onTouchstartPassive:g,onTouchend:M,onTouchcancel:M},[u("div",{class:ne("wrapper"),style:f},[p("left",b),(t=d.default)==null?void 0:t.call(d),p("right",C)])])}}});const gt=U(vt),Ce=je("xx-bsMaps",()=>({bsMaps:y({bs:{text:"宝石",value:"bs",map:["硬石矿井","十面埋伏","嗖嗖作响"]},jk:{text:"金库",value:"jk",map:["轰隆峡谷","安全区域","烫手山芋"]},sj:{text:"赏金",value:"sj",map:["蝮蛇草场","神秘流星","大运河"]},tt:{text:"淘汰",value:"tt",map:["摇滚贝尔","烈焰凤凰","空旷荒野"]},rq:{text:"热区",value:"rq",map:["开门营业","平行游戏","甲虫决斗"]},zq:{text:"足球",value:"zq",map:["后院球场","三重威胁","绿荫球场"]}})}),{persist:{key:"bs-maps",paths:["bsMaps"]}}),bt={class:"mode"},ht={class:"buttonGroup"},pt={class:"randomButton_container"},_t={class:"percentage_container"},kt={key:0,class:"mapShow"},xt=G({__name:"bsMap",setup(e){const l=y([]),d=y(),c=()=>{d.value.toggleAll(!0)},r=()=>{d.value.toggleAll()};let i=y(0),o=y(1),n=y(!1);const b=async()=>{for(i.value=0;i.value<100;){const h=Math.floor(Math.random()*10)+1;i.value+=h,i.value>=100&&(i.value=100),await new Promise(a=>setTimeout(a,50))}n.value=!1},C=Ce();let m=w(()=>C.bsMaps),v=y([]);function s(h,a){const g=[],V=new Set;for(;V.size<h;){const M=Math.floor(Math.random()*a.length);V.has(M)||(V.add(M),g.push(a[M]))}return g}const k=()=>{let h={};l.value.forEach(g=>{h[g]=m.value[g].map});let a=o.value;if(a<l.value.length){let g=s(a,l.value);v.value=g.map(V=>({mode:V,value:s(1,h[V])[0]}))}else if(a===l.value.length)v.value=l.value.map(g=>({mode:g,value:s(1,h[g])[0]}));else if(a>l.value.length){let g=l.value.reduce((p,t)=>(p=p+m.value[t].map.length,p),0);if(a>g){W.fail("抽取错误，原因：配置地图的数量少于抽取数量");return}let V=[],M=l.value.map(p=>{let t=s(1,h[p])[0];return h[p].forEach(f=>{f!==t&&V.push({mode:p,value:f})}),{mode:p,value:t}}),$=a-l.value.length,q=s($,V);v.value=[...M,...q]}},x=async()=>{if(n.value){W.info("当前正在抽取");return}if(l.value.length===0){W.info("模式不能为空");return}v.value=[],n.value=!0,await b(),k()},P=h=>({bs:"宝石：",jk:"金库：",rq:"热区：",sj:"赏金：",tt:"淘汰：",zq:"足球："})[h]||"";return(h,a)=>{const g=Se,V=ke,M=be,$=dt,q=st;return E(),j(Z,null,[a[13]||(a[13]=N("div",{class:"title"},"地图抽取工具",-1)),N("div",bt,[a[12]||(a[12]=N("span",{class:"modetext"},"模式：",-1)),u(V,{ref_key:"checkboxGroup",ref:d,class:"modeGroup",modelValue:B(l),"onUpdate:modelValue":a[0]||(a[0]=p=>O(l)?l.value=p:null),direction:"horizontal"},{default:S(()=>[u(g,{class:"modeItem",name:"bs"},{default:S(()=>a[2]||(a[2]=[T("宝石")])),_:1}),u(g,{class:"modeItem",name:"jk"},{default:S(()=>a[3]||(a[3]=[T("金库")])),_:1}),u(g,{class:"modeItem",name:"sj"},{default:S(()=>a[4]||(a[4]=[T("赏金")])),_:1}),u(g,{class:"modeItem",name:"tt"},{default:S(()=>a[5]||(a[5]=[T("淘汰")])),_:1}),u(g,{class:"modeItem",name:"rq"},{default:S(()=>a[6]||(a[6]=[T("热区")])),_:1}),u(g,{class:"modeItem",name:"zq"},{default:S(()=>a[7]||(a[7]=[T("足球")])),_:1})]),_:1},8,["modelValue"]),N("div",ht,[u(M,{type:"primary",onClick:c},{default:S(()=>a[8]||(a[8]=[T("全选")])),_:1}),u(M,{type:"primary",onClick:r},{default:S(()=>a[9]||(a[9]=[T("反选")])),_:1})]),N("div",pt,[a[11]||(a[11]=T(" 数量：")),u($,{modelValue:B(o),"onUpdate:modelValue":a[1]||(a[1]=p=>O(o)?o.value=p:o=p),min:"1",max:"7",integer:""},null,8,["modelValue"]),u(M,{round:"",type:"success",class:"randomButton",onClick:x},{default:S(()=>a[10]||(a[10]=[T("抽取")])),_:1})]),N("div",_t,[u(q,{percentage:B(i),"stroke-width":"8"},null,8,["percentage"])])]),B(v).length!==0?(E(),j("div",kt,[(E(!0),j(Z,null,ge(B(v),(p,t)=>(E(),j("span",{class:"mapItem",key:t},oe(P(p.mode))+oe(p.value),1))),128))])):De("",!0)],64)}}}),St=ce(xt,[["__scopeId","data-v-6c7a1982"]]),Ct={class:"bsMapSetting_container"},yt={class:"dropdown_container"},Vt=1,Pt=G({__name:"bsMapSetting",setup(e){let l=y([{text:"宝石",value:"bs"},{text:"金库",value:"jk"},{text:"赏金",value:"sj"},{text:"淘汰",value:"tt"},{text:"热区",value:"rq"},{text:"足球",value:"zq"}]),d=y("bs");const c={bs:{name:"bs",value:["硬石矿井","宝石要塞","十面埋伏","嗖嗖作响","矿车飞驰","锋利锐角","乡趣游乐场","开阔地带","终点站","隐秘潜行","菠萝广场","螺旋开瓶"]},jk:{name:"jk",value:["轰隆峡谷","安全区域","烫手山芋","遥远的桥","神秘领域","电子风暴"]},sj:{name:"sj",value:["蝮蛇草场","神秘流星","大运河","格格不入","夹心蛋糕","酷热地带"]},tt:{name:"tt",value:["金臂峡谷","摇滚贝尔","烈焰凤凰","空旷荒野","新地平线","川流不息","四重关卡","暮光通道","强硬路线","跳跃岛屿","黄昏搏斗","深切感激"]},rq:{name:"rq",value:["开门营业","平行游戏","灼热火圈","甲虫决斗","全力冲刺","日出日落"]},zq:{name:"zq",value:["后院球场","三重威胁","绿荫球场","超级海滩","梦幻弹珠","中心舞台","沙滩足球","阳光球场","点球大战","裤子后袋","乏力双脚","炫酷花招"]}};let r=w(()=>c[d.value].value);const i=Ce();let o=w(()=>i.bsMaps),n=y([]);n.value=o.value[d.value].map,D(()=>d.value,(C,m)=>{o.value[m].map=n.value,n.value=o.value[C].map}),D(()=>n.value,(C,m)=>{C.length<Vt&&(W.info("地图最小选择数量为1"),n.value=m)});const b=()=>{o.value[d.value].map=n.value,W.success("保存成功")};return(C,m)=>{const v=He,s=Ue,k=be,x=Se,P=gt,h=ke;return E(),j("div",Ct,[N("div",yt,[u(s,null,{default:S(()=>[u(v,{modelValue:B(d),"onUpdate:modelValue":m[0]||(m[0]=a=>O(d)?d.value=a:d=a),options:B(l)},null,8,["modelValue","options"])]),_:1}),u(k,{class:"save_button",type:"success",onClick:b},{default:S(()=>m[2]||(m[2]=[T("保存")])),_:1})]),u(h,{class:"mapGroup",modelValue:B(n),"onUpdate:modelValue":m[1]||(m[1]=a=>O(n)?n.value=a:n=a)},{default:S(()=>[(E(!0),j(Z,null,ge(B(r),(a,g)=>(E(),se(P,{class:"mapsItem",key:g},{right:S(()=>[u(k,{square:"",text:"删除",type:"danger",class:"delete-button"})]),default:S(()=>[u(x,{class:"mapItem",name:a},{default:S(()=>[T(oe(a),1)]),_:2},1032,["name"])]),_:2},1024))),128))]),_:1},8,["modelValue"])])}}}),wt=ce(Pt,[["__scopeId","data-v-ce875f45"]]),Mt={class:"bs_container"},It=G({__name:"index",setup(e){let l=y("home");return(d,c)=>{const r=Le,i=Ae,o=Fe;return E(),j(Z,null,[u(r),N("div",Mt,[B(l)==="home"?(E(),se(St,{key:0})):(E(),se(wt,{key:1}))]),u(o,{modelValue:B(l),"onUpdate:modelValue":c[0]||(c[0]=n=>O(l)?l.value=n:l=n)},{default:S(()=>[u(i,{icon:"home-o",name:"home"},{default:S(()=>c[1]||(c[1]=[T("主页")])),_:1}),u(i,{icon:"setting-o",name:"setting"},{default:S(()=>c[2]||(c[2]=[T("配置")])),_:1})]),_:1},8,["modelValue"])],64)}}}),Lt=ce(It,[["__scopeId","data-v-d4121af8"]]);export{Lt as default};
