const obj = {
  toString() {
    throw 'custom error';
  }
};
const f = async () => {
  await import(obj);
};
f().catch(error => {}).then($DONE, $DONE);