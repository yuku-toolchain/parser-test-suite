var stringSet;
class C {
  get 'def\u{61}ult'() {
    return 'get string';
  }
  set 'def\u{61}ult'(param) {
    stringSet = param;
  }
}
C.prototype['default'] = 'set string';