var stringSet;
class C {
  static get #ZW_‌_NJ() {
    return 'get string';
  }
  static set #ZW_‌_NJ(param) {
    stringSet = param;
  }
  static getPrivateReference() {
    return this.#ZW_‌_NJ;
  }
  static setPrivateReference(value) {
    this.#ZW_‌_NJ = value;
  }
}
C.setPrivateReference('set string');