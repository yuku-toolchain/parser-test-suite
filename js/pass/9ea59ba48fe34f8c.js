var values = [1, 2, 3, 4, 5];
var iterCount = 0;
for (const [...x] = values; iterCount < 1; ) {
  iterCount += 1;
}