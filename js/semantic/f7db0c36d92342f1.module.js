var smoosh;
function smoosh() {}
async function* f() {
  return await import('./module-code_FIXTURE.js');
}
f().next().then(({value: imported}) => {}).then($DONE, $DONE).catch($DONE);