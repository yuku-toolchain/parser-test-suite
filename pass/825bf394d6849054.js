testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([40n, 41n, 42n]);
  var expectedOffset = TA.BYTES_PER_ELEMENT;
  var result, ctorThis;
  sample.constructor = {};
  sample.constructor[Symbol.species] = function (buffer, offset, length) {
    result = arguments;
    ctorThis = this;
    return new TA(buffer, offset, length);
  };
  sample.subarray(1);
});