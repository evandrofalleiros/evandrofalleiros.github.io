"use strict";(self.webpackChunkevandrofalleirosgh=self.webpackChunkevandrofalleirosgh||[]).push([[9876],{3905:(e,r,o)=>{o.d(r,{Zo:()=>d,kt:()=>f});var t=o(7294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):n(n({},r),e)),o},d=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return o?t.createElement(f,n(n({ref:r},d),{},{components:o})):t.createElement(f,n({ref:r},d))}));function f(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,n[1]=s;for(var l=2;l<i;l++)n[l]=o[l];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9827:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(7462),a=(o(7294),o(3905));const i={sidebar_position:4,title:"EX04 - C\xe1lculo Salarial"},n="Diferen\xe7a entre valores",s={unversionedId:"js-exercicios/estrutura-decisao/exercicio-4",id:"js-exercicios/estrutura-decisao/exercicio-4",title:"EX04 - C\xe1lculo Salarial",description:"Construa um algoritmo que recebe, como entrada de dados, o sal\xe1rio bruto de um funcion\xe1rio e retorna, como sa\xedda de dados, o seu sal\xe1rio l\xedquido. O sal\xe1rio l\xedquido deve ser calculado conforme segue:",source:"@site/docs/js-exercicios/estrutura-decisao/exercicio-4.md",sourceDirName:"js-exercicios/estrutura-decisao",slug:"/js-exercicios/estrutura-decisao/exercicio-4",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-exercicios/estrutura-decisao/exercicio-4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"EX04 - C\xe1lculo Salarial"},sidebar:"tutorialSidebar",previous:{title:"EX03 - Maior valor",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-3"},next:{title:"EX05 - Cobran\xe7a no pesqueiro",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-5"}},c={},l=[{value:"Entrada de dados",id:"entrada-de-dados",level:2},{value:"Resolu\xe7\xe3o",id:"resolu\xe7\xe3o",level:2}],d={toc:l},u="wrapper";function p(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,t.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diferen\xe7a-entre-valores"},"Diferen\xe7a entre valores"),(0,a.kt)("p",null,"Construa um algoritmo que recebe, como entrada de dados, o sal\xe1rio bruto de um funcion\xe1rio e retorna, como sa\xedda de dados, o seu sal\xe1rio l\xedquido. O sal\xe1rio l\xedquido deve ser calculado conforme segue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Caso o sal\xe1rio bruto for inferior a R$ 300,00, o sal\xe1rio l\xedquido resultante corresponde ao sal\xe1rio bruto com o desconto de 5% em impostos."),(0,a.kt)("li",{parentName:"ul"},"Caso o sal\xe1rio bruto for maior ou igual a R$ 300,00, desconta-se 15% em impostos.")),(0,a.kt)("h2",{id:"entrada-de-dados"},"Entrada de dados"),(0,a.kt)("p",null,"A entrada de dados deve ser realizada com o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt"),"."),(0,a.kt)("admonition",{title:"Saiba mais sobre Entrada de Dados",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Para saber mais sobre a entrada de dados com Prompt, acesso a se\xe7\xe3o ",(0,a.kt)("a",{parentName:"p",href:"/docs/js-linguagem/entrada-dados"},"Entrada de dados"),".")),(0,a.kt)("h2",{id:"resolu\xe7\xe3o"},"Resolu\xe7\xe3o"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mostrar Resolu\xe7\xe3o"),(0,a.kt)("iframe",{width:"100%",height:"300",src:"//jsfiddle.net/evandrofalleirosifms/1efqoaj9/2/embedded/js,result/",allowfullscreen:"allowfullscreen"})))}p.isMDXComponent=!0}}]);