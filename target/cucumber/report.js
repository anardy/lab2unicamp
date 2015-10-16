$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Calculadora.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "As a user\r\nI want to use a basic calculator\r\nSo that I dont need to calculate myself",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.before({
  "duration": 39897,
  "status": "passed"
});
formatter.before({
  "duration": 35534,
  "status": "passed"
});
formatter.before({
  "duration": 34735,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Sum two numbers",
  "description": "",
  "id": "calculator;sum-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I sum 3 with 3",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 6",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.setUp()"
});
formatter.result({
  "duration": 3223839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "CalculadoraSteps.i_sum_with(int,int)"
});
formatter.result({
  "duration": 1145907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 163898,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I multiply \u003cfirstNumber\u003e with \u003csecondNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "calculator;multiply-two-numbers;",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "result"
      ],
      "line": 17,
      "id": "calculator;multiply-two-numbers;;1"
    },
    {
      "cells": [
        "1",
        "0",
        "0"
      ],
      "line": 18,
      "id": "calculator;multiply-two-numbers;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "4"
      ],
      "line": 19,
      "id": "calculator;multiply-two-numbers;;3"
    },
    {
      "cells": [
        "3",
        "10",
        "30"
      ],
      "line": 20,
      "id": "calculator;multiply-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41817,
  "status": "passed"
});
formatter.before({
  "duration": 35530,
  "status": "passed"
});
formatter.before({
  "duration": 31029,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I multiply 1 with 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 0",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.setUp()"
});
formatter.result({
  "duration": 30654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.i_mult_with(int,int)"
});
formatter.result({
  "duration": 189893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 92964,
  "status": "passed"
});
formatter.before({
  "duration": 37299,
  "status": "passed"
});
formatter.before({
  "duration": 28307,
  "status": "passed"
});
formatter.before({
  "duration": 28519,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I multiply 2 with 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.setUp()"
});
formatter.result({
  "duration": 27338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.i_mult_with(int,int)"
});
formatter.result({
  "duration": 191796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 70720,
  "status": "passed"
});
formatter.before({
  "duration": 25437,
  "status": "passed"
});
formatter.before({
  "duration": 50494,
  "status": "passed"
});
formatter.before({
  "duration": 30823,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I multiply 3 with 10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 30",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.setUp()"
});
formatter.result({
  "duration": 27046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    },
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "CalculadoraSteps.i_mult_with(int,int)"
});
formatter.result({
  "duration": 152099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 99938,
  "status": "passed"
});
formatter.before({
  "duration": 106881,
  "status": "passed"
});
formatter.before({
  "duration": 34930,
  "status": "passed"
});
formatter.before({
  "duration": 71362,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Division by zero",
  "description": "",
  "id": "calculator;division-by-zero",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I divide 7 with 0",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "should show an error with a message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 26,
    "value": "/ by zero"
  }
});
formatter.match({
  "location": "CalculadoraSteps.setUp()"
});
formatter.result({
  "duration": 33198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 16
    }
  ],
  "location": "CalculadoraSteps.i_div_with(int,int)"
});
formatter.result({
  "duration": 429560,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.should_show_an_error(String)"
});
formatter.result({
  "duration": 47234410,
  "status": "passed"
});
formatter.before({
  "duration": 36100,
  "status": "passed"
});
formatter.before({
  "duration": 37171,
  "status": "passed"
});
formatter.before({
  "duration": 110424,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Divide two numbers",
  "description": "",
  "id": "calculator;divide-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I divide 9 with 3",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the result should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculadoraSteps.setUp()"
});
formatter.result({
  "duration": 21977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 9
    },
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "CalculadoraSteps.i_div_with(int,int)"
});
formatter.result({
  "duration": 106934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "CalculadoraSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 94709,
  "status": "passed"
});
});