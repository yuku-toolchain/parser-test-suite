var initCount = 0;
function counter() {
  initCount += 1;
}
var ranCatch = false;
try {
  throw {
    w: null,
    x: 0,
    y: false,
    z: ''
  };
} catch ({w = counter(), x = counter(), y = counter(), z = counter()}) {
  ranCatch = true;
}