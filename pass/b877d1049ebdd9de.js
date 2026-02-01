var initCount = 0;
function counter() {
  initCount += 1;
}
let [w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, ''];