const obj = {
  toString() {
    throw 'custom error';
  }
};
function f() {
  import(obj).catch(error => {}).then($DONE, $DONE);
}
f();