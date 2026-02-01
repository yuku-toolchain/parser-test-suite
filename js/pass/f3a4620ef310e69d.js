var stringSet;
class C {
  get 'hex\x45scape'() {
    return 'get string';
  }
  set 'hex\x45scape'(param) {
    stringSet = param;
  }
}
C.prototype['hexEscape'] = 'set string';