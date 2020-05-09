$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddNewPayee.feature");
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
  "name": "user navigates to \"Pay Bills\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.stepdefnitions.AccountActivityStepDefinitions.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "Add New Payee tab",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "message The new payee The Law Offices of Hyde, Price \u0026 Scharks was successfully created. should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});