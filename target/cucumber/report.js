$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculafrete.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "CalculaFrete",
  "description": "Como um sistema\r\nQuero calcular o preco e prazo de entrega do frete, incluindo embalagem",
  "id": "calculafrete",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "O peso eh inferior ou igual a 1kg \u003cnVlPeso\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "O formato do envio eh envelope \u003cnCdFormato\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;",
  "rows": [
    {
      "cells": [
        "nCdEmpresa",
        "sDsSenha",
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
        "sCdAvisoRecebimento"
      ],
      "line": 23,
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;1"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "41106 (PAC Varejo)",
        "11092899",
        "126003928",
        "1kg",
        "3 (Envelope)",
        "15cm",
        "0cm",
        "2cm",
        "0cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 24,
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;2"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "40010 (SEDEX Varejo)",
        "11092899",
        "134068466",
        "0,5kg",
        "3 (Envelope)",
        "23cm",
        "0cm",
        "6,7cm",
        "1cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 25,
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 182059,
  "status": "passed"
});
formatter.before({
  "duration": 45361311,
  "status": "passed"
});
formatter.before({
  "duration": 14394368,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "O peso eh inferior ou igual a 1kg 1kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 15cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "A largura dos produtos sao conhecidas pelos sistema 2cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 42817,
  "status": "passed"
});
formatter.before({
  "duration": 41283,
  "status": "passed"
});
formatter.before({
  "duration": 55673,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "O peso eh inferior ou igual a 1kg 0,5kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 23cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "A largura dos produtos sao conhecidas pelos sistema 6,7cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 1cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 20,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 28,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "O peso dos produtos sao conhecidos pelo sistema \u003cnVlPeso\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "O formato do envio eh diferente de envelope \u003cnCdFormato\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 40,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;",
  "rows": [
    {
      "cells": [
        "nCdEmpresa",
        "sDsSenha",
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
        "sCdAvisoRecebimento"
      ],
      "line": 43,
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;1"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "41106 (PAC Varejo)",
        "11092899",
        "126003928",
        "23kg",
        "2(Pacote/Caixa)",
        "105cm",
        "12cm",
        "21cm",
        "0cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 44,
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "40010 (SEDEX Varejo)",
        "11092899",
        "134068466",
        "0,8kg",
        "1(Rolo/Prisma)",
        "32cm",
        "0,6cm",
        "36,7cm",
        "4cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 45,
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 39382,
  "status": "passed"
});
formatter.before({
  "duration": 36266,
  "status": "passed"
});
formatter.before({
  "duration": 25343,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 28,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "O peso dos produtos sao conhecidos pelo sistema 23kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "O formato do envio eh diferente de envelope 2(Pacote/Caixa)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 105cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "A altura dos produtos sao conhecidas pelo sistema 12cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "A largura dos produtos sao conhecidas pelos sistema 21cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 40,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 53446,
  "status": "passed"
});
formatter.before({
  "duration": 38729,
  "status": "passed"
});
formatter.before({
  "duration": 36803,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 28,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "O peso dos produtos sao conhecidos pelo sistema 0,8kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "O formato do envio eh diferente de envelope 1(Rolo/Prisma)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 32cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "A altura dos produtos sao conhecidas pelo sistema 0,6cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "A largura dos produtos sao conhecidas pelos sistema 36,7cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 4cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 40,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Calculo de Preco do Frete, formato da encomenda em envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 48,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 49,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 51,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 52,
  "name": "O peso eh inferior ou igual eh 1kg \u003cnVlPeso\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 53,
  "name": "O formato do envio eh envelope \u003cnCdFormato\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 54,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 55,
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 56,
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "Exibe valor do frete",
  "keyword": "Entao "
});
formatter.step({
  "line": 60,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;",
  "rows": [
    {
      "cells": [
        "nCdEmpresa",
        "sDsSenha",
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
        "sCdAvisoRecebimento"
      ],
      "line": 63,
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;1"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "41106 (PAC Varejo)",
        "11092899",
        "126003928",
        "1kg",
        "3 (Envelope)",
        "15cm",
        "0cm",
        "2cm",
        "0cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 64,
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;2"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "40010 (SEDEX Varejo)",
        "11092899",
        "134068466",
        "0,5kg",
        "3 (Envelope)",
        "23cm",
        "0cm",
        "6,7cm",
        "1cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 65,
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 100927,
  "status": "passed"
});
formatter.before({
  "duration": 46361,
  "status": "passed"
});
formatter.before({
  "duration": 35323,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Calculo de Preco do Frete, formato da encomenda em envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 48,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 49,
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 51,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 52,
  "name": "O peso eh inferior ou igual eh 1kg 1kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 53,
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 54,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 15cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 55,
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 56,
  "name": "A largura dos produtos sao conhecidas pelos sistema 2cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "Exibe valor do frete",
  "keyword": "Entao "
});
formatter.step({
  "line": 60,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 76959,
  "status": "passed"
});
formatter.before({
  "duration": 83530,
  "status": "passed"
});
formatter.before({
  "duration": 58548,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Calculo de Preco do Frete, formato da encomenda em envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 48,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 49,
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 50,
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 51,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 52,
  "name": "O peso eh inferior ou igual eh 1kg 0,5kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 53,
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 54,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 23cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 55,
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 56,
  "name": "A largura dos produtos sao conhecidas pelos sistema 6,7cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 1cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "Exibe valor do frete",
  "keyword": "Entao "
});
formatter.step({
  "line": 60,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Calculo de Preco do Frete, formato da encomenda diferente de envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 68,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 69,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 70,
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 72,
  "name": "O peso dos produtos sao conhecidos pelo sistema  \u003cnVlPeso\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 73,
  "name": "O formato do envio eh diferente de envelope \u003cnCdFormato\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 74,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 75,
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 76,
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 77,
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 78,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 79,
  "name": "Exibe valor do frete",
  "keyword": "Entao "
});
formatter.step({
  "line": 80,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.examples({
  "line": 82,
  "name": "",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;",
  "rows": [
    {
      "cells": [
        "nCdEmpresa",
        "sDsSenha",
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
        "sCdAvisoRecebimento"
      ],
      "line": 83,
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;1"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "41106 (PAC Varejo)",
        "11092899",
        "126003928",
        "23kg",
        "2(Pacote/Caixa)",
        "105cm",
        "12cm",
        "21cm",
        "0cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 84,
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2"
    },
    {
      "cells": [
        "null(fixo)",
        "null(fixo)",
        "40010 (SEDEX Varejo)",
        "11092899",
        "134068466",
        "0,8kg",
        "1(Rolo/Prisma)",
        "32cm",
        "0,6cm",
        "36,7cm",
        "4cm",
        "N (fixo)",
        "0 (fixo)",
        "S (fixo)"
      ],
      "line": 85,
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 38991,
  "status": "passed"
});
formatter.before({
  "duration": 52623,
  "status": "passed"
});
formatter.before({
  "duration": 33034,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Calculo de Preco do Frete, formato da encomenda diferente de envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 68,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 69,
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 70,
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 72,
  "name": "O peso dos produtos sao conhecidos pelo sistema  23kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 73,
  "name": "O formato do envio eh diferente de envelope 2(Pacote/Caixa)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 74,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 105cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 75,
  "name": "A altura dos produtos sao conhecidas pelo sistema 12cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 76,
  "name": "A largura dos produtos sao conhecidas pelos sistema 21cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 77,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 78,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 79,
  "name": "Exibe valor do frete",
  "keyword": "Entao "
});
formatter.step({
  "line": 80,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 57246,
  "status": "passed"
});
formatter.before({
  "duration": 35960,
  "status": "passed"
});
formatter.before({
  "duration": 25982,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Calculo de Preco do Frete, formato da encomenda diferente de envelope.",
  "description": "",
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 68,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 69,
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 70,
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 72,
  "name": "O peso dos produtos sao conhecidos pelo sistema  0,8kg",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 73,
  "name": "O formato do envio eh diferente de envelope 1(Rolo/Prisma)",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 74,
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 32cm",
  "matchedColumns": [
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 75,
  "name": "A altura dos produtos sao conhecidas pelo sistema 0,6cm",
  "matchedColumns": [
    8
  ],
  "keyword": "E "
});
formatter.step({
  "line": 76,
  "name": "A largura dos produtos sao conhecidas pelos sistema 36,7cm",
  "matchedColumns": [
    9
  ],
  "keyword": "E "
});
formatter.step({
  "line": 77,
  "name": "O diametro dos produtos sao conhecidos pelo sistema 4cm",
  "matchedColumns": [
    10
  ],
  "keyword": "E "
});
formatter.step({
  "line": 78,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 79,
  "name": "Exibe valor do frete",
  "keyword": "Entao "
});
formatter.step({
  "line": 80,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 87,
  "name": "Calculo de Prazo de entrega do Frete",
  "description": "",
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 88,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 89,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico \u003e",
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 92,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 93,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 94,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;",
  "rows": [
    {
      "cells": [
        "sCepOrigem",
        "sCepDestino",
        "nCdServico"
      ],
      "line": 97,
      "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;1"
    },
    {
      "cells": [
        "11092899",
        "126003928",
        "40215 (SEDEX 10 Varejo)"
      ],
      "line": 98,
      "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;2"
    },
    {
      "cells": [
        "11092899",
        "134068466",
        "40290 (SEDEX Hoje Varejo)"
      ],
      "line": 99,
      "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 45442,
  "status": "passed"
});
formatter.before({
  "duration": 19934,
  "status": "passed"
});
formatter.before({
  "duration": 18384,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Calculo de Prazo de entrega do Frete",
  "description": "",
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 88,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 89,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico \u003e",
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 92,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 93,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 94,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 69756,
  "status": "passed"
});
formatter.before({
  "duration": 32221,
  "status": "passed"
});
formatter.before({
  "duration": 28235,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Calculo de Prazo de entrega do Frete",
  "description": "",
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 88,
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 89,
  "name": "Informou o tipo de servico de entrega \u003cnCdServico \u003e",
  "keyword": "E "
});
formatter.step({
  "line": 90,
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 91,
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 92,
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando "
});
formatter.step({
  "line": 93,
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao "
});
formatter.step({
  "line": 94,
  "name": "Salva o valor do Frete",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});