const arrayLike = {
  length: 4,
  0: 0,
  1: 2,
  2: Promise.resolve(4),
  3: 6
};
function syncMap(val, ix) {
  return val * ix;
}