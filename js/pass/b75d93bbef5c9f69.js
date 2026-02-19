var rejectFunction;
new Promise(function (_, reject) {
  rejectFunction = reject;
});
var propNames = Object.getOwnPropertyNames(rejectFunction);
var lengthIndex = propNames.indexOf("length");
var nameIndex = propNames.indexOf("name");