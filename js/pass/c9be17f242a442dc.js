const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
function f() {
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
}
f();