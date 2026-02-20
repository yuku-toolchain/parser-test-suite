async function f() {
  return await import('./instn-iee-err-circular-1_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}
f();