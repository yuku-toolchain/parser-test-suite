const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
label: {
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
}