var __executed = (/(Rob)|(Bob)|(Robert)|(Bobby)/).exec("Hi Bob");
var __expected = ["Bob", undefined, "Bob", undefined, undefined];
__expected.index = 3;
__expected.input = "Hi Bob";
for (var index = 0; index < __expected.length; index++) {}