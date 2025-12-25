/** Testing

    Tests should be run in different environments: chrome, safari, private mode
*/
var Tests = {};

(function() {
    Page.addScript({url: "/js/tests/unit.js"});

    /** Run unit tests

        {}
    */
    Tests.runUnitTests = function(args, cbk) {
        UnitTests.run({}, cbk);
    };
})();

