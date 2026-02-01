var __executed = (/a(..(..)..)/).exec("abcdefgh");
var __expected = ["abcdefg", "bcdefg", "de"];
__expected.index = 0;
__expected.input = "abcdefgh";
for (var index = 0; index < __expected.length; index++) {}