var tempObj = {};
Object.defineProperty(tempObj, "reduce", {
  get: function () {
    return 456;
  },
  enumerable: false,
  set: function () {}
});
var origDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");
var newDesc;
tempObj.reduce = 123;
newDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");
var descArray = [origDesc, newDesc];
for (var j in descArray) {
  for (var i in descArray[j]) {}
}