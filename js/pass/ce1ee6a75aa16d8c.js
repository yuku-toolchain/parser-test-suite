var executed = false;
class C {
  constructor() {
    eval("executed = true; this.#x;");
  }
}