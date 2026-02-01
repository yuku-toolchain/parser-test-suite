var iterables = {
  a: ["A"],
  b: undefined,
  c: ["C"]
};
var it = Iterator.zipKeyed(iterables);
var results = it.next().value;