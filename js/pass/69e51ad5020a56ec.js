var callCount = 0;
async function* f() {
  callCount++;
}
f().next().then(() => {}, $DONE).then($DONE, $DONE);