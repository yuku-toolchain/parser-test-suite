var stringSet;
class C {
  static get 0() {
    return 'get string';
  }
  static set 0(param) {
    stringSet = param;
  }
}
C['0'] = 'set string';