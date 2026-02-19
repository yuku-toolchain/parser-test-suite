testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA([42n]);
  $DETACHBUFFER(sample.buffer);
  sample[0] = 1n;
  sample['1.1'] = 1n;
  sample['-0'] = 1n;
  sample['-1'] = 1n;
  sample['1'] = 1n;
  sample['2'] = 1n;
  let obj = {
    valueOf() {}
  };
});