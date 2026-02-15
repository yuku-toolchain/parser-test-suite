var obj = {};
var accessed = false;
Date.prototype.enumerable = true;
var dateObj = new Date();
Object.defineProperty(obj, "property", dateObj);
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}