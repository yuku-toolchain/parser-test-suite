var p1 = Promise.resolve(3);
var pAll = Promise.all([p1]);
pAll.then(function (result) {}).then($DONE, $DONE);