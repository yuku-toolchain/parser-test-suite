var __executed = (/c[\b]{3}d/).exec("abc\b\b\bdef");
var __expected = ["c\b\b\bd"];
__expected.index = 2;
__expected.input = "abc\b\b\bdef";
for (var index = 0; index < __expected.length; index++) {}