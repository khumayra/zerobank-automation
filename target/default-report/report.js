$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating to specific accounts in Accounts Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003cAccount_Type\u003e redirect",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user clicks on \"\u003cAccount_Type\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "Account drop down default option should be \"\u003cAccount_Type\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Account Type"
      ]
    },
    {
      "cells": [
        "Savings"
      ]
    },
    {
      "cells": [
        "Brokerage"
      ]
    },
    {
      "cells": [
        "Checking"
      ]
    },
    {
      "cells": [
        "Credit Card"
      ]
    },
    {
      "cells": [
        "Loan"
      ]
    }
  ]
});
formatter.background({
  "name": "open login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\u003cAccount_Type\u003e redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"\u003cAccount_Type\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Account drop down default option should be \"\u003cAccount_Type\u003e\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "open login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\u003cAccount_Type\u003e redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"\u003cAccount_Type\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Account drop down default option should be \"\u003cAccount_Type\u003e\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "open login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\u003cAccount_Type\u003e redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"\u003cAccount_Type\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Account drop down default option should be \"\u003cAccount_Type\u003e\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "open login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\u003cAccount_Type\u003e redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"\u003cAccount_Type\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Account drop down default option should be \"\u003cAccount_Type\u003e\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "open login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "\u003cAccount_Type\u003e redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"\u003cAccount_Type\u003e\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Account drop down default option should be \"\u003cAccount_Type\u003e\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});