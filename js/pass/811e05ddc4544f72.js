var arg = {};
var p = Promise.reject(arg);
p.then(undefined, undefined).then(function () {}, function (result) {}).then($DONE, $DONE);