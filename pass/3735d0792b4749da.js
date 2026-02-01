var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
function* f({w = counter(), x = counter(), y = counter(), z = counter()}) {
  callCount = callCount + 1;
}
f({
  w: null,
  x: 0,
  y: false,
  z: ''
}).next();