"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{3165:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),i=n(2903);var r=(0,n(275).zo)("div",{w:"100%",mr:"auto",ml:"auto",variants:{fluid:{true:{maxWidth:"100%"}},responsive:{true:{"@xs":{maxWidth:"$breakpoints$xs"},"@sm":{maxWidth:"$breakpoints$sm"},"@md":{maxWidth:"$breakpoints$md"},"@lg":{maxWidth:"$breakpoints$lg"},"@xl":{maxWidth:"$breakpoints$xl"}}}},defaultVariants:{fluid:!1,responsive:!0}}),l=n(5893);const a=o.forwardRef(((e,t)=>{const{xs:n,sm:a,md:s,lg:d,xl:c,wrap:u,gap:m,as:h,display:p,justify:g,direction:f,alignItems:$,alignContent:b,children:x,responsive:y,fluid:v,css:w,...k}=e,S=(0,i.gy)(t),W=(0,o.useMemo)((()=>`calc(${m} * $space$sm)`),[m]);return(0,l.jsx)(r,{ref:S,as:h,css:{px:W,maxWidth:n?"$breakpoints$xs":a?"$breakpoints$sm":s?"$breakpoints$md":d?"$breakpoints$lg":c?"$breakpoints$xl":"",alignItems:$,alignContent:b,flexWrap:u,display:p,justifyContent:g,flexDirection:f,...w},fluid:v,responsive:y,...k,children:x})}));a.displayName="NextUI.Container",a.toString=()=>".nextui-container",a.defaultProps={gap:2,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,responsive:!0,fluid:!1,wrap:"wrap",as:"div",display:"block"};var s=o.memo(a)},7773:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(7294);const i={prefix:String(Math.round(1e10*Math.random())),current:0},r=o.createContext(i);function l(e){let t=(0,o.useContext)(r),n=(0,o.useMemo)((()=>({prefix:t===i?"":`${t.prefix}-${++t.current}`,current:0})),[t]);return o.createElement(r.Provider,{value:n},e.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);n(3935);"undefined"!==typeof window&&window.visualViewport;new WeakMap;"undefined"!==typeof window&&window.visualViewport;"undefined"!==typeof window&&window.visualViewport,new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);const a=o.createContext(null);function s(e){let{children:t}=e,n=(0,o.useContext)(a),[i,r]=(0,o.useState)(0),l=(0,o.useMemo)((()=>({parent:n,modalCount:i,addModal(){r((e=>e+1)),n&&n.addModal()},removeModal(){r((e=>e-1)),n&&n.removeModal()}})),[n,i]);return o.createElement(a.Provider,{value:l},t)}function d(e){let{modalProviderProps:t}=function(){let e=(0,o.useContext)(a);return{modalProviderProps:{"aria-hidden":!!(e&&e.modalCount>0)||null}}}();return o.createElement("div",{"data-overlay-container":!0,...e,...t})}function c(e){return o.createElement(s,null,o.createElement(d,e))}new WeakMap;var u=n(275),m=n(5893);const h=(0,u.zY)({"*, *:before, *:after":{boxSizing:"border-box",textRendering:"geometricPrecision",WebkitTapHighlightColor:"transparent"},html:{fontSize:"$base"},body:{margin:0,padding:0,minHeight:"100%",position:"relative",overflowX:"hidden",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",textRendering:"optimizeLegibility",fontSize:"$base",lineHeight:"$md",fontFamily:"$sans"},"html, body":{backgroundColor:"$background",color:"$text"},"p, small":{color:"inherit",letterSpacing:"$tighter",fontWeight:"$normal",fontFamily:"$sans"},p:{fontSize:"$base",lineHeight:"$lg"},small:{margin:0,lineHeight:"$xs",fontSize:"$xs"},b:{fontWeight:"$semibold"},span:{fontSize:"inherit",color:"inherit",fontWeight:"inherit"},img:{maxWidth:"100%"},a:{cursor:"pointer",fontSize:"inherit",WebkitTouchCallout:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitBoxAlign:"center",alignItems:"center",color:"$link",textDecoration:"none"},"a:hover":{textDecoration:"none"},"ul,ol":{padding:0,listStyleType:"none",margin:"$sm $sm $sm $lg",color:"$foreground"},ol:{listStyleType:"decimal"},li:{marginBottom:"$5",fontSize:"$base",lineHeight:"$lg"},"h1,h2,h3,h4,h5,h6":{color:"inherit",margin:"0 0 $5 0"},h1:{letterSpacing:"$tighter",fontSize:"$5xl",lineHeight:"$md",fontWeight:"$bold"},h2:{letterSpacing:"$tighter",fontSize:"$4xl",fontWeight:"$semibold"},h3:{letterSpacing:"$tighter",fontSize:"$2xl",fontWeight:"$semibold"},h4:{letterSpacing:"$tighter",fontSize:"$xl",fontWeight:"$semibold"},h5:{letterSpacing:"$tight",fontSize:"$md",fontWeight:"$semibold"},h6:{letterSpacing:"$tight",fontSize:"$sm",fontWeight:"$semibold"},"button, input, select,textarea":{fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit",color:"inherit",margin:0},"button:focus, input:focus, select:focus, textarea:focus":{outline:"none"},code:{color:"$code",padding:"$1 $2",borderRadius:"$xs",bg:"$codeLight",fontFamily:"$mono",fontSize:"$sm",whiteSpace:"pre-wrap",transition:"opacity 0.25s ease 0s"},"code:hover":{opacity:.8},pre:{overflow:"auto",whiteSpace:"pre",textAlign:"left",fontSize:"$sm",borderRadius:"$lg",padding:"$md $lg",margin:"$lg 0",fontFamily:"$mono",lineHeight:"$md",webkitOverflowScrolling:"touch"},"pre code":{color:"$foreground",fontSize:"$sm",lineHeight:"$sm",whiteSpace:"pre"},"pre code:before,pre code:after":{display:"none"},"pre p":{margin:0},"pre::-webkit-scrollbar":{display:"none",width:0,height:0,background:"transparent"},hr:{background:"$border",borderColor:"transparent",borderWidth:"0px",borderStyle:"none",height:"1px"},details:{backgroundColor:"$accents1",border:"none"},"details:focus, details:hover, details:active":{outline:"none"},summary:{cursor:"pointer",userSelect:"none",listStyle:"none",outline:"none"},"summary::-webkit-details-marker, summary::before":{display:"none"},"summary::-moz-list-bullet":{fontSize:0},"summary:focus, summary:hover, summary:active":{outline:"none",listStyle:"none"},"::selection":{backgroundColor:"$selection"},blockquote:{padding:"$md $lg",color:"$accents7",backgroundColor:"$accents0",borderRadius:"$lg",margin:"$10 0"},"blockquote *:first-child":{marginTop:0},"blockquote *:last-child":{marginBottom:0},kbd:{width:"fit-content",textAlign:"center",display:"inline-block",color:"$accents8",bg:"$accents0",border:"1px solid $border",boxShadow:"0 0 1px 0 rgb(0 0 0 / 14%)",fontFamily:"$sans",borderRadius:"5px",padding:"$1 $3",mx:"$1",lineHeight:"$sm",fontSize:"$sm"},"kbd + kbd":{ml:"$2"},"dl, dd, hr, figure, p":{margin:0}}),p=o.memo((({children:e})=>(h(),(0,m.jsx)(o.Fragment,{children:e}))));p.flush=()=>(0,m.jsx)("style",{dangerouslySetInnerHTML:{__html:(0,u.Gc)()},id:"stitches"});var g=p,f=n(88);function $(e){for(var t,n,o=Array.prototype.slice.call(arguments,1);o.length;)for(n in t=o.shift())t.hasOwnProperty(n)&&("object"==typeof e[n]&&e[n]&&"[object Array]"!==Object.prototype.toString.call(e[n])&&"object"==typeof t[n]&&null!==t[n]?e[n]=$({},e[n],t[n]):e[n]=t[n]);return e}const b=e=>e&&"object"==typeof e;var x=()=>{const[e,t]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{t(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement))}),[]),{isBrowser:e,isServer:!e}},y=n(1309),v=n(3917),w=n(2524),k=n(1875);const S=(e,t,n=1)=>{if("undefined"==typeof document||!e)return"";let o=getComputedStyle(document.documentElement);const i=`--${w.ZP.prefix}-${e}-${t}`,r=o.getPropertyValue(i);if(r&&r.includes("var")&&S(e,r),r&&1!==n){if(r.includes("rgb"))return(0,v.wB)(r,n);if(r.includes("#"))return(0,v.E9)(r,n)}return r},W=e=>"string"==typeof e&&null!=e&&e.includes("-theme")?null==e?void 0:e.replace("-theme",""):e,z={isDark:!1,theme:u.rS,type:"light"};var C=o.createContext(z),E=(0,f.Z)((({theme:e,disableBaseline:t,children:n})=>{const{isBrowser:i}=x(),[r,a]=(0,o.useState)(z.type),s=e=>{a((t=>t!==e?e:t))},d=e=>{const t=(e=>{var t;const n=(null==e||null==(t=e.getAttribute("style"))?void 0:t.split(";").map((e=>e.trim())).filter((e=>e.includes("color-scheme"))))||[],o=n.length>0?n[0].replace("color-scheme: ","").replace(";",""):"";return(null==e?void 0:e.getAttribute("data-theme"))||o})(e);t&&s(t)},u=(0,o.useMemo)((()=>{const e=i?(()=>{const e=[...Object.keys(w.ZP.theme.colors),...Object.keys(k.Z.colors)],t=Object.keys(k.Z.shadows);return{colors:e.reduce(((e,t)=>{const n=S("colors",t);return n&&(e[t]={prefix:w.ZP.prefix,scale:"colors",token:t,value:n}),e}),{}),shadows:t.reduce(((e,t)=>{const n=S("shadows",t);return n&&(e[t]={prefix:w.ZP.prefix,scale:"shadows",token:t,value:n}),e}),{})}})():{},t=$((e=>b(e)?e instanceof Array?[...e]:{...e}:e)(z.theme),e),n=W(r);return{theme:t,type:n,isDark:"dark"===n}}),[r,i]);return(0,o.useEffect)((()=>{var e,t,n;d(null==(e=document)?void 0:e.documentElement);const o=new MutationObserver((e=>{var t;if(e&&e.length>0&&"BODY"===(null==(t=e[0])?void 0:t.target.nodeName)){var n,o,i;const e=null==(n=document)||null==(o=n.body)||null==(i=o.dataset)?void 0:i.theme;e&&s(e)}else{var r;d(null==(r=document)?void 0:r.documentElement)}}));return o.observe(null==(t=document)?void 0:t.documentElement,{attributes:!0,attributeFilter:["data-theme","style"]}),o.observe(null==(n=document)?void 0:n.body,{attributes:!0,attributeFilter:["data-theme","style"]}),()=>o.disconnect()}),[]),(0,o.useEffect)((()=>{i&&e&&null!=e&&e.className&&((e=>{var t,n;if(!document)return;const o=document.documentElement,i=(null==o||null==(t=o.getAttribute("class"))?void 0:t.split(" ").filter((e=>!e.includes("theme")&&!e.includes("light")&&!e.includes("dark"))))||[],r=(null==o||null==(n=o.getAttribute("style"))?void 0:n.split(";").filter((e=>!e.includes("color-scheme")&&e.length)).map((e=>`${e};`)))||[],l=W(e);null==o||o.setAttribute("class",(0,y.Z)(i,`${l}-theme`)),null==o||o.setAttribute("style",(0,y.Z)(r,`color-scheme: ${l};`))})(e.className),s(W(e.className)))}),[i,e]),(0,m.jsx)(l,{children:(0,m.jsx)(c,{children:(0,m.jsxs)(C.Provider,{value:u,children:[!t&&(0,m.jsx)(g,{}),n]})})})}),{disableBaseline:!1})}}]);