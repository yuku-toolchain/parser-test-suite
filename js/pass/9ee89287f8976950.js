var argObj = (function () {
  return arguments;
})();
var preCheck = Object.isExtensible(argObj);
Object.seal(argObj);