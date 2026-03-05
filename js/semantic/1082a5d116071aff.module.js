var smoosh;
function smoosh() {}
function f() {
  import('./module-code_FIXTURE.js').then(imported => {}).then($DONE, $DONE).catch($DONE);
}
f();