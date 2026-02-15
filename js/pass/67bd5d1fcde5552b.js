var initial = null;
Object.defineProperty(this, 'f', {
  enumerable: false,
  writable: false,
  configurable: true
});
eval('initial = f; function f() { return 345; }');