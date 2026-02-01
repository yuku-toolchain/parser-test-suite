var array = [0];
var iterationCount = 0;
for (var x of array) {
  array.push(1);
  array.pop();
  iterationCount += 1;
}