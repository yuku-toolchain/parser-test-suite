const f = async () => {
  await import('./eval-rqstd-abrupt-err-type_FIXTURE.js');
};
f().catch(error => {}).then($DONE, $DONE);