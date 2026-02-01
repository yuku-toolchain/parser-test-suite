var stringSet;
var C = class {
  static get 0.0000001() {
    return 'get string';
  }
  static set 0.0000001(param) {
    stringSet = param;
  }
};
C['1e-7'] = 'set string';