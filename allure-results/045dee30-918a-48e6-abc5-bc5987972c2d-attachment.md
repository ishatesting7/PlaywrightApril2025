# Test info

- Name: Try Catch Demo
- Location: /Users/vikasbhandari/Documents/PlaywrightClass/PlaywrightApril2025/tests/testTryCatchDemo.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeHidden()

Locator: getByRole('link', { name: 'client brand banner' })
Expected: hidden
Received: visible
Call log:
  - expect.toBeHidden with timeout 5000ms
  - waiting for getByRole('link', { name: 'client brand banner' })
    9 × locator resolved to <a class="oxd-brand" data-v-16e446b0="" data-v-5b6b3cf3="" href="https://www.orangehrm.com/">…</a>
      - unexpected value "visible"

    at /Users/vikasbhandari/Documents/PlaywrightClass/PlaywrightApril2025/tests/testTryCatchDemo.spec.js:20:73
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Apply Leave" [level=6]
- separator
- paragraph: No Leave Types with Leave Balance
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 | const {test, expect} = require('@playwright/test');
   2 |
   3 | test('Try Catch Demo', async({page})=>{
   4 |
   5 |     try{
   6 |
   7 |         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   8 |         await page.getByRole('textbox', { name: 'Username' }).click();
   9 |         await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  10 |   await page.getByRole('textbox', { name: 'Password' }).click();
  11 |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  12 |
  13 |   await page.getByRole('button', { name: 'Login' }).click();
  14 |   await page.getByRole('link', { name: 'Leave' }).click();
  15 |   await page.getByRole('link', { name: 'Apply' }).click();
  16 |   
  17 |   await expect(page.getByText('No Leave Types with Leave')).toBeVisible();
  18 |   await page.getByRole('heading', { name: 'Apply Leave' }).click();
  19 |   await expect(page.getByRole('button', { name: 'Upgrade' })).toBeVisible();
> 20 |   await expect(page.getByRole('link', { name: 'client brand banner' })).toBeHidden();
     |                                                                         ^ Error: Timed out 5000ms waiting for expect(locator).toBeHidden()
  21 |
  22 |     }
  23 |
  24 |     catch(error)
  25 |     {
  26 |         console.error("Un expected Error");
  27 |
  28 |         throw error;
  29 |     }
  30 |     finally{
  31 |         console.log(" I  will get executed ")
  32 |     }
  33 | })
  34 |
  35 | /*
  36 |
  37 |
  38 | 91 passed 9 failed
  39 |
  40 | 95 passed 5 failed
  41 |
  42 | 91 passed 9 failed
  43 |
  44 | 98 passed 2 failed
  45 |
  46 | 98 passed 2 failed
  47 |
  48 | */
```