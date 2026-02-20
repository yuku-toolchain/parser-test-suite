var result;
var g1 = function* () {
  return;
};
var g2 = function* () {
  return 1;
};
result = g1().next();
result = g2().next();