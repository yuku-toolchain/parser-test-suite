var __executed = (/(a(b(c)))(d(e(f)))\2\5/).exec("xabcdefbcefg");
var __expected = ["abcdefbcef", "abc", "bc", "c", "def", "ef", "f"];
__expected.index = 1;
__expected.input = "xabcdefbcefg";
for (var index = 0; index < __expected.length; index++) {}