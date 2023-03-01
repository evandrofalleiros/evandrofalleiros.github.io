# Introdução à linguagem JavaScript
_Disciplina: Fundamentos de Lógica e Programação de Computadores_

_Prof. Me. Evandro Luís Souza Falleiros_
_Profa. Me. Nátalli Macedo Rodrigues Falleiros_

## O que é JavaScript

JavaScript é a linguagem de programação web mais conhecida (e incompreendida) do mundo. Foi criada em 1995 por Brendan Eich, um engenheiro da Netscape, e lançada pela primeira vez com o Netscape 2 no início de 1996.

Foi inicialmente chamada de LiveScript, mas logo foi rebatizada, em uma decisão de marketing malfeita, para tentar crescer sobre a popularidade da linguagem Java da Sun Microsystem - apesar das duas terem muito pouco em comum. Esta tem sido uma fonte de confusão desde então.

## Onde JavaScript pode ser executado

Diferentemente da maioria das linguagens de programação, a linguagem JavaScript não possui o conceito de entrada e saída. Ela é projetada para funcionar como uma linguagem de script em um ambiente de terceiros, e cabe ao ambiente fornecer mecanismos para a comunicação com o mundo exterior. O ambiente de terceiros (hospedeiro) mais comum é o navegador web, mas interpretadores JavaScript também pode ser encontrados no Adobe Acrobat, Photoshop, imagens SVG, bem como em ambientes de servidor, como Node.js. No entanto, a lista aqui apresentada das áreas nas quais a JavaScript é utilizada é apenas o começo.

## Quais ferramentas vamos utilizar

Para iniciar nossos estudos com JavaScript precisamos de poucas ferramentas. Um bom editor de texto e um bom navegador Web são suficientes para que você comece a praticar e programar utilizando JavaScript.

