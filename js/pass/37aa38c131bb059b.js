class C {
  #setterCalledWith;
  get #field() {
    return 0b0101;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field &= 0b1010;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();