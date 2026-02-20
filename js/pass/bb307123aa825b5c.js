async function* g() {}
g().next().then(function (result) {}).then($DONE, $DONE);