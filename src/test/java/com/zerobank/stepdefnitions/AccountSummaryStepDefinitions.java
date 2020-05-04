package com.zerobank.stepdefnitions;

import com.zerobank.pages.AccountSummaryPage;
import io.cucumber.java.en.*;
import org.junit.Assert;


import java.util.List;

public class AccountSummaryStepDefinitions {
    AccountSummaryPage accountSummary = new AccountSummaryPage();

    @Then("user should verify that title is Zero – Account Summary")
    public void user_should_verify_that_title_is_Zero_Account_Summary() {
        String actual = accountSummary.getCurrentPageTitle();
        Assert.assertEquals("Zero - Account Summary",actual);
    }

    @Then("user should verify that page should have following types")
    public void user_should_verify_that_page_should_have_following_types(List<String> dataTable) {
        System.out.println("Account Summary Page expected values : " + dataTable);
        Assert.assertEquals(dataTable, accountSummary.getAccountTypeOptions());
    }

    @Then("user should verify that Credit Accounts have following options")
    public void user_should_verify_that_Credit_Accounts_have_following_options(List<String> dataTable) {
        System.out.println("Account Summary Page expected values : " + dataTable);
        Assert.assertEquals(dataTable, accountSummary.getCreditAccountsColumns());
    }
}

