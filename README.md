## Hub de Conceitos de UI/UX & Design de Interfaces

### Sobre o Projeto

O objetivo principal desta página é servir como um hub de conhecimentos e referência rápida sobre Design de Interfaces. 
Além do conteúdo teórico organizado, a plataforma conta com uma seção **"Sobre Mim"** e navegação para páginas temáticas dedicadas.

#### Tópicos Abordados
- **Design Thinking:** Etapas e mentalidade focada na resolução de problemas.
- **10 Heurísticas de Usabilidade:** Os princípios fundamentais de Jakob Nielsen.
- **Interação Humano-Computador (IHC):** Conceitos de acessibilidade, usabilidade e experiência do usuário.
- **UI vs. UX:** Diferenças, convergências e papéis no desenvolvimento do produto.
- **WCAG (Web Content Accessibility Guidelines):** Diretrizes para a criação de interfaces acessíveis a todos.

### Funcionalidades Interativas

Em todas as páginas secundárias, na seção de **Princípios**, a exibição dos conteúdos é feita dinamicamente:
- **Cards Interativos:** Os princípios são apresentados em cards.
- **Abertura Dinâmica:** Ao clicar em um card, um script em JavaScript recupera os dados específicos e renderiza dinamicamente a explicação detalhada de cada princípio na tela.

### Estrutura do Projeto

```text
├── index.html                # Página principal (Hub)
├── designThinking.html # Página secundária
├── dezHeuristicas.html     # Página secundária
├── ...                       # Outras páginas secundárias (IHC, UI/UX, WCAG)
│
├── css/
│   ├── main.css              # Estilos exclusivos da página principal
│   └── paginasSec.css         # Estilos compartilhados pelas páginas secundárias
│
├── js/
│   ├── main.js               # Funções e lógica de manipulação do DOM / abertura dos cards
│   └── data/                 # Arquivos com os dados e conteúdos dinâmicos em formato de objeto js
│       ├── designThinking.js
│       ├── dezHeuristicas.js
│       └── ...
│
└── img/                      # Imagens e ativos visuais do projeto
