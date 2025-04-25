import {expect, test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";


test('Navigate to Login Page', async({page})=>{


    const lp = new LoginPage(page);

    await lp.navigateToLogin();
    await lp.enterLoginCreds("demo","demo");
    await page.waitForTimeout(3000);

    const hp = new HomePage(page);
    await hp.validateLogoutBtn();
    


})

