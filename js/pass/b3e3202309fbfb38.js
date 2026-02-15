var __executed = (/[a-z][^1-9][a-z]/).exec("a1b  b2c  c3d  def  f4g");
var __expected = ["def"];
__expected.index = 15;
__expected.input = "a1b  b2c  c3d  def  f4g";
for (var index = 0; index < __expected.length; index++) {}