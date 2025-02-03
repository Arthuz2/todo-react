# To-Do List com ReactJS

Este é um projeto simples e funcional de **To-Do List** desenvolvido com ReactJS. O objetivo foi praticar e consolidar conceitos fundamentais, como manipulação de estado, componentes funcionais e estilização com CSS. Essa aplicação oferece uma interface intuitiva para gerenciar tarefas de forma prática, utilizando o design da rocketseat.

---

## 🚀 Funcionalidades

- **Adicionar tarefas**: Insira o conteúdo e ele será adicionado à lista.  
- **Marcar como concluída**: Indique tarefas concluídas com apenas um clique.  
- **Excluir tarefas**: Remova tarefas desnecessárias para manter a lista organizada.  
- **Responsividade**: A aplicação foi projetada para funcionar bem em diferentes dispositivos.  

---

## 🛠️ Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces.  
- **CSS Modules**: Para organização e escopo local das estilizações.  
- **Phosphor Icons**: Ícones modernos e flexíveis para enriquecer a interface.  

---

## 📦 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

### Passo a Passo

1. Clone o repositório:  
  ```bash
    git clone https://github.com/Arthuz2/todo-react.git
  ```
2. Acesse a pasta do projeto:
  ```bash
    cd todo-react
  ```
3. Instale as dependências:
  ```bash
    npm install
  ```
4. Execute o projeto:
  ```bash
    npm run start
  ```
5. Abra o navegador e acesse:
  ```bash
    http://localhost:5173
  ```
---

## 📂 Estrutura do Projeto

```plaintext
src/
├── assets/
│   └── Logo.png                # Logo do projeto.
├── components/                 # Componentes reutilizáveis da aplicação.
│   ├── EmptyTasks/             # Mensagem exibida quando não há tarefas cadastradas.
│   │   ├── index.tsx
│   │   └── styles.module.css
│   ├── Header/                 # Cabeçalho principal da aplicação.
│   │   ├── index.tsx
│   │   └── styles.module.css
│   ├── NewTaskForm/            # Formulário para criar novas tarefas.
│   │   ├── index.tsx
│   │   └── styles.module.css
│   ├── TaskCard/               # Card de tarefa, com opções para marcar como concluída ou excluir.
│   │   ├── index.tsx
│   │   └── styles.module.css
│   └── Tasks/                  # Listagem principal de tarefas.
│       ├── index.tsx
│       └── styles.module.css
├── App.tsx                     # Componente principal da aplicação.
├── App.module.css              # Estilos gerais do componente App.
├── global.css                  # Estilos globais da aplicação.
├── main.tsx                    # Ponto de entrada da aplicação React.
└── vite-env.d.ts               # Configuração de ambiente do Vite.
```

## 🎯 Melhorias Futuras

- Incluir testes automatizados para validar o comportamento dos componentes.
- Melhorar a interface com animações suaves e transições ao adicionar, marcar ou excluir tarefas.

## 📸 Demonstração

### Sem tarefas
![Imagem do projeto sem tarefas](https://github.com/user-attachments/assets/3c1c7013-e1a4-4c2c-a8ae-2c99d556dfa5)


### Tarefas concluídas e pendentes
![Imagem do projeto com tarefas concluídas e pendentes](https://github.com/user-attachments/assets/142f369c-db24-422b-9364-c9276bc25f18)


## ❤️ Agradecimentos

Este projeto é um marco no meu aprendizado com ReactJS. Cada funcionalidade implementada me trouxe novas lições e desafios, reforçando minha paixão pelo desenvolvimento. Estou motivado a continuar evoluindo e aprimorando minhas habilidades!

Contribuições, sugestões e feedbacks são sempre bem-vindos! 😊

## 🔗 Contato

Arthur Porcino Pereira

📧 Email: arthur.porcino43@gmail.com

📱 LinkedIn: https://linkedin.com/in/arthurporcino
