function getArgumentsObject() {
  return arguments;
}
var a = getArgumentsObject([1], [2]);
var actual = [].flat.call(a);
a = {
  length: 1,
  0: [1]
};
actual = [].flat.call(a);
a = {
  length: undefined,
  0: [1]
};
actual = [].flat.call(a);