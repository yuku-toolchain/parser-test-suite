var obj = {};
var accessed = false;
var fun = function () {};
fun.enumerable = true;
Object.defineProperty(obj, "property", fun);
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}