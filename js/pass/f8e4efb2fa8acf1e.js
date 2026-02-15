function argumentsNonWritableThenNonConfigurableWithInterveningDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  Object.defineProperty(arguments, "0", {
    value: 2
  });
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 3;
}
argumentsNonWritableThenNonConfigurableWithInterveningDefineOwnProperty(1);