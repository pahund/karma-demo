define([
    "foo"
], function () {

    var init = function () {
        jasmine.getFixtures().load("fooFixture.html");
    };

    describe("jQuery", function () {
        it("is defined", function () {
            expect($).toBeDefined();
        });
    });

    describe("The foo", function() {

        beforeEach(init);

        it("says bar by default", function() {
            var $foo = $("#foo").foo();
            expect($foo.data("message")).toBe("bar");
        });

        it("says BAR! if I configure it that way", function () {
            var $foo = $("#foo").foo({
                message: "BAR!"
            });
            expect($foo.data("message")).toBe("BAR!");
        })
    });
});
