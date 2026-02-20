const obj = {
  toString() {
    return './module-code_FIXTURE.js';
  }
};
let x = 0;
while (!x) {
  x++;
  import(obj).then(imported => {}).then($DONE, $DONE).catch($DONE);
}