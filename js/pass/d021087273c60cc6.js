var iterCount = 0;
for (var {fn = function () {}, xFn = function x() {}} of [{}]) {
  iterCount += 1;
}