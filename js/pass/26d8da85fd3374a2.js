var origDesc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");
var newDesc;
Array.prototype.reduce = function () {};
newDesc = Object.getOwnPropertyDescriptor(Array.prototype, "reduce");
var descArray = [origDesc, newDesc];
for (var j in descArray) {
  for (var i in descArray[j]) {
    if (i === "value") {} else {}
  }
}