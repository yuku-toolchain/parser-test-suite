var valueOfCalls = 0;
var value = {
  valueOf: function () {
    ++valueOfCalls;
    return 2.3;
  }
};