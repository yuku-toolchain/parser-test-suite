const obj = {
  toString() {
    throw 'custom error';
  }
};
label: {
  import(obj).catch(error => {}).then($DONE, $DONE);
}