var x = 'outside';
var probeParams, probeBody;
({
  set a(_ = probeParams = function () {
    return x;
  }) {
    var x = 'inside';
    probeBody = function () {
      return x;
    };
  }
}).a = undefined;