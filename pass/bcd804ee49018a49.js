async function* f() {
  return await import('./instn-iee-err-ambiguous-export_FIXTURE.js');
}
f().next().catch(error => {}).then($DONE, $DONE);