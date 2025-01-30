//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const insereAmigo = document.getElementById("amigo");
  const nome = insereAmigo.value.trim();
  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    insereAmigo.value = "";
    atualizarListaAmigos();
  } else {
    alert("Por favor, insira um nome válido e que não esteja na lista.");
  }
}
// Função para atualizar a lista
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}
// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos 2 amigos para fazer o sorteio!");
    return;
  }

  // Embaralha a lista de amigos
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Seu amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

  // Remover o amigo sorteado da lista para evitar repetições
  amigos = amigos.filter((amigo) => amigo !== amigoSorteado);
  atualizarListaAmigos();
}
