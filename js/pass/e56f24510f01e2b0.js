class C {
  #privateMethod() {}
  compoundAssignment() {
    return this.#privateMethod ^= 1;
  }
}
const o = new C();