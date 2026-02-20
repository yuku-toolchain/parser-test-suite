function doNotCall() {}
class C {
  get #field() {
    return true;
  }
  compoundAssignment() {
    return this.#field ||= doNotCall();
  }
}
const o = new C();