var callCount = 0;
async function* f({arrow = () => {}} = {}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);