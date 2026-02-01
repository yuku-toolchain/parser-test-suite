var iterCount = 0;
for (var x in (null, {
  key: 0
})) {
  iterCount += 1;
}