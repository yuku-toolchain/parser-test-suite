if (!String.prototype.localeCompare.hasOwnProperty('length')) {}
if (String.prototype.localeCompare.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.localeCompare) {
  if (p === "length") count++;
}
if (count !== 0) {}