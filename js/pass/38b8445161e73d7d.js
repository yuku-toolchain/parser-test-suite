var initCount = 0;
function counter() {
  initCount += 1;
}
var iterCount = 0;
for (const [w = counter(), x = counter(), y = counter(), z = counter()] of [[null, 0, false, '']]) {
  iterCount += 1;
}