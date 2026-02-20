var iter = (function* () {})();
iter.next();
var callCount = 0;
async function* f([]) {
  callCount = callCount + 1;
}
f(iter).next().then(() => {}).then($DONE, $DONE);