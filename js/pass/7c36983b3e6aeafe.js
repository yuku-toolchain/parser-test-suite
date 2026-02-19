class C {
  #field = false;
  compoundAssignment() {
    return this.#field ||= true;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();