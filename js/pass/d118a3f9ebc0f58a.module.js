const f = async () => {
  await import('./script-code_FIXTURE.js');
};
f().catch(error => {}).then($DONE, $DONE);