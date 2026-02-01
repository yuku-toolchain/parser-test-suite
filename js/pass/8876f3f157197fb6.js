class C {
  #field = 1;
  compoundAssignment() {
    return this.#field += 2;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();