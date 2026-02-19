var probeBefore = function () {
  return C;
};
var C = 'outside';
var cls = class C {
  probe() {
    return C;
  }
  modify() {
    C = null;
  }
};