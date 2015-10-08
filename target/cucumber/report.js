$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Endereco.feature");
formatter.feature({
  "id": "endereco",
  "description": "Como sistema\nQuero buscar o endereco de um usuario a partir do seu CEP",
  "name": "Endereco",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 743122,
  "status": "passed"
});
formatter.before({
  "duration": 126402550,
  "status": "passed"
});
formatter.scenario({
  "id": "endereco;buscar-endereco",
  "description": "",
  "name": "Buscar endereco",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "O CEP do usuario e conhecido pelo sistema",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "O sistema faz a busca do endereco nos correios",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "Os correios retorna o endereco completo do usuario \"Praça da Se\"",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "EnderecoSteps.o_cep_do_usuario_e_conhecido_pelo_sistema()"
});
formatter.result({
  "duration": 114445686,
  "status": "passed"
});
formatter.match({
  "location": "EnderecoSteps.o_sistema_faz_a_busca_do_endereco_nos_correios()"
});
formatter.result({
  "duration": 36663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Praça da Se",
      "offset": 52
    }
  ],
  "location": "EnderecoSteps.os_correios_retorna_o_endereco_completo_do_usuario(String)"
});
formatter.result({
  "duration": 37140991471,
  "status": "passed"
});
});