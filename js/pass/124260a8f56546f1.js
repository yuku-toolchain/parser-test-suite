var __executed = (/[\d][\12-\14]{1,}[^\d]/).exec("line1\n\n\n\n\nline2");
var __expected = ["1\n\n\n\n\nl"];
__expected.index = 4;
__expected.input = "line1\n\n\n\n\nline2";
for (var index = 0; index < __expected.length; index++) {}