Object.defineProperty(fnGlobalObject(), 'f', {
  value: function () {
    return 'Another function';
  },
  enumerable: true,
  writable: true,
  configurable: false
});
(0, eval)('if (true) function f() { return "function declaration"; } else function _f() {}');