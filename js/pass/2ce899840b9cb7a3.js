var __executed = (/(?=(a+))a*b\1/).exec("baaabac");
var __expected = ["aba", "a"];
__expected.index = 3;
__expected.input = "baaabac";
for (var index = 0; index < __expected.length; index++) {}