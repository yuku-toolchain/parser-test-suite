if (!String.prototype.indexOf.hasOwnProperty('length')) {}
if (String.prototype.indexOf.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.indexOf) {
  if (p === "length") count++;
}
if (count !== 0) {}