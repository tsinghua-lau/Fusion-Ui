import{e as x,o as i,c as _,X as $,x as d,d as V,y as k,z as h,r as g,a8 as w,a9 as U,b as u,A as B,a3 as S,C as b,a4 as C,ai as N,D as a,f as m,B as v,t as F}from"./framework.23e93112.js";import{_ as z,u as y,a as M,w as L}from"./plugin-vue_export-helper.998d7bfb.js";import{F as D,a as E}from"./index.895cb52e.js";import{c as R,U as T}from"./size.1fa03d17.js";const H={modelValue:{type:[Boolean,Array]},color:{type:[String,Function],default:"primary"},size:{type:String,value:R,default:"medium"}},P={name:"CheckBoxFilled",props:{size:{type:[Number,String],default:24},color:{type:String,default:"inherit"}},setup(s){const{typography:{pxToRem:l}}=y().value;return{fontSize:x(()=>{const e=+s.size;if(isNaN(e)){const[n,o,t]=/(d+)(w+)/.exec(s.size)||[];return t==="px"?l(+o):s.size}else return l(e)}),color:s.color}}},J=d("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),O=d("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1),A=[J,O];function I(s,l,r,e,n,o){return i(),_("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",style:$({fontSize:e.fontSize,color:e.color})},A,4)}var q=z(P,[["render",I],["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/internal/CheckBoxFilled.vue"]]);const X={name:"CheckBoxOutlineBlankFilled",props:{size:{type:[Number,String],default:24},color:{type:String,default:"inherit"}},setup(s){const{typography:{pxToRem:l}}=y().value;return{fontSize:x(()=>{const e=+s.size;if(isNaN(e)){const[n,o,t]=/(d+)(w+)/.exec(s.size)||[];return t==="px"?l(+o):s.size}else return l(e)}),color:s.color}}},j=d("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),G=d("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},null,-1),K=[j,G];function Q(s,l,r,e,n,o){return i(),_("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",style:$({fontSize:e.fontSize,color:e.color})},K,4)}var W=z(X,[["render",Q],["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/internal/CheckBoxOutlineBlankFilled.vue"]]);const Y=V({__name:"index",props:H,emits:["update:modelValue"],setup(s,{emit:l}){const r=s,e=M("checkbox"),n=x({get(){return r.modelValue},set(o){l(T,o)}});return(o,t)=>(i(),k(u(E),b({component:"span"},{color:o.$props.color,size:o.$props.size,class:[u(e).b(),u(e).m(r.size)]}),{default:h(f=>[g(o.$slots,"default",w(U({checked:u(n),size:f.size,class:["fn-icon",u(e).e("icon")]})),()=>[u(n)?(i(),k(q,{key:0,size:f.size},null,8,["size"])):(i(),k(W,{key:1,size:f.size},null,8,["size"]))]),B(" eslint-disable vue/html-self-closing "),S(d("input",b(o.$attrs,{"onUpdate:modelValue":t[0]||(t[0]=p=>C(n)?n.value=p:null),class:[[u(e).e("input")],"fn-form__input"],type:"checkbox"}),null,16),[[N,u(n)]]),a(u(D),{color:o.$props.color,center:""},null,8,["color"])]),_:3},16))}});var Z=z(Y,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/checkbox/src/index.vue"]]);const c=L(Z,"FnCheckbox");c.name="FnCheckbox";const ee={"space-y-2":""},le={fscw:"","gap-2":""},be=V({__name:"basic",setup(s){const l=m(!0),r=m(!1),e=m(!0),n=m(!1);return(o,t)=>{const f=v("fn-checkbox");return i(),_("div",ee,[d("div",le,[a(f,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=p=>l.value=p)},null,8,["modelValue"]),a(f,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=p=>r.value=p)},null,8,["modelValue"]),a(f,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=p=>e.value=p),disabled:""},null,8,["modelValue"]),a(f,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=p=>n.value=p),disabled:""},null,8,["modelValue"])])])}}}),oe={"space-y-2":""},ne={fscw:"","gap-2":""},ke=V({__name:"size",setup(s){const l=m(!0);return(r,e)=>{const n=v("fn-checkbox");return i(),_("div",oe,[d("div",ne,[a(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),size:"small"},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o)},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),size:"large"},null,8,["modelValue"])])])}}}),ae={"space-y-2":""},te={fscw:"","gap-2":""},he=V({__name:"color",setup(s){const l=m(!1);return(r,e)=>{const n=v("fn-checkbox");return i(),_("div",ae,[d("div",te,[a(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o)},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),color:"secondary"},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),color:"tertiary"},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value=o),color:"error"},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value=o),color:o=>o.colors.cyan[400]},null,8,["modelValue","color"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value=o),color:"#2E7D32"},null,8,["modelValue"])])])}}}),se={"space-y-2":""},ue={fscw:"","gap-2":""},xe=V({__name:"icon",setup(s){const l=m(!1);return(r,e)=>{const n=v("fn-icon"),o=v("fn-checkbox");return i(),_("div",se,[d("div",ue,[a(o,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),color:"#6366f1"},{default:h(t=>[a(n,b(t,{icon:l.value?"material-symbols:star":"material-symbols:star-outline"}),null,16,["icon"])]),_:1},8,["modelValue"]),a(o,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),color:"#f59e0b"},{default:h(t=>[a(n,b(t,{icon:l.value?"material-symbols:bedtime":"material-symbols:bedtime-outline"}),null,16,["icon"])]),_:1},8,["modelValue"])])])}}}),re={"space-y-2":""},de={fscw:"","gap-2":""},ze=V({__name:"label",setup(s){const l=m(!0);return(r,e)=>{const n=v("fn-form-label");return i(),_("div",re,[d("div",de,[a(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),control:u(c),label:"Label"},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),control:u(c),label:"Label",required:""},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),control:u(c),label:"Label",disabled:""},null,8,["modelValue","control"])])])}}}),ie={"space-y-2":""},ce={fscw:"","gap-2":""},$e=V({__name:"label-placement",setup(s){const l=m(!0);return(r,e)=>{const n=v("fn-form-label");return i(),_("div",ie,[d("div",ce,[a(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),control:u(c),label:"Top","label-placement":"top"},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),control:u(c),label:"Left","label-placement":"left"},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),control:u(c),label:"Bottom","label-placement":"bottom"},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value=o),control:u(c),label:"Right","label-placement":"right"},null,8,["modelValue","control"])])])}}}),me={"space-y-2":""},pe={fscw:"","gap-2":""},ye=V({__name:"multiple",setup(s){const l=m([]);return(r,e)=>{const n=v("fn-form-label");return i(),_("div",me,[d("div",null,F(l.value),1),d("div",pe,[a(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),control:u(c),label:"Jack",value:"Jack"},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),control:u(c),label:"John",value:"John"},null,8,["modelValue","control"]),a(n,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),control:u(c),label:"Mike",value:"Mike"},null,8,["modelValue","control"])])])}}});export{be as _,ke as a,he as b,xe as c,ze as d,$e as e,ye as f};