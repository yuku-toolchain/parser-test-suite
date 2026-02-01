var __executed = (/(z)((a+)?(b+)?(c))*/).exec((function () {
  return "zaacbbbcac";
})());
var __expected = ["zaacbbbcac", "z", "ac", "a", undefined, "c"];
__expected.index = 0;
__expected.input = "zaacbbbcac";
for (var index = 0; index < __expected.length; index++) {}