# Relatório Comercial

Este projeto é um widget Fluig para exibição de um relatório comercial, com funcionalidades de filtro, paginação e exportação para Excel.

## Estrutura do Projeto

- `view.ftl`: Arquivo FreeMarker Template contendo a estrutura HTML do widget.
- `relat_comercial123.js`: Script principal do widget que gerencia a lógica de negócios e interações.
- `datatable.js`: Script para configuração e manipulação da tabela de dados.
- `ajax.js`: Script para carregamento de dados via AJAX.
- `filter.js`: Script para configuração e aplicação de filtros dinâmicos.
- `pagination.js` e `pagination.min.js`: Scripts para paginação da tabela.

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

Este projeto depende das seguintes bibliotecas externas:

- [Fluig Style Guide](https://styleguide.fluig.com/)
- [XLSX](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js)
- jQuery
