Feature: Demo for login

Scenario: Carrier Portal

Given Open a website '<URL>'
When Lets login with '<username>' and '<password>'
Then Logout the portal

Examples:
    | URL | username | password |
    | https://www.saucedemo.com/  | standard_user  | secret_sauce  |