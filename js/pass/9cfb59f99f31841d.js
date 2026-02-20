class C {
  get #field() {
    return false;
  }
  compoundAssignment() {
    return this.#field ||= true;
  }
}
const o = new C();