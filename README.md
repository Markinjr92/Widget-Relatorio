# Relatório

Este projeto consiste em um widget do Fluig que exibe um relatório. O relatório inclui filtros dinâmicos, paginação e exportação para Excel.

## Estrutura de Arquivos

- `view.ftl`: Estrutura HTML do widget.
- `relatorio.js`: Script principal que inicializa o widget e configura seus componentes.
- `functions.js`: Funções auxiliares para carregar dados, configurar a tabela e aplicar filtros.
- `styles.css`: Estilos customizados para o widget (se necessário).
- `pagination.js e pagination.min.js`: Código de funções para paginação da tabela
  
## Instalação

1. Clone este repositório.
2. Adicione os arquivos ao seu projeto Fluig.
3. Configure os datasets e constraints conforme necessário.

## Uso

- Clique no botão de filtro para exibir/esconder os filtros.
- Selecione os filtros desejados e clique no ícone de reset para limpar todos os filtros.
- Use o dropdown de itens por página para alterar a quantidade de itens exibidos na tabela.
- Clique no ícone de download para exportar os dados filtrados para um arquivo Excel.

## Dependências

- [DataTables](https://datatables.net/)
- [XLSX.js](https://github.com/SheetJS/sheetjs)

