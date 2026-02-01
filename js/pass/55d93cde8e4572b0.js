var arg;
(function fun() {
  arg = arguments;
})(1, 2, 3);
Object.preventExtensions(arg);