var callCount = 0;
async function f() {
  callCount++;
}
f().then(() => {}, $DONE).then($DONE, $DONE);