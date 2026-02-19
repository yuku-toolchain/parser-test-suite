function doNotCall() {}
class C {
  #field = true;
  compoundAssignment() {
    return this.#field ||= doNotCall();
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();