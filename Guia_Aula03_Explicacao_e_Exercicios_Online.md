# 🚀 AULA 03: CONSUMO DE APIS NO FRONT-END (GET)
**Unidade Curricular:** Interação com APIs (40 Horas)  
**Curso:** Técnico em Desenvolvimento de Sistemas / Informática para Internet  
**Instituição:** SESI SENAI Santa Catarina  
**Docente Titular:** Prof. Jefferson Miguel Dallalibera  
**Referência Técnica:** Norma FM-NP-220-SESI-SENAI-004  

---

## 🧭 PARTE 1: EXPLICAÇÃO BREVE (O QUE VOCÊ PRECISA SABER)

Hoje você vai viver um dos momentos mais marcantes da sua jornada como programador: **o seu código JavaScript vai se conectar à internet ao vivo e trazer dados reais para a tela do navegador!**

E o melhor: faremos isso do jeito mais limpo, direto e profissional possível — usando **JavaScript puro**, a função nativa **`fetch()`** e o comando **`.innerText`**, sem nenhuma complicação de frameworks.

---

### 1. Como o JavaScript conversa com a Internet? (O papel do `fetch`)

No dia a dia, quando você quer abrir um site, você abre o navegador e digita a URL.  
No código JavaScript, quem faz esse papel de "navegador" é a função nativa **`fetch()`**:

```javascript
fetch("https://api.escuelajs.co/api/v1/products/1");
```

A palavra *fetch* em inglês significa *"ir buscar e trazer de volta"*.  
Ela vai até o servidor web, pede os dados e traz a resposta.

---

### 2. O Segredo do `async` e dos Dois `await` (Por que esperar?)

A internet não responde no mesmo milissegundo em que o seu processador executa o código. O sinal viaja por cabos de rede, chega ao servidor, é processado e retorna. Isso leva alguns milissegundos (latência).

Se o JavaScript não esperasse, o código tentaria mostrar na tela algo que ainda não chegou, gerando o erro de `Promise {<pending>}` ou `undefined`.

Por isso, usamos a dupla dinâmica **`async`** e **`await`**:

```javascript
async function buscarProduto() {
  // 1º AWAIT: Espera o carteiro chegar com a caixa fechada (a resposta da rede)
  const resposta = await fetch("https://api.escuelajs.co/api/v1/products/1");

  // 2º AWAIT: Abre a caixa e transforma o texto bruto no objeto JavaScript (JSON)
  const produto = await resposta.json();

  console.log("Produto chegou:", produto);
}
```

* **`async`:** Avisa o navegador que essa função realiza operações assíncronas (que dependem da rede).
* **1º `await fetch(...)`:** Espera o envelope HTTP chegar (Status Code 200, Headers).
* **2º `await resposta.json()`:** Descompacta o texto JSON e transforma em um objeto JavaScript pronto para ser usado com ponto (`.`).

---

### 3. Como colocar o dado na tela? (O poder do `.innerText`)

Depois que o dado virou um objeto JavaScript, basta pegar o elemento da tela pelo ID e preencher o texto dele com **`.innerText`**:

```javascript
// Exibe o título do produto dentro do <h3> que tem o id="titulo"
document.getElementById("titulo").innerText = produto.title;

// Exibe o preço formatado dentro do <p> que tem o id="preco"
document.getElementById("preco").innerText = "Preço: $ " + produto.price;
```

---

## 🌐 PARTE 2: COMO TESTAR APIS 100% ONLINE (SEM INSTALAR O POSTMAN)

Como os computadores do laboratório não possuem o aplicativo Postman desktop instalado, utilizaremos **ferramentas 100% online que rodam direto no navegador**, sem precisar instalar nada e sem precisar criar conta!

### 🥇 Opção 1: Hoppscotch (O "Postman Online" Gratuito e Sem Login)
O **Hoppscotch** é a melhor alternativa online do mundo ao Postman. Funciona direto na aba do Chrome/Edge:

1. Abra uma nova aba no navegador e acesse:  
   👉 **`https://hoppscotch.io`**
