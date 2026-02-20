var __executed = (/a[^b-z]\s+/).exec("ab an az aY n");
var __expected = ["aY "];
__expected.index = 9;
__expected.input = "ab an az aY n";
for (var index = 0; index < __expected.length; index++) {}