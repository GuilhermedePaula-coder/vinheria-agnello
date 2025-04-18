// Aviso inicial
alert("Bem-vindo ao sistema da Vinheira Agnello! Vamos cadastrar um vinho.");

// ===== Cadastro do Vinho ===== //

// Nome do vinho
var nomeVinho = prompt("Por favor, informe o nome do vinho:");
while (!nomeVinho) {
  nomeVinho = prompt("Campo obrigatório! Informe o nome do vinho:");
}
// Tipo do vinho
var tipoVinho = prompt("Informe o tipo do vinho (Tinto, Branco ou Rosé):");
while (!tipoVinho) {
  tipoVinho = prompt("Campo obrigatório! Informe o tipo do vinho (Tinto, Branco ou Rosé):");
}
// Informando a safra do vinho
var safra = prompt("Informe o ano da safra (ex: 2018):");
while (!safra) {
  safra = prompt("Campo obrigatório! Informe o ano da safra (ex: 2018):");
}
//  Informando o estoque
var quantidadeEstoque = prompt("Informe a quantidade em estoque:");
while (!quantidadeEstoque) {
  quantidadeEstoque = prompt("Campo obrigatório! Informe a quantidade em estoque:");
}
// Confirmação do cadastro 
alert("Cadastro realizado com sucesso! Veja os detalhes no console.");

// Aviso do usuario 
alert("A seguir, veja os detalhes do vinho no console.");
// ===== console ===== //
console.log("===== Detalhes do Vinho Cadastrado =====");
console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo do vinho: " + tipoVinho);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidadeEstoque);

// =====  Estoque ===== //
if (quantidadeEstoque < 5) {
  console.log("⚠️ ESTOQUE BAIXO");
}

// =====  Safra ===== //
if (safra >= 2020) {
  console.log("Classificação da safra: Vinho jovem");
} else if (safra >= 2015 && safra <= 2019) {
  console.log("Classificação da safra: Vinho amadurecido");
} else if (safra < 2015) {
  console.log("Classificação da safra: Vinho antigo");
}

console.log("========================================");
