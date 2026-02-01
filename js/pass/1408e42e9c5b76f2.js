var g = async function* () {
  yield;
  1;
};
var iter = g();
iter.next().then(function (result) {}).then(undefined, $DONE);
iter.next().then(function (result) {}).then($DONE, $DONE);