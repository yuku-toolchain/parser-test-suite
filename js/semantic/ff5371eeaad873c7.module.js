var smoosh;
function smoosh() {}
async function f() {
  await import('./module-code_FIXTURE.js').then(imported => {});
}
f().then($DONE, $DONE).catch($DONE);