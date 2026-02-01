var C = class {
  set #m(v) {
    this._v = v;
  }
  checkPrivateSetter() {
    this.#m = "Test262";
    return 0;
  }
};
let c = new C();