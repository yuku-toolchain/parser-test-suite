const obj = {
  toString() {
    throw 'custom error';
  }
};
async function f() {
  await import(obj).catch(error => {}).then($DONE, $DONE);
}
f();