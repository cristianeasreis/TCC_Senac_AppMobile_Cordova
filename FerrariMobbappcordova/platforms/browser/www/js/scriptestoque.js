

$('#something').click(function () {
    location.reload();

}); 
$("#btnSalvar").click(function () {
    Salvar();


});


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
        url: 'http://localhost:61939/api/Estoque',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(Estoque),
        success: function (dados) {
            alert('Dados Inseridos com sucesso!');
            $('#Id').val('');
            $('#nome').val('');
            $('#qp').val('');
            $('#preco').val('');
            
            location.reload();
            $('#nome').focus();
            
            
            
            window.location.href="http://127.0.0.1:5500/www/pestoque.html"
        },
        error: function (erro) {
            alert('Ocorreu um erro');
        }
    });
    
}
























