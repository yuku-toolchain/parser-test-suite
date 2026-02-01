class C {
  #field = 0b1100;
  compoundAssignment() {
    return this.#field >>= 2;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();