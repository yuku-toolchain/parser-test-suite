var stringSet;
var C = class {
  get .1() {
    return 'get string';
  }
  set .1(param) {
    stringSet = param;
  }
};
C.prototype['0.1'] = 'set string';