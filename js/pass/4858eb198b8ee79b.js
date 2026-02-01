var __executed = (/\b(\w+) \1\b/).exec("do you listen the the band");
var __expected = ["the the", "the"];
__expected.index = 14;
__expected.input = "do you listen the the band";
for (var index = 0; index < __expected.length; index++) {}