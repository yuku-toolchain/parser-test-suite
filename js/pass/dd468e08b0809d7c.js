const obj = {
  toString() {
    throw 'custom error';
  }
};
let x = 0;
while (!x) {
  x++;
  import(obj).catch(error => {}).then($DONE, $DONE);
}