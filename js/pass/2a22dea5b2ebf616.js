var arg = {};
var p = Promise.resolve(arg);
p.catch(function () {}).then(function (result) {}).then($DONE, $DONE);