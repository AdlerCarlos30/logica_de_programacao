var numero;

do{
    numero = prompt ('Digite um número entre 1 e 20:');
} while(numero < 1 || numero > 20);

console.log (`Voce digitou o número ${numero} .`);