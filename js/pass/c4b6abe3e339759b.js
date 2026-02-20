var rest;
var counter = 0;
for ({...rest} of ["foo"]) {
  counter += 1;
}