/* ==============================================================================
   GABARITO DO PROFESSOR • AULA 03
   Unidade Curricular: Interação com APIs (SENAI)
   Código completo usando JavaScript puro e .innerText
   ============================================================================== */

// ==============================================================================
// 1. FEITO EM CONJUNTO COM OS ALUNOS (Primeira Requisição)
// ==============================================================================
async function buscarProduto() {
  const url = "https://api.escuelajs.co/api/v1/products/1";
  const resposta = await fetch(url);
  const produto = await resposta.json();
  console.log("Produto recebido:", produto);

  document.getElementById("titulo").innerText = produto.title;
  document.getElementById("preco").innerText = "Preço: $ " + produto.price;
  document.getElementById("descricao").innerText = produto.description;
}

document.getElementById("btn-buscar").addEventListener("click", buscarProduto);


// ==============================================================================
// 2. EXERCÍCIO 01: Buscar Produto por ID
// ==============================================================================
async function buscarProdutoPorId() {
  const id = document.getElementById("input-id").value;
  if (id === "") {
    alert("Digite o número do ID!");
    return;
  }

  const url = "https://api.escuelajs.co/api/v1/products/" + id;
  const resposta = await fetch(url);
  const produto = await resposta.json();
  console.log("Produto por ID:", produto);

  document.getElementById("ex1-titulo").innerText = produto.title;
  document.getElementById("ex1-preco").innerText = "Preço: $ " + produto.price;
  document.getElementById("ex1-descricao").innerText = produto.description;
}

document.getElementById("btn-buscar-id").addEventListener("click", buscarProdutoPorId);


// ==============================================================================
// 3. EXERCÍCIO 02: Consultar Endereço por CEP (ViaCEP)
// ==============================================================================
async function consultarCep() {
  const cep = document.getElementById("input-cep").value;
  if (cep.length !== 8) {
    alert("Digite um CEP com 8 números!");
    return;
  }

  const url = "https://viacep.com.br/ws/" + cep + "/json/";
  const resposta = await fetch(url);
  const dados = await resposta.json();
  console.log("Dados do CEP:", dados);

  document.getElementById("cep-rua").innerText = "Rua: " + (dados.logradouro || "Não informado");
  document.getElementById("cep-bairro").innerText = "Bairro: " + (dados.bairro || "Não informado");
  document.getElementById("cep-cidade").innerText = "Cidade / UF: " + dados.localidade + " / " + dados.uf;
}

document.getElementById("btn-buscar-cep").addEventListener("click", consultarCep);


// ==============================================================================
// 4. EXERCÍCIO 03: Buscar Categoria por ID
// ==============================================================================
async function buscarCategoria() {
  const id = document.getElementById("input-cat-id").value;
  if (id === "") {
    alert("Digite o ID da categoria!");
    return;
  }

  const url = "https://api.escuelajs.co/api/v1/categories/" + id;
  const resposta = await fetch(url);
  const categoria = await resposta.json();
  console.log("Categoria:", categoria);

  document.getElementById("cat-nome").innerText = "Nome da Categoria: " + categoria.name;
}

document.getElementById("btn-buscar-cat").addEventListener("click", buscarCategoria);



// ==============================================================================
// 5. EXERCÍCIO 04: Buscar Usuário por ID
// ==============================================================================
async function buscarUsuario() {
  const id = document.getElementById("input-user-id").value;
  if (id === "") {
    alert("Digite o ID do usuário!");
    return;
  }

  const url = "https://api.escuelajs.co/api/v1/users/" + id;
  const resposta = await fetch(url);
  const usuario = await resposta.json();
  console.log("Usuário:", usuario);

  document.getElementById("user-nome").innerText = "Nome: " + usuario.name;
  document.getElementById("user-email").innerText = "E-mail: " + usuario.email;
  document.getElementById("user-perfil").innerText = "Perfil: " + usuario.role;
}

document.getElementById("btn-buscar-user").addEventListener("click", buscarUsuario);


// ==============================================================================
// 6. EXERCÍCIO 05: Lista de Produtos (quantidade e primeiro item)
// ==============================================================================
async function buscarListaProdutos() {
  const url = "https://api.escuelajs.co/api/v1/products?limit=10&offset=0";
  const resposta = await fetch(url);
  const produtos = await resposta.json();
  console.log("Lista:", produtos);

  document.getElementById("lista-quantidade").innerText = "Quantidade: " + produtos.length;
  document.getElementById("lista-primeiro").innerText = "Primeiro produto: " + produtos[0].title;
}

document.getElementById("btn-lista").addEventListener("click", buscarListaProdutos);
