(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8899],{3309:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fivem/diving/3_Bridge",function(){return n(66)}])},8303:function(e,i){"use strict";i.Z={src:"/_next/static/media/bridge.65c4b378.png",height:1080,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0ElEQVR4nA3IQUoCURgH8P/3nJcvZXATA0EhdIPauS8oMKg2KVTQNUTwEnoA8QgunIULl6IHEDejPNypOMq8UXTefLr90fPLd3kd7rpKntKjEOJwsuBDkkp5JcIofCfnpvSjspnOnUfsFgSNB3vAyfHjU570IvilSvXfuG4+ZzdzjIYBKtVbxFGMdi+BUiYm3/f5vljEtt/CX62JeuMLWq/gGA/jSQB6LX+mBcFUCqZYGotolkBCgN8eoM2OCcjwNSw+4IEVwWZT0IWHlqAl4QxOxlKYx4MJ1AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},66:function(e,i,n){"use strict";n.r(i),n.d(i,{__toc:function(){return c}});var r=n(1527),o=n(6441),t=n(494),a=n(4801);n(9367);var s=n(3248),d=n(8303),l=n(9970);let c=[{depth:2,value:"How to create a new framework bridge?",id:"how-to-create-a-new-framework-bridge"},{depth:2,value:"First-Steps",id:"first-steps"}];function m(e){let i=Object.assign({h1:"h1",p:"p",img:"img",em:"em",h2:"h2",code:"code",pre:"pre",span:"span"},(0,s.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:"Framework Bridge"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Brdige",placeholder:"blur",src:d.Z})}),"\n",(0,r.jsxs)(i.p,{children:["A framework bridge is a way to support multiple frameworks by overriding specific functions. It allows the script to be designed in such a way that it is compatible with ",(0,r.jsx)(i.em,{children:"almost"})," every existing framework. However, it is crucial to have a good understanding of what you're doing, as these functions are essential components of the scripts."]}),"\n",(0,r.jsx)(i.h2,{id:"how-to-create-a-new-framework-bridge",children:"How to create a new framework bridge?"}),"\n",(0,r.jsxs)(i.p,{children:["To add a new framework bridge you need to create new files at the following file path: ",(0,r.jsx)(i.code,{children:"/bridge/framework/"}),". These files are not encrypted by default and can be edited anytime. Once your in the right path, you will have to create a file named after your framework in the ",(0,r.jsx)(i.code,{children:"client"})," and ",(0,r.jsx)(i.code,{children:"server"})," folders. These files will contain the overrides to integrate your framework in the script."]}),"\n",(0,r.jsx)(i.h2,{id:"first-steps",children:"First-Steps"}),"\n",(0,r.jsx)(i.p,{children:"To ensure that your files will run without any problems we highly advise you to add the following boilerplate code at the start of your files:"}),"\n",(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(i.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line highlighted",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" Config.Framework "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"~="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'frameworkName' "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"-- ════════════════════════════════════════════════════════════════════════════════════ --"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Trusted Development || Debug-print"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"-- ════════════════════════════════════════════════════════════════════════════════════ --"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" Trusted.Debug "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"filename"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" str "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"debug.getinfo"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"S"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:").source:"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"sub"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" str:"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"match"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^./(.).lua$"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" str"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"^6[SERVER - DEBUG] ^0: "'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"filename"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'".lua started"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"-- ════════════════════════════════════════════════════════════════════════════════════ --"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Code"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"-- ════════════════════════════════════════════════════════════════════════════════════ --"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(i.span,{className:"line highlighted",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"frameworkName "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,r.jsx)(i.span,{className:"line highlighted",children:" "}),"\n",(0,r.jsxs)(i.span,{className:"line highlighted",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"frameworkName.Shared "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" GetSharedObjectFunctionOrEvent"})]})]})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Example:"})}),"\n",(0,r.jsxs)(l.mQ,{items:["ESX","QBCore","OX"],children:[(0,r.jsx)(l.OK,{children:(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(i.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"ESX "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"ESX.Shared "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" exports["}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'es_extended'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"getSharedObject"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})]})})}),(0,r.jsx)(l.OK,{children:(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(i.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"QBCore.Shared "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" exports["}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'qb-core'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"]:"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"GetCoreObject"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})]})})}),(0,r.jsx)(l.OK,{children:(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,r.jsx)(i.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"OX "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {}"})]})})})})]})]})}let g={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,s.a)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/fivem/diving/3_Bridge.mdx",route:"/fivem/diving/3_Bridge",timestamp:1740732499e3,pageMap:[{kind:"Meta",data:{index:"Introduction",web:{title:"Website ↗",type:"page",href:"https://trusted-studios.eu",newWindow:!0},store:{title:"Store ↗",type:"page",href:"https://shop.trusted-studios.eu",newWindow:!0},status:{title:"Status ↗",type:"page",href:"https://status.trusted-studios.eu",newWindow:!0},fivem:"FiveM Scripts","dev-tools":"Development Tools"}},{kind:"Folder",name:"dev-tools",route:"/dev-tools",children:[{kind:"Meta",data:{"fivem-lib":"TS FiveM Lib",weapons:"Weapon Development"}},{kind:"Folder",name:"fivem-lib",route:"/dev-tools/fivem-lib",children:[{kind:"Folder",name:"Lua",route:"/dev-tools/fivem-lib/Lua",children:[{kind:"MdxPage",name:"bars",route:"/dev-tools/fivem-lib/Lua/bars"},{kind:"MdxPage",name:"callback",route:"/dev-tools/fivem-lib/Lua/callback"},{kind:"MdxPage",name:"game",route:"/dev-tools/fivem-lib/Lua/game"},{kind:"MdxPage",name:"text",route:"/dev-tools/fivem-lib/Lua/text"},{kind:"MdxPage",name:"visual",route:"/dev-tools/fivem-lib/Lua/visual"},{kind:"Meta",data:{bars:"Bars",callback:"Callback",game:"Game",text:"Text",visual:"Visual"}}]},{kind:"Folder",name:"web",route:"/dev-tools/fivem-lib/web",children:[{kind:"MdxPage",name:"components",route:"/dev-tools/fivem-lib/web/components"},{kind:"Meta",data:{components:"Components"}}]}]},{kind:"MdxPage",name:"fivem-lib",route:"/dev-tools/fivem-lib"},{kind:"Folder",name:"weapons",route:"/dev-tools/weapons",children:[{kind:"Meta",data:{addon:"Add-On Weapons"}},{kind:"MdxPage",name:"addon",route:"/dev-tools/weapons/addon"}]}]},{kind:"MdxPage",name:"dev-tools",route:"/dev-tools"},{kind:"Folder",name:"fivem",route:"/fivem",children:[{kind:"Meta",data:{shop:{type:"separator",title:"Shop"},products:"Buy and Claim",refund:"Refund",paid:{type:"separator",title:"Paid Scripts"},nitro:"Nitro/Nos Script",busdriver:"Busdriver Job",gopostal:"GoPostal Job",marketplace:"Advanced Marketplace",diving:"Advanced Diving & Loot",farming:"Advanced Farming",job_garage:"Advanced Job Garage","trucker-plus":"Advanced Trucker",free:{type:"separator",title:"Free Scripts"},"basic-flares":"Basic Flares","simple-car-wash":"Simple Car Wash","basic-pkg-bomb":"Basic Pkg Bomb","basic-carkeys":"Basic Car Keys","basic-farming":"Basic Farming","basic-job_garage":"Basic Job Garage","basic-trucker":"Basic Trucker"}},{kind:"Folder",name:"basic-carkeys",route:"/fivem/basic-carkeys",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-carkeys/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-carkeys/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-carkeys",route:"/fivem/basic-carkeys"},{kind:"Folder",name:"basic-farming",route:"/fivem/basic-farming",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-farming/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-farming/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-farming",route:"/fivem/basic-farming"},{kind:"Folder",name:"basic-flares",route:"/fivem/basic-flares",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-flares/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-flares/2_Config"},{kind:"MdxPage",name:"3_Exports",route:"/fivem/basic-flares/3_Exports"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Exports":"3 Exports"}}]},{kind:"MdxPage",name:"basic-flares",route:"/fivem/basic-flares"},{kind:"Folder",name:"basic-job_garage",route:"/fivem/basic-job_garage",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-job_garage/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-job_garage/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/basic-job_garage/3_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/basic-job_garage/3_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/basic-job_garage/3_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/basic-job_garage/3_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"MdxPage",name:"basic-job_garage",route:"/fivem/basic-job_garage"},{kind:"Folder",name:"basic-pkg-bomb",route:"/fivem/basic-pkg-bomb",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-pkg-bomb/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-pkg-bomb/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-pkg-bomb",route:"/fivem/basic-pkg-bomb"},{kind:"Folder",name:"basic-trucker",route:"/fivem/basic-trucker",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-trucker/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-trucker/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-trucker",route:"/fivem/basic-trucker"},{kind:"Folder",name:"busdriver",route:"/fivem/busdriver",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/busdriver/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/busdriver/2_Config"},{kind:"MdxPage",name:"3_Extentions",route:"/fivem/busdriver/3_Extentions"},{kind:"Folder",name:"4_Bridge",route:"/fivem/busdriver/4_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/busdriver/4_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/busdriver/4_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"4_Bridge",route:"/fivem/busdriver/4_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Extentions":"3 Extentions","4_Bridge":"4 Bridge"}}]},{kind:"MdxPage",name:"busdriver",route:"/fivem/busdriver"},{kind:"Folder",name:"diving",route:"/fivem/diving",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/diving/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/diving/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/diving/3_Bridge",children:[{kind:"MdxPage",name:"1_Server",route:"/fivem/diving/3_Bridge/1_Server"},{kind:"Meta",data:{"1_Server":"1 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/diving/3_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"MdxPage",name:"diving",route:"/fivem/diving"},{kind:"Folder",name:"farming",route:"/fivem/farming",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/farming/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/farming/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"farming",route:"/fivem/farming"},{kind:"Folder",name:"gopostal",route:"/fivem/gopostal",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/gopostal/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/gopostal/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config",extentions:"3 Extentions"}},{kind:"Folder",name:"extentions",route:"/fivem/gopostal/extentions",children:[{kind:"MdxPage",name:"Client",route:"/fivem/gopostal/extentions/Client"},{kind:"MdxPage",name:"Server",route:"/fivem/gopostal/extentions/Server"},{kind:"Meta",data:{Client:"Client",Server:"Server"}}]}]},{kind:"MdxPage",name:"gopostal",route:"/fivem/gopostal"},{kind:"Folder",name:"job_garage",route:"/fivem/job_garage",children:[{kind:"MdxPage",name:"2_Config",route:"/fivem/job_garage/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/job_garage/3_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/job_garage/3_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/job_garage/3_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/job_garage/3_Bridge"},{kind:"Meta",data:{"2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"Folder",name:"marketplace",route:"/fivem/marketplace",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/marketplace/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/marketplace/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/marketplace/3_Bridge",children:[{kind:"MdxPage",name:"1_Server",route:"/fivem/marketplace/3_Bridge/1_Server"},{kind:"Meta",data:{"1_Server":"1 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/marketplace/3_Bridge"},{kind:"MdxPage",name:"4_Images",route:"/fivem/marketplace/4_Images"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge","4_Images":"4 Images"}}]},{kind:"MdxPage",name:"marketplace",route:"/fivem/marketplace"},{kind:"Folder",name:"nitro",route:"/fivem/nitro",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/nitro/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/nitro/2_Config"},{kind:"MdxPage",name:"3_Exports",route:"/fivem/nitro/3_Exports"},{kind:"Folder",name:"4_Bridge",route:"/fivem/nitro/4_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/nitro/4_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/nitro/4_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"4_Bridge",route:"/fivem/nitro/4_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Exports":"3 Exports","4_Bridge":"4 Bridge"}}]},{kind:"MdxPage",name:"nitro",route:"/fivem/nitro"},{kind:"MdxPage",name:"products",route:"/fivem/products"},{kind:"MdxPage",name:"refund",route:"/fivem/refund"},{kind:"Folder",name:"simple-car-wash",route:"/fivem/simple-car-wash",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/simple-car-wash/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/simple-car-wash/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"simple-car-wash",route:"/fivem/simple-car-wash"},{kind:"Folder",name:"trucker-plus",route:"/fivem/trucker-plus",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/trucker-plus/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/trucker-plus/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config",routes:" 3 Routes",extentions:"4 Extentions"}},{kind:"Folder",name:"extentions",route:"/fivem/trucker-plus/extentions",children:[{kind:"MdxPage",name:"client",route:"/fivem/trucker-plus/extentions/client"},{kind:"MdxPage",name:"server",route:"/fivem/trucker-plus/extentions/server"},{kind:"Meta",data:{client:"Client",server:"Server"}}]},{kind:"Folder",name:"routes",route:"/fivem/trucker-plus/routes",children:[{kind:"MdxPage",name:"mission_type_1",route:"/fivem/trucker-plus/routes/mission_type_1"},{kind:"MdxPage",name:"mission_type_2",route:"/fivem/trucker-plus/routes/mission_type_2"},{kind:"MdxPage",name:"mission_type_3",route:"/fivem/trucker-plus/routes/mission_type_3"},{kind:"Meta",data:{mission_type_1:"Mission Type 1",mission_type_2:"Mission Type 2",mission_type_3:"Mission Type 3"}}]}]},{kind:"MdxPage",name:"trucker-plus",route:"/fivem/trucker-plus"}]},{kind:"MdxPage",name:"fivem",route:"/fivem"},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Introduction"}}],flexsearch:{codeblocks:!0},title:"Framework Bridge",headings:c},pageNextRoute:"/fivem/diving/3_Bridge",nextraLayout:t.ZP,themeConfig:a.Z};i.default=(0,o.j)(g)},4801:function(e,i,n){"use strict";var r=n(1527);n(959);var o=n(494),t=n(1120);let a={logo:(0,r.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url('/imgs/logo.png') no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Trusted Studios"}),project:{link:"https://github.com/TrustedService/Trusted-Studios-Docs"},chat:{link:"https://discord.gg/hmmM89nCdX"},docsRepositoryBase:"https://github.com/TrustedService/Trusted-Studios-Docs/blob/main",footer:{text:"Trusted Studios"},useNextSeoProps:function(){let{asPath:e}=(0,t.useRouter)(),i=e.replace(/[-_]/g," ").split("/"),n="#"!==i[1][0]&&i[1]||"Trusted Studios",r=i[i.length-1],o=/[a-z]/.test(r)&&/[A-Z]/.test(r)?r:"%s";return{titleTemplate:"".concat(r===n?"Documentation":n.replace(/(^\w|\s\w)/g,e=>e.toUpperCase())," - ").concat(o)}},head:function(){let{asPath:e}=(0,t.useRouter)(),{frontMatter:i,title:n}=(0,o.ZR)(),a=i.description||"Documentation for Trusted Studios' resources";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/imgs/logo.png"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{name:"og:title",content:n}),(0,r.jsx)("meta",{name:"og:description",content:a}),(0,r.jsx)("meta",{name:"og:url",content:"https://docs.trusted-studios.eu".concat(e)})]})},primaryHue:{dark:200,light:290}};i.Z=a}},function(e){e.O(0,[6673,2888,9774,179],function(){return e(e.s=3309)}),_N_E=e.O()}]);