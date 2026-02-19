var stringSet;
var C = class {
  get #_() {
    return 'get string';
  }
  set #_(param) {
    stringSet = param;
  }
  getPrivateReference() {
    return this.#_;
  }
  setPrivateReference(value) {
    this.#_ = value;
  }
};
var inst = new C();
inst.setPrivateReference('set string');