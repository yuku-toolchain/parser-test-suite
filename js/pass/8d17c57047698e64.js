var str = new String("abc");
var tempArray = [];
for (var p in str) {
  if (str.hasOwnProperty(p)) {
    tempArray.push(p);
  }
}
var returnedArray = Object.keys(str);
for (var index in returnedArray) {}