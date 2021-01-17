package skeleton;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.json.simple.parser.ParseException;

import java.io.IOException;

public class Stepdefs {

    BBlogModel BBlogModel = new BBlogModel();

    @Given("^Open chrome browser$")
    public void OpenBrowser() throws Throwable {
        BBlogModel.OpenBrowser();
    }

    @Given("^Open BBlog homepage$")
    public void OpenHomePage()throws IOException, ParseException{
        BBlogModel.OpenHomePage();
    }
    @Then("^Verify (.*)$")
    public void VerifyHomePage(String locator) throws InterruptedException {
        BBlogModel.VerifyPage(locator);
    }
    @And("I click (.*) button")
    public void ClickButton(String buttonName) throws InterruptedException {
        BBlogModel.ClickButton(buttonName);
    }
    @And("I write (.*) on (.*) textbox")
    public void SetTextbox(String value,String element) throws InterruptedException {
        BBlogModel.SetTextbox(value,element);
    }
    @Then("I quit browser")
    public void Quit(){
        BBlogModel.Quit();
    }




}
