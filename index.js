let idade = 28;
const anoNascimento = 1995;
let anoAtual = 2024;
const nomeCompleto = "Lucas Stasiak";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " +anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//Agência de viagens Hawaii Paris Nova York Rio de Janeiro Tóquio 
const listaDeDestinos = new Array(
  "Hawaii",
  "Paris",
  "Nova York",
  "Rio de Janeiro",
  "Tóquio"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
listaDeDestinos.push("Curitiba");
listaDeDestinos.push("Madrid");
listaDeDestinos.push("Berlin");
console.log(listaDeDestinos);
