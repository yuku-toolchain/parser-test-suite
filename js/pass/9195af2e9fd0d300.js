if (!String.prototype.substring.hasOwnProperty('length')) {}
if (String.prototype.substring.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.substring) {
  if (p === "length") count++;
}
if (count !== 0) {}