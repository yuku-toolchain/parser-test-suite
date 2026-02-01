var initCount = 0;
function counter() {
  initCount += 1;
}
const [w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, ''];