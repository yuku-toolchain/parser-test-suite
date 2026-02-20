var buffer = new SharedArrayBuffer(8);
var sample = new DataView(buffer, 0);
Object.defineProperty(sample, 'baz', {});
Object.defineProperty(sample, 'foo', {
  value: 'bar',
  writable: true,
  configurable: true,
  enumerable: false
});