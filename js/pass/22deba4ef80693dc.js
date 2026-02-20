var thrower = {
  toString: function () {}
};
var counter = {
  toString: function () {
    callCount += 1;
  }
};
var callCount = 0;