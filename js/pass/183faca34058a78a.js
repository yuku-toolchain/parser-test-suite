function argumentsAndDeleteSet(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  arguments[0] = 2;
}
argumentsAndDeleteSet(1);