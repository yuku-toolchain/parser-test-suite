var stringSet;
class C {
  static get 0x10() {
    return 'get string';
  }
  static set 0x10(param) {
    stringSet = param;
  }
}
C['16'] = 'set string';