class C {
  #setterCalledWith;
  get #field() {
    return 0b0110;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field <<= 4;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();