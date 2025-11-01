/* números -> maior e menor  */

const prompt = require("prompt-sync")();
let valores = [];
for (let i=0; i < 5; i++){
    valores.push(Number(prompt((`Digite o ${i+i}ª numero`))));
}
console.log("Maior =", Math.max(...valores));
console.log("Menor =", Math.min(...valores));