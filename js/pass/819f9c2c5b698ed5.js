var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
desc.value = "overwriteDataProperty";