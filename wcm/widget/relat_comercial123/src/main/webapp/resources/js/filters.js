function configurarFiltrosDinamicos(context) {
    // Definir filtros e eventos de mudança
    var filtros = [
        { id: '#tipoChamadoFilter', chave: 'TipoChamado' },
        { id: '#convenioFilter', chave: 'Convenio' },
        { id: '#codProdutoFilter', chave: 'CodProduto' },
        { id: '#codigoEspecificoFilter', chave: 'CodigoEspecifico' },
        { id: '#procedenciaFilter', chave: 'Procedencia' },
        { id: '#dataDe', chave: 'DataChamado', type: 'date' },
        { id: '#dataAte', chave: 'DataChamado', type: 'date' }
        // Adicione novos filtros conforme necessário
    ];

    filtros.forEach(function(filtro) {
        configurarFiltro(context, filtro.id, filtro.chave, filtro.type);
    });

    $('#resetFilters').click(function() {
        resetFilters(context);
    });
}

function configurarFiltro(context, idFiltro, chave, type) {
    // Preencher opções iniciais do filtro
    if (type !== 'date') {
        var opcoes = getUniqueValues(context.dadosDatatable, chave);
        atualizarOpcoesSelect(context, idFiltro, opcoes);
    }

    // Evento de mudança para o filtro
    $(idFiltro).on('change', function() {
        aplicarFiltros(context);
    });
}

function getUniqueValues(data, chave) {
    var valoresUnicos = [];
    data.forEach(function(item) {
        if (item[chave] && valoresUnicos.indexOf(item[chave]) === -1) {
            valoresUnicos.push(item[chave]);
        }
    });
    return valoresUnicos;
}

function aplicarFiltros(context) {
    var filtros = [
        { id: '#tipoChamadoFilter', chave: 'TipoChamado' },
        { id: '#convenioFilter', chave: 'Convenio' },
        { id: '#codProdutoFilter', chave: 'CodProduto' },
        { id: '#codigoEspecificoFilter', chave: 'CodigoEspecifico' },
        { id: '#procedenciaFilter', chave: 'Procedencia' }
    ];

    var filtroSelecionado = {};
    filtros.forEach(function(filtro) {
        filtroSelecionado[filtro.chave] = $(filtro.id).val();
    });

    var dataDe = $('#dataDe').val();
    var dataAte = $('#dataAte').val();

    var dadosFiltrados = context.dadosDatatable.filter(function(item) {
        var matches = Object.keys(filtroSelecionado).every(function(chave) {
            var valorFiltro = filtroSelecionado[chave];
            return !valorFiltro || item[chave] === valorFiltro;
        });

        if (matches && dataDe && dataAte) {
            var dataChamado = parseDate(item.DataChamado, "dd/MM/yyyy");
            var dataDeDate = parseDate(dataDe, "yyyy-MM-dd");
            var dataAteDate = parseDate(dataAte, "yyyy-MM-dd");

            return dataChamado >= dataDeDate && dataChamado <= dataAteDate;
        }

        if (matches && (!dataDe || !dataAte)) {
            return matches;
        }

        return matches;
    });

    context.dadosFiltrados = dadosFiltrados;
    context.atualizarPaginacaoETabela(dadosFiltrados, $('#pagesize').val());
}

function atualizarOpcoesSelect(context, idFiltro, opcoes) {
    var select = $(idFiltro);
    select.empty(); // Limpa as opções existentes

    opcoes.sort();

    select.append($('<option>', { value: '', text: 'Todos' })); // Adiciona a opção 'Todos'
    opcoes.forEach(function(opcao) {
        select.append($('<option>', {
            value: opcao,
            text: opcao
        }));
    });
}

function parseDate(dateString, format) {
    var parts = dateString.split('/');
    if (format === "dd/MM/yyyy") {
        return new Date(parts[2], parts[1] - 1, parts[0]);
    } else if (format === "yyyy-MM-dd") {
        parts = dateString.split('-');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    return null;
}

function resetFilters(context) {
    $('#filtrosdaTabela select').val('');
    $('#dataDe, #dataAte').val('');
    aplicarFiltros(context);
}