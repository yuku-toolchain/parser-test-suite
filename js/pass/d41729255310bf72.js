var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
class C {
  #method([[...x] = (function () {
    initCount += 1;
  })()] = [values]) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method();