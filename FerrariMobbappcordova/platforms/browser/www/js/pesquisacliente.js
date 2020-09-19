
//Jquery
$(document).ready(function () {

    ListarTodos()
    
    $("#btnSalvar").click(function () {
        Salvar();
    
    
    });

});


function ListarTodos() {

    $("#tabela > tbody").empty();

    $.ajax({
        url: 'http://localhost:61939/api/Cliente/',
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
    col += '<td>' + item.Empresa + '</td>';
    col += '<td>' + item.Cnpj + '</td>';
    col += '<td>';
    col += '<button  onclick="AlterarCliente('+ item.Id +')" type="button"'
    col += 'class="btn btn-sm waves-effect waves-light blue"><i class="material-icons">edit</i></button>';
    col += '<button onclick="RemoverLinha('+ item.Id +')" type="button"'
    col += 'class="btn btn-sm waves-effect waves-light red"><i class="material-icons">delete_sweep</i></button>';
    col += '</td>';
    novaLinha.append(col);
    $("#tabela").append(novaLinha);

}

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

    }if ($('#celular').val().trim() == '') {
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

    }if ($('#bairro').val().trim() == '') {
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




//botão incluir cliente
$('#btnNovoCliente').click(function () {

    //resetando o formulário
    $("#formulario").each(function () {
        //limpando o formulario
        this.reset();
    });

  

    //abre a janela
    $("#confirmacao").openModal()

  });

//função para botão alterar da tabela
function AlterarCliente(id) {
    $.ajax({
        url: 'http://localhost:61939/api/Cliente/' + id,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            //prenche os dados do cliente na tela
            $('#Id').val(dados.Id);
            $('#cnpj').val(dados.Cnpj);
            $('#nome').val(dados.Empresa);
            $('#endereco').val(dados.Endereco);
            $('#estado').val(dados.Estado);
            $('#complemento').val(dados.Complemento);
            $('#numero').val(dados.N);
            $('#endereco').val(dados.Cep);
            $('#cidade').val(dados.Cidade);
            $('#telefone').val(dados.Telefone);
            $('#celular').val(dados.Celular);
            $('#email').val(dados.Email);
            $('#bairro').val(dados.Bairro);
            $('#cep').val(dados.Cep);
            $('#btnSalvar').text("Salvar");

            //define título do modal de cadastro
            $('#TituloModal').html("Alterar Cliente")
                        
            //abre a janela
            $("#confirmacao").openModal()

            
        },
        error: function (erro) {
            alert('Ocorreu um erro');
        }
    });
}

function Alterar(id, Cliente) {

    $.ajax({
        url: 'http://localhost:61939/api/Cliente/' + id,
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(Cliente),
        success: function (dados) {
            alert('Dados Alterados Com Sucesso!');
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
            $('#cep').val('');

            ListarTodos()
        },

        error: function (erro) {
            alert('Ocorreu um erro');
        }

    });

}

function Excluir(id) {

    $.ajax({
        url: 'http://localhost:61939/api/Cliente/' + id,
        type: 'delete',
        contentType: 'application/json',
        success: function (dados) {
            alert('Dados Excluidos co sucesso!');
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