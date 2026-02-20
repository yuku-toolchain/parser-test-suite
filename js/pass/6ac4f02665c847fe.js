Object.defineProperty(this, 'configurable', {
  configurable: true,
  value: 0
});
Object.defineProperty(this, 'nonConfigurable', {
  configurable: false,
  writable: true,
  enumerable: true,
  value: 0
});
Object.preventExtensions(this);