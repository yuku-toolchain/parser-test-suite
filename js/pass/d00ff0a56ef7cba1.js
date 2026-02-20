function argumentsAndSetByIndex(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  arguments[0] = 2;
}
argumentsAndSetByIndex(1);