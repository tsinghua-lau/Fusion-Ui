import{i as M,e as _,c as N,b as k,d as V,w as z,a as P}from"./size.7b65ac24.js";import{aa as R,e as v,g as C,d as E,ag as U,f as D,l as A,h as H,v as I,o as w,c as x,F as O,M as X,X as q,b as t,n as f,x as $,a4 as W,ah as Y,C as j,a6 as G,D as J}from"./framework.9e25c3b9.js";const K=e=>R(e)?!Number.isNaN(Number(e)):!1;function g(e,u="px"){const s=M(e)||K(e);return!s&&!e?"":s?`${e}${u}`:(R(e),e)}const Q=(e,u)=>{const s=_(e.color);return v(()=>N`
      & .${u.e("span")} {
        background-color: ${s.value??"var(--md-sys-color-primary)"};
      }
    `)},Z=(e,u)=>{const s=_(e.color),o=C(),{disabled:r}=(o==null?void 0:o.attrs)||{};return v(()=>{const a=e.modelValue?s.value||"var(--md-sys-color-primary)":"#fff",l=e.modelValue?s.value||"var(--md-sys-color-primary)":"#605959",y=e.modelValue?s.value||"var(--md-sys-color-primary)":"#000";return N`
      opacity: ${r===""?.5:1};
      --fn-switch-color: ${s.value||"var(--md-sys-color-primary)"};
      --fn-switch--track-color: ${y};
      --fn-switch--dot-color: ${a};
      --fn-switch--dot-hover-color: ${l};
      & .${u.e("icon")} {
        color: ${s.value||"var(--md-sys-color-primary)"};
      }
    `})},ee="update:modelValue",se=k({color:{type:[String,Function],default:"var(--fn-sys-color-ripple)"},center:{type:Boolean,default:!1}}),te=E({__name:"index",props:se,setup(e,{expose:u}){var F;const s=e,o=U([]),r=D(600),a=(F=C())==null?void 0:F.parent,l=V("ripple"),y=Q(s,l);let m=null,n=null;const d=c=>{const p=c.currentTarget,i=p.getBoundingClientRect(),b=Math.max(p.clientWidth,p.clientHeight),S=b/2,L=s.center?0:c.clientX-i.left-S,T=s.center?0:c.clientY-i.top-S;o.push({x:L,y:T,size:b})},h=()=>{m&&(clearTimeout(m),m=null)};return A(()=>{o.length>0&&(h(),m=setTimeout(()=>{o.length=0,h()},r.value*4))}),H(()=>{var c,p,i;a&&(n=(c=a.proxy)==null?void 0:c.$el.addEventListener("mousedown",d),window.getComputedStyle((p=a.proxy)==null?void 0:p.$el).position==="static"&&((i=a.proxy)==null||i.$el.classList.add(N`
        position: relative;
      `)))}),I(()=>{var c;h(),n&&((c=a==null?void 0:a.proxy)==null||c.$el.removeEventListener(n),n=null)}),u({addRipple:d}),(c,p)=>(w(),x("span",{class:f([t(l).b(),t(y)])},[(w(!0),x(O,null,X(o,(i,b)=>(w(),x("span",{key:`ripple_${b}`,style:q({top:t(g)(i.y),left:t(g)(i.x),width:t(g)(i.size),height:t(g)(i.size)}),class:f([[t(l).e("span")],"pressed-state-layer"])},null,6))),128))],2))}}),B=z(te,"FnRipple");B.name="FnRipple";const oe=B,re=k({modelValue:{type:Boolean,required:!0},color:{type:[String,Function],default:"primary"},size:{type:String,value:P,default:"medium"},enableRipple:{type:Boolean,default:!0}}),ne=E({__name:"index",props:re,emits:["update:modelValue"],setup(e,{emit:u}){const s=e,o=C(),r=V("switch"),a=Z(s,r),l=v({get(){return s.modelValue},set(n){u(ee,n)}}),y=v(()=>{const{size:n}=s,{disabled:d}=(o==null?void 0:o.attrs)||{};return[r.b(),r.m(n),d===""?r.m("disabled"):""]}),m=v(()=>{const{disabled:n}=(o==null?void 0:o.attrs)||{};return[n===""?r.m("disabled"):r.m("enabled"),l.value?r.m("active"):""]});return(n,d)=>(w(),x("span",{class:f([...t(y),t(a)])},[$("div",{class:f([t(r).e(`overlay--${s.size}`),t(m)])},[$("div",{class:f([t(r).e(`dot--${s.size}`)])},null,2),W($("input",j(n.$attrs,{"onUpdate:modelValue":d[0]||(d[0]=h=>G(l)?l.value=h:null),class:[t(r).e("input")],type:"checkbox"}),null,16),[[Y,t(l)]]),J(t(oe),{color:s.color,center:""},null,8,["color"])],2),$("div",{class:f([t(r).e("track")])},null,2)],2))}}),ae=z(ne,"FnCheckbox");ae.name="FnSwitchNew";export{ae as F,ee as U,g as a,oe as b};
