var x = 'outside';
var probeParam, probeBody;
((...[_ = (eval('var x = "inside";'), probeParam = function () {
  return x;
})]) => {
  probeBody = function () {
    return x;
  };
})();