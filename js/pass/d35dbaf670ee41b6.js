var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var accessed = false;
for (var props in desc) {
  if (props === "enumerable") {
    accessed = true;
  }
}