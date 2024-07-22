function carregarDadosAjax(context, callback) {
    var dadosRequisicao = {
        url: "XXXXX",
        method: 'GET',
        data: {}
    };

    $.ajax({
        url: dadosRequisicao.url,
        type: dadosRequisicao.method,
        contentType: "application/json"
    }).done(function(data) {
        console.log(data.content)
        var comprasData = data.content;

        $.ajax({
            url: "convenios",
            type: 'GET',
            contentType: "application/json"
        }).done(function(conveniosData) {
            console.log(conveniosData.content)
            var conveniosMap = {};
            conveniosData.content.forEach(function(item) {
                conveniosMap[item.CODGERAL] = item.SIGLA;
            });

            context.dadosDatatable = comprasData.map(function(item) {
                return {
                    NumeroChamado: item.NumeroChamado,
                    TipoChamado: item.TipoChamado,
                    Convenio: conveniosMap[item.Convenio] || item.Convenio,
                    CodProduto: item.CodProduto,
                    DescricaoProduto: item.DescricaoProduto,
                    CodigoEspecifico: item.CodigoEspecifico,
                    Descricao: item.Descricao,
                    Unidade: item.Unidade,
                    DataUtilizacao: item.DataUtilizacao ? item.DataUtilizacao : '',
                    Valor: item.Valor,
                    Procedencia: item.Procedencia,
                    DataChamado: item.DataChamado,
                    solProcede: item.solProcede ? item.solProcede : ''
                };
            });

            if (typeof callback === 'function') {
                callback();
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
    });
}