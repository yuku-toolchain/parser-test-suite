var iterCount = 0;
for (const {x: y = 33} of [{}]) {
  iterCount += 1;
}