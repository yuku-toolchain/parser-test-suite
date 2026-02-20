class B {
  method() {
    return 1;
  }
  get x() {
    return 2;
  }
}
class C extends B {
  method() {
    return super.method();
  }
}