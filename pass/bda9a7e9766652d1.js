var array = [0];
var iterationCount = 0;
var first = 0;
var second = 1;
for (var x of array) {
  first = second;
  second = null;
  if (first !== null) {
    array.push(1);
  }
  iterationCount += 1;
}