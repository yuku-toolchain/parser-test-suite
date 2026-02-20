var x = function () {
  throw "x";
};
var y = function () {
  throw "y";
};
try {
  x() instanceof y();
} catch (e) {
  if (e === "y") {} else {
    if (e !== "x") {}
  }
}