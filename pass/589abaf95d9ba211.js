var values = [2, 1, 3];
var callCount = 0;
class C {
  #method([[...x] = values] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method();