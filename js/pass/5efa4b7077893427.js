function doNotCall() {}
class C {
  #field = 1;
  compoundAssignment() {
    return this.#field ??= doNotCall();
  }
  fieldValue() {
    return this.#field;
  }
}
const o = new C();