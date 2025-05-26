# 🛒 Catálogo de Produtos - Checkpoint 3

Projeto desenvolvido para o **Checkpoint 3 de Webdev**, com foco em manipulação de **DOM, arrays e objetos** no JavaScript.

---

## 👥 Integrantes do Grupo

- **Vinicius Mafra Paiva**  
- **João Pedro Nishikawa** – RM562376

---

## 📘 Descrição do Projeto

Este projeto consiste na criação de um **catálogo online interativo**, que permite ao usuário visualizar, filtrar e organizar produtos por **categoria** e **disponibilidade**. A proposta visa praticar habilidades essenciais com **JavaScript**, além da integração com **HTML e CSS** para a construção de uma interface moderna e funcional.

---

## 💻 Tecnologias Utilizadas

- **HTML** – Estruturação da interface do usuário  
- **CSS** – Estilização e responsividade  
- **JavaScript** – Lógica de manipulação de dados, DOM e eventos  

---

## ⚙️ Funcionalidades

### 🔹 Estrutura dos Produtos

- Os produtos são armazenados em um **array de objetos**
- Cada objeto contém:
  - `nome`
  - `preco`
  - `categoria`
  - `disponibilidade` (booleano)

### 🔹 Interface do Usuário

- Botão para **listar todos os produtos**
- Formulário com:
  - `select` para **categorias**
  - `checkbox` para filtrar **"somente disponíveis"**
- Botão **"Filtrar"** para aplicar os critérios selecionados

### 🔹 Interatividade

- Os produtos são atualizados dinamicamente com base nos filtros aplicados
- Os cards de produto ganham **destaque visual ao passar o mouse**

---

## 🌟 Funcionalidades Extras (Bônus)

- **Agrupamento dos produtos por categoria** com títulos visuais
- Filtro com opção de exibir **apenas disponíveis ou indisponíveis**
- **Ordenação por preço** (crescente ou decrescente)

---

## 📁 Estrutura de Arquivos

```plaintext
📦 projeto-catalogo/
├── index.html
├── app.js
├── style.css
└── README.md
