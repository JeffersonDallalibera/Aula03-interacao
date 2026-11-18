# Exercícios • Aula 03
**Unidade Curricular:** Interação com APIs (SENAI)  
**Docente:** Prof. Jefferson Miguel Dallalibera  

> 🌐 **Dica de Teste 100% Online (Sem Postman):**  
> Como não temos o Postman instalado na máquina, você pode testar as URLs antes de programar de duas formas gratuitas e sem cadastro:  
> 1. **No Hoppscotch (O Postman Web gratuito):** Acesse [hoppscotch.io](https://hoppscotch.io), cole a URL em GET e clique em **Send**.  
> 2. **No Navegador Direto:** Cole a URL na barra de endereços do Chrome/Edge e aperte Enter para ver o JSON puro.  
> 3. **No Console F12:** Pressione `F12` > aba Console e teste com `console.log()`.

Edite o arquivo **`api.js`**. Use **só `.innerText`** (sem `innerHTML`).

---

# Exercício 1: Buscar produto por ID

**URL:**

```
"https://dummyjson.com/products/" + id
```

**Teste com:** 2, 3, 5, 10

**Preencher:**

```
ex1-titulo
ex1-preco
ex1-descricao
```

---

# Exercício 2: Consultar CEP

**URL:**

```
"https://viacep.com.br/ws/" + cep + "/json/"
```

**Teste com:** 01001000 ou o CEP da sua rua

**Preencher:**

```
cep-rua
cep-bairro
cep-cidade
```

Campos da resposta: `logradouro`, `bairro`, `localidade`, `uf`

---

# Exercício 3: Buscar categoria por ID

**URL:**

```
"https://dummyjson.com/products/" + id
```

**Teste com:** 1, 2, 3

**Preencher:**

```
cat-nome
```

Campo da resposta: `name`

---

# Exercício 4: Buscar usuário por ID

**URL:**

```
"https://dummyjson.com/users/" + id
```

**Teste com:** 1, 2, 3

**Preencher:**

```
user-nome
user-email
user-perfil
```

Campos da resposta: `firstName`, `email`, `role`

---

# Exercício 5: Lista de produtos

**URL:**

```
"https://fakestoreapi.com/products?limit=10"
```

Aqui a resposta é uma **lista**. Use `produtos.length` e `produtos[0]`.

**Preencher:**

```
lista-quantidade
lista-primeiro
```

---

# Exercício 6: Buscar Post por ID

**URL:**

```
"https://dummyjson.com/posts/" + id
```

**Input:** `input-post-id` | **Botão:** `btn-buscar-post`

**Preencher:**

```
post-titulo
post-corpo
```

Campos da resposta: `title`, `body`

---

# Exercício 7: Buscar Tarefa (Todo) por ID

**URL:**

```
"https://dummyjson.com/todos/" + id
```

**Input:** `input-todo-id` | **Botão:** `btn-buscar-todo`

**Preencher:**

```
todo-texto
todo-status
```

Campos da resposta: `todo`, `completed`

---

# Exercício 8: Ordens da Fábrica SENAI (API Local)

**URL:**

```
"./api/ordens.json"
```

**Botão:** `btn-ordens`

**Preencher:**

```
ordem-numero
ordem-cliente
```

Campos da resposta: `ordens[0].numero`, `ordens[0].cliente`

---

# Terminou? Chame o professor!
