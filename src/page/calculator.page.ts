import {should} from 'chai';
should();

import Page from "./common/page"
import Actions from "./common/actions";

export default class CalculatorPage extends Page {
    /**
     * @returns {CalculatorScreen}
     */
    get calaulatorScreen() {
        return this.getNativeScreen('calculator.screen');
    }

    async openApplication(appName: string) {
        await browser.execute('mobile:application:open', {'name': appName});
        await Actions.pause(3000);
    }

    async add(num1: string, num2: string) {
        //Clear all value
        await Actions.waitForDisplayed((await this.calaulatorScreen).clear);
        await Actions.click((await this.calaulatorScreen).clear);

        //add numbers
        for (let i = 0; i < num1.length; i++) {
            await Actions.click((await this.calaulatorScreen).number(num1.charAt(i)));
        }

        await Actions.click((await this.calaulatorScreen).add);

        for (let j = 0; j < num2.length; j++) {
            await Actions.click((await this.calaulatorScreen).number(num2.charAt(j)));
        }

        //Equals
        await Actions.click((await this.calaulatorScreen).equal);
    }

    async verifyResult(result: string) {
        (await Actions.getText((await this.calaulatorScreen).result)).should.equal(result);
    }
}