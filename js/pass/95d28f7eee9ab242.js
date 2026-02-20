var probeBefore = function () {
  return C;
};
var setBefore = function () {
  C = null;
};
class C {
  probe() {
    return C;
  }
  modify() {
    C = null;
  }
}
var cls = probeBefore();
setBefore();