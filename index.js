const prompt = require('prompt-sync')
  const entrada = prompt('');

const nomeCompleto = "Maria Clara";
const anoNascimento = 2007;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2030;

console.log("Olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + "e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando direito, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris China Russia Cuba
console.log(" ")
console.log("----------------------------")
console.log("-----Agencia de viagens-----")
console.log("----------------------------")
console.log(" ")
const listaDeDestinos = new Array(
  "Hawaii",
  "Rio de Janeiro",
  "Tokyo",
  "Paris",
  "Miami"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Campo Mourão");
console.log*(listaDeDestinos);
listaDeDestinos.push("Ponta grossa");
console.log(listaDeDestinos);
listaDeDestinos.push("Cabo Frio");
console.log(listaDeDestinos);


const loginCerto = "Maria";
const senhaCerta = 2007;
var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");
while(login != loginCerto || senha != senhaCerta){
  console.log("Login ou senhas incorretas");
   login = entrada("Qual é o seu login");  
  senha = entrada("Qual é a sua senha?");
}

var nomeComprador = entrada("Qual seu nome?");  
var idadeComprador = entrada("Qual sua idade?");
if(idadeComprador >= 18) {
  console.log("Ola Senhor(a) " + nomeComprador)
  console.log("Comprador maior de idade");
  console.log("Destinos disṕniveis: " + listaDeDestinos)
}
if(idadeComprador <= 18)
console.log("O senhor(a)não é maior de idade")

var contador= 0;
while(contador <9){
console.log(listaDeDestinos[contador]);  
  contador++;


}
var destino = entrada("Digite um numero que corresponde ao destino(0-8)");
console.log(`destino selecionado: ${listaDeDestinos[destino]}`);
