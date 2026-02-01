class C {
  #m = 44;
  ["#m"] = this.#m / 11;
  checkPrivateField() {
    return 0;
  }
}
let c = new C();