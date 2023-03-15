"use strict";(self.webpackChunkevandrofalleirosgh=self.webpackChunkevandrofalleirosgh||[]).push([[4090],{3905:(e,r,o)=>{o.d(r,{Zo:()=>d,kt:()=>f});var t=o(7294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},d=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return o?t.createElement(f,i(i({ref:r},d),{},{components:o})):t.createElement(f,i({ref:r},d))}));function f(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},230:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var t=o(7462),a=(o(7294),o(3905));const n={sidebar_position:2,title:"EX02 - Diferen\xe7a entre valores"},i="Diferen\xe7a entre valores",s={unversionedId:"js-exercicios/estrutura-decisao/exercicio-2",id:"js-exercicios/estrutura-decisao/exercicio-2",title:"EX02 - Diferen\xe7a entre valores",description:"Ao ler dois valores num\xe9ricos distintos, indique a diferen\xe7a entre o maior e o menor valor lidos. Crie um algoritmo que representa uma poss\xedvel solu\xe7\xe3o para o problema.",source:"@site/docs/js-exercicios/estrutura-decisao/exercicio-2.md",sourceDirName:"js-exercicios/estrutura-decisao",slug:"/js-exercicios/estrutura-decisao/exercicio-2",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-exercicios/estrutura-decisao/exercicio-2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"EX02 - Diferen\xe7a entre valores"},sidebar:"tutorialSidebar",previous:{title:"EX01 - Intervalos",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-1"},next:{title:"EX03 - Maior valor",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-3"}},l={},c=[{value:"Entrada de dados",id:"entrada-de-dados",level:2},{value:"Algoritmo proposto",id:"algoritmo-proposto",level:2},{value:"Resolu\xe7\xe3o",id:"resolu\xe7\xe3o",level:2}],d={toc:c},u="wrapper";function p(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,t.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diferen\xe7a-entre-valores"},"Diferen\xe7a entre valores"),(0,a.kt)("p",null,"Ao ler dois valores num\xe9ricos distintos, indique a diferen\xe7a entre o maior e o menor valor lidos. Crie um algoritmo que representa uma poss\xedvel solu\xe7\xe3o para o problema."),(0,a.kt)("h2",{id:"entrada-de-dados"},"Entrada de dados"),(0,a.kt)("p",null,"A entrada de dados deve ser realizada com o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt"),"."),(0,a.kt)("admonition",{title:"Saiba mais sobre Entrada de Dados",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Para saber mais sobre a entrada de dados com Prompt, acesso a se\xe7\xe3o ",(0,a.kt)("a",{parentName:"p",href:"/docs/js-linguagem/entrada-dados"},"Entrada de dados"),".")),(0,a.kt)("h2",{id:"algoritmo-proposto"},"Algoritmo proposto"),(0,a.kt)("mermaid",{value:"flowchart TD\n    A([In\xedcio]) --\x3e B\n    B[/Entrada de dados/] --\x3e|valor1, valor2| C{valor1 >= valor2}\n    C --\x3e|Sim| D[diferenca = valor1 - valor2]\n    C --\x3e|N\xe3o| E[diferenca = valor2 - valor1]\n    D --\x3e F[/Sa\xedda de dados/]\n    E --\x3e F[/Sa\xedda de dados/]\n    F --\x3e G([Fim])"}),(0,a.kt)("h2",{id:"resolu\xe7\xe3o"},"Resolu\xe7\xe3o"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mostrar Resolu\xe7\xe3o"),(0,a.kt)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/evandrofalleirosifms/b3k0cjxr/1/embedded/js,result/",allowfullscreen:"allowfullscreen"})))}p.isMDXComponent=!0}}]);