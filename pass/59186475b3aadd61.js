var iterCount = 0;
for (const {gen = function* () {}, xGen = function* x() {}} of [{}]) {
  iterCount += 1;
}