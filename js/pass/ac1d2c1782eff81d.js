var __executed = (/[\d][\n][^\d]/).exec("line1\nline2");
var __expected = ["1\nl"];
__expected.index = 4;
__expected.input = "line1\nline2";
for (var index = 0; index < __expected.length; index++) {}