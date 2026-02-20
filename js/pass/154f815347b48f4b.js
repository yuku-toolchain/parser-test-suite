const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
async function f() {
  return await import(obj);
}
f().then(imported => {}).then($DONE, $DONE).catch($DONE);