function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;

    strCPF = strCPF.replace("-", "");
    while (strCPF.indexOf(".") > -1)
        strCPF = strCPF.replace(".", "");

    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

 //   // $("#cep").mask("99999-999"); 
//     // $('#telefone').mask("(99)9999-9999");
//     // $('#celular').mask("(99)9999-9999");
//     // $("#cnpj").mask("99.999.999/9999-99");
//     // $("#valor").mask("R$9999.99", {completed:function(){alert("You typed the following: "+this.val());}});  

