function doNotCall() {}
class C {
  get #field() {
    return 1;
  }
  compoundAssignment() {
    return this.#field ??= doNotCall();
  }
}
const o = new C();