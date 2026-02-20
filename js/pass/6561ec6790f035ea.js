const obj = {
  toString() {
    throw 'custom error';
  }
};
async function* f() {
  return await import(obj);
}
f().next().catch(error => {}).then($DONE, $DONE);