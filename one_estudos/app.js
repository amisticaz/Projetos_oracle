//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

