var __executed = (/^\d+/m).exec("abc\n123xyz");
var __expected = ["123"];
__expected.index = 4;
__expected.input = "abc\n123xyz";
for (var index = 0; index < __expected.length; index++) {}