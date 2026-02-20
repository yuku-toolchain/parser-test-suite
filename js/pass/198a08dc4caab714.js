function argumentsAndStrictDeleteSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  var args = arguments;
  a = 2;
}
argumentsAndStrictDeleteSetMutableBinding(1);