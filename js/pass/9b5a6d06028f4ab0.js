var propertyFound = false;
var obj = {
  "": "empty"
};
var result = Object.getOwnPropertyNames(obj);
for (var p in result) {
  if (result[p] === "") {
    propertyFound = true;
    break;
  }
}