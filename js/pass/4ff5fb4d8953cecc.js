const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
let f = () => {
  return import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
};
f();