function argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  a = 2;
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 3;
}
argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(1);