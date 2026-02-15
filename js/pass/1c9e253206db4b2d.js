var stringSet;
class C {
  get #ZW_‍_J() {
    return 'get string';
  }
  set #ZW_‍_J(param) {
    stringSet = param;
  }
  getPrivateReference() {
    return this.#ZW_‍_J;
  }
  setPrivateReference(value) {
    this.#ZW_‍_J = value;
  }
}
var inst = new C();
inst.setPrivateReference('set string');