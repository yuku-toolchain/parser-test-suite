var arg = {};
var p = Promise.resolve(arg);
p.then(3, 5).then(function (result) {}).then($DONE, $DONE);