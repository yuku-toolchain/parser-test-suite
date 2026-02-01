const a = undefined;
const c = {
  d: Promise.resolve(11)
};
async function checkAssertions() {
  Promise.prototype.x = 42;
  var res = await Promise.resolve(undefined)?.x;
  Promise.prototype.y = 43;
  var res = await Promise.reject(undefined)?.y;
  c.e = Promise.resolve(39);
}