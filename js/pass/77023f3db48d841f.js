var __executed = (/a(.?)b\1c\1d\1/).exec("abcd");
var __expected = ["abcd", ""];
__expected.index = 0;
__expected.input = "abcd";
for (var index = 0; index < __expected.length; index++) {}