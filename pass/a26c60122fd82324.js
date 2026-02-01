let initCount = 0;
const counter = function () {
  initCount += 1;
};
const arrow = (x = counter()) => x;
function fn(x, y = counter()) {
  return y;
}