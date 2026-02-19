var __executed = (/([xu]\d{2}([A-H]{2})?)\1/).exec("x09x12x01x01u00FFu00FFx04x04x23");
var __expected = ["x01x01", "x01", undefined];
__expected.index = 6;
__expected.input = "x09x12x01x01u00FFu00FFx04x04x23";
for (var index = 0; index < __expected.length; index++) {}