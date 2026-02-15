var stringSet;
class C {
  get 'character\tescape'() {
    return 'get string';
  }
  set 'character\tescape'(param) {
    stringSet = param;
  }
}
C.prototype['character	escape'] = 'set string';