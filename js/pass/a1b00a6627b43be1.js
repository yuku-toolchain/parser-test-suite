var __executed = (/[*&$]{3}/).exec("123*&$abc");
var __expected = ["*&$"];
__expected.index = 3;
__expected.input = "123*&$abc";
for (var index = 0; index < __expected.length; index++) {}