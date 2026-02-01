var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var accessed = false;
for (var prop in desc) {
  if (prop === "value") {
    accessed = true;
  }
}