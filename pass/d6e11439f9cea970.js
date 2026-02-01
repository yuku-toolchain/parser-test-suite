var direct = {
  prop: {}
};
var directReplacer = function (k, v) {
  return direct;
};
var indirect = {
  p1: {
    p2: {}
  }
};
var indirectReplacer = function (key, value) {
  if (key === 'p2') {
    return indirect;
  }
  return value;
};