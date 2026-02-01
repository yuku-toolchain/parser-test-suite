var __executed = (/(.{3})(.{4})/).exec("abcdefgh");
var __expected = ["abcdefg", "abc", "defg"];
__expected.index = 0;
__expected.input = "abcdefgh";
for (var index = 0; index < __expected.length; index++) {}