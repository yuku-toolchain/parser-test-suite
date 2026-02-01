class C {
  #setterCalledWith;
  get #field() {
    return null;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field ??= 1;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();