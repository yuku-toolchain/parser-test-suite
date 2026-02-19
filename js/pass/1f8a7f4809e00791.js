function argumentsNonConfigurableThenNonWritableWithDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  Object.defineProperty(arguments, "0", {
    value: 2
  });
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  a = 3;
}
argumentsNonConfigurableThenNonWritableWithDefineOwnProperty(1);