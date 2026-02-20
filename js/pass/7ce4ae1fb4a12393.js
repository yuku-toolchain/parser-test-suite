var stringSet;
var obj = {
  get ['unicod\u{000065}Escape']() {
    return 'get string';
  },
  set ['unicod\u{000065}Escape'](param) {
    stringSet = param;
  }
};
obj['unicodeEscape'] = 'set string';