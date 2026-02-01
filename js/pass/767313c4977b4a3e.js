var __executed = (/([xu]\d{2}([A-H]{2})?)\1/).exec("x09x12x01x05u00FFu00FFx04x04x23");
var __expected = ["u00FFu00FF", "u00FF", "FF"];
__expected.index = 12;
__expected.input = "x09x12x01x05u00FFu00FFx04x04x23";
for (var index = 0; index < __expected.length; index++) {}