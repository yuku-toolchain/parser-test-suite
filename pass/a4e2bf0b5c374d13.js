function argumentsAndDelete(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
}
argumentsAndDelete(1);