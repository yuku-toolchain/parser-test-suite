var iterCount = 0;
for (let {fn = function () {}, xFn = function x() {}} of [{}]) {
  iterCount += 1;
}