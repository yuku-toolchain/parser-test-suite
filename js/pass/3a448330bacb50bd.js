var initCount = 0;
function counter() {
  initCount += 1;
}
var {w = counter(), x = counter(), y = counter(), z = counter()} = {
  w: null,
  x: 0,
  y: false,
  z: ''
};