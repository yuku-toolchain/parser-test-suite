var stringSet;
class C {
  static get #$() {
    return 'get string';
  }
  static set #$(param) {
    stringSet = param;
  }
  static getPrivateReference() {
    return this.#$;
  }
  static setPrivateReference(value) {
    this.#$ = value;
  }
}
C.setPrivateReference('set string');