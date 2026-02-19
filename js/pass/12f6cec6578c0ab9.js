const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
let f = () => import(obj).then(imported => {});
f().then($DONE, $DONE).catch($DONE);