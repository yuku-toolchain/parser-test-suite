const obj = {
  toString() {
    throw 'custom error';
  }
};
async function f() {
  import(obj).catch(error => {}).then($DONE, $DONE);
}
f();