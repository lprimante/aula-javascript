let adress = {
    Logradouro: "Rua Salvador Romeu",
    Numero: "174",
    Bairro: "Vila Isolina Mazzei",
    Cep: "02081-000",
    Cidade: "São Paulo",
    Estado: "SP",
    Pais: "Brasil",
    exibirInfo: function() {
        return "Seu endereço é " + this.Logradouro + ", " + this.Numero + " localizado no bairro " + this.Bairro + ", na cidade de " + this.Cidade + ", " + this.Estado + ".";
    }
}

document.write(adress.exibirInfo());