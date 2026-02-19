var nonIterable = 3;
Promise.all(nonIterable).then(function () {}, function (err) {}).then($DONE, $DONE);