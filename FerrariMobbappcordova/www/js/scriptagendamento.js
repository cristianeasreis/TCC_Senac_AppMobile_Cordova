$(document).ready(function() {
    $(".dropdown-button").dropdown();

});

// DateTimePicker
$('#dtvisita').datetimepicker({
    lang: 'pt'
});
//select
$(document).ready(function() {
    $('select').material_select();
});

// DateTimePicker
$('#dtservico').datetimepicker({
    lang: 'pt'
});

//textearea
$(document).ready(function() {

    $('#textarea1').val('');
});


$("#btnSalvar").click(function() {
    Salvar();


});

function Salvar() {
 //se formulário não tiver válido, já retorna e não continuar o processo
 if ($('#nome').val().trim() == '') {
    Materialize.toast('Campo Nome Da Empresa é obrigatório!',2000);
    return false;

}
if ($('#dtvisita').val().trim() == '') {
    Materialize.toast('Campo data de visita é obrigatorio!',2000);
    return false;

}
if ($('#marc').val().trim() == '') {
    Materialize.toast('Campo marca da máquina é obrigatório!',2000);
    return false;

}   if ($('#marc').val().trim() == '') {
    Materialize.toast('Campo marca da máquina é obrigatório!',2000);
    return false;

}
if ($('#model :selected').text() == '') {
    Materialize.toast('Campo marca da máquina é obrigatório!',2000);
    return false;

}


if ($('#preco').val().trim() == '') {
    Materialize.toast('Campo valor de serviço é obrigatório!',2000);
    return false;

}

if ($('#dtservico').val().trim() == '') {
    Materialize.toast('Campo data de serviço é obrigatório!',2000);
    return false;

}
if ($('#texto').val().trim() == '') {
    Materialize.toast('Campo descrição é obrigatório!',2000);
    return false;

}
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

function Inserir(Agendamento) {
    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Agendamento/',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(Agendamento),
        success: function(dados) {
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
        error: function(erro) {
            alert('Ocorreu um erro');
        }
    });

}



   
   
