var probeBefore = function () {
  return C;
};
var probeHeritage, setHeritage;
var C = 'outside';
var cls = class C extends (probeHeritage = function () {
  return C;
}, setHeritage = function () {
  C = null;
}) {
  method() {
    return C;
  }
};