import{d as i,r as s,o as d,v as m,b as a,F as p,a9 as V,x as _,f,u as U}from"./framework.vqYDXcAe.js";import{o as w}from"./AddFilled.3hYnXchE.js";const c=i({__name:"basic",setup(v){const e=s([!0,!0,!1,!1]);return(r,u)=>{const o=V("in-switch");return d(),m(p,null,[a(o,{modelValue:e.value[0],"onUpdate:modelValue":u[0]||(u[0]=l=>e.value[0]=l)},null,8,["modelValue"]),a(o,{modelValue:e.value[1],"onUpdate:modelValue":u[1]||(u[1]=l=>e.value[1]=l),disabled:""},null,8,["modelValue"]),a(o,{modelValue:e.value[2],"onUpdate:modelValue":u[2]||(u[2]=l=>e.value[2]=l)},null,8,["modelValue"]),a(o,{modelValue:e.value[3],"onUpdate:modelValue":u[3]||(u[3]=l=>e.value[3]=l),disabled:""},null,8,["modelValue"])],64)}}}),g=i({__name:"size-color",setup(v){const e=s([!0,!1,!0]),r=s(["small","medium","large"]);return(u,o)=>{const l=V("in-switch");return d(!0),m(p,null,_(r.value,t=>(d(),m("div",{key:t,"w-full":"",flex:"","justify-center":"","gap-5":""},[a(l,{modelValue:e.value[0],"onUpdate:modelValue":o[0]||(o[0]=n=>e.value[0]=n),size:t},null,8,["modelValue","size"]),a(l,{modelValue:e.value[1],"onUpdate:modelValue":o[1]||(o[1]=n=>e.value[1]=n),size:t,color:"tertiary"},null,8,["modelValue","size"]),a(l,{modelValue:e.value[2],"onUpdate:modelValue":o[2]||(o[2]=n=>e.value[2]=n),size:t,color:"error"},null,8,["modelValue","size"])]))),128)}}}),k=i({__name:"icon",setup(v){const e=s(!0);return(r,u)=>{const o=V("in-switch");return d(),m(p,null,[a(o,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=l=>e.value=l),"disabled-icon":""},null,8,["modelValue"]),a(o,{modelValue:e.value,"onUpdate:modelValue":u[1]||(u[1]=l=>e.value=l)},{default:f(()=>[a(U(w))]),_:1},8,["modelValue"])],64)}}});export{c as _,g as a,k as b};