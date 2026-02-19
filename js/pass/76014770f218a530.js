var N = 4;
for (var TA of typedArrayConstructors) {
  var byteLength = N * TA.BYTES_PER_ELEMENT;
  var buffer = new ArrayBuffer(byteLength, {
    maxByteLength: byteLength
  });
  var ta = new TA(buffer);
  for (var startIndex = 0; startIndex <= N; ++startIndex) {
    buffer.resize(byteLength);
    ta.fill(1);
    var start = {
      valueOf() {
        ta.buffer.resize(0);
        return startIndex;
      }
    };
    var sliced = ta.slice(start);
  }
}
for (var SourceTA of typedArrayConstructors) {
  for (var TargetTA of typedArrayConstructors) {
    var byteLength = N * SourceTA.BYTES_PER_ELEMENT;
    var buffer = new ArrayBuffer(byteLength, {
      maxByteLength: byteLength
    });
    var ta = new SourceTA(buffer);
    Object.defineProperty(ta, "constructor", {
      value: TargetTA
    });
    for (var startIndex = 0; startIndex <= N; ++startIndex) {
      buffer.resize(byteLength);
      ta.fill(1);
      var start = {
        valueOf() {
          ta.buffer.resize(0);
          return startIndex;
        }
      };
      var sliced = ta.slice(start);
    }
  }
}