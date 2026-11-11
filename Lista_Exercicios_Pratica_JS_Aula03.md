# Exercícios • Aula 03

Edite o arquivo **`api.js`**. Use **só `.innerText`** (sem `innerHTML`).

Dica: aperte **F12** e confira com `console.log()` antes de mexer na tela.

---

# Exercício 1: Buscar produto por ID

**URL:**

```
"https://api.escuelajs.co/api/v1/products/" + id
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
"https://api.escuelajs.co/api/v1/categories/" + id
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
"https://api.escuelajs.co/api/v1/users/" + id
```

**Teste com:** 1, 2, 3

**Preencher:**

```
user-nome
user-email
user-perfil
```

Campos da resposta: `name`, `email`, `role`

---

# Exercício 5: Lista de produtos

**URL:**

```
"https://api.escuelajs.co/api/v1/products?limit=10&offset=0"
```

Aqui a resposta é uma **lista**. Use `produtos.length` e `produtos[0]`.

**Preencher:**

```
lista-quantidade
lista-primeiro
```

---

# Terminou? Chame o professor!
