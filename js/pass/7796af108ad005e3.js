var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var propDefined = ("value" in desc);
delete desc.value;
var propDeleted = ("value" in desc);