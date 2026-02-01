let x = 0;
while (!x) {
  x++;
  import('./script-code_FIXTURE.js').catch(error => {}).then($DONE, $DONE);
}