var rest;
var counter = 0;
for ({...rest} of [Symbol("foo")]) {
  counter += 1;
}