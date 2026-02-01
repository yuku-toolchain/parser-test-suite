var obj = {};
var accessed = false;
this.enumerable = true;
Object.defineProperty(obj, "property", this);
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}