import Actions from "./actions";
import ScreenFactory from "../../screens/screen.factory";

export default class Page {
    screens: { native: any; };
    
    constructor() {
        this.screens = {
            native: {}
        }
    }

    async getNativeScreen(screenName: string) {
        await Actions.switchContext('NATIVE_APP');
        if (!(screenName in this.screens.native)) {
            this.screens.native[screenName] = ScreenFactory.getNativeScreen(screenName);
        }
        return this.screens.native[screenName];
    }
}