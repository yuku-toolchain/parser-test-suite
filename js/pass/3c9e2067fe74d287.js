var initCount = 0;
function counter() {
  initCount += 1;
}
var ranCatch = false;
try {
  throw [null, 0, false, ''];
} catch ([w = counter(), x = counter(), y = counter(), z = counter()]) {
  ranCatch = true;
}