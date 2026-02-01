var sup = {
  method() {
    return 'sup';
  }
};
var child = {
  async method(x = super.method()) {
    var y = await x;
  }
};
Object.setPrototypeOf(child, sup);
child.method().then($DONE, $DONE);