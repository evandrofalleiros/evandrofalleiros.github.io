"use strict";(self.webpackChunkevandrofalleirosgh=self.webpackChunkevandrofalleirosgh||[]).push([[3209],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>f});var o=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function n(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=o.createContext({}),m=function(e){var r=o.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},d=function(e){var r=m(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=m(a),l=t,f=u["".concat(c,".").concat(l)]||u[l]||p[l]||i;return a?o.createElement(f,s(s({ref:r},d),{},{components:a})):o.createElement(f,s({ref:r},d))}));function f(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,s=new Array(i);s[0]=l;var n={};for(var c in r)hasOwnProperty.call(r,c)&&(n[c]=r[c]);n.originalType=e,n[u]="string"==typeof e?e:t,s[1]=n;for(var m=2;m<i;m++)s[m]=a[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}l.displayName="MDXCreateElement"},77294:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>m});var o=a(87462),t=(a(67294),a(3905));const i={sidebar_position:11,title:"EX11 - Compra de ma\xe7as"},s="Compra de ma\xe7as",n={unversionedId:"js-exercicios/estrutura-decisao/exercicio-11",id:"js-exercicios/estrutura-decisao/exercicio-11",title:"EX11 - Compra de ma\xe7as",description:"Nesse exerc\xedcio, queremos que voc\xea crie um programa que simula uma comprinha de ma\xe7\xe3s. A ideia \xe9 que se voc\xea comprar menos de 12 ma\xe7\xe3s, cada uma vai custar R$ 0,30. Mas, se voc\xea comprar pelo menos uma d\xfazia (12 ma\xe7\xe3s), cada uma vai custar s\xf3 R$ 0,25. Afinal, \xe9 sempre bom incentivar as pessoas a comprarem mais, n\xe9?",source:"@site/docs/js-exercicios/estrutura-decisao/exercicio-11.md",sourceDirName:"js-exercicios/estrutura-decisao",slug:"/js-exercicios/estrutura-decisao/exercicio-11",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-11",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-exercicios/estrutura-decisao/exercicio-11.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"EX11 - Compra de ma\xe7as"},sidebar:"tutorialSidebar",previous:{title:"EX10 - N\xfamero par ou \xedmpar",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-10"},next:{title:"EX12 - Sistema para sorveterias",permalink:"/docs/js-exercicios/estrutura-decisao/exercicio-12"}},c={},m=[{value:"Entrada de dados",id:"entrada-de-dados",level:2}],d={toc:m},u="wrapper";function p(e){let{components:r,...a}=e;return(0,t.kt)(u,(0,o.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"compra-de-ma\xe7as"},"Compra de ma\xe7as"),(0,t.kt)("p",null,"Nesse exerc\xedcio, queremos que voc\xea crie um programa que simula uma comprinha de ma\xe7\xe3s. A ideia \xe9 que se voc\xea comprar menos de 12 ma\xe7\xe3s, cada uma vai custar R$ 0,30. Mas, se voc\xea comprar pelo menos uma d\xfazia (12 ma\xe7\xe3s), cada uma vai custar s\xf3 R$ 0,25. Afinal, \xe9 sempre bom incentivar as pessoas a comprarem mais, n\xe9?"),(0,t.kt)("p",null,"Para fazer essa comprinha, voc\xea vai precisar entrar no programa e dizer quantas ma\xe7\xe3s quer comprar. Depois, o programa vai calcular o pre\xe7o total da compra e mostrar pra voc\xea quanto que deu. \xc9 bem simples, mas \xe9 uma forma de treinar programa\xe7\xe3o e aprender um pouco sobre como os pre\xe7os podem mudar de acordo com a quantidade de produtos que voc\xea compra."),(0,t.kt)("p",null,"Resumindo, voc\xea vai criar um programa que te ajuda a calcular o pre\xe7o da comprinha de ma\xe7\xe3s, incentivando voc\xea a comprar mais e economizar dinheiro. Legal, n\xe9?"),(0,t.kt)("h2",{id:"entrada-de-dados"},"Entrada de dados"),(0,t.kt)("p",null,"A entrada de dados deve ser realizada com o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"prompt"),"."),(0,t.kt)("admonition",{title:"Saiba mais sobre Entrada de Dados",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Para saber mais sobre a entrada de dados com Prompt, acesso a se\xe7\xe3o ",(0,t.kt)("a",{parentName:"p",href:"/docs/js-linguagem/entrada-dados"},"Entrada de dados"),".")))}p.isMDXComponent=!0}}]);