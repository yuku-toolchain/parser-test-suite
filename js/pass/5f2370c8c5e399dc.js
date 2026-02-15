var callCount = 0;
async function* f({gen = function* () {}, xGen = function* x() {}} = {}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);