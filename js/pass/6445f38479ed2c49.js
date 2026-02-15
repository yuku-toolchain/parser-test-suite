function* syncGen() {
  for (let i = 0; i < 4; i++) {
    yield i * 2;
  }
}
function syncMap(val, ix) {
  return val * ix;
}