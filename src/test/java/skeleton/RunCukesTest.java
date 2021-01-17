package skeleton;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"html:target/cucumber-report.html","json:target/cucumber-reports/cucumber.json",
        "junit:target/cucumber-reports/cucumber.xml"},
        features = "src/test/resources/skeleton",glue ="skeleton")
public class RunCukesTest {
//@AfterClass here!!

//@BeforeClass here!!

}