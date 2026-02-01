if (!String.prototype.match.hasOwnProperty('length')) {}
if (String.prototype.match.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.match) {
  if (p === "length") count++;
}
if (count !== 0) {}