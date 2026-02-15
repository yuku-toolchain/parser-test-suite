var stringSet;
class C {
  static get 'default'() {
    return 'get string';
  }
  static set 'default'(param) {
    stringSet = param;
  }
}
C['default'] = 'set string';