var array = [127, 4, 8, 16, 32, 64, 128];
var arrayIndex = -1;
function mapFn(value, index) {
  arrayIndex++;
  if (index + 1 < array.length) {
    array[index + 1] = 127;
  }
  return value;
}
var a = Array.from(array, mapFn);
for (var j = 0; j < a.length; j++) {}