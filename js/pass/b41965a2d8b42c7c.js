var __executed = (/a[a-z]{2,4}?/).exec({
  toString: function () {
    return "abcdefghi";
  }
});
var __expected = ["abc"];
__expected.index = 0;
__expected.input = "abcdefghi";
for (var index = 0; index < __expected.length; index++) {}