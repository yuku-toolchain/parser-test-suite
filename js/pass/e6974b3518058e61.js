var initCount = 0;
var callCount = 0;
class C {
  static *#method([[] = (function () {
    initCount += 1;
  })()] = [[23]]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method().next();