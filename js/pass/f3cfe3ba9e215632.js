var arrayIndex = -1;
var originalLength = 7;
var obj = {
  length: originalLength,
  0: 2,
  1: 4,
  2: 8,
  3: 16,
  4: 32,
  5: 64,
  6: 128
};
var array = [2, 4, 8, 16, 32, 64, 128];
function mapFn(value, index) {
  arrayIndex++;
  obj[originalLength + arrayIndex] = 2 * arrayIndex + 1;
  return obj[arrayIndex];
}
var a = Array.from(obj, mapFn);
for (var j = 0; j < a.length; j++) {}