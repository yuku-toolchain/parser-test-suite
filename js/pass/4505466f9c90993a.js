const f = async () => {
  await import('./eval-rqstd-abrupt-err-uri_FIXTURE.js');
};
f().catch(error => {}).then($DONE, $DONE);