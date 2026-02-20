function doNotCall() {}
class C {
  setterWasCalled = false;
  get #field() {
    return true;
  }
  set #field(value) {
    this.setterWasCalled = true;
  }
  compoundAssignment() {
    return this.#field ||= doNotCall();
  }
}
const o = new C();