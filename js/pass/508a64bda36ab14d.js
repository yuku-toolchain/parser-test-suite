const obj = {
  toString() {
    throw 'custom error';
  }
};
async function* f() {
  await import(obj);
}
f().next().catch(error => {}).then($DONE, $DONE);