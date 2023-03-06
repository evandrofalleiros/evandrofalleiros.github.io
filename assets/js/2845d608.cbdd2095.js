"use strict";(self.webpackChunkevandrofalleirosgh=self.webpackChunkevandrofalleirosgh||[]).push([[8923],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||n;return t?o.createElement(f,i(i({ref:r},d),{},{components:t})):o.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4335:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const n={sidebar_position:1,title:"EX01 - Intervalos"},i="Soma de valores",s={unversionedId:"js-exercicios/estrutura-decisao/exercicio-1",id:"js-exercicios/estrutura-decisao/exercicio-1",title:"EX01 - Intervalos",description:"Fa\xe7a um algoritmo que recebe como entrada de dados um valor num\xe9rico e informa se este valor est\xe1 em um intervalo de 0 a 1000;",source:"@site/docs/js-exercicios/estrutura-decisao/exercicio-1.md",sourceDirName:"js-exercicios/estrutura-decisao",slug:"/js-exercicios/estrutura-decisao/exercicio-1",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-exercicios/estrutura-decisao/exercicio-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"EX01 - Intervalos"},sidebar:"tutorialSidebar",previous:{title:"Estruturas de Decis\xe3o",permalink:"/docs/category/estruturas-de-decis\xe3o"},next:{title:"EX02 - Diferen\xe7a entre valores",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-2"}},c={},l=[{value:"Entrada de dados",id:"entrada-de-dados",level:2},{value:"Algoritmo proposto",id:"algoritmo-proposto",level:2},{value:"Resolu\xe7\xe3o",id:"resolu\xe7\xe3o",level:2}],d={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"soma-de-valores"},"Soma de valores"),(0,a.kt)("p",null,"Fa\xe7a um algoritmo que recebe como entrada de dados um valor num\xe9rico e informa se este valor est\xe1 em um intervalo de 0 a 1000;"),(0,a.kt)("h2",{id:"entrada-de-dados"},"Entrada de dados"),(0,a.kt)("p",null,"A entrada de dados deve ser realizada com o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt"),"."),(0,a.kt)("admonition",{title:"Saiba mais sobre Entrada de Dados",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Para saber mais sobre a entrada de dados com Prompt, acesso a se\xe7\xe3o ",(0,a.kt)("a",{parentName:"p",href:"/docs/js-linguagem/entrada-dados"},"Entrada de dados"),".")),(0,a.kt)("h2",{id:"algoritmo-proposto"},"Algoritmo proposto"),(0,a.kt)("mermaid",{value:"flowchart TD\n    A([In\xedcio]) --\x3e B\n    B[/Entrada de dados/] --\x3e|valor num\xe9rico| C{valor >= 0 ou valor <= 1000}\n    C --\x3e|Sim| D[fa:fa-car Mensagem]\n    C --\x3e|N\xe3o| E[fa:fa-car Mensagem]\n    D --\x3e F([Fim])\n    E --\x3e F([Fim])"}),(0,a.kt)("h2",{id:"resolu\xe7\xe3o"},"Resolu\xe7\xe3o"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mostrar Resolu\xe7\xe3o"),(0,a.kt)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/evandrofalleirosifms/0xpugm1v/2/embedded/js,result/",allowfullscreen:"allowfullscreen"})))}m.isMDXComponent=!0}}]);