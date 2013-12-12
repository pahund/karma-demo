module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: "",

        // frameworks to use
        frameworks: [
            "jasmine",
            "requirejs"
        ],

        // list of files / patterns to load in the browser
        files: [
            {
                pattern: "fixture/**/*.html",
                watched: false,
                included: false,
                served: true
            },
            {
                pattern: "lib/**/jquery-2.0.3.min.js",
                watched: false,
                included: true,
                served: true
            },
            {
                pattern: "lib/**/jasmine-jquery.js",
                watched: false,
                included: true,
                served: true
            },
            {
                pattern: "src/**/*.js",
                watched: true,
                included: false,
                served: true
            },
            {
                pattern: "test/**/*Spec.js",
                watched: true,
                included: false,
                served: true
            },

            "test/test-main.js"
        ],

        // we need this to keep Karma from converting our fixtures to JavaScript
        preprocessors: {
            "*/.html": []
        },

        // list of files to exclude
        exclude: [

        ],

        // test results reporter to use
        // possible values: "dots", "progress", "junit", "growl", "coverage"
        reporters: ["progress"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ["Firefox"],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
