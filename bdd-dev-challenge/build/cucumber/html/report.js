$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("greetingsresource.feature");
formatter.feature({
  "line": 2,
  "name": "Get greeting",
  "description": "\nAs a consumer of the greetings resource\nI should be able to get a greeting",
  "id": "get-greeting",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Get greeting using appropriate caller",
  "description": "",
  "id": "get-greeting;get-greeting-using-appropriate-caller",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I use the caller \u003ccaller\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I request a greeting",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get a response with HTTP status code \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The response should contain the message \u003cmessage\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get-greeting;get-greeting-using-appropriate-caller;",
  "rows": [
    {
      "cells": [
        "caller",
        "status",
        "message"
      ],
      "line": 13,
      "id": "get-greeting;get-greeting-using-appropriate-caller;;1"
    },
    {
      "cells": [
        "Duke",
        "200",
        "Hello World, Duke"
      ],
      "line": 14,
      "id": "get-greeting;get-greeting-using-appropriate-caller;;2"
    },
    {
      "cells": [
        "Tux",
        "200",
        "Hello World, Tux"
      ],
      "line": 15,
      "id": "get-greeting;get-greeting-using-appropriate-caller;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Get greeting using appropriate caller",
  "description": "",
  "id": "get-greeting;get-greeting-using-appropriate-caller;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I use the caller Duke",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I request a greeting",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get a response with HTTP status code 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The response should contain the message Hello World, Duke",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Duke",
      "offset": 17
    }
  ],
  "location": "GreetingsResourceSteps.useCaller(String)"
});
formatter.result({
  "duration": 145577757,
  "status": "passed"
});
formatter.match({
  "location": "GreetingsResourceSteps.requestGreeting()"
});
formatter.result({
  "duration": 356879972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "GreetingsResourceSteps.shouldGetResponseWithHttpStatusCode(int)"
});
formatter.result({
  "duration": 61048916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World, Duke",
      "offset": 40
    }
  ],
  "location": "GreetingsResourceSteps.theResponseShouldContainTheMessage(String)"
});
formatter.result({
  "duration": 3223230,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get greeting using appropriate caller",
  "description": "",
  "id": "get-greeting;get-greeting-using-appropriate-caller;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I use the caller Tux",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I request a greeting",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should get a response with HTTP status code 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The response should contain the message Hello World, Tux",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tux",
      "offset": 17
    }
  ],
  "location": "GreetingsResourceSteps.useCaller(String)"
});
formatter.result({
  "duration": 485387,
  "status": "passed"
});
formatter.match({
  "location": "GreetingsResourceSteps.requestGreeting()"
});
formatter.result({
  "duration": 7697776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "GreetingsResourceSteps.shouldGetResponseWithHttpStatusCode(int)"
});
formatter.result({
  "duration": 125302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World, Tux",
      "offset": 40
    }
  ],
  "location": "GreetingsResourceSteps.theResponseShouldContainTheMessage(String)"
});
formatter.result({
  "duration": 70135,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get greeting using caller 0xCAFEBABE",
  "description": "",
  "id": "get-greeting;get-greeting-using-caller-0xcafebabe",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I use the caller 0xCAFEBABE",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I request a greeting",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should get a response with HTTP status code 418",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0xCAFEBABE",
      "offset": 17
    }
  ],
  "location": "GreetingsResourceSteps.useCaller(String)"
});
formatter.result({
  "duration": 354525,
  "status": "passed"
});
formatter.match({
  "location": "GreetingsResourceSteps.requestGreeting()"
});
formatter.result({
  "duration": 24250986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "418",
      "offset": 46
    }
  ],
  "location": "GreetingsResourceSteps.shouldGetResponseWithHttpStatusCode(int)"
});
formatter.result({
  "duration": 142408,
  "status": "passed"
});
formatter.uri("restapitransfersource.feature");
formatter.feature({
  "line": 1,
  "name": "Rest API testing Transfer",
  "description": "",
  "id": "rest-api-testing-transfer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Transfer amount between accounts",
  "description": "",
  "id": "rest-api-testing-transfer;transfer-amount-between-accounts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Set POST account transfer service api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Set transfer details",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Send POST HTTP request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "We receive valid Response200",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountTransferSteps.setServiceEndPoint()"
});
formatter.result({
  "duration": 4847887,
  "status": "passed"
});
formatter.match({
  "location": "AccountTransferSteps.set_account_details()"
});
formatter.result({
  "duration": 5843895,
  "status": "passed"
});
formatter.match({
  "location": "AccountTransferSteps.postHttpRequest()"
});
formatter.result({
  "duration": 54393334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "AccountTransferSteps.shouldGetResponseWithHttpStatusCode(int)"
});
formatter.result({
  "duration": 162508,
  "status": "passed"
});
});