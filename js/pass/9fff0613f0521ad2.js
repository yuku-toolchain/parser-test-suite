var v2, vNull, vHole, vUndefined, vOob;
var counter = 0;
for ([v2 = 10, vNull = 11, vHole = 12, vUndefined = 13, vOob = 14] of [[2, null, undefined]]) {
  counter += 1;
}