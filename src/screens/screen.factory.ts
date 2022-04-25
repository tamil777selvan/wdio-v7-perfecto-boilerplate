import fs from 'fs';
import path from 'path';

export default class ScreenFactory {
    static getNativeScreen(screenName: string) {
        // @ts-expect-error
        const platform = browser.capabilities.platformName.toLowerCase();

        return ScreenFactory.createScreen([
            `./native/${platform}/${screenName}.ts`
        ])
    }

    static createScreen(trialPaths: string[]) {
        for (const trialPath of trialPaths) {
            if (fs.existsSync(path.join(__dirname, trialPath))) {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const {Screen} = require(trialPath);
                return new Screen();
            }
        }
        throw new Error(`Screen ${trialPaths.join(' or ')} not found!`);
    }
}