# Design Patterns Refactor

Este projeto demonstra a aplicação de padrões de projeto e refatorações usando princípios SOLID.

## Padrões de Projeto Utilizados

1. **Factory Method**: Facilita a criação de diferentes formatações de relatório.
2. **Facade**: Simplifica a interface de geração de relatórios.
3. **Strategy**: Permite a seleção de diferentes estratégias de formatação.

## Refatorações SOLID

1. **SRP**: Separação de responsabilidades entre leitura de arquivos e formatação.
2. **OCP**: Adição de novas formatações sem modificar a lógica existente.
3. **DIP**: Dependência de abstrações em vez de implementações concretas.

## Como Executar

1. Clone o repositório: `git clone https://github.com/EveliseRibino/design-patterns-refactor.git`.
2. Navegue até o diretório do projeto: `cd design-patterns-refactor`.
3. Instale as dependências (se necessário): `npm install`.
4. Execute o projeto: `npm start [formato]`, onde `[formato]` pode ser `html` ou `txt`.

## Como Testar

Execute o script de testes: `node test.js`.
