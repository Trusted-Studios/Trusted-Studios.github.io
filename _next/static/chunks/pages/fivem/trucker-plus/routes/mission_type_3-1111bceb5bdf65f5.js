(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6753],{6020:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fivem/trucker-plus/routes/mission_type_3",function(){return n(4217)}])},4217:function(e,i,n){"use strict";n.r(i),n.d(i,{__toc:function(){return c}});var r=n(1527),s=n(5652),o=n(1236),t=n(5423);n(912);var a=n(2726),l=n(5712);let c=[{depth:2,value:"Routes",id:"routes"},{depth:2,value:"Trucks",id:"trucks"},{depth:2,value:"Trailers",id:"trailers"}];function d(e){let i=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,a.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:"Mission Type 3 - Configuration"}),"\n",(0,r.jsx)(i.p,{children:"The third mission type utilizes trailers to transport the cargo. The player will have to reverse the truck into the trailer to load the cargo and then deliver it to the destination. The player will be rewarded with money for completing the mission."}),"\n",(0,r.jsx)(i.h2,{id:"routes",children:"Routes"}),"\n",(0,r.jsxs)(i.p,{children:["This config option is the heart of any mission and will determine how the mission will behave. It is highly recommended to have ",(0,r.jsx)(i.strong,{children:"ONE MISSION"})," per file."]}),"\n",(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"Config.Routes["}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Depot Name"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"]["}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Mission Name"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    rewardMoney "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    rewardType "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"money"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    rewardLevel "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    requiredLevel "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    pickup "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"250.59"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"248.18"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"36.52"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"00.00"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"174.09"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"1429.42"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"31.23"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"32.42"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"835.98"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"1934.71"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"28.96"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"177.72"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    deliver "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"         "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"742.22"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"667.25"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"27.79"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"83.04"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"215.13"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"2484.84"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"6.00"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"92.13"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"874.80"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"1530.75"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"30.19"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"232.93"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"vec4"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"745.00"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"966.39"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"24.62"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"270.08"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Routes <> [Depot Name: ",(0,r.jsx)(i.code,{children:"string"}),"][Mission Name: ",(0,r.jsx)(i.code,{children:"string"}),"]: ",(0,r.jsx)(i.code,{children:"table"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["rewardMoney: ",(0,r.jsx)(i.code,{children:"number"})]}),"\n",(0,r.jsxs)(i.li,{children:["rewardType: ",(0,r.jsx)(i.code,{children:"string"})]}),"\n",(0,r.jsxs)(i.li,{children:["rewardLevel: ",(0,r.jsx)(i.code,{children:"number"})]}),"\n",(0,r.jsxs)(i.li,{children:["requiredLevel: ",(0,r.jsx)(i.code,{children:"number"})]}),"\n",(0,r.jsxs)(i.li,{children:["pickup: ",(0,r.jsx)(i.code,{children:"table"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["vec4(x, y, z, heading): ",(0,r.jsx)(i.code,{children:"vector4"})," (multiple locations can be added, one will be selected randomly)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["deliver: ",(0,r.jsx)(i.code,{children:"table"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["vec4(x, y, z, heading): ",(0,r.jsx)(i.code,{children:"vector4"})," (multiple locations can be added, one will be selected randomly)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(l.UW,{type:"warning",children:(0,r.jsxs)(i.p,{children:["Please note that the coords within the ",(0,r.jsx)(i.code,{children:"pickup"})," and ",(0,r.jsx)(i.code,{children:"deliver"})," tables, will have to be vector4 (x, y, z, heading) and not vector3 (x, y, z). This ensures that the mission type 2 will work correctly."]})}),"\n",(0,r.jsx)(i.h2,{id:"trucks",children:"Trucks"}),"\n",(0,r.jsx)(i.p,{children:"When players borow a truck to complete the mission, the script will randomly select one of the trucks from the list below. The player will have to use the selected truck to complete the mission."}),"\n",(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"Config.Trucks["}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Mission Name"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'phantom'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'packer'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'hauler'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"}   "})})]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Trucks <> [Mission Name: ",(0,r.jsx)(i.code,{children:"string"}),"]: ",(0,r.jsx)(i.code,{children:"table"}),"\ntruckName: string (multiple trucks can be added, one will be selected randomly)"]}),"\n"]}),"\n",(0,r.jsx)(l.UW,{type:"warning",children:(0,r.jsxs)(i.p,{children:["Please make sure that the mission name is the same as the one used in ",(0,r.jsx)(i.code,{children:"Config.Routes"}),", otherwise the script will break."]})}),"\n",(0,r.jsx)(i.h2,{id:"trailers",children:"Trailers"}),"\n",(0,r.jsx)(i.p,{children:"The script will randomly select one of the trailers from the list below. The player will have to use the selected trailer to complete the mission."}),"\n",(0,r.jsx)(i.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"Config.Trailers["}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Mission Name'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'trailerlogs'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tr4'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'trflat'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Trailers <> [Mission Name: ",(0,r.jsx)(i.code,{children:"string"}),"]: ",(0,r.jsx)(i.code,{children:"table"}),"\ntrailerName: string (multiple trailers can be added, one will be selected randomly)"]}),"\n"]}),"\n",(0,r.jsx)(l.UW,{type:"warning",children:(0,r.jsxs)(i.p,{children:["Please make sure that the mission name is the same as the one used in ",(0,r.jsx)(i.code,{children:"Config.Routes"}),", otherwise the script will break."]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,a.a)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/fivem/trucker-plus/routes/mission_type_3.mdx",route:"/fivem/trucker-plus/routes/mission_type_3",timestamp:1730276472e3,pageMap:[{kind:"Meta",data:{index:"Introduction",web:{title:"Website ↗",type:"page",href:"https://trusted-studios.eu",newWindow:!0},store:{title:"Store ↗",type:"page",href:"https://shop.trusted-studios.eu",newWindow:!0},status:{title:"Status ↗",type:"page",href:"https://status.trusted-studios.eu",newWindow:!0},fivem:"FiveM Scripts","dev-tools":"Development Tools"}},{kind:"Folder",name:"dev-tools",route:"/dev-tools",children:[{kind:"Meta",data:{"fivem-lib":"TS FiveM Lib",weapons:"Weapon Development"}},{kind:"Folder",name:"fivem-lib",route:"/dev-tools/fivem-lib",children:[{kind:"Folder",name:"Lua",route:"/dev-tools/fivem-lib/Lua",children:[{kind:"MdxPage",name:"bars",route:"/dev-tools/fivem-lib/Lua/bars"},{kind:"MdxPage",name:"callback",route:"/dev-tools/fivem-lib/Lua/callback"},{kind:"MdxPage",name:"game",route:"/dev-tools/fivem-lib/Lua/game"},{kind:"MdxPage",name:"text",route:"/dev-tools/fivem-lib/Lua/text"},{kind:"MdxPage",name:"visual",route:"/dev-tools/fivem-lib/Lua/visual"},{kind:"Meta",data:{bars:"Bars",callback:"Callback",game:"Game",text:"Text",visual:"Visual"}}]},{kind:"Folder",name:"web",route:"/dev-tools/fivem-lib/web",children:[{kind:"MdxPage",name:"components",route:"/dev-tools/fivem-lib/web/components"},{kind:"Meta",data:{components:"Components"}}]}]},{kind:"MdxPage",name:"fivem-lib",route:"/dev-tools/fivem-lib"},{kind:"Folder",name:"weapons",route:"/dev-tools/weapons",children:[{kind:"Meta",data:{addon:"Add-On Weapons"}},{kind:"MdxPage",name:"addon",route:"/dev-tools/weapons/addon"}]}]},{kind:"MdxPage",name:"dev-tools",route:"/dev-tools"},{kind:"Folder",name:"fivem",route:"/fivem",children:[{kind:"Meta",data:{shop:{type:"separator",title:"Shop"},products:"Buy and Claim",refund:"Refund",paid:{type:"separator",title:"Paid Scripts"},nitro:"Nitro/Nos Script",busdriver:"Busdriver Job",gopostal:"GoPostal Job",marketplace:"Advanced Marketplace",diving:"Advanced Diving & Loot",farming:"Advanced Farming",job_garage:"Advanced Job Garage","trucker-plus":"Advanced Trucker",free:{type:"separator",title:"Free Scripts"},"basic-flares":"Basic Flares","simple-car-wash":"Simple Car Wash","basic-pkg-bomb":"Basic Pkg Bomb","basic-carkeys":"Basic Car Keys","basic-farming":"Basic Farming","basic-job_garage":"Basic Job Garage","basic-trucker":"Basic Trucker"}},{kind:"Folder",name:"basic-carkeys",route:"/fivem/basic-carkeys",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-carkeys/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-carkeys/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-carkeys",route:"/fivem/basic-carkeys"},{kind:"Folder",name:"basic-farming",route:"/fivem/basic-farming",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-farming/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-farming/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-farming",route:"/fivem/basic-farming"},{kind:"Folder",name:"basic-flares",route:"/fivem/basic-flares",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-flares/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-flares/2_Config"},{kind:"MdxPage",name:"3_Exports",route:"/fivem/basic-flares/3_Exports"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Exports":"3 Exports"}}]},{kind:"MdxPage",name:"basic-flares",route:"/fivem/basic-flares"},{kind:"Folder",name:"basic-job_garage",route:"/fivem/basic-job_garage",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-job_garage/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-job_garage/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/basic-job_garage/3_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/basic-job_garage/3_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/basic-job_garage/3_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/basic-job_garage/3_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"MdxPage",name:"basic-job_garage",route:"/fivem/basic-job_garage"},{kind:"Folder",name:"basic-pkg-bomb",route:"/fivem/basic-pkg-bomb",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-pkg-bomb/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-pkg-bomb/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-pkg-bomb",route:"/fivem/basic-pkg-bomb"},{kind:"Folder",name:"basic-trucker",route:"/fivem/basic-trucker",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/basic-trucker/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/basic-trucker/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"basic-trucker",route:"/fivem/basic-trucker"},{kind:"Folder",name:"busdriver",route:"/fivem/busdriver",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/busdriver/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/busdriver/2_Config"},{kind:"MdxPage",name:"3_Extentions",route:"/fivem/busdriver/3_Extentions"},{kind:"Folder",name:"4_Bridge",route:"/fivem/busdriver/4_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/busdriver/4_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/busdriver/4_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"4_Bridge",route:"/fivem/busdriver/4_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Extentions":"3 Extentions","4_Bridge":"4 Bridge"}}]},{kind:"MdxPage",name:"busdriver",route:"/fivem/busdriver"},{kind:"Folder",name:"diving",route:"/fivem/diving",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/diving/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/diving/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/diving/3_Bridge",children:[{kind:"MdxPage",name:"1_Server",route:"/fivem/diving/3_Bridge/1_Server"},{kind:"Meta",data:{"1_Server":"1 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/diving/3_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"MdxPage",name:"diving",route:"/fivem/diving"},{kind:"Folder",name:"farming",route:"/fivem/farming",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/farming/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/farming/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"farming",route:"/fivem/farming"},{kind:"Folder",name:"gopostal",route:"/fivem/gopostal",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/gopostal/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/gopostal/2_Config"},{kind:"MdxPage",name:"3_Events",route:"/fivem/gopostal/3_Events"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Events":"3 Events"}}]},{kind:"MdxPage",name:"gopostal",route:"/fivem/gopostal"},{kind:"Folder",name:"job_garage",route:"/fivem/job_garage",children:[{kind:"MdxPage",name:"2_Config",route:"/fivem/job_garage/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/job_garage/3_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/job_garage/3_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/job_garage/3_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/job_garage/3_Bridge"},{kind:"Meta",data:{"2_Config":"2 Config","3_Bridge":"3 Bridge"}}]},{kind:"Folder",name:"marketplace",route:"/fivem/marketplace",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/marketplace/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/marketplace/2_Config"},{kind:"Folder",name:"3_Bridge",route:"/fivem/marketplace/3_Bridge",children:[{kind:"MdxPage",name:"1_Server",route:"/fivem/marketplace/3_Bridge/1_Server"},{kind:"Meta",data:{"1_Server":"1 Server"}}]},{kind:"MdxPage",name:"3_Bridge",route:"/fivem/marketplace/3_Bridge"},{kind:"MdxPage",name:"4_Images",route:"/fivem/marketplace/4_Images"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Bridge":"3 Bridge","4_Images":"4 Images"}}]},{kind:"MdxPage",name:"marketplace",route:"/fivem/marketplace"},{kind:"Folder",name:"nitro",route:"/fivem/nitro",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/nitro/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/nitro/2_Config"},{kind:"MdxPage",name:"3_Exports",route:"/fivem/nitro/3_Exports"},{kind:"Folder",name:"4_Bridge",route:"/fivem/nitro/4_Bridge",children:[{kind:"MdxPage",name:"1_Client",route:"/fivem/nitro/4_Bridge/1_Client"},{kind:"MdxPage",name:"2_Server",route:"/fivem/nitro/4_Bridge/2_Server"},{kind:"Meta",data:{"1_Client":"1 Client","2_Server":"2 Server"}}]},{kind:"MdxPage",name:"4_Bridge",route:"/fivem/nitro/4_Bridge"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config","3_Exports":"3 Exports","4_Bridge":"4 Bridge"}}]},{kind:"MdxPage",name:"nitro",route:"/fivem/nitro"},{kind:"MdxPage",name:"products",route:"/fivem/products"},{kind:"MdxPage",name:"refund",route:"/fivem/refund"},{kind:"Folder",name:"simple-car-wash",route:"/fivem/simple-car-wash",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/simple-car-wash/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/simple-car-wash/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config"}}]},{kind:"MdxPage",name:"simple-car-wash",route:"/fivem/simple-car-wash"},{kind:"Folder",name:"trucker-plus",route:"/fivem/trucker-plus",children:[{kind:"MdxPage",name:"1_Introduction",route:"/fivem/trucker-plus/1_Introduction"},{kind:"MdxPage",name:"2_Config",route:"/fivem/trucker-plus/2_Config"},{kind:"Meta",data:{"1_Introduction":"1 Introduction","2_Config":"2 Config",routes:" 3 Routes",extentions:"4 Extentions"}},{kind:"Folder",name:"extentions",route:"/fivem/trucker-plus/extentions",children:[{kind:"MdxPage",name:"client",route:"/fivem/trucker-plus/extentions/client"},{kind:"MdxPage",name:"server",route:"/fivem/trucker-plus/extentions/server"},{kind:"Meta",data:{client:"Client",server:"Server"}}]},{kind:"Folder",name:"routes",route:"/fivem/trucker-plus/routes",children:[{kind:"MdxPage",name:"mission_type_1",route:"/fivem/trucker-plus/routes/mission_type_1"},{kind:"MdxPage",name:"mission_type_2",route:"/fivem/trucker-plus/routes/mission_type_2"},{kind:"MdxPage",name:"mission_type_3",route:"/fivem/trucker-plus/routes/mission_type_3"},{kind:"Meta",data:{mission_type_1:"Mission Type 1",mission_type_2:"Mission Type 2",mission_type_3:"Mission Type 3"}}]}]},{kind:"MdxPage",name:"trucker-plus",route:"/fivem/trucker-plus"}]},{kind:"MdxPage",name:"fivem",route:"/fivem"},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Introduction"}}],flexsearch:{codeblocks:!0},title:"Mission Type 3 - Configuration",headings:c},pageNextRoute:"/fivem/trucker-plus/routes/mission_type_3",nextraLayout:o.ZP,themeConfig:t.Z};i.default=(0,s.j)(h)},5423:function(e,i,n){"use strict";var r=n(1527);n(959);var s=n(1236),o=n(679);let t={logo:(0,r.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url('/imgs/logo.png') no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Trusted Studios"}),project:{link:"https://github.com/TrustedService/Trusted-Studios-Docs"},chat:{link:"https://discord.gg/hmmM89nCdX"},docsRepositoryBase:"https://github.com/TrustedService/Trusted-Studios-Docs/blob/main",footer:{text:"Trusted Studios"},useNextSeoProps:function(){let{asPath:e}=(0,o.useRouter)(),i=e.replace(/[-_]/g," ").split("/"),n="#"!==i[1][0]&&i[1]||"Trusted Studios",r=i[i.length-1],s=/[a-z]/.test(r)&&/[A-Z]/.test(r)?r:"%s";return{titleTemplate:"".concat(r===n?"Documentation":n.replace(/(^\w|\s\w)/g,e=>e.toUpperCase())," - ").concat(s)}},head:function(){let{asPath:e}=(0,o.useRouter)(),{frontMatter:i,title:n}=(0,s.ZR)(),t=i.description||"Documentation for Trusted Studios' resources";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/imgs/logo.png"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"og:title",content:n}),(0,r.jsx)("meta",{name:"og:description",content:t}),(0,r.jsx)("meta",{name:"og:url",content:"https://docs.trusted-studios.eu".concat(e)})]})},primaryHue:{dark:200,light:290}};i.Z=t}},function(e){e.O(0,[8168,2888,9774,179],function(){return e(e.s=6020)}),_N_E=e.O()}]);