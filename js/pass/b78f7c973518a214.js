var initCount = 0;
var callCount = 0;
class C {
  #method([[] = (function () {
    initCount += 1;
  })()] = [[23]]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method();