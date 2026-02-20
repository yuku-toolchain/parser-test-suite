var argObj = (function () {
  return arguments;
})();
argObj.foo = 10;
Object.freeze(argObj);