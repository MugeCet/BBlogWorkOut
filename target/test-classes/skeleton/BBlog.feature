Feature: BBlogWorkOut

  Background:BBlogWorkOut Background
    Given Open chrome browser
    Given Open BBlog homepage
    Then Verify BblogHomePage
    And I click SignInTab button
    Then Verify SignInPage
    And I write testusermuge@gmail.com on Username textbox
    And I write 123456 on Password textbox
    And  I click SignIn button
    Then Verify LoginPage

  Scenario: CreateNewArticleSuccessfully
    And I click NewPost button
    Then Verify NewPostPage
    Given I write Funny on ArticleTitle textbox
    Given I write TestAutoArticleAbout on ArticleAbout textbox
    Given I write PassTheChallenge on Tag textbox
    And I click PublishArticle button
    Then Verify MyArticle
    Then I quit browser

  Scenario: EditArticleSuccessfully
    And I click MugetestTab button
    Then  Verify UserProfile
    And I click Funny Article button
    Then Verify Funny Article Detail Page
    And I click Edit Article button
    Then  Verify ArticleTitle
    Given I write FunnyBunny on ArticleTitle textbox
    And I click PublishArticle button
    Then Verify Funny Bunny Article
    Then I quit browser

  Scenario: DeleteArticleSuccessfully
    And I click MugetestTab button
    Then  Verify UserProfile
    And I click Funny Bunny Article button
    Then Verify Funny Bunny Article Detail Page
    And I click Delete Article button
    Then Verify LoginPage
    Then I quit browser




