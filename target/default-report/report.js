$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountActivity.feature");
formatter.feature({
  "name": "Account activity events",
  "description": "As a user, I want to see activity events",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@account_activity"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Account Activity",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_should_verify_that_title_is_Zero_Account_Activity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account drop down default option should be Savings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@account_activity"
    }
  ]
});
formatter.step({
  "name": "Account drop down default option should be Savings",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.account_drop_down_default_option_should_be_Savings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Account Activity",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_should_verify_that_title_is_Zero_Account_Activity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Drop Down options using dataTable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@account_activity"
    }
  ]
});
formatter.step({
  "name": "Account drop down should have the following options",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.account_drop_down_should_have_the_following_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Account Activity",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_should_verify_that_title_is_Zero_Account_Activity()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Transaction Table column names using dataTable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@account_activity"
    }
  ]
});
formatter.step({
  "name": "Transactions table should have column names as following",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.transactions_table_should_have_column_names_as_following(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AccountActivityNavigation.feature");
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
        "Account_Type"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Savings redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Savings\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_verifies_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down default option should be \"Savings\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.account_drop_down_default_option_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Brokerage\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_verifies_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down default option should be \"Brokerage\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.account_drop_down_default_option_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Checking\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_verifies_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down default option should be \"Checking\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.account_drop_down_default_option_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Card redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Credit Card\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_verifies_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down default option should be \"Credit Card\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.account_drop_down_default_option_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Summary\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Loan redirect",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@account_activity_navigation"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Loan\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies \"Account Activity\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.the_user_verifies_page_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down default option should be \"Loan\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.account_drop_down_default_option_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AccountSummary.feature");
formatter.feature({
  "name": "Account summary events",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@account_summary"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account summary page should have the title Zero – Account Summary.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@account_summary"
    }
  ]
});
formatter.step({
  "name": "user should verify that title is Zero – Account Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.user_should_verify_that_title_is_Zero_Account_Summary()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Summary page should have: Cash Accounts, Investment Accounts, Credit Accounts, Loan Accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@account_summary"
    }
  ]
});
formatter.step({
  "name": "user should verify that page should have following types",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.user_should_verify_that_page_should_have_following_types(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Accounts table must have columns Account, Credit Card and Balance",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@account_summary"
    }
  ]
});
formatter.step({
  "name": "user should verify that Credit Accounts have following options",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountSummaryStepDefinitions.user_should_verify_that_Credit_Accounts_have_following_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AddNewPayee.feature");
formatter.feature({
  "name": "Add new payee under pay bills",
  "description": "  As a user, I want to add payees",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@add_payee"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@add_payee"
    }
  ]
});
formatter.step({
  "name": "user is on \"Add New Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates new payee using following information",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.creates_new_payee_using_following_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message The new payee The Law Offices of Hyde, Price \u0026 Scharks was successfully created. should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.message_The_new_payee_The_Law_Offices_of_Hyde_Price_Scharks_was_successfully_created_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search date range - Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters date range from \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_date_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results should be sorted by most recent date",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_results_should_be_sorted_by_most_recent_date(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search date range - Negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters date range from \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_date_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the results table should only NOT contain transactions dated \"2012-09-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_results_table_should_only_NOT_contain_transactions_dated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description \"ONLINE\" - Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_descriptions_containing(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description \"OFFICE\" - Negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"OFFICE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_descriptions_containing(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should NOT show descriptions containing \"ONLINE\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_NOT_show_descriptions_containing(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description case insensitive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"online\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should NOT show descriptions containing withBug \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_NOT_show_descriptions_containing_withBug(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Type",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Deposit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Withdrawal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Withdrawal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Deposit\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_selects_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Deposit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under Withdrawal",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_no_result_under_Withdrawal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type \"Withdrawal\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_selects_type(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under Withdrawal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Withdrawal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under Deposit",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_no_result_under_Deposit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Only authorized users should be able to login to the application.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@authorized_user"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "account summary page should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.account_summary_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Users with wrong username or wrong password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@unauthorized_user_wrong"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in wrong username or wrong password",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_wrong_username_or_wrong_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message Login and password are wrong should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.error_message_Login_and_or_password_are_wrong_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Users with blank username or password should not be able to login.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@unauthorized_user-blank"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with blank username or wrong password",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_blank_username_or_wrong_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message Login and password are wrong should be displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.error_message_Login_and_or_password_are_wrong_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PayBills.feature");
formatter.feature({
  "name": "Pay Bills events",
  "description": "  As a user, I want to be able to make payment",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@pay_bills"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Pay Bills",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_should_verify_that_title_is_Zero_Pay_Bills()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Making payment - Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pay_bills"
    }
  ]
});
formatter.step({
  "name": "user is on \"Pay Saved Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses payee \"Bank of America\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_payee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Savings\" account",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters payment information",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_payment_information(java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Pay button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_clicks_on_Pay_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that The payment was successfully submitted. message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_verifies_that_The_payment_was_successfully_submitted_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Pay Bills",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_should_verify_that_title_is_Zero_Pay_Bills()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Making payment without entering amount - Negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pay_bills"
    }
  ]
});
formatter.step({
  "name": "user is on \"Pay Saved Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses payee \"Bank of America\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_payee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Savings\" account",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters date \"2020-05-06\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Pay button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_clicks_on_Pay_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Please fill out this field message. should be displayed under amount field",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_verifies_that_Please_fill_out_this_field_message_should_be_displayed_under_amount_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Pay Bills",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_should_verify_that_title_is_Zero_Pay_Bills()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Making payment without entering date - Negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pay_bills"
    }
  ]
});
formatter.step({
  "name": "user is on \"Pay Saved Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses payee \"Bank of America\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_payee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Savings\" account",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters amount \"100\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_amount(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Pay button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_clicks_on_Pay_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Please fill out this field message. should be displayed under date field",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_verifies_that_Please_fill_out_this_field_message_should_be_displayed_under_date_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Pay Bills",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_should_verify_that_title_is_Zero_Pay_Bills()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Entering alphabetical characters into amount field - Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pay_bills"
    }
  ]
});
formatter.step({
  "name": "user is on \"Pay Saved Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses payee \"Bank of America\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_payee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Savings\" account",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters amount \"ABC\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_amount(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters date \"2020-05-06\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Pay button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_clicks_on_Pay_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Please fill out this field message. should be displayed under amount field",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_verifies_that_Please_fill_out_this_field_message_should_be_displayed_under_amount_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify that title is Zero – Pay Bills",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_should_verify_that_title_is_Zero_Pay_Bills()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Entering alphabetical characters into date field - Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pay_bills"
    }
  ]
});
formatter.step({
  "name": "user is on \"Pay Saved Payee\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses payee \"Bank of America\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_payee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user chooses \"Savings\" account",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_chooses_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters amount \"100\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_amount(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters date \"ABC\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_enters_date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Pay button",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_clicks_on_Pay_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that Please fill out this field message. should be displayed under date field",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_verifies_that_Please_fill_out_this_field_message_should_be_displayed_under_date_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PurchaseForeignCurrency.feature");
formatter.feature({
  "name": "Purchase Foreign Currency",
  "description": "  As a user, I want to purchase foreign currency",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@purchase_foreign_currency"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Purchase Foreign Currency\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Available currencies",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@purchase_foreign_currency"
    }
  ]
});
formatter.step({
  "name": "following currencies should be available",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.following_currencies_should_be_available(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#pc_currency\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CPMBMJL\u0027, ip: \u002710.0.0.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\khuma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49792}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 311648d0635e7e9dbf3706fa629cee41\n*** Element info: {Using\u003did, value\u003dpc_currency}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.zerobank.pages.PayBillsPage.getAllCurrencyOptions(PayBillsPage.java:155)\r\n\tat com.zerobank.stepdefnitions.PayBillsStepDefinitions.following_currencies_should_be_available(PayBillsStepDefinitions.java:94)\r\n\tat ✽.following currencies should be available(file:///C:/Users/khuma/IdeaProjects/zerobank-automation/src/test/resources/features/PurchaseForeignCurrency.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Available currencies");
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Purchase Foreign Currency\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not selecting currency",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@purchase_foreign_currency"
    }
  ]
});
formatter.step({
  "name": "user tries to calculate cost without selecting a currency",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_tries_to_calculate_cost_without_selecting_a_currency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed \"Please, ensure that you have filled all the required fields with valid values.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.error_message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Purchase Foreign Currency\" tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_is_on_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Error message for not entering value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@purchase_foreign_currency"
    }
  ]
});
formatter.step({
  "name": "user tries to calculate cost without entering a value",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.user_tries_to_calculate_cost_without_entering_a_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be displayed \"Please, ensure that you have filled all the required fields with valid values.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.PayBillsStepDefinitions.error_message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/StatementsAndDocuments.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"2\" statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.statements_should_be_displayed_for_that_year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"2\" statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.statements_should_be_displayed_for_that_year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"2\" statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.statements_should_be_displayed_for_that_year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"1\" statements should be displayed for that year",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.statements_should_be_displayed_for_that_year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 31/11/09(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"31-11-09\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_downloaded_file_name_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the file type should be pdf",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_file_type_should_be_pdf()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 01/12/10(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"01-12-10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_downloaded_file_name_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the file type should be pdf",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_file_type_should_be_pdf()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 05/12/11(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"05-12-11\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_downloaded_file_name_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the file type should be pdf",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_file_type_should_be_pdf()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.LoginStepDefinitions.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Online Statements\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Statements \u0026 Documents tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_accesses_the_Statements_Documents_tab()"
});
formatter.result({
  "status": "passed"
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
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_selects_the_Recent_Statements_Year(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on statement \"Statement 01/10/12(57K)\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_user_clicks_on_statement(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the downloaded file name should contain \"01-10-12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_downloaded_file_name_should_contain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the file type should be pdf",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.OnlineStatementsStepDefinitions.the_file_type_should_be_pdf()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});