function doNotCall() {}
class C {
  #field = false;
  compoundAssignment() {
    return this.#field &&= doNotCall();
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();