var resolveFunction;
new Promise(function (resolve) {
  resolveFunction = resolve;
});
var propNames = Object.getOwnPropertyNames(resolveFunction);
var lengthIndex = propNames.indexOf("length");
var nameIndex = propNames.indexOf("name");