var callCount = 0;
class C {
  *#method([cover = function () {}, xCover = (0, function () {})] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method().next();