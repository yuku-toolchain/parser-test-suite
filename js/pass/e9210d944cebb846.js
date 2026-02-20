var __string = "this is a test";
var __executed = (/.*a.*/).exec(__string);
var __expected = ["this is a test"];
__expected.index = 0;
__expected.input = __string;
for (var index = 0; index < __expected.length; index++) {}