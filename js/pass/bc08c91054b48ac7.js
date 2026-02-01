var stringSet;
class C {
  static get #_() {
    return 'get string';
  }
  static set #_(param) {
    stringSet = param;
  }
  static getPrivateReference() {
    return this.#_;
  }
  static setPrivateReference(value) {
    this.#_ = value;
  }
}
C.setPrivateReference('set string');