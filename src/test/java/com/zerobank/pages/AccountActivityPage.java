package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AccountActivityPage extends BasePage {
    private static Select select;

    @FindBy (id = "aa_accountId")
    private WebElement accountDropDwn;

    @FindBy (tagName = "th")
    private List<WebElement> transactionTableHeaders;

    public String getAccountDropDownDefault (){
        select = new Select(accountDropDwn);
        return select.getFirstSelectedOption().getText();
    }

    public List<String> getAllAccountDropDownOptions(){
        select = new Select(accountDropDwn);
        return BrowserUtils.getTextFromWebElements(select.getOptions());
    }

    public List<String> getTransactionTableHeaders(){
        wait.until(ExpectedConditions.visibilityOfAllElements(transactionTableHeaders));
        return BrowserUtils.getTextFromWebElements(transactionTableHeaders);
    }
}
