function argumentsAndDeleteSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 2;
}
argumentsAndDeleteSetMutableBinding(1);