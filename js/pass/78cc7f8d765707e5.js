if (!String.prototype.charAt.hasOwnProperty('length')) {}
if (String.prototype.charAt.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.charAt) {
  if (p === "length") count++;
}
if (count !== 0) {}