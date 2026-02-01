var obj = {};
var func = function (a, b) {
  arguments.writable = false;
  Object.defineProperties(obj, {
    property: arguments
  });
};
func();