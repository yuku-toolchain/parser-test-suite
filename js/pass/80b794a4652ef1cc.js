const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
if (false) {} else {
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
}