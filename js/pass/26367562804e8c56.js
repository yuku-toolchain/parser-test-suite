var stringSet;
var C = class {
  get 0.0000001() {
    return 'get string';
  }
  set 0.0000001(param) {
    stringSet = param;
  }
};
C.prototype['1e-7'] = 'set string';