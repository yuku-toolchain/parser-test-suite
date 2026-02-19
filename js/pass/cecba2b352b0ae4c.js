var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var callCount = 0;
var C = class {
  *#method([...[]] = g()) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next();