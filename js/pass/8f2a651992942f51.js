const obj = {
  toString() {
    throw 'custom error';
  }
};
do {
  import(obj).catch(error => {}).then($DONE, $DONE);
} while (false);