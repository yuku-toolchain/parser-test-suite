var propertyFound = false;
var obj = {
  "a": "a"
};
var result = Object.getOwnPropertyNames(obj);
for (var p in result) {
  if (result[p] === "a") {
    propertyFound = true;
    break;
  }
}