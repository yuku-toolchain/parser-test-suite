var iterCount = 0;
var x;
for (x in (null, {
  key: 0
})) {
  iterCount += 1;
}