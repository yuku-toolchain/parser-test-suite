class C {
  #setterCalledWith;
  get #field() {
    return 0x1111;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field ^= 0x1010;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();