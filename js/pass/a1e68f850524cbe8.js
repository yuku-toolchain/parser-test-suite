var F = {};
var callCount = 0;
var thisValue, args;
F[Symbol.hasInstance] = function () {
  thisValue = this;
  args = arguments;
  callCount += 1;
};
0 instanceof F;