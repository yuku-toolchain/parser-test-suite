function longDenseArray() {
  var a = [0];
  for (var i = 0; i < 1024; i++) {
    a[i] = i;
  }
  return a;
}
function shorten() {
  currArray.length = 20;
  return 1000;
}
var array = [];
array.length = 20;
var currArray = longDenseArray();
currArray = longDenseArray();
Object.setPrototypeOf(currArray, longDenseArray());
var array2 = longDenseArray();
array2.length = 20;
for (var i = 0; i < 24; i++) {
  array2[i] = Object.getPrototypeOf(currArray)[i + 1000];
}