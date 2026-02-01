async function* f() {
  await import('./eval-rqstd-abrupt-err-uri_FIXTURE.js');
}
f().next().catch(error => {}).then($DONE, $DONE);