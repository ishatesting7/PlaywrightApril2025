# Test info

- Name: Validate the text box fields
- Location: /Users/vikasbhandari/Documents/PlaywrightClass/PlaywrightApril2025/tests/assertionDemo.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveAttribute(expected)

Locator: locator('#email1')
Expected string: "emal1"
Received string: "email1"
Call log:
  - expect.toHaveAttribute with timeout 5000ms
  - waiting for locator('#email1')
    9 × locator resolved to <input id="email1" type="email" name="email1" placeholder="Enter Email"/>
      - unexpected value "email1"

    at /Users/vikasbhandari/Documents/PlaywrightClass/PlaywrightApril2025/tests/assertionDemo.spec.js:9:43
```

# Page snapshot

```yaml
- navigation:
  - img "logo"
  - heading "Learn Automation Courses" [level=1]
  - img "menu"
  - text: Learn Automation Courses
  - img "delete"
  - link "Home":
    - /url: /
  - link "Practise":
    - /url: /practise
- img "Login"
- heading "Sign In" [level=2]
- textbox "Enter Email"
- textbox "Enter Password"
- button "Sign in"
- link "New user? Signup":
  - /url: /signup
- heading "Connect with us" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
- link:
  - /url: https://learn-automation/reddit
  - img
- heading "Learn Automation By Mukesh Otwani" [level=3]
- heading "©2023 All rights reserved" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
```

# Test source

```ts
   1 | const {test, expect} = require('@playwright/test')
   2 |
   3 | test('Validate the text box fields', async ({page}) =>{
   4 |
   5 |     await page.goto('https://freelance-learn-automation.vercel.app/login');
   6 |
   7 |     const bolean = await page.locator('#email1').isEnabled();
   8 |
>  9 |     await expect(page.locator('#email1')).toHaveAttribute('id', 'emal1');
     |                                           ^ Error: Timed out 5000ms waiting for expect(locator).toHaveAttribute(expected)
  10 |
  11 |     console.log(bolean);
  12 | })
```