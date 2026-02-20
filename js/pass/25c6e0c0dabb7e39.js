function argumentsNonConfigurableThenNonWritable(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  a = 2;
}
argumentsNonConfigurableThenNonWritable(1);