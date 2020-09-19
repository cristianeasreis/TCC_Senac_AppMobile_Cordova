


$(document).ready(function () {
    $(".dropdown-button").dropdown();

});

// DateTimePicker
$('#dtvisita').datetimepicker({
       lang: 'pt'
});
// select
$(document).ready(function () {
    $('select').material_select();
});

// DateTimePicker
$('#dtservico').datetimepicker({
    lang: 'pt'
});

//textearea
$(document).ready(function () {

    $('#textarea1').val('');
});


$("#btnSalvar").click(function () {
    Salvar();


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
    Agendamento.IdUsuario = $("#IdUsuario").val();
    Agendamento.Ativo = true;

    

 
 

    if (Id == "") {
        Inserir(Agendamento);
    }
    else {
        Alterar(Id, Agendamento)
    }



}

function Inserir(Agendamento) {
    $.ajax({
        url: 'http://localhost:61939/api/Agendamento/',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(Agendamento),
        success: function (dados) {
            alert('Dados Inseridos com sucesso!');
            $('#Id').val('');
            $('#nome').val('');
            $('#dtvisita').val('');
            $('#texto').val('');
            $('#model').val('');
            $('#marc').val('');
            $('#preco').val('');
            $('#dtservico').val('');
            $("#IdUsuario").val();
           
            
            location.reload();
            $('#nome').focus();



        },
        error: function (erro) {
            alert('Ocorreu um erro');
        }
    });

}





