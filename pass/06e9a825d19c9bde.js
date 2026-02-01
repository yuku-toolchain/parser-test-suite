class C {
  get #field() {
    return 1;
  }
  compoundAssignment() {
    return this.#field *= 1;
  }
}
const o = new C();