2. Ele abrirá uma interface limpa idêntica ao Postman!
3. Verifique se o método está em **`GET`**.
4. Cole a URL da API (ex: `https://api.escuelajs.co/api/v1/products/1`).
5. Clique no botão **`Send`**.
6. **Pronto!** Na tela de baixo você verá:
   - O Status Code: `200 OK` (verde);
   - O tempo de resposta (ms);
   - O JSON formatado e colorido com todas as chaves!

---

### 🥈 Opção 2: Na Barra de Endereços do Navegador
Como o método `GET` é o método padrão da internet:
1. Copie a URL da API (ex: `https://viacep.com.br/ws/01001000/json/`).
2. Cole na barra de endereços do Google Chrome ou Edge e aperte **Enter**.
3. O próprio navegador exibirá o JSON puro na tela para você conferir os nomes das propriedades!

---

### 🥉 Opção 3: No Console do Desenvolvedor (F12)
1. Pressione **`F12`** em qualquer aba do navegador.
2. Clique na aba **Console**.
3. Digite e aperte Enter:
   ```javascript
   const res = await fetch("https://api.escuelajs.co/api/v1/products/1");
   const dados = await res.json();
   console.log(dados);
   ```
4. Clique na setinha `▶` para inspecionar o objeto com o mouse!

---

## 📝 PARTE 3: LISTA DE EXERCÍCIOS PRÁTICOS (BANCADA)

Abra a pasta **`projeto-pratico-aula03`** no seu **Visual Studio Code**.  
Você irá programar exclusivamente dentro do arquivo **`api.js`**.  
Para ver o resultado na tela, clique com o botão direito no `index.html` e escolha **"Open with Live Server"**.

---

### 📍 Exemplo Feito em Conjunto com o Professor

**Objetivo:** Buscar o produto número 1 na API pública e preencher os dados no card inicial.

* **URL:** `https://api.escuelajs.co/api/v1/products/1`
* **Botão:** `btn-buscar`
* **IDs para preencher no HTML:** `titulo`, `preco`, `descricao`

```javascript
// CÓDIGO FEITO EM CONJUNTO:
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
```

---

### ✏️ Exercício 01: Buscar Produto por ID Digitado pelo Usuário

**Cenário:** O usuário digita o número do ID em um campo de texto (ex: `2`, `3`, `5` ou `10`) e clica no botão. O seu código deve buscar exatamente esse produto e exibir na tela!

* **URL da API:** `"https://api.escuelajs.co/api/v1/products/" + id`
* **Campo de Entrada (Input):** `input-id` (use `.value` para ler o que o aluno digitou)
* **Botão:** `btn-buscar-id`
* **Elementos a Preencher com `.innerText`:**
  - `ex1-titulo` ➔ receberá `produto.title`
  - `ex1-preco` ➔ receberá `"Preço: $ " + produto.price`
  - `ex1-descricao` ➔ receberá `produto.description`
* **Dica de Teste Online:** Antes de programar, teste no Hoppscotch ou no navegador:  
  `https://api.escuelajs.co/api/v1/products/2`

---

### ✏️ Exercício 02: Consultar Endereço por CEP (ViaCEP)

**Cenário:** O usuário digita os 8 números de um CEP (ex: `01001000` ou o CEP da sua própria rua) e clica em "Consultar CEP". A API do ViaCEP retorna o endereço completo!

* **URL da API:** `"https://viacep.com.br/ws/" + cep + "/json/"`
* **Campo de Entrada (Input):** `input-cep`
* **Botão:** `btn-buscar-cep`
* **Elementos a Preencher com `.innerText`:**
  - `cep-rua` ➔ `"Rua: " + dados.logradouro`
  - `cep-bairro` ➔ `"Bairro: " + dados.bairro`
  - `cep-cidade` ➔ `"Cidade / UF: " + dados.localidade + " / " + dados.uf`
* **Dica de Teste Online:** Abra no navegador: `https://viacep.com.br/ws/89870000/json/`

---

