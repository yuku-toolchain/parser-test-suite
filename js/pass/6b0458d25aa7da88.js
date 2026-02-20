var stringSet;
class C {
  get 'unicod\u{000065}Escape'() {
    return 'get string';
  }
  set 'unicod\u{000065}Escape'(param) {
    stringSet = param;
  }
}
C.prototype['unicodeEscape'] = 'set string';