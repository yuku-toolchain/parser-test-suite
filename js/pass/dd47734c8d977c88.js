const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
const f = async () => await import(obj);
f().then(imported => {}).then($DONE, $DONE).catch($DONE);