class C {
  #setterCalledWith;
  get #field() {
    return true;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field &&= false;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();