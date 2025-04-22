Javascript
----------

--> Variable

- let
- var 
- const

let 
{


}

var
function()
{

}

const - We will not be able to change

Basic terminology in Playwright test
------------------------------------

- require -> To include the playwright module or to use playwright module in the current js file.

- async and await -> async is an function, await is mostly valid inside the async function only
- We can write multiple steps inside the async function
- Each time when the async function is call, it return a new promise value and that is being resolved by the value returned by the async function (either accepted or rejected)

- page -> it is browser context object and used to open URL and interact with the browsers

- expect -> Library for JS and TS which is use with test runner such as Playwrigh Test and Jest Library.
- It help us in writing better assertion for component and end to end testing.



Playwright Commands -
---------------------

To run all the tests ->npx playwright test

To run specific test ->npx playwright test tests/TC01FirstTest.spec.js

To run in headed mode ->npx playwright test tests/TC01FirstTest.spec.js 
--headed

To run based on title ->npx playwright test -g "Validate the Title of the Page"

To run based on word present in file name ->npx playwright test <word present in filename>


05th April 2025
---------------
--> Locators in Playwright

HTML

<a class="_1TOQfO" title="Login" aria-haspopup="true" href="/account/login?ret=/"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" data-testid="Login" class="-dOa_b L_FVxe" width="24" height="24"><span>Login</span> id = "adbc" </a>

tagname - a
attribute - class, title, aria-haspopup, href, alt, class, width
value - _1TOQfO, Login

CSS - 

1. If you are aware about classname - .classname - ._1TOQfO
2. If you are aware about ID - #id - #adbc
3. If you are aware about tagname and attribute and value - tagname[attribute='value']
4. If you are having attribute and value then the css - [attribute='value']
5. parent -> child -> grand child



CSS Selector - img[alt='Cart']
Xpath Selector - //div[@class='_1wE2Px']

Plugin - Selector Hub - https://selectorshub.com/selectorshub/#download-section

Download and configure for any browsers
----------------------------------------------------------------------------

page.getByRole() -> Locate by explicit and implicit accessibility attributes.

page.getByText() -> Locate by text content.

page.getByLabel() -> Locate a form control by associated label's text.

page.getByPlaceholder() -> Locate an input by placeholder.

page.getByAltText() -> Locate an element, usually image, by its text alternative.

page.getByTitle() -> Locate an element by its title attribute.

page.getByTestId() -> Locate an element based on its data-testid attribute (other attributes can be configured).

page.locator("css=[title = 'login']")
page.locator("[title = 'login']")
page.locator("xpath=//div[@title = 'login']")


Assignment -
----------
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- Login In and Logout
- Add Pay-Grade -> Login->Admin->Job->Pay Grades

- https://playwright.dev/docs/locators



-->Playwright Test Explorer

-->Extension - Playwright Test for VSCode

-->Headed and Headless mode in config file

-->Run the test cases in chrome and edge browser

-->Record the Test in Playwright

-->Taking a Screenshot
    - Element Screenshot
    - Page Screenshot
    - Full Page Screenshot

--> Dropdown 

--> iFrames and Drag and Drop

--> Mouse Actions

--> Keyboard Actions

--> Handle Multiple Window + Multiple Tabs

--> waitForLoadState - how to use

--> Date Pickers


Assignment - 11th April 2025

https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
- Login In and Logout
- Under - Admin->Organization->General Information
- Under - Admin->Organization->Location
- Under - Admin->Organization->Structure
page.loc('')


Tags, Groups, Annotations - 
https://playwright.dev/docs/test-annotations#annotate-tests
