import{l as C}from"./chunks/en-slots.-rVB35iD.js";import{_ as e,a as k,b as p}from"./chunks/color.vue_vue_type_script_setup_true_lang.UpjKK8FK.js";import{d as A,o as D,t as F,b as a,f as t,u as l,ah as r,B as s,S as i,a9 as E}from"./chunks/framework.7kcRRdgV.js";import"./chunks/theme.bt76IPpI.js";const B=[{name:"size",description:"FBA size",type:"Enum",options:["small","medium","large"],default:"medium"},{name:"color",description:"Customize the color of FBAs",type:"Enum",options:["ThemeSchemes","ThemeCallBack","String"],default:"primaryContainer"},{name:"cs",description:"Flexible css configuration",type:"Enum",options:["String","Object"],default:"--"}],d=r('<h1 id="floating-action-button" tabindex="-1">Floating action button <a class="header-anchor" href="#floating-action-button" aria-label="Permalink to &quot;Floating action button&quot;">​</a></h1><p>Floating action buttons (FABs) help people take primary actions</p><p>Use a <code>&lt;Fab /&gt;</code> for the most crucial action on a screen. The FAB appears in front of all other content on the screen and is recognizable for its rounded shape and icon in the center.</p><p>Only use a <code>&lt;Fab /&gt;</code> for presenting a screen&#39;s primary action.</p><p>The FAB can be aligned left, center, or right. It can be positioned above the navigation bar or nested within it.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="basic-floating-action-button" tabindex="-1">Basic floating action button <a class="header-anchor" href="#basic-floating-action-button" aria-label="Permalink to &quot;Basic floating action button&quot;">​</a></h3>',7),g=s("h3",{id:"size",tabindex:"-1"},[i("Size "),s("a",{class:"header-anchor",href:"#size","aria-label":'Permalink to "Size"'},"​")],-1),y=s("p",null,[i("The size of "),s("code",null,"<Fab />"),i(" can be small, medium (default), and large. Use the "),s("code",null,"size"),i(" prop to change it.")],-1),o=s("h3",{id:"color",tabindex:"-1"},[i("Color "),s("a",{class:"header-anchor",href:"#color","aria-label":'Permalink to "Color"'},"​")],-1),c=s("p",null,[i("Use "),s("code",null,"color"),i(" to style the "),s("code",null,"<Fab />"),i(" component")],-1),f=s("h2",{id:"attributes",tabindex:"-1"},[i("Attributes "),s("a",{class:"header-anchor",href:"#attributes","aria-label":'Permalink to "Attributes"'},"​")],-1),b=s("h2",{id:"slots",tabindex:"-1"},[i("Slots "),s("a",{class:"header-anchor",href:"#slots","aria-label":'Permalink to "Slots"'},"​")],-1),S=JSON.parse('{"title":"Floating action button","description":"","frontmatter":{"title":"Floating action button","lang":"en"},"headers":[],"relativePath":"langs/en/components/fab.md","filePath":"langs/en/components/fab.md"}'),m={name:"langs/en/components/fab.md"},w=A({...m,setup(u){return(x,_)=>{const n=E("demo"),h=E("data-table");return D(),F("div",null,[d,a(n,{code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20Palette%20from%20'%40interface-ui%2Ficons%2FPaletteOutlined'%0Aimport%20Edit%20from%20'%40interface-ui%2Ficons%2FEditOutlined'%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cin-fab%3E%0A%20%20%20%20%3Cpalette%20%2F%3E%0A%20%20%3C%2Fin-fab%3E%0A%0A%20%20%3Cin-fab%3E%0A%20%20%20%20%3Cedit%20%2F%3E%0A%20%20%20%20Edit%0A%20%20%3C%2Fin-fab%3E%0A%3C%2Ftemplate%3E%0A",highlightedCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20Palette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40interface-ui%2Ficons%2FPaletteOutlined%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20Edit%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40interface-ui%2Ficons%2FEditOutlined%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Eedit%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%20%20%20%20Edit%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",highlightedPreviewCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Eedit%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%20%20Edit%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/home/runner/work/interface-ui/interface-ui/docs/example/fab/basic.vue",title:"",desc:"",github:"https://github.com/interface-ui/interface-ui/tree/master/docs/example/fab/basic.vue",col:!1},{default:t(()=>[a(e)]),_:1}),g,y,a(n,{code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20Palette%20from%20'%40interface-ui%2Ficons%2FPaletteOutlined'%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cin-fab%20size%3D%22small%22%3E%0A%20%20%20%20%3Cpalette%20%2F%3E%0A%20%20%3C%2Fin-fab%3E%0A%20%20%3Cin-fab%3E%0A%20%20%20%20%3Cpalette%20%2F%3E%0A%20%20%3C%2Fin-fab%3E%0A%20%20%3Cin-fab%20size%3D%22large%22%3E%0A%20%20%20%20%3Cpalette%20%2F%3E%0A%20%20%3C%2Fin-fab%3E%0A%3C%2Ftemplate%3E%0A",highlightedCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20Palette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40interface-ui%2Ficons%2FPaletteOutlined%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Esmall%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",highlightedPreviewCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Esmall%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/home/runner/work/interface-ui/interface-ui/docs/example/fab/size.vue",title:"",desc:"",github:"https://github.com/interface-ui/interface-ui/tree/master/docs/example/fab/size.vue",col:!1},{default:t(()=>[a(k)]),_:1}),o,c,a(n,{code:"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20Palette%20from%20'%40interface-ui%2Ficons%2FPaletteOutlined'%0Aimport%20Edit%20from%20'%40interface-ui%2Ficons%2FEditOutlined'%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cin-fab%20color%3D%22infoContainer%22%3E%0A%20%20%20%20%3Cpalette%20%2F%3E%0A%20%20%3C%2Fin-fab%3E%0A%20%20%3Cin-fab%3E%0A%20%20%20%20%3Cpalette%20%2F%3E%0A%20%20%3C%2Fin-fab%3E%0A%20%20%3Cin-fab%20color%3D%22tertiaryContainer%22%3E%0A%20%20%20%20%3Cedit%20%2F%3E%0A%20%20%20%20Edit%0A%20%20%3C%2Fin-fab%3E%0A%3C%2Ftemplate%3E%0A",highlightedCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20Palette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40interface-ui%2Ficons%2FPaletteOutlined%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20Edit%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40interface-ui%2Ficons%2FEditOutlined%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20color%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3EinfoContainer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20color%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3EtertiaryContainer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Eedit%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%20%20%20%20Edit%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",highlightedPreviewCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20color%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3EinfoContainer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Epalette%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20color%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3EtertiaryContainer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%22%3Eedit%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%20%20Edit%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ein-fab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"/home/runner/work/interface-ui/interface-ui/docs/example/fab/color.vue",title:"",desc:"",github:"https://github.com/interface-ui/interface-ui/tree/master/docs/example/fab/color.vue",col:!1},{default:t(()=>[a(p)]),_:1}),f,a(h,{type:"props",lang:"en",data:l(B)},null,8,["data"]),b,a(h,{type:"slots",lang:"en",data:l(C)},null,8,["data"])])}}});export{S as __pageData,w as default};