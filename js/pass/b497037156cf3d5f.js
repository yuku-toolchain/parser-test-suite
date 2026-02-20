var base = {};
var derived = Object.create(base);
function getter() {
  return 'gotten';
}
Object.defineProperty(base, 'foo', {
  get: getter
});