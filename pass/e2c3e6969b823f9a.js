var stringSet;
var C = class {
  static get .1() {
    return 'get string';
  }
  static set .1(param) {
    stringSet = param;
  }
};
C['0.1'] = 'set string';