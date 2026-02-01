var __executed = (/(123){1,}x\1/).exec("123123x123");
var __expected = ["123123x123", "123"];
__expected.index = 0;
__expected.input = "123123x123";
for (var index = 0; index < __expected.length; index++) {}