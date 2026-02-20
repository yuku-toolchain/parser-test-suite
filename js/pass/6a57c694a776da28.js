let x = 0;
while (!x) {
  x++;
  import('./eval-rqstd-abrupt-err-uri_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}