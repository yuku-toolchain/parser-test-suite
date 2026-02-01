function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
}
argumentsNonConfigurable(1);