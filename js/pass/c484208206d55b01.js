var __executed = (/\d{3}|[a-z]{4}/).exec("2, 12 and 234 AND of course repeat 12");
var __expected = ["234"];
__expected.index = 10;
__expected.input = "2, 12 and 234 AND of course repeat 12";
for (var index = 0; index < __expected.length; index++) {}