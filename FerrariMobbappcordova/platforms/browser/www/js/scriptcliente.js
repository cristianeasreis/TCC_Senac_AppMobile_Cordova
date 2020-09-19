

$('#something').click(function () {
    location.reload();

});
$("#btnSalvar").click(function () {
    Salvar();


});


function Salvar() {

    //se formulário não tiver válido, já retorna e não continuar o processo
    if ($('#nome').val().trim() == '') {
        Materialize.toast('Campo Nome Da Empresa é obrigatório!');
        return false;

    }
    if ($('#cnpj').val().trim() == '') {
        Materialize.toast('Campo CNPJ  é obrigatório!');
        return false;

    }
    if ($('#email').val().trim() == '') {
        Materialize.toast('Campo Email é obrigatório!');
        return false;

    }
    if ($('#telefone').val().trim() == '') {
        Materialize.toast('Campo Telefone  é obrigatório!');
        return false;

    } if ($('#celular').val().trim() == '') {
        Materialize.toast('Campo Celular é obrigatório!');
        return false;

    }
    if ($('#endereco').val().trim() == '') {
        Materialize.toast('Campo Endereço  é obrigatório!');
        return false;

    }
    if ($('#numero').val().trim() == '') {
        Materialize.toast('Campo Numero  é obrigatório!');
        return false;

    }
    if ($('#complemento').val().trim() == '') {
        Materialize.toast('Campo Complemento  é obrigatório!');
        return false;

    } if ($('#bairro').val().trim() == '') {
        Materialize.toast('Campo Bairro é obrigatório!');
        return false;

    }
    if ($('#estado').val().trim() == '') {
        Materialize.toast('Campo Estado  é obrigatório!');
        return false;

    }
    if ($('#cep').val().trim() == '') {
        Materialize.toast('Campo Cep  é obrigatório!');
        return false;

    }


    var Id = $("#Id").val();
    var Cliente = new Object;

    Cliente.Empresa = $("#nome").val();
    Cliente.Email = $("#email").val();
    Cliente.Telefone = $("#telefone").val();
    Cliente.Celular = $("#celular").val();
    Cliente.Cnpj = $("#cnpj").val();
    Cliente.Endereco = $("#endereco").val();
    Cliente.N = $("#numero").val();
    Cliente.Bairro = $("#bairro").val();
    Cliente.Estado = $("#estado").val();
    Cliente.Ativo = true;
    Cliente.CEP = $("#cep").val();
    Cliente.Complemento = $("#complemento").val();
    Cliente.Cidade = $("#cidade").val();


    if (Id == "") {
        Inserir(Cliente);
    }
    else {
        Alterar(Id, Cliente)
    }

}


function Inserir(Cliente) {

    $.ajax({
        url: 'http://localhost:61939/api/Cliente',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(Cliente),
        success: function (dados) {
            alert('Dados Inseridos com sucesso!');
            $('#Id').val('');
            $('#nome').val('');
            $('#cnpj').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#celular').val('');
            $('#endereco').val('');
            $('#numero').val('');
            $('#complemento').val('');
            $('#bairro').val('');
            $('#cidade').val('');
            $('#estado').val('');
            $('#ativo').val('');
            $('#cep').val('');
            //$('#txtAtivoC').val('');
            //$('#txtAtivoA').val('');
            //$('#DataStatus').val('');

            location.reload();
            $('#nome').focus();



        },

        error: function (erro) {
            alert('Ocorreu um erro');
        }

    });

}












