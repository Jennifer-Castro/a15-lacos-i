/*
# Exercício 2

Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
*/

// i é o valor inicial e ele começa valendo 1, a cada loop ele passa a valer o número anterior + 1 ....ex na primeira 'volta' aqui ele vai valer 1+1 e assim por diante até o 10, até o 10 pq é definido pela 2ª informação do laço for


let num = prompt('Por favor, informe um número. Vamos criar uma tabuada!')
    for(let i = 1; i <=10; i++){ 
        let tabuada = num*i
    console.log(`${num}x${i} = ${tabuada}`)
}