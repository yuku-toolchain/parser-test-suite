const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
do {
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
} while (false);