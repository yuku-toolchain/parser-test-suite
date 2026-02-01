var callCount = 0;
class C {
  #method([...x]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method([1]);