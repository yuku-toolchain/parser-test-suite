var iterCount = 0;
for (let [gen = function* () {}, xGen = function* x() {}] = []; iterCount < 1; ) {
  iterCount += 1;
}