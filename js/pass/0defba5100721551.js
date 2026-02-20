function argumentsNonConfigurableAndNonWritable(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false,
    writable: false
  });
  a = 2;
}
argumentsNonConfigurableAndNonWritable(1);