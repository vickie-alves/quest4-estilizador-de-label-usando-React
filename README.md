## Quest #4 - Estilizador de Label (React)

O Estilizador de Label é uma aplicação em ***React*** desenvolvida através da ferramenta ***Vite***, recebendo um input de texto e uma cor selecionada para estilizar o que se tornará a *label* do botão "Gerar Label" e exibindo uma prévia da edição, permitindo assim integrar o texto editado no elemento ao pressionar o botão mencionado, seguido por um alerta e uma mensagem descrevendo a conclusão do processo. Esta aplicação promove a interatividade do usuário com uma mecânica simples de estilização de texto que usufrui da gestão de estados e props dentro do *React*.

## Objetivo do Desafio

Este projeto é um desafio proposto pelo curso ***DevQuest***, com o objetivo de desenvolver uma aplicação utilizando *React* e **Vite*, aplicando os fundamentos de construção de componentes, manipulação de *props* e estilização dinâmica para atender aos seguintes requisitos:
1. Desenvolvimento de um primeiro componente para exibir um texto colorido em letras maiúsculas utilizando *inline-styling* e métodos em *JavaScript*, recebendo o texto e cor através de *props*.
2. Criação de um segundo componente de botão que atualiza sua própria *label* para o texto estilizado do componente anterior e exibe um alerta informando: "A *label* desse botão é [novo texto]".
Além dos requisitos iniciais, o escopo foi expandido para incluir um campo de entrada de texto, um seletor de cores e melhorias visuais para proporcionar uma interface mais clara, organizada e interativa para o usuário.

**Construção de componentes com *React*:** Estruturação da interface com componentes reutilizáveis e independentes, permitindo fácil manutenção e separação de responsabilidades entre estilização, exibição e implementação do texto como *label*.

**Gerenciamento de *Props* e *States*:** Utilização do *hook* "*useState*" para capturar entradas do usuário e compartilhá-las entre os componentes, elevando *props* de estado através do componente-pai para manter a interatividade entre as partes do projeto.

**Estilização Dinâmica (*Inline-Style*):** Aplicação de estilos CSS através de código JavaScript XML, acompanhando em tempo-real as atualizações de estado dentro dos componentes.

***CSS* Moderno:** Integração do Flexbox no layout, utilização de pseudo-elementos e animações para efeitos de feedback visual suaves, além de variáveis para melhor manutenção e reutilização dos estilos.

***Feedback* de *Interface* (*UX*):** Implementação de condições de execução para botões (disabled) e remoção do texto inicial após sua integração como *label*, para feedback processual das ações do usuário.

***Prop Drilling*:** Compartilhamento de estados e funções de *callback* entre componentes a partir do componente pai para sincronizar o estilizador de texto e o visualizador da prévia com o botão de alerta. Esse fluxo permite que ao gerar a *label*, a prévia seja ocultada e o texto editado seja aplicado ao botão. Apesar de funcional, este processo seria melhor executado através do *Context API* porém fora mantido desta forma para explorar o uso do *prop drilling* e *elevação de estados* com *React* básico.

## Como executar a aplicação localmente

Para executar o projeto localmente, certifique-se de ter instalado em sua máquina:
- Node JS: [Node.js](https://nodejs.org/) (versão 16 ou superior)
- Gerenciador de pacotes: [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

Então clone o repositório:
```bash
git clone https://github.com/vickie-alves/quest4-estilizador-de-label-usando-React
```

Acesse a pasta do projeto:
```bash
cd quest4-estilizador-de-label-usando-React
```

Instale as dependências com o gerenciador de pacotes da sua escolha:
```bash
npm install
```
```bash
yarn install
```
```bash
pnpm install
```

Inicie o servidor com o comando de seu gerenciador respectivo:
```bash
npm run dev
```
```bash
yarn dev
```
```bash
pnpm dev
```

O Vite exibirá no terminal o endereço local de acesso, como no exemplo abaixo:
http://localhost:5173
Assim permitindo a visualização e utilização da aplicação.

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :---: | :---: |
| **HTML5** | Fundamentos semânticos utilizado no React e estrutura inicial da página. |
| **CSS3** | Estilização geral, layout Flexbox, pseudo-classes, animações e variáveis de estilo. |
| **JavaScript (ES6+)** | Formulação de funções de *callback*, lógicas condicionais de execução e estilização dinâmica através de *inline-styling*. |
| **React** | Implementação do *hook* de estados "*useState*", compartilhamento de dados por *props* e componentização da estrutura HTML da página. |
| **Vite** | Construção inicial do projeto e fornecimento de dependências |

## Screenshots

| Estilizador (Início) | Estilizador (Destaque dos Inputs) | Estilizador (Texto Preenchido) |
| :---: | :---: | :---: |
| <img src="screenshots/home.png" alt="Screenshot da página inicialmente" height="500"/> | <img src="screenshots/highlight-input.png" alt="Screenshot da página, com destaque no campo de entrada de texto e no seletor de cores" height="500"/> | <img src="screenshots/text-input.png" alt="Screenshot da página, com um texto de teste inserido" height="500"/> |
| **Estilizador (Seleção de Cores)** | **Estilizador (Destaque do Botão de Estilizar)** | **Estilizador (Visualizar Prévia)** | 
| <img src="screenshots/color-select.png" alt="Screenshot da página, com a aba de seleção de cores disponível" height="500"/> | <img src="screenshots/highlight-edit-button.png" alt="Screenshot da página, com destaque no botão de estilizar o texto inserido" height="500"/> | <img src="screenshots/edit-preview.png" alt="Screenshot da página, com a visualização do texto agora estilizado" height="500"/> |
| **Estilizador (Destaque do Botão de Gerar Label)** | **Estilizador (Alerta)** | **Estilizador (Implementação da Label)** |
| <img src="screenshots/highlight-label-button.png" alt="Screenshot da página, com destaque no botão de gerar a label" height="500"/> | <img src="screenshots/alert.png" alt="Screenshot da página, com um alerta de sucesso para a geração da label" height="500"/> | <img src="screenshots/label-message.png" alt="Screenshot da página, com a visualização da label agora gerada e uma mensagem de sucesso abaixo" height="500"/> |


## Links

* **Live Site URL:** vickie-alves.github.io/quest4-estilizador-de-label-usando-React/

## Autor

* **GitHub:** [Victoria Alves](https://github.com/vickie-alves)
