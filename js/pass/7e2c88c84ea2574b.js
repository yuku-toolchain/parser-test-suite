const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
let callCount = 0;
async function* f() {
  await import(obj).then(imported => {
    callCount++;
  });
}
f().next().then(() => {}).then($DONE, $DONE).catch($DONE);