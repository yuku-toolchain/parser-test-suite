var originalArray = [0, 1, -2, 4, -8, 16];
var array = [0, 1, -2, 4, -8, 16];
var a = [];
var arrayIndex = -1;
function mapFn(value, index) {
  this.arrayIndex++;
  array.splice(array.length - 1, 1);
  return 127;
}
a = Array.from(array, mapFn, this);
for (var j = 0; j < originalArray.length / 2; j++) {}