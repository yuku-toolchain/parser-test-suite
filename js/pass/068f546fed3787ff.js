var iterCount = 0;
var x = {};
for (x.y in {
  attr: null
}) {
  iterCount += 1;
}