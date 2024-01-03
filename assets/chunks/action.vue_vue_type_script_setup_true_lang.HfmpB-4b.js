import{J as i,c as p,d as k}from"./index.nZ_4lmKe.js";import{d as u,D as d,o as l,b as w,w as t,a as o,h as x,c as f,I as c,F as C,m as v,a5 as m}from"./framework.gaE9LcJ4.js";import{a5 as $,a as h,l as g}from"./ZoomOutTwotone.bfD10prt.js";const E=u({__name:"basic",setup(_){const s=()=>{new i().push({content:"this is a message.",variant:"outlined"})};return(a,e)=>{const n=d("in-button");return l(),w(n,{variant:"outlined",onClick:s},{default:t(()=>[o(" Show message ")]),_:1})}}}),B=u({__name:"severity",setup(_){const s=x(new i);return(a,e)=>{const n=d("in-button");return l(),f(C,null,[c(n,{variant:"text",color:"success",onClick:e[0]||(e[0]=r=>s.value.success({content:"this is a success message"}))},{default:t(()=>[o(" Success ")]),_:1}),c(n,{variant:"text",color:"warning",onClick:e[1]||(e[1]=r=>s.value.warning({content:"this is a warning message"}))},{default:t(()=>[o(" Warning ")]),_:1}),c(n,{variant:"text",color:"error",onClick:e[2]||(e[2]=r=>s.value.error({content:"this is a error message"}))},{default:t(()=>[o(" Error ")]),_:1}),c(n,{variant:"text",color:"info",onClick:e[3]||(e[3]=r=>s.value.info({content:"this is a info message"}))},{default:t(()=>[o(" Info ")]),_:1})],64)}}}),S=u({__name:"icon",setup(_){const s=()=>{new i({}).push({content:"this is a success message",severity:"success",customIcon:$})};return(a,e)=>(l(),w(v(p),{color:"success",onClick:s},{default:t(()=>[o(" Success ")]),_:1}))}}),F=u({__name:"time",setup(_){const s=a=>{new i().push({duration:a,content:`The duration is ${a}ms`})};return(a,e)=>{const n=d("in-button");return l(),f(C,null,[c(n,{variant:"outlined",onClick:e[0]||(e[0]=r=>s(2e3))},{default:t(()=>[o(" 2000 ms ")]),_:1}),c(n,{variant:"outlined",onClick:e[1]||(e[1]=r=>s(4e3))},{default:t(()=>[o(" 4000 ms ")]),_:1})],64)}}}),N=u({__name:"action",setup(_){const s=()=>{new i({severity:"success"}).push({content:"this is a success message",customIcon:h,action:m(k,()=>m(g))})},a=()=>{new i({severity:"success"}).push({content:"this is a success message",customIcon:h,action:m(k,()=>m(g)),actionEvent:(e,n)=>{new i().success({content:"Close successfully"}),n(e.id)}})};return(e,n)=>(l(),f(C,null,[c(v(p),{color:"success",variant:"outlined",onClick:s},{default:t(()=>[o(" Close ")]),_:1}),c(v(p),{color:"success",variant:"outlined",onClick:a},{default:t(()=>[o(" Close Event ")]),_:1})],64))}});export{E as _,B as a,S as b,F as c,N as d};