var callCount = 0;
class C {
  #method([_, x] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method();