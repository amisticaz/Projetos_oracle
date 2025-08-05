//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo"); // Corrigido
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
  const lista = document.getElementById("listaAmigos"); // Corrigido
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let sorteio = [];

  for (let i = 0; i < amigos.length; i++) {
    let sorteado;
    do {
      sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteado === amigos[i] || sorteio.includes(sorteado));
    sorteio.push(sorteado);
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = `${amigos[i]} → ${sorteio[i]}`;
    resultado.appendChild(item);
  }
}
