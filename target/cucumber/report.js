$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Endereco.feature");
formatter.feature({
  "id": "endereco",
  "description": "Como sistema\r\nQuero buscar o endereco de um usuario a partir do seu CEP",
  "name": "Endereco",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1227462,
  "status": "passed"
});
formatter.before({
  "duration": 1346036,
  "status": "passed"
});
formatter.before({
  "duration": 64579,
  "status": "passed"
});
formatter.scenario({
  "id": "endereco;buscar-endereco",
  "description": "Dado O CEP do usuario e conhecido pelo sistema\r\nQuando O sistema faz a busca do endereco nos correios\r\nEntao Os correios retorna o endereco completo do usuario {\"cep\": \"01001-000\", \"logradouro\": \"Praï¿½a da Sï¿½\", \"complemento\": \"lado ï¿½mpar\", \"bairro\": \"Sï¿½\", \"localidade\": \"Sï¿½o Paulo\", \"uf\": \"SP\", \"ibge\": \"3550308\"}",
  "name": "Buscar endereco",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
});