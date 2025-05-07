Feature: Sauce Demo Login

Scenario: Successful Login with Valid Credentials
Given I navigated to the sauce demo application 
When User entered the valid creds
And I submit login button
Then I should be redirected to inventory page
And I should see the inventory list

Scenario: Unsuccessful Login
Given I navigated to the sauce demo application
When User entered the invalid creds
And I submit login button
Then I should see the error message on the login page
