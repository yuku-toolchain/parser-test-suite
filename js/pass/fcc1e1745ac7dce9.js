var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
for (let {w = counter(), x = counter(), y = counter(), z = counter()} of [{
  w: null,
  x: 0,
  y: false,
  z: ''
}]) {
  iterCount += 1;
}