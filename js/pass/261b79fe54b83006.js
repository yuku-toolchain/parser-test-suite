var __executed = (/a[^]/).exec("   a\t\n");
var __expected = ["a\t"];
__expected.index = 3;
__expected.input = "   a\t\n";
for (var index = 0; index < __expected.length; index++) {}