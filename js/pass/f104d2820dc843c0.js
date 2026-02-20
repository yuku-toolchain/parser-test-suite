const obj = {
  toString() {
    throw 'custom error';
  }
};
async function f() {
  return await import(obj).catch(error => {}).then($DONE, $DONE);
}
f();