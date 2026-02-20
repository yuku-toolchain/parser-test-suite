var initial;
Object.defineProperty(this, 'f', {
  enumerable: true,
  writable: true,
  configurable: false
});
eval('initial = f; function f() { return 2222; }');