var values = [1, 2, 3];
var iterCount = 0;
for (let [...[...x]] of [values]) {
  iterCount += 1;
}