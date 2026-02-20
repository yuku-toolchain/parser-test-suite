var values = [1, 2, 3];
var iterCount = 0;
for (var [...x] of [values]) {
  iterCount += 1;
}