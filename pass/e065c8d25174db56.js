function argumentsAndStrictDelete(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  var args = arguments;
}
argumentsAndStrictDelete(1);