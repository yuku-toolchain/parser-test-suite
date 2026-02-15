var values = [2, 1, 3];
var iterCount = 0;
for (let [[...x] = values] of [[]]) {
  iterCount += 1;
}