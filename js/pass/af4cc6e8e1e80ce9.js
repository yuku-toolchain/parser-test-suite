var stringSet;
var obj = {
  get ['hex\x45scape']() {
    return 'get string';
  },
  set ['hex\x45scape'](param) {
    stringSet = param;
  }
};
obj['hexEscape'] = 'set string';