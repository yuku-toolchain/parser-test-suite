var __string = "ABC def ghi";
var __executed = (/[a-z]+/ig).exec(__string);
var __expected = ["ABC"];
__expected.index = 0;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}