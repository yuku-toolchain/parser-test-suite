if (!String.prototype.toLocaleUpperCase.hasOwnProperty('length')) {}
if (String.prototype.toLocaleUpperCase.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.toLocaleUpperCase) {
  if (p === "length") count++;
}
if (count !== 0) {}