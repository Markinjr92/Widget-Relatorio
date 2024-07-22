<div id="relatorio_comercial_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="relatorio_comercial.instance()">
    <div class="panel panel-default">
        <table class="table table-bordered">
            <thead></thead>
            <tbody>
                <tr>
                    <td rowspan='4' colspan='4' style="text-align:center; vertical-align:middle">
                        <img src='/relat_comercial123/resources/images/image.png' alt="image" />
                    </td>
                    <td rowspan='4' colspan='6' style="text-align:center; vertical-align:middle">
                        <h2><b>Relatório Chamado Comercial</b></h2>
                    </td>
                    <td colspan='2'><b>Padrão nº:</b> </td>
                </tr>
                <tr>
                    <td><b>Elaborado em:</b> 08/07/2024</td>
                </tr>
                <tr>
                    <td><b>Revisado em:</b> 08/07/2024</td>
                </tr>
                <tr>
                    <td><b>Revisão:</b> 01</td>
                </tr>
            </tbody>
        </table>
        <div class="panel-body">
            <div class="row d-flex align-items-center justify-content-between">
                <div class="col-md-6 fs-float-left">
                    <button id="toggleFilters" class="btn btn-default">
                        <i class="fluigicon fluigicon-filter icon-xl" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="col-md-1 fs-float-right">
                    <label for="pagesize" class="mr-2">Itens por página</label>
                    <select class="form-control d-inline-block w-auto" id="pagesize" name="pagesize">
                        <option value='10' selected>10</option>
                        <option value='30'>30</option>
                        <option value='50'>50</option>
                    </select>
                </div>
                <div class="col-md-1 fs-float-right">
                    <div class="btn-group">
                        <a href="#" class="btn btn-default" id="loadExcel" data-load-excel>
                            <i class="fluigicon fluigicon-download-circle icon-xl" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <div id="filterContainer" style="display: none;">
                <div class="row" id="filtrosdaTabela">
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="dataDe">Data Abertura de:</label>
                                 <input type="date" class="form-control" id="dataDe" name="dataDe">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="dataDe">Data Abertura Até:</label>
                                 <input type="date" class="form-control" id="dataAte" name="dataAte">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="tipoChamadoFilter">Tipo de Chamado</label>
                            <select class="form-control" id="tipoChamadoFilter" name="tipoChamadoFilter">
                                <option value="">Todos</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="convenioFilter">Convenio</label>
                            <select class="form-control" id="convenioFilter" name="convenioFilter">
                                <option value="">Todos</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <div class="form-group">
                            <label for="codProdutoFilter">Cód.Produto</label>
                            <select class="form-control" id="codProdutoFilter" name="codProdutoFilter">
                                <option value="">Todos</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <div class="form-group">
                            <label for="codigoEspecificoFilter">Cod.Específico</label>
                            <select class="form-control" id="codigoEspecificoFilter" name="codigoEspecificoFilter">
                                <option value="">Todos</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <div class="form-group">
                            <label for="procedenciaFilter">Procedente?</label>
                            <select class="form-control" id="procedenciaFilter" name="procedenciaFilter">
                                <option value="">Todos</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-1 text-right">
                        <div class="btn-group">
                            <a href="#" class="btn btn-default" id="resetFilters">
                                <i class="flaticon flaticon-find-replace icon-xl" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="idtable123teste"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-6">
                    <div id="paginationTable"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>