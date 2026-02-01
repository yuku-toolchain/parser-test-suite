var setBefore = function () {
  C = null;
};
var probeBefore = function () {
  return C;
};
var probeHeritage, setHeritage;
class C extends (probeHeritage = function () {
  return C;
}, setHeritage = function () {
  C = null;
}) {
  method() {
    return C;
  }
}
var cls = probeBefore();
setBefore();