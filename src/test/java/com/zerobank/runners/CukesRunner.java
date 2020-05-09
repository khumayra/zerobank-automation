package com.zerobank.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions (
        glue = "com/zerobank/stepdefnitions",
        features = "src/test/resources/features",
        dryRun = true,
        strict = false,
        tags = "@purchase_foreign_currency",
        plugin = {
                "html:target/default-report",
                "json:target/cucumber1.json",
        }
)

public class CukesRunner {
}
