var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    allScriptsTimeout: 20000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    specs: ['../Specification/clientManagementUI.js'],
    capabillities: {
        'browserName': 'Chrome'
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },

    jasmineNodeOpts: {
        showColors: true,
        onComplete: null,
        isVerbose: false,
        includeStackTrace: true,
    }

};