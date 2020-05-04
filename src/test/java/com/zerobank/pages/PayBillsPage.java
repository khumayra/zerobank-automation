package com.zerobank.pages;

import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

public class PayBillsPage extends BasePage {

    @FindBy(id = "sp_payee")
    private WebElement payeeDropDown;

    @FindBy (id = "sp_account")
    private WebElement accountDropDown;

    @FindBy (id="sp_amount")
    private WebElement amount;

    @FindBy (id = "sp_date")
    private WebElement date;

    @FindBy (id = "sp_description")
    private WebElement description;

    @FindBy (id = "pay_saved_payees")
    private WebElement payBtn;

    @FindBy (xpath = "//span[contains(@title,'payed to payee')]")
    private WebElement paymentSubmissionMsg;

    public PayBillsPage navigateToPayBillsTabs(String tabName){
        BrowserUtils.waitForPageToLoad(25);
        String xpath = "//li[@class='ui-state-default ui-corner-top ui-tabs-selected ui-state-active']/a[text()='"+tabName+"']";
        WebElement tabElement = driver.findElement(By.xpath(xpath));
        wait.until(ExpectedConditions.visibilityOf(tabElement));
        Actions actions = new Actions(driver);
        wait.until(ExpectedConditions.elementToBeClickable(tabElement));
        actions.moveToElement(tabElement).pause(2000).click(tabElement).build().perform();
        return this;
    }

    public PayBillsPage selectPayeeDropDown (String payee) {
        Select select = new Select(payeeDropDown);
        select.selectByVisibleText(payee);
        wait.until(ExpectedConditions.textToBePresentInElement(payeeDropDown,payee));
        return this;
    }

    public PayBillsPage selectAccountDropDown (String account){
        Select select = new Select(accountDropDown);
        select.selectByVisibleText(account);
        wait.until(ExpectedConditions.textToBePresentInElement(accountDropDown, account));
        return this;
    }

    public PayBillsPage enterPaymentInformation (String addAmount, String addDate, String addDescription){
        wait.until(ExpectedConditions.visibilityOf(amount)).sendKeys(addAmount);
        wait.until(ExpectedConditions.visibilityOf(date)).sendKeys(addDate);
        wait.until(ExpectedConditions.visibilityOf(description)).sendKeys(addDescription);
        return this;
    }

    public PayBillsPage enterAmount(String addAmount){
        wait.until(ExpectedConditions.visibilityOf(amount)).sendKeys(addAmount);
        return this;
    }

    public PayBillsPage enterDate(String addDate){
        wait.until(ExpectedConditions.visibilityOf(date)).sendKeys(addDate);
        return this;
    }

    public String getAmountNotFilledOutAlert(){
        return wait.until(ExpectedConditions.visibilityOf(amount)).getAttribute("validationMessage");
     }

    public String getDateNotFilledOutAlert(){
        return wait.until(ExpectedConditions.visibilityOf(date)).getAttribute("validationMessage");
    }

    public PayBillsPage clickOnSaveBtn (){
        payBtn.click();
        return this;
    }

    public String getSubmissionMsg (){
        return wait.until(ExpectedConditions.visibilityOf(paymentSubmissionMsg)).getText();
    }

}
