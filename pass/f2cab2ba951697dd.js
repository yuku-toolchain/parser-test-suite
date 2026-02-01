var values = [1, 2, 3];
var iterCount = 0;
for (const [...[...x]] of [values]) {
  iterCount += 1;
}