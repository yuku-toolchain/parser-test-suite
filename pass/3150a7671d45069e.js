const f = async () => {
  await import('./instn-iee-err-ambiguous-export_FIXTURE.js');
};
f().catch(error => {}).then($DONE, $DONE);