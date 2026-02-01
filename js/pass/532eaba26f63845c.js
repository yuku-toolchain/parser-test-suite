var x = function () {
  throw "x";
};
var y = function () {
  throw "y";
};
function f_arg() {}
try {
  f_arg(x(), y());
} catch (e) {
  if (e === "y") {} else {
    if (e !== "x") {}
  }
}