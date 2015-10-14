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
<<<<<<< HEAD
  "duration": 2194278,
  "status": "passed"
});
formatter.before({
  "duration": 17987189,
  "status": "passed"
});
formatter.before({
  "duration": 88768,
=======
  "duration": 1549023,
  "status": "passed"
});
formatter.before({
  "duration": 212651,
  "status": "passed"
});
formatter.before({
  "duration": 767991,
>>>>>>> a2941ef1baf0afd3da4dc2ca0d0107285e53dcde
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
  "line": 8
});
formatter.step({
  "name": "O sistema faz a busca do endereco nos correios",
  "keyword": "Quando ",
  "line": 9
});
formatter.step({
  "name": "Os correios retorna o endereco completo do usuario \"Praca da Se\"",
  "keyword": "Entao ",
  "line": 10
});
formatter.match({
  "location": "EnderecoSteps.setUp()"
});
formatter.result({
  "duration": 125819143,
  "status": "passed"
});
formatter.match({
  "location": "EnderecoSteps.o_sistema_faz_a_busca_do_endereco_nos_correios()"
});
formatter.result({
  "duration": 56666707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Praca da Se",
      "offset": 52
    }
  ],
  "location": "EnderecoSteps.os_correios_retorna_o_endereco_completo_do_usuario(String)"
});
formatter.result({
  "duration": 3207663,
  "status": "passed"
});
});