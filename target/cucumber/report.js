$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculafrete.feature");
formatter.feature({
  "id": "calculafrete",
  "description": "Como um sistema\r\nQuero calcular o preco e prazo de entrega do frete",
  "name": "CalculaFrete",
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
  "duration": 6302512,
  "status": "passed"
});
formatter.before({
  "duration": 3543343,
  "status": "passed"
});
formatter.before({
  "duration": 4498200,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete",
  "keyword": "Cenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "Informou o tipo de servico de entrega",
  "keyword": "E ",
  "line": 9
});
formatter.step({
  "name": "O CEP do usuario e conhecido pelo sistema",
  "keyword": "E ",
  "line": 10
});
formatter.step({
  "name": "O CEP do usuario deve ser validado pelos correios",
  "keyword": "E ",
  "line": 11
});
formatter.step({
  "name": "O CEP da CompreFacil e conhecido pelo sistema",
  "keyword": "E ",
  "line": 12
});
formatter.step({
  "name": "O peso do produto e conhecido pelo sistema",
  "keyword": "E ",
  "line": 13
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema",
  "keyword": "E ",
  "line": 14
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema",
  "keyword": "E ",
  "line": 15
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema",
  "keyword": "E ",
  "line": 16
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema",
  "keyword": "E ",
  "line": 17
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 18
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Exibe valor e prazo de entrega",
  "keyword": "E ",
  "line": 20,
  "rows": [
    {
      "cells": [
        "nCdServico",
        "sCepOrigem",
        "sCepDestino",
        "nVlPeso",
        "nCdFormato",
        "nVlComprimento",
        "nVlAltura",
        "nVlLargura",
        "nVlDiametro",
        "sCdMaoPropria",
        "nVlValorDeclarado",
        "sCdAvisoRecebimento",
        "valorFrete",
        "diasEntrega"
      ],
      "line": 21
    },
    {
      "cells": [
        "41106",
        "11092899",
        "126003928",
        "1",
        "3",
        "15",
        "0",
        "2",
        "0",
        "N",
        "0",
        "S",
        "12",
        "3"
      ],
      "line": 22
    },
    {
      "cells": [
        "40010",
        "11092899",
        "134068466",
        "0,5",
        "3",
        "23",
        "0",
        "6,7",
        "1",
        "N",
        "0",
        "S",
        "80",
        "4"
      ],
      "line": 23
    }
  ]
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EnderecoSteps.o_cep_do_usuario_e_conhecido_pelo_sistema(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.o_CEP_do_usuario_deve_ser_validado_pelos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_e_conhecido_pelo_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.o_peso_do_produto_e_conhecido_pelo_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega(Calculafrete\u003e)"
});
formatter.result({
  "status": "skipped"
});
});