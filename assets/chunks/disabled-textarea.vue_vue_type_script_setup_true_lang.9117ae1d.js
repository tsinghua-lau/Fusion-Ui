import{d as u,f as o,B as s,o as _,c as m,D as d,_ as i,y as c,x as f}from"./framework.5c822d1e.js";const v={class:"content"},V=u({__name:"base",setup(p){const e=o("");return(l,n)=>{const a=s("fn-input");return _(),m("div",v,[d(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"Please input"},null,8,["modelValue"])])}}});const y=i(V,[["__scopeId","data-v-6c9e0abc"]]),$=u({__name:"disabled",setup(p){const e=o("Hello World");return(l,n)=>{const a=s("fn-input");return _(),c(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),disabled:""},null,8,["modelValue"])}}}),w=u({__name:"clear",setup(p){const e=o("");return(l,n)=>{const a=s("fn-input");return _(),c(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"Please input",clearable:""},null,8,["modelValue"])}}}),x={"space-y-2":"",class:"w-100% o-demo_action_icon"},b={fscw:"","gap-2":""},P=u({__name:"icon",setup(p){const e=o(""),l=o("");return(n,a)=>{const t=s("fn-input");return _(),m("div",x,[f("div",b,[d(t,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r),placeholder:"Please input","prefix-icon":"twemoji:calendar"},null,8,["modelValue"]),d(t,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=r=>l.value=r),placeholder:"Please input","suffix-icon":"twemoji:calendar"},null,8,["modelValue"])])])}}}),B=u({__name:"password",setup(p){const e=o("123456");return(l,n)=>{const a=s("fn-input");return _(),c(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),type:"password","prefix-icon":"arcticons:password"},null,8,["modelValue"])}}}),g=u({__name:"number",setup(p){const e=o();return(l,n)=>{const a=s("fn-input");return _(),c(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),type:"number"},null,8,["modelValue"])}}}),k=u({__name:"textarea",setup(p){const e=o("");return(l,n)=>{const a=s("fn-input");return _(),c(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),placeholder:"Please input",type:"textarea"},null,8,["modelValue"])}}}),C=u({__name:"disabled-textarea",setup(p){const e=o("Please input");return(l,n)=>{const a=s("fn-input");return _(),c(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),type:"textarea",disabled:"",height:"100"},null,8,["modelValue"])}}});export{y as D,$ as _,w as a,P as b,B as c,g as d,k as e,C as f};