const obj = {
  toString() {
    throw 'custom error';
  }
};
{
  import(obj).catch(error => {}).then($DONE, $DONE);
}