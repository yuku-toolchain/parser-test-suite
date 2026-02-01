var stringSet;
var obj = {
  get ['character\tescape']() {
    return 'get string';
  },
  set ['character\tescape'](param) {
    stringSet = param;
  }
};
obj['character	escape'] = 'set string';