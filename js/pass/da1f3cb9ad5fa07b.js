function doNotCall() {}
class C {
  get #field() {
    return false;
  }
  compoundAssignment() {
    return this.#field &&= doNotCall();
  }
}
const o = new C();