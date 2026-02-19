var callCount = 0;
class C {
  *#method([arrow = () => {}] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method().next();