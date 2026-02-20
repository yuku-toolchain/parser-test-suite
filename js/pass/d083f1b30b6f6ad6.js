function doNotCall() {}
class C {
  setterWasCalled = false;
  get #field() {
    return 1;
  }
  set #field(value) {
    this.setterWasCalled = true;
  }
  compoundAssignment() {
    return this.#field ??= doNotCall();
  }
}
const o = new C();