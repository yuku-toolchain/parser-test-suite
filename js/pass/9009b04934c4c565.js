var stringSet;
class C {
  static get 'hex\x45scape'() {
    return 'get string';
  }
  static set 'hex\x45scape'(param) {
    stringSet = param;
  }
}
C['hexEscape'] = 'set string';