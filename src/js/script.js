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