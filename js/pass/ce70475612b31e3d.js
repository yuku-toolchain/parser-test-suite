var arg = {};
var p = Promise.resolve(arg);
p.then(undefined, undefined).then(function (result) {}).then($DONE, $DONE);