class A {
  method() {
    return "Test262";
  }
}
class C extends A {
  #m() {
    return super.method();
  }
  access(o) {
    return this.#m.call(o);
  }
}
let c = new C();
let o = {};