var counter = 0;
var object = {
  toString: function () {
    counter++;
    return "";
  }
};
[object, object].sort();
if (counter < 2) {}