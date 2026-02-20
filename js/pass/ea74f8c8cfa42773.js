var a = "foo";
var counter = 0;
for ({[a]: b, ...rest} of [{
  foo: 1,
  bar: 2,
  baz: 3
}]) {
  counter += 1;
}