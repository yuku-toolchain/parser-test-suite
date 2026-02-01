var iter = (function* () {})();
iter.next();
var callCount = 0;
async function* f([] = iter) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);