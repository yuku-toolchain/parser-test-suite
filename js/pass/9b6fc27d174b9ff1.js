Object.defineProperty(fnGlobalObject(), 'f', {
  value: function () {
    return 'Another function';
  },
  enumerable: true,
  writable: true,
  configurable: false
});
eval('switch (1) {' + '  case 1:' + '    function f() { return "function declaration"; }' + '}\
  ');