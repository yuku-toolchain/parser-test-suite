if (!String.prototype.toLowerCase.hasOwnProperty('length')) {}
if (String.prototype.toLowerCase.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.toLowerCase) {
  if (p === "length") count++;
}
if (count !== 0) {}