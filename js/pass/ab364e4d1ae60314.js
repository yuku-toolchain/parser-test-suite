var sparseArray = [1, 2, 4, 6];
var tempArray = [];
for (var p in sparseArray) {
  if (sparseArray.hasOwnProperty(p)) {
    tempArray.push(p);
  }
}
var returnedArray = Object.keys(sparseArray);
for (var index in returnedArray) {}