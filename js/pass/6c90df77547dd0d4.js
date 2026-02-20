var __executed = (/(aa|aabaac|ba|b|c)*/).exec({
  toString: function () {
    return {};
  },
  valueOf: function () {
    return "aabaac";
  }
});
var __expected = ["aaba", "ba"];
__expected.index = 0;
__expected.input = "aabaac";
for (var index = 0; index < __expected.length; index++) {}