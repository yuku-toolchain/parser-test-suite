var __executed = (/([Jj]ava([Ss]cript)?)\sis\s(fun\w*)/).exec("Learning javaScript is funny, really");
var __expected = ["javaScript is funny", "javaScript", "Script", "funny"];
__expected.index = 9;
__expected.input = "Learning javaScript is funny, really";
for (var index = 0; index < __expected.length; index++) {}