const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
if (true) {
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
}