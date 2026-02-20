class C {
  get #field() {
    return null;
  }
  compoundAssignment() {
    return this.#field ??= 1;
  }
}
const o = new C();