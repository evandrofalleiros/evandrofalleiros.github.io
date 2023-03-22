"use strict";(self.webpackChunkevandrofalleirosgh=self.webpackChunkevandrofalleirosgh||[]).push([[3220],{3905:(e,o,r)=>{r.d(o,{Zo:()=>l,kt:()=>f});var t=r(67294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var o=t.useContext(c),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},l=function(e){var o=d(e.components);return t.createElement(c.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?t.createElement(f,i(i({ref:o},l),{},{components:r})):t.createElement(f,i({ref:o},l))}));function f(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88316:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var t=r(87462),a=(r(67294),r(3905));const n={sidebar_position:5,title:"EX05 - Cobran\xe7a no pesqueiro"},i="Cobran\xe7a no pesqueiro",s={unversionedId:"js-exercicios/estrutura-decisao/exercicio-5",id:"js-exercicios/estrutura-decisao/exercicio-5",title:"EX05 - Cobran\xe7a no pesqueiro",description:"Jo\xe3o Bacur\xed costuma pescar no pesqueiro Rio Aberto. Considere que o pesqueiro estabeleceu que, independente do tipo de peixe, cobra-se R$ 9.90 (nove reais e noventa centavos) por quilo de pescado.",source:"@site/docs/js-exercicios/estrutura-decisao/exercicio-5.md",sourceDirName:"js-exercicios/estrutura-decisao",slug:"/js-exercicios/estrutura-decisao/exercicio-5",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-exercicios/estrutura-decisao/exercicio-5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"EX05 - Cobran\xe7a no pesqueiro"},sidebar:"tutorialSidebar",previous:{title:"EX04 - C\xe1lculo Salarial",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-4"},next:{title:"EX06 - Verifica\xe7\xe3o de idade",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-6"}},c={},d=[{value:"Entrada de dados",id:"entrada-de-dados",level:2},{value:"Algoritmo proposto",id:"algoritmo-proposto",level:2},{value:"Resolu\xe7\xe3o",id:"resolu\xe7\xe3o",level:2}],l={toc:d},u="wrapper";function p(e){let{components:o,...r}=e;return(0,a.kt)(u,(0,t.Z)({},l,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cobran\xe7a-no-pesqueiro"},"Cobran\xe7a no pesqueiro"),(0,a.kt)("p",null,"Jo\xe3o Bacur\xed costuma pescar no pesqueiro Rio Aberto. Considere que o pesqueiro estabeleceu que, independente do tipo de peixe, cobra-se R$ 9.90 (nove reais e noventa centavos) por quilo de pescado. "),(0,a.kt)("p",null,"Fa\xe7a um algoritmo que, dado o peso (em quilogramas) de pescado, \xe9 capaz de mostrar o valor final a ser cobrado com desconto. As seguintes regras de desconto s\xe3o utilizadas no ato de cobran\xe7a:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"O pescado que pesar at\xe9 2.9Kg n\xe3o tem desconto no valor final;"),(0,a.kt)("li",{parentName:"ul"},"O pescado que pesar 3Kg ou mais, ganha 5% de desconto no valor final.")),(0,a.kt)("h2",{id:"entrada-de-dados"},"Entrada de dados"),(0,a.kt)("p",null,"A entrada de dados deve ser realizada com o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt"),"."),(0,a.kt)("admonition",{title:"Saiba mais sobre Entrada de Dados",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Para saber mais sobre a entrada de dados com Prompt, acesso a se\xe7\xe3o ",(0,a.kt)("a",{parentName:"p",href:"/docs/js-linguagem/entrada-dados"},"Entrada de dados"),".")),(0,a.kt)("h2",{id:"algoritmo-proposto"},"Algoritmo proposto"),(0,a.kt)("mermaid",{value:"flowchart TD\n    A([In\xedcio]) --\x3e B\n    B[/Entrada de dados/] --\x3e|peso| C[valorSemDesconto = peso * 9.9]\n    C --\x3e D{peso > 2.9}\n\n    D --\x3e|Sim| E[valorFinal = valorSemDesconto * 0.95]\n    D --\x3e|N\xe3o| F[valorFinal = valorSemDesconto]\n    E --\x3e G[/Sa\xedda de dados/]\n    F --\x3e G[/Sa\xedda de dados/]\n    G --\x3e H([Fim])    "}),(0,a.kt)("h2",{id:"resolu\xe7\xe3o"},"Resolu\xe7\xe3o"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mostrar Resolu\xe7\xe3o"),(0,a.kt)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/evandrofalleirosifms/aqo98sur/1/embedded/js,result/",allowfullscreen:"allowfullscreen"})))}p.isMDXComponent=!0}}]);