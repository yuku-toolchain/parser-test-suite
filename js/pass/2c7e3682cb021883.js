var __executed = (/(aa).+\1/).exec("aabcdaabcd");
var __expected = ["aabcdaa", "aa"];
__expected.index = 0;
__expected.input = "aabcdaabcd";
for (var index = 0; index < __expected.length; index++) {}