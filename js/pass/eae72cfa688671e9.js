if (!String.hasOwnProperty('prototype')) {}
if (String.propertyIsEnumerable('prototype')) {}
var count = 0;
for (var p in String) {
  if (p === "prototype") count++;
}
if (count !== 0) {}