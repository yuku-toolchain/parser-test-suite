var initCount = 0;
var callCount = 0;
async function* f([[] = (function () {
  initCount += 1;
})()] = [[23]]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);