var f = 'outside';
var probeBefore = function () {
  return f;
};
var setBefore = function () {
  f = null;
};
var probeParams, setParams, probeBody, setBody;
var func = function f(_ = (probeParams = function () {
  return f;
}, setParams = function () {
  f = null;
})) {
  probeBody = function () {
    return f;
  };
  setBody = function () {
    f = null;
  };
};
func();
setBefore();