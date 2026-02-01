var p = Promise.race([]);
p.then(function () {}, function () {}).then($DONE, $DONE);
Promise.resolve().then().then().then($DONE, $DONE);