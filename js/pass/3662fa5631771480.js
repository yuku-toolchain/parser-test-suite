var x = function () {
  throw "x";
};
var y = function () {
  throw "y";
};
try {
  (x() in y());
} catch (e) {
  if (e === "y") {} else {
    if (e !== "x") {}
  }
}