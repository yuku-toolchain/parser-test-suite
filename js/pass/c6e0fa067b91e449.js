const obj = {
  toString() {
    throw 'custom error';
  }
};
if (true) {
  import(obj).catch(error => {}).then($DONE, $DONE);
}