

//Jquery
$(document).ready(function () {

    ListarTodos()
    $("#btnSalvar").click(function () {
        Salvar()


    });

});

function Salvar() {


    var Id = $("#Id").val();

    var Agendamento = new Object;


    Agendamento.Nome = $("#nome").val();
    Agendamento.Visita = $("#dtvisita").val();
    Agendamento.DServiço = $("#texto").val();
    Agendamento.DsMaquina = $("#model").val();
    Agendamento.Mmaquina = $("#marc").val();
    Agendamento.VlServiço = $("#preco").val();
    Agendamento.DTServico = $("#dtservico").val();
    Agendamento.Ativo = true;






    if (Id == "") {
        Inserir(Agendamento);
    } else {
        Alterar(Id, Agendamento)
    }



}



function ListarTodos() {

    $("#tabela > tbody").empty();

    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Agendamento',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            dados.forEach(function (item) {
                AdicionarLinha(item)

            });
        },
        erro: function (erro) {
            alert('Ocorreu um erro');
        }

    });

}


function AdicionarLinha(item) {

    var novaLinha = $("<tr>")
    var col = ''
    col += '<td>' + item.Nome + '</td>';
    col += '<td>' + item.Visita + '</td>';
    col += '<td>' + item.DTServico + '</td>';
    col += '<td>';
    col += '<button  onclick="AlterarAgendamento(' + item.Id + ')" type="button"'
    col += 'class="btn1 btn-sm  waves-effect waves-light red"><i class="material-icons">edit</i></button>';
    col += '<button onclick="RemoverLinha(' + item.Id + ')" type="button"'
    col += 'class="btn1 btn-sm  waves-effect waves-light black"><i class="material-icons">delete_sweep</i></button>';
    col += '</td>';
    novaLinha.append(col);
    $("#tabela").append(novaLinha);

}

//botão incluir Agendamento
$('#AlterarAgendamento').click(function () {

    //resetando o formulário
    $("#formulario").each(function () {
        //limpando o formulario
        this.reset();
    });


    //abre a janela
    $("#confirmacao").openModal()


});

//função para botão alterar da tabela
function AlterarAgendamento(id) {
    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Agendamento/' + id,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            //prenche os dados do cliente na tela
            $('#Id').val(dados.Id);
            $('#nome').val(dados.Nome);
            $('#dtvisita').val(dados.Visita);
            $('#texto').val(dados.DServiço);
            $('#model').val(dados.DsMaquina);
            $('#marc').val(dados.Mmaquina);
            $('#IdUsuario').val(dados.IdUsuario);
            $('#preco').val(dados.VlServiço);
            $('#dtservico').val(dados.DTServico);
            $('#btnSalvar').text("Salvar");

            //define título do modal de cadastro
            $('#TituloModal').html("Alterar Agendamento")

            //abre a janela
            $("#confirmacao").openModal()



            //select
            $(document).ready(function () {
                $('select').material_select();
            });

            // DateTimePicker
            $('#dtvisita').datetimepicker({
                lang: 'pt'
            });


            // DateTimePicker
            $('#dtservico').datetimepicker({
                lang: 'pt'
            });

            $(document).ready(function () {
                $(".dropdown-button").dropdown();
            
            });
            
            //textearea
            $(document).ready(function () {
            
                $('#textarea1').val('');
            });
        },
        error: function (erro) {
            alert('Ocorreu um erro');
        }
    });
}




function Alterar(id, Agendamento) {
    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Agendamento/' + id,
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(Agendamento),
        success: function(dados) {
            alert('Dados Alterado com sucesso!');
            $('#Id').val('');
            $('#nome').val('');
            $('#dtvisita').val('');
            $('#texto').val('');
            $('#model').val('');
            $('#marc').val('');
            $('#preco').val('');
            $('#dtservico').val('');
            $("#IdUsuario").val('');


            ListarTodos()



        },
        error: function(erro) {
            alert('Ocorreu um erro');
        }
    });

}



function Excluir(id) {

    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Agendamento/' + id,
        type: 'delete',
        contentType: 'application/json',
        success: function (dados) {
            alert('Dados Excluidos com sucesso!');
            ListarTodos()
        },

        error: function (erro) {
            alert('Ocorreu um erro');
        }

    });

}
function RemoverLinha(id) {
    if (confirm("Tem certeza que deseja excluir")) {
        Excluir(id);
    }


}


