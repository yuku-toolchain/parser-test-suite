var __executed = (/((a)|(ab))((c)|(bc))/).exec("abc");
var __expected = ["abc", "a", "a", undefined, "bc", undefined, "bc"];
__expected.index = 0;
__expected.input = "abc";
for (var index = 0; index < __expected.length; index++) {}