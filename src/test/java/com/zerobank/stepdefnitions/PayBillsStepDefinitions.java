package com.zerobank.stepdefnitions;

import com.zerobank.pages.PayBillsPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class PayBillsStepDefinitions {
    PayBillsPage payBillsPage = new PayBillsPage();

    @Given("user should verify that title is Zero – Pay Bills")
    public void user_should_verify_that_title_is_Zero_Pay_Bills() {
        Assert.assertEquals("Zero - Pay Bills", payBillsPage.getCurrentPageTitle());
    }

    @Given("user is on {string} tab")
    public void user_is_on_tab(String string) {
        payBillsPage.navigateToPayBillsTabs(string);
        BrowserUtils.waitForPageToLoad(25);
    }


    @When("user chooses payee {string}")
    public void user_chooses_payee(String string) {
        payBillsPage.selectPayeeDropDown(string);
    }

    @When("user chooses {string} account")
    public void user_chooses_account(String string) {
        payBillsPage.selectAccountDropDown(string);
    }

    @Then("user enters payment information")
    public void user_enters_payment_information(List<Map<String, String>> dataTable) {
        for (Map<String, String> row : dataTable) {
            payBillsPage.enterPaymentInformation(row.get("amount"), row.get("date"), row.get("description"));
        }
    }

    @Then("user clicks on Pay button")
    public void user_clicks_on_Pay_button() {
        payBillsPage.clickOnSaveBtn();
    }

    @Then("user verifies that The payment was successfully submitted. message should be displayed")
    public void user_verifies_that_The_payment_was_successfully_submitted_message_should_be_displayed() {
        String actualMsg = payBillsPage.getSubmissionMsg();
        Assert.assertEquals("The payment was successfully submitted.", actualMsg);
    }

    @When("user enters date {string}")
    public void user_enters_date(String string) {
        payBillsPage.enterDate(string);
    }

    @When("user enters amount {string}")
    public void user_enters_amount(String string) {
        payBillsPage.enterAmount(string);
    }


    @Then("user verifies that Please fill out this field message. should be displayed under amount field")
    public void user_verifies_that_Please_fill_out_this_field_message_should_be_displayed_under_amount_field() {
        String actualAlertText = payBillsPage.getAmountNotFilledOutAlert();
        Assert.assertEquals("Please fill out this field.", actualAlertText);
    }

    @Then("user verifies that Please fill out this field message. should be displayed under date field")
    public void user_verifies_that_Please_fill_out_this_field_message_should_be_displayed_under_date_field() {
        String actualAlertText = payBillsPage.getDateNotFilledOutAlert();
        Assert.assertEquals("Please fill out this field.", actualAlertText);
    }

}
