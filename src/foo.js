var Foo = function (element, options) {
    this.init(element, options);
};

Foo.prototype = {

    constructor: Foo,

    init: function (element, options) {
        options = $.extend({}, $.fn.foo.defaults, options);
        this.message = options.message;
        $(element).data("message", this.message);
    }
}

$.fn.foo = function (input) {
    return this.each(function () {
        var $this = $(this), data = $this.data("foo");

        // if the plugin script is not already attached to the selected node...
        if (!data) {
            // if options were passed to the plugin as an object, pass them on
            var options = typeof input == "object" && input;

            // initialize the plugin
            $this.data("foo", (data = new Foo(this, options)));
        }

        // if a simple string is passed to the plugin, it is interpreted as a command,
        // and the corresponding method of the plugin is executed
        if (typeof input == "string") {
            return data[input]();
        }
    });
};

// default values for options if none are explicitly set through the plugin
$.fn.foo.defaults = {
    message: "bar"
};
