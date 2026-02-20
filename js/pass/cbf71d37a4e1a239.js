class C {
  #setterCalledWith;
  get #field() {
    return 10;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field **= 3;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();