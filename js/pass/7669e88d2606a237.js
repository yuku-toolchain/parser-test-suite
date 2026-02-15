var g1 = async function* () {
  yield;
};
var g2 = async function* () {
  yield 1;
};
var iter1 = g1();
iter1.next().then(function (result) {}).then(undefined, $DONE);
iter1.next().then(function (result) {}).then(undefined, $DONE);
var iter2 = g2();
iter2.next().then(function (result) {}).then(undefined, $DONE);
iter2.next().then(function (result) {}).then($DONE, $DONE);