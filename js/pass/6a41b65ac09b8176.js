var iterCount = 0;
for (let {gen = function* () {}, xGen = function* x() {}} of [{}]) {
  iterCount += 1;
}