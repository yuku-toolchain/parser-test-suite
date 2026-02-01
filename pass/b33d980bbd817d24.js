function doNotCall() {}
class C {
  setterWasCalled = false;
  get #field() {
    return false;
  }
  set #field(value) {
    this.setterWasCalled = true;
  }
  compoundAssignment() {
    return this.#field &&= doNotCall();
  }
}
const o = new C();