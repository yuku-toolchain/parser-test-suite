async function* f() {
  await import('./script-code_FIXTURE.js');
}
f().next().catch(error => {}).then($DONE, $DONE);