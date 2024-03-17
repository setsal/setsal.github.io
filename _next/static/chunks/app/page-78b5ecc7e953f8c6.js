(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7567:function(e,t,n){Promise.resolve().then(n.bind(n,1762))},1762:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeSwitcher:function(){return r}});var c=n(7437),a=n(2265),o=n(4848);let r=()=>{let[e,t]=(0,a.useState)(!1),{theme:n,setTheme:r}=(0,o.F)();return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,c.jsx)("span",{className:"header-right",children:(0,c.jsx)("span",{className:"theme-toggle unselectable",onClick:()=>r("dark"===n?"light":"dark"),children:(0,c.jsx)("svg",{className:"theme-toggler",width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22   3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7   13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"})})})}):null}},4848:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return m}});var c=n(2265),a=["light","dark"],o="(prefers-color-scheme: dark)",r="undefined"==typeof window,l=c.createContext(void 0),s={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=c.useContext(l))?e:s},m=e=>c.useContext(l)?e.children:c.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:m=d,defaultTheme:u=r?"system":"light",attribute:y="data-theme",value:w,children:b,nonce:C}=e,[p,S]=c.useState(()=>f(i,u)),[k,E]=c.useState(()=>f(i)),T=w?Object.values(w):m,x=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=v());let c=w?w[t]:t,o=n?g():null,l=document.documentElement;if("class"===y?(l.classList.remove(...T),c&&l.classList.add(c)):c?l.setAttribute(y,c):l.removeAttribute(y),s){let e=a.includes(u)?u:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[]),N=c.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),L=c.useCallback(e=>{E(v(e)),"system"===p&&r&&!t&&x("system")},[p,t]);c.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),c.useEffect(()=>{let e=e=>{e.key===i&&N(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),c.useEffect(()=>{x(null!=t?t:p)},[t,p]);let _=c.useMemo(()=>({theme:p,setTheme:N,forcedTheme:t,resolvedTheme:"system"===p?k:p,themes:r?[...m,"system"]:m,systemTheme:r?k:void 0}),[p,N,t,k,r,m]);return c.createElement(l.Provider,{value:_},c.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:i,themes:m,defaultTheme:u,attribute:y,value:w,children:b,attrs:T,nonce:C}),b)},h=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),g=s?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=m?m[e]:e,o=t?e+"|| ''":"'".concat(c,"'"),l="";return s&&n&&!t&&a.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||c?l+="c.add(".concat(o,")"):l+="null":c&&(l+="d[s](n,".concat(o,")")),l},y=t?"!function(){".concat(f).concat(v(t),"}()"):l?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(g,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:y}})}),f=(e,t)=>{let n;if(!r){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[971,69,744],function(){return e(e.s=7567)}),_N_E=e.O()}]);