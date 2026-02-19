const obj = {
  toString() {
    throw 'custom error';
  }
};
if (false) {} else {
  import(obj).catch(error => {}).then($DONE, $DONE);
}