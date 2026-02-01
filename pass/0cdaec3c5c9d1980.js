function B() {}
B.prototype = {
  constructor: B,
  set m(v) {
    throw Error();
  }
};
class C extends B {
  m() {
    return 1;
  }
}