import{F as n}from"./index.a4a3f908.js";import{d as c,B as p,o as r,c as l,D as u,z as s,a as o,b as _,_ as d,y as f}from"./framework.5c822d1e.js";const v={class:"container"},g=c({__name:"base",setup(m){return(i,e)=>{const t=p("FnButton");return r(),l("div",v,[u(t,{onClick:e[0]||(e[0]=a=>_(n)({message:"一条消息"}))},{default:s(()=>[o(" 一条消息 ")]),_:1})])}}});const b=d(g,[["__scopeId","data-v-5788c01f"]]),y={class:"container"},C=c({__name:"type",setup(m){return(i,e)=>{const t=p("FnButton");return r(),l("div",y,[u(t,{onClick:e[0]||(e[0]=a=>_(n)({message:"默认"}))},{default:s(()=>[o(" 默认 ")]),_:1}),u(t,{state:"success",onClick:e[1]||(e[1]=a=>_(n)({message:"成功",type:"success"}))},{default:s(()=>[o(" 成功 ")]),_:1}),u(t,{state:"warning",onClick:e[2]||(e[2]=a=>_(n)({message:"警告",type:"warning"}))},{default:s(()=>[o(" 警告 ")]),_:1}),u(t,{state:"danger",onClick:e[3]||(e[3]=a=>_(n)({message:"错误",type:"danger"}))},{default:s(()=>[o(" 错误 ")]),_:1})])}}});const F=d(C,[["__scopeId","data-v-db3bef13"]]),$={class:"container"},B=c({__name:"time",setup(m){return(i,e)=>{const t=p("FnButton");return r(),l("div",$,[u(t,{onClick:e[0]||(e[0]=a=>_(n)({message:"默认时长"}))},{default:s(()=>[o(" 默认时长 ")]),_:1}),u(t,{onClick:e[1]||(e[1]=a=>_(n)({message:"默认时长",type:"success"}))},{default:s(()=>[o(" 默认时长 ")]),_:1}),u(t,{onClick:e[2]||(e[2]=a=>_(n)({message:"3秒时长",type:"success",timeout:3e3}))},{default:s(()=>[o(" 3秒时长 ")]),_:1}),u(t,{onClick:e[3]||(e[3]=a=>_(n)({message:"一直显示",type:"success",timeout:0,closeBtn:!0}))},{default:s(()=>[o(" 一直显示 ")]),_:1})])}}});const D=d(B,[["__scopeId","data-v-eb04ef63"]]),w=c({__name:"close",setup(m){return(i,e)=>{const t=p("FnButton");return r(),f(t,{onClick:e[0]||(e[0]=a=>_(n)({message:"显示关闭按钮",type:"success",timeout:0,closeBtn:!0}))},{default:s(()=>[o(" 显示关闭按钮 ")]),_:1})}}});export{b as D,w as _,F as a,D as b};