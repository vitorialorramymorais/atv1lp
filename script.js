class Usuario {
    constructor(nome, rg, pai, escolaridade, telefone, email, dataNascimento, cpf, mae, profissao, celular) {
        this.nome = nome;
        this.rg = rg;
        this.pai = pai;
        this.escolaridade = escolaridade;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.mae = mae;
        this.profissao = profissao;
        this.celular = celular;
    }
}

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var rg = document.getElementById("rg").value;
    var pai = document.getElementById("pai").value;
    var escolaridade = document.getElementById("escolaridade").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var cpf = document.getElementById("cpf").value;
    var mae = document.getElementById("mae").value;
    var profissao = document.getElementById("profissao").value;
    var celular = document.getElementById("celular").value;

    var usuario = new Usuario(nome, rg, pai, escolaridade, telefone, email, dataNascimento, cpf, mae, profissao, celular);
    
    console.log(usuario);
});

function limparCampos() {
    document.getElementById("formCadastro").reset();
}
