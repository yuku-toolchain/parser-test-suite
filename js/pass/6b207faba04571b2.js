var stringSet;
var C = class {
  static get 'singleQuote'() {
    return 'get string';
  }
  static set 'singleQuote'(param) {
    stringSet = param;
  }
};
C['singleQuote'] = 'set string';