var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var propDefined = ("configurable" in desc);
delete desc.configurable;
var propDeleted = ("configurable" in desc);