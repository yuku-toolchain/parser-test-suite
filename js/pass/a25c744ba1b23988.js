var stringSet;
class C {
  static get #ZW_‍_J() {
    return 'get string';
  }
  static set #ZW_‍_J(param) {
    stringSet = param;
  }
  static getPrivateReference() {
    return this.#ZW_‍_J;
  }
  static setPrivateReference(value) {
    this.#ZW_‍_J = value;
  }
}
C.setPrivateReference('set string');