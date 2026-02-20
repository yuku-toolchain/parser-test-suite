var __executed = (/a(bc)d(ef)g/).exec("abcdefg");
var __expected = ["abcdefg", "bc", "ef"];
__expected.index = 0;
__expected.input = "abcdefg";
for (var index = 0; index < __expected.length; index++) {}