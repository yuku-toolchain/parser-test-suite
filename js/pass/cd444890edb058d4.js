var sup = {
  method() {
    return 'sup';
  }
};
var child = {
  async method() {
    var x = await super.method();
  }
};
Object.setPrototypeOf(child, sup);
child.method().then($DONE, $DONE);