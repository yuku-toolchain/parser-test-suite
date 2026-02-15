var iterCount = 0;
for (var {gen = function* () {}, xGen = function* x() {}} of [{}]) {
  iterCount += 1;
}