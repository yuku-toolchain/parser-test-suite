const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
async function f() {
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
}
f();