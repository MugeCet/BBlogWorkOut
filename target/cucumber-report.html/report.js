$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BBlog.feature");
formatter.feature({
  "line": 1,
  "name": "BBlogWorkOut",
  "description": "",
  "id": "bblogworkout",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "BBlogWorkOut Background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Open BBlog homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify BblogHomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click SignInTab button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify SignInPage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I write testusermuge@gmail.com on Username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I write 123456 on Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.OpenBrowser()"
});
formatter.result({
  "duration": 7290688600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.OpenHomePage()"
});
formatter.result({
  "duration": 6891669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BblogHomePage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5159442800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInTab",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 351170000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5124967800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusermuge@gmail.com",
      "offset": 8
    },
    {
      "val": "Username",
      "offset": 34
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 507268500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    },
    {
      "val": "Password",
      "offset": 18
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 407310800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 215022500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5118379300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "CreateNewArticleSuccessfully",
  "description": "",
  "id": "bblogworkout;createnewarticlesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click NewPost button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify NewPostPage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I write Funny on ArticleTitle textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I write TestAutoArticleAbout on ArticleAbout textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I write PassTheChallenge on Tag textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click PublishArticle button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify MyArticle",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "NewPost",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 223007900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewPostPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5104367300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny",
      "offset": 8
    },
    {
      "val": "ArticleTitle",
      "offset": 17
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 392648000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutoArticleAbout",
      "offset": 8
    },
    {
      "val": "ArticleAbout",
      "offset": 32
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 450594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PassTheChallenge",
      "offset": 8
    },
    {
      "val": "Tag",
      "offset": 28
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 428814400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PublishArticle",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 227376200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyArticle",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5108975700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Quit()"
});
formatter.result({
  "duration": 866314100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "BBlogWorkOut Background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Open BBlog homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify BblogHomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click SignInTab button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify SignInPage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I write testusermuge@gmail.com on Username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I write 123456 on Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.OpenBrowser()"
});
formatter.result({
  "duration": 3796590200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.OpenHomePage()"
});
formatter.result({
  "duration": 6082641000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BblogHomePage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5094022100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInTab",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 344017800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5120795100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusermuge@gmail.com",
      "offset": 8
    },
    {
      "val": "Username",
      "offset": 34
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 512354000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    },
    {
      "val": "Password",
      "offset": 18
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 411689800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 232965900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5101087600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "EditArticleSuccessfully",
  "description": "",
  "id": "bblogworkout;editarticlesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I click MugetestTab button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify UserProfile",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click Funny Article button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify Funny Article Detail Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click Edit Article button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify ArticleTitle",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I write FunnyBunny on ArticleTitle textbox",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click PublishArticle button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify Funny Bunny Article",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MugetestTab",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 231586200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfile",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5096297300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny Article",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 209032200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny Article Detail Page",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5098247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit Article",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 210713500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ArticleTitle",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5100555900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FunnyBunny",
      "offset": 8
    },
    {
      "val": "ArticleTitle",
      "offset": 22
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 392624500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PublishArticle",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 213870100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny Bunny Article",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5120388900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Quit()"
});
formatter.result({
  "duration": 1412628900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "BBlogWorkOut Background",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Open BBlog homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify BblogHomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click SignInTab button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify SignInPage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I write testusermuge@gmail.com on Username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I write 123456 on Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify LoginPage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.OpenBrowser()"
});
formatter.result({
  "duration": 3823651600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.OpenHomePage()"
});
formatter.result({
  "duration": 3791844400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BblogHomePage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5108674900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInTab",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 357665200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignInPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5115320700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testusermuge@gmail.com",
      "offset": 8
    },
    {
      "val": "Username",
      "offset": 34
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 495687100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    },
    {
      "val": "Password",
      "offset": 18
    }
  ],
  "location": "Stepdefs.SetTextbox(String,String)"
});
formatter.result({
  "duration": 419947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 223533600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5101028900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "DeleteArticleSuccessfully",
  "description": "",
  "id": "bblogworkout;deletearticlesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I click MugetestTab button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify UserProfile",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click Funny Bunny Article button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Verify Funny Bunny Article Detail Page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I click Delete Article button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify LoginPage",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MugetestTab",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 233488700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserProfile",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5091293800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny Bunny Article",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 203227700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Funny Bunny Article Detail Page",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5092284900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete Article",
      "offset": 8
    }
  ],
  "location": "Stepdefs.ClickButton(String)"
});
formatter.result({
  "duration": 203692700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginPage",
      "offset": 7
    }
  ],
  "location": "Stepdefs.VerifyHomePage(String)"
});
formatter.result({
  "duration": 5085171200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Quit()"
});
formatter.result({
  "duration": 857682100,
  "status": "passed"
});
});