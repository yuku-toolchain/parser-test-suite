class C {
  #field = null;
  compoundAssignment() {
    return this.#field ??= 1;
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();