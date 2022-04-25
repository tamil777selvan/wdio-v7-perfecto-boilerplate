import {Given, When, Then} from '@cucumber/cucumber';

import CalculatorPage from '../page/calculator.page';

const calculatorPage = new CalculatorPage();


Given(/^I start "([^"]*)" application$/, async (appName) => {
    await calculatorPage.openApplication(appName);
});

When(/^I add "([^"]*)" and "([^"]*)"$/, async (num1, num2) => {
    await calculatorPage.add(num1, num2)
});

Then(/^I should get "([^"]*)" as result$/, async (result) => {
    await calculatorPage.verifyResult(result);
});