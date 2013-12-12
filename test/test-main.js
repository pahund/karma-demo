var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from "/base"
    baseUrl: "/base/src",

    paths: {
        "jquery": "../lib/jquery-2.0.3.min",
        "jasmine-jquery": "../lib/jasmine-jquery"
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: function () {
        // override the default path where fixtures are loaded from
        jasmine.getFixtures().fixturesPath = "/base/fixture";
        window.__karma__.start.call();
    }
});