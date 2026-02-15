var callCount = 0;
var f;
f = async function* ([fn = function () {}, xFn = function x() {}] = []) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);