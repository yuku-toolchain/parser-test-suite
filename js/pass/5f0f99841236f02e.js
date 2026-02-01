var x = {
  valueOf: function () {
    throw "x";
  }
};
var y = {
  valueOf: function () {
    throw "y";
  }
};
try {
  x | y;
} catch (e) {
  if (e === "y") {} else {
    if (e !== "x") {}
  }
}