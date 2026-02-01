if (!String.prototype.toUpperCase.hasOwnProperty('length')) {}
if (String.prototype.toUpperCase.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.toUpperCase) {
  if (p === "length") count++;
}
if (count !== 0) {}