function adicionarItem(lista) {
    lista.push("Novo Item");

}

var itens = ["Item 1", "Item 2"];
adicionarItem(itens);
console.log(itens); // ["Item 1", "Item 2", "Novo Item"]



function saudacao(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);

}

saudacao(); // Olá, Visitante!
saudacao("Adler Carlos"); //Ola, Adler Carlos!



function dobrar(num) {
    valor = num * 2;
    return num;

}

var valor = 10;
console.log(dobrar(valor)); //20
console.log(valor); // 10
