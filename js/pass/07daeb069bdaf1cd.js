var arg = {};
var p = Promise.reject(arg);
p.then(function () {}).catch(function (result) {}).then($DONE, $DONE);