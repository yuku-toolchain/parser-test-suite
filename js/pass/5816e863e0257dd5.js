var initCount = 0;
function counter() {
  initCount += 1;
}
var ranCatch = false;
try {
  throw {
    s: null,
    u: 0,
    w: false,
    y: ''
  };
} catch ({s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()}) {
  ranCatch = true;
}