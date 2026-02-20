var base = -0;
var exponent = new Array();
exponent[2] = -1;
exponent[1] = -111;
exponent[0] = -111111;
var exponentnum = 3;
for (var i = 0; i < exponentnum; i++) {
  if (Math.pow(base, exponent[i]) !== -Infinity) {}
}