var iterCount = 0;
for (const [gen = function* () {}, xGen = function* x() {}] = []; iterCount < 1; ) {
  iterCount += 1;
}