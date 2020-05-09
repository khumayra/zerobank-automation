$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FindTransactions.feature");
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
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search date range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters date range from “abc” to “abc”",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show transactions dates between “anbc” to “abc”",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_results_should_be_sorted_by_most_recent_date(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters date range from “abc” to “abc”",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show transactions dates between “abc” to “abc”",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the results table should only NOT contain transactions dated “abc”",
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
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@find_transactions_in_account_activity"
    }
  ]
});
formatter.step({
  "name": "the user enters description “ONLINE”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description_ONLINE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show descriptions containing “ONLINE”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_descriptions_containing_ONLINE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters description “OFFICE”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description_OFFICE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show descriptions containing “OFFICE”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_descriptions_containing_OFFICE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should NOT show descriptions containing “ONLINE”",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_NOT_show_descriptions_containing_ONLINE()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "the user enters description “ONLINE”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description_ONLINE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show descriptions containing “ONLINE”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_descriptions_containing_ONLINE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters description “online”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_enters_description_online()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show descriptions containing “ONLINE”",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_only_show_descriptions_containing_ONLINE()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user navigates to \"Account Activity\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the \"Find Transactions\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.the_user_accesses_the_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "results table should show at least one result under Deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Deposit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show at least one result under Withdrawal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Withdrawal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects type “Deposit”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_selects_type_Deposit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show at least one result under Deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Deposit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show no result under Withdrawal",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_no_result_under_Withdrawal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects type “Withdrawal”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_selects_type_Withdrawal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show at least one result under Withdrawal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_at_least_one_result_under_Withdrawal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show no result under Deposit",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.results_table_should_show_no_result_under_Deposit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});