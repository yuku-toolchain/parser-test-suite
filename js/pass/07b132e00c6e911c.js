class A {
  async method() {
    return 'sup';
  }
}
class B extends A {
  async method(x = super.method()) {}
}
var child = new B();
child.method().then($DONE, $DONE);