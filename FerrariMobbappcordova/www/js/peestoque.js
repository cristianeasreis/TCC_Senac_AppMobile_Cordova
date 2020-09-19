


//Jquery
$(document).ready(function () {

    ListarTodos()
    $("#btnSalvar1").click(function () {
        Salvar();
    
    
    });

});


function ListarTodos() {

    $("#tabela > tbody").empty();

    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Estoque',
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
    col += '<td>' + item.Peca + '</td>';
    col += '<td>' + item.Quantidade + '</td>';
    col += '<td>' + item.Valor + '</td>';
    col += '<td>';
    col += '<button  onclick="AlterarEstoque('+ item.Id +')" type="button"'
    col += 'class="btn1 btn-sm  waves-effect waves-light red"><i class="material-icons">edit</i></button>';
    col += '<button onclick="RemoverLinha('+ item.Id +')" type="button"'
    col += 'class="btn1 btn-sm  waves-effect waves-light black"><i class="material-icons">delete_sweep</i></button>';
    col += '</td>';
    novaLinha.append(col);
    $("#tabela").append(novaLinha);

}




function Salvar() {

    //se formulário não tiver válido, já retorna e não continuar o processo
    if ($('#nome').val().trim() == '') {
        Materialize.toast('Campo Nome Do Produto é obrigatório!');
        return false;

    }
    if ($('#qp').val().trim() == '') {
        Materialize.toast('Campo Quantidade  é obrigatório!');
        return false;

    }
    if ($('#preco').val().trim() == '') {
        Materialize.toast('Campo Valor é obrigatório!');
        return false;

    }
    

    var Id = $("#Id").val();
    var Estoque = new Object;

    Estoque.Peca = $("#nome").val();
    Estoque.Quantidade = $("#qp").val();
    Estoque.Valor = $("#preco").val();

   

    if (Id == "") {
        Inserir(Estoque);
    }
    else {
        Alterar(Id, Estoque)
    }

}




function Inserir(Estoque) {
    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Estoque/',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(Estoque),
        success: function (dados) {
            alert('Dados Inseridos com sucesso!');
            $('#Id').val('');
            $('#nome').val('');
            $('#qp').val('');
            $('#preco').val('');
           
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

//botão incluir cliente
$('#btnNovoEstoque').click(function () {

    //resetando o formulário
    $("#formulario").each(function () {
        //limpando o formulario
        this.reset();
    });


    //abre a janela
    $("#confirmacao").openModal()
});

//função para botão alterar da tabela
function AlterarEstoque(id) {
    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Estoque/' + id,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            //prenche os dados do cliente na tela
            $('#Id').val(dados.Id);
            $('#nome').val(dados.Peca);
            $('#qp').val(dados.Quantidade);
            $('#preco').val(dados.Valor);
            $('#btnSalvar').text("Salvar");
            
            //define título do modal de cadastro
            $('#TituloModal').html("Alterar Estoque")
                        
            //abre a janela
            $("#confirmacao").openModal()
           

            
        },
        error: function (erro) {
            alert('Ocorreu um erro');
        }
    });
}

function Alterar(id, Estoque) {

    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Estoque/' + id,
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(Estoque),
        success: function (dados) {
            alert('Dados Alterados Com Sucesso!');
            $("#confirmacao").closeModal()
            $('#Id').val('');
            $('#nome').val('');
            $('#qp').val('');
            $('#preco').val('');
           

            ListarTodos()
        },

        error: function (erro) {
            alert('Ocorreu um erro');
        }

    });

}






function Excluir(id) {

    $.ajax({
        url: 'http://10.136.52.25/apiferrariempilhadeiras/api/Estoque/' + id,
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
