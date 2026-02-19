if (!String.prototype.toLocaleLowerCase.hasOwnProperty('length')) {}
if (String.prototype.toLocaleLowerCase.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.toLocaleLowerCase) {
  if (p === "length") count++;
}
if (count !== 0) {}