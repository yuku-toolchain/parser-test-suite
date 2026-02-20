var iterCount = 0;
for (const [fn = function () {}, xFn = function x() {}] of [[]]) {
  iterCount += 1;
}