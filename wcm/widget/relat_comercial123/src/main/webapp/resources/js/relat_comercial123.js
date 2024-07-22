var relatorio_comercial = SuperWidget.extend({
    variavelNumerica: null,
    variavelCaracter: null,
    dataTable: null,
    dadosDatatable: [],
    rContent: [
        'NumeroChamado', 'TipoChamado', 'Convenio', 'CodProduto', 'DescricaoProduto',
        'CodigoEspecifico', 'Descricao', 'Unidade', 'DataUtilizacao', 'Valor', 'Procedencia', 'DataChamado', 'solProcede'
    ],
    rHeader: [
        { 'title': 'Numero Chamado', 'size': 'col-md-1'},
        { 'title': 'Tipo de Chamado', 'size': 'col-md-2'},
        { 'title': 'Convênio', 'size': 'col-md-1'},
        { 'title': 'Código Produto', 'size': 'col-md-1'},
        { 'title': 'Descrição do Produto', 'size': 'col-md-2'},
        { 'title': 'Código Específico', 'size': 'col-md-1'},
        { 'title': 'Descrição', 'size': 'col-md-2'},
        { 'title': 'Unidade Medida', 'size': 'col-md-1'},
        { 'title': 'Data de Utilização', 'size': 'col-md-1'},
        { 'title': 'Valor', 'size': 'col-md-1'},
        { 'title': 'Procede Com.', 'size': 'col-md-1'},
        { 'title': 'Data Chamado?', 'size': 'col-md-1'},
        { 'title': 'Procede Solic.', 'size': 'col-md-1'}
    ],
    dataTableId: '#idtable123teste',

    init: function() {
        var that = this;
    
        // Realiza a chamada AJAX e formata os dados
        this.carregarDados(function() {
            that.configurarDataTable();
            that.configurarFiltrosDinamicos();
            that.setupFilterToggle(); // Configuração do botão de filtro
            that.setupExcelExport(); // Configuração da exportação para Excel
            that.setupResetFilters(); // Configuração do botão de reset de filtros
       });
   },

    carregarDados: function(callback) {
        carregarDadosAjax(this, callback);
   },

    configurarDataTable: function() {
        configurarDataTable(this);
   },

    atualizarPaginacaoETabela: function(data, tamanhoPagina) {
        atualizarPaginacaoETabela(this, data, tamanhoPagina);
   },

    configurarFiltrosDinamicos: function() {
        configurarFiltrosDinamicos(this);
   },

    configurarFiltro: function(idFiltro, chave) {
        configurarFiltro(this, idFiltro, chave);
   },

    getUniqueValues: function(data, chave) {
        return getUniqueValues(data, chave);
   },

    aplicarFiltros: function() {
        aplicarFiltros(this);
   },

    atualizarOpcoesSelect: function() {
        atualizarOpcoesSelect(this);
   },

    // Função para configurar o toggle do filtro
    setupFilterToggle: function() {
        var filterContainer = $('#filterContainer');
        $('#toggleFilters').click(function() {
            filterContainer.slideToggle(); // Alternar a exibição da div de filtros
       });
   },

    // Função para configurar a exportação para Excel
    setupExcelExport: function() {
        var that = this;
        $('#loadExcel').click(function() {
            var dados = that.dadosFiltrados || that.dadosDatatable; // Usa os dados filtrados, se disponíveis
        
            var dadosParaExportar = dados.map(function(item) {
                return that.rContent.map(function(key) {
                    return item[key];
               });
           });
        
            var ws_data = [that.rContent].concat(dadosParaExportar);
            var ws = XLSX.utils.aoa_to_sheet(ws_data);
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Relatório");
        
            XLSX.writeFile(wb, "relatorio_comercial.xlsx");
       });
   },

    // Função para obter os dados filtrados manualmente
    getFilteredData: function() {
        var filteredData = this.dadosDatatable.filter(function(item) {
            var tipoChamadoFilter = $('#tipoChamado').val();
            var convenioFilter = $('#convenio').val();
            var codProdutoFilter = $('#codProduto').val();
            var codEspecificoFilter = $('#codEspecifico').val();

            var tipoChamadoMatch = !tipoChamadoFilter || item.TipoChamado === tipoChamadoFilter;
            var convenioMatch = !convenioFilter || item.Convenio === convenioFilter;
            var codProdutoMatch = !codProdutoFilter || item.CodProduto === codProdutoFilter;
            var codEspecificoMatch = !codEspecificoFilter || item.CodigoEspecifico === codEspecificoFilter;

            return tipoChamadoMatch && convenioMatch && codProdutoMatch && codEspecificoMatch;
       });

        return filteredData;
   },

    setupResetFilters: function() {
        var that = this;
        $('#resetFilters').click(function() {
            that.resetFilters();
       });
   },

    resetFilters: function() {
        $('#filtrosdaTabela select').val('');
        $('#dataDe, #dataAte').val('');
        this.aplicarFiltros();
   },

    execute: function(htmlElement, event) {
   }
});