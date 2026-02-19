var callCount = 0;
class C {
  #method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method();