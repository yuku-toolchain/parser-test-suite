var x = 1;
var probeBefore = function () {
  return x;
};
var probeTry, probeParam, probeBlock;
try {
  var x = 2;
  probeTry = function () {
    return x;
  };
  throw [];
} catch ([_ = (eval('var x = 3;'), probeParam = function () {
  return x;
})]) {
  var x = 4;
  probeBlock = function () {
    return x;
  };
}