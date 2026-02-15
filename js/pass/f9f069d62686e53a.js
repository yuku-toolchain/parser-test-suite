var __string = "abc";
var __executed = (/^([a-z]+)*[a-z]$/).exec(__string);
var __expected = ['abc', "ab"];
__expected.index = 0;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}