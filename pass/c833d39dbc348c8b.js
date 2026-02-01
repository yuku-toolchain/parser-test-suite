var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var callCount = 0;
class C {
  static #method({}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method(obj);