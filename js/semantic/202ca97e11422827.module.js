var smoosh;
function smoosh() {}
let x = 0;
while (!x) {
  x++;
  import('./module-code_FIXTURE.js').then(imported => {}).then($DONE, $DONE).catch($DONE);
}