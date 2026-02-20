let x = 'outside';
var probeDefault, probeDefaultBeforeCase, probeCase;
switch (null) {
  default:
    let x = 'inside';
    probeDefault = function () {
      return x;
    };
}
switch (null) {
  default:
    let x = 'inside';
    probeDefaultBeforeCase = function () {
      return x;
    };
  case 0:
    probeCase = function () {
      return x;
    };
}