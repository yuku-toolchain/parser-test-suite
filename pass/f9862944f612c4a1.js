var stringSet;
var C = class {
  static get #test262() {
    return 'get string';
  }
  static set #test262(param) {
    stringSet = param;
  }
  static getPrivateReference() {
    return this.#test262;
  }
  static setPrivateReference(value) {
    this.#test262 = value;
  }
};
C.setPrivateReference('set string');