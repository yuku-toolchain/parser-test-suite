var smoosh;
function smoosh() {}
const f = async () => {
  await import('./module-code_FIXTURE.js').then(imported => {});
};
f().then($DONE, $DONE).catch($DONE);