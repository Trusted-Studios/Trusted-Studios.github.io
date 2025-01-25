(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3999],{3922:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fivem/trucker-plus/extentions/client",function(){return i(8905)}])},8905:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return d}});var r=i(1527),t=i(5652),o=i(1236),a=i(5423);i(912);var s=i(2726);let d=[{depth:2,value:"Notify",id:"notify"},{depth:2,value:"Truck Spawned",id:"truck-spawned"},{depth:2,value:"Goods Loaded",id:"goods-loaded"},{depth:2,value:"Goods Unloaded",id:"goods-unloaded"},{depth:2,value:"Truck Deleted",id:"truck-deleted"},{depth:2,value:"Trailer Spawned",id:"trailer-spawned"},{depth:2,value:"Trailer Deleted",id:"trailer-deleted"}];function l(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",span:"span",ul:"ul",li:"li"},(0,s.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Extentions"}),"\n",(0,r.jsxs)(n.p,{children:["Our script provides a way to extend the functionality of the script. This can be done by editing the ",(0,r.jsx)(n.code,{children:"ext.lua"})," file in the ",(0,r.jsx)(n.code,{children:"client"})," or ",(0,r.jsx)(n.code,{children:"server"})," folder with the following code snippet:"]}),"\n",(0,r.jsx)(n.h2,{id:"notify",children:"Notify"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Trusted:Trucker:Client:Notify"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"message"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"type"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"duration"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement extention code"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["message: ",(0,r.jsx)(n.code,{children:"string"})," (the message to display)"]}),"\n",(0,r.jsxs)(n.li,{children:["type: ",(0,r.jsx)(n.code,{children:'"error"|"warning"|"success"'})]}),"\n",(0,r.jsxs)(n.li,{children:["duration: ",(0,r.jsx)(n.code,{children:"number"})," (the duration of the notification)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"truck-spawned",children:"Truck Spawned"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Trusted:Trucker:Client:TruckSpawned'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"route"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement code here"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["entity: ",(0,r.jsx)(n.code,{children:"number"})," (the entity of the truck)"]}),"\n",(0,r.jsxs)(n.li,{children:["route: ",(0,r.jsx)(n.code,{children:"string"})," (the route name)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"goods-loaded",children:"Goods Loaded"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Trusted:Trucker:Client:GoodsLoaded'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"route"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement code here"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["entity: ",(0,r.jsx)(n.code,{children:"number"})," (the entity of the truck)"]}),"\n",(0,r.jsxs)(n.li,{children:["route: ",(0,r.jsx)(n.code,{children:"string"})," (the route name)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"goods-unloaded",children:"Goods Unloaded"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Trusted:Trucker:Client:GoodsUnloaded'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"route"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement code here"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["entity: ",(0,r.jsx)(n.code,{children:"number"})," (the entity of the truck)"]}),"\n",(0,r.jsxs)(n.li,{children:["route: ",(0,r.jsx)(n.code,{children:"string"})," (the route name)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"truck-deleted",children:"Truck Deleted"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Trusted:Trucker:Client:TruckDeleted'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"route"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement code here"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["entity: ",(0,r.jsx)(n.code,{children:"number"})," (the entity of the truck)"]}),"\n",(0,r.jsxs)(n.li,{children:["route: ",(0,r.jsx)(n.code,{children:"string"})," (the route name)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"trailer-spawned",children:"Trailer Spawned"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Trusted:Trucker:Client:TrailerSpawned'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"route"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement code here"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["entity: ",(0,r.jsx)(n.code,{children:"number"})," (the entity of the trailer)"]}),"\n",(0,r.jsxs)(n.li,{children:["route: ",(0,r.jsx)(n.code,{children:"string"})," (the route name)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"trailer-deleted",children:"Trailer Deleted"}),"\n",(0,r.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Trusted:Trucker:Client:TrailerDeleted'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"route"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"--- implement code here"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["entity: ",(0,r.jsx)(n.code,{children:"number"})," (the entity of the trailer)"]}),"\n",(0,r.jsxs)(n.li,{children:["route: ",(0,r.jsx)(n.code,{children:"string"})," (the route name)"]}),"\n"]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/fivem/trucker-plus/extentions/client.mdx",route:"/fivem/trucker-plus/extentions/client",timestamp:1737840542e3,pageMap:[{kind:"Meta",data:{index:"Introduction",web:{title:"Website ↗",type:"page",href:"https://trusted-studios.eu",newWindow:!0},store:{title:"Store ↗",type:"page",href:"https://shop.trusted-studios.eu",newWindow:!0},status:{title:"Status ↗",type:"page",href:"https://status.trusted-studios.eu",newWindow:!0},fivem:"FiveM Scripts","dev-tools":"Development Tools"}},{kind:"Folder",name:"dev-tools",route:"/dev-tools",children:[{kind:"Meta",data:{"fivem-lib":"TS FiveM Lib",weapons:"Weapon Development"}},{kind:"Folder",name:"fivem-lib",route:"/dev-tools/fivem-lib",children:[{kind:"Folder",name:"Lua",route:"/dev-tools/fivem-lib/Lua",children:[{kind:"MdxPage",name:"bars",route:"/dev-tools/fivem-lib/Lua/bars"},{kind:"MdxPage",name:"callback",route:"/dev-tools/fivem-lib/Lua/callback"},{kind:"MdxPage",name:"game",route:"/dev-tools/fivem-lib/Lua/game"},{kind:"MdxPage",name:"text",route:"/dev-tools/fivem-lib/Lua/text"},{kind:"MdxPage",name:"visual",route:"/dev-tools/fivem-lib/Lua/visual"},{kind:"Meta",data:{bars:"Bars",callback:"Callback",game:"Game",text:"Text",visual:"Visual"}}]},{kind:"Folder",name:"web",route:"/dev-tools/fivem-lib/web",children:[{kind:"MdxPage",name:"components",route:"/dev-tools/fivem-lib/web/components"},{kind:"Meta",data:{components:"Components"}}]}]},{kind:"MdxPage",name:"fivem-lib",route:"/dev-tools/fivem-lib"},{kind:"Folder",name:"weapons",route:"/dev-tools/weapons",children:[{kind:"Meta",data:{addon:"Add-On Weapons"}},{kind:"MdxPage",name:"addon",route:"/dev-tools/weapons/addon"}]}]},{kind:"MdxPage",name:"dev-tools",route:"/dev-tools"},{kind:"Folder",name:"fivem",route:"/fivem",children:[{kind:"Meta",data:{shop:{type:"separator",title:"Shop"},products:"Buy and Claim",refund:"Refund",paid:{type:"separator",title:"Paid Scripts"},nitro:"Nitro/Nos Script",busdriver:"Busdriver Job",gopostal:"GoPostal Job",marketplace:"Advanced Marketplace",diving:"Advanced Diving & Loot",farming:"Advanced Farming",job_garage:"Advanced Job Garage","trucker-plus":"Advanced Trucker",free:{type:"separator",title:"Free Scripts"},"basic-flares":"Basic Flares","simple-car-wash":"Simple Car Wash","basic-pkg-bomb":"Basic Pkg Bomb","basic-carkeys":"Basic Car Keys","basic-farming":"Basic Farming","basic-job_garage":"Basic Job Garage","basic-trucker":"Basic Trucker"}},{kind:"Folder",name:"basic-carkeys",route:"/fivem/basic-carkeys",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-carkeys/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-carkeys/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-carkeys",route:"/fivem/basic-carkeys"},{kind:"Folder",name:"basic-farming",route:"/fivem/basic-farming",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-farming/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-farming/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-farming",route:"/fivem/basic-farming"},{kind:"Folder",name:"basic-flares",route:"/fivem/basic-flares",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-flares/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-flares/2_Config"},{kind:"MdxPage",name:"3_Exports",route:"/fivem/basic-flares/3_Exports"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Exports":"3 Exports"}}]},{kind:"MdxPage",name:"basic-flares",route:"/fivem/basic-flares"},{kind:"Folder",name:"basic-job_garage",route:"/fivem/basic-job_garage",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-job_garage/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-job_garage/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/basic-job_garage/3_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/basic-job_garage/3_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/basic-job_garage/3_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/basic-job_garage/3_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"MdxPage",name:"basic-job_garage",route:"/fivem/basic-job_garage"},{kind:"Folder",name:"basic-pkg-bomb",route:"/fivem/basic-pkg-bomb",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-pkg-bomb/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-pkg-bomb/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-pkg-bomb",route:"/fivem/basic-pkg-bomb"},{kind:"Folder",name:"basic-trucker",route:"/fivem/basic-trucker",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-trucker/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-trucker/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-trucker",route:"/fivem/basic-trucker"},{kind:"Folder",name:"busdriver",route:"/fivem/busdriver",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/busdriver/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/busdriver/2_Config"},{kind:"MdxPage",name:"3_Extentions",route:"/fivem/busdriver/3_Extentions"},{kind:"Folder",name:"4_Bridge",route:"/fivem/busdriver/4_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/busdriver/4_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/busdriver/4_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"4_Bridge",route:"/fivem/busdriver/4_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Extentions":"3 Extentions","4_Bridge":"4 Bridge"}}]},{kind:"MdxPage",name:"busdriver",route:"/fivem/busdriver"},{kind:"Folder",name:"diving",route:"/fivem/diving",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/diving/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/diving/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/diving/3_Bridge",children:[{kind:"MdxPage",name:"1_Server",route:"/fivem/diving/3_Bridge/1_Server"},{kind:"Meta",data:{"1_Server":"1 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/diving/3_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"MdxPage",name:"diving",route:"/fivem/diving"},{kind:"Folder",name:"farming",route:"/fivem/farming",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/farming/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/farming/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"farming",route:"/fivem/farming"},{kind:"Folder",name:"gopostal",route:"/fivem/gopostal",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/gopostal/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/gopostal/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config",extentions:"3 Extentions"}},{kind:"Folder",name:"extentions",route:"/fivem/gopostal/extentions",children:[{kind:"MdxPage",name:"Client",route:"/fivem/gopostal/extentions/Client"},{kind:"MdxPage",name:"Server",route:"/fivem/gopostal/extentions/Server"},{kind:"Meta",data:{Client:"Client",Server:"Server"}}]}]},{kind:"MdxPage",name:"gopostal",route:"/fivem/gopostal"},{kind:"Folder",name:"job_garage",route:"/fivem/job_garage",children:[{kind:"MdxPage",name:"2_Config",route:"/fivem/job_garage/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/job_garage/3_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/job_garage/3_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/job_garage/3_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/job_garage/3_Bridge"},{kind:"Meta",data:{"2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"Folder",name:"marketplace",route:"/fivem/marketplace",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/marketplace/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/marketplace/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/marketplace/3_Bridge",children:[{kind:"MdxPage",name:"1_Server",route:"/fivem/marketplace/3_Bridge/1_Server"},{kind:"Meta",data:{"1_Server":"1 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/marketplace/3_Bridge"},{kind:"MdxPage",name:"4_Images",route:"/fivem/marketplace/4_Images"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge","4_Images":"4 Images"}}]},{kind:"MdxPage",name:"marketplace",route:"/fivem/marketplace"},{kind:"Folder",name:"nitro",route:"/fivem/nitro",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/nitro/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/nitro/2_Config"},{kind:"MdxPage",name:"3_Exports",route:"/fivem/nitro/3_Exports"},{kind:"Folder",name:"4_Bridge",route:"/fivem/nitro/4_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/nitro/4_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/nitro/4_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"4_Bridge",route:"/fivem/nitro/4_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Exports":"3 Exports","4_Bridge":"4 Bridge"}}]},{kind:"MdxPage",name:"nitro",route:"/fivem/nitro"},{kind:"MdxPage",name:"products",route:"/fivem/products"},{kind:"MdxPage",name:"refund",route:"/fivem/refund"},{kind:"Folder",name:"simple-car-wash",route:"/fivem/simple-car-wash",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/simple-car-wash/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/simple-car-wash/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"simple-car-wash",route:"/fivem/simple-car-wash"},{kind:"Folder",name:"trucker-plus",route:"/fivem/trucker-plus",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/trucker-plus/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/trucker-plus/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config",routes:" 3 Routes",extentions:"4 Extentions"}},{kind:"Folder",name:"extentions",route:"/fivem/trucker-plus/extentions",children:[{kind:"MdxPage",name:"client",route:"/fivem/trucker-plus/extentions/client"},{kind:"MdxPage",name:"server",route:"/fivem/trucker-plus/extentions/server"},{kind:"Meta",data:{client:"Client",server:"Server"}}]},{kind:"Folder",name:"routes",route:"/fivem/trucker-plus/routes",children:[{kind:"MdxPage",name:"mission_type_1",route:"/fivem/trucker-plus/routes/mission_type_1"},{kind:"MdxPage",name:"mission_type_2",route:"/fivem/trucker-plus/routes/mission_type_2"},{kind:"MdxPage",name:"mission_type_3",route:"/fivem/trucker-plus/routes/mission_type_3"},{kind:"Meta",data:{mission_type_1:"Mission Type 1",mission_type_2:"Mission Type 2",mission_type_3:"Mission Type 3"}}]}]},{kind:"MdxPage",name:"trucker-plus",route:"/fivem/trucker-plus"}]},{kind:"MdxPage",name:"fivem",route:"/fivem"},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Introduction"}}],flexsearch:{codeblocks:!0},title:"Extentions",headings:d},pageNextRoute:"/fivem/trucker-plus/extentions/client",nextraLayout:o.ZP,themeConfig:a.Z};n.default=(0,t.j)(c)},5423:function(e,n,i){"use strict";var r=i(1527);i(959);var t=i(1236),o=i(679);let a={logo:(0,r.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url('/imgs/logo.png') no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Trusted Studios"}),project:{link:"https://github.com/TrustedService/Trusted-Studios-Docs"},chat:{link:"https://discord.gg/hmmM89nCdX"},docsRepositoryBase:"https://github.com/TrustedService/Trusted-Studios-Docs/blob/main",footer:{text:"Trusted Studios"},useNextSeoProps:function(){let{asPath:e}=(0,o.useRouter)(),n=e.replace(/[-_]/g," ").split("/"),i="#"!==n[1][0]&&n[1]||"Trusted Studios",r=n[n.length-1],t=/[a-z]/.test(r)&&/[A-Z]/.test(r)?r:"%s";return{titleTemplate:"".concat(r===i?"Documentation":i.replace(/(^\w|\s\w)/g,e=>e.toUpperCase())," - ").concat(t)}},head:function(){let{asPath:e}=(0,o.useRouter)(),{frontMatter:n,title:i}=(0,t.ZR)(),a=n.description||"Documentation for Trusted Studios' resources";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/imgs/logo.png"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{name:"og:title",content:i}),(0,r.jsx)("meta",{name:"og:description",content:a}),(0,r.jsx)("meta",{name:"og:url",content:"https://docs.trusted-studios.eu".concat(e)})]})},primaryHue:{dark:200,light:290}};n.Z=a}},function(e){e.O(0,[8168,2888,9774,179],function(){return e(e.s=3922)}),_N_E=e.O()}]);