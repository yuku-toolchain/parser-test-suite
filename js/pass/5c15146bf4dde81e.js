var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
async function* f([[...x] = (function () {
  initCount += 1;
})()] = [values]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);