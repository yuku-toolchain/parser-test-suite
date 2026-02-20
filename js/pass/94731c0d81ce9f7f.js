var array = [0, 1];
var iterationCount = 0;
for (var x of array) {
  array.pop();
  iterationCount += 1;
}