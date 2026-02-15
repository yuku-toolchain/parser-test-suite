class C {
  #setterCalledWith;
  get #field() {
    return 3;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field %= 2;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();