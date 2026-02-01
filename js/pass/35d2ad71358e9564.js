const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);