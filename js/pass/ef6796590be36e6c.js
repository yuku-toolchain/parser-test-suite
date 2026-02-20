var stringSet;
var C = class {
  static get #o() {
    return 'get string';
  }
  static set #o(param) {
    stringSet = param;
  }
  static getPrivateReference() {
    return this.#o;
  }
  static setPrivateReference(value) {
    this.#o = value;
  }
};
C.setPrivateReference('set string');