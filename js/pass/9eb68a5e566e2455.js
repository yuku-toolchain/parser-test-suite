var __executed = (/[^\[\b\]]+/).exec("abc\bdef");
var __expected = ["abc"];
__expected.index = 0;
__expected.input = "abc\bdef";
for (var index = 0; index < __expected.length; index++) {}