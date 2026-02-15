if (!String.prototype.charCodeAt.hasOwnProperty('length')) {}
if (String.prototype.charCodeAt.propertyIsEnumerable('length')) {}
var count = 0;
for (var p in String.prototype.charCodeAt) {
  if (p === "length") count++;
}
if (count !== 0) {}