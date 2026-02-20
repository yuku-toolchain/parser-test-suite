var __string = "abcde";
var __executed = (/ab.de/).exec(__string);
var __expected = ["abcde"];
__expected.index = 0;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}