var executed = false;
class C {
  f() {
    eval("executed = true; this.#x;");
  }
}