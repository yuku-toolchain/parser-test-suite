var initCount = 0;
function counter() {
  initCount += 1;
}
var [w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, ''];