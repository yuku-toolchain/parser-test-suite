class C {
  #field = 3;
  compoundAssignment() {
    return this.#field %= 2;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();