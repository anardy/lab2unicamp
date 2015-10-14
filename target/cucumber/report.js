$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Endereco.feature");
formatter.feature({
  "id": "endereco",
  "description": "Como sistema\r\nQuero buscar o endereco de um usuario a partir do seu CEP",
  "name": "Endereco",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2194278,
  "status": "passed"
});
formatter.before({
  "duration": 17987189,
  "status": "passed"
});
formatter.before({
  "duration": 88768,
  "status": "passed"
});
formatter.scenario({
  "id": "endereco;buscar-endereco",
  "description": "Dado O CEP do usuario e conhecido pelo sistema\r\nQuando O sistema faz a busca do endereco nos correios\r\nEntao Os correios retorna o endereco completo do usuario \"Pra�a da Se\"",
  "name": "Buscar endereco",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
});