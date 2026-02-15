var stringSet;
var C = class {
  static get 'hex\x45scape'() {
    return 'get string';
  }
  static set 'hex\x45scape'(param) {
    stringSet = param;
  }
};
C['hexEscape'] = 'set string';