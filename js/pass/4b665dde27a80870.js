var values = [1, 2, 3, 4, 5];
var iterCount = 0;
for (var [...x] of [values]) {
  iterCount += 1;
}