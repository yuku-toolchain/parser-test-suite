function argumentsNonConfigurableThenNonWritableWithInterveningSet(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  arguments[0] = 2;
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  a = 3;
}
argumentsNonConfigurableThenNonWritableWithInterveningSet(1);