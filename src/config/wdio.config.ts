// @ts-nocheck

import {generate} from 'multiple-cucumber-html-reporter';
import dotenv from 'dotenv'
dotenv.config();

export const config = {

    // ==================================
    // Where should your test be launched
    // ==================================
    //
    runner: 'local',
    //
    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete, as
    // WebdriverIO automatically connects to localhost. Also if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack, Testing Bot or LambdaTest, you also don't
    // need to define host and port information (because WebdriverIO can figure that out
    // from your user and key information). However, if you are using a private Selenium
    // backend, you should define the `hostname`, `port`, and `path` here.
    //
    hostname: process.env.PERFECTO_HOST_NAME,
    port: 443,
    path: '/nexperience/perfectomobile/wd/hub',
    // Protocol: http | https
    protocol: 'https',
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, Testing Bot and LambdaTest. (Other cloud providers
    // should work, too.) These services define specific `user` and `key` (or access key)
    // values you must put here, in order to connect to these services.
    //
    // user: 'webdriverio',
    // key:  'xxxxxxxxxxxxxxxx-xxxxxx-xxxxx-xxxxxxxxx',

    // If you run your tests on Sauce Labs you can specify the region you want to run your tests
    // in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
    // These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
    // If you don't provide the region, it defaults to `us`.
    // region: 'us',
    //
    // Sauce Labs provides a [headless offering](https://saucelabs.com/products/web-testing/sauce-headless-testing)
    // that allows you to run Chrome and Firefox tests headless.
    //
    // headless: false,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './src/features/calcTest.feature'
    ],
    // Patterns to exclude.
    exclude: [
         // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your `capabilities`, you can overwrite the `spec` and `exclude`
    // options in order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set `maxInstances` to 1. wdio will spawn 3 processes.
    //
    // Therefore, if you have 10 spec files and you set `maxInstances` to 10, all spec files
    // will be tested at the same time and 30 processes will be spawned.
    //
    // The property basically handles how many capabilities from the same test should run tests.
    //
    maxInstances: 10,
    //
    // Or set a limit to run tests with a specific capability.
    // maxInstancesPerCapability: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        maxInstances: 1,
        platformName: process.env.PLATFORM_NAME,
        'appium:platformVersion': process.env.PLATFORM_VERSION,
        'appium:deviceName': process.env.DEVICE_ID,
        'perfecto:options': {
            securityToken: process.env.PERFECTO_TOKEN
        },
        'cjson:metadata': {
            platform: {
                name: process.env.PLATFORM_NAME,
                version: process.env.PLATFORM_VERSION
            },
            device: process.env.DEVICE_ID,
            app: {
                name: 'Calculator',
                version: '1.0.0'
            }
        }
    }],
    //
    // Additional list of node arguments to use when starting child processes
    execArgv: [],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // use 'silent' level to disable logger
    logLevels: {
        webdriver: 'info',
        '@wdio/appium-service': 'info'
    },
    //
    // Set directory to store all logs into
    // outputDir: __dirname,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten `url()` command calls. If your `url` parameter starts
    // with `/`, the `baseUrl` is prepended, not including the path portion of `baseUrl`.
    //
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the `baseUrl`
    // gets prepended directly.
    baseUrl: 'http://localhost:8080',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 1000,
    //
    // Add files to watch (e.g. application code or page objects) when running `wdio` command
    // with `--watch` flag. Globbing is supported.
    filesToWatch: [
        // e.g. rerun tests if I change my application code
        // './app/**/*.js'
    ],
    //
    // Framework you want to run your specs with.
    // The following are supported: 'mocha', 'jasmine', and 'cucumber'
    // See also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 0,
    // Delay in seconds between the spec file retry attempts
    specFileRetriesDelay: 0,
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // See also: https://webdriver.io/docs/dot-reporter.html , and click on "Reporters" in left column
    reporters: [
        'spec',
        ['cucumberjs-json', {
            jsonFolder: './reports/json/',
            language: 'en'
        }]
    ],
    //
    // If you are using Cucumber you need to specify where your step definitions are located.
    // See also: https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-cucumber-framework#cucumberopts-options
    cucumberOpts: {
        require: ['./src/step_definitions/calc.step.ts'],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source URIs
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression: '',  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
        scenarioLevelReporter: false // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides a several hooks you can use to interfere the test process in order to enhance
    // it and build services around it. You can either apply a single function to it or an array of
    // methods. If one of them returns with a promise, WebdriverIO will wait until that promise is
    // resolved to continue.
    //
    // /**
    //  * Gets executed once before all workers get launched.
    //  * @param {Object} config wdio configuration object
    //  * @param {Array.<Object>} capabilities list of capabilities details
    //  */
    // onPrepare: function (config, capabilities) {
    // },
    // /**
    //  * Gets executed before a worker process is spawned and can be used to initialize specific service
    //  * for that worker as well as modify runtime environments in an async fashion.
    //  * @param  {String} cid      capability id (e.g 0-0)
    //  * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
    //  * @param  {[type]} specs    specs to be run in the worker process
    //  * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
    //  * @param  {[type]} execArgv list of string arguments passed to the worker process
    //  */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    // /**
    //  * Gets executed just after a worker process has exited.
    //  * @param  {String} cid      capability id (e.g 0-0)
    //  * @param  {Number} exitCode 0 - success, 1 - fail
    //  * @param  {[type]} specs    specs to be run in the worker process
    //  * @param  {Number} retries  number of retries used
    //  */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    // /**
    //  * Gets executed just before initializing the webdriver session and test framework. It allows you
    //  * to manipulate configurations depending on the capability or spec.
    //  * @param {Object} config wdio configuration object
    //  * @param {Array.<Object>} capabilities list of capabilities details
    //  * @param {Array.<String>} specs List of spec file paths that are to be run
    //  */
    // beforeSession: function (config, capabilities, specs) {
    // },
    // /**
    //  * Gets executed before test execution begins. At this point you can access to all global
    //  * variables like `browser`. It is the perfect place to define custom commands.
    //  * @param {Array.<Object>} capabilities list of capabilities details
    //  * @param {Array.<String>} specs        List of spec file paths that are to be run
    //  * @param {Object}         browser      instance of created browser/device session
    //  */
    // before: function (capabilities, specs, browser) {
    // },
    // /**
    //  * Gets executed before the suite starts.
    //  * @param {Object} suite suite details
    //  */
    // beforeSuite: function (suite) {
    // },
    // /**
    //  * This hook gets executed _before_ every hook within the suite starts.
    //  * (For example, this runs before calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.). In Cucumber `context` is the World object.
    //  *
    //  */
    // beforeHook: function (test, context) {
    // },
    // /**
    //  * Hook that gets executed _after_ every hook within the suite ends.
    //  * (For example, this runs after calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.). In Cucumber `context` is the World object.
    //  */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    // /**
    //  * Function to be executed before a test (in Mocha/Jasmine only)
    //  * @param {Object} test    test object
    //  * @param {Object} context scope object the test was executed with
    //  */
    // beforeTest: function (test, context) {
    // },
    // /**
    //  * Runs before a WebdriverIO command is executed.
    //  * @param {String} commandName hook command name
    //  * @param {Array} args arguments that the command would receive
    //  */
    // beforeCommand: function (commandName, args) {
    // },
    // /**
    //  * Runs after a WebdriverIO command gets executed
    //  * @param {String} commandName hook command name
    //  * @param {Array} args arguments that command would receive
    //  * @param {Number} result 0 - command success, 1 - command error
    //  * @param {Object} error error object, if any
    //  */
    // afterCommand: function (commandName, args, result, error) {
    // },
    // /**
    //  * Function to be executed after a test (in Mocha/Jasmine only)
    //  * @param {Object}  test             test object
    //  * @param {Object}  context          scope object the test was executed with
    //  * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
    //  * @param {Any}     result.result    return object of test function
    //  * @param {Number}  result.duration  duration of test
    //  * @param {Boolean} result.passed    true if test has passed, otherwise false
    //  * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
    //  */
    // afterTest: function (test, context, { error, result, duration, passed, retries }) {
    // },
    // /**
    //  * Hook that gets executed after the suite has ended.
    //  * @param {Object} suite suite details
    //  */
    // afterSuite: function (suite) {
    // },
    // /**
    //  * Gets executed after all tests are done. You still have access to all global variables from
    //  * the test.
    //  * @param {Number} result 0 - test pass, 1 - test fail
    //  * @param {Array.<Object>} capabilities list of capabilities details
    //  * @param {Array.<String>} specs List of spec file paths that ran
    //  */
    // after: function (result, capabilities, specs) {
    // },
    // /**
    //  * Gets executed right after terminating the webdriver session.
    //  * @param {Object} config wdio configuration object
    //  * @param {Array.<Object>} capabilities list of capabilities details
    //  * @param {Array.<String>} specs List of spec file paths that ran
    //  */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers have shut down and the process is about to exit.
     * An error thrown in the `onComplete` hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
        generate({
            jsonDir: './reports/json',
            reportPath: './reports/html',
            openReportInBrowser: true,
            disableLog: true
        });
    },
    // /**
    // * Gets executed when a refresh happens.
    // * @param {String} oldSessionId session ID of the old session
    // * @param {String} newSessionId session ID of the new session
    // */
    // onReload: function(oldSessionId, newSessionId) {
    // },
    // /**
    //  * Cucumber Hooks
    //  *
    //  * Runs before a Cucumber Feature.
    //  * @param {String}                   uri      path to feature file
    //  * @param {GherkinDocument.IFeature} feature  Cucumber feature object
    //  */
    // beforeFeature: function (uri, feature) {
    // },
    // /**
    //  *
    //  * Runs before a Cucumber Scenario.
    //  * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
    //  * @param {Object}                 context  Cucumber World object
    //  */
    // beforeScenario: function (world, context) {
    // },
    // /**
    //  *
    //  * Runs before a Cucumber Step.
    //  * @param {Pickle.IPickleStep} step     step data
    //  * @param {IPickle}            scenario scenario pickle
    //  * @param {Object}             context  Cucumber World object
    //  */
    // beforeStep: function (step, scenario, context) {
    // },
    // /**
    //  *
    //  * Runs after a Cucumber Step.
    //  * @param {Pickle.IPickleStep} step             step data
    //  * @param {IPickle}            scenario         scenario pickle
    //  * @param {Object}             result           results object containing scenario results
    //  * @param {boolean}            result.passed    true if scenario has passed
    //  * @param {string}             result.error     error stack if scenario failed
    //  * @param {number}             result.duration  duration of scenario in milliseconds
    //  * @param {Object}             context          Cucumber World object
    //  */
    // afterStep: function (step, scenario, result, context) {
    // },
    // /**
    //  *
    //  * Runs after a Cucumber Scenario.
    //  * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
    //  * @param {Object}                 result           results object containing scenario results `{passed: boolean, error: string, duration: number}`
    //  * @param {boolean}                result.passed    true if scenario has passed
    //  * @param {string}                 result.error     error stack if scenario failed
    //  * @param {number}                 result.duration  duration of scenario in milliseconds
    //  * @param {Object}                 context          Cucumber World object
    //  */
    // afterScenario: function (world, result, context) {
    // },
    // /**
    //  *
    //  * Runs after a Cucumber Feature.
    //  * @param {String}                   uri      path to feature file
    //  * @param {GherkinDocument.IFeature} feature  Cucumber feature object
    //  */
    // afterFeature: function (uri, feature) {
    // }
}