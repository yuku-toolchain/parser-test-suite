async function* g() {}
g().return().then(function (result) {}).then($DONE, $DONE);