var __executed = (/(a(b(c)))(d(e(f)))/).exec("xabcdefg");
var __expected = ["abcdef", "abc", "bc", "c", "def", "ef", "f"];
__expected.index = 1;
__expected.input = "xabcdefg";
for (var index = 0; index < __expected.length; index++) {}