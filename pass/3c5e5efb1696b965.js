var __executed = (/(.*?)a(?!(a+)b\2c)\2(.*)/).exec("baaabaac");
var __expected = ["baaabaac", "ba", undefined, "abaac"];
__expected.index = 0;
__expected.input = "baaabaac";
for (var index = 0; index < __expected.length; index++) {}