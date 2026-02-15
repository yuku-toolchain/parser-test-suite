var g = 'outside';
var probeBefore = function () {
  return g;
};
var setBefore = function () {
  g = null;
};
var probeParams, setParams, probeBody, setBody;
var func = function* g(_ = (probeParams = function () {
  return g;
}, setParams = function () {
  g = null;
})) {
  probeBody = function () {
    return g;
  };
  setBody = function () {
    g = null;
  };
};
func().next();
setBefore();
setParams();
setBody();