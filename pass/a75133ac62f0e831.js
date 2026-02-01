var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
for (const {s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()} of [{
  s: null,
  u: 0,
  w: false,
  y: ''
}]) {
  iterCount += 1;
}