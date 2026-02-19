var obj = {};
var func = function (a, b) {
  arguments.value = "arguments";
  Object.defineProperties(obj, {
    property: arguments
  });
  return obj.property === "arguments";
};