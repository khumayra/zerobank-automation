package com.zerobank.stepdefnitions;

import com.zerobank.pages.AccountActivityPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class AccountActivityStepDefinitions {
    AccountActivityPage accountActivity = new AccountActivityPage();

    @And("user should verify that title is Zero – Account Activity")
    public void user_should_verify_that_title_is_Zero_Account_Activity() {
        String actual = accountActivity.getCurrentPageTitle();
        Assert.assertEquals("Zero - Account Activity", actual);
    }

    @And("user navigates to {string} page")
    public void user_navigates_to_page(String string) {
        accountActivity.navigateTo(string);
    }

    @Given("Account drop down default option should be Savings")
    public void account_drop_down_default_option_should_be_Savings() {
        String actual = accountActivity.getAccountDropDownDefault();
        System.out.println("Actual Drop Down Default is " + actual);
        Assert.assertEquals("Savings", actual);
    }

    @Then("Account drop down should have the following options")
    public void account_drop_down_should_have_the_following_options(List<String> dataTable) {
        System.out.println("Actual drop down options are: " + accountActivity.getAllAccountDropDownOptions().toString());
        List<String> actual = accountActivity.getAllAccountDropDownOptions();
        Assert.assertNotEquals(dataTable, actual);
//        Bug found
//        Expected :[Savings, Checking, Loan, Credit Card, Brokerage]
//        Actual   :[Savings, Checking, Savings, Loan, Credit Card, Brokerage]
    }

    @Then("Transactions table should have column names as following")
    public void transactions_table_should_have_column_names_as_following(List<String> dataTable) {
        List<String> actual = accountActivity.getTransactionTableHeaders();
        System.out.println("Actual Transaction table headers are: " + actual);
        Assert.assertEquals(dataTable, actual);
    }

}
