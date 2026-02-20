var value = 1;
var floatValues = new Array(1076);
for (var power = 0; power <= 1075; power++) {
  floatValues[power] = value;
  value = value * 0.5;
}
if (floatValues[1075] !== 0) {}
if (floatValues[1074] !== 4.9406564584124654417656879286822e-324) {}
for (var index = 1074; index > 0; index--) {
  if (floatValues[index] === 0) {}
  if (floatValues[index - 1] !== floatValues[index] * 2) {}
}
if (!(1.797693134862315708145274237317e+308 < Infinity)) {}
if (!(1.797693134862315808e+308 === +Infinity)) {}