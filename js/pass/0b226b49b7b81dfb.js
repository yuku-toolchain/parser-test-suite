var arr = [2, 3];
var callCount = 0;
class C {
  *#method() {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method(42, ...[1], ...arr).next();