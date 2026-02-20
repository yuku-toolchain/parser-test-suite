var __executed = (/.[\b]./).exec("abc\bdef");
var __expected = ["c\bd"];
__expected.index = 2;
__expected.input = "abc\bdef";
for (var index = 0; index < __expected.length; index++) {}