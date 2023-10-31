import{B as p,o as c,y as b,z as k,x as s,d as v,e as g,r as U,a8 as w,a9 as y,b as u,A as B,a3 as z,C as x,a4 as C,ai as F,f as i,c as f,D as a,t as M}from"./framework.23e93112.js";import{_ as h,u as L,w as D}from"./plugin-vue_export-helper.04d9b15f.js";import{F as $,a as E}from"./index.c2233e1c.js";import{c as N,U as S}from"./size.a829b932.js";const H={modelValue:{type:[Boolean,Array]},color:{type:[String,Function],default:"primary"},size:{type:String,value:N,default:"medium"}},P={name:"CheckBoxFilled",components:{FnSvgIcon:$}},J=s("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1);function O(m,e,d,l,n,o){const t=p("fn-svg-icon");return c(),b(t,{cs:"fill: currentcolor;"},{default:k(()=>[J]),_:1})}var A=h(P,[["render",O],["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/svg-icon/internal/CheckBoxFilled.vue"]]);const I={name:"CheckBoxOutlineBlankFilled",components:{FnSvgIcon:$}},R=s("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})],-1);function T(m,e,d,l,n,o){const t=p("fn-svg-icon");return c(),b(t,{cs:"fill: currentcolor;"},{default:k(()=>[R]),_:1})}var q=h(I,[["render",T],["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/svg-icon/internal/CheckBoxOutlineBlankFilled.vue"]]);const j=v({__name:"index",props:H,emits:["update:modelValue"],setup(m,{emit:e}){const d=m,l=L("checkbox"),n=g({get(){return d.modelValue},set(o){e(S,o)}});return(o,t)=>(c(),b(u(E),x({component:"span"},{color:o.$props.color,size:o.$props.size,class:[u(l).b(),u(l).m(d.size)]}),{default:k(V=>[U(o.$slots,"default",w(y({checked:u(n),size:V.size,class:["fn-icon",u(l).e("icon")]})),()=>[u(n)?(c(),b(A,{key:0})):(c(),b(q,{key:1}))]),B(" eslint-disable vue/html-self-closing "),z(s("input",x(o.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=_=>C(n)?n.value=_:null),class:[[u(l).e("input")],"fn-form__input"],type:"checkbox"}),null,16),[[F,u(n)]])]),_:3},16))}});var G=h(j,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/checkbox/src/index.vue"]]);const r=D(G,"FnCheckbox");r.name="FnCheckbox";const K={"space-y-2":""},Q={fscw:"","gap-2":""},ie=v({__name:"basic",setup(m){const e=i(!0),d=i(!1),l=i(!0),n=i(!1);return(o,t)=>{const V=p("fn-checkbox");return c(),f("div",K,[s("div",Q,[a(V,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=_=>e.value=_)},null,8,["modelValue"]),a(V,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=_=>d.value=_)},null,8,["modelValue"]),a(V,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=_=>l.value=_),disabled:""},null,8,["modelValue"]),a(V,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=_=>n.value=_),disabled:""},null,8,["modelValue"])])])}}}),W={"space-y-2":""},X={fscw:"","gap-2":""},pe=v({__name:"size",setup(m){const e=i(!0);return(d,l)=>{const n=p("fn-checkbox");return c(),f("div",W,[s("div",X,[a(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),size:"small"},null,8,["modelValue"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o)},null,8,["modelValue"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o),size:"large"},null,8,["modelValue"])])])}}}),Y={"space-y-2":""},Z={fscw:"","gap-2":""},_e=v({__name:"color",setup(m){const e=i(!1);return(d,l)=>{const n=p("fn-checkbox");return c(),f("div",Y,[s("div",Z,[a(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o)},null,8,["modelValue"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o),color:"secondary"},null,8,["modelValue"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o),color:"tertiary"},null,8,["modelValue"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value=o),color:"error"},null,8,["modelValue"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value=o),color:o=>o.colors.cyan[400]},null,8,["modelValue","color"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value=o),color:"#2E7D32"},null,8,["modelValue"])])])}}}),ee={"space-y-2":""},le={fscw:"","gap-2":""},ve=v({__name:"icon",setup(m){const e=i(!1);return(d,l)=>{const n=p("fn-icon"),o=p("fn-checkbox");return c(),f("div",ee,[s("div",le,[a(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),color:"#6366f1"},{default:k(t=>[a(n,x(t,{icon:e.value?"material-symbols:star":"material-symbols:star-outline"}),null,16,["icon"])]),_:1},8,["modelValue"]),a(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),color:"#f59e0b"},{default:k(t=>[a(n,x(t,{icon:e.value?"material-symbols:bedtime":"material-symbols:bedtime-outline"}),null,16,["icon"])]),_:1},8,["modelValue"])])])}}}),oe={"space-y-2":""},ne={fscw:"","gap-2":""},fe=v({__name:"label",setup(m){const e=i(!0);return(d,l)=>{const n=p("fn-form-label");return c(),f("div",oe,[s("div",ne,[a(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),control:u(r),label:"Label"},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o),control:u(r),label:"Label",required:""},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o),control:u(r),label:"Label",disabled:""},null,8,["modelValue","control"])])])}}}),ae={"space-y-2":""},te={fscw:"","gap-2":""},Ve=v({__name:"label-placement",setup(m){const e=i(!0);return(d,l)=>{const n=p("fn-form-label");return c(),f("div",ae,[s("div",te,[a(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),control:u(r),label:"Top","label-placement":"top"},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o),control:u(r),label:"Left","label-placement":"left"},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o),control:u(r),label:"Bottom","label-placement":"bottom"},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value=o),control:u(r),label:"Right","label-placement":"right"},null,8,["modelValue","control"])])])}}}),ue={"space-y-2":""},se={fscw:"","gap-2":""},be=v({__name:"multiple",setup(m){const e=i([]);return(d,l)=>{const n=p("fn-form-label");return c(),f("div",ue,[s("div",null,M(e.value),1),s("div",se,[a(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),control:u(r),label:"Jack",value:"Jack"},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o),control:u(r),label:"John",value:"John"},null,8,["modelValue","control"]),a(n,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o),control:u(r),label:"Mike",value:"Mike"},null,8,["modelValue","control"])])])}}});export{ie as _,pe as a,_e as b,ve as c,fe as d,Ve as e,be as f};