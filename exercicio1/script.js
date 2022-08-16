/* 
# Exercício 1

Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.
*/

let comerCoxinha = prompt('Olá você deseja comer mais 1 coxinha?\nResponda com S (sim) ou N(não)').toUpperCase().trim()
let conta = 0
let soma = 0

while(comerCoxinha === 'S'){
    conta = conta + 2.50
    soma = soma + 1
    comerCoxinha = prompt('Olá você deseja comer mais 1 coxinha?\nResponda com S (sim) ou N(não)').toUpperCase().trim()
    }
    console.log(`Você comeu ${soma} coxinhas.\nO valor total da sua conta é R$${conta} reais`)

