async function f() {
  return await import('./eval-rqstd-abrupt-err-uri_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}
f();