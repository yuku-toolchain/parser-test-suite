const arrayLike = {
  length: 4,
  0: 0,
  1: 2,
  2: Promise.resolve(4),
  3: 6
};
async function asyncMap(val, ix) {
  return Promise.resolve(val * ix);
}