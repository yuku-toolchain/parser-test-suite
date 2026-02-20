var stringSet;
class C {
  static get 0b10() {
    return 'get string';
  }
  static set 0b10(param) {
    stringSet = param;
  }
}
C['2'] = 'set string';