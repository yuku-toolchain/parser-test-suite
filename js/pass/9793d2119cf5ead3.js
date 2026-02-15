var iterCount = 0;
for (let x in (null, {
  key: 0
})) {
  iterCount += 1;
}