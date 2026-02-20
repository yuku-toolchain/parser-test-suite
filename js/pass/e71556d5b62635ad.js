var iterCount = 0;
for (let {x: y = 33} of [{}]) {
  iterCount += 1;
}