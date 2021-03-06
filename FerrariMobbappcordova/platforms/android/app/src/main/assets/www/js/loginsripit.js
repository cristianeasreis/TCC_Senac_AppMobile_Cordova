
// configurando url
var urlBaseApi = 'http://localhost:61939/api/';
var urlBaseSite = 'http://127.0.0.1:5500/www/';


//executado ao efetuar o envio do formulário
$("#formLogin").submit(function (form) {
    if ($('#email').val().trim() == '') {
        Materialize.toast('Campo Email é obrigatório!', 2000);
        return false;
    }

    if ($('#password').val().trim() == '') {
        Materialize.toast('Campo Senha é obrigatório!', 2000);
        return false;
    }
    form.preventDefault(); //cancela o evento padrão

    //prepara os dados para envio
    var dados = {
        usuario: $('#email').val(),
        senha: $('#password').val()

    }

    $.ajax({
        url: urlBaseApi + 'Login', //url a ser executada
        method: "POST", //tipo de método a ser executado
        contentType: 'application/json', //define o formato json para envio de dados
        data: JSON.stringify(dados),//converte objeto de dados para formato json
        success: function (dados) {
            //grava o cookie
            Cookies.set('site_autenticacao', dados.Token, { expires: 1 });
            //redireciona para página index.html
            window.location.href = urlBaseSite + 'menu.html';
        },
        error: function (data) {
            //se o erro for 401 dá mensagem de usuário ou senha inválidos
            if (data.status == 401) {
                M.toast({ html: 'Usuário e/ou senha inválidos' })
            } else {
                M.toast({ html: 'Ocorreu um erro ao efetuar login' })
            }
        }
    })
});
