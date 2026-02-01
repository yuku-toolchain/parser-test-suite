var __re = /((1)|(12))((3)|(23))/;
var __executed = __re.exec(new String("123"));
var __expected = ["123", "1", "1", undefined, "23", undefined, "23"];
__expected.index = 0;
__expected.input = "123";
for (var index = 0; index < __expected.length; index++) {}