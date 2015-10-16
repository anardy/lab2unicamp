$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculafrete.feature");
formatter.feature({
  "id": "calculafrete",
  "description": "Como um sistema\r\nQuero calcular o preco e prazo de entrega do frete, incluindo embalagem",
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
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.",
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
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 10
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E ",
  "line": 11
});
formatter.step({
  "name": "O peso eh inferior ou igual a 1kg \u003cnVlPeso\u003e",
  "keyword": "E ",
  "line": 12
});
formatter.step({
  "name": "O formato do envio eh envelope \u003cnCdFormato\u003e",
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
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 20
});
formatter.examples({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;",
  "description": "",
  "name": "",
  "keyword": "Exemplos",
  "line": 22,
  "rows": [
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;1",
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
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;2",
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
      "line": 24
    },
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;3",
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
      "line": 25
    }
  ]
});
formatter.before({
  "duration": 987555,
  "status": "passed"
});
formatter.before({
  "duration": 655061,
  "status": "passed"
});
formatter.before({
  "duration": 617882,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;2",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.",
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
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "keyword": "E ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "keyword": "E ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso eh inferior ou igual a 1kg 1kg",
  "keyword": "E ",
  "line": 12,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "keyword": "E ",
  "line": 13,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 15cm",
  "keyword": "E ",
  "line": 14,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "keyword": "E ",
  "line": 15,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 2cm",
  "keyword": "E ",
  "line": 16,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
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
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 20
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 147570079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41106",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_PAC_Varejo(int)"
});
formatter.result({
  "duration": 2182813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 110169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 84919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "CalculafreteSteps.o_peso_eh_inferior_ou_igual_a_kg_kg(int,int)"
});
formatter.result({
  "duration": 123826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_envelope_Envelope(int)"
});
formatter.result({
  "duration": 77352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 73347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 75445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int)"
});
formatter.result({
  "duration": 87340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 254381,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 38892,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int)"
});
formatter.result({
  "duration": 1149177,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Exibe valor e prazo de entrega$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Entao Exibe valor e prazo de entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 50975,
  "status": "passed"
});
formatter.before({
  "duration": 29009,
  "status": "passed"
});
formatter.before({
  "duration": 28536,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-em-envelope.;;3",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda em envelope.",
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
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "keyword": "E ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "keyword": "E ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 11,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso eh inferior ou igual a 1kg 0,5kg",
  "keyword": "E ",
  "line": 12,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "keyword": "E ",
  "line": 13,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 23cm",
  "keyword": "E ",
  "line": 14,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "keyword": "E ",
  "line": 15,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 6,7cm",
  "keyword": "E ",
  "line": 16,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 1cm",
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
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 20
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 28428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40010",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_SEDEX_Varejo(int)"
});
formatter.result({
  "duration": 135917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 110652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 128241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 34
    },
    {
      "val": "5",
      "offset": 36
    }
  ],
  "location": "CalculafreteSteps.o_peso_eh_inferior_ou_igual_a_kg_kg(int,int,int)"
});
formatter.result({
  "duration": 198720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_envelope_Envelope(int)"
});
formatter.result({
  "duration": 108223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 119759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 106655,
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
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int,int)"
});
formatter.result({
  "duration": 170399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 109366,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 26269,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int)"
});
formatter.result({
  "duration": 768299,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Exibe valor e prazo de entrega$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Entao Exibe valor e prazo de entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.",
  "keyword": "Esquema do Cenario",
  "line": 27,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 28
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E ",
  "line": 29
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 30
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E ",
  "line": 31
});
formatter.step({
  "name": "O peso dos produtos sao conhecidos pelo sistema \u003cnVlPeso\u003e",
  "keyword": "E ",
  "line": 32
});
formatter.step({
  "name": "O formato do envio eh diferente de envelope \u003cnCdFormato\u003e",
  "keyword": "E ",
  "line": 33
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E ",
  "line": 34
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E ",
  "line": 35
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E ",
  "line": 36
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E ",
  "line": 37
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 38
});
formatter.step({
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao ",
  "line": 39
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 40
});
formatter.examples({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;",
  "description": "",
  "name": "",
  "keyword": "Exemplos",
  "line": 42,
  "rows": [
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;1",
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
      "line": 43
    },
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2",
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
      "line": 44
    },
    {
      "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3",
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
      "line": 45
    }
  ]
});
formatter.before({
  "duration": 53039,
  "status": "passed"
});
formatter.before({
  "duration": 43463,
  "status": "passed"
});
formatter.before({
  "duration": 43842,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.",
  "keyword": "Esquema do Cenario",
  "line": 44,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 28
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "keyword": "E ",
  "line": 29,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "keyword": "E ",
  "line": 30,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 31,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso dos produtos sao conhecidos pelo sistema 23kg",
  "keyword": "E ",
  "line": 32,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh diferente de envelope 2(Pacote/Caixa)",
  "keyword": "E ",
  "line": 33,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 105cm",
  "keyword": "E ",
  "line": 34,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 12cm",
  "keyword": "E ",
  "line": 35,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 21cm",
  "keyword": "E ",
  "line": 36,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "keyword": "E ",
  "line": 37,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 38
});
formatter.step({
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao ",
  "line": 39
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 40
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 23399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41106",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_PAC_Varejo(int)"
});
formatter.result({
  "duration": 83538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 69829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 63353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 48
    }
  ],
  "location": "CalculafreteSteps.o_peso_dos_produtos_sao_conhecidos_pelo_sistema_kg(int)"
});
formatter.result({
  "duration": 75537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_diferente_de_envelope_Pacote_Caixa(int)"
});
formatter.result({
  "duration": 70784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 62130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 57868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int)"
});
formatter.result({
  "duration": 61341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 55788,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 17403,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int)"
});
formatter.result({
  "duration": 332359,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Exibe valor e prazo de entrega$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Entao Exibe valor e prazo de entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 29615,
  "status": "passed"
});
formatter.before({
  "duration": 26669,
  "status": "passed"
});
formatter.before({
  "duration": 25262,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-e-prazo-de-entrega-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3",
  "description": "",
  "name": "Calculo de Preco e Prazo de entrega do Frete, formato da encomenda diferente de envelope.",
  "keyword": "Esquema do Cenario",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 28
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "keyword": "E ",
  "line": 29,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "keyword": "E ",
  "line": 30,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 31,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso dos produtos sao conhecidos pelo sistema 0,8kg",
  "keyword": "E ",
  "line": 32,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh diferente de envelope 1(Rolo/Prisma)",
  "keyword": "E ",
  "line": 33,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 32cm",
  "keyword": "E ",
  "line": 34,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0,6cm",
  "keyword": "E ",
  "line": 35,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 36,7cm",
  "keyword": "E ",
  "line": 36,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 4cm",
  "keyword": "E ",
  "line": 37,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 38
});
formatter.step({
  "name": "Exibe valor e prazo de entrega",
  "keyword": "Entao ",
  "line": 39
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 40
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 20362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40010",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_SEDEX_Varejo(int)"
});
formatter.result({
  "duration": 78064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 55140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 53233,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_diferente_de_envelope_Rolo_Prisma(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    },
    {
      "val": "6",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 52
    },
    {
      "val": "7",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
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
  "location": "CalculafreteSteps.exibe_valor_e_prazo_de_entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.",
  "description": "",
  "name": "Calculo de Preco do Frete, formato da encomenda em envelope.",
  "keyword": "Esquema do Cenario",
  "line": 47,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 48
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E ",
  "line": 49
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 50
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E ",
  "line": 51
});
formatter.step({
  "name": "O peso eh inferior ou igual eh 1kg \u003cnVlPeso\u003e",
  "keyword": "E ",
  "line": 52
});
formatter.step({
  "name": "O formato do envio eh envelope \u003cnCdFormato\u003e",
  "keyword": "E ",
  "line": 53
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E ",
  "line": 54
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E ",
  "line": 55
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E ",
  "line": 56
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E ",
  "line": 57
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 58
});
formatter.step({
  "name": "Exibe valor do frete",
  "keyword": "Entao ",
  "line": 59
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 60
});
formatter.examples({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;",
  "description": "",
  "name": "",
  "keyword": "Exemplos",
  "line": 62,
  "rows": [
    {
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;1",
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
      "line": 63
    },
    {
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;2",
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
      "line": 64
    },
    {
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;3",
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
      "line": 65
    }
  ]
});
formatter.before({
  "duration": 33446,
  "status": "passed"
});
formatter.before({
  "duration": 30948,
  "status": "passed"
});
formatter.before({
  "duration": 20646,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;2",
  "description": "",
  "name": "Calculo de Preco do Frete, formato da encomenda em envelope.",
  "keyword": "Esquema do Cenario",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 48
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "keyword": "E ",
  "line": 49,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "keyword": "E ",
  "line": 50,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 51,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso eh inferior ou igual eh 1kg 1kg",
  "keyword": "E ",
  "line": 52,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "keyword": "E ",
  "line": 53,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 15cm",
  "keyword": "E ",
  "line": 54,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "keyword": "E ",
  "line": 55,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 2cm",
  "keyword": "E ",
  "line": 56,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "keyword": "E ",
  "line": 57,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 58
});
formatter.step({
  "name": "Exibe valor do frete",
  "keyword": "Entao ",
  "line": 59
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 60
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 22109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41106",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_PAC_Varejo(int)"
});
formatter.result({
  "duration": 95510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 76949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 70479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "CalculafreteSteps.o_peso_eh_inferior_ou_igual_eh_kg_kg(int,int)"
});
formatter.result({
  "duration": 98401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_envelope_Envelope(int)"
});
formatter.result({
  "duration": 55969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 62409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 75240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int)"
});
formatter.result({
  "duration": 85089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 56836,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 18753,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_do_frete()"
});
formatter.result({
  "duration": 36981,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "duration": 494425,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Salva o valor do Frete e Prazo de Entrega$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: E Salva o valor do Frete e Prazo de Entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.before({
  "duration": 49052,
  "status": "passed"
});
formatter.before({
  "duration": 39362,
  "status": "passed"
});
formatter.before({
  "duration": 35891,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-em-envelope.;;3",
  "description": "",
  "name": "Calculo de Preco do Frete, formato da encomenda em envelope.",
  "keyword": "Esquema do Cenario",
  "line": 65,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 48
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "keyword": "E ",
  "line": 49,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "keyword": "E ",
  "line": 50,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 51,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso eh inferior ou igual eh 1kg 0,5kg",
  "keyword": "E ",
  "line": 52,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh envelope 3 (Envelope)",
  "keyword": "E ",
  "line": 53,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 23cm",
  "keyword": "E ",
  "line": 54,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0cm",
  "keyword": "E ",
  "line": 55,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 6,7cm",
  "keyword": "E ",
  "line": 56,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 1cm",
  "keyword": "E ",
  "line": 57,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 58
});
formatter.step({
  "name": "Exibe valor do frete",
  "keyword": "Entao ",
  "line": 59
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 60
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 35154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40010",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_SEDEX_Varejo(int)"
});
formatter.result({
  "duration": 131455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 81038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 60847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "0",
      "offset": 35
    },
    {
      "val": "5",
      "offset": 37
    }
  ],
  "location": "CalculafreteSteps.o_peso_eh_inferior_ou_igual_eh_kg_kg(int,int,int)"
});
formatter.result({
  "duration": 124791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_envelope_Envelope(int)"
});
formatter.result({
  "duration": 58059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 60021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 54187,
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
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int,int)"
});
formatter.result({
  "duration": 105672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "duration": 69747,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 15807,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_valor_do_frete()"
});
formatter.result({
  "duration": 15129,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "duration": 296259,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Salva o valor do Frete e Prazo de Entrega$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: E Salva o valor do Frete e Prazo de Entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.scenarioOutline({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.",
  "description": "",
  "name": "Calculo de Preco do Frete, formato da encomenda diferente de envelope.",
  "keyword": "Esquema do Cenario",
  "line": 67,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 68
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico\u003e",
  "keyword": "E ",
  "line": 69
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 70
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E ",
  "line": 71
});
formatter.step({
  "name": "O peso dos produtos sao conhecidos pelo sistema  \u003cnVlPeso\u003e",
  "keyword": "E ",
  "line": 72
});
formatter.step({
  "name": "O formato do envio eh diferente de envelope \u003cnCdFormato\u003e",
  "keyword": "E ",
  "line": 73
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema \u003cnVlComprimento\u003e",
  "keyword": "E ",
  "line": 74
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema \u003cnVlAltura\u003e",
  "keyword": "E ",
  "line": 75
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema \u003cnVlLargura\u003e",
  "keyword": "E ",
  "line": 76
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema \u003cnVlDiametro\u003e",
  "keyword": "E ",
  "line": 77
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 78
});
formatter.step({
  "name": "Exibe valor do frete",
  "keyword": "Entao ",
  "line": 79
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 80
});
formatter.examples({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;",
  "description": "",
  "name": "",
  "keyword": "Exemplos",
  "line": 82,
  "rows": [
    {
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;1",
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
      "line": 83
    },
    {
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2",
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
      "line": 84
    },
    {
      "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3",
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
      "line": 85
    }
  ]
});
formatter.before({
  "duration": 30266,
  "status": "passed"
});
formatter.before({
  "duration": 20504,
  "status": "passed"
});
formatter.before({
  "duration": 23907,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;2",
  "description": "",
  "name": "Calculo de Preco do Frete, formato da encomenda diferente de envelope.",
  "keyword": "Esquema do Cenario",
  "line": 84,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 68
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 41106 (PAC Varejo)",
  "keyword": "E ",
  "line": 69,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "keyword": "E ",
  "line": 70,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 71,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso dos produtos sao conhecidos pelo sistema  23kg",
  "keyword": "E ",
  "line": 72,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh diferente de envelope 2(Pacote/Caixa)",
  "keyword": "E ",
  "line": 73,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 105cm",
  "keyword": "E ",
  "line": 74,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 12cm",
  "keyword": "E ",
  "line": 75,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 21cm",
  "keyword": "E ",
  "line": 76,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 0cm",
  "keyword": "E ",
  "line": 77,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 78
});
formatter.step({
  "name": "Exibe valor do frete",
  "keyword": "Entao ",
  "line": 79
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 80
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 25485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "41106",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_PAC_Varejo(int)"
});
formatter.result({
  "duration": 86867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 65292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 90449,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_diferente_de_envelope_Pacote_Caixa(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "105",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 50
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
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
  "location": "CalculafreteSteps.exibe_valor_do_frete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 23939,
  "status": "passed"
});
formatter.before({
  "duration": 20391,
  "status": "passed"
});
formatter.before({
  "duration": 20062,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-preco-do-frete,-formato-da-encomenda-diferente-de-envelope.;;3",
  "description": "",
  "name": "Calculo de Preco do Frete, formato da encomenda diferente de envelope.",
  "keyword": "Esquema do Cenario",
  "line": 85,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 68
});
formatter.step({
  "name": "Informou o tipo de servico de entrega 40010 (SEDEX Varejo)",
  "keyword": "E ",
  "line": 69,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "keyword": "E ",
  "line": 70,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 71,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "O peso dos produtos sao conhecidos pelo sistema  0,8kg",
  "keyword": "E ",
  "line": 72,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "O formato do envio eh diferente de envelope 1(Rolo/Prisma)",
  "keyword": "E ",
  "line": 73,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "O comprimento dos produtos sao conhecidos pelo sistema 32cm",
  "keyword": "E ",
  "line": 74,
  "matchedColumns": [
    7
  ]
});
formatter.step({
  "name": "A altura dos produtos sao conhecidas pelo sistema 0,6cm",
  "keyword": "E ",
  "line": 75,
  "matchedColumns": [
    8
  ]
});
formatter.step({
  "name": "A largura dos produtos sao conhecidas pelos sistema 36,7cm",
  "keyword": "E ",
  "line": 76,
  "matchedColumns": [
    9
  ]
});
formatter.step({
  "name": "O diametro dos produtos sao conhecidos pelo sistema 4cm",
  "keyword": "E ",
  "line": 77,
  "matchedColumns": [
    10
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 78
});
formatter.step({
  "name": "Exibe valor do frete",
  "keyword": "Entao ",
  "line": 79
});
formatter.step({
  "name": "Salva o valor do Frete e Prazo de Entrega",
  "keyword": "E ",
  "line": 80
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 29398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40010",
      "offset": 38
    }
  ],
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_SEDEX_Varejo(int)"
});
formatter.result({
  "duration": 112775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 113011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 92564,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "CalculafreteSteps.o_formato_do_envio_eh_diferente_de_envelope_Rolo_Prisma(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.o_comprimento_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 50
    },
    {
      "val": "6",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.a_altura_dos_produtos_sao_conhecidas_pelo_sistema_cm(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 52
    },
    {
      "val": "7",
      "offset": 55
    }
  ],
  "location": "CalculafreteSteps.a_largura_dos_produtos_sao_conhecidas_pelos_sistema_cm(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 52
    }
  ],
  "location": "CalculafreteSteps.o_diametro_dos_produtos_sao_conhecidos_pelo_sistema_cm(int)"
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
  "location": "CalculafreteSteps.exibe_valor_do_frete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_valor_do_Frete_e_Prazo_de_Entrega(double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete",
  "description": "",
  "name": "Calculo de Prazo de entrega do Frete",
  "keyword": "Esquema do Cenario",
  "line": 87,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 88
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico \u003e",
  "keyword": "E ",
  "line": 89
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema \u003csCepDestino\u003e",
  "keyword": "E ",
  "line": 90
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema \u003csCepOrigem\u003e",
  "keyword": "E ",
  "line": 91
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 92
});
formatter.step({
  "name": "Exibe prazo de entrega",
  "keyword": "Entao ",
  "line": 93
});
formatter.step({
  "name": "Salva o Prazo de Entrega",
  "keyword": "E ",
  "line": 94
});
formatter.examples({
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;",
  "description": "",
  "name": "",
  "keyword": "Exemplos",
  "line": 96,
  "rows": [
    {
      "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;1",
      "cells": [
        "sCepOrigem",
        "sCepDestino",
        "nCdServico"
      ],
      "line": 97
    },
    {
      "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;2",
      "cells": [
        "11092899",
        "126003928",
        "40215 (SEDEX 10 Varejo)"
      ],
      "line": 98
    },
    {
      "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;3",
      "cells": [
        "11092899",
        "134068466",
        "40290 (SEDEX Hoje Varejo)"
      ],
      "line": 99
    }
  ]
});
formatter.before({
  "duration": 98876,
  "status": "passed"
});
formatter.before({
  "duration": 55059,
  "status": "passed"
});
formatter.before({
  "duration": 58607,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;2",
  "description": "",
  "name": "Calculo de Prazo de entrega do Frete",
  "keyword": "Esquema do Cenario",
  "line": 98,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 88
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico \u003e",
  "keyword": "E ",
  "line": 89
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 126003928",
  "keyword": "E ",
  "line": 90,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 91,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 92
});
formatter.step({
  "name": "Exibe prazo de entrega",
  "keyword": "Entao ",
  "line": 93
});
formatter.step({
  "name": "Salva o Prazo de Entrega",
  "keyword": "E ",
  "line": 94
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 18944,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_nCdServico()"
});
formatter.result({
  "duration": 17506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "126003928",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 78015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 53009,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 12374,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_prazo_de_entrega(int)"
});
formatter.result({
  "duration": 258974,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.exibe_prazo_de_entrega(int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Exibe prazo de entrega$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Entao Exibe prazo de entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_Prazo_de_Entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 24771,
  "status": "passed"
});
formatter.before({
  "duration": 19199,
  "status": "passed"
});
formatter.before({
  "duration": 18295,
  "status": "passed"
});
formatter.scenario({
  "id": "calculafrete;calculo-de-prazo-de-entrega-do-frete;;3",
  "description": "",
  "name": "Calculo de Prazo de entrega do Frete",
  "keyword": "Esquema do Cenario",
  "line": 99,
  "type": "scenario"
});
formatter.step({
  "name": "Usuario ja adicionou ao carrinho no minimo um produto",
  "keyword": "Dado ",
  "line": 88
});
formatter.step({
  "name": "Informou o tipo de servico de entrega \u003cnCdServico \u003e",
  "keyword": "E ",
  "line": 89
});
formatter.step({
  "name": "O CEP do usuario eh conhecido pelo sistema 134068466",
  "keyword": "E ",
  "line": 90,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "O CEP da CompreFacil eh conhecido pelo sistema 11092899",
  "keyword": "E ",
  "line": 91,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "O sistema envia os dados aos Correios",
  "keyword": "Quando ",
  "line": 92
});
formatter.step({
  "name": "Exibe prazo de entrega",
  "keyword": "Entao ",
  "line": 93
});
formatter.step({
  "name": "Salva o Prazo de Entrega",
  "keyword": "E ",
  "line": 94
});
formatter.match({
  "location": "CalculafreteSteps.usuario_ja_adicionou_ao_carrinho_no_minimo_um_produto()"
});
formatter.result({
  "duration": 18974,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.informou_o_tipo_de_servico_de_entrega_nCdServico()"
});
formatter.result({
  "duration": 12419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "134068466",
      "offset": 43
    }
  ],
  "location": "CalculafreteSteps.o_CEP_do_usuario_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 72606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11092899",
      "offset": 47
    }
  ],
  "location": "CalculafreteSteps.o_CEP_da_CompreFacil_eh_conhecido_pelo_sistema(int)"
});
formatter.result({
  "duration": 53492,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.o_sistema_envia_os_dados_aos_Correios()"
});
formatter.result({
  "duration": 12237,
  "status": "passed"
});
formatter.match({
  "location": "CalculafreteSteps.exibe_prazo_de_entrega(int)"
});
formatter.result({
  "duration": 254918,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027br.unicamp.exemplo.steps.CalculafreteSteps.exibe_prazo_de_entrega(int) in file:/home/macknardy/Downloads/eclipse/workspace/lab2/target/test-classes/\u0027 with pattern [^Exibe prazo de entrega$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Entao Exibe prazo de entrega\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\n"
});
formatter.match({
  "location": "CalculafreteSteps.salva_o_Prazo_de_Entrega(int)"
});
formatter.result({
  "status": "skipped"
});
});