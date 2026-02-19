var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var propDefined = ("enumerable" in desc);
delete desc.enumerable;
var propDeleted = ("enumerable" in desc);