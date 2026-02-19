class X {
  method() {
    return this;
  }
}
class Y extends X {
  method() {
    return super.method();
  }
}
const y = new Y();