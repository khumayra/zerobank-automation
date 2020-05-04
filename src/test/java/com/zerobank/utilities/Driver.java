package com.zerobank.utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class Driver {
    private static ThreadLocal<WebDriver> driverPool = new ThreadLocal<>();

    private Driver (){ }

    public synchronized static WebDriver getDriver(){
        if (driverPool.get()==null){
            String browser = ConfigurationReader.getProperty("browser").toLowerCase();
            switch (browser){
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    ChromeOptions chromeOptions = new ChromeOptions();
                    chromeOptions.addArguments("--start-maximized");
                    driverPool.set(new ChromeDriver(chromeOptions));
                    break;
                case "chromeheadless":
                    WebDriverManager.chromedriver().setup();
                    ChromeOptions chromeOptions1 = new ChromeOptions();
                    chromeOptions1.setHeadless(true);
                    driverPool.set(new ChromeDriver(chromeOptions1));
                    break;
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    FirefoxOptions fireFoxOptions = new FirefoxOptions();
                    fireFoxOptions.addArguments("--start-maximized");
                    driverPool.set(new FirefoxDriver(fireFoxOptions));
                    break;
            }
        }
        return driverPool.get();
    }

    public static void closeDriver(){
        if (driverPool !=null){
            driverPool.get().quit();
            driverPool.remove();
        }
    }

}
