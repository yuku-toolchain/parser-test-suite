if (!String.prototype.search.hasOwnProperty('length')) {}
if (String.prototype.search.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.search) {
  if (p === "length") count++;
}
if (count !== 0) {}