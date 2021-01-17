package skeleton;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class BBlogModel{

    WebDriver driver;
    List<String> quotesList = new ArrayList<String>();
    JSONObject jsonObjectFile;

    public  void OpenBrowser(){
        String driverPath=System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe";
        System.setProperty("webdriver.chrome.driver",driverPath);
        ChromeOptions options=new ChromeOptions();
        options.addArguments("start-maximized");
        options.addArguments("test-type");
        options.addArguments("disable-popup-blocking");
        options.addArguments("ignore-certificate-errors");
        options.addArguments("disable-translate");
        options.addArguments("disable-automatic-password-saving");
        options.addArguments("allow-silent-push");
        options.addArguments("disable-infobars");
        options.addArguments("disable-notifications");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        driver=new ChromeDriver(options);


    }

    public void GetJsonDataFromFile() throws IOException, ParseException {
            JSONObject testObject = null;
            String filePath=System.getProperty("user.dir")+"\\src\\main\\java\\resources\\elementLocators.json";
            FileReader reader = new FileReader(filePath);
            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(reader);
            jsonObjectFile = (JSONObject) jsonObject;
    }

    public  void  OpenHomePage()throws IOException, ParseException
    {
        GetJsonDataFromFile();
        //username:candidatex,password:qa-is-cool
       driver.get("https://candidatex:qa-is-cool@qa-task.backbasecloud.com/#/");
    }
    public  void VerifyPage(String locator) throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertTrue( FindElementJson(locator).isDisplayed());

    }
    public  void ClickButton(String locator) throws InterruptedException {
        Thread.sleep(50);
         FindElementJson(locator).click();
    }

    public void SetTextbox(String value,String element) throws InterruptedException {
        Thread.sleep(50);
        FindElementJson(element).clear();
        FindElementJson(element).sendKeys(value);
    }

    public void Quit(){
        driver.quit();
    }

    public WebElement FindElementJson(String element){
         Object elementPath= jsonObjectFile.get(element);
        return  driver.findElement(By.xpath((String)elementPath));
    }


}
