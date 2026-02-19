const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
async function* f() {
  return await import(obj);
}
f().next().then(({value: imported}) => {}).then($DONE, $DONE).catch($DONE);