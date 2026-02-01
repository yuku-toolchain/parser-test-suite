class C {
  #field = 0b0101;
  compoundAssignment() {
    return this.#field &= 0b1010;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();