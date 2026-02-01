function argumentsAndSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 2;
}
argumentsAndSetMutableBinding(1);