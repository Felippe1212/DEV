//utilizando operadores de atribuicao abreviados

let valor = 10;
valor += 5;
console.log(valor);

//strings
//comprimento de uma string

let texto = "Ola, mundo!";
console.log(texto.length);

//acesso a caracteres individuais de uma string

let texto1 = "JavaScript";
console.log(texto1[0]);
console.log(texto1[4]);

//concatenacao de strings

let saudacao = "Ola";
let nome = "Maria";
let mensagem = saudacao + "," + nome + "!";
console.log(mensagem);

//conversao para maiusculas e minusculas

let texto2 = "JavaScript";
console.log(texto2.toUpperCase());
console.log(texto2.toLowerCase());

//extracao de uma parte de uma string

let texto3 = "Ola, mundo!";
let parte = texto3.slice(5,9);
console.log(parte);