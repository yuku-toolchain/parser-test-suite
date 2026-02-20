class C {
  #field = 10;
  compoundAssignment() {
    return this.#field **= 3;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();