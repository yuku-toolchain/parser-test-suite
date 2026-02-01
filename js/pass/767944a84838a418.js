const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
async function f() {
  await import(obj).then(imported => {});
}
f().then($DONE, $DONE).catch($DONE);