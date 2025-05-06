import {Given, When, Then} from '@cucumber/cucumber'
import {LoginPage} from '../pageObject/loginpage'

const login = new LoginPage();

Given('Open a website {string}', async (url)=>{

    await login.navigate(url);
})

