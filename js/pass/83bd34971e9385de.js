function doNotCall() {}
class C {
  #privateMethod() {}
  compoundAssignment() {
    return this.#privateMethod ||= doNotCall();
  }
  getPrivateMethodFunctionObject() {
    return this.#privateMethod;
  }
}
const o = new C();