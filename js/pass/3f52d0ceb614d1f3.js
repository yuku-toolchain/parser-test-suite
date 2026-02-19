let x = 0;
while (!x) {
  x++;
  import('./instn-iee-err-ambiguous-export_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}