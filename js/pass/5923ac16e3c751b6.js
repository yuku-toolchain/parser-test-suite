var xGen, gen;
var counter = 0;
for ({x: xGen = function* x() {}, x: gen = function* () {}} of [{}]) {
  counter += 1;
}