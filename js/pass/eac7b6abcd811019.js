function argumentsAndStrictDeleteSet(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  var args = arguments;
  arguments[0] = 2;
}
argumentsAndStrictDeleteSet(1);