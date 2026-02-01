var __string = "line 1\nline 2";
var __executed = (/.+/).exec(__string);
var __expected = ["line 1"];
__expected.index = 0;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}