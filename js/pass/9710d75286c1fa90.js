var __executed = (/(\d{3})(\d{3})\1\2/).exec("123456123456");
var __expected = ["123456123456", "123", "456"];
__expected.index = 0;
__expected.input = "123456123456";
for (var index = 0; index < __expected.length; index++) {}