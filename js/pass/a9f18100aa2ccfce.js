function argumentsNonWritableThenNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 2;
}
argumentsNonWritableThenNonConfigurable(1);