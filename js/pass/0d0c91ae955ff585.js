class C {
  #field = 0x1111;
  compoundAssignment() {
    return this.#field ^= 0x1010;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();