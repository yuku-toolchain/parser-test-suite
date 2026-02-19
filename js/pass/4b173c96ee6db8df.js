async function* f() {
  return await import('./instn-iee-err-circular-1_FIXTURE.js');
}
f().next().catch(error => {}).then($DONE, $DONE);