**Editor de texto:** [Sublime Text 3](https://www.sublimetext.com/3)
**Navegador Web:** [Google Chrome](https://www.google.com.br/chrome/browser/desktop/)

## Tipos de dados

Vamos começar pelo bloco de construção de qualquer linguagem: os tipos. Programas JavaScript manipulam valores, e esses valores todos pertencem a um tipo. Os principais tipos de dados JavaScript são:

    Number: valores numéricos
    String: textos, sequência de caracteres
    Boolean: valores booleanos (verdadeiro e falso)
    Function: funções
    Object: Objetos

Existem outros dois tipos que, no momento, parecerão estranhos: 'indefinido' e 'nulo'. Mas, esses dois tipos serão abordados em um outro momento. Existem, também, alguns tipos para erros. Contudo, as coisas são muito mais fáceis se ficarmos com a primeira lista.

## Operações matemáticas _(+, -, *, /, %)_

Os operadores numéricos padrões são suportados, incluindo adição, subtração, módulo (ou resto) aritmético e assim por diante.

### Adição (+)

A operação de adição envolve dois operandos e resulta na diferença entre o primeiro e o segundo operando identificados. Ex:

	// Number + Number -> Adição
	1 + 2 // 3

	// Boolean + Number -> Adição
	true + 1 // 2

	// Boolean + Boolean -> Adição
	false + false // 0

	// Number + String -> Concatenação
	5 + "texto" // "5texto"

	// String + Boolean -> Concatenação
	"texto" + false // "textofalse"

	// String + String -> Concatenação
	"texto" + " qualquer" // "texto qualquer"

### Subtração (-)

A operação de subtração envolve dois operandos e resulta na diferença entre o primeiro e o segundo operando identificados. Ex:

	5 - 3 // 2
	3 - 5 // -2
	"texto" - 3 // NaN (Not a Number: não é um número)

### Divisão (/)

O operador de divisão produz o quociente de seus operandos, onde o operando da esquerda é o dividendo e o da direita é o divisor. Ex:

	1 / 2      // retorna 0.5 em JavaScript
	1 / 2      // retorna 0 em Java 
	// (nenhum dos números é explicitamente um número de ponto flutuante)

	1.0 / 2.0  // retorna 0.5 em JavaScript e Java

	2.0 / 0    // retorna Infinity em JavaScript
	2.0 / 0.0  // retorna Infinity também
	2.0 / -0.0 // retorna -Infinity em JavaScript

### Multiplicação (*)

O operador de multiplicação produz o produto dos operandos. Ex:

	2 * 2 // 4
	-2 * 2 // -4
	Infinity * 0 // NaN 
	Infinity * Infinity // Infinity
	"texto" * 2 // NaN

### Módulo (%)

A função módulo é capaz de retornar o resto inteiro da divisão entre dois operandos. Ex:

	12 % 5 // 2
	-1 % 2 // -1
	NaN % 2 // NaN


### Operações matemáticas avançadas

Há também um objeto embutido na linguagem, chamado Math, capaz de manipular funções e constantes matemáticas mais avançadas. Ex:

	Math.PI // retorna o valor de PI
	Math.sin(3.5); // seno de 3.5
	Math.cos(3.5); // cosseno de 3.5
	Math.random(); // retorna um valor randômico
	Math.sqrt(25) // retorna o valor referente à raiz quadrada de 25

## Conversões _(parseInt, parseFloat, +)_

Em diversas situações de entrada de dados, precisamos converter dados textuais para formatos numéricos. A seguir, alguns exemplos são listados:

	parseInt('10') // tranforma o texto '10' no valor inteiro 10
	parseFloat('10') // tranforma o texto '10' no valor decimal (com ponto flutuante) 10

Você também pode usar o operador unário + para converter valores em números. Ex:

	+'3.1415' // 3.1415 como valor numérico flutuante

## Strings

Strings, em JavaScript, são sequências de caracteres (texto em geral). A representação de Strings em JavaScript se dá por meio da utilização de aspas simples ou aspas duplas. Ex:

	'Texto qualquer' // string com 14 caracteres (espaço conta como um caractere)
	"Texto qualquer" // também é uma string
	'Texto ' + 'qualquer' // concatenação de Strings

As Strings são objetos JavaScript que tem diversas funcionalidades implementadas que nos auxiliam a manipular textos. Ex:

	"olá".charAt(0) // retorna 'o'
	"olá, mundo".replace("olá", "adeus") // retorna 'adeus, mundo'
	"olá".toUpperCase() // retorna OLÁ

## Operadores de comparação

JavaScript nos disponibiliza alguns operadores lógicos de comparação:

	==   // Igual a 
	!=   // Diferente de 
	===  // Idêntico a (igual e do mesmo tipo) 
	!==  // Não Idêntico a 
	>    // Maior que 
	>=   // Maior ou igual a 
	<    // Menor que 
	<=   // Menor ou igual a 

## Variáveis e atribuição de valores

Em JavaScript, as variáveis são declaradas por meio da palavra chave var. Vale ressaltar que JavaScript é uma linguagem de tipagem dinâmica e, diferente de outras linguagens, não há a necessidade de se explicitar o tipo de cada variável no momento da sua declaração. O tipo da variável é definido implicitamente pelo seu valor. Ex:

	var a;
	var curso = 'Informática para Internet';
	var phi = 1.618;

Se você declarar uma variável sem atribuir qualquer valor a ela, seu tipo será **_undefined_**. 

Criando um comparativo com as estruturas trabalhadas com Português Estruturado, temos que

	var 
		x: inteiro;
	x ← 10;

é equivalente a:

	var x;
	x = 10;

Vale ressaltar que, em JavaScript, **as variáveis tem tipagem dinâmica**. Dessa forma, não precisamos nos preocupar com os tipos das variáveis, uma vez que o tipo é atribuído automaticamente. Também note que o sinal **←** é substituído por **=**. O sinal de igual (**=**), em JavaScript, representa **atribuição** de dados.

A atribuição de dados também pode ser feita de forma direta, já no momento da declaração da variável:
	
	var x = 2;
	var y = 3;

## Comandos de entrada e saída

Conforme mencionado no início deste material, a linguagem JavaScript não possui o conceito de entrada e saída. A entrada e saída de dados compete, na verdade, ao mecanismo hospedeiro (Navegador Web, por exemplo). 

A seguir, listamos alguns dos mecanismos disponibilizados pelos navegadores web mais conhecidos:
	
	// Mensagem de alerta no navegador
	alert('Instituto Federal de Mato Grosso do Sul - Campus Dourados');

	// Comando híbrido, de entrada e saída de dados
	var nome = prompt('Digite seu nome');

Aqui vale ressaltar que o comando _prompt_ tem dupla função, uma vez que mostra uma janela de entrada de dados já com uma mensagem de texto (saída). Como analogia, podemos comparar o comando _prompt_ com uma sequência estruturada em Português Estruturado:

	// entrada e saída com Português Estruturado
	escreva('Digite um valor');
	leia(valor);

	// entrada e saída com prompt
	valor = prompt('Digite um valor');

Um outro comando importante para depuração do código fonte JavaScript é o comando de saída _console.log()_. Esse comando é capaz de escrever mensagens no _console_ dos Navegadores Web.
	
	valor = prompt('Digite um valor');
	console.log('Valor lido: ' + valor);

## Estrutura de decisão

Estruturas de decisão nos auxiliam a controlar e decidir a sequência de execução de nossos algoritmos quando consideramos condições específicas. Em JavaScript, uma estrutura de decisão é organizada conforme a seguinte sintaxe:

	if (condicao) {
		// instruções que devem ser executadas
		// quando a condição é verdadeira (true)
	} else {
		// instruções que devem ser executadas
		// quando a condição é falsa (false)
	}

Vale ressaltar que o bloco de instruções _else_ é facultativo, dependendo do problema a ser resolvido.

Como exemplo prático e comparativo, vamos trabalhar sobre o seguinte algoritmo:

> Crie um algoritmo para determinar se uma pessoa é maior de idade ou não.
> Emita uma mensagem de texto informando a situação desta pessoa

** Português Estruturado **

	algoritmo maiorIdade;
	var
		idade: inteiro;
	inicio
		escreva('Digite sua idade');

		se (idade >= 18) então
			escreva('Maior de idade');
		senão
			escreva('Menor de idade');
		fim-se
	fim

** JavaScript **
	
	var idade = prompt('Digite sua idade')
	if (idade >= 18){
		alert('Maior de idade');
	}else{
		alert('Menor de idade')
	}

## Guia de resolução de erros

A seguir, elencamos alguns pontos usualmente relatados durante as aulas de programação. É comum, nesse processo de introdução à uma nova linguagem de programação, os estudantes enfrentarem alguns problemas. Vale ressaltar, inicialmente, que:

- O erro, muitas vezes, não é do navegador!
	- Queremos que você tenha autonomia para a detecção, prevenção e correção dos seus erros.
- Anote o que é discutido e demonstrado no seu caderno ou em um documento virtual.
	- Vale ressaltar que este material não tem tudo que você precisa saber. Trata-se de um guia introdutório sobre JavaScript.
	- Lembre-se, a fala do professor também é material de aula. Anote!
- Não é responsabilidade do professor a integridade do seu código.
	- Você escreve, mantém e executa!
	- O papel do professor, em sala de aula, é mediar o conhecimento.

### Frase típicas e as respostas para seus problemas

- **Professor, o meu código não está funcionando** 

O que é não funcionar? O termo funcionar é muito relativo. Nada foi executado, ou parte? A saída de dados não está de acordo com o planejado? Lembre-se: foi você quem escreveu o código. Ninguém melhor do que você para entendê-lo e corrigí-lo. 

Dessa forma recomenda-se que você faça a depuração do seu código, ou seja, reveja a execução linha a linha. Busque as instruções que provavelmente estão causando um erro e corrija o que for necessário. O próprio navegador web é capaz de indicar em qual linha do seu código o erro está sendo lançado.

Uma outra questão importante a ser tratada é sobre a sintaxe do código escrito. Você deve conferir, constantemente, se digitou corretamente as instruções. Ex:

	var x = 10;
	Alert(x); // não funciona

O código mostrado anteriormente não funciona, visto que o comando **Alert** não é reconhecido pelo navegador. O correto é utilizar o comando **alert**, com **a** minúsculo. A linguagem JavaScript sabe diferenciar letras maiúsculas de minúsculas.

- **Professor, ele está somando errado**

Ele quem? O navegador ou você? Quase sempre, o erro é lógico, ou seja, seu! Não culpe o computador por excutar uma lógica que você projetou. Corrija a sua lógica, pois o nagevador web apenas executou o que você pediu (instruções de código). 

- **Professor, não estou conseguindo executar meu código**

Combinamos, na primeira aula, que iremos criar nossos códigos em arquivos HTML (arquivos com a extensão .html). Dessa forma, todo novo exercício a ser resolvido deve ser implementado em um novo arquivo .html com o seguinte formato:

	<script>
		// seu código deve estar dentro da tag <script>
		// salve seu arquivo com a extensão .html no final
	</script>

Para executar seu arquivo, você deve encontrá-lo no seu computador e acessá-lo (com dois cliques sobre o arquivo) em um navegador web. Dê preferência ao navegador Google Chrome, pois este é o navegador usado pelo professor. Se você salvar o seu arquivo com uma extensão diferente de .html, é provável que seu código não execute.

## Códigos de exemplo

[Exemplos](https://github.com/falleiros/falleiros.github.io/tree/master/exemplos)

## Exercícios

1. Faça um algoritmo que recebe como entrada de dados dois valores numéricos e exibe o resultado da soma destes dois valores.
2. Faça um algoritmo que recebe como entrada de dados um valor numérico e informa se este valor está em um intervalo de 0 a 1000;
3. Elaborar um algoritmo que é capaz de converter em Real (R$) uma quantia dada em Dólar ($). Este algoritmo deve solicitar ao usuário o valor da cotação diária do Dólar.
4. Ao ler dois valores numéricos distintos, indique a diferença entre o maior e o menor valor lidos. Crie um algoritmo que representa uma possível solução para o problema.
5. Desenvolva um algoritmo que seja capaz de encontrar o maior dentre 3 (três) números quaisquer dados como entrada de dados. 
6. Construa um algoritmo que recebe, como entrada de dados, o salário bruto de um funcionário e retorna, como saída de dados, o seu salário líquido. O salário líquido deve ser calculado conforme segue:
	- Caso o salário bruto for inferior a R$ 300,00, o salário líquido resultante corresponde ao salário bruto com o desconto de 5% em impostos. 
	- Caso o salário bruto for maior ou igual a R$ 300,00, desconta-se 15% em impostos.
7. João Bacurí costuma pescar no pesqueiro Rio Aberto. Considere que o pesqueiro estabeleceu que, independente do tipo de peixe, cobra-se R$ 9.90 (nove reais e noventa centavos) por quilo de pescado. Faça um algoritmo que, dado o peso (em quilogramas) de pescado, é capaz de mostrar o valor final a ser cobrado com desconto. As seguintes regras de desconto são utilizadas no ato de cobrança:
	- O pescado que pesar até 2.9Kg não tem desconto no valor final; 
	- O pescado que pesar 3Kg ou mais, ganha 5% de desconto no valor final. 
8. Faça um algoritmo que recebe como entrada de dados a idade de uma pessoa expressa em anos, meses e dias e retorna como saída de dados a idade expressa apenas em dias. Assuma que todos os meses do ano tem 30 dias.

9. Faça um algoritmo que leia o tempo de duração de um evento expresso em minutos e retorne, como saída de dados, o tempo de duração expresso em horas e minutos, no formato hh:mm (ex: 80min é equivalente à 01h:20m).

Dica: A matemática é sua amiga! Use-a, sem moderação. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

10.  Faça um algoritmo que leia uma temperatura em graus Celsius e apresente-a
convertida em graus Fahrenheit. A fórmula de conversão é: F = (9 * C + 160) / 5,
na qual F é a temperatura em Fahrenheit e C é a temperatura em Celsius; 
11. Faça um algoritmo que leia a velocidade de um veículo em km/h e calcule e
imprima a velocidade em m/s (metros por segundo). 	




**Fonte:** [A reintroduction to JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript)