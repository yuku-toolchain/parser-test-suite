var stringSet;
var C = class {
  get #℘() {
    return 'get string';
  }
  set #℘(param) {
    stringSet = param;
  }
  getPrivateReference() {
    return this.#℘;
  }
  setPrivateReference(value) {
    this.#℘ = value;
  }
};
var inst = new C();
inst.setPrivateReference('set string');