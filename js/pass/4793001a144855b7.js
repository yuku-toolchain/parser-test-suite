if (!String.prototype.lastIndexOf.hasOwnProperty('length')) {}
if (String.prototype.lastIndexOf.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.lastIndexOf) {
  if (p === "length") count++;
}
if (count !== 0) {}