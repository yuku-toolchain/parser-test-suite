var p = Promise.reject(3);
p.then(function () {}, function (result) {}).then($DONE, $DONE);