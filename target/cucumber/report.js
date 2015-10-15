$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Endereco.feature");
formatter.feature({
  "id": "endereco",
  "description": "Como sistema\r\nQuero buscar o endereco de um usuario a partir do seu CEP",
  "name": "Endereco",
  "keyword": "Funcionalidade",
  "line": 3,
  "comments": [
    {
      "value": "# language: pt",
      "line": 1
    }
  ]
});
formatter.before({
  "duration": 642511,
  "status": "passed"
});
formatter.before({
  "duration": 452770,
  "status": "passed"
});
formatter.before({
  "duration": 486615,
  "status": "passed"
});
formatter.scenario({
  "id": "endereco;buscar-endereco",
  "description": "",
  "name": "Buscar endereco",
  "keyword": "Cenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "O CEP do usuario e conhecido pelo sistema 01001000",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "O sistema faz a busca do endereco nos correios",
  "keyword": "Quando ",
  "line": 9
});
formatter.step({
  "name": "Os correios retorna o endereco completo do usuario",
  "keyword": "Entao ",
  "line": 10,
  "doc_string": {
    "value": "{\"cep\": \"01001-000\", \"logradouro\": \"Praça da Sé\", \"complemento\": \"lado ímpar\", \"bairro\": \"Sé\", \"localidade\": \"São Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}",
    "line": 11,
    "content_type": ""
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "EnderecoSteps.o_sistema_faz_a_busca_do_endereco_nos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnderecoSteps.os_correios_retorna_o_endereco_completo_do_usuario(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 31388,
  "status": "passed"
});
formatter.before({
  "duration": 61976,
  "status": "passed"
});
formatter.before({
  "duration": 49803,
  "status": "passed"
});
formatter.scenario({
  "id": "endereco;buscar-endereco",
  "description": "",
  "name": "Buscar endereco",
  "keyword": "Cenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "O CEP do usuario nao é conhecido pelo sistema 8888888",
  "keyword": "Dado ",
  "line": 15
});
formatter.step({
  "name": "O sistema faz a busca do endereco nos correios",
  "keyword": "Quando ",
  "line": 16
});
formatter.step({
  "name": "Os correios retorna um erro com a mensagem",
  "keyword": "Entao ",
  "line": 17,
  "doc_string": {
    "value": "/ cep invalido",
    "line": 18,
    "content_type": ""
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "EnderecoSteps.o_sistema_faz_a_busca_do_endereco_nos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnderecoSteps.os_correios_retorna_um_erro_com_a_mensagem(String)"
});
formatter.result({
  "status": "skipped"
});
});