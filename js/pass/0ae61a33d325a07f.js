var stringSet;
var C = class {
  get #test262() {
    return 'get string';
  }
  set #test262(param) {
    stringSet = param;
  }
  getPrivateReference() {
    return this.#test262;
  }
  setPrivateReference(value) {
    this.#test262 = value;
  }
};
var inst = new C();
inst.setPrivateReference('set string');