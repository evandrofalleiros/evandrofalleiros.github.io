"use strict";(self.webpackChunkevandrofalleirosgh=self.webpackChunkevandrofalleirosgh||[]).push([[7457],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>g});var r=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=r.createContext({}),i=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},m=function(e){var a=i(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=i(o),c=t,g=p["".concat(l,".").concat(c)]||p[c]||u[c]||n;return o?r.createElement(g,s(s({ref:a},m),{},{components:o})):r.createElement(g,s({ref:a},m))}));function g(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,s=new Array(n);s[0]=c;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d[p]="string"==typeof e?e:t,s[1]=d;for(var i=2;i<n;i++)s[i]=o[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},38498:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>i});var r=o(87462),t=(o(67294),o(3905));const n={sidebar_position:5},s="Entrada e sa\xedda de dados",d={unversionedId:"js-linguagem/entrada-dados",id:"js-linguagem/entrada-dados",title:"Entrada e sa\xedda de dados",description:"At\xe9 ent\xe3o, os exemplos de opera\xe7\xf5es que foram apresentados envolveram a entrada de dados por meio de atribui\xe7\xe3o direta de valores, como nesse exemplo:",source:"@site/docs/js-linguagem/entrada-dados.md",sourceDirName:"js-linguagem",slug:"/js-linguagem/entrada-dados",permalink:"/docs/js-linguagem/entrada-dados",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/js-linguagem/entrada-dados.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Operadores L\xf3gicos",permalink:"/docs/js-linguagem/tipos/operadores-logicos"},next:{title:"Exerc\xedcios",permalink:"/docs/category/exerc\xedcios"}},l={},i=[{value:"Entrada por meio do prompt",id:"entrada-por-meio-do-prompt",level:2},{value:"Entrada por meio de formul\xe1rios HTML",id:"entrada-por-meio-de-formul\xe1rios-html",level:2}],m={toc:i},p="wrapper";function u(e){let{components:a,...o}=e;return(0,t.kt)(p,(0,r.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"entrada-e-sa\xedda-de-dados"},"Entrada e sa\xedda de dados"),(0,t.kt)("p",null,"At\xe9 ent\xe3o, os exemplos de opera\xe7\xf5es que foram apresentados envolveram a entrada de dados por meio de atribui\xe7\xe3o direta de valores, como nesse exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"let nomeSalada = 'Salada Top Dallas';\n")),(0,t.kt)("p",null,"Mas, esse tipo de atribui\xe7\xe3o, apesar de funcionar e ser a primeira maneira que conhecemos para a entrada de dados/valores, sempre \xe9 realizada somente no c\xf3digo-fonte que voc\xea est\xe1 criando. Na vida real, esse nome de salada, por exemplo, seria digitado em um formul\xe1rio web. Por enquanto, n\xe3o precisamos ir t\xe3o a fundo, pois, estamos no b\xe1sico do b\xe1sico, lembra?! Sendo assim, vamos com uma solu\xe7\xe3o paliativa, que nos permite solicitar dados para quem estar\xe1 executando nossos programas."),(0,t.kt)("p",null,"A ",(0,t.kt)("strong",{parentName:"p"},"entrada de dados")," b\xe1sica em JavaScript pode ser feita por meio de diversos m\xe9todos/comandos. Os mecanismos mais comuns s\xe3o:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Entrada de texto pelo ",(0,t.kt)("strong",{parentName:"li"},"prompt()")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Input (",(0,t.kt)("inlineCode",{parentName:"strong"},"<input>"),")")," ou outros elementos de entrada em formul\xe1rios HTML;")),(0,t.kt)("p",null,"J\xe1 a sa\xedda de dados, a forma com a qual os resultados s\xe3o apresentados em tela, pode ser realizada no console do navegador conforme segue:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Sa\xedda de texto no console do navegador web por meio do m\xe9todo ",(0,t.kt)("strong",{parentName:"li"},"console.log()"),";"),(0,t.kt)("li",{parentName:"ul"},"Sa\xedda de texto de alerta no navegador web por meio do m\xe9todo ",(0,t.kt)("strong",{parentName:"li"},"alert()"),";"),(0,t.kt)("li",{parentName:"ul"},"Sa\xedda no documento HTML por meio do m\xe9todo ",(0,t.kt)("strong",{parentName:"li"},"document.write()"),";")),(0,t.kt)("p",null,"Esses comandos de entrada e seguida ser\xe3o descritos e exemplificados a seguir. "),(0,t.kt)("admonition",{title:"Cuidados com rela\xe7\xe3o \xe0 Entrada de Dados",type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"A entrada de dados \xe9 um processo cr\xedtico em qualquer sistema ou aplicativo, pois a precis\xe3o, a integridade e a consist\xeancia dos dados inseridos podem afetar diretamente a qualidade das informa\xe7\xf5es geradas pelo sistema. Por isso, \xe9 importante ",(0,t.kt)("strong",{parentName:"p"},"garantir que os dados sejam inseridos corretamente e de forma segura"),", utilizando m\xe9todos de valida\xe7\xe3o e verifica\xe7\xe3o para evitar erros e inconsist\xeancias. Ainda n\xe3o vamos conseguir nos primeiro exemplos de estudo resolver esse problemas. Contudo, precisamos ter ci\xeancia de que esse cuidado \xe9 essencial. ")),(0,t.kt)("h2",{id:"entrada-por-meio-do-prompt"},"Entrada por meio do prompt"),(0,t.kt)("p",null,"O ",(0,t.kt)("strong",{parentName:"p"},"prompt()")," \xe9 uma fun\xe7\xe3o que exibe uma caixa de di\xe1logo ao usu\xe1rio com uma mensagem e um campo de entrada. O usu\xe1rio pode digitar um valor nesse campo e pressionar OK ou Cancelar. O valor digitado \xe9 ent\xe3o retornado como uma string. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let nomeSalada = prompt("Nome da salada");\nlet valorSalada = +prompt("Valor da salada");\nconsole.log("Salada " + nomeSalada + " criada com sucesso! Seu valor \xe9 R$ " + valorSalada);\n')),(0,t.kt)("p",null,"Nesse exemplo, as seguintes a\xe7\xf5es acontecem em sequ\xeancia:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"o ",(0,t.kt)("strong",{parentName:"li"},"prompt"),' exibe a mensagem "Nome da salada" e o usu\xe1rio pode digitar o nome da salada que deseja cadastrar;'),(0,t.kt)("li",{parentName:"ul"},"o nome da salada \xe9 atribu\xeddo e armazenado na vari\xe1vel ",(0,t.kt)("strong",{parentName:"li"},"nomeSalada"),";"),(0,t.kt)("li",{parentName:"ul"},"o ",(0,t.kt)("strong",{parentName:"li"},"prompt"),' exibe a mensagem "Valor da salada" e o usu\xe1rio pode digitar o valor da salada que est\xe1 cadastrando;'),(0,t.kt)("li",{parentName:"ul"},"o valor da salada \xe9 atribu\xeddo e armazenado na vari\xe1vel ",(0,t.kt)("strong",{parentName:"li"},"nomeSalada"),". Note que aqui acontece a ",(0,t.kt)("strong",{parentName:"li"},"coer\xe7\xe3o de valores")," com o ",(0,t.kt)("strong",{parentName:"li"},"operador +"),". Vale lembrar que o retorno do ",(0,t.kt)("strong",{parentName:"li"},"prompt")," \xe9 sempre um valor textual (String). Ent\xe3o, precisamos transformar o texto retornado em um valor num\xe9rico;"),(0,t.kt)("li",{parentName:"ul"},"Por fim, mostramos no ",(0,t.kt)("strong",{parentName:"li"},"console do navegador")," (console.log) uma mensagem concatenada. ")),(0,t.kt)("p",null,"Essa solu\xe7\xe3o pode ser um pouco melhor caso utilizarmos Templates Strings, conforme apresentamos na se\xe7\xe3o ",(0,t.kt)("a",{parentName:"p",href:"docs/js-linguagem/tipos-dados-variaveis"},"Tipos de dados e Vari\xe1veis"),". A mensagem concatenada que colocamos no ",(0,t.kt)("strong",{parentName:"p"},"console")," \xe9 confusa, pois concatena muita coisa de uma vez s\xf3. Imagine se, ao inv\xe9s de duas vari\xe1veis, tiv\xe9ssemos diversas outras referentes \xe0 salada que est\xe1 sendo cadastrada? Essa string concatenada seria gigantesca e confusa. "),(0,t.kt)("p",null,"Ent\xe3o, segue uma solu\xe7\xe3o com ",(0,t.kt)("strong",{parentName:"p"},"Template String"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let nomeSalada = prompt("Nome da salada");\nlet valorSalada = +prompt("Valor da salada");\n\nconsole.log(`\n    Salada: ${nomeSalada} criada com sucesso!\n    Seu valor \xe9 R$ ${valorSalada}\n`);\n')),(0,t.kt)("p",null,"Voc\xea n\xe3o concorda que essa solu\xe7\xe3o \xe9 bem mais elegante e f\xe1cil de se manter ao longo do tempo? Qualquer nova vari\xe1vel que precisarmos mostrar nesse resultado no ",(0,t.kt)("strong",{parentName:"p"},"console")," pode ser facilmente inserida. Vamos fazer isso pra lhe provar de vez que essa solu\xe7\xe3o \xe9 bem mais eficaz:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'let nomeSalada = prompt("Nome da salada");\nlet ingredientes = prompt("Ingredientes da salada");\nlet valorSalada = +prompt("Valor da salada");\n\nconsole.log(`\n    Salada: ${nomeSalada} criada com sucesso!\n    Ingredientes: ${ingredientes}\n    Seu valor \xe9 R$ ${valorSalada}\n`);\n')),(0,t.kt)("admonition",{title:"C\xf3digo fonte no JSFiddle",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Se quiser testar esse c\xf3digo agora no editor online JSFiddle, ",(0,t.kt)("a",{parentName:"p",href:"https://jsfiddle.net/evandrofalleirosifms/8hn0yjd7/3/"},"acesse aqui o link para a implementa\xe7\xe3o.")," Contudo, n\xe3o se esque\xe7a de voltar aqui para continuar a leitura.")),(0,t.kt)("h2",{id:"entrada-por-meio-de-formul\xe1rios-html"},"Entrada por meio de formul\xe1rios HTML"),(0,t.kt)("p",null,"O input de formul\xe1rio \xe9 uma forma mais avan\xe7ada de entrada de dados que permite ao usu\xe1rio preencher campos de um formul\xe1rio HTML. N\xe3o se preocupe com isso agora, mas, queremos lhe mostrar que isso existe e que funciona bem tamb\xe9m. "),(0,t.kt)("p",null,"Nessa abordagem, o JavaScript pode acessar os campos atrav\xe9s do DOM (Document Object Model) para recuperar os valores digitados. \xc9 algo que, no futuro, voc\xea precisar\xe1 estudar. Mas, vamos ver esse exemplo logo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<form>\n  <label for="nome-salada">Nome da Salada:</label>\n  <input type="text" id="nome-salada">\n  <label for="nome-salada">Valor da Salada:</label>\n  <input type="number" id="valor-salada">\n  <input type="button" onclick="cadastrarSalada()" value="Cadastrar">\n</form>\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="script.js"',title:'"script.js"'},'function cadastrarSalada() {\n  let nomeSalada = document.getElementById("nome-salada").value;\n  let valorSalada = document.getElementById("valor-salada").value;\n  \n    console.log(`\n    Nome da Salada: ${nomeSalada}\n    Valor da Salada: ${valorSalada}\n  `)\n}\n')),(0,t.kt)("admonition",{title:"C\xf3digo fonte no JSFiddle",type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Novamente, se quiser testar esse c\xf3digo no editor online JSFiddle, ",(0,t.kt)("a",{parentName:"p",href:"https://jsfiddle.net/evandrofalleirosifms/utx6d7q5/9/"},"acesse aqui o link para a implementa\xe7\xe3o."),"  ")),(0,t.kt)("p",null,"Note que o formul\xe1rio na aba HTML cont\xe9m dois campos de entrada (um para texto e um para valor num\xe9rico) e um bot\xe3o que chama a fun\xe7\xe3o ",(0,t.kt)("strong",{parentName:"p"},"cadastrarSalada()")," quando clicado. Essa fun\xe7\xe3o recupera os valores digitados nos campos de entrada atrav\xe9s da propriedade ",(0,t.kt)("strong",{parentName:"p"},"value")," do elemento e exibe uma mensagem de confirma\xe7\xe3o no console do navegador."),(0,t.kt)("p",null,"Como hav\xedamos lhe tranquilizado, essa abordagem \xe9 mais avan\xe7ada. Para a sequ\xeancia deste material, vamos utilizar o ",(0,t.kt)("strong",{parentName:"p"},"prompt")," por bastante tempo. Vale lembrar que existem muitas outras formas de interagir com o usu\xe1rio e receber informa\xe7\xf5es em uma aplica\xe7\xe3o web."))}u.isMDXComponent=!0}}]);