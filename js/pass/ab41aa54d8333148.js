var toStringCalls = 0;
var throwyToString = {
  toString: function () {
    toStringCalls += 1;
  }
};