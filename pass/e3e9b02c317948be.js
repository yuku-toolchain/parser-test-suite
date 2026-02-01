var stringSet;
var C = class {
  static get 'character\tescape'() {
    return 'get string';
  }
  static set 'character\tescape'(param) {
    stringSet = param;
  }
};
C['character	escape'] = 'set string';