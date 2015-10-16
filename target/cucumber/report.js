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
formatter.scenarioOutline({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete",
  "keyword": "Esquema do Cenario",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E ",
  "line": 9
});
formatter.step({
  "name": "O CEP do usuario e conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 10
});
formatter.step({
  "name": "O CEP do usuario deve ser validado pelos correios \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 11
});
formatter.step({
  "name": "O CEP da CompreFacil e conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E ",
  "line": 12
});
formatter.step({
  "name": "O peso do produto e conhecido pelo sistema \u003cnVlPeso\u003e",
  "keyword": "E ",
  "line": 13
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E ",
  "line": 14
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E ",
  "line": 15
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E ",
  "line": 16
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E ",
  "line": 17
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 18
});
formatter.step({
  "name": "Exibe valor e prazo de entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e",
  "keyword": "E ",
  "line": 20
});
formatter.examples({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete;",
  "description": "",
  "name": "",
  "keyword": "Exemplos",
  "line": 22,
  "rows": [
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete;;1",
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
      "line": 23
    },
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete;;2",
      "cells": [
        "null",
        "null",
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
        "S"
      ],
      "line": 24
    },
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete;;3",
      "cells": [
        "null",
        "null",
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
        "S"
      ],
      "line": 25
    }
  ]
});
formatter.before({
  "duration": 2192920,
  "status": "passed"
});
formatter.before({
  "duration": 876805,
  "status": "passed"
});
formatter.before({
  "duration": 794379,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete;;2",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete",
  "keyword": "Esquema do Cenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 41106",
  "keyword": "E ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario e conhecido pelo sistema 126003928",
  "keyword": "E ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP do usuario deve ser validado pelos correios 126003928",
  "keyword": "E ",
  "line": 11,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil e conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 12,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso do produto e conhecido pelo sistema 1",
  "keyword": "E ",
  "line": 13,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 15",
  "keyword": "E ",
  "line": 14,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0",
  "keyword": "E ",
  "line": 15,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 2",
  "keyword": "E ",
  "line": 16,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0",
  "keyword": "E ",
  "line": 17,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 18
});
formatter.step({
  "name": "Exibe valor e prazo de entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e",
  "keyword": "E ",
  "line": 20
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 185479265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41106",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega(int)"
});
formatter.result({
  "duration": 9617235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 42
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 138134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_deve_ser_validado_pelos_correios(int)"
});
formatter.result({
  "duration": 91485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 46
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 73369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_peso_do_produto_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 68840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema(int)"
});
formatter.result({
  "duration": 129528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema(int)"
});
formatter.result({
  "duration": 94203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema(int)"
});
formatter.result({
  "duration": 81521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema(int)"
});
formatter.result({
  "duration": 66123,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 20380,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega_valorFrete_diasEntrega()"
});
formatter.result({
  "duration": 791837465,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega_valorFrete_diasEntrega()"
});
formatter.result({
  "duration": 41665931,
  "status": "failed",
  "error_message": "org.mockito.exceptions.misusing.NullInsteadOfMockException: \nArgument passed to verify() should be a mock but is null!\nExamples of correct verifications:\n    verify(mock).someMethod();\n    verify(mock, times(10)).someMethod();\n    verify(mock, atLeastOnce()).someMethod();\n    not: verify(mock.someMethod());\nAlso, if you use @Mock annotation don\u0027t miss initMocks()\r\n\tat br.unicamp.exemplo.steps.CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega_valorFrete_diasEntrega(CalculafreteSteps.java:132)\r\n\tat ✽.E Salva o valor do Frete e Prazo de Entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e(features/Calculafrete.feature:20)\r\n"
});
formatter.before({
  "duration": 37137,
  "status": "passed"
});
formatter.before({
  "duration": 24909,
  "status": "passed"
});
formatter.before({
  "duration": 23551,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete;;3",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete",
  "keyword": "Esquema do Cenario",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 40010",
  "keyword": "E ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario e conhecido pelo sistema 134068466",
  "keyword": "E ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP do usuario deve ser validado pelos correios 134068466",
  "keyword": "E ",
  "line": 11,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil e conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 12,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso do produto e conhecido pelo sistema 0,5",
  "keyword": "E ",
  "line": 13,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 23",
  "keyword": "E ",
  "line": 14,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0",
  "keyword": "E ",
  "line": 15,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 6,7",
  "keyword": "E ",
  "line": 16,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 1",
  "keyword": "E ",
  "line": 17,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 18
});
formatter.step({
  "name": "Exibe valor e prazo de entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e",
  "keyword": "E ",
  "line": 20
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 36231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40010",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega(int)"
});
formatter.result({
  "duration": 152173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 42
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 117753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_deve_ser_validado_pelos_correios(int)"
});
formatter.result({
  "duration": 257245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 46
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 227807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 43
    },
    {
      "val": "5",
      "offset": 45
    }
  ],
  "location": "CalculafreteSteps.o_peso_do_produto_conhecido_pelo_sistema(int,int)"
});
formatter.result({
  "duration": 161230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema(int)"
});
formatter.result({
  "duration": 92390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema(int)"
});
formatter.result({
  "duration": 82880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 52
    },
    {
      "val": "7",
      "offset": 54
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema(int,int)"
});
formatter.result({
  "duration": 278078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema(int)"
});
formatter.result({
  "duration": 174817,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 33061,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega_valorFrete_diasEntrega()"
});
formatter.result({
  "duration": 35256102,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega_valorFrete_diasEntrega()"
});
formatter.result({
  "duration": 649905,
  "status": "failed",
  "error_message": "org.mockito.exceptions.misusing.NullInsteadOfMockException: \nArgument passed to verify() should be a mock but is null!\nExamples of correct verifications:\n    verify(mock).someMethod();\n    verify(mock, times(10)).someMethod();\n    verify(mock, atLeastOnce()).someMethod();\n    not: verify(mock.someMethod());\nAlso, if you use @Mock annotation don\u0027t miss initMocks()\r\n\tat br.unicamp.exemplo.steps.CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega_valorFrete_diasEntrega(CalculafreteSteps.java:132)\r\n\tat ✽.E Salva o valor do Frete e Prazo de Entrega \u003cvalorFrete\u003e \u003cdiasEntrega\u003e(features/Calculafrete.feature:20)\r\n"
});
});