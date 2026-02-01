var arg = {};
var p = Promise.reject(arg);
p.then(3, 5).then(function () {}, function (result) {}).then($DONE, $DONE);