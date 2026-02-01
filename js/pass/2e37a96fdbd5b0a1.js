class C {
  #setterCalledWith;
  get #field() {
    return false;
  }
  set #field(value) {
    this.#setterCalledWith = value;
  }
  compoundAssignment() {
    return this.#field ||= true;
  }
  setterCalledWithValue() {
    return this.#setterCalledWith;
  }
}
const o = new C();