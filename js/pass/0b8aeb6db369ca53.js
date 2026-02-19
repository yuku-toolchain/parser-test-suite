var iter = (function* () {})();
iter.next();
var callCount = 0;
class C {
  *#method([] = iter) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method().next();