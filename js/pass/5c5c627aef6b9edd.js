var nonIterable = 3;
Promise.race(nonIterable).then(function () {}, function (err) {}).then($DONE, $DONE);