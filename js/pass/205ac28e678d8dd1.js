var __string = "ABC def ghi";
var __executed = (/[a-z]+/).exec(__string);
var __expected = ["def"];
__expected.index = 4;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}