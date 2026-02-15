var stringSet;
class C {
  static get 'def\u{61}ult'() {
    return 'get string';
  }
  static set 'def\u{61}ult'(param) {
    stringSet = param;
  }
}
C['default'] = 'set string';