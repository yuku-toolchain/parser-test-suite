async function f() {
  return await import('./instn-iee-err-ambiguous-export_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}
f();