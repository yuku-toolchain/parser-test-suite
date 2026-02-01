class C {
  #field = true;
  compoundAssignment() {
    return this.#field &&= false;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();