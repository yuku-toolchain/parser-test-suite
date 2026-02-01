var x = 'outside';
var probe1, probe2, probeBody;
(function (_ = (eval('var x = "inside";'), probe1 = function () {
  return x;
}), __ = probe2 = function () {
  return x;
}) {
  probeBody = function () {
    return x;
  };
})();