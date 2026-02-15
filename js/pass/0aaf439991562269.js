function* syncGen() {
  for (let i = 0; i < 4; i++) {
    yield i * 2;
  }
}
async function asyncMap(val, ix) {
  return Promise.resolve(val * ix);
}