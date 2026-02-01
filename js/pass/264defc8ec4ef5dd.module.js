async function f() {
  return await import('./script-code_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}
f();