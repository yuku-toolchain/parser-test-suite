function argumentsAndStrictDeleteDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  var args = arguments;
  Object.defineProperty(arguments, "0", {
    value: 2
  });
}
argumentsAndStrictDeleteDefineOwnProperty(1);