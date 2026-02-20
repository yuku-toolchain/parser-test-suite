var __executed = (/[^a-z]{4}/).exec("abc#$%def%&*@ghi");
var __expected = ["%&*@"];
__expected.index = 9;
__expected.input = "abc#$%def%&*@ghi";
for (var index = 0; index < __expected.length; index++) {}