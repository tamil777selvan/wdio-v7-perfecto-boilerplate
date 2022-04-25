import Launcher from '@wdio/cli';
import recursiveReadDir from 'recursive-readdir';
import { unlink } from 'fs/promises';

const clearOldJsonReport = async () => {
        let files = await recursiveReadDir('./reports/json/', ['!*.json']);
        return Promise.all(files.map(file => unlink(file)));
}

const run = async () => {
    await clearOldJsonReport();
    const configFile = './src/config/wdio.config.ts';

    const launch = async () => {
        return new Promise((resolve, reject) => {
            try {
                resolve(new Launcher(configFile).run());
            } catch(err) {
                reject(err);
            }
        });
    };

    const basePromise = Promise.resolve([]);

    return basePromise.then((exitCodes) => {
        if (exitCodes.some((code) => code !== 0)) {
            return exitCodes;
        }
        return Promise.resolve(launch()).then(newExitCodes => exitCodes.concat(exitCodes));
    });
};

run()
    .then((exitCodes) => {
        process.exit(Math.max(...exitCodes.map((code) => parseInt(code, 10))));
    })
    .catch((err) => {
        process.exit(1);
    });
