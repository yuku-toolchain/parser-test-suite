var __executed = (/ab?c?d?x?y?z/).exec("123az789");
var __expected = ["az"];
__expected.index = 3;
__expected.input = "123az789";
for (var index = 0; index < __expected.length; index++) {}