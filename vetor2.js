/* Alterar o conteúdo de um vetor */

const prompt = require("prompt-sync")();
//   posição 0, 1, 2, 3, 4
let vetor = [10,20,30,40,50];

console.log("vetor atual;",vetor);

const pos = Number(prompt("Qual posição deseja alterar (0-4)"));
const valor  = Number(prompt("Digite o novo valor"));

if (pos <0 || pos > 4){
    console.log("Posição Inválida");
}else {
    vetor[pos] = valor;
    console.log("Novo vetor: ", vetor);
}