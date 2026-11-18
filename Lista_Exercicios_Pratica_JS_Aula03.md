# Aula 03 • Exercícios (JavaScript puro + `.innerText`)

**Interação com APIs • SESI SENAI • Prof. Jefferson Miguel Dallalibera**

## Como começar
1. Abra esta pasta no **VS Code**.
2. Botão direito em `index.html` → **Open with Live Server**.
3. Programe **somente no `api.js`** (use só `.innerText`, sem `innerHTML`).
4. Antes de jogar na tela, confira no **F12 → Console** com `console.log(...)`.

## Receita (sempre a mesma)
```javascript
async function buscar() {
  const resposta = await fetch(url);   // 1º await: espera a rede
  const dados = await resposta.json(); // 2º await: abre o JSON
  console.log(dados);                  // confira no F12
}
document.getElementById("btn-xxx").addEventListener("click", buscar);
```

> Sem Postman: teste a URL antes no navegador (barra de endereços) ou em **hoppscotch.io**.

---

| # | Exercício | Entrada → Botão | URL | Mostrar (id ← campo) |
|---|-----------|-----------------|-----|----------------------|
| 1 | Produto por ID | `input-id` → `btn-buscar-id` | `https://dummyjson.com/products/` + id | `ex1-titulo` ← title<br>`ex1-preco` ← price<br>`ex1-descricao` ← description |
| 2 | Consultar CEP | `input-cep` → `btn-buscar-cep` | `https://viacep.com.br/ws/` + cep + `/json/` | `cep-rua` ← logradouro<br>`cep-bairro` ← bairro<br>`cep-cidade` ← localidade e uf |
| 3 | Categoria do produto | `input-cat-id` → `btn-buscar-cat` | `https://dummyjson.com/products/` + id | `cat-nome` ← category |
| 4 | Usuário por ID | `input-user-id` → `btn-buscar-user` | `https://dummyjson.com/users/` + id | `user-nome` ← firstName<br>`user-email` ← email<br>`user-perfil` ← role |
| 5 | Lista de 10 produtos | `btn-lista` | `https://fakestoreapi.com/products?limit=10` | `lista-quantidade` ← `.length`<br>`lista-primeiro` ← `[0].title` |
| 6 | Post por ID | `input-post-id` → `btn-buscar-post` | `https://dummyjson.com/posts/` + id | `post-titulo` ← title<br>`post-corpo` ← body |
| 7 | Tarefa (todo) por ID | `input-todo-id` → `btn-buscar-todo` | `https://dummyjson.com/todos/` + id | `todo-texto` ← todo<br>`todo-status` ← completed |
| 8 | Ordens da fábrica SENAI | `btn-ordens` | `./api/ordens.json` (arquivo local) | `ordem-numero` ← `[0].numero`<br>`ordem-cliente` ← `[0].cliente` |

**Dicas:** IDs para testar: 1 a 30 · CEP: `01001000` ou o da sua rua · no Ex. 5 e 8 a resposta é uma **lista** (`lista[0]`).

## Terminou? Desafio extra
Mostre **todas** as ordens da fábrica (não só a primeira) com `forEach` e escreva na tela separando por ` | `.

## 🕵️ Bônus (+1 ponto na prova)
Existe um arquivo secreto dentro da pasta `api/`. Descubra, faça `fetch` nele e mostre o `codigo_validacao` para o professor.
*Não mostre para o colega ao lado, estou de olho! 👀*
