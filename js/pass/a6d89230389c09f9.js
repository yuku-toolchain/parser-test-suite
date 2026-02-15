var stringSet;
class C {
  static get ''() {
    return 'get string';
  }
  static set ''(param) {
    stringSet = param;
  }
}
C[''] = 'set string';