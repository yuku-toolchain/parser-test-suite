var stringSet;
var C = class {
  static get 'default'() {
    return 'get string';
  }
  static set 'default'(param) {
    stringSet = param;
  }
};
C['default'] = 'set string';