var obj = {
  "property": "ownDataProperty"
};
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var propDefined = ("writable" in desc);
delete desc.writable;
var propDeleted = ("writable" in desc);