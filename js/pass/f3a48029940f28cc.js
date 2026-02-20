if (!String.prototype.slice.hasOwnProperty('length')) {}
if (String.prototype.slice.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.slice) {
  if (p === "length") count++;
}
if (count !== 0) {}