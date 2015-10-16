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
  "duration": 673553,
  "status": "passed"
});
formatter.before({
  "duration": 469809,
  "status": "passed"
});
formatter.before({
  "duration": 590215,
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
  "name": "O CEP do usuario e conhecido pelo sistema",
  "keyword": "Dado ",
  "line": 8,
  "doc_string": {
    "value": "01001000",
    "line": 9,
    "content_type": "\""
  }
});
formatter.step({
  "name": "O sistema faz a busca do endereco nos correios",
  "keyword": "Quando ",
  "line": 12
});
formatter.step({
  "name": "Os correios retorna o endereco completo do usuario",
  "keyword": "Entao ",
  "line": 13,
  "doc_string": {
    "value": "{\"cep\": \"01001-000\", \"logradouro\": \"Praça da Sé\", \"complemento\": \"lado ímpar\", \"bairro\": \"Sé\", \"localidade\": \"São Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "EnderecoSteps.o_cep_do_usuario_e_conhecido_pelo_sistema(String)"
});
formatter.result({
  "duration": 573378792,
  "status": "passed"
});
formatter.match({
  "location": "EnderecoSteps.o_sistema_faz_a_busca_do_endereco_nos_correios()"
});
formatter.result({
  "duration": 39895155,
  "status": "passed"
});
formatter.match({
  "location": "EnderecoSteps.os_correios_retorna_o_endereco_completo_do_usuario(String)"
});
formatter.result({
  "duration": 2310582,
  "status": "passed"
});
formatter.before({
  "duration": 35298,
  "status": "passed"
});
formatter.before({
  "duration": 40063,
  "status": "passed"
});
formatter.before({
  "duration": 33041,
  "status": "passed"
});
formatter.scenario({
  "id": "endereco;buscar-endereco-invalido",
  "description": "",
  "name": "Buscar endereco Invalido",
  "keyword": "Cenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "O CEP do usuario nao é conhecido pelo sistema",
  "keyword": "Dado ",
  "line": 18,
  "doc_string": {
    "value": "8888888",
    "line": 19,
    "content_type": "\""
  }
});
formatter.step({
  "name": "O sistema faz a busca do endereco nos correios",
  "keyword": "Quando ",
  "line": 22
});
formatter.step({
  "name": "Os correios retorna um erro com a mensagem",
  "keyword": "Entao ",
  "line": 23,
  "doc_string": {
    "value": "{\"erro\": \"endereco invalido\"}",
    "line": 24,
    "content_type": ""
  }
});
formatter.match({
  "location": "EnderecoSteps.o_CEP_do_usuario_nao_é_conhecido_pelo_sistema(String)"
});
formatter.result({
  "duration": 34495454,
  "status": "passed"
});
formatter.match({
  "location": "EnderecoSteps.o_sistema_faz_a_busca_do_endereco_nos_correios()"
});
formatter.result({
  "duration": 11503046,
  "status": "passed"
});
formatter.match({
  "location": "EnderecoSteps.os_correios_retorna_um_erro_com_a_mensagem(String)"
});
formatter.result({
  "duration": 87406,
  "status": "passed"
});
});