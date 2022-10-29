(()=>{"use strict";var e={986:(e,t,r)=>{var n=r(1957),o=r(9868),i=r(499),s=r(9835),a=r(1094),u=r(9302);const c={__name:"App",setup(e){const t=(0,a.v)(),r=(0,u.Z)();return r.dark.set(t.darkMode),(e,t)=>{const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(r)}}},l=c,d=l;var h=r(3340),p=r(1268);const f=(0,h.h)((()=>{const e=(0,p.WB)();return e}));var g=r(8339);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(969)]).then(r.bind(r,5969)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(108)]).then(r.bind(r,6108))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(65)]).then(r.bind(r,7065))}],v=m,y=(0,h.BC)((function(){const e=g.r5,t=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return t}));async function w(e,t){const r=e(d);r.use(o.Z,t);const n="function"===typeof f?await f({}):f;r.use(n);const s=(0,i.Xl)("function"===typeof y?await y({store:n}):y);return n.use((({store:e})=>{e.router=s})),{app:r,store:n,router:s}}const b={config:{dark:!0}};async function A({app:e,router:t,store:r}){e.use(t),e.mount("#q-app")}w(n.ri,b).then(A)},1094:(e,t,r)=>{r.d(t,{v:()=>s});var n=r(1268),o=r(6038),i=r(9114);const s=(0,n.Q_)("quiz",{state:()=>({step:(0,o.y$C)("quizStep",0),points:(0,o.y$C)("quizPoints",0),finished:(0,o.y$C)("finished",!1),darkMode:a("darkMode",!0)}),getters:{question(){return u.find((e=>e.quizStep==this.step))},questionCount(){return u.length}},actions:{toggleDarkMode(){i.Z.toggle(),this.darkMode=i.Z.isActive},nextStep(e){e&&this.points++,null!=u.find((e=>e.quizStep==this.step+1))?this.step++:this.finished=!0},resetQuiz(){this.step=0,this.finished=!1,this.points=0}}}),a=(e,t)=>(0,o.y$C)(e,t,void 0,{serializer:{read:e=>{let t=JSON.parse(e);return"auto"===t?t:!0===t},write:e=>JSON.stringify(e)}}),u=[{quizStep:0,image:"https://media3.giphy.com/media/njYrp176NQsHS/giphy.gif",answers:[{text:"The Lord of the Rings: The Return of the King",correctAnswer:!1},{text:"The Hobbit: An Unexpected Journey",correctAnswer:!1},{text:"The Lord of the Rings: The Fellowship of the Ring",correctAnswer:!0},{text:"The Lord of the Rings: The Two Towers",correctAnswer:!1}]},{quizStep:1,image:"https://media1.giphy.com/media/t9xC86uywfQ1G/giphy.gif",answers:[{text:"Halloweentown",correctAnswer:!1},{text:"High Fidelity",correctAnswer:!1},{text:"Hocus Pocus ",correctAnswer:!0},{text:"Halloweentown 2",correctAnswer:!1}]},{quizStep:2,image:"https://media0.giphy.com/media/nqnWQ3ec9lRQI/giphy.gif",answers:[{text:"Con Air",correctAnswer:!1},{text:"High Fidelity",correctAnswer:!0},{text:"Serendipity ",correctAnswer:!1},{text:"Being John Malkovich",correctAnswer:!1}]}]}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],a=!0,u=0;u<n.length;u++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{65:"fbfeecd7",108:"50e55144",969:"aed19707"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{108:"53751353",143:"b92df87f",736:"f42cd798"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="moviequiz:";r.l=(n,o,i,s)=>{if(e[n])e[n].push(o);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[o];var h=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=a,o.parentNode.removeChild(o),n(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],i=o.getAttribute("data-href");if(i===e||i===t)return o}},n=n=>new Promise(((o,i)=>{var s=r.miniCssF(n),a=r.p+s;if(t(s,a))return o();e(n,a,o,i)})),o={143:0};r.f.miniCss=(e,t)=>{var r={108:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=i);var s=r.p+r.u(t),a=new Error,u=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}};r.l(s,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,a,u]=n,c=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(t&&t(n);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=globalThis["webpackChunkmoviequiz"]=globalThis["webpackChunkmoviequiz"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(986)));n=r.O(n)})();