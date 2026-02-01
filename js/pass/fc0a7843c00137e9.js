const obj = {
  toString() {
    throw 'custom error';
  }
};
let f = () => {
  import(obj).catch(error => {}).then($DONE, $DONE);
};
f();