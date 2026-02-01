var stringSet;
var C = class {
  get #ZW_‌_NJ() {
    return 'get string';
  }
  set #ZW_‌_NJ(param) {
    stringSet = param;
  }
  getPrivateReference() {
    return this.#ZW_‌_NJ;
  }
  setPrivateReference(value) {
    this.#ZW_‌_NJ = value;
  }
};
var inst = new C();
inst.setPrivateReference('set string');