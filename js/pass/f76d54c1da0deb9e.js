function argumentsAndDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  Object.defineProperty(arguments, "0", {
    value: 2
  });
}
argumentsAndDefineOwnProperty(1);