class C {
  #field = 2;
  compoundAssignment() {
    return this.#field *= 3;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();