class C {
  #field = 0b0110;
  compoundAssignment() {
    return this.#field <<= 4;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();