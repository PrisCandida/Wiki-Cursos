function add() {

    var chave = "aluno-cert";
    var nome = document.getElementById("name").value;
    var cpf = document.getElementById("cpf").value;

    var usuario = {
        nome_: nome,
        cpf_: cpf,
    };

    //Armazena os dados no local Storage do Navegador
    localStorage.setItem(chave, JSON.stringify(usuario))

}

var input_tel = document.getElementById("tel");
input_tel.addEventListener('keyup', mask_tel);

var input_cpf = document.getElementById("cpf");
input_cpf.addEventListener('keyup', mask_cpf);

function mask_tel(e) {

    var caractere = e.target.value.replace(/\D/g, "");

    caractere = caractere.replace(/^(\d\d)(\d)/g, "($1) $2");
    caractere = caractere.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = caractere;
}

function mask_cpf(e) {
    var caractere = e.target.value.replace(/\D/g, "");

    caractere = caractere.replace(/(\d{3})(\d)/, "$1.$2");
    caractere = caractere.replace(/(\d{3})(\d)/, "$1.$2");
    caractere = caractere.replace(/(\d{3})(\d{1,2})/, "$1-$2");

    e.target.value = caractere;
}

function editCert() {
    var nome = document.getElementById("nome");
    var data = document.getElementById("data");
    var cpf = document.getElementById("cpf");

    var date = new Date()
    var datacert = date.getDate() + "/" + (parseInt(date.getMonth())+1) + "/" + date.getFullYear();


    var nome_salvo = JSON.parse(localStorage.getItem("aluno-cert"))
    nome.innerText = nome_salvo.nome_;
    cpf.innerText = nome_salvo.cpf_;

    data.innerText = datacert;
}

