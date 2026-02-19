async function* asyncGen() {
  for (let i = 0; i < 4; i++) {
    yield Promise.resolve(i * 2);
  }
}
function syncMap(val, ix) {
  return val * ix;
}