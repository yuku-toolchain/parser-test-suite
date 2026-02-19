var obj = (function () {
  return arguments;
})();
obj.foo = 10;
Object.seal(obj);