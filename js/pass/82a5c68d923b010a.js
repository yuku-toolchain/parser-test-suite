const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
const f = async () => {
  await import(obj).then(imported => {});
};
f().then($DONE, $DONE).catch($DONE);