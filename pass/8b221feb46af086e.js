function body(FA) {
  var source = new FA(NaNs);
  var target = new FA(NaNs.length);
  var sourceBytes, targetBytes;
  target.set(source);
  sourceBytes = new Uint8Array(source.buffer);
  targetBytes = new Uint8Array(target.buffer);
}