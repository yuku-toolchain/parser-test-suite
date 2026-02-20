class C {
  set #m(v) {
    this._v = v;
  }
  ["#m"] = 0;
  checkPrivateSetter() {
    this.#m = "Test262";
    return 0;
  }
}
let c = new C();