/** Unit testing
*/
var UnitTests = {};

(function() {
    Page.addScript({url: "/js/tests/libs/client.js"});
    Page.addScript({url: "/js/tests/libs/data.js"});
    Page.addScript({url: "/js/tests/libs/db.js"});
    Page.addScript({url: "/js/tests/libs/page.js"});
    Page.addScript({url: "/js/tests/libs/sync.js"});

    /** Run all unit tests

        {}
    */
    UnitTests.run = function(args) {
        UnitTests.runAll({}, Client.reportErrors({}));
    };

    /** Run all unit tests

        {}
    */
    UnitTests.runAll = function(args, cbk) {
        var libs = [
            ClientUnitTests.tests,
            DataUnitTests.tests,
            DbUnitTests.tests,
            PageUnitTests.tests,
            SyncUnitTests.tests
        ];

        async.eachSeries(libs, function(scenarios, go_on) {
            async.eachSeries(Object.keys(scenarios), function(test, tested) {
                scenarios[test](tested);
            },
            go_on);
        },
        function(err) {
            if (!!err) { return cbk(err); }

            console.info("ALL UNIT TESTS PASSED");

            cbk();
        });
    };

    /** Run a single unit test

        {
            test: <Function (err) -> ()>
        }
    */
    UnitTests.runSingleTest = function(args, cbk) {
        if (!args.test) { return cbk([0, "Expected test"]); }

        args.test(function(err) {
            if (!!err) { return cbk(err); }

            console.info("PASSED");

            cbk();
        });
    };
})();

