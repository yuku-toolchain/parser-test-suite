var __re = /(?:ab|cd)\d?/g;
var __executed = __re.exec("aac1dz2233a1bz12nm444ab42");
var __expected = ["ab4"];
__expected.index = 21;
__expected.input = "aac1dz2233a1bz12nm444ab42";
for (var index = 0; index < __expected.length; index++) {}
__executed = __re.exec("aacd22");