### ✏️ Exercício 03: Buscar Categoria da Loja por ID

**Cenário:** As categorias da loja possuem IDs numéricos (1: Clothes, 2: Electronics, 3: Furniture). O usuário digita o ID e o sistema descobre o nome da categoria.

* **URL da API:** `"https://api.escuelajs.co/api/v1/categories/" + id`
* **Campo de Entrada (Input):** `input-cat-id`
* **Botão:** `btn-buscar-cat`
* **Elemento a Preencher com `.innerText`:**
  - `cat-nome` ➔ `"Nome da Categoria: " + categoria.name`
* **Campo do JSON retornado:** `name`

---

### ✏️ Exercício 04: Buscar Usuário do Sistema por ID

**Cenário:** O sistema armazena o cadastro dos operadores. Ao digitar o ID (ex: 1, 2, 3), o JavaScript consulta a API e exibe o nome, o e-mail e o perfil de acesso.

* **URL da API:** `"https://api.escuelajs.co/api/v1/users/" + id`
* **Campo de Entrada (Input):** `input-user-id`
* **Botão:** `btn-buscar-user`
* **Elementos a Preencher com `.innerText`:**
  - `user-nome` ➔ `"Nome: " + usuario.name`
  - `user-email` ➔ `"E-mail: " + usuario.email`
  - `user-perfil` ➔ `"Perfil: " + usuario.role`
* **Campos do JSON retornado:** `name`, `email`, `role`

---

### ✏️ Exercício 05: Consultar Lista de Produtos (Múltiplos Itens)

**Cenário:** Quando o usuário clica no botão "Buscar 10 Produtos", a API retorna um **Array de produtos**. Você deve exibir quantos produtos vieram na lista e o título do primeiro item!

* **URL da API:** `"https://api.escuelajs.co/api/v1/products?limit=10&offset=0"`
* **Botão:** `btn-lista`
* **Elementos a Preencher com `.innerText`:**
  - `lista-quantidade` ➔ `"Quantidade recebida: " + lista.length + " produtos"`
  - `lista-primeiro` ➔ `"Primeiro produto: " + lista[0].title`
* **Dica de Ouro:** Como a resposta é uma lista (array), usamos `lista.length` para ver o total e `lista[0]` para pegar o primeiro item!

---

### 🌟 DESAFIO EXTRA: A API da Fábrica do SENAI (Local & Nuvem)!

Se você terminou os 5 exercícios e quer testar a API oficial do nosso curso:

* **Opção 1 (Na pasta do seu projeto • 100% no Live Server):**
  Basta fazer o fetch para o arquivo local da pasta `api/`:
  ```javascript
  fetch("./api/ordens.json")
    .then(r => r.json())
    .then(console.log);
  ```
* **Opção 2 (Online na Nuvem Mundial via CDN com CORS):**
  👉 **`https://cdn.jsdelivr.net/gh/JeffersonDallalibera/Interacao-com-APIS@main/api/ordens.json`**

Observe as ordens de serviço industriais (`OS-1042`, cliente, motor, destino) e exiba o cliente da primeira ordem no console!

---

### 🕵️‍♂️ DESAFIO ESPECIAL INVESTIGATIVO (+1 PONTO NA PROVA!)

Existe um arquivo/endpoint secreto dentro da pasta `api/` da nossa aplicação que **NÃO está documentado**!

* **A Pista:** Olhe os arquivos dentro da pasta `api/` no VS Code ou tente buscar pelo arquivo oculto de bônus via `fetch("./api/desafio-bonus.json")`.
* **A Recompensa:** **+1,0 Ponto Bônus** na próxima Prova da disciplina!
* **Como Validar:**
  1. Mostre a tela com o Status 200 OK e a propriedade `"codigo_validacao"`.
  2. Chame o Prof. Jefferson na sua bancada e explique: como o `fetch()` buscou esse JSON e o que significa o Status 200!
  3. 🤫 **Aviso:** Não mostre para o seu colega ao lado, estou de olho! Hahaha 👀

---
