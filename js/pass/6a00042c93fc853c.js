var stringSet;
class C {
  static get 'def\u0061ult'() {
    return 'get string';
  }
  static set 'def\u0061ult'(param) {
    stringSet = param;
  }
}
C['default'] = 'set string';