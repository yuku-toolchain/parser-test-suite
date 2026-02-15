if (!String.prototype.concat.hasOwnProperty('length')) {}
if (String.prototype.concat.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.concat) {
  if (p === "length") count++;
}
if (count !== 0) {}