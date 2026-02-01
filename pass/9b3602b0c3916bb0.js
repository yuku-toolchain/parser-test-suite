var o = {
  foo: 42
};
with (o) {
  var foo = "set in with";
}