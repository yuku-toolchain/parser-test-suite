class C {
  get #field() {
    return true;
  }
  compoundAssignment() {
    return this.#field &&= false;
  }
}
const o = new C();