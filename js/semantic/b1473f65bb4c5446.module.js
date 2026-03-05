var smoosh;
function smoosh() {}
let callCount = 0;
async function* f() {
  await import('./module-code_FIXTURE.js').then(imported => {
    callCount++;
  });
}
f().next().then(() => {}).then($DONE, $DONE).catch($DONE);