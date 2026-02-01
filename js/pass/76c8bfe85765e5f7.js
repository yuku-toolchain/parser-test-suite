var stringSet;
var C = class {
  get 'default'() {
    return 'get string';
  }
  set 'default'(param) {
    stringSet = param;
  }
};
C.prototype['default'] = 'set string';