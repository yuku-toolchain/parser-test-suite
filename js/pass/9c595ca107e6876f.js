var x = null;
let length;
var counter = 0;
for ([...{0: x, length}] of [[]]) {
  counter += 1;
}