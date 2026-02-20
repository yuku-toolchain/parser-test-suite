function TestWithConstructor(ctor) {
  var regexp = /\w/g;
  regexp.constructor = {
    [Symbol.species]: ctor
  };
  var str = 'a*b';
}
TestWithConstructor(undefined);
TestWithConstructor(null);