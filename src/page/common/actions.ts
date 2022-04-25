import { Selector } from "webdriverio";

export default class Actions {
   
    /**
     * @module Appium/WebdriverIO
     * @name switchContext
     * @description Mobile JSON Wire Protocol command, used to switch context
     * @see {@link https://webdriver.io/docs/api/mjsonwp#switchcontext}
     *
     * @param {string} context a string representing an available context
     *
     * @returns {Promise<void>}
     */
    static async switchContext(context: string): Promise<void> {
        await driver.switchContext(context);
    }

    /**
     * @module Appium/WebdriverIO
     * @name pause
     * @description Pauses execution for a specific amount of time.
     *
     * @param {Number} ms time in ms
     *
     * @returns {Promise<unknown>}
     */
    static async pause(ms: number): Promise<unknown> {
        return browser.pause(ms);
    }

    /**
     * @module Appium/WebdriverIO
     * @name waitForDisplayed
     * @description  Wait for an element for the provided amount of milliseconds to be displayed or not displayed.
     * @see {@link https://webdriver.io/docs/api/element/waitForDisplayed/}
     *
     * @param {Selector}   selector selector to get visible
     *
     * @returns {Promise<true | void>}
     */
    static async waitForDisplayed(selector: Selector): Promise<true | void> {
        await $(selector).waitForDisplayed({ timeout: 5000 });
    }

    /**
     * @module Appium/WebdriverIO
     * @name click
     * @description  Click on an element.
     * @see {@link https://webdriver.io/docs/api/element/click}
     *
     * @param {Selector} selector  selector to click
     *
     * @returns {Promise<void>}
     */
    static async click(selector: Selector): Promise<void> {
        try {
            await $(selector).click();
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * @module Appium/WebdriverIO
     * @name getText
     * @description Get the text content from a DOM-element. 
     * @see {@link https://webdriver.io/docs/api/element/click}
     *
     * @param {Selector} selector selector to get text
     *
     * @returns {Promise<string>}
     */
    static async getText(selector: Selector): Promise<string> {
        try {
            return await $(selector).getText()
        } catch (err) {
            throw new Error(err);
        }
    }
}