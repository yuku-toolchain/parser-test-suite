Object.defineProperty(this, 'configurable', {
  configurable: true,
  writable: false,
  enumerable: false,
  value: 0
});
Object.defineProperty(this, 'nonConfigurable', {
  configurable: false,
  writable: false,
  enumerable: false,
  value: 0
});
Object.preventExtensions(this);