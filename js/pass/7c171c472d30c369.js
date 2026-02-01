class X {
  method() {
    return this;
  }
}
class Y extends X {
  method() {
    delete super.method;
  }
}
const y = new Y();