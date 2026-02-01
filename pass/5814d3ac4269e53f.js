var stringSet;
var C = class {
  static get 'unicod\u{000065}Escape'() {
    return 'get string';
  }
  static set 'unicod\u{000065}Escape'(param) {
    stringSet = param;
  }
};
C['unicodeEscape'] = 'set string';