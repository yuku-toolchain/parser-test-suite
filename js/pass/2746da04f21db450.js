var __re = /(?:ab|cd)\d?/g;
var __executed = __re.exec("aacd2233ab12nm444ab42");
var __expected = ["cd2"];
__expected.index = 2;
__expected.input = "aacd2233ab12nm444ab42";
for (var index = 0; index < __expected.length; index++) {}
var __obj = {
  toString: function () {
    return 12;
  },
  valueOf: function () {
    return {};
  }
};
__re.lastIndex = __obj;
__executed = __re.exec("aacd2233ab12nm444ab42");
__expected = ["ab4"];
__expected.index = 17;
__expected.input = "aacd2233ab12nm444ab42";
for (var index = 0; index < __expected.length; index++) {}