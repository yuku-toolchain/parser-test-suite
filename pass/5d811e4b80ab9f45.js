var xGen, gen;
var counter = 0;
for ({xGen = function* x() {}, gen = function* () {}} of [{}]) {
  counter += 1;
}