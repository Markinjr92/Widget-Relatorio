function configurarDataTable(context) {
    var dadosFormatados = context.dadosDatatable.slice(); 
    var tamanhoPagina = $('#pagesize').val();

    context.dataTable = FLUIGC.datatable(context.dataTableId, {
        dataRequest: dadosFormatados,
        renderContent: context.rContent,
        limit: tamanhoPagina,
        responsive: true,
        tableStyle: 'table table-striped table-responsive table-bordered table-condensed',
        emptyMessage: '<div class="text-center">Nenhum dado encontrado!</div>',
        header: context.rHeader,
        search: {
            enabled: true,
            onlyEnterkey: true,
            onSearch: function(res) {
                console.log(res);
                var busca = dadosFormatados.filter(function(el) {
                    return Object.values(el).some(value =>
                        value.toString().toUpperCase().indexOf(res.toUpperCase()) >= 0
                    );
                });
                if (busca && busca.length) {
                    context.atualizarPaginacaoETabela(busca, tamanhoPagina);
                } else {
                    FLUIGC.toast({
                        title: 'Busca: ',
                        message: 'Nenhum resultado encontrado',
                        type: 'warning'
                    });
                }
            },
            onlyEnterkey: false,
            searchAreaStyle: 'col-md-1'
        },
        scroll: {
            target: context.dataTableId,
            enabled: false
        },
        navButtons: {
            enabled: false
        },
        draggable: {
            enabled: false
        },
        columnDefs: [
            { targets: '_all', type: 'string' } // Configura todas as colunas para ordenação alfabética
        ],
        formatResult: function(data) {
            return data.map(item => ({
                NumeroChamado: item['NumeroChamado'],
                TipoChamado: item['TipoChamado'],
                Convenio: item['Convenio'],
                CodProduto: item['CodProduto'],
                DescricaoProduto: item['DescricaoProduto'],
                CodigoEspecifico: item['CodigoEspecifico'],
                Descricao: item['Descricao'],
                Unidade: item['Unidade'],
                DataUtilizacao: formatDate(item['DataUtilizacao']),
                Valor: item['Valor'],
                Procedencia: item['Procedencia'],
                DataChamado: item['DataChamado'],
                solProcede: item['solProcede']
            }));
        },
        callback: function(dadosPaginados, paginacao) {
            console.log(dadosPaginados, paginacao);
            if (context.dataTable) {
                context.dataTable.reload(dadosPaginados);
            }
        }
    });

    // Configurar paginação após a inicialização do dataTable
    context.atualizarPaginacaoETabela(dadosFormatados, tamanhoPagina);

    // Adiciona um ouvinte de eventos para o select de pagesize
    $('#pagesize').on('change', function() {
        var novoTamanhoPagina = $(this).val();
        context.atualizarPaginacaoETabela(dadosFormatados, novoTamanhoPagina); // Recarrega os dados com o novo tamanho da página
    });
}

function atualizarPaginacaoETabela(context, data, tamanhoPagina) {
    $("#paginationTable").pagination({
        dataSource: data,
        pageSize: tamanhoPagina,
        showGoInput: true,
        showGoButton: true,
        goButtonText: 'Ir',
        className: 'paginationjs-big',
        formatResult: function(data) {
            return data.map(item => ({
                NumeroChamado: item['NumeroChamado'],
                TipoChamado: item['TipoChamado'],
                Convenio: item['Convenio'],
                CodProduto: item['CodProduto'],
                DescricaoProduto: item['DescricaoProduto'],
                CodigoEspecifico: item['CodigoEspecifico'],
                Descricao: item['Descricao'],
                Unidade: item['Unidade'],
                DataUtilizacao: formatDate(item['DataUtilizacao']),
                Valor: item['Valor'],
                Procedencia: item['Procedencia'],
                DataChamado: item['DataChamado'],
                solProcede: item['solProcede']
            }));
        },
        callback: function(dadosPaginados, paginacao) {
            console.log(dadosPaginados, paginacao);
            if (context.dataTable) {
                context.dataTable.reload(dadosPaginados);
            }
        }
    });
}

function formatDate(dateString) {
    if (!dateString) return '';
    var parts = dateString.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // Formato dd/MM/yyyy
}
