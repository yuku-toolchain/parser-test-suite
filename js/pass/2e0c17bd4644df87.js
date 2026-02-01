var stringSet;
class C {
  get #o() {
    return 'get string';
  }
  set #o(param) {
    stringSet = param;
  }
  getPrivateReference() {
    return this.#o;
  }
  setPrivateReference(value) {
    this.#o = value;
  }
}
var inst = new C();
inst.setPrivateReference('set string');