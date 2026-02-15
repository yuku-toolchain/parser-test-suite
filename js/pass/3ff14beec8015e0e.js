var stringSet;
var C = class {
  static get 0o10() {
    return 'get string';
  }
  static set 0o10(param) {
    stringSet = param;
  }
};
C['8'] = 'set string';