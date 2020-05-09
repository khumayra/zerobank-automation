$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/StatementsAndDocuments.feature");
formatter.feature({
  "name": "Statements and Documents details",
  "description": "  as a user, I want to see and download Statements \u0026 Documents",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Recent \u003ccount\u003e statements per \u003cyear\u003e year",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"\u003cyear\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "\"\u003ccount\u003e\" statements should be displayed for that year",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year",
        "count"
      ]
    },
    {
      "cells": [
        "2009",
        "2"
      ]
    },
    {
      "cells": [
        "2010",
        "2"
      ]
    },
    {
      "cells": [
        "2011",
        "2"
      ]
    },
    {
      "cells": [
        "2012",
        "1"
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Recent 2 statements per 2009 year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2009\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "\"2\" statements should be displayed for that year",
  "keyword": "Then "
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Recent 2 statements per 2010 year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2010\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "\"2\" statements should be displayed for that year",
  "keyword": "Then "
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Recent 2 statements per 2011 year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2011\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "\"2\" statements should be displayed for that year",
  "keyword": "Then "
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Recent 1 statements per 2012 year",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2012\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "\"1\" statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on statement \"\u003cstatement\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the downloaded file name should contain \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the file type should be pdf",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year",
        "statement",
        "name"
      ]
    },
    {
      "cells": [
        "2009",
        "Statement 31/11/09(57K)",
        "31-11-09"
      ]
    },
    {
      "cells": [
        "2010",
        "Statement 01/12/10(57K)",
        "01-12-10"
      ]
    },
    {
      "cells": [
        "2011",
        "Statement 05/12/11(57K)",
        "05-12-11"
      ]
    },
    {
      "cells": [
        "2012",
        "Statement 01/10/12(57K)",
        "01-10-12"
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2009\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 31/11/09(57K)\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the downloaded file name should contain \"31-11-09\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the file type should be pdf",
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2010\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 01/12/10(57K)\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the downloaded file name should contain \"01-12-10\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the file type should be pdf",
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2011\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 05/12/11(57K)\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the downloaded file name should contain \"05-12-11\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the file type should be pdf",
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
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Download statements",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@statements_and_documents_details"
    }
  ]
});
formatter.step({
  "name": "the user selects the Recent Statements Year \"2012\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 01/10/12(57K)\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the downloaded file name should contain \"01-10-12\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the file type should be pdf